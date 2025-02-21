
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  name: string;
  sector: string;
  description: string;
  image: string;
}

const PortfolioCard = ({ name, sector, description, image }: PortfolioCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl animate-fade-up">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {sector}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-jedi-dark">{name}</h3>
        <p className="text-sm text-jedi-gray">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
