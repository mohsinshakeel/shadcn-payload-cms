import { colors } from '@/configs/constants';
import { cn } from '@/lib/cn';

interface ColorSelectorProps {
  onSelect: (color: string) => void;
  label: string;
  selectedColor: string;
}

const ColorSelector = ({
  onSelect,
  label,
  selectedColor,
}: ColorSelectorProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-primary text-sm font-bold">{label}</p>
      <div className="flex gap-2">
        {colors.map((color) => (
          <div
            key={color.name}
            className={cn(
              'w-12 h-12 rounded-full cursor-pointer',
              selectedColor === color.value &&
                'w-14 h-14 border-2 border-primary'
            )}
            style={{ backgroundColor: color.value }}
            onClick={() => onSelect(color.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
