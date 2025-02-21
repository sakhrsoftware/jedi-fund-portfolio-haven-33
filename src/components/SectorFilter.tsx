
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
}

const SectorFilter = ({ sectors, activeSector, onSectorChange }: SectorFilterProps) => {
  return (
    <Select value={activeSector} onValueChange={onSectorChange}>
      <SelectTrigger className="w-[180px] bg-transparent text-jedi-white border-[#555555] hover:bg-black/40 transition-colors">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent className="bg-black/90 text-jedi-white border-[#555555] min-w-[180px]">
        {sectors.map((sector) => (
          <SelectItem 
            key={sector} 
            value={sector}
            className="hover:bg-gray-800/50 focus:bg-gray-800/50 text-gray-400 data-[state=checked]:text-white"
          >
            {sector}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SectorFilter;
