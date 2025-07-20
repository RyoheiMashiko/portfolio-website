import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#faffff', color: '#666666'}}>
      <Hero />
      <div className="md:hidden">
        <Work />
      </div>
      <footer className="py-12" style={{backgroundColor: '#faffff', color: '#666666'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-left">
              <div className="mb-4 md:mb-0">
                Ryohei © 2025
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
