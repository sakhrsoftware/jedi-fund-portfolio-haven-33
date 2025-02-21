
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  name: string;
  sector: string;
  description: string;
  image: string; // Keeping this in interface for compatibility, but we won't use it
}

const PortfolioCard = ({ name, sector, description }: PortfolioCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-jedi-dark border border-[#555555] transition-all hover:border-[#666666] animate-fade-up p-6">
      <div className="flex flex-col">
        <div className="mb-3">
          <span className="inline-block rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-white">
            {sector}
          </span>
        </div>
        <h3 className="mb-3 text-xl font-semibold text-white">{name}</h3>
        <div className="mb-4 h-px w-16 bg-gray-700" />
        <p className="text-sm text-jedi-white/70">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
