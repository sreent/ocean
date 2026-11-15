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
  | "people" | "trace" | "cross" | "pause" | "camera" | "photos" | "attach" | "send"
  | "webhook" | "plug" | "sync" | "wait" | "model" | "code" | "list";

export interface IconProps { name: IconName; className?: string }
/** An icon in `currentColor`. */
export declare function Icon(props: IconProps): React.ReactElement;

export interface BadgeProps {
  /** The colour that means it. None: a plain fact. */
  tone?: Tone;
  /** How something stands has its shape before its word: true for its tone's (a tick, a clock, a cross, a
   * pause), or a named icon, such as `run` for what's running. a5s draws a dot today. */
  shape?: boolean | IconName;
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
  /** How it stood after the last run: done, waiting on someone, or failed. */
  state?: "done" | "waiting" | "failed";
  /** Problems the step has, counted in its corner. */
  problems?: number;
  /** A call the checks refused, or a tool that isn't the agent's. */
  refused?: boolean;
  /** What a run didn't use, or a step its condition skipped: it fades, and its words stay readable. */
  dim?: boolean;
  /** The step someone has chosen. */
  chosen?: boolean;
  /** Nothing goes on from it. */
  last?: boolean;
}
/** A step on a canvas, as n8n draws them, in Ocean's colours: a5s's agents, a7c's skills, a3t's processes. Proposed. */
export declare function FlowNode(props: FlowNodeProps): React.ReactElement;

/** A row of a canvas's list: a step, a start, the agent, or what hangs from it. */
export type FlowRow = {
  id: string;
  icon: IconName;
  name: string;
  about?: string;
  /** Its icon's colour: what it does, the agent's, or refused. */
  tone?: Tone | "agent" | "refused";
  /** The condition it runs only when, in the product's words. */
  when?: string;
  /** How it stood, or its problems, at the row's end. */
  end?: React.ReactNode;
  /** Its settings, opened in place when it's chosen. */
  settings?: React.ReactNode;
};

export interface FlowListProps {
  /** The canvas's parts in its order: what starts a run, its steps, or the agent and what it works with. */
  sections: { title: string; rows: FlowRow[] }[];
  /** The row whose settings are open. */
  open?: string;
  onOpen: (id: string | undefined) => void;
  /** Back to the canvas. */
  onCanvas: () => void;
}
/** A canvas as its list, for the keyboard and for a phone. Every canvas has one. Proposed. */
export declare function FlowList(props: FlowListProps): React.ReactElement;

export interface PickerProps {
  /** What the product's definitions allow, grouped: kinds of step, connectors, tools by what they do. */
  groups: { title: string; parts: { id: string; icon: IconName; name: string; about?: string; tone?: Tone | "agent"; mono?: boolean }[] }[];
  placeholder: string;
  /** Adds a part after the chosen step; someone can also drag it onto the canvas. */
  onAdd: (id: string) => void;
}
/** The parts someone adds to a canvas, at the workbench's left. Proposed. */
export declare function Picker(props: PickerProps): React.ReactElement;

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

// The conversation kit (proposed; docs/conversation.md): an agent's work toward an outcome, in a
// conversation, for any capability. Its look is css/components.css, from .talk on.

/** Where a value came from: read off a record or a document, worked out by the agent, or the person's. */
export type SourceKind = "read" | "inferred" | "yours";

export interface SourceProps {
  /** Where, in a word or two: "Receipt", "Card", "Email", "Record", "Profile", "Calendar", "Inferred", "Changed by you". */
  label: string;
  kind?: SourceKind;
}
/** Where a value came from, beside it: solid when read, dashed when inferred, in the accent when the person changed it. Proposed. */
export declare function Source(props: SourceProps): React.ReactElement;

/** Something said in the conversation, by the person, the agent or the product itself ("own"), or a card the agent answers with. */
export type Said = { by: "you" | "agent" | "own"; text: React.ReactNode } | { card: React.ReactNode };

export interface TalkProps {
  /** The agent who answers: its name, under its mark, and what it serves. */
  agent: { name: string; about?: string };
  said: Said[];
  /** Quick answers, after the last thing said; the one most people will take is the primary. */
  replies?: { label: string; icon?: IconName; primary?: boolean; onClick: () => void }[];
  placeholder?: string;
  onSend: (text: string) => void;
  /** A photo or a file: an outcome can start from either. */
  onAttach?: (from: "camera" | "photos" | "file") => void;
  /** What it may do: the agent's facts. */
  onAbout?: () => void;
}
/** The conversation: the agent, marked by its mark and name, what's said, quick answers, and the composer. Proposed. */
export declare function Talk(props: TalkProps): React.ReactElement;

export interface CaptureProps {
  /** What to photograph: "a receipt". */
  what: string;
  /** What it found, as it finds it: "Receipt found. Hold still…". */
  found?: string;
  /** It takes the photo by itself once the document is in the frame. */
  auto?: boolean;
  onTake: (photo: Blob) => void;
  onChoose?: (from: "photos" | "file") => void;
  onClose: () => void;
}
/** The camera, for paper an outcome needs, in its own dark in either theme. Proposed. */
export declare function Capture(props: CaptureProps): React.ReactElement;

export interface WorkLogProps {
  title: string;
  /** Each step: what the agent did, where it found it, and whether it's done. */
  steps: { what: string; from: string; done: boolean }[];
  /** What isn't done yet that matters to this outcome: "Nothing is sent until you confirm it." */
  promise: string;
}
/** The agent's work while it happens, with where each piece came from. Proposed. */
export declare function WorkLog(props: WorkLogProps): React.ReactElement;

export interface QuestionProps {
  /** The line it's about, and its figure: "Hotel, 2 nights · SGD 540.00". */
  about: string;
  /** Why it's asked, and what the answer sets, in a sentence. */
  why: React.ReactNode;
  /** The answers, the likely ones first; or a field, when it needs words, such as a reason. */
  answers: string[] | { field: string };
  /** Once answered, what the person chose: it folds to a line with a tick. */
  answered?: string;
  onAnswer: (answer: string) => void;
}
/** What only the person can answer: what the agent couldn't decide, or what breaks a rule. It waits on them, in --warn. Proposed. */
export declare function Question(props: QuestionProps): React.ReactElement;

/** A value the agent filled in, with where it came from; it opens to its evidence, and can be changed. */
export type Filled = { what: string; source: SourceProps; figure?: string; evidence?: React.ReactNode };

export interface DraftProps {
  /** What the outcome is: "Singapore trip · 4 to 6 Nov". */
  title: string;
  /** How it stands, and whose: "Draft · 4 expenses · only you see it". */
  state: string;
  /** Its key figure: a total, a balance, a date. */
  figure?: { label: string; value: string };
  /** What needs the person, first. */
  questions: QuestionProps[];
  /** The rest, folded until opened. */
  filled: Filled[];
  /** Its one thing to do, which waits until the questions are answered. */
  action: { label: string; onClick: () => void };
}
/** What the agent prepared, before anything happens: exceptions first, the rest folded with its sources. Proposed. */
export declare function Draft(props: DraftProps): React.ReactElement;

export interface EditSheetProps {
  /** The line: "Taxi · 5 Nov · card ••4417". */
  line: string;
  /** Each field with its source; `tied` when it matches evidence, so changing it asks why; `was`, once the person changed it. */
  fields: { label: string; value: string; source: SourceProps; tied?: boolean; was?: string }[];
  onSave: (values: Record<string, string>) => void;
  onRestore?: (label: string) => void;
  onClose: () => void;
}
/** A line, opened to change by hand, over the conversation: the person's change marked theirs, the original kept. Proposed. */
export declare function EditSheet(props: EditSheetProps): React.ReactElement;

export interface SignOffProps {
  title: string;
  /** Each line as it will be sent, the person's changes marked. */
  lines: { what: React.ReactNode; figure?: string; yours?: boolean }[];
  total?: { label: string; value: string };
  /** Who decides next, the evidence, and who prepared it: "assistant, which can't approve or pay". */
  facts: [string, React.ReactNode][];
  /** What sending it does, in the colour of what it does. */
  does: { tone: "writes" | "changes" | "outside"; toneWord: string; text: React.ReactNode };
  /** What the person vouches for, when sending it vouches for something. */
  vouch?: string;
  /** The one thing to do, worded for this outcome: "Submit claim", "Ask for the change". */
  action: { label: string; onClick: () => void };
  onChange: () => void;
}
/** What will happen, exactly, before it does; the person signs off on it, and sends it. Proposed. */
export declare function SignOff(props: SignOffProps): React.ReactElement;

export interface StatusProps {
  title: string;
  about?: string;
  /** Its stages, in order: done, the one it's at now with who it waits on, and those to come. */
  stages?: { what: string; about?: string; state: "done" | "now" | "later" }[];
  /** Until when it can be taken back, and how: "Recall it", "Withdraw it", or "Undo" once the agent acted on its own. */
  takeBack?: { until: string; label: string; onClick: () => void };
  /** When the agent acted on its own, at the ladder's top rung: what it changed, what that did, why, and what allowed it.
   *  Never for what vouches for something in the person's name, or can't be taken back: those come as a SignOff. */
  actedAlone?: { changes: Change[]; does: { tone: Tone; toneWord: string; text: React.ReactNode }; why?: string;
    allowedBy: string; onAskFirst: () => void };
}
/** How an outcome stands, brought to the person: where it is, who it waits on, and until when it can be taken back. Proposed. */
export declare function Status(props: StatusProps): React.ReactElement;
