"use client";

import { useState } from "react";
import { ProductFilters, ProductCategory, ProductCondition } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface CategoryFiltersProps {
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
  category: ProductCategory;
}

const brands = [
  "Chanel", "Hermès", "Louis Vuitton", "Gucci", "Prada", "Dior", 
  "Balenciaga", "Saint Laurent", "Bottega Veneta", "Celine", "Loewe", "Givenchy"
];

const conditions: { value: ProductCondition; label: string }[] = [
  { value: ProductCondition.NEW, label: "New" },
  { value: ProductCondition.LIKE_NEW, label: "Like New" },
  { value: ProductCondition.EXCELLENT, label: "Excellent" },
  { value: ProductCondition.VERY_GOOD, label: "Very Good" },
  { value: ProductCondition.GOOD, label: "Good" },
  { value: ProductCondition.FAIR, label: "Fair" }
];

const priceRanges = [
  { label: "Under $500", min: 0, max: 500 },
  { label: "$500 - $1,000", min: 500, max: 1000 },
  { label: "$1,000 - $2,500", min: 1000, max: 2500 },
  { label: "$2,500 - $5,000", min: 2500, max: 5000 },
  { label: "$5,000 - $10,000", min: 5000, max: 10000 },
  { label: "Over $10,000", min: 10000, max: 100000 }
];

export function CategoryFilters({ filters, onFilterChange, category }: CategoryFiltersProps) {
  const [customPriceRange, setCustomPriceRange] = useState({
    min: filters.priceRange?.min || 0,
    max: filters.priceRange?.max || 100000
  });

  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brand?.includes(brand)
      ? filters.brand.filter(b => b !== brand)
      : [...(filters.brand || []), brand];
    
    onFilterChange({ ...filters, brand: newBrands });
  };

  const handleConditionToggle = (condition: ProductCondition) => {
    const newConditions = filters.condition?.includes(condition)
      ? filters.condition.filter(c => c !== condition)
      : [...(filters.condition || []), condition];
    
    onFilterChange({ ...filters, condition: newConditions });
  };

  const handlePriceRangeSelect = (min: number, max: number) => {
    onFilterChange({ ...filters, priceRange: { min, max } });
  };

  const handleCustomPriceChange = () => {
    onFilterChange({ 
      ...filters, 
      priceRange: { 
        min: customPriceRange.min, 
        max: customPriceRange.max 
      } 
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      brand: [],
      condition: [],
      priceRange: undefined
    });
    setCustomPriceRange({ min: 0, max: 100000 });
  };

  const hasActiveFilters = 
    (filters.brand && filters.brand.length > 0) ||
    (filters.condition && filters.condition.length > 0) ||
    filters.priceRange;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Brand Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Brand</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brand?.includes(brand) || false}
                onChange={() => handleBrandToggle(brand)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Condition Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Condition</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {conditions.map((condition) => (
            <label key={condition.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.condition?.includes(condition.value) || false}
                onChange={() => handleConditionToggle(condition.value)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{condition.label}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Price Range Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range.label}
                onClick={() => handlePriceRangeSelect(range.min, range.max)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  filters.priceRange?.min === range.min && filters.priceRange?.max === range.max
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-gray-100"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-600 mb-3">Custom Range</p>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={customPriceRange.min}
                onChange={(e) => setCustomPriceRange({
                  ...customPriceRange,
                  min: parseInt(e.target.value) || 0
                })}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="number"
                placeholder="Max"
                value={customPriceRange.max}
                onChange={(e) => setCustomPriceRange({
                  ...customPriceRange,
                  max: parseInt(e.target.value) || 100000
                })}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <Button size="sm" onClick={handleCustomPriceChange}>
                Apply
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Authenticity Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Authenticity</CardTitle>
        </CardHeader>
        <CardContent>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.authenticityGuaranteed || false}
              onChange={(e) => onFilterChange({
                ...filters,
                authenticityGuaranteed: e.target.checked
              })}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-700">Authenticity Guaranteed Only</span>
          </label>
        </CardContent>
      </Card>
    </div>
  );
}
