"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { KeyFactors } from '@/components/KeyFactors';
import { FilterSection } from '@/components/FilterSection';
import { ProductList } from '@/components/ProductList';
import { ComparisonTable } from '@/components/ComparisonTable';
import { AnimatedFactsBanner } from '@/components/AnimatedFactsBanner';
import { Scale, Zap, Truck, Lock } from 'lucide-react';

const washingMachines = [
  { id: 1, name: 'EcoWash Pro', brand: 'GreenTech', price: 599, rating: 4.5, features: ['Energy efficient', 'Large capacity', 'Smart controls'], image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 2, name: 'QuickClean 3000', brand: 'SpeedWash', price: 499, rating: 4.3, features: ['Quick wash cycle', 'Compact design', 'Multiple wash programs'], image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 3, name: 'SilentWash Deluxe', brand: 'QuietHome', price: 699, rating: 4.7, features: ['Ultra-quiet operation', 'Steam cleaning', 'Wi-Fi enabled'], image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
];

const keyFactors = [
  {
    title: "Capacity",
    description: "Choose based on your laundry volume",
    icon: <Scale className="h-6 w-6" />,
    hoverText: "Larger capacity machines are great for families, while smaller ones are more energy-efficient for individuals or couples."
  },
  {
    title: "Energy Efficiency",
    description: "Look for energy-saving features",
    icon: <Zap className="h-6 w-6" />,
    hoverText: "Energy-efficient machines may cost more upfront but can save you money on utility bills in the long run."
  },
  {
    title: "Wash Programs",
    description: "Consider your specific laundry needs",
    icon: <Truck className="h-6 w-6" />,
    hoverText: "More wash programs offer versatility, but ensure you'll actually use the additional features."
  },
  {
    title: "Noise Level",
    description: "Important for open-plan living spaces",
    icon: <Lock className="h-6 w-6" />,
    hoverText: "Lower decibel ratings mean quieter operation, which is crucial if your laundry area is near living spaces."
  },
];

const interestingFacts = [
  {
    text: "The world's largest washing machine can wash up to 100kg of laundry in a single cycle!",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    text: "The first electric-powered washing machine was invented in 1908 by Alva J. Fisher.",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    text: "Some modern washing machines use as little as 13 liters of water per kilogram of clothes.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    text: "The average family does about 300 loads of laundry per year!",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  }
];

export default function WashingMachines() {
  const [budget, setBudget] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [size, setSize] = useState('');
  const [type, setType] = useState('');

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Washing Machine Recommendations</h1>

      <KeyFactors factors={keyFactors} />

      <div className="flex flex-col md:flex-row gap-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden mb-4">Filters</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle>Filters</SheetTitle>
            <FilterSection
              budget={budget}
              setBudget={setBudget}
              selectedBrands={selectedBrands}
              handleBrandChange={handleBrandChange}
              brands={['GreenTech', 'SpeedWash', 'QuietHome']}
              size={size}
              setSize={setSize}
              sizes={['Small', 'Medium', 'Large']}
              type={type}
              setType={setType}
              types={['Front Load', 'Top Load', 'Combo']}
            />
          </SheetContent>
        </Sheet>

        <div className="hidden md:block w-1/4">
          <FilterSection
            budget={budget}
            setBudget={setBudget}
            selectedBrands={selectedBrands}
            handleBrandChange={handleBrandChange}
            brands={['GreenTech', 'SpeedWash', 'QuietHome']}
            size={size}
            setSize={setSize}
            sizes={['Small', 'Medium', 'Large']}
            type={type}
            setType={setType}
            types={['Front Load', 'Top Load', 'Combo']}
          />
        </div>

        <div className="w-full md:w-3/4">
          <ProductList products={washingMachines} totalModels={100} />
          <ComparisonTable products={washingMachines} />
        </div>
      </div>

      <div className="mt-12">
        <AnimatedFactsBanner facts={interestingFacts} />
      </div>
    </div>
  );
}