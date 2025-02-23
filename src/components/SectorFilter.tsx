
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SectorFilterProps {
  sectors: string[];
  activeSector: string;
  onSectorChange: (sector: string) => void;
  onFilterInteraction: () => void;
}

const SectorFilter = ({ sectors, activeSector, onSectorChange, onFilterInteraction }: SectorFilterProps) => {
  const preventPropagation = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    onFilterInteraction();
  };

  return (
    <div 
      onClick={preventPropagation} 
      onTouchStart={preventPropagation}
      onTouchEnd={preventPropagation}
      onTouchMove={preventPropagation}
      className="relative z-50"
    >
      <Select value={activeSector} onValueChange={onSectorChange}>
        <SelectTrigger 
          className="w-[180px] bg-transparent text-jedi-white border-[#555555] hover:bg-black/40 transition-colors"
          onTouchStart={preventPropagation}
          onTouchEnd={preventPropagation}
          onTouchMove={preventPropagation}
        >
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent 
          className="bg-black/90 text-jedi-white border-[#555555] min-w-[180px]"
          onTouchStart={preventPropagation}
          onTouchEnd={preventPropagation}
          onTouchMove={preventPropagation}
        >
          {sectors.map((sector) => (
            <SelectItem 
              key={sector} 
              value={sector}
              className="hover:bg-gray-800/50 focus:bg-gray-800/50 text-gray-400 data-[state=checked]:text-white"
              onTouchStart={preventPropagation}
              onTouchEnd={preventPropagation}
              onTouchMove={preventPropagation}
            >
              {sector}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SectorFilter;
