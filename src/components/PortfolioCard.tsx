
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  name: string;
  sector: string;
  description: string;
  image: string; // Keeping this in interface for compatibility, but we won't use it
}

const PortfolioCard = ({ name, sector, description }: PortfolioCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-jedi-dark border border-[#555555] transition-all duration-300 hover:border-white/20 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-black/20 animate-fade-up p-6 cursor-pointer">
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">{name}</h3>
          <span className="text-xs text-jedi-white/50 uppercase tracking-wider w-[56px] text-left group-hover:text-white/70 transition-colors">{sector}</span>
        </div>
        <div className="mb-4 h-px w-16 bg-[#555555] group-hover:bg-white/20 transition-colors" />
        <p className="text-sm text-jedi-white/70 group-hover:text-white/80 transition-colors">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
