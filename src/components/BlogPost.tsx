import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

interface BlogPostProps {
  title: string;
  category: string;
  readTime: string;
  content: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, category, readTime, content }) => {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
          <FiArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Blog</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-500">
                {category}
              </span>
              <span className="text-sm text-zinc-400">{readTime}</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="prose prose-lg max-w-none prose-invert 
          [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:leading-tight 
          [&>p]:text-zinc-300 [&>p]:text-xl [&>p]:leading-relaxed [&>p]:mb-8 
          [&>ul]:mt-8 [&>ul]:mb-12 [&>ul]:grid [&>ul]:gap-4 [&>ul]:grid-cols-1 
          [&>ul>li]:relative [&>ul>li]:pl-8 [&>ul>li]:text-xl [&>ul>li]:text-zinc-300
          [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 
          [&>ul>li]:before:top-[0.7em] [&>ul>li]:before:h-1.5 [&>ul>li]:before:w-1.5 
          [&>ul>li]:before:bg-red-500 [&>ul>li]:before:rounded-full [&>*:first-child]:mt-0">
          {content}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-lg">
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="font-medium">Back to all articles</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 