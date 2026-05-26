export type CompanyType = 'saas' | 'agency' | 'ecommerce' | 'services' | 'general';

export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface ConversationFlow {
  id: string;
  label: string;
  initialMessage: string;
  responses: {
    [key: string]: {
      message: string;
      followUpOptions?: string[];
      showLeadForm?: boolean;
    };
  };
}

export const demoFlows: Record<CompanyType, ConversationFlow> = {
  saas: {
    id: 'saas',
    label: 'SaaS Company',
    initialMessage: "Hi! 👋 I'm your AI Sales Executive. I help SaaS companies capture more qualified leads and convert them into customers. What would you like to know?",
    responses: {
      'lead-capture': {
        message: "Great question! We use AI to automatically engage website visitors with intelligent conversations, qualify leads in real-time, and only pass the best opportunities to your sales team. This means you capture 65%+ of visitors that normally bounce, while your team focuses only on hot leads. That's like having a tireless sales rep working 24/7. What else would you like to know?",
        followUpOptions: ['Tell me about ROI', 'How long does implementation take?'],
      },
      'roi': {
        message: "Our customers typically see:\n\n📈 65%+ form completion rates (vs 25% industry average)\n💰 5-10x improvement in qualified lead volume\n⏱️ 60% faster sales cycles\n🎯 $500K-$2M+ annual revenue impact\n\nA typical SaaS company with 5K monthly visitors goes from ~30 qualified leads/month to 150+ qualified leads. The best part? You only pay for qualified leads. Want to see your specific potential?",
        followUpOptions: ['Show me my ROI', 'How soon can we start?'],
        showLeadForm: true,
      },
      'timeline': {
        message: "Implementation is surprisingly fast:\n\n⚡ Setup & integration: 2-3 days\n🤖 AI training on your messaging: 3-5 days\n✅ Live & optimizing: Week 2\n\nMost customers see meaningful results within the first month. We handle everything—you just connect your platforms and we handle the rest. Ready to get started?",
        followUpOptions: ['Yes, let\'s talk', 'Tell me more'],
        showLeadForm: true,
      },
    },
  },
  agency: {
    id: 'agency',
    label: 'Agency',
    initialMessage: "Hi! 👋 I'm your AI Sales Executive. I help agencies like yours generate more qualified leads for your services and manage prospects 24/7. How can I assist you?",
    responses: {
      'lead-capture': {
        message: "For agencies, we're a game-changer. We automatically capture and qualify inbound prospects that normally get lost. We also nurture prospects outside business hours, so no lead goes cold. Your sales team gets a curated list of pre-qualified opportunities daily—zero admin work. Most agencies see their lead volume double within 90 days.",
        followUpOptions: ['What about ROI?', 'How does implementation work?'],
      },
      'roi': {
        message: "Typical agency results:\n\n📈 From 10-15 leads/month → 40-60 qualified leads/month\n💰 $1M-$4M+ annual revenue impact\n⏱️ 50% reduction in sales cycle length\n👥 Client retention up 30% (faster response = better service)\n\nBest part? Your team can take on more clients because the AI handles lead qualification and follow-up. Want me to calculate your specific potential?",
        followUpOptions: ['Show me my numbers', 'Tell me about implementation'],
        showLeadForm: true,
      },
      'timeline': {
        message: "Super simple process:\n\n📋 Onboarding call: 1 day\n⚙️ Connect to your CRM: 2-3 days\n🎯 AI training: 3-5 days\n✨ Live: Day 10\n\nWe're designed specifically for agencies, so integration is plug-and-play. No code required. Your first qualified leads come in the first week.",
        followUpOptions: ['Let\'s get started', 'Ask me something else'],
        showLeadForm: true,
      },
    },
  },
  ecommerce: {
    id: 'ecommerce',
    label: 'E-Commerce',
    initialMessage: "Hi! 👋 I'm your AI Sales Executive. I help e-commerce companies recover abandoned carts and drive more sales. What would you like to know?",
    responses: {
      'lead-capture': {
        message: "We engage your site visitors instantly—asking qualifying questions, recommending products, and capturing contact info from people who typically bounce. The AI learns your product catalog and customer preferences, so it gets smarter every day. Most e-commerce sites recover 20-30% of abandoned carts they otherwise lose.",
        followUpOptions: ['What\'s the ROI?', 'How long to set up?'],
      },
      'roi': {
        message: "E-commerce results are immediate:\n\n💵 20-30% abandoned cart recovery (that's free money!)\n📈 Average order value up 15-25% (upsells)\n👥 Email list grows 10x faster\n💰 $500K-$3M+ annual revenue impact\n\nExample: 5K monthly visitors, 2% add-to-cart rate = 100 carts. Recover just 25% of those at average $150 order = $375K annually. And we can get you higher than 25%.",
        followUpOptions: ['Show me my potential', 'How do we start?'],
        showLeadForm: true,
      },
      'timeline': {
        message: "Lightning fast setup:\n\n🔌 Connect Shopify/WooCommerce: 1 day\n📦 Upload product catalog: 1-2 days\n🤖 AI training: 2-3 days\n🚀 Live and earning: Day 5\n\nYou'll see your first recovered carts in the first 48 hours. Our AI handles everything—you just watch the conversions roll in.",
        followUpOptions: ['I\'m ready', 'Tell me more'],
        showLeadForm: true,
      },
    },
  },
  services: {
    id: 'services',
    label: 'Services Business',
    initialMessage: "Hi! 👋 I'm your AI Sales Executive. I help service businesses like yours qualify leads automatically and close deals faster. What can I help with?",
    responses: {
      'lead-capture': {
        message: "Here's the problem we solve: you get inbound inquiries, but many aren't qualified or aren't the right fit. They sit in your inbox. With us, every inquiry gets instantly qualified by AI. Your sales team only gets the hot prospects. For service businesses, this means you stop wasting time on unqualified leads and close deals 50% faster.",
        followUpOptions: ['What about revenue impact?', 'How does it work?'],
      },
      'roi': {
        message: "Service businesses typically see:\n\n⚡ 70%+ faster sales response (we respond instantly 24/7)\n📈 3-5x more qualified leads\n💰 $300K-$2M+ annual revenue impact\n🎯 Higher close rates (pre-qualified = more likely to convert)\n\nA consultant with 20 inquiries/month might get 8 qualified. With us? 16-20 qualified. That's doubling or tripling revenue from the same traffic.",
        followUpOptions: ['Show me my potential', 'Let\'s talk implementation'],
        showLeadForm: true,
      },
      'timeline': {
        message: "Quick and painless:\n\n💬 Discovery call: 1 day\n⚙️ Setup your qualification criteria: 2-3 days\n🤖 AI training: 3-5 days\n✅ Live: Day 8\n\nFirst qualified leads start coming immediately. We learn your business quickly, so the AI gets better every day.",
        followUpOptions: ['I\'m interested', 'What else?'],
        showLeadForm: true,
      },
    },
  },
  general: {
    id: 'general',
    label: 'General',
    initialMessage: "Hi! 👋 I'm your AI Sales Executive. I help businesses capture more qualified leads and improve their sales process. What brings you here today?",
    responses: {
      'about': {
        message: "We're an AI-powered sales assistant that works 24/7 on your website. We engage visitors, qualify leads in real-time, and only escalate the best opportunities to your team. Think of us as your tireless sales rep that never sleeps, never forgets a follow-up, and gets smarter every day.",
        followUpOptions: ['How much does it cost?', 'What\'s the result?'],
      },
      'results': {
        message: "Our customers typically see:\n\n📈 65%+ form completion (vs 25% average)\n💰 5-10x more qualified leads\n⏱️ 50%+ faster sales cycles\n🎯 $500K-$5M+ annual revenue impact\n\nThe exact number depends on your business type, but the pattern is consistent: more leads, better quality, faster closes.",
        followUpOptions: ['Calculate my ROI', 'Tell me more'],
        showLeadForm: true,
      },
      'timeline': {
        message: "We're designed for speed:\n\n⚡ Setup: 2-5 days\n🤖 AI training: 3-7 days\n✅ Live: Week 2\n\nMost customers see meaningful improvements in the first 30 days. We handle all the technical stuff—you just provide your business info and connect your platforms.",
        followUpOptions: ['Let\'s start', 'Ask something else'],
        showLeadForm: true,
      },
    },
  },
};

export const suggestedQuestions: Record<CompanyType, string[]> = {
  saas: [
    'How do you capture leads?',
    'What kind of ROI should I expect?',
    'How long does implementation take?',
  ],
  agency: [
    'How will this help my agency?',
    'What\'s the revenue impact?',
    'How do we get started?',
  ],
  ecommerce: [
    'How do you recover abandoned carts?',
    'What\'s the ROI?',
    'How fast can you set this up?',
  ],
  services: [
    'How do you qualify leads?',
    'What results should I expect?',
    'What\'s the timeline?',
  ],
  general: [
    'Tell me about your service',
    'What kind of results do you see?',
    'How long does setup take?',
  ],
};
