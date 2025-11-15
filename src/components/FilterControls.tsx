"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";

interface FilterControlsProps {
  onPriceChange: (value: number[]) => void;
  onColorChange: (value: string) => void;
  onSizeChange: (value: string) => void;
  onSortChange: (value: string) => void;
  price: number;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  onPriceChange,
  onColorChange,
  onSizeChange,
  onSortChange,
  price,
}) => {
  return (
    <div className="p-6 bg-card border border-border rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Filters</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Price
          </label>
          <Slider
            defaultValue={[price]}
            max={200}
            step={1}
            onValueChange={onPriceChange}
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>$0</span>
            <span>${price}</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Color
          </label>
          <Select onValueChange={onColorChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Colors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Colors</SelectItem>
              <SelectItem value="White">White</SelectItem>
              <SelectItem value="Black">Black</SelectItem>
              <SelectItem value="Blue">Blue</SelectItem>
              <SelectItem value="Red">Red</SelectItem>
              <SelectItem value="Yellow">Yellow</SelectItem>
              <SelectItem value="Gray">Gray</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Size
          </label>
          <Select onValueChange={onSizeChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Sizes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              <SelectItem value="S">S</SelectItem>
              <SelectItem value="M">M</SelectItem>
              <SelectItem value="L">L</SelectItem>
              <SelectItem value="32">32</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="One Size">One Size</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Sort by
          </label>
          <Select onValueChange={onSortChange}>
            <SelectTrigger>
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
