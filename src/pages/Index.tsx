
import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import SectorFilter from "@/components/SectorFilter";

const SECTORS = ["All", "Fintech", "Fund Investment"];

const PORTFOLIO_COMPANIES = [
  {
    id: 1,
    name: "Mercury",
    sector: "Fintech",
    description: "Banking platform designed for startups and tech companies",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Deel",
    sector: "Fintech",
    description: "Global payroll and compliance platform for remote teams",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "3.0 Fund",
    sector: "Fund Investment",
    description: "Early-stage venture fund focused on emerging technologies",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Powerset",
    sector: "Fund Investment",
    description: "Multi-stage investment fund specializing in tech innovations",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Soma Capital",
    sector: "Fund Investment",
    description: "Early-stage venture capital firm backing exceptional founders",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Social Capital",
    sector: "Fund Investment",
    description: "Technology holding company investing in breakthrough businesses",
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
          <h1 className="text-4xl font-bold text-white">Representative Projects</h1>
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
