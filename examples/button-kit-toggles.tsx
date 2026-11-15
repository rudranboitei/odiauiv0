"use client";

import {
  BookmarkButton,
  FormatToggleGroup,
  FollowButton,
  LikeButton,
  MuteButton,
  PlayPauseButton,
  SubscribeButton,
  ThemeToggleButton,
} from "@/components/ui/button-kit";

export const ButtonKitToggles = () => (
  <div className="flex flex-wrap items-center justify-center gap-3">
    <LikeButton count={128} />
    <BookmarkButton />
    <FollowButton />
    <SubscribeButton />
    <FormatToggleGroup variant="outline" />
    <ThemeToggleButton />
    <MuteButton />
    <PlayPauseButton />
  </div>
);
