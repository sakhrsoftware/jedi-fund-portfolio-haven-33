
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  name: string;
  sector: string;
  description: string;
  image: string;
}

const PortfolioCard = ({ name, sector, description }: PortfolioCardProps) => {
  const [mainDesc, italicDesc] = description.split('|').map(d => d.trim());
  
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
    <div 
      onClick={() => window.open(getCompanyUrl(name), '_blank', 'noopener,noreferrer')}
      style={{ 
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation'
      }}
      className={cn(
        "block group relative overflow-hidden rounded-lg bg-gradient-to-br",
        "from-purple-500/10",
        "to-jedi-dark border border-[#555555] transition-all duration-500 ease-in-out",
        "hover:border-white/20 hover:translate-y-[-4px] hover:bg-[#121212]",
        "hover:shadow-lg hover:shadow-black/20 animate-fade-up p-4 cursor-pointer h-[120px]",
        "flex flex-col justify-between",
        "active:translate-y-[-2px]",
        "select-none touch-manipulation",
        "focus:outline-none"
      )}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-white transition-all duration-500 ease-in-out group-hover:text-white/90 select-none">{name}</h3>
        <span className="text-xs text-jedi-white/50 uppercase tracking-wider w-[56px] text-right transition-all duration-500 ease-in-out group-hover:text-white/70 select-none">{sector}</span>
      </div>
      <div className="space-y-0.5">
        <p className="text-sm text-jedi-white/70 transition-all duration-500 ease-in-out group-hover:text-white/80 select-none">{mainDesc}</p>
        {italicDesc && (
          <p className="text-sm italic text-jedi-white/60 transition-all duration-500 ease-in-out group-hover:text-white/70 select-none">{italicDesc}</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
