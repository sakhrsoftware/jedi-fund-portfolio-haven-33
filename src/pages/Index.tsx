
import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import SectorFilter from "@/components/SectorFilter";
import { Input } from "@/components/ui/input";

const SECTORS = ["All", "Technology", "Healthcare", "Finance", "Fund Investment"];

const PORTFOLIO_COMPANIES = [
  {
    id: 1,
    name: "TechVision AI",
    sector: "Technology",
    description: "Leading AI solutions for enterprise businesses",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "HealthCore",
    sector: "Healthcare",
    description: "Revolutionary healthcare technology solutions",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "FinTech Plus",
    sector: "Finance",
    description: "Next-generation financial technology platform",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Growth Fund I",
    sector: "Fund Investment",
    description: "Strategic investment in emerging technologies",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
];

const Index = () => {
  const [activeSector, setActiveSector] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = PORTFOLIO_COMPANIES.filter(
    (company) => {
      const matchesSector = activeSector === "All" || company.sector === activeSector;
      const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           company.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSector && matchesSearch;
    }
  );

  return (
    <div className="min-h-screen bg-primary pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Our Portfolio</h1>
          <p className="mx-auto max-w-2xl text-jedi-white/80">
            Discovering and investing in groundbreaking companies that shape the future
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <SectorFilter
            sectors={SECTORS}
            activeSector={activeSector}
            onSectorChange={setActiveSector}
          />
          <Input
            type="search"
            placeholder="Search companies..."
            className="w-full max-w-xs bg-jedi-dark text-white border-gray-700 placeholder:text-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCompanies.map((company) => (
            <PortfolioCard key={company.id} {...company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
