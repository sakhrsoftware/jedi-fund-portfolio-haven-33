
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              About Us
            </span>
            <h1 className="mb-4 text-4xl font-bold text-jedi-dark">Fahad AlSharekh</h1>
            <p className="text-lg text-jedi-gray">Founder & Managing Partner</p>
          </div>

          <div className="mb-12 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              alt="Fahad AlSharekh"
              className="h-[400px] w-full object-cover"
            />
          </div>

          <div className="prose prose-lg mx-auto">
            <p className="mb-6 text-jedi-gray">
              Fahad AlSharekh is a visionary investor and entrepreneur with over two decades of experience
              in technology and venture capital. As the founder of Jedi Fund, he has been instrumental
              in identifying and nurturing groundbreaking companies that are shaping the future of
              technology and innovation.
            </p>
            <p className="mb-6 text-jedi-gray">
              With a deep understanding of both regional and global markets, Fahad has successfully
              led investments in numerous high-growth startups across various sectors, including
              technology, healthcare, and financial services. His strategic vision and hands-on
              approach have helped portfolio companies achieve significant milestones and create
              lasting impact.
            </p>
            <p className="text-jedi-gray">
              Through Jedi Fund, Fahad continues to pursue his passion for supporting exceptional
              entrepreneurs and innovative solutions that address critical challenges in today's
              rapidly evolving business landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
