import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiUser, FiCalendar } from 'react-icons/fi';
import { blogs } from '../data/data';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));
  const relatedBlogs = blogs.filter(b => b.id !== parseInt(id)).slice(0, 3);

  if (!blog) return (
    <div className="pt-20 min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center"><h2 className="text-2xl font-bold mb-4">Blog not found</h2><Link to="/blog" className="btn-primary">Back to Blog</Link></div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-10" />
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
          <div className="max-w-4xl mx-auto">
            <span className="bg-primary text-dark text-xs font-bold px-3 py-1 rounded-full">{blog.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{blog.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
              <span className="flex items-center gap-1"><FiUser /> {blog.author}</span>
              <span className="flex items-center gap-1"><FiCalendar /> {blog.date}</span>
              <span className="flex items-center gap-1"><FiClock /> {blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8"><FiArrowLeft /> Back to Blog</Link>
        <article><p className="text-gray-300 mb-4 leading-relaxed">{blog.content}</p></article>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedBlogs.map((rb) => (
              <Link key={rb.id} to={`/blog/${rb.id}`} className="card-dark group">
                <div className="overflow-hidden"><img src={rb.image} alt={rb.title} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" /></div>
                <div className="p-4"><h3 className="font-semibold group-hover:text-primary line-clamp-2">{rb.title}</h3><p className="text-gray-400 text-xs mt-2">{rb.date}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;