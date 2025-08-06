'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Hero() {
  const [activeTab, setActiveTab] = useState('about')

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Projects' }
  ]

  return (
    <section id="home" className="pt-12 lg:pt-20 min-h-screen items-center justify-center" style={{backgroundColor: '#faffff'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-left text-4xl sm:text-5xl font-extrabold mb-2 tracking-tight" style={{color: '#666666'}}>
              Ryohei Mashiko
          </h1>
          <p className="text-left text-xl font-light sm:text-2xl leading-relaxed" style={{color: '#666666'}}>
            Frontend Developer
          </p>
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/ryoheimashiko" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ryoheimashiko/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          {/* Tab Navigation - Desktop Only */}
          <div className="hidden md:flex space-x-8 mt-16 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-lg font-medium transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Desktop Tab Content */}
          <div className="hidden md:block">
            {activeTab === 'about' && (
              <div>
          <p className="text-left text-lg sm:text-xl mb-6 max-w-4xl leading-relaxed" style={{color: '#666666', fontSize: '18px'}}>
            Hi! I am a frontend developer from Japan with 4.5 years of professional experience. Currently based in London, where I have been working for over 3 years.
            <br/>I enjoy turning ideas into functional applications and solving problems with technology.</p>
          <p className="text-left text-lg sm:text-xl mb-6 max-w-4xl leading-relaxed" style={{color: '#666666', fontSize: '18px'}}>
            I&apos;m comfortable working with React, Vue, and Node.js, and I&apos;m always keen to learn new technologies. While I have a professional background in frontend development, I&apos;m also eager to explore backend technologies like Go and Rust.
          </p>
          <p className="text-left text-lg sm:text-xl mb-6 max-w-4xl leading-relaxed" style={{color: '#666666', fontSize: '18px'}}>
            Before transitioning into tech, I spent 4 years in B2B account management, which has given me a solid understanding of the business side as well.  
          </p>
          <p className="text-left text-lg sm:text-xl mb-6 max-w-4xl leading-relaxed" style={{color: '#666666', fontSize: '18px'}}>
            Outside of work, I have many interests. I enjoy running, cycling, swimming, watching volleyball, reading, gaming, traveling, custom keyboards, and sleeping. I also love discovering hidden gems, especially Japanese restaurants and food in London.
          </p>
            </div>
          )}

          {activeTab === 'work' && (
            <div>
              <div className="space-y-12">
                <div className="grid md:grid-cols-[auto_1fr] items-start cursor-pointer hover:opacity-80 transition-opacity duration-200" style={{gap: '1.5rem'}} onClick={() => window.open('https://langhelper.netlify.app/', '_blank')}>
                  <div>
                    <Image src="/images/langhelper.png" alt="LangHelper" width={150} height={150} className="w-full object-cover rounded-2xl" style={{height: '5.2rem'}} />
                  </div>
                  <div>
                    <h3 className="text-left text-lg font-bold mb-2" style={{color: '#666666'}}>LangHelper - AI Writing Assistant</h3>
                    <p className="text-left text-base mb-3" style={{color: '#666666'}}>Easy-to-use text editing with AI proofreading for enhanced writing quality and efficiency.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['Next.js', 'Node.js', 'TypeScript', 'OpenAI API', 'Netlify Functions'].map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs rounded-full" style={{backgroundColor: 'rgba(255, 64, 0, 0.2)', color: '#ff4000'}}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-[auto_1fr] items-start cursor-pointer hover:opacity-80 transition-opacity duration-200" style={{gap: '1.5rem'}} onClick={() => window.open('https://kasumi-sou.biz/', '_blank')}>
                  <div>
                    <Image src="/images/kasumiso.png" alt="Kasumiso" width={150} height={150} className="w-full object-cover rounded-2xl" style={{height: '5.2rem'}} />
                  </div>
                  <div>
                    <h3 className="text-left text-lg font-bold mb-2" style={{color: '#666666'}}>Kasumiso (Japanese)</h3>
                    <p className="text-left text-base mb-3" style={{color: '#666666'}}>Built a visually appealing responsive website for a client using Nuxt. Collaborate with the designer to meet the client&apos;s requirements.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['Nuxt.js', 'Vue.js', 'JavaScript', 'CSS3'].map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs rounded-full" style={{backgroundColor: 'rgba(255, 64, 0, 0.2)', color: '#ff4000'}}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-[auto_1fr] items-start cursor-pointer hover:opacity-80 transition-opacity duration-200" style={{gap: '1.5rem'}} onClick={() => window.open('https://ryoheimashiko.github.io/Portfolio_english/', '_blank')}>
                  <div>
                    <Image src="/images/portfolio_v1.png" alt="Portfolio v1" width={150} height={150} className="w-full object-cover rounded-2xl" style={{height: '5.2rem'}} />
                  </div>
                  <div>
                    <h3 className="text-left text-lg font-bold mb-2" style={{color: '#666666'}}>My Portfolio Site v1</h3>
                    <p className="text-left text-base mb-3" style={{color: '#666666'}}>My first journey of tech is beginning here. Built with foundational web technologies to showcase my early development skills.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs rounded-full" style={{backgroundColor: 'rgba(255, 64, 0, 0.2)', color: '#ff4000'}}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div>
              <div className="space-y-8">
                <div className="cursor-pointer hover:opacity-80 transition-opacity duration-200" onClick={() => window.open('https://www.snaptripgroup.com/', '_blank')}>
                  <h3 className="text-left text-lg font-bold mb-2" style={{color: '#666666'}}>Frontend Developer</h3>
                  <p className="text-left text-base font-medium mb-2" style={{color: '#888888', fontSize: '14px'}}>Snaptrip Group • Mar 2022 - Present • London</p>
                  <p className="text-left text-base leading-relaxed" style={{color: '#666666', fontSize: '14px'}}>
                    Build and maintain critical frontend components across 10+ web applications serving 50,000+ daily users. Work closely with cross-functional teams, including developers, marketing, and product manager/data scientist, to deliver solutions that enhance user experience and drive commercial success.
                  </p>
                </div>
                
                <div className="cursor-pointer hover:opacity-80 transition-opacity duration-200" onClick={() => window.open('https://www.asia-quest.jp/en/', '_blank')}>
                  <h3 className="text-left text-lg font-bold mb-2" style={{color: '#666666'}}>Frontend Developer</h3>
                  <p className="text-left text-base font-medium mb-2" style={{color: '#888888', fontSize: '14px'}}>Asia Quest • Oct 2020 - Dec 2021 • Tokyo</p>
                  <p className="text-left text-base leading-relaxed" style={{color: '#666666', fontSize: '14px'}}>
                    Quickly adapt to emerging technologies whilst consistently delivering high-quality code across multiple projects. Successfully developed a responsive car leasing web application from inception to completion, meeting all deadlines. Proactively created mock APIs to maintain frontend development progress during backend delays, ensuring continuous project advancement.
                  </p>
                </div>

                <div className="cursor-pointer hover:opacity-80 transition-opacity duration-200" onClick={() => window.open('https://www.itcenex.com/en/', '_blank')}>
                  <h3 className="text-left text-lg font-bold mb-2" style={{color: '#666666'}}>B2B Account Manager</h3>
                  <p className="text-left text-base font-medium mb-2" style={{color: '#888888', fontSize: '14px'}}>Itochu Enex • Apr 2016 - Mar 2020 • Tokyo</p>
                  <p className="text-left text-base leading-relaxed" style={{color: '#666666', fontSize: '14px'}}>
                    Establish and nurture strong relationships with SME executives and key decision-makers across diverse industries. Manage comprehensive credit assessments, develop pricing strategies, and lead contract negotiations to foster business growth and sustain long-term partnerships.
                  </p>
                </div>
              </div>
            </div>
          )}
          </div>

          {/* Mobile Content - Show All Sections */}
          <div className="md:hidden">
            {/* About Section */}
            <div>
              <h2 className="text-left text-xl font-bold sm:text-2xl lg:text-3xl mt-20 mb-6" style={{color: '#666666'}}>About</h2>
              <p className="text-left text-base sm:text-xl mb-6 max-w-3xl mx-auto leading-relaxed" style={{color: '#666666', fontSize: '16px'}}>
                Hi! I am a frontend developer from Japan with 4.5 years of professional experience. Currently based in London, where I have been working for over 3 years.
                <br/>I enjoy turning ideas into functional applications and solving problems with technology.
              </p>
              <p className="text-left text-base sm:text-xl mb-6 max-w-3xl mx-auto leading-relaxed" style={{color: '#666666', fontSize: '16px'}}>
                I&apos;m comfortable working with React, Vue, and Node.js, and I&apos;m always keen to learn new technologies. While I have a professional background in frontend development, I&apos;m also eager to explore backend technologies like Go and Rust.
              </p>
              <p className="text-left text-base sm:text-xl mb-6 max-w-3xl mx-auto leading-relaxed" style={{color: '#666666', fontSize: '16px'}}>
                Before transitioning into tech, I spent 4 years in B2B account management, which has given me a solid understanding of the business side as well.  
              </p>
              <p className="text-left text-base sm:text-xl mb-6 max-w-3xl mx-auto leading-relaxed" style={{color: '#666666', fontSize: '16px'}}>
                Outside of work, I have many interests. I enjoy running, cycling, swimming, watching volleyball, reading, gaming, traveling, custom keyboards, and sleeping. I also love discovering hidden gems, especially Japanese restaurants and food in London.
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-left text-xl font-bold sm:text-2xl lg:text-3xl mt-20 mb-6" style={{color: '#666666'}}>Experience</h2>
              <div className="space-y-8">
                <div className="cursor-pointer hover:opacity-80 transition-opacity duration-200" onClick={() => window.open('https://www.snaptripgroup.com/', '_blank')}>
                  <h3 className="text-left text-lg font-bold mb-2" style={{color: '#666666'}}>Frontend Developer</h3>
                  <p className="text-left text-base font-medium mb-2" style={{color: '#888888', fontSize: '14px'}}>Snaptrip Group • Mar 2022 - Present • London</p>
                  <p className="text-left text-base leading-relaxed" style={{color: '#666666', fontSize: '14px'}}>
                    Build and maintain critical frontend components across 10+ web applications serving 50,000+ daily users. Work closely with cross-functional teams, including developers, marketing, and product manager/data scientist, to deliver solutions that enhance user experience and drive commercial success.
                  </p>
                </div>
                
                <div className="cursor-pointer hover:opacity-80 transition-opacity duration-200" onClick={() => window.open('https://www.asia-quest.jp/en/', '_blank')}>
                  <h3 className="text-left text-lg font-bold mb-2" style={{color: '#666666'}}>Frontend Developer</h3>
                  <p className="text-left text-base font-medium mb-2" style={{color: '#888888', fontSize: '14px'}}>Asia Quest • Oct 2020 - Dec 2021 • Tokyo</p>
                  <p className="text-left text-base leading-relaxed" style={{color: '#666666', fontSize: '14px'}}>
                    Quickly adapt to emerging technologies whilst consistently delivering high-quality code across multiple projects. Successfully developed a responsive car leasing web application from inception to completion, meeting all deadlines. Proactively created mock APIs to maintain frontend development progress during backend delays, ensuring continuous project advancement.
                  </p>
                </div>

                <div className="cursor-pointer hover:opacity-80 transition-opacity duration-200" onClick={() => window.open('https://www.itcenex.com/en/', '_blank')}>
                  <h3 className="text-left text-lg font-bold mb-2" style={{color: '#666666'}}>B2B Account Manager</h3>
                  <p className="text-left text-base font-medium mb-2" style={{color: '#888888', fontSize: '14px'}}>Itochu Enex • Apr 2016 - Mar 2020 • Tokyo</p>
                  <p className="text-left text-base leading-relaxed" style={{color: '#666666', fontSize: '14px'}}>
                    Establish and nurture strong relationships with SME executives and key decision-makers across diverse industries. Manage comprehensive credit assessments, develop pricing strategies, and lead contract negotiations to foster business growth and sustain long-term partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}