import { blogPosts } from '@/lib/blogPosts'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | AIS — AI Lead Generation Insights',
  description:
    'Practical articles on AI-powered lead generation, sales conversion, and how modern B2B teams are using technology to build better pipelines.',
}

const categoryColours: Record<string, string> = {
  'Lead Generation': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'AI & Technology': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Sales Strategy': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Marketing Strategy': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 text-sm font-medium mb-4">AIS Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thinking on AI, sales, and pipeline growth
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Practical articles based on published research and real-world observations — no hype, no filler.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-12"
          >
            <article className="bg-gradient-to-br from-blue-950/40 to-slate-900/60 border border-blue-500/20 rounded-xl p-8 hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full border ${categoryColours[featured.category] ?? 'bg-white/5 text-gray-400 border-white/10'}`}>
                  {featured.category}
                </span>
                <span className="text-gray-500 text-sm">{featured.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <time dateTime={featured.publishedAt}>{formatDate(featured.publishedAt)}</time>
                </div>
                <span className="text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Read article →
                </span>
              </div>
            </article>
          </Link>

          {/* Remaining posts */}
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full border ${categoryColours[post.category] ?? 'bg-white/5 text-gray-400 border-white/10'}`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/5">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to see AIS in action?</h2>
          <p className="text-gray-400 mb-8">
            The ideas in these articles come to life when you see how the platform actually works with your traffic.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            Explore the platform
          </Link>
        </div>
      </section>
    </div>
  )
}
