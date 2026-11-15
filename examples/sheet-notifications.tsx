"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const notifications = [
  {
    id: "1",
    initials: "PS",
    message: "Commented on your design review.",
    name: "Priya Sharma",
    time: "2m ago",
    unread: true,
  },
  {
    id: "2",
    initials: "RM",
    message: "Invited you to the Marketing project.",
    name: "Rahul Mehta",
    time: "1h ago",
    unread: true,
  },
  {
    id: "3",
    initials: "AD",
    message: "Approved your pull request.",
    name: "Ananya Das",
    time: "Yesterday",
    unread: false,
  },
];

export const SheetNotifications = () => {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Notifications
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <SheetTitle>Notifications</SheetTitle>
            {unreadCount > 0 ? (
              <Badge variant="secondary">{unreadCount} new</Badge>
            ) : null}
          </div>
          <SheetDescription>
            Stay up to date with recent activity.
          </SheetDescription>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-4">
          <ul className="flex flex-col">
            {notifications.map((item, index) => (
              <li key={item.id}>
                <div className="flex items-start gap-3 py-3">
                  <Avatar className="size-9 shrink-0">
                    <AvatarFallback className="text-xs">
                      {item.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-medium">
                        {item.name}
                      </p>
                      {item.unread ? (
                        <span
                          className="size-2 shrink-0 rounded-full bg-primary"
                          aria-label="Unread"
                        />
                      ) : null}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.message}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
                {index < notifications.length - 1 ? <Separator /> : null}
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
