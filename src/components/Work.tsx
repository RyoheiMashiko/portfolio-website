export function Work() {
  const projects = [
    {
      id: 1,
      title: "LangHelper - AI Writing Assistant",
      description: "Easy-to-use text editing with AI proofreading for enhanced writing quality and efficiency.",
      image: "/images/langhelper.png",
      technologies: ["Next.js", "Node.js", "TypeScript", "OpenAI API", "Netlify Functions"],
      liveUrl: "https://langhelper.netlify.app/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Kasumiso (Japanese)",
      description: "Built a visually appealing responsive website for a client using Nuxt. Collaborate with the designer to meet the client's requirements.",
      image: "/images/kasumiso.png",
      technologies: ["Nuxt.js", "Vue.js", "JavaScript", "CSS3"],
      liveUrl: "https://kasumi-sou.biz/",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "My Portfolio Site v1",
      description: "My first journey of tech is beginning here. Built with foundational web technologies to showcase my early development skills.",
      image: "/images/portfolio_v1.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://ryoheimashiko.github.io/Portfolio_english/",
      githubUrl: "#"
    }
  ]

  return (
    <section id="work" style={{backgroundColor: '#faffff'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-left text-xl font-bold sm:text-2xl lg:text-3xl mb-2" style={{color: '#666666'}}>Projects</h2>
          </div>

          <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Project Image */}
              <div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-4/5 md:w-full h-32 md:h-40 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div>
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
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}