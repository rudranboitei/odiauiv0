"use client";

import * as React from "react";

import { Button } from "@/components/odia/odia-button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOrnament,
  DialogTitle,
  DialogTrigger,
} from "@/components/odia/odia-dialog";

const TERMS = `
Welcome to OdiaUI. Please read these terms carefully before using our platform.

1. Acceptance of Terms

By accessing or using OdiaUI ("Service"), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use the Service.

2. Use of Service

You may use OdiaUI for lawful purposes only. You agree not to use the Service to:
- Transmit any harmful, offensive, or disruptive content.
- Attempt to gain unauthorized access to any part of the Service.
- Reproduce or redistribute our components outside the license terms.

3. Intellectual Property

All content included in OdiaUI — including component designs, Odisha heritage motifs, Ikat patterns, and documentation — is the property of OdiaUI and its contributors, protected under applicable copyright and design laws.

4. Disclaimer of Warranties

The Service is provided "as is" without warranty of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.

5. Limitation of Liability

OdiaUI shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service, even if OdiaUI has been advised of the possibility of such damages.

6. Changes to Terms

We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes your acceptance of the new Terms.

7. Governing Law

These Terms shall be governed by the laws of the State of Odisha, India.

8. Contact

For questions about these Terms, please contact us at legal@odiaui.xyz.
`;

export const DialogTermsScrollable = () => (
  <Dialog>
    <DialogTrigger render={<Button variant="outline" />}>
      Read terms
    </DialogTrigger>
    <DialogContent
      size="default"
      className="flex max-h-[80vh] flex-col p-0 overflow-hidden"
    >
      {/* Sticky header */}
      <div className="px-5 pt-5 pb-3 shrink-0">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Last updated November 15, 2026 · Please read before continuing.
          </DialogDescription>
        </DialogHeader>
        <DialogOrnament className="mt-3" />
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-5 pb-2">
        <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
          {TERMS.trim()}
        </div>
      </div>

      {/* Sticky footer */}
      <div className="shrink-0 border-t border-border px-5 py-4 bg-card/80 backdrop-blur-sm">
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Decline
          </DialogClose>
          <DialogClose render={<Button />}>I accept</DialogClose>
        </DialogFooter>
      </div>
    </DialogContent>
  </Dialog>
);
