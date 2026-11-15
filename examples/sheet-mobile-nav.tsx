"use client";

import {
  CreditCardIcon,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { icon: HomeIcon, label: "Home" },
  { icon: UserIcon, label: "Profile" },
  { icon: CreditCardIcon, label: "Billing" },
  { icon: SettingsIcon, label: "Settings" },
];

export const SheetMobileNav = () => (
  <Sheet>
    <SheetTrigger render={<Button variant="outline" />}>Open menu</SheetTrigger>
    <SheetContent side="left" className="sm:max-w-xs">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
        <SheetDescription>Navigate your account and settings.</SheetDescription>
      </SheetHeader>

      <nav
        className="flex flex-1 flex-col px-2 pb-4"
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <SheetClose
                  render={
                    <button
                      type="button"
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  }
                >
                  <Icon
                    className="size-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  {item.label}
                </SheetClose>
              </li>
            );
          })}
        </ul>
        <Separator className="my-3" />
        <SheetClose
          render={
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-destructive transition-colors hover:bg-destructive/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          }
        >
          <LogOutIcon className="size-4" aria-hidden="true" />
          Log out
        </SheetClose>
      </nav>
    </SheetContent>
  </Sheet>
);
