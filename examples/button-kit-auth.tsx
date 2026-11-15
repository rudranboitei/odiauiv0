"use client";

import {
  AppleButton,
  FacebookButton,
  GithubButton,
  GoogleButton,
  LogOutButton,
  SendOtpButton,
  SignInButton,
  SignUpButton,
  VerifyOtpButton,
  XButton,
  CopyLinkButton,
} from "@/components/ui/button-kit";

export const ButtonKitAuth = () => (
  <div className="flex flex-col items-center gap-6">
    <div className="flex flex-wrap items-center justify-center gap-3">
      <GoogleButton />
      <GithubButton />
      <AppleButton />
      <XButton />
      <FacebookButton />
    </div>
    <div className="flex flex-wrap items-center justify-center gap-3">
      <SignInButton />
      <SignUpButton />
      <LogOutButton />
      <SendOtpButton />
      <VerifyOtpButton variant="outline" />
    </div>
    <CopyLinkButton link="https://odiaui.xyz" />
  </div>
);
