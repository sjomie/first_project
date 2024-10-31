'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);

  const projects = [
    {
      title: "AI applied to Finance",
      description: "Financial analysis is focuses on three key aspects: the profitability, solvency and liquidity of the company.",
      tools: ["Python", "SAP", "Excel"],
      image: "/images/ai-finance.jpg"
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Created an interactive dashboard for sales forecasting using time series analysis.",
      tools: ["Python", "Dataiku","Power BI", "SQL"],
      image: "/images/sales-dashboard.jpg"
    },
    {
      title: "Data for Business",
      description: "Built an NLP model to analyze customer feedback sentiment across social media platforms.",
      tools: ["Python", "HubSpot", "Salesforce","Tableau"],
      image: "/images/nlp-analysis.jpg"
    },
    
    
  ];

  return (
    <div className="min-h-screen bg-[#012169] font-inter text-white">
      <header className="bg-[#001233] shadow-lg">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-serif text-white tracking-wide">Stanley JOMIE</h1>
          <div className="flex gap-6">
            <div className="relative">
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('projects');
                  setShowProjectsMenu(!showProjectsMenu);
                }}
                className={`text-sm ${activeTab === 'projects' ? 'text-[#2E9CDB]' : 'text-gray-300'} hover:text-[#2E9CDB] flex items-center`}
              >
                Projects
                <ChevronRight className={`w-4 h-4 ml-1 transform transition-transform ${showProjectsMenu ? 'rotate-90' : ''}`} />
              </a>
              
              {showProjectsMenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#001233] border border-[#2E9CDB]/20 rounded-lg shadow-xl z-50">
                  <a 
                    href="#ai-finance"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2E9CDB]/20 hover:text-[#2E9CDB]"
                    onClick={() => setShowProjectsMenu(false)}
                  >
                    AI applied to Finance
                  </a>
                  <a 
                    href="#sales-dashboard"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2E9CDB]/20 hover:text-[#2E9CDB]"
                    onClick={() => setShowProjectsMenu(false)}
                  >
                    Sales Dashboard
                  </a>
                  <a 
                    href="#data-business"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2E9CDB]/20 hover:text-[#2E9CDB]"
                    onClick={() => setShowProjectsMenu(false)}
                  >
                    Data for Business
                  </a>
                  <a 
                    href="#ecommerce"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2E9CDB]/20 hover:text-[#2E9CDB]"
                    onClick={() => setShowProjectsMenu(false)}
                  >
                    E-commerce Analytics
                  </a>
                 
                </div>
              )}
            </div>
            
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
            <div className="flex gap-4 mb-8">
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
            <a
              href="https://calendly.com/sjomie/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#2E9CDB] text-white rounded-lg hover:bg-[#2E9CDB]/80 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Schedule a Meeting
            </a>
          </div>
          <div className="hidden md:block">
            <Image 
              src="/images/profile.jpg"
              alt="Stanley JOMIE" 
              width={320}
              height={320}
              className="rounded-full object-cover shadow-xl border-4 border-[#2E9CDB]"
            />
          </div>
        </div>
      </motion.section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl font-semibold text-white mb-12">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              id="ai-finance"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#001233] rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-[#2E9CDB]/20 flex flex-col"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400}
                height={192}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-[#2E9CDB]/20 text-[#2E9CDB] rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-center">
                  <Link 
                    href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-4 py-2 bg-[#2E9CDB] text-white rounded-lg hover:bg-[#2E9CDB]/80 transition-all transform hover:scale-105"
                  >
                    View Project
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#001233] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-white mb-12">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#2E9CDB]">Programming & Scraping</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Python (Pandas, VSCode, Cursor)
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  SQL (MySQL, SQLite)
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  TSX
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

      <section className="bg-[#012169] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-white mb-12">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#001233] p-8 rounded-lg border border-[#2E9CDB]/20">
              <h4 className="text-lg font-medium text-[#2E9CDB] mb-2">Master&apos;s Degree in AI applied to Business</h4>
              <p className="text-white mb-2">EUGENIA School</p>
              <p className="text-gray-300">2024 - 2026</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Data visualization, Business Intelligence & Workflow AI
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Advanced Machine Learning & Deep Learning
                </li>
              </ul>
            </div>

            <div className="bg-[#001233] p-8 rounded-lg border border-[#2E9CDB]/20">
              <h4 className="text-lg font-medium text-[#2E9CDB] mb-2">Bachelor&apos;s Degree in Commercial Management</h4>
              <p className="text-white mb-2">PPA Business School</p>
              <p className="text-gray-300">2021 - 2024</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Negotiation & Sales
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Marketing & Communication
                </li>
              </ul>
            </div>

            <div className="bg-[#001233] p-8 rounded-lg border border-[#2E9CDB]/20 md:col-span-2 max-w-2xl mx-auto">
              <h4 className="text-lg font-medium text-[#2E9CDB] mb-2">Strategy & Corporate Finance</h4>
              <p className="text-white mb-2">HEC Paris</p>
              <p className="text-gray-300">2022 - 2024</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Business & Corporate Strategy with Implementation
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#2E9CDB]" />
                  Analysis & Valuation of Companies, Investments & Financial Modeling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#001233] rounded-2xl p-8 border border-[#2E9CDB]/20">
          <h3 className="text-2xl font-semibold text-white mb-4">Let&apos;s Connect</h3>
          <p className="text-gray-300 mb-6">
            I&apos;m always interested in new opportunities and collaborations.
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