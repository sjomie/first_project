'use client';

import { useState } from 'react';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('projects');
  
  return (
    <div className="flex gap-6">
      <a href="#projects" onClick={() => setActiveTab('projects')} 
         className={`text-sm ${activeTab === 'projects' ? 'text-blue-600' : 'text-gray-600'}`}>
        Projects
      </a>
      <a href="#about" onClick={() => setActiveTab('about')}
         className={`text-sm ${activeTab === 'about' ? 'text-blue-600' : 'text-gray-600'}`}>
        About
      </a>
      <a href="#contact" onClick={() => setActiveTab('contact')}
         className={`text-sm ${activeTab === 'contact' ? 'text-blue-600' : 'text-gray-600'}`}>
        Contact
      </a>
    </div>
  );
} 