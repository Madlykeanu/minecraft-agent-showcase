import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why LLMs are Revolutionizing Game AI Agents",
      excerpt: "Explore how large language models are transforming the way AI agents interact and learn in gaming environments, particularly in Minecraft.",
      category: "AI Research",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "llms-revolutionizing-game-ai"
    },
    {
      id: 2,
      title: "Benchmarking AI Agents: Metrics That Matter",
      excerpt: "Deep dive into effective methods for measuring AI agent performance, from task completion rates to API efficiency in Minecraft environments.",
      category: "Technical",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "ai-agent-benchmarking"
    },
    {
      id: 3,
      title: "Task Decomposition in AI Agents: Challenges and Solutions",
      excerpt: "Analyzing the complexities of breaking down complex tasks for AI agents and exploring potential solutions for improved performance.",
      category: "Research",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "task-decomposition-ai-agents"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
          <span className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
            <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </span>
          <span className="font-medium">Back Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Our Blog</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-zinc-400">
            Experiments and technical deep-dives into AI agents in Minecraft
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <article className="group relative flex flex-col h-full cursor-pointer">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-red-500/50 to-red-600/50 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xs" />
                <div className="relative bg-zinc-900/50 backdrop-blur-xs rounded-2xl border border-white/5 group-hover:border-red-500/20 transition-colors overflow-hidden">
                  <div className="relative h-48 sm:h-56">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                    <img 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      src={post.image}
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-500">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-zinc-500" />
                      <span className="text-sm text-zinc-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-zinc-400 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="inline-flex items-center text-red-500 font-medium transition-colors gap-1 group-hover:text-red-400">
                      Read more
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 