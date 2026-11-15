"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export const SheetFilters = () => {
  const [price, setPrice] = React.useState([50]);
  const [sort, setSort] = React.useState("newest");
  const [inStock, setInStock] = React.useState(true);
  const [onSale, setOnSale] = React.useState(false);

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Filters</SheetTrigger>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Refine results by price, sort order, and availability.
          </SheetDescription>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 pb-4">
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <Label>Max price</Label>
              <span className="text-sm text-muted-foreground">${price[0]}</span>
            </div>
            <Slider
              value={price}
              onValueChange={(value) => setPrice(value as number[])}
              max={200}
              step={5}
              aria-label="Maximum price"
            />
          </div>

          <div className="grid gap-3">
            <Label>Sort by</Label>
            <RadioGroup
              value={sort}
              onValueChange={(value) => setSort(String(value))}
            >
              {[
                { id: "newest", label: "Newest" },
                { id: "price-low", label: "Price: low to high" },
                { id: "price-high", label: "Price: high to low" },
                { id: "popular", label: "Most popular" },
              ].map((option) => (
                <div key={option.id} className="flex items-center gap-3">
                  <RadioGroupItem value={option.id} id={`sort-${option.id}`} />
                  <Label htmlFor={`sort-${option.id}`} className="font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="grid gap-3">
            <Label>Availability</Label>
            <div className="flex items-center justify-between rounded-xl border p-3">
              <Label htmlFor="in-stock" className="font-normal">
                In stock only
              </Label>
              <Switch
                id="in-stock"
                checked={inStock}
                onCheckedChange={setInStock}
                aria-label="In stock only"
              />
            </div>
            <div className="flex items-center justify-between rounded-xl border p-3">
              <Label htmlFor="on-sale" className="font-normal">
                On sale
              </Label>
              <Switch
                id="on-sale"
                checked={onSale}
                onCheckedChange={setOnSale}
                aria-label="On sale"
              />
            </div>
          </div>
        </div>

        <SheetFooter className="flex-row">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              setPrice([50]);
              setSort("newest");
              setInStock(true);
              setOnSale(false);
            }}
          >
            Reset
          </Button>
          <SheetClose render={<Button className="flex-1" />}>
            Apply filters
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
