// Ocean's pieces, as React draws them: a5s's studio has the first (studio/src/design), and these
// types are theirs. The family's additions, marked "proposed", aren't drawn by any product yet.
// Their look is css/components.css, so a page outside React can draw them with the same classes.

import type * as React from "react";

/** What a tool does, and how something stands: the colours Ocean gives meaning to. */
export type Tone = "reads" | "writes" | "changes" | "outside" | "own" | "good" | "warn" | "bad" | "idle";

/** Who did something. `service` is the family's addition (proposed): a7c's skills, a3t's service accounts. */
export type Kind = "person" | "agent" | "service";

/** The icons in icons/, each a few lines on a 24-unit square. */
export type IconName = "chat" | "tasks" | "book" | "studio" | "decide" | "grade" | "settings" | "audit" | "admin"
  | "officer" | "agent" | "tool" | "clock" | "message" | "bell" | "report" | "shield" | "back" | "check" | "run"
  | "people" | "trace";

export interface IconProps { name: IconName; className?: string }
/** An icon in `currentColor`. */
export declare function Icon(props: IconProps): React.ReactElement;

export interface BadgeProps {
  /** The colour that means it. None: a plain fact. */
  tone?: Tone;
  /** A dot before the word, for how something stands. */
  dot?: boolean;
  /** Its word, always: the colour is never the only sign. */
  children: React.ReactNode;
}
/** What a tool does, or how something stands, in the colour that means it. */
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface AvatarProps { name: string; kind: Kind }
/** A person's initials in a circle; an agent's mark in a lagoon square; a service's tool in a slate square. */
export declare function Avatar(props: AvatarProps): React.ReactElement;

export interface WhoProps { name: string; kind: Kind; about?: string }
/** Someone, an agent or a service, by name, with a line about them. */
export declare function Who(props: WhoProps): React.ReactElement;

export interface ConfirmProps {
  /** The button's word, such as "Delete this draft". */
  label: string;
  /** A question naming the thing: "Delete the draft of scout?" */
  title: string;
  /** What goes with it, and that nobody can bring it back. */
  about: string;
  /** The confirming answer, such as "Delete it". The other is always "Keep it", and has the focus. */
  confirm: string;
  danger?: boolean;
  onConfirm: () => void;
}
/** A button that asks first, in the browser's own dialog, for what can't be undone. */
export declare function Confirm(props: ConfirmProps): React.ReactElement;

export interface HintProps {
  /** A sentence on what something means. */
  label: string;
  /** Something a keyboard reaches, such as a button. */
  children: React.ReactNode;
}
/** A word on what something means, for whoever points at it or tabs to it. */
export declare function Hint(props: HintProps): React.ReactElement;

export interface TracedProps {
  /** The value as the agent used it. */
  value: React.ReactNode;
  /** Where it comes from: its record, when it was read, by which run and for whom, whether it still holds. */
  trail: React.ReactNode[];
}
/** A value an agent used, which opens to show where it comes from. */
export declare function Traced(props: TracedProps): React.ReactElement;

/** A line of what a decision changes: from what to what, or, with no `from`, what it's about. */
export type Change = { what: string; from?: React.ReactNode; to: React.ReactNode };

export interface ApprovalCardProps {
  /** The agent that asks. */
  agent: string;
  /** What it asks, after its name: "asks to change a due date". */
  asks: string;
  /** For whom, where, and when. */
  about?: string;
  changes: Change[];
  /** The reason, in the words code worked out when it was asked for, never the agent's own. */
  why: React.ReactNode;
  /** The stripe: what the change does. */
  tone?: "changes" | "writes" | "outside";
  decided?: "approved" | "declined";
  busy?: boolean;
  onApprove: () => void;
  onDecline: () => void;
  /** Proposed: who asks, where a person does, such as a change request in a3t. Defaults to the agent. */
  by?: { name: string; kind: Kind };
}
/** What someone is asked to decide, a phone's width at most: what it changes, why, and their yes or no. */
export declare function ApprovalCard(props: ApprovalCardProps): React.ReactElement;

/** A part of an agent's facts below the first, such as how it does per run. */
export type FactsPart = { title: string; aside?: string; rows: [string, React.ReactNode][] };

export interface AgentFactsProps {
  name: string;
  version: string;
  /** What it may do: whom it works for, its autonomy, what it reads, writes and changes, its data. */
  facts: [string, React.ReactNode][];
  more?: FactsPart;
  foot?: React.ReactNode;
}
/** An agent's facts, as food carries a label: the same for every agent, from its release alone. */
export declare function AgentFacts(props: AgentFactsProps): React.ReactElement;

/** A rung of the ladder. Proposed: products pass their own rungs. */
export type Rung = { name: "Observes" | "Suggests" | "Asks" | "Acts"; about: string; level: string };

export interface AutonomyLadderProps {
  /** The rung it works on now, counted from 0. */
  level: number;
  /** The highest rung its release allows. */
  max: number;
  /** How far it has come toward the next rung. */
  toward?: { what: string; graded: number; needed: number };
  /** Proposed: the rungs this product has. a5s's three by default; a7c's four. */
  rungs?: Rung[];
}
/** Autonomy is earned: the rung an agent is on, those its release allows beyond it, and how far it has come. */
export declare function AutonomyLadder(props: AutonomyLadderProps): React.ReactElement;

export type Step = { at: string; tone: Tone; what: React.ReactNode; detail?: React.ReactNode };
export interface RunTimelineProps { steps: Step[] }
/** A run as time: each step in order, in the colour of what it did. */
export declare function RunTimeline(props: RunTimelineProps): React.ReactElement;

export type Stage = { name: string; about: React.ReactNode; state: "done" | "now" | "later" };
export interface JourneyPathProps {
  stages: Stage[];
  /** The one thing to do now. */
  next?: React.ReactNode;
  label?: string;
}
/** The way from a draft to work: each stage done, to do now, or later, and the one thing to do next. */
export declare function JourneyPath(props: JourneyPathProps): React.ReactElement;

// The family's additions (proposed)

export type Tier = "personal" | "team" | "production";
export interface TierBadgeProps {
  tier: Tier;
  /** The product's own word for it, such as "Prod" or "Sandbox". Defaults to the tier's. */
  children?: React.ReactNode;
}
/** Where something runs, told by line: dashed, solid, or production's heavy ink. Proposed. */
export declare function TierBadge(props: TierBadgeProps): React.ReactElement;

export type Gate = { name: string; about?: React.ReactNode; state: "passed" | "failed" | "waiting" | "running" | "not needed" };
export interface GateListProps { gates: Gate[]; label?: string }
/** What a promotion or a change request must pass, each check with its state, what it checks, and what it waits on. Proposed. */
export declare function GateList(props: GateListProps): React.ReactElement;

export interface FlowNodeProps {
  icon: IconName;
  /** Its name, under it. */
  title: string;
  /** What it does, in a few words, under its name. */
  detail?: string;
  /** Its icon's colour: what the step does. */
  tone?: Tone;
  /** A trigger is rounded where nothing comes in; an agent is wide; what hangs from an agent is round. */
  kind?: "trigger" | "step" | "agent" | "hanging";
  /** How it stood after the last run: done, or waiting on someone. */
  state?: "done" | "waiting";
  /** Problems the step has, counted in its corner. */
  problems?: number;
  /** The step someone has chosen. */
  chosen?: boolean;
  /** Nothing goes on from it. */
  last?: boolean;
}
/** A step on a canvas, as n8n draws them, in Ocean's colours: a5s's agents, a7c's skills, a3t's processes. Proposed. */
export declare function FlowNode(props: FlowNodeProps): React.ReactElement;

export interface AuditEntryProps {
  /** When, to the second, in UTC. */
  at: string;
  who: { name: string; kind: Kind };
  /** What it did, in words. */
  did: React.ReactNode;
  /** What it did, as colour: the badge beside the words. */
  tone: Tone;
  toneWord: string;
  /** Through what (the web, the API, the command line), for whom, and where. */
  by?: string;
  /** The ledger's seal: its batch and digest. */
  seal?: string;
}
/** A line of the ledger, the same in every product. Proposed. */
export declare function AuditEntry(props: AuditEntryProps): React.ReactElement;

export interface ShellProps {
  /** The product's name, in lower case; its mark is its first two characters. */
  product: string;
  /** The pages this person may use, under Work, Build, Decide and Oversee. */
  pages: { group: "Work" | "Build" | "Decide" | "Oversee"; name: string; href: string; icon: IconName; current?: boolean }[];
  /** Who's signed in. */
  you?: string;
  children: React.ReactNode;
}
/** The frame every page sits in. a5s draws it with shell.js; proposed as a component for a7c and a3t. */
export declare function Shell(props: ShellProps): React.ReactElement;
