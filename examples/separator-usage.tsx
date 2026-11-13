import { Separator } from "@/components/ui/separator";

export const SeparatorUsage = () => (
  <div className="w-full max-w-sm">
    <div>
      <h3 className="text-sm font-medium">Pattachitra</h3>
      <p className="text-muted-foreground text-sm">
        Cloth-based scroll painting from Odisha.
      </p>
    </div>
    <Separator variant="plain" className="my-4" />
    <div className="flex h-5 items-center gap-4 text-sm">
      <div>Raghurajpur</div>
      <Separator orientation="vertical" />
      <div>Puri</div>
      <Separator orientation="vertical" />
      <div>Odisha</div>
    </div>
  </div>
);
