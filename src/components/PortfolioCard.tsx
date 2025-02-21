
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

  return (
    <div className="group relative overflow-hidden rounded-lg bg-jedi-dark border border-[#555555] transition-all duration-500 ease-in-out hover:border-white/20 hover:translate-y-[-4px] hover:bg-zinc-900 hover:shadow-lg hover:shadow-black/20 animate-fade-up p-6 cursor-pointer">
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-white transition-all duration-500 ease-in-out group-hover:text-white/90">{name}</h3>
          <span className="text-xs text-jedi-white/50 uppercase tracking-wider w-[56px] text-right transition-all duration-500 ease-in-out group-hover:text-white/70">{sector}</span>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-jedi-white/70 transition-all duration-500 ease-in-out group-hover:text-white/80">{mainDesc}</p>
          {italicDesc && (
            <p className="text-sm italic text-jedi-white/60 transition-all duration-500 ease-in-out group-hover:text-white/70">{italicDesc}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
