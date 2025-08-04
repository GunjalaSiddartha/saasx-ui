"use client"

import { motion } from "framer-motion"
import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const testimonials = [
  {
    name: "Siddartha",
    role: "CEO at TechFlow",
    avatar: "https://ai-headshots.net/example2-ai3.png?height=60&width=60",
    content:
      "SaaSify transformed our entire workflow. The automation features alone saved us 20 hours per week, and the analytics insights helped us increase revenue by 40%.",
    rating: 5,
    company: "TechFlow",
  },
  {
    name: "Arjun Mehta",
    role: "CTO at InnovateLab",
    avatar: "https://www.europeanceo.com/wp-content/uploads/2018/03/Elon-Musk.jpg?height=60&width=60",
    content:
      "The security features are outstanding. We migrated our entire infrastructure to SaaSify and haven't looked back. The team collaboration tools are game-changing.",
    rating: 5,
    company: "InnovateLab",
  },
  {
    name: "Priya Malhotra",
    role: "Product Manager at GrowthCo",
    avatar: "https://s.headshots.fun/use-case-img/real-estate-agent.jpeg?height=60&width=60",
    content:
      "Best investment we've made this year. The AI-powered insights helped us identify new market opportunities we never would have found otherwise.",
    rating: 5,
    company: "GrowthCo",
  },
  {
    name: "Ishita Rao",
    role: "Founder at StartupX",
    avatar: "https://ceoworld.biz/wp-content/uploads/2023/06/Karen-Lynch.jpg?ts=1696453270?height=60&width=60",    content:
      "As a startup, we needed something that could scale with us. SaaSify delivered beyond our expectations. The support team is incredibly responsive too.",
    rating: 5,
    company: "StartupX",
  },
  {
    name: "Nikita Menon",
    role: "Operations Director at ScaleCorp",
    avatar: "https://www.fotoria.com/fotoria-ai-professional-headshots-hero14.jpg?height=60&width=60",
    content:
      "The global deployment capabilities are phenomenal. We expanded to 5 new markets in just 3 months thanks to SaaSify's infrastructure.",
    rating: 5,
    company: "ScaleCorp",
  },
  {
    name: "Abhinav Joshi",
    role: "VP Engineering at DataDriven",
    avatar: "https://ai-headshots.net/style/Male-2-ai.png?height=60&width=60",
    content:
      "Lightning-fast performance and rock-solid reliability. Our uptime improved to 99.99% after switching to SaaSify. Highly recommended!",
    rating: 5,
    company: "DataDriven",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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
            Loved by
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Thousands of Teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "99.99%", label: "Uptime" },
            { number: "24/7", label: "Support" },
            { number: "150+", label: "Countries" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="p-6"
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
