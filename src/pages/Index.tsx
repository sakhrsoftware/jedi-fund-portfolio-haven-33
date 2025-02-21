import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import SectorFilter from "@/components/SectorFilter";
const SECTORS = ["All", "GP", "LP", "Direct"];
const sectorPriority = {
  Direct: 1,
  GP: 2,
  LP: 3
};
const PORTFOLIO_COMPANIES = [{
  id: 11,
  name: "Athena",
  sector: "Direct",
  description: "Top-tier assistants, world-class delegation",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 10,
  name: "Copilot",
  sector: "Direct",
  description: "Personal finance management and budgeting",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 7,
  name: "Genies",
  sector: "Direct",
  description: "Digital identity and avatars (seed; exited $1bn+)",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 12,
  name: "MaintainX",
  sector: "Direct",
  description: "Modern maintenance and operations management",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 1,
  name: "Mercury",
  sector: "Direct",
  description: "Online banking for startups and individuals",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
}, {
  id: 13,
  name: "Pebblebed",
  sector: "LP",
  description: "Technical investors for hard technical problems",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 4,
  name: "Powerset",
  sector: "LP",
  description: "Where top founders get $1mn+ for angel investing",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 6,
  name: "Social Capital",
  sector: "LP",
  description: "Firm founded by Chamath Palihapitiya; LP in Fund II (Slack)",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 8,
  name: "Talkdesk",
  sector: "Direct",
  description: "Cloud-based contact center and AI platform",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 9,
  name: "Thumbtack",
  sector: "Direct",
  description: "Marketplace for local services",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 14,
  name: "Wayfinder Ventures",
  sector: "LP",
  description: "Firm founded by Yuri Sagalov",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 2,
  name: "Weekend Fund",
  sector: "LP",
  description: "Firm founded by Ryan Hoover; LP in Fund I (Deel)",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
}, {
  id: 3,
  name: "3.0 Fund",
  sector: "GP",
  description: "GP in Fund I (Candid Health, MaintainX, Mercury, etc.)",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
}, {
  id: 5,
  name: "Soma Capital",
  sector: "GP",
  description: "GP in Fund I (Cruise, Ironclad, Razorpay, etc.)",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}].sort((a, b) => {
  // First sort by sector priority
  if (sectorPriority[a.sector] !== sectorPriority[b.sector]) {
    return sectorPriority[a.sector] - sectorPriority[b.sector];
  }
  // Then alphabetically within each sector
  return a.name.localeCompare(b.name);
});

const Index = () => {
  const [activeSector, setActiveSector] = useState("All");
  const filteredCompanies = PORTFOLIO_COMPANIES.filter(company => activeSector === "All" || company.sector === activeSector);
  
  return <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-grow container mx-auto px-4 pt-20 pb-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-light tracking-wide text-neutral-50 mb-4 text-left">portfolio</h1>
        </div>

        <div className="mb-12">
          <SectorFilter sectors={SECTORS} activeSector={activeSector} onSectorChange={setActiveSector} />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {filteredCompanies.map(company => <PortfolioCard key={company.id} {...company} />)}
        </div>
      </div>

      <footer className="bg-black border-t border-[#333333] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center items-center space-x-8">
              <span className="text-jedi-white/60">SF</span>
              <span className="text-jedi-white/60">•</span>
              <span className="text-jedi-white/60">Kuwait City</span>
              <span className="text-jedi-white/60">•</span>
              <span className="text-jedi-white/60">Doha</span>
            </div>
            <div className="text-jedi-white/40 text-sm">
              © 2025 JEDI, All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
