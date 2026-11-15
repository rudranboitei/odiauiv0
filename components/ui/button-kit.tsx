"use client";

import {
  ArrowLeftIcon,
  BellIcon,
  BoldIcon,
  BookmarkIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  CopyPlusIcon,
  CreditCardIcon,
  DownloadIcon,
  HeartIcon,
  ItalicIcon,
  Loader2Icon,
  LogInIcon,
  LogOutIcon,
  MailIcon,
  MenuIcon,
  MoonIcon,
  PauseIcon,
  PencilIcon,
  PlayIcon,
  PlusIcon,
  RefreshCwIcon,
  SendIcon,
  Share2Icon,
  ShoppingCartIcon,
  ShieldCheckIcon,
  SunIcon,
  TrashIcon,
  UnderlineIcon,
  UploadIcon,
  Volume2Icon,
  VolumeXIcon,
  XIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

/** Small helper for the demo async work in the kit components. */
const delay = (ms: number) =>
  // eslint-disable-next-line promise/avoid-new
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });

/* ============================================================
 * 1. ACTION BUTTONS
 * ============================================================ */

/** Add to cart — cart icon, quantity badge, brief "Added" tick. */
const AddToCartButton = ({
  onAdd,
  ...props
}: React.ComponentProps<typeof Button> & { onAdd?: () => void }) => {
  const [quantity, setQuantity] = React.useState(0);
  const [justAdded, setJustAdded] = React.useState(false);

  const handleAdd = () => {
    setQuantity((q) => q + 1);
    setJustAdded(true);
    onAdd?.();
    window.setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <Button onClick={handleAdd} {...props}>
      {justAdded ? (
        <CheckIcon className="size-4" />
      ) : (
        <ShoppingCartIcon className="size-4" />
      )}
      {justAdded ? "Added" : "Add to cart"}
      {quantity > 0 && !justAdded && (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-foreground/25 px-1 text-xs font-semibold">
          {quantity}
        </span>
      )}
    </Button>
  );
};

/** Buy now — high emphasis, full width on mobile. */
const BuyNowButton = ({
  children = "Buy Now",
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button className="w-full sm:w-auto" size="lg" {...props}>
    <CreditCardIcon className="size-4" />
    {children}
  </Button>
);

/** Save / Save changes — loading, then a "Saved" state. */
const SaveButton = ({
  onSave,
  children = "Save changes",
  ...props
}: React.ComponentProps<typeof Button> & { onSave?: () => Promise<void> }) => {
  const [state, setState] = React.useState<"idle" | "saving" | "saved">("idle");

  const handleSave = async () => {
    setState("saving");
    try {
      await (onSave?.() ?? delay(1200));
      setState("saved");
      window.setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("idle");
    }
  };

  const labels = {
    idle: children,
    saved: "Saved",
    saving: "Saving…",
  } as const;

  return (
    <Button
      disabled={state === "saving"}
      onClick={handleSave}
      variant={state === "saved" ? "secondary" : "default"}
      {...props}
    >
      {state === "saving" && <Loader2Icon className="size-4 animate-spin" />}
      {state === "saved" && <CheckIcon className="size-4" />}
      {labels[state]}
    </Button>
  );
};

/** Submit — for forms, with a disabled-until-valid state. */
const SubmitButton = ({
  valid = false,
  children = "Submit",
  ...props
}: React.ComponentProps<typeof Button> & { valid?: boolean }) => (
  <Button disabled={!valid} type="submit" {...props}>
    <SendIcon className="size-4" />
    {children}
  </Button>
);

/** Cancel — quiet outline action. */
const CancelButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    Cancel
  </Button>
);

/** Back — quiet ghost action with a left arrow. */
const BackButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="ghost" {...props}>
    <ArrowLeftIcon className="size-4" />
    Back
  </Button>
);

/** Delete — destructive; first click asks, second click confirms. */
const DeleteConfirmButton = ({
  onDelete,
  children = "Delete",
  ...props
}: React.ComponentProps<typeof Button> & { onDelete?: () => void }) => {
  const [armed, setArmed] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const handleClick = () => {
    if (done) {
      return;
    }
    if (armed) {
      onDelete?.();
      setArmed(false);
      setDone(true);
      window.setTimeout(() => setDone(false), 2000);
    } else {
      setArmed(true);
      window.setTimeout(() => setArmed(false), 3000);
    }
  };

  let label: React.ReactNode = children;
  if (armed) {
    label = "Are you sure?";
  }
  if (done) {
    label = "Deleted";
  }

  return (
    <Button
      onClick={handleClick}
      variant={armed || done ? "destructive" : "outline"}
      {...props}
    >
      {done ? (
        <CheckIcon className="size-4" />
      ) : (
        <TrashIcon className="size-4" />
      )}
      {label}
    </Button>
  );
};

/** Edit — quiet icon action. */
const EditButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <PencilIcon className="size-4" />
    Edit
  </Button>
);

/** Duplicate / Copy. */
const DuplicateButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <CopyPlusIcon className="size-4" />
    Duplicate
  </Button>
);

/** Share. */
const ShareButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <Share2Icon className="size-4" />
    Share
  </Button>
);

/** Download. */
const DownloadButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <DownloadIcon className="size-4" />
    Download
  </Button>
);

/** Upload. */
const UploadButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <UploadIcon className="size-4" />
    Upload
  </Button>
);

/** Refresh / Retry — icon spins while the work runs. */
const RefreshButton = ({
  onRefresh,
  children = "Refresh",
  ...props
}: React.ComponentProps<typeof Button> & {
  onRefresh?: () => Promise<void>;
}) => {
  const [busy, setBusy] = React.useState(false);

  const handleRefresh = async () => {
    setBusy(true);
    try {
      await (onRefresh?.() ?? delay(1200));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button
      disabled={busy}
      onClick={handleRefresh}
      variant="outline"
      {...props}
    >
      <RefreshCwIcon className={cn("size-4", busy && "animate-spin")} />
      {children}
    </Button>
  );
};

/* ============================================================
 * 2. STATE BUTTONS
 * ============================================================ */

/** Loading — spinner with "Processing…" while an async task runs. */
const ProcessingButton = ({
  onProcess,
  children = "Process",
  ...props
}: React.ComponentProps<typeof Button> & {
  onProcess?: () => Promise<void>;
}) => {
  const [busy, setBusy] = React.useState(false);

  const handleClick = async () => {
    setBusy(true);
    try {
      await (onProcess?.() ?? delay(2000));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button loading={busy} onClick={handleClick} {...props}>
      {busy ? "Processing…" : children}
    </Button>
  );
};

/** Success — turns green with a tick after the task, then resets. */
const SuccessStateButton = ({
  onRun,
  children = "Confirm payment",
  ...props
}: React.ComponentProps<typeof Button> & { onRun?: () => Promise<void> }) => {
  const [state, setState] = React.useState<"idle" | "running" | "success">(
    "idle"
  );

  const handleRun = async () => {
    setState("running");
    try {
      await (onRun?.() ?? delay(1200));
      setState("success");
      window.setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("idle");
    }
  };

  return (
    <Button
      className={
        state === "success"
          ? "bg-emerald-600 text-white hover:bg-emerald-600"
          : undefined
      }
      disabled={state === "running"}
      onClick={handleRun}
      {...props}
    >
      {state === "running" && <Loader2Icon className="size-4 animate-spin" />}
      {state === "success" && <CheckIcon className="size-4" />}
      {state === "success" ? "Success" : children}
    </Button>
  );
};

/** Error — shakes with a "Try again" label, then resets. */
const ErrorRetryButton = ({
  onRun,
  children = "Submit",
  ...props
}: React.ComponentProps<typeof Button> & { onRun?: () => Promise<void> }) => {
  const [state, setState] = React.useState<"idle" | "error">("idle");

  const handleRun = async () => {
    try {
      await onRun?.();
      setState("idle");
    } catch {
      setState("error");
      window.setTimeout(() => setState("idle"), 1800);
    }
  };

  return (
    <motion.div
      animate={
        state === "error" ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }
      }
      className="inline-flex"
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Button
        className={
          state === "error"
            ? "border border-destructive/40 bg-destructive/10 text-destructive hover:bg-destructive/10"
            : undefined
        }
        onClick={handleRun}
        variant={state === "error" ? "outline" : "default"}
        {...props}
      >
        {state === "error" ? "Try again" : children}
      </Button>
    </motion.div>
  );
};

/** Progress — fills as an upload or task runs, shows the percentage. */
const ProgressButton = ({
  onRun,
  children = "Upload file",
  ...props
}: React.ComponentProps<typeof Button> & { onRun?: () => Promise<void> }) => {
  const [progress, setProgress] = React.useState(0);
  const timer = React.useRef<number | null>(null);
  const running = progress > 0 && progress < 100;
  const done = progress >= 100;

  const handleRun = () => {
    if (timer.current) {
      return;
    }
    setProgress(1);
    onRun?.();
    timer.current = window.setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.ceil(Math.random() * 12)));
    }, 150);
  };

  React.useEffect(() => {
    if (progress >= 100 && timer.current) {
      window.clearInterval(timer.current);
      timer.current = null;
      const reset = window.setTimeout(() => setProgress(0), 2000);
      return () => window.clearTimeout(reset);
    }
  }, [progress]);

  React.useEffect(
    () => () => {
      if (timer.current) {
        window.clearInterval(timer.current);
      }
    },
    []
  );

  let progressLabel: React.ReactNode = children;
  if (running) {
    progressLabel = `Uploading… ${progress}%`;
  }
  if (done) {
    progressLabel = "Uploaded";
  }

  return (
    <Button
      className="relative overflow-hidden"
      disabled={running || done}
      onClick={handleRun}
      variant={done ? "secondary" : "default"}
      {...props}
    >
      <span
        className="absolute inset-y-0 left-0 bg-primary-foreground/25 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
      <span className="relative inline-flex items-center gap-2">
        {done ? <CheckIcon className="size-4" /> : null}
        {progressLabel}
      </span>
    </Button>
  );
};

/** Countdown — "Resend OTP in 30s", disabled until the timer ends. */
const CountdownButton = ({
  duration = 30,
  onResend,
  children = "Resend OTP",
  ...props
}: React.ComponentProps<typeof Button> & {
  duration?: number;
  onResend?: () => void;
}) => {
  const [remaining, setRemaining] = React.useState(0);

  const handleResend = () => {
    onResend?.();
    setRemaining(duration);
  };

  React.useEffect(() => {
    if (remaining <= 0) {
      return;
    }
    const timer = window.setTimeout(
      () => setRemaining((s) => Math.max(0, s - 1)),
      1000
    );
    return () => window.clearTimeout(timer);
  }, [remaining]);

  return (
    <Button
      disabled={remaining > 0}
      onClick={handleResend}
      variant="outline"
      {...props}
    >
      {remaining > 0 ? `Resend OTP in ${remaining}s` : children}
    </Button>
  );
};

/** Hold to confirm — press and hold to run a destructive action. */
const HoldToConfirmButton = ({
  onConfirm,
  children = "Hold to delete",
  ...props
}: React.ComponentProps<typeof Button> & { onConfirm?: () => void }) => {
  const HOLD_MS = 1200;
  const [progress, setProgress] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const timer = React.useRef<number | null>(null);

  const start = () => {
    if (timer.current || done) {
      return;
    }
    timer.current = window.setInterval(
      () => setProgress((p) => Math.min(HOLD_MS, p + 50)),
      50
    );
  };

  const stop = () => {
    if (timer.current) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
    if (!done) {
      setProgress(0);
    }
  };

  React.useEffect(() => {
    if (progress >= HOLD_MS) {
      stop();
      onConfirm?.();
      setDone(true);
      setProgress(0);
      const reset = window.setTimeout(() => setDone(false), 2000);
      return () => window.clearTimeout(reset);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  React.useEffect(
    () => () => {
      if (timer.current) {
        window.clearInterval(timer.current);
      }
    },
    []
  );

  return (
    <Button
      className="relative overflow-hidden select-none"
      onPointerDown={start}
      onPointerLeave={stop}
      onPointerUp={stop}
      variant={done ? "secondary" : "destructive"}
      {...props}
    >
      <span
        className="absolute inset-y-0 left-0 bg-primary-foreground/25"
        style={{ width: `${(progress / HOLD_MS) * 100}%` }}
      />
      <span className="relative inline-flex items-center gap-2">
        {done ? (
          <CheckIcon className="size-4" />
        ) : (
          <TrashIcon className="size-4" />
        )}
        {done ? "Deleted" : children}
      </span>
    </Button>
  );
};

/* ============================================================
 * 3. TOGGLE BUTTONS
 * ============================================================ */

/** Like / Favorite — heart fills with a spring pop. */
const LikeButton = ({
  count = 0,
  ...props
}: React.ComponentProps<typeof Button> & { count?: number }) => {
  const [liked, setLiked] = React.useState(false);

  const likeCount = liked ? count + 1 : count;

  return (
    <Button
      aria-pressed={liked}
      onClick={() => setLiked((l) => !l)}
      variant="outline"
      {...props}
    >
      <motion.span
        animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
        className="inline-flex"
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <HeartIcon
          className={cn("size-4", liked && "fill-rose-500 text-rose-500")}
        />
      </motion.span>
      {liked || count > 0 ? likeCount : "Like"}
    </Button>
  );
};

/** Bookmark / Save for later. */
const BookmarkButton = (props: React.ComponentProps<typeof Button>) => {
  const [saved, setSaved] = React.useState(false);

  return (
    <Button
      aria-pressed={saved}
      onClick={() => setSaved((s) => !s)}
      variant="outline"
      {...props}
    >
      <BookmarkIcon
        className={cn("size-4", saved && "fill-primary text-primary")}
      />
      {saved ? "Saved" : "Save for later"}
    </Button>
  );
};

/** Follow / Following — shows "Unfollow" on hover. */
const FollowButton = ({
  onFollow,
  ...props
}: React.ComponentProps<typeof Button> & { onFollow?: () => void }) => {
  const [following, setFollowing] = React.useState(false);

  return (
    <Button
      className="group"
      onClick={() => {
        setFollowing((f) => !f);
        onFollow?.();
      }}
      variant={following ? "outline" : "default"}
      {...props}
    >
      {following ? (
        <>
          <span className="group-hover:hidden">Following</span>
          <span className="hidden text-destructive group-hover:inline">
            Unfollow
          </span>
        </>
      ) : (
        "Follow"
      )}
    </Button>
  );
};

/** Subscribe / Notify me — bell icon. */
const SubscribeButton = (props: React.ComponentProps<typeof Button>) => {
  const [subscribed, setSubscribed] = React.useState(false);

  return (
    <Button
      aria-pressed={subscribed}
      onClick={() => setSubscribed((s) => !s)}
      variant={subscribed ? "secondary" : "default"}
      {...props}
    >
      <BellIcon className={cn("size-4", subscribed && "fill-current")} />
      {subscribed ? "Subscribed" : "Notify me"}
    </Button>
  );
};

/** Toggle group — bold, italic, underline. */
const FormatToggleGroup = (props: React.ComponentProps<typeof ToggleGroup>) => (
  <ToggleGroup {...props}>
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon className="size-4" />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <ItalicIcon className="size-4" />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon className="size-4" />
    </ToggleGroupItem>
  </ToggleGroup>
);

/** Theme toggle — light / dark via next-themes. */
const ThemeToggleButton = (props: React.ComponentProps<typeof Button>) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      size="icon"
      variant="outline"
      {...props}
    >
      {mounted && resolvedTheme === "dark" ? (
        <SunIcon className="size-4" />
      ) : (
        <MoonIcon className="size-4" />
      )}
    </Button>
  );
};

/** Mute / Unmute. */
const MuteButton = (props: React.ComponentProps<typeof Button>) => {
  const [muted, setMuted] = React.useState(false);

  return (
    <Button
      aria-pressed={muted}
      onClick={() => setMuted((m) => !m)}
      size="icon"
      variant="outline"
      {...props}
    >
      {muted ? (
        <VolumeXIcon className="size-4" />
      ) : (
        <Volume2Icon className="size-4" />
      )}
    </Button>
  );
};

/** Play / Pause. */
const PlayPauseButton = (props: React.ComponentProps<typeof Button>) => {
  const [playing, setPlaying] = React.useState(false);

  return (
    <Button
      aria-pressed={playing}
      onClick={() => setPlaying((p) => !p)}
      variant="outline"
      {...props}
    >
      {playing ? (
        <PauseIcon className="size-4" />
      ) : (
        <PlayIcon className="size-4 fill-current" />
      )}
      {playing ? "Pause" : "Play"}
    </Button>
  );
};

/* ============================================================
 * 4. AUTH AND SOCIAL BUTTONS
 * ============================================================ */

const BrandIcon = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <svg
    aria-hidden="true"
    className={cn("size-4", className)}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    {children}
  </svg>
);

/** Continue with Google. */
const GoogleButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <BrandIcon>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </BrandIcon>
    Continue with Google
  </Button>
);

/** Continue with GitHub. */
const GithubButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <BrandIcon>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </BrandIcon>
    Continue with GitHub
  </Button>
);

/** Continue with Apple. */
const AppleButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <BrandIcon>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </BrandIcon>
    Continue with Apple
  </Button>
);

/** Continue with X. */
const XButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <BrandIcon>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </BrandIcon>
    Continue with X
  </Button>
);

/** Continue with Facebook. */
const FacebookButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <BrandIcon>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </BrandIcon>
    Continue with Facebook
  </Button>
);

/** Sign in. */
const SignInButton = (props: React.ComponentProps<typeof Button>) => (
  <Button {...props}>
    <LogInIcon className="size-4" />
    Sign in
  </Button>
);

/** Sign up. */
const SignUpButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    Sign up
  </Button>
);

/** Log out. */
const LogOutButton = (props: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" {...props}>
    <LogOutIcon className="size-4" />
    Log out
  </Button>
);

/** Send OTP — brief "OTP Sent" success state. */
const SendOtpButton = ({
  onSend,
  ...props
}: React.ComponentProps<typeof Button> & { onSend?: () => void }) => {
  const [sent, setSent] = React.useState(false);

  const handleSend = () => {
    onSend?.();
    setSent(true);
    window.setTimeout(() => setSent(false), 2000);
  };

  return (
    <Button disabled={sent} onClick={handleSend} {...props}>
      {sent ? (
        <CheckIcon className="size-4" />
      ) : (
        <MailIcon className="size-4" />
      )}
      {sent ? "OTP Sent" : "Send OTP"}
    </Button>
  );
};

/** Verify OTP. */
const VerifyOtpButton = ({
  onVerify,
  ...props
}: React.ComponentProps<typeof Button> & { onVerify?: () => void }) => (
  <Button onClick={onVerify} {...props}>
    <ShieldCheckIcon className="size-4" />
    Verify OTP
  </Button>
);

/** Copy link / Copy code — shows "Copied!" for two seconds. */
const CopyLinkButton = ({
  link,
  onCopy,
  copiedLabel = "Copied!",
  children = "Copy link",
  ...props
}: React.ComponentProps<typeof Button> & {
  link: string;
  onCopy?: (link: string) => void;
  copiedLabel?: string;
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      // Clipboard unavailable — still show feedback.
    }
    onCopy?.(link);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button onClick={handleCopy} variant="outline" {...props}>
      {copied ? (
        <CheckIcon className="size-4" />
      ) : (
        <CopyIcon className="size-4" />
      )}
      {copied ? copiedLabel : children}
    </Button>
  );
};

/* ============================================================
 * 5. ICON AND COMPACT BUTTONS
 * ============================================================ */

/** Icon-only button with a tooltip and an accessible label. */
const IconButton = ({
  label,
  children,
  ...props
}: React.ComponentProps<typeof Button> & {
  label: string;
  children: React.ReactNode;
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" variant="ghost" {...props}>
        {children}
        <span className="sr-only">{label}</span>
      </Button>
    </TooltipTrigger>
    <TooltipContent>{label}</TooltipContent>
  </Tooltip>
);

/** Floating action button — add `fixed bottom-6 right-6 z-50` in usage. */
const FabButton = ({
  children,
  label = "Add",
  ...props
}: React.ComponentProps<typeof Button> & {
  label?: string;
  children?: React.ReactNode;
}) => (
  <Button
    aria-label={label}
    className="size-12 rounded-full shadow-lg"
    size="icon"
    {...props}
  >
    {children ?? <PlusIcon className="size-5" />}
    <span className="sr-only">{label}</span>
  </Button>
);

/** Close (X) — icon-only dismiss action. */
const CloseButton = (props: React.ComponentProps<typeof Button>) => (
  <Button aria-label="Close" size="icon" variant="ghost" {...props}>
    <XIcon className="size-4" />
  </Button>
);

/** Menu (hamburger) — icon-only navigation trigger. */
const MenuButton = (props: React.ComponentProps<typeof Button>) => (
  <Button aria-label="Open menu" size="icon" variant="ghost" {...props}>
    <MenuIcon className="size-5" />
  </Button>
);

/** Scroll to top — appears after scrolling down the page. */
const ScrollTopButton = (props: React.ComponentProps<typeof Button>) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <Button
      aria-label="Scroll to top"
      className="fixed right-6 bottom-6 z-50 shadow-lg"
      onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
      size="icon"
      variant="outline"
      {...props}
    >
      <ChevronDownIcon className="size-4 rotate-180" />
    </Button>
  );
};

/** Expand / Collapse — chevron rotates with the open state. */
const ExpandCollapseButton = ({
  open,
  onOpenChange,
  children = "Details",
  ...props
}: React.ComponentProps<typeof Button> & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const toggle = () => {
    const next = !isOpen;
    if (!isControlled) {
      setInternalOpen(next);
    }
    onOpenChange?.(next);
  };

  return (
    <Button
      aria-expanded={isOpen}
      onClick={toggle}
      variant="outline"
      {...props}
    >
      {children}
      <ChevronDownIcon
        className={cn(
          "size-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </Button>
  );
};

/** Pagination — previous, next and page numbers. */
const Pagination = ({
  page,
  totalPages,
  onPageChange,
  className,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}) => (
  <nav
    aria-label="Pagination"
    className={cn("flex items-center gap-1", className)}
  >
    <Button
      aria-label="Previous page"
      disabled={page <= 1}
      onClick={() => onPageChange(page - 1)}
      size="icon-sm"
      variant="ghost"
    >
      <ChevronLeftIcon className="size-4" />
    </Button>
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
      <Button
        aria-current={p === page ? "page" : undefined}
        key={p}
        onClick={() => onPageChange(p)}
        size="icon-sm"
        variant={p === page ? "default" : "ghost"}
      >
        {p}
      </Button>
    ))}
    <Button
      aria-label="Next page"
      disabled={page >= totalPages}
      onClick={() => onPageChange(page + 1)}
      size="icon-sm"
      variant="ghost"
    >
      <ChevronRightIcon className="size-4" />
    </Button>
  </nav>
);

/* ============================================================
 * 6. LAYOUT BUTTONS
 * ============================================================ */

/** Button group — joined buttons inside one pill. */
const ButtonGroup = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cn(
      "inline-flex items-stretch overflow-hidden rounded-full border border-border bg-card shadow-sm [&_button]:rounded-none [&_button]:border-0",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

/** Split button — main action plus a dropdown of related actions. */
const SplitButton = ({
  items,
  onPrimary,
  children = "Create",
  ...props
}: React.ComponentProps<typeof Button> & {
  items: { label: string; onSelect: () => void }[];
  onPrimary?: () => void;
}) => (
  <span className="inline-flex items-center">
    <Button className="rounded-r-none" onClick={onPrimary} size="sm" {...props}>
      {children}
    </Button>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="More actions"
          className="rounded-l-none border-l border-primary-foreground/20 px-2"
          size="sm"
          variant="secondary"
        >
          <ChevronDownIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item) => (
          <DropdownMenuItem key={item.label} onSelect={item.onSelect}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </span>
);

/** Dropdown / menu trigger — button that opens a menu. */
const DropdownTriggerButton = ({
  items,
  children = "Options",
  ...props
}: React.ComponentProps<typeof Button> & {
  items: { label: string; onSelect: () => void }[];
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" {...props}>
        {children}
        <ChevronDownIcon className="size-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      {items.map((item) => (
        <DropdownMenuItem key={item.label} onSelect={item.onSelect}>
          {item.label}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

/** Segmented control — single-choice pill switcher. */
const SegmentedControl = ({
  options,
  value,
  onValueChange,
  className,
}: {
  options: { label: React.ReactNode; value: string }[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}) => (
  <div
    className={cn("inline-flex rounded-full bg-muted p-1", className)}
    role="tablist"
  >
    {options.map((option) => (
      <button
        className={cn(
          "cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
          option.value === value
            ? "bg-card text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        key={option.value}
        onClick={() => onValueChange(option.value)}
        aria-pressed={option.value === value}
        type="button"
      >
        {option.label}
      </button>
    ))}
  </div>
);

/** Full-width block button. */
const BlockButton = ({
  children = "Continue",
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button className="w-full" size="lg" {...props}>
    {children}
  </Button>
);

/** Button with a badge / notification count. */
const BadgeButton = ({
  count = 0,
  children = "Notifications",
  ...props
}: React.ComponentProps<typeof Button> & { count?: number }) => (
  <Button variant="outline" {...props}>
    <BellIcon className="size-4" />
    {children}
    {count > 0 && (
      <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground">
        {count}
      </span>
    )}
  </Button>
);

/** Button with a keyboard shortcut hint. */
const ShortcutButton = ({
  shortcut = "⌘K",
  children = "Search",
  ...props
}: React.ComponentProps<typeof Button> & { shortcut?: string }) => (
  <Button variant="outline" {...props}>
    {children}
    <span className="ml-1 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[0.65rem] leading-none font-medium text-muted-foreground">
      {shortcut}
    </span>
  </Button>
);

export {
  AddToCartButton,
  AppleButton,
  BackButton,
  BadgeButton,
  BlockButton,
  BookmarkButton,
  ButtonGroup,
  BuyNowButton,
  CancelButton,
  CloseButton,
  CopyLinkButton,
  CountdownButton,
  DeleteConfirmButton,
  DownloadButton,
  DropdownTriggerButton,
  DuplicateButton,
  EditButton,
  ErrorRetryButton,
  ExpandCollapseButton,
  FabButton,
  FacebookButton,
  FollowButton,
  FormatToggleGroup,
  GithubButton,
  GoogleButton,
  HoldToConfirmButton,
  IconButton,
  LikeButton,
  LogOutButton,
  MenuButton,
  MuteButton,
  Pagination,
  PlayPauseButton,
  ProcessingButton,
  ProgressButton,
  RefreshButton,
  SaveButton,
  ScrollTopButton,
  SegmentedControl,
  SendOtpButton,
  ShareButton,
  ShortcutButton,
  SignInButton,
  SignUpButton,
  SplitButton,
  SubmitButton,
  SubscribeButton,
  SuccessStateButton,
  ThemeToggleButton,
  UploadButton,
  VerifyOtpButton,
  XButton,
};
