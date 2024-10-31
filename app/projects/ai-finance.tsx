'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AIFinanceProject() {
  return (
    <div className="min-h-screen bg-[#012169] font-inter text-white">
      {/* Header avec bouton retour */}
      <header className="bg-[#001233] shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link 
            href="/"
            className="flex items-center text-gray-300 hover:text-[#2E9CDB] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <Image 
          src="/images/ai-finance.jpg"
          alt="AI Finance Project"
          width={400}
          height={300}
          className="w-full h-auto object-cover rounded-xl shadow-xl mb-8"
        />
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">AI applied to Finance</h1>
          <div className="flex gap-4">
            <a 
              href="https://github.com/yourusername/ai-finance-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-[#2E9CDB]/20 text-[#2E9CDB] rounded-lg hover:bg-[#2E9CDB]/30 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View Code
            </a>
            <a 
              href="https://demo-ai-finance.example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-[#2E9CDB] text-white rounded-lg hover:bg-[#2E9CDB]/80 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          </div>
        </div>

        {/* Technologies utilisées */}
        <div className="flex gap-3 mb-8">
          {["Python", "SAP", "Excel", "Machine Learning", "Financial Analysis"].map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-[#2E9CDB]/20 text-[#2E9CDB] rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description détaillée */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-300 mb-6">
            This project focuses on leveraging artificial intelligence to enhance financial analysis processes. 
            The system analyzes three key aspects of company performance: profitability, solvency, and liquidity, 
            providing automated insights and predictions for better decision-making.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Automated financial ratio analysis</li>
            <li>Predictive modeling for cash flow forecasting</li>
            <li>Risk assessment algorithms</li>
            <li>Interactive dashboards for real-time monitoring</li>
            <li>Automated report generation</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
          <p className="text-gray-300 mb-6">
            The solution was built using Python for data processing and machine learning models, 
            integrated with SAP for enterprise data access, and Excel for user-friendly reporting. 
            Key technical aspects include:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Machine learning models for financial forecasting</li>
            <li>API integration with SAP systems</li>
            <li>Automated data validation and cleaning</li>
            <li>Custom financial metrics calculation engine</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
          <p className="text-gray-300 mb-6">
            The implementation of this AI-driven financial analysis system resulted in:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>70% reduction in analysis time</li>
            <li>85% accuracy in financial forecasting</li>
            <li>Improved decision-making through real-time insights</li>
            <li>Standardized reporting across departments</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
} 