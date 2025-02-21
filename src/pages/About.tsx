
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Fahad AlSharekh</h1>
            <p className="text-lg text-jedi-white/60">Founder & Managing Partner</p>
          </div>

          <div className="space-y-6 text-jedi-white/80">
            <p>
              Fahad AlSharekh is a visionary investor and entrepreneur with over two decades of experience
              in technology and venture capital. As the founder of Jedi Fund, he has been instrumental
              in identifying and nurturing groundbreaking companies that are shaping the future of
              technology and innovation.
            </p>
            <p>
              With a deep understanding of both regional and global markets, Fahad has successfully
              led investments in numerous high-growth startups across various sectors, including
              technology, healthcare, and financial services. His strategic vision and hands-on
              approach have helped portfolio companies achieve significant milestones and create
              lasting impact.
            </p>
            <p>
              Through Jedi Fund, Fahad continues to pursue his passion for supporting exceptional
              entrepreneurs and innovative solutions that address critical challenges in today's
              rapidly evolving business landscape.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-black border-t border-[#333333] py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8">
            <span className="text-jedi-white/60 hover:text-white transition-colors cursor-pointer">San Francisco</span>
            <span className="text-jedi-white/60">•</span>
            <span className="text-jedi-white/60 hover:text-white transition-colors cursor-pointer">Kuwait City</span>
            <span className="text-jedi-white/60">•</span>
            <span className="text-jedi-white/60 hover:text-white transition-colors cursor-pointer">Doha</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
