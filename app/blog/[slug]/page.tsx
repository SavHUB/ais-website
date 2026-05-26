import { getBlogPostBySlug, blogPosts } from '@/lib/blogPosts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | AIS Blog`,
    description: post.excerpt,
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-white mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={key++} className="font-semibold text-white mb-2">
          {line.replace(/\*\*/g, '')}
        </p>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="mb-2" />)
    } else {
      // Handle inline bold within paragraphs
      const parts = line.split(/(\*\*[^*]+\*\*)/)
      elements.push(
        <p key={key++} className="text-gray-300 leading-relaxed mb-4">
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i} className="text-white font-semibold">{part.replace(/\*\*/g, '')}</strong>
            }
            return part
          })}
        </p>
      )
    }
  }

  return elements
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter(
    (p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
  ).slice(0, 2)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 text-sm hover:text-cyan-300 transition-colors mb-8"
          >
            ← Back to blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2 py-1 rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/20">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-white text-sm font-medium">{post.author}</p>
              <p className="text-gray-500 text-xs">{post.authorRole} · <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></p>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Related reading</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group block bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <p className="text-xs text-cyan-400 mb-2">{related.category}</p>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                    {related.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{related.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">See these ideas in practice</h2>
          <p className="text-gray-400 mb-6">
            Explore the platform and see how AIS applies these principles to your website.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            Back to AIS
          </Link>
        </div>
      </section>
    </div>
  )
}
