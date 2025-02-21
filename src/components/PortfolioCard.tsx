
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  name: string;
  sector: string;
  description: string;
  image: string; // Keeping this in interface for compatibility, but we won't use it
}

const PortfolioCard = ({ name, sector, description }: PortfolioCardProps) => {
  // Split description by vertical bar if it exists
  const [mainDesc, italicDesc] = description.split('|').map(d => d.trim());
  
  // Create URL-friendly company name and handle special cases
  const getCompanyUrl = (name: string) => {
    if (name === "Copilot") return "https://copilot.money";
    if (name === "MaintainX") return "https://www.getmaintainx.com";
    if (name === "Soma Capital") return "https://somacap.com";
    if (name === "Powerset") return "https://powerset.co";
    if (name === "3.0 Fund") return "https://www.linkedin.com/in/jake-zeller-79923454/";
    if (name === "Wayfinder Ventures") return "https://www.wayfinder.com/";
    if (name === "Social Capital") return "https://www.socialcapital.com/";
    return `https://${name.toLowerCase().replace(/\s+/g, '')}.com`;
  };

  return (
    <a 
      href={getCompanyUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative overflow-hidden rounded-lg bg-jedi-dark border border-[#555555] transition-all duration-500 ease-in-out hover:border-white/20 hover:translate-y-[-4px] hover:bg-zinc-900 hover:shadow-lg hover:shadow-black/20 animate-fade-up p-4 cursor-pointer h-[120px] flex flex-col justify-between"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-white transition-all duration-500 ease-in-out group-hover:text-white/90">{name}</h3>
        <span className="text-xs text-jedi-white/50 uppercase tracking-wider w-[56px] text-right transition-all duration-500 ease-in-out group-hover:text-white/70">{sector}</span>
      </div>
      <div className="space-y-0.5">
        <p className="text-sm text-jedi-white/70 transition-all duration-500 ease-in-out group-hover:text-white/80">{mainDesc}</p>
        {italicDesc && (
          <p className="text-sm italic text-jedi-white/60 transition-all duration-500 ease-in-out group-hover:text-white/70">{italicDesc}</p>
        )}
      </div>
    </a>
  );
};

export default PortfolioCard;
