export const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Deep Learning', href: '#projects' },
  { label: 'AI Agents', href: '#agents' },
  { label: 'Contact Me', href: '#contact' },
  { label: 'Resume', href: '/resume.pdf', external: true },
];

export const heroActions = [
  { label: 'DL Projects', href: '#projects', variant: 'solid' },
  { label: 'AI Agents', href: '#agents', variant: 'outline' },
];

export const marqueeItems = [
  'Documenting the Process',
  'Building Agents',
  'Open Source',
  'Learning by Doing',
];

export const introStats = [
  { value: '10+', label: 'Technical Articles' },
  { value: '03', label: 'Core Frameworks' },
  { value: '100%', label: 'Open Source' },
];

export const deepLearningSections = [
  {
    label: 'Projects',
    title: 'Natural Language Processing',
    description:
      'Applied NLP implementations from classic sentiment modeling to modern Transformer-based pipelines, focused on end-to-end training, evaluation, and reproducibility.',
    items: [
      {
        title: 'LearnDL: Interactive Text Classification Platform',
        meta: 'React • Next.js • FastAPI • PyTorch • Firebase Auth • PostgreSQL • Redis',
        description:
          'A full-stack NLP learning platform for text classification workflows: upload or choose datasets, configure preprocessing and model settings, train asynchronously, inspect metrics and charts, archive runs per user, and run predictions with attention-style visualizations.',
        href: 'https://github.com/WoodyChang21/LearnDL',
        githubLabel: 'View GitHub',
      },
      {
        title: 'Movie Review Sentiment (LSTM vs BERT)',
        meta: 'NLP • IMDb • Text Preprocessing • LSTM • BERT Fine-tuning • Evaluation',
        description:
          'Benchmarks a sequence model against a Transformer approach for movie review sentiment classification, highlighting trade-offs in representation power, training cost, and accuracy.',
        href: 'https://github.com/WoodyChang21/Movie-Review-Sentiment-NLP',
        githubLabel: 'View GitHub',
      },
    ],
  },
  {
    label: 'Projects',
    title: 'Computer Vision',
    description:
      'Computer vision projects spanning generative modeling, recognition, and self-supervised representation learning, built as complete ML workflows.',
    items: [
      {
        title: 'Conditional GAN Colorization',
        meta: 'CNN • cGAN • Image-to-Image • Adversarial Training • Perceptual Quality',
        description:
          'Explores adversarial objectives for sharper, more realistic image colorization outputs and compares qualitative results across samples.',
        href: 'https://github.com/WoodyChang21/Conditional-GAN-Colorization',
        githubLabel: 'View GitHub',
      },
      {
        title: 'Sign Language Recognition',
        meta: 'CNN • Classification • Video/Frames • Data Pipeline • Metrics',
        description:
          'An end-to-end sign language recognition pipeline that emphasizes dataset handling, augmentation, and robust validation.',
        href: 'https://github.com/WoodyChang21/Sign-Language-Recognition',
        githubLabel: 'View GitHub',
      },
      {
        title: 'Self-Supervised Detection & Classification',
        meta: 'Self-Supervised Learning • Representation Learning • Object Detection • Transfer',
        description:
          'Studies self-supervised representations and how they transfer to downstream detection and classification tasks with minimal labels.',
        href: 'https://github.com/WoodyChang21/Self-Supervised-Object-Detection-and-Classification',
        githubLabel: 'View GitHub',
      },
    ],
  },
];

export const agentSections = [
  {
    label: 'Articles',
    title: 'MCP Protocols',
    description:
      'Researching the Model Context Protocol to standardize how agents connect with external tools and data.',
    items: [
      {
        title: 'MCP Fundamentals: Building Your First Server',
        meta: 'LangChain • Python • Model Context Protocol • Streamlit • Server-Sent Events',
        description:
          'An introduction to MCP that covers the architecture, first server implementation, and hands-on examples for tool-connected agents.',
        href: 'https://hackmd.io/@WoodyChang/SyYDcAoL-e',
        githubHref: 'https://github.com/WoodyChang21/MCP',
        githubLabel: 'View GitHub',
      },
      {
        title: 'MCP + LangChain: From NPX to Production',
        meta: 'LangChain • Python • Model Context Protocol • Streamlit • Server-Sent Events',
        description:
          'Shows how to connect LangChain agents to pre-built MCP servers and evolve them into production-ready AI applications.',
        href: 'https://hackmd.io/@WoodyChang/r12boRi8bl',
        githubHref: 'https://github.com/WoodyChang21/MCP',
        githubLabel: 'View GitHub',
      },
    ],
  },
  {
    label: 'Articles',
    title: 'LangGraph Systems',
    description:
      'Moving from chains to cyclic graphs and building orchestration layers for complex, multi-step reasoning tasks.',
    items: [
      {
        title: 'AI-Powered SQL & Visualization Swarm',
        meta: 'LangGraph • Docker • Redis • AWS S3 • PostgreSQL • Open WebUI',
        description:
          'Builds a production-ready multi-agent system where specialized agents coordinate SQL querying and data visualization workflows.',
        href: 'https://hackmd.io/@WoodyChang/SyWIi0oUZe',
        githubHref: 'https://github.com/WoodyChang21/langgraph_data_swarm',
        githubLabel: 'View GitHub',
      },
      {
        title: 'Advanced RAG with Self Evaluation',
        meta: 'LangGraph • Python • LangSmith • Pydantic • API Integration',
        description:
          'Explores sophisticated retrieval patterns and graph-based reasoning for stronger multi-step RAG systems.',
        href: 'https://hackmd.io/@WoodyChang/r1NdoCs8bg',
      },
      {
        title: 'MongoDB Query & Visualization with NL',
        meta: 'LangGraph • MongoDB • Python • Data Visualization • Matplotlib',
        description:
          'Demonstrates a pipeline that turns natural-language questions into MongoDB queries and executable chart-generation code.',
        href: 'https://hackmd.io/@WoodyChang/BJ-is0oLZe',
      },
      {
        title: 'Document Web Crawling + RAG Chatbot',
        meta: 'LangChain • Pinecone • MongoDB Atlas • Web Scraping • OpenAI API',
        description:
          'Implements a document-aware chatbot with web crawling, ingestion, semantic search, and context-aware responses.',
        href: 'https://hackmd.io/@WoodyChang/r1sk20s8bg',
        githubHref: 'https://github.com/WoodyChang21/LangGraph_RAG_Chatbot',
        githubLabel: 'View GitHub',
      },
    ],
  },
  {
    label: 'Articles',
    title: 'Semantic Kernel',
    description:
      "A deep dive into Microsoft's SDK, with a focus on memory management, security, and plugin architecture.",
    items: [
      {
        title: 'Creating AI Agents with Semantic Kernel',
        meta: 'Semantic Kernel • Python • Azure OpenAI • REST API',
        description:
          'Explains how a plugin-oriented single-agent architecture can outperform more rigid multi-agent designs for multi-intent requests.',
        href: 'https://hackmd.io/@WoodyChang/B1FGn0oIbg',
      },
      {
        title: 'Memory Management Evolution',
        meta: 'Python • Redis • NoSQL • Data Serialization',
        description:
          'Covers the evolution of conversation memory systems and introduces a stronger architecture for context preservation and tool-call tracking.',
        href: 'https://hackmd.io/@WoodyChang/ryLE3CsIbe',
      },
      {
        title: 'User Permission System (RBAC) Implementation',
        meta: 'Semantic Kernel • Python • Authentication • REST API • RBAC',
        description:
          'Walks through function-level access control and enterprise-friendly authentication patterns for chatbot systems.',
        href: 'https://hackmd.io/@WoodyChang/rkeVo3AoIbe',
      },
    ],
  },
  {
    label: 'Articles',
    title: 'Prompt Engineering',
    description:
      'The science of communication with LLMs, with techniques for consistency and reliability.',
    items: [
      {
        title: 'A Practical Guide to Effective LLM Prompts',
        meta: 'Best Practices • Methodology',
        description:
          'Introduces prompt anatomy, common prompting paradigms, and practical templates for more reliable LLM outputs.',
        href: 'https://hackmd.io/@WoodyChang/SyA32RjL-g',
      },
    ],
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/WoodyChang21' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/woody-chang/' },
  { label: 'Email', href: 'mailto:contact@woodychang.ai' },
  { label: 'Resume', href: '/resume.pdf' },
];
