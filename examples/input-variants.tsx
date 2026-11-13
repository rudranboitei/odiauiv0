import { Input } from "@/components/ui/input";

export const InputVariants = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Input placeholder="Enter your name..." />
    <Input variant="search" placeholder="Search..." />
    <Input variant="email" placeholder="you@example.com" />
    <Input variant="password" placeholder="••••••••" />
    <Input variant="file" />
  </div>
);
