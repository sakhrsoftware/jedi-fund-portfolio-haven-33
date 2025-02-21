
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-neutral-50">Fahad AlSharekh</h1>
          </div>

          <div className="space-y-6 text-jedi-white/90">
            <p>
              Fahad AlSharekh is a Vice Chairman of Kamco Investment Company and General Partner of the Kamco JEDI program, targeting investments in SF Bay Area-based emerging VCs and
              technology companies.
            </p>
            <p>
              Previously Fahad founded the advisory firm TechInvest in 2015 to provide opportunities for Middle East investors and sovereign wealth funds to access private technology opportunities in the SF Bay Area. TechInvest advised and structured investments totaling over $900M and offered market assessment services to prominent VC and PE firms and emerging managers.
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
    </div>;
};

export default About;
