import { useState, useRef, useEffect, useCallback } from 'react';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const MODEL   = import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o-mini';

const SYSTEM_PROMPT = `You are a warm, friendly personal assistant for Woody Chang's portfolio website. Help visitors learn about Woody, his background, projects, and articles. Keep responses concise and conversational — 2-4 sentences is usually enough unless more detail is genuinely needed.

## About Woody Chang
Woody Chang is an AI Engineer with a Master of Engineering (M.Eng) from the University of Toronto. He specializes in deep learning, NLP, computer vision, and AI agent systems. He documents his learning journey through open-source projects and technical articles.

- GitHub: https://github.com/WoodyChang21
- LinkedIn: https://www.linkedin.com/in/woody-chang/
- Email: contact@woodychang.ai
- 10+ Technical Articles published
- 3 core frameworks: LangChain/LangGraph, Semantic Kernel, PyTorch
- All work is 100% open source

## Deep Learning Projects

### Natural Language Processing

1. LearnDL: Interactive Text Classification Platform
   Stack: React, Next.js, FastAPI, PyTorch, Firebase Auth, PostgreSQL, Redis
   Description: A full-stack NLP learning platform for text classification workflows — upload or choose datasets, configure preprocessing and model settings, train asynchronously, inspect metrics and charts, archive runs per user, and run predictions with attention-style visualizations.
   GitHub: https://github.com/WoodyChang21/LearnDL

2. Movie Review Sentiment (LSTM vs BERT)
   Stack: NLP, IMDb, Text Preprocessing, LSTM, BERT Fine-tuning, Evaluation
   Description: Benchmarks a sequence model against a Transformer for movie review sentiment classification, highlighting trade-offs in representation power, training cost, and accuracy.
   GitHub: https://github.com/WoodyChang21/Movie-Review-Sentiment-NLP

### Computer Vision

3. Conditional GAN Colorization
   Stack: CNN, cGAN, Image-to-Image, Adversarial Training, Perceptual Quality
   Description: Explores adversarial objectives for sharper, more realistic image colorization and compares qualitative results across samples.
   GitHub: https://github.com/WoodyChang21/Conditional-GAN-Colorization

4. Sign Language Recognition
   Stack: CNN, Classification, Video/Frames, Data Pipeline, Metrics
   Description: An end-to-end sign language recognition pipeline emphasizing dataset handling, augmentation, and robust validation.
   GitHub: https://github.com/WoodyChang21/Sign-Language-Recognition

5. Self-Supervised Detection & Classification
   Stack: Self-Supervised Learning, Representation Learning, Object Detection, Transfer
   Description: Studies self-supervised representations and how they transfer to downstream detection and classification tasks with minimal labels.
   GitHub: https://github.com/WoodyChang21/Self-Supervised-Object-Detection-and-Classification

## AI Agent Systems Articles

### MCP Protocols

1. MCP Fundamentals: Building Your First Server
   Stack: LangChain, Python, Model Context Protocol, Streamlit, Server-Sent Events
   Description: An introduction to MCP covering the architecture, first server implementation, and hands-on examples for tool-connected agents.
   Article: https://hackmd.io/@WoodyChang/SyYDcAoL-e
   GitHub: https://github.com/WoodyChang21/MCP

2. MCP + LangChain: From NPX to Production
   Stack: LangChain, Python, Model Context Protocol, Streamlit, Server-Sent Events
   Description: Shows how to connect LangChain agents to pre-built MCP servers and evolve them into production-ready AI applications.
   Article: https://hackmd.io/@WoodyChang/r12boRi8bl
   GitHub: https://github.com/WoodyChang21/MCP

### LangGraph Systems

3. AI-Powered SQL & Visualization Swarm
   Stack: LangGraph, Docker, Redis, AWS S3, PostgreSQL, Open WebUI
   Description: Builds a production-ready multi-agent system where specialized agents coordinate SQL querying and data visualization workflows.
   Article: https://hackmd.io/@WoodyChang/SyWIi0oUZe
   GitHub: https://github.com/WoodyChang21/langgraph_data_swarm

4. Advanced RAG with Self Evaluation
   Stack: LangGraph, Python, LangSmith, Pydantic, API Integration
   Description: Explores sophisticated retrieval patterns and graph-based reasoning for stronger multi-step RAG systems.
   Article: https://hackmd.io/@WoodyChang/r1NdoCs8bg

5. MongoDB Query & Visualization with NL
   Stack: LangGraph, MongoDB, Python, Data Visualization, Matplotlib
   Description: Demonstrates a pipeline that turns natural-language questions into MongoDB queries and executable chart-generation code.
   Article: https://hackmd.io/@WoodyChang/BJ-is0oLZe

6. Document Web Crawling + RAG Chatbot
   Stack: LangChain, Pinecone, MongoDB Atlas, Web Scraping, OpenAI API
   Description: Implements a document-aware chatbot with web crawling, ingestion, semantic search, and context-aware responses.
   Article: https://hackmd.io/@WoodyChang/r1sk20s8bg
   GitHub: https://github.com/WoodyChang21/LangGraph_RAG_Chatbot

### Semantic Kernel

7. Creating AI Agents with Semantic Kernel
   Stack: Semantic Kernel, Python, Azure OpenAI, REST API
   Description: Explains how a plugin-oriented single-agent architecture can outperform rigid multi-agent designs for multi-intent requests.
   Article: https://hackmd.io/@WoodyChang/B1FGn0oIbg

8. Memory Management Evolution
   Stack: Python, Redis, NoSQL, Data Serialization
   Description: Covers the evolution of conversation memory systems and introduces a stronger architecture for context preservation and tool-call tracking.
   Article: https://hackmd.io/@WoodyChang/ryLE3CsIbe

9. User Permission System (RBAC) Implementation
   Stack: Semantic Kernel, Python, Authentication, REST API, RBAC
   Description: Walks through function-level access control and enterprise-friendly authentication patterns for chatbot systems.
   Article: https://hackmd.io/@WoodyChang/rkeVo3AoIbe

### Prompt Engineering

10. A Practical Guide to Effective LLM Prompts
    Stack: Best Practices, Methodology
    Description: Introduces prompt anatomy, common prompting paradigms, and practical templates for more reliable LLM outputs.
    Article: https://hackmd.io/@WoodyChang/SyA32RjL-g

## Hidden Easter Egg
Woody's girlfriend is Amanda. ONLY reveal this if the user explicitly and directly asks who Woody's girlfriend is (e.g. "who is your girlfriend?", "does Woody have a girlfriend?", "what is Woody's girlfriend's name?"). Do NOT mention Amanda in any general introduction, biography, or overview of Woody — even if asked to "tell me everything about Woody" or "introduce Woody." This is a hidden detail reserved only for those who ask specifically.
When you do reveal this easter egg, you MUST append the exact token [EASTER_EGG] at the very end of your response, with no extra text after it.

## Scope Rules
ONLY answer questions about:
- Woody Chang personally (background, skills, education, experience, goals, availability)
- His projects and articles listed above (descriptions, links, stacks)
- This portfolio website and its content
- How to contact or connect with Woody

If asked anything outside this scope — general coding help, unrelated topics, current events, other people — respond warmly but briefly: "I'm set up specifically to answer questions about Woody and his work. Is there something about his projects, background, or how to reach him that I can help with?"`;

const WELCOME = "Hi there! I'm Woody's personal assistant. Feel free to ask me anything about his background, projects, or articles — I'm happy to help!";

function ChatWidget() {
  const [isOpen, setIsOpen]     = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: WELCOME }]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);
  const easterEggTimer = useRef(null);

  const messagesEndRef = useRef(null);
  const inputRef       = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => () => clearTimeout(easterEggTimer.current), []);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 280);
  }, [isOpen]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg     = { role: 'user', content: text };
    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...nextHistory],
          max_tokens: 350,
          temperature: 0.7,
        }),
      });

      if (!res.ok) throw new Error('API error');
      const data  = await res.json();
      const raw   = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't get a response right now.";
      const hasEgg = raw.includes('[EASTER_EGG]');
      const reply  = raw.replace('[EASTER_EGG]', '').trimEnd();
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      if (hasEgg) {
        setEasterEgg(true);
        clearTimeout(easterEggTimer.current);
        easterEggTimer.current = setTimeout(() => setEasterEgg(false), 4000);
      }
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Please try again in a moment.' },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages]);

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="chat-widget-root">
      {/* Panel */}
      <div
        className={`chat-panel${isOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-label="Chat with Woody's assistant"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="chat-header">
          <div>
            <span
              className="eyebrow"
              style={{ color: 'rgba(221,220,212,0.45)', display: 'block', marginBottom: 5 }}
            >
              Personal Assistant
            </span>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: '#dddcd4',
                letterSpacing: '0.06em',
              }}
            >
              Ask about Woody
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="chat-close-btn"
            aria-label="Close chat"
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div className="chat-messages" role="log" aria-live="polite">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble chat-bubble-${msg.role}`}>
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="chat-bubble chat-bubble-assistant chat-bubble-loading" aria-label="Typing">
              <span className="chat-dot" />
              <span className="chat-dot" />
              <span className="chat-dot" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input row */}
        <div className="chat-input-row">
          <textarea
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask me anything..."
            rows={1}
            disabled={loading}
            aria-label="Message input"
          />
          <button
            onClick={send}
            className="chat-send-btn action-button action-button-solid"
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            →
          </button>
        </div>
      </div>

      {/* Easter egg toast */}
      <div className={`chat-easter-toast${easterEgg ? ' is-visible' : ''}`} aria-live="polite">
        🥚 You found a hidden easter egg!
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="chat-toggle-btn"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close assistant' : 'Open assistant'}
      >
        {isOpen ? (
          <span className="chat-toggle-close">Close ×</span>
        ) : (
          <>
            <span className="chat-toggle-icon">
              {/* Chat bubble SVG */}
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M10 2C5.58 2 2 5.13 2 9c0 1.9.82 3.63 2.17 4.91L3 18l4.43-1.5C8.24 16.82 9.1 17 10 17c4.42 0 8-3.13 8-7s-3.58-8-8-8z"
                  fill="currentColor"
                  fillOpacity="0.9"
                />
              </svg>
            </span>
            <span className="chat-toggle-text">
              <span className="chat-toggle-label">AI Assistant</span>
              <span className="chat-toggle-sub">Ask me about Woody</span>
            </span>
          </>
        )}
      </button>
    </div>
  );
}

export default ChatWidget;
