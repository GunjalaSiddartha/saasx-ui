"use client"

import { motion } from "framer-motion"
import { ChartBarIcon, ShieldCheckIcon, BoltIcon, GlobeAltIcon, CogIcon, UsersIcon } from "@heroicons/react/24/outline"
import Features3DBackground from "./features-3d-background"

const features = [
  {
    icon: ChartBarIcon,
    title: "Advanced Analytics",
    description: "Get deep insights into your business with real-time analytics and customizable dashboards.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShieldCheckIcon,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, SSO, and compliance certifications.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BoltIcon,
    title: "Lightning Fast",
    description: "Optimized performance with global CDN and edge computing for instant response times.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: GlobeAltIcon,
    title: "Global Scale",
    description: "Deploy worldwide with multi-region support and automatic scaling capabilities.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CogIcon,
    title: "Smart Automation",
    description: "Automate repetitive tasks with AI-powered workflows and intelligent triggers.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: UsersIcon,
    title: "Team Collaboration",
    description: "Seamless collaboration tools with real-time editing and communication features.",
    color: "from-rose-500 to-red-500",
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      {/* 3D Background */}
      <Features3DBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to streamline your workflow, boost productivity, and scale your business to new heights.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Icon */}
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log("Explore all features clicked")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
