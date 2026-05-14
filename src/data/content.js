const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

export const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Deep Learning', href: '#projects' },
  { label: 'AI Agents', href: '#agents' },
  { label: 'Contact Me', href: '#contact' },
  { label: 'Resume', href: resumeHref, external: true },
];

export const heroActions = [
  { label: 'Experience', href: '#experience', variant: 'outline' },
  { label: 'DL Projects', href: '#projects', variant: 'solid' },
  { label: 'AI Agents', href: '#agents', variant: 'outline' },
];

export const marqueeItems = [
  'Documenting the Process',
  'Building Agents',
  'Open Source',
  'Learning by Doing',
];

export const workExperience = [
  {
    id: 'retailingdata',
    role: 'AI Intern',
    company: 'Ret[AI]ling Data',
    period: 'June 2025 – Dec 2025',
    type: 'Internship',
    stack: ['LangGraph', 'FastAPI', 'MongoDB Atlas', 'RAG', 'Redis', 'Docker', 'RBAC'],
    bullets: [
      'Migrated a tightly coupled RAG pipeline to a modular LangGraph agent architecture, enabling rapid chatbot deployment via data configuration and domain-specific system prompts.',
      'Built an MVP multi-agent AI system capable of generating interactive graphs from the database based on natural language input.',
      'Designed a high-precision RAG pipeline (MongoDB Atlas Vector Search + OpenAI embeddings) achieving 90–93% retrieval precision on 2,000+ QA pairs, tracked with RAGAS metrics.',
      'Implemented a containerized FastAPI backend serving 1,000+ daily users with end-to-end latency under 300 ms using Redis for session state and MongoDB for per-user persistence.',
      'Implemented RBAC for a third-party messaging chatbot, combining email verification with role enforcement to prevent unauthorized access in multi-tenant deployments.',
    ],
    defaultOpen: true,
  },
  {
    id: 'anyload',
    role: 'Software Intern',
    company: 'Anyload Weigh & Measure',
    period: 'Sept 2022 – Dec 2022',
    type: 'Internship',
    stack: ['Python', 'Full Stack', 'Google Maps API', 'MySQL'],
    bullets: [
      'Assisted in the development of an internal full-stack app used by the sales team to help them with automatic order processing.',
      'Implemented a location feature with Google Maps API for the sales team to select the most suitable inventory locations for orders.',
      'Developed a comprehensive MySQL table establishing relations between customer data and order details for order tracking.',
      'Programmed an automated inventory update mechanism triggered on every order, leading to more effective stock management.',
    ],
    defaultOpen: false,
  },
  {
    id: 'magictech',
    role: 'Software Backend Intern',
    company: 'Magic Technology',
    period: 'May 2021 – Aug 2021',
    type: 'Internship',
    stack: ['Python', 'AWS Lambda', 'AWS API Gateway', 'AWS SNS', 'REST API', 'MySQL'],
    bullets: [
      'Used Python CSV reading and writing logic to implement an intuitive file input feature, enabling the sales team to update the inventory.',
      'Created a RESTful API with AWS API Gateway integrated with AWS Lambda to facilitate reliable data interactions for the frontend application.',
      'Implemented an intuitive cost estimation tool that calculates prices by entering product serial numbers and total weight, enhancing the sales team\'s efficiency.',
      'Developed a real-time order completion alert system utilizing AWS Simple Notification Service (SNS) to trigger email notifications to subscribed sales team members.',
    ],
    defaultOpen: false,
  },
];

export const education = [
  {
    id: 'uoft',
    degree: 'M.Eng. — Data Analysis & Machine Learning',
    institution: 'University of Toronto',
    year: '2026',
    location: 'Toronto, ON',
  },
  {
    id: 'ubc',
    degree: 'B.A.Sc. — Electrical Engineering',
    institution: 'University of British Columbia',
    year: '2024',
    location: 'Vancouver, BC',
  },
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
  { label: 'Resume', href: resumeHref },
];
