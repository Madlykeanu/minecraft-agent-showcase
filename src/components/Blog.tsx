import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Custom Code Beats WordPress: The Modern Web Development Advantage",
      excerpt: "Discover why building websites with modern frameworks and custom code provides superior results compared to traditional WordPress solutions.",
      category: "Development",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "modern-web-development-vs-wordpress"
    },
    {
      id: 2,
      title: "5 Tech Trends Reshaping Business in 2024",
      excerpt: "From AI-driven automation to edge computing, discover the key technology trends that are transforming how businesses operate and compete in today's digital landscape.",
      category: "Technology",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "emerging-tech-trends-2024"
    },
    {
      id: 3,
      title: "New Year, New Tech: Small Business Success in Northern Michigan for 2025",
      excerpt: "Starting the year with essential tech strategies for Up North Michigan businesses - from tourist season optimization to year-round digital presence.",
      category: "Local Business",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1610878180933-123728745d22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "new-year-tech-trends-northern-michigan"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
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
            Insights and expertise in web development and design
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