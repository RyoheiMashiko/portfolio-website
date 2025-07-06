export function Work() {
  const projects = [
    {
      id: 1,
      title: "LangHelper - AI Writing Assistant",
      description: "Easy-to-use text editing with AI proofreading for enhanced writing quality and efficiency.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Node.js", "TypeScript", "OpenAI API", "Netlify Functions"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Kasumiso (Japanese)",
      description: "Built a visually appealing responsive website for a client using Nuxt. Collaborate with the designer to meet the client's requirements.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Nuxt.js", "Vue.js", "JavaScript", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "My Portfolio Site v1",
      description: "My first journey of tech is beginning here. Built with foundational web technologies to showcase my early development skills.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="work" style={{backgroundColor: '#faffff'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-6">
          <h2 className="text-left text-xl font-bold sm:text-2xl lg:text-3xl mb-2" style={{color: '#666666'}}>Projects</h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid md:grid-cols-2 gap-4 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="relative group rounded-2xl overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-3/5 md:w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <h3 className="text-lg md:text-xl font-bold mb-4" style={{color: '#666666'}}>
                  {project.title}
                </h3>
                
                <p className="text-lg mb-4 leading-relaxed" style={{color: '#666666'}}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm font-medium rounded-full"
                      style={{backgroundColor: 'rgba(255, 64, 0, 0.2)', color: '#ff4000'}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 btn-primary"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  
                  <a 
                    href={project.githubUrl}
                    className="inline-flex items-center px-6 py-3 border font-semibold rounded-lg transition-colors duration-200 btn-outline"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <p className="mb-6" style={{color: '#fafafa'}}>
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com"
            className="inline-flex items-center px-6 py-3 border font-semibold rounded-full transition-all duration-300 transform hover:scale-105 btn-outline"
          >
            View All Projects on GitHub
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  )
}