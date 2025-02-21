
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
      <SelectTrigger className="w-[180px] bg-jedi-dark text-white border-gray-700">
        <SelectValue placeholder="Select sector" />
      </SelectTrigger>
      <SelectContent className="bg-jedi-dark text-white border-gray-700">
        {sectors.map((sector) => (
          <SelectItem 
            key={sector} 
            value={sector}
            className="hover:bg-primary/10 focus:bg-primary/10"
          >
            {sector}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SectorFilter;
