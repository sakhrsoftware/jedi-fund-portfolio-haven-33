
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="mx-auto max-w-2xl">
          <div className="mb-16">
            <h1 className="text-5xl font-light tracking-wide text-neutral-50 mb-1">fahad alsharekh</h1>
          </div>

          <div className="space-y-8 text-neutral-400 text-lg leading-relaxed font-light">
            <p>Fahad is Vice Chairman of Kamco Investment Company and General Partner of the Kamco JEDI program, targeting investments in SF Bay Area-based emerging VCs and technology companies.</p>
            
            <p>Previously, Fahad founded the advisory firm TechInvest in 2015, providing opportunities for Middle East investors and sovereign wealth funds to access private technology opportunities. TechInvest advised and structured investments totaling over $900mn and offered market assessment services to prominent VC & PE firms and emerging managers.</p>
          </div>
        </motion.div>
      </div>

      <footer className="bg-black border-t border-[#333333] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center items-center space-x-8">
              <span className="text-neutral-600 hover:text-neutral-400 transition-colors text-sm tracking-wide">SF</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-600 hover:text-neutral-400 transition-colors text-sm tracking-wide">Kuwait City</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-600 hover:text-neutral-400 transition-colors text-sm tracking-wide">Doha</span>
            </div>
            <div className="text-neutral-600 text-sm">
              All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default About;
