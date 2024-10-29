'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "AI applied to Finance",
      description: "Finance analysis is focuses on three key aspects: the profitability, solvency and liquidity of the company.",
      tools: ["Python", "SAP", "Excel"],
      image: "/images/ai-finance.jpg"
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Created an interactive dashboard for sales forecasting using time series analysis.",
      tools: ["Python", "Power BI", "SQL"],
      image: "/images/sales-dashboard.jpg"
    },
    {
      title: "Data for Sales",
      description: "Built an NLP model to analyze customer feedback sentiment across social media platforms.",
      tools: ["Python", "HubSpot", "Salesforce","Tableau"],
      image: "/images/nlp-analysis.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#012169] font-inter text-white">
      {/* Header */}
      <header className="bg-[#001233] shadow-lg">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-serif text-white tracking-wide">Stanley JOMIE</h1>
          <div className="flex gap-6">
            <a href="#projects" onClick={() => setActiveTab('projects')} 
               className={`text-sm ${activeTab === 'projects' ? 'text-[#2E9CDB]' : 'text-gray-300'} hover:text-[#2E9CDB]`}>
              Projects
            </a>
            <a href="#about" onClick={() => setActiveTab('about')}
               className={`text-sm ${activeTab === 'about' ? 'text-[#2E9CDB]' : 'text-gray-300'} hover:text-[#2E9CDB]`}>
              About
            </a>
            <a href="#contact" onClick={() => setActiveTab('contact')}
               className={`text-sm ${activeTab === 'contact' ? 'text-[#2E9CDB]' : 'text-gray-300'} hover:text-[#2E9CDB]`}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-mckinsey text-white mb-6">
              Data/Business Analyst with focus on Finance and AI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transforming data into actionable insights and building intelligent solutions
              to solve real-company problems.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-gray-300 hover:text-[#2E9CDB]" />
              </a>
              <a href="https://www.linkedin.com/in/stanley-jomie/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-[#2E9CDB]" />
              </a>
              <a href="mailto:stanley.jomie971@gmail.com">
                <Mail className="w-6 h-6 text-gray-300 hover:text-[#2E9CDB]" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/images/profile.jpg"
              alt="Stanley JOMIE" 
              className="w-80 h-80 rounded-full object-cover shadow-xl border-4 border-[#2E9CDB]"
            />
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl font-semibold text-white mb-12">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#001233] rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-[#2E9CDB]/20"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-[#2E9CDB]/20 text-[#2E9CDB] rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#001233] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-white mb-12">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#2E9CDB]">Programming</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Python (Pandas, NumPy, Scikit-learn)
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  R (tidyverse, ggplot2)
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  SQL
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#2E9CDB]">Machine Learning</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Deep Learning (TensorFlow, PyTorch)
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Natural Language Processing
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Computer Vision
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#2E9CDB]">Tools & Platforms</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  AWS, Google Cloud Platform
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Docker, Git
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Tableau, Power BI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#001233] rounded-2xl p-8 border border-[#2E9CDB]/20">
          <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-6">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out!
          </p>
          <a 
            href="mailto:stanley.jomie971@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-[#2E9CDB] text-white rounded-lg hover:bg-[#2E9CDB]/80 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}