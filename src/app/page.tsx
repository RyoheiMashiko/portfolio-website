import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#faffff', color: '#666666'}}>
      <Hero />
      <Work />
      <footer className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#faffff', color: '#666666'}}>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-left">
            <div className="mb-4 md:mb-0">
              Ryohei © 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
