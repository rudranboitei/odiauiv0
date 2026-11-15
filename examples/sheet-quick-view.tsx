"use client";

import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const rows = [
  {
    customer: "Priya Sharma",
    id: "ORD-1001",
    status: "Paid",
    total: "$120.00",
  },
  {
    customer: "Rahul Mehta",
    id: "ORD-1002",
    status: "Pending",
    total: "$80.00",
  },
  {
    customer: "Ananya Das",
    id: "ORD-1003",
    status: "Shipped",
    total: "$240.00",
  },
];

type Row = (typeof rows)[number];

export const SheetQuickView = () => {
  const [selected, setSelected] = React.useState<Row | null>(null);

  return (
    <>
      <div className="w-full max-w-md overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="px-3 py-2 font-medium">Order</th>
              <th className="px-3 py-2 font-medium">Customer</th>
              <th className="px-3 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="cursor-pointer border-t transition-colors hover:bg-muted/40 focus-within:bg-muted/40"
                onClick={() => setSelected(row)}
              >
                <td className="px-3 py-2 font-medium">
                  <button
                    type="button"
                    className="text-left underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                    onClick={() => setSelected(row)}
                  >
                    {row.id}
                  </button>
                </td>
                <td className="px-3 py-2">{row.customer}</td>
                <td className="px-3 py-2">
                  <Badge variant="secondary">{row.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Sheet
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <SheetContent side="right" className="sm:max-w-md">
          {selected ? (
            <>
              <SheetHeader>
                <SheetTitle>{selected.id}</SheetTitle>
                <SheetDescription>
                  Quick view of order details.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-1 flex-col gap-4 px-4 pb-4">
                <div className="grid grid-cols-2 gap-3 rounded-xl border p-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Customer</p>
                    <p className="font-medium">{selected.customer}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-medium">{selected.total}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Status</p>
                    <Badge variant="secondary" className="mt-1">
                      {selected.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Items</p>
                    <p className="font-medium">3 items</p>
                  </div>
                </div>
              </div>
              <SheetFooter className="flex-row">
                <SheetClose
                  render={<Button variant="outline" className="flex-1" />}
                >
                  Close
                </SheetClose>
                <Button className="flex-1">View full order</Button>
              </SheetFooter>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  );
};
