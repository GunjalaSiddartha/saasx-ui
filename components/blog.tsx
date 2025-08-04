"use client"

import { motion } from "framer-motion"
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Future of SaaS: AI-Powered Automation",
    excerpt:
      "Discover how artificial intelligence is revolutionizing SaaS platforms and what it means for your business workflow.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    image: "/ai-3.webp?height=300&width=400",
    slug: "future-of-saas-ai-automation",
  },
  {
    title: "Building Scalable Teams with Modern Tools",
    excerpt: "Learn the essential strategies and tools for building and managing remote teams that scale efficiently.",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Management",
    image: "/ai-4.png?height=300&width=400",
    slug: "building-scalable-teams",
  },
  {
    title: "Security Best Practices for SaaS Applications",
    excerpt: "A comprehensive guide to implementing enterprise-grade security measures in your SaaS infrastructure.",
    author: "Emily Watson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Security",
    image: "/ai-1.webp?height=300&width=400",
    slug: "security-best-practices",
  },
]

export default function Blog() {
  const handleReadMore = (slug: string) => {
    console.log(`Navigate to blog post: ${slug}`)
    // Add navigation logic here
  }

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest from Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and trends in the SaaS industry.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Author & CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-500 dark:text-gray-400">by </span>
                    <span className="font-medium text-gray-900 dark:text-white">{post.author}</span>
                  </div>
                  <button
                    onClick={() => handleReadMore(post.slug)}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Read more
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log("View all posts clicked")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
