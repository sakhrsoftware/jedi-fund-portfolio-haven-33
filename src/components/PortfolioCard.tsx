
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  name: string;
  sector: string;
  description: string;
  image: string; // Keeping this in interface for compatibility, but we won't use it
}

const PortfolioCard = ({ name, sector, description }: PortfolioCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-jedi-dark border border-[#555555] transition-all duration-300 hover:border-[#666666] hover:translate-y-[-4px] hover:shadow-lg hover:shadow-black/20 animate-fade-up p-6">
      <div className="flex flex-col">
        <h3 className="mb-3 text-xl font-semibold text-white">{name}</h3>
        <div className="mb-4 h-px w-16 bg-[#555555]" />
        <p className="text-sm text-jedi-white/70">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
