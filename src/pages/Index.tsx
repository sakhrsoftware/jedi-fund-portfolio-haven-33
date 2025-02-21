
import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import SectorFilter from "@/components/SectorFilter";

const SECTORS = ["All", "GP", "LP", "Direct Investment"];

const PORTFOLIO_COMPANIES = [
  {
    id: 1,
    name: "Mercury",
    sector: "Direct Investment",
    description: "Banking platform designed for startups and tech companies",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Deel",
    sector: "Direct Investment",
    description: "Global payroll and compliance platform for remote teams",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "3.0 Fund",
    sector: "GP",
    description: "Early-stage venture fund focused on emerging technologies",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Powerset",
    sector: "LP",
    description: "Multi-stage investment fund specializing in tech innovations",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Soma Capital",
    sector: "LP",
    description: "Early-stage venture capital firm backing exceptional founders",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Social Capital",
    sector: "LP",
    description: "Technology holding company investing in breakthrough businesses",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Genies",
    sector: "Direct Investment",
    description: "Digital identity and avatar technology platform",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Talkdesk",
    sector: "Direct Investment",
    description: "Cloud-based contact center and AI platform",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Thumbtack",
    sector: "Direct Investment",
    description: "Marketplace connecting professionals with local services",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Copilot",
    sector: "Direct Investment",
    description: "Personal finance management and budgeting platform",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Athena",
    sector: "Direct Investment",
    description: "Enterprise data intelligence and analytics solution",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "MaintainX",
    sector: "Direct Investment",
    description: "Modern maintenance and operations management platform",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  }
];

const Index = () => {
  const [activeSector, setActiveSector] = useState("All");
  const filteredCompanies = PORTFOLIO_COMPANIES.filter(company => 
    activeSector === "All" || company.sector === activeSector
  );

  return (
    <div className="min-h-screen bg-black pt-36">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white">Portfolio</h1>
        </div>
        
        <div className="mb-8">
          <SectorFilter sectors={SECTORS} activeSector={activeSector} onSectorChange={setActiveSector} />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCompanies.map(company => <PortfolioCard key={company.id} {...company} />)}
        </div>
      </div>
    </div>
  );
};

export default Index;
