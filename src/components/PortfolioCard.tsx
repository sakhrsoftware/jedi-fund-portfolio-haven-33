
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  name: string;
  sector: string;
  description: string;
  image: string;
}

const PortfolioCard = ({ name, sector, description, image }: PortfolioCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-jedi-dark border border-gray-800 transition-all hover:border-gray-700 animate-fade-up">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-white">
            {sector}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm text-jedi-white/70">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
