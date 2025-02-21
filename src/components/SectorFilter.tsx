
import { cn } from "@/lib/utils";

interface SectorFilterProps {
  sectors: string[];
  activeSector: string;
  onSectorChange: (sector: string) => void;
}

const SectorFilter = ({ sectors, activeSector, onSectorChange }: SectorFilterProps) => {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {sectors.map((sector) => (
        <button
          key={sector}
          onClick={() => onSectorChange(sector)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all",
            activeSector === sector
              ? "bg-primary text-white"
              : "bg-gray-100 text-jedi-dark hover:bg-gray-200"
          )}
        >
          {sector}
        </button>
      ))}
    </div>
  );
};

export default SectorFilter;
