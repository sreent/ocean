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

export interface AvatarProps {
  name: string;
  kind: Kind;
  /** Proposed, for a4a's dense rows and cards: a smaller mark (`.avatar.small`). */
  size?: "small";
}
/** A person's initials in a circle; an agent's mark in a lagoon square; a service's tool in a slate square. */
export declare function Avatar(props: AvatarProps): React.ReactElement;

export interface WhoProps {
  name: string;
  kind: Kind;
  about?: string;
  /** Proposed, for a4a's dense rows and cards: a smaller mark (`.avatar.small`). */
  size?: "small";
}
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
  /** Proposed, for a4a's rows and cards: a smaller button (`button.small`), such as "Revoke it" beside a token. */
  small?: boolean;
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
  /** Proposed, for a4a's issue page: smaller, its values left to the field panel (`.approval.compact`). */
  compact?: boolean;
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
  /** Proposed, for a4a: the ladder as a choice, a radio on each rung (`fieldset.ladder-choice`); the rung chosen is the one it's on. */
  onChoose?: (level: number) => void;
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
  /** Its icon's colour: what the step does, or an agent's, for another agent hanging from one (drawn as agent-tone). */
  tone?: Tone | "agent";
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
  pages: { group: "Work" | "Build" | "Decide" | "Oversee"; name: string; href: string; icon: IconName; current?: boolean;
    /** Proposed, for a4a's inbox: a count beside the link (`.nav-count`), such as what's unread; none when it's 0. */
    count?: number }[];
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

// a4a's pieces (proposed; docs/products.md): a4a tracks issues, boards and plans. Its pieces'
// look is css/components.css, from "a4a's pieces" on; its plans, load and cost take css/charts.css too.
// a4a's React components emit the markup each piece's README gives.

/** How an issue stands, by a4a's name for its state, and the meaning that state finds in the grammar:
 * resolved (Fixed, Verified, Done) is `good`, with a tick; waiting on someone (In Review, Blocked) `warn`,
 * with a clock; not needed (Won't fix, Duplicate, Obsolete) `idle`, with a pause. None is a plain fact,
 * such as Open or In Progress. */
export type IssueState = { name: string; tone?: "good" | "warn" | "idle" };

/** Someone who did something or has it to do, as Who draws them. */
export type Someone = { name: string; kind: Kind };

/** A change to an issue's field, in the grammar of a change: from what to what, a value added, or one
 * that stays as it is. */
export type FieldChange =
  | { field: string; from: React.ReactNode; to: React.ReactNode }
  | { field: string; added: React.ReactNode }
  | { field: string; value: React.ReactNode; same: true };

export interface PriorityMeterProps {
  /** From 1 (Minor) to 5 (Show-stopper): the steps it fills, and its aria-valuenow. */
  level: 1 | 2 | 3 | 4 | 5;
  /** Its word, always beside it: Show-stopper, Critical, Major, Normal or Minor. */
  word: string;
}
/** How urgent an issue is: five steps in ink beside its word, never a colour. Proposed. */
export declare function PriorityMeter(props: PriorityMeterProps): React.ReactElement;

export interface IssueRowProps {
  /** Its readable id, in Plex Mono: "BACK-12". */
  id: string;
  summary: string;
  href: string;
  state: IssueState;
  priority: PriorityMeterProps;
  /** Its type, as plain text: "Bug", "Feature", "Task". */
  type: string;
  /** None: "Unassigned". */
  assignee?: Someone;
  /** Tags, as chips. */
  tags?: string[];
  comments: number;
  /** When it last changed: the moment, and as people read it, "2 minutes ago". */
  updated: { at: string; label: string };
  /** Its summary in --muted. */
  resolved?: boolean;
  /** Its box ticked: the row on --accent-soft. */
  chosen?: boolean;
  /** The issue that's open beside the list: aria-current, its summary in --accent. */
  current?: boolean;
}
/** An issue in a row, dense: chosen, its id, summary and tags, how it stands, its priority, type, assignee, comments, and when it changed. Proposed. */
export declare function IssueRow(props: IssueRowProps & { onChoose: (chosen: boolean) => void; onOpen: () => void }): React.ReactElement;

export interface IssueListProps {
  issues: IssueRowProps[];
  /** What the list is, for screen readers: "Issues in BACK". */
  label: string;
  onChoose: (id: string, chosen: boolean) => void;
  onChooseAll?: (chosen: boolean) => void;
  onOpen: (id: string) => void;
  /** With issues chosen, the bar above offers a command for them. */
  onCommand?: (ids: string[]) => void;
}
/** Issues in rows, framed, one stop for the keyboard: arrows move, Space chooses, Enter opens. Stacks where it's narrow. Proposed. */
export declare function IssueList(props: IssueListProps): React.ReactElement;

/** A field's value an agent worked out that nobody has accepted yet: dashed until a person does. */
export type Proposed = { by: string; from: string };

export interface FieldPanelProps {
  /** The issue's id, to name the panel: "Fields of BACK-32". */
  issue: string;
  fields: {
    name: string;
    value: React.ReactNode;
    /** How it's changed: a choice from a list, a person, a version, a duration ("2d 4h"), a date, or text. */
    kind: "choice" | "person" | "version" | "duration" | "date" | "text";
    /** None yet: "No due date". */
    empty?: string;
    proposed?: Proposed;
  }[];
  onChange: (name: string, value: string) => void;
  onAccept: (name: string) => void;
}
/** An issue's fields: labels in Ocean's label style, each value a control; an agent's, dashed until accepted. Proposed. */
export declare function FieldPanel(props: FieldPanelProps): React.ReactElement;

/** A problem in a query or a command: where it is, what's wrong, and the likely fix. */
export type QueryProblem = { from: number; to: number; what: string; fix?: string };

export interface QueryBarProps {
  query: string;
  problems?: QueryProblem[];
  /** What it could be, as the person types: its label, what kind it is ("State", "field", "tag"), the letters typed. */
  suggestions?: { label: string; kind: string; typed?: string }[];
  /** The suggestion the arrows are on. */
  active?: number;
  /** Asking in words, which an agent reads. */
  words?: boolean;
  /** What the agent read the words as: "Interpreted as:" its query, by its mark and name. */
  read?: { agent: string; query: string };
  /** What it found: "4 issues". */
  found?: string;
  onChange: (query: string) => void;
  onAsk: (words: boolean) => void;
  /** Puts the query the agent made in the field, to change. */
  onEdit?: () => void;
}
/** The query language in a field: problems underlined in --bad with their words, suggestions, and asking in words. Proposed. */
export declare function QueryBar(props: QueryBarProps): React.ReactElement;

export interface CommandBarProps {
  /** The issues it applies to, by id. */
  issues: string[];
  command: string;
  problems?: QueryProblem[];
  words?: boolean;
  read?: { agent: string; query: string };
  /** What it changes on each issue, before anything does. */
  preview: { id: string; summary: string; changes: FieldChange[] }[];
  comment?: string;
  onChange: (command: string) => void;
  onAsk: (words: boolean) => void;
  /** Its button says what happens: "Apply to 3 issues". It waits while a problem stands. */
  onApply: (comment?: string) => void;
  onCancel: () => void;
}
/** A command for the issues someone chose, in the browser's own dialog: what it changes on each, then one button. Proposed. */
export declare function CommandBar(props: CommandBarProps): React.ReactElement;

export type BoardCard = { id: string; summary: string; href: string; priority: PriorityMeterProps; assignee?: Someone; tags?: string[]; resolved?: boolean };

export interface BoardProps {
  sprint?: { name: string; dates: string; left?: string; goal?: string };
  /** Each column: a state, how many it holds, and its limit. Over the limit, it says so in --warn. */
  columns: { name: string; count: number; limit?: number }[];
  /** Lanes, each with a card list per column; one lane with no name for a board without them. */
  lanes: { id?: string; name?: string; count?: number; cells: BoardCard[][] }[];
  /** A card on its way: where it was, and where it would land. */
  dragging?: { id: string; to: { lane: number; column: number } };
  onMove: (id: string, to: { lane: number; column: number }) => void;
  /** From the keyboard: a card's id opens a command for it (CommandBar). */
  onCommand: (id: string) => void;
  /** A move the server refused: it goes back, and this says why above the columns. */
  refused?: { text: string; hint?: string; onDismiss: () => void };
}
/** An agile board: the sprint, columns with their limits, cards, lanes, and where a dragged card would land. Proposed. */
export declare function Board(props: BoardProps): React.ReactElement;

export type GanttRow = {
  kind: "task" | "summary" | "milestone";
  name: string;
  /** 0 for a summary at the top; each level in, a step of indentation. */
  depth: number;
  start: string;
  /** None for a milestone. */
  end?: string;
  /** What's done, from 0 to 1. */
  done: number;
  /** The plan as it was agreed: faded beneath. */
  baseline?: { start: string; end?: string };
  /** On the critical path: in ink, twice as heavy. */
  critical?: boolean;
  /** When it's due. Finishing after it, it's late: --bad, with how many days. */
  due?: string;
  /** The latest it may finish: its slack, dashed. */
  slackTo?: string;
  /** The rows it follows, finish to start. */
  after?: number[];
  /** Where its name leads: the task itself. */
  href?: string;
  /** Where a what-if would put it, dashed in --changes; nothing is saved. */
  whatIf?: { start: string; end?: string };
};
export interface GanttProps {
  /** What the plan is, for screen readers. */
  label: string;
  rows: GanttRow[];
  from: string;
  to: string;
  today: string;
  /** Each day's width, in px; 17 by default. */
  dayWidth?: number;
}
/** A plan over time, as SVG drawn from attributes: the critical path in ink, baselines faded, a late task in words. Proposed. */
export declare function Gantt(props: GanttProps): React.ReactElement;

export interface LoadGridProps {
  /** The working days shown; a week's first day after a weekend leaves a gap. */
  days: { date: string; weekStart?: boolean }[];
  /** Each person's capacity, in hours a day, and their hours booked each day, or "away". */
  people: { who: Someone; capacity: number; hours: (number | "away")[] }[];
  /** What levelling would move, before anything does. */
  levelling?: { id: string; what: string; who: string; from: string; to: string; by: string }[];
  /** The tasks that only follow the ones it moves, folded beneath them. */
  following?: { id: string; what: string; who: string; from: string; to: string; by: string }[];
  /** Within slack, the default, the finish holds; allowing delay, it may move. */
  mode?: "within_slack" | "allow_delay";
  onMode?: (mode: "within_slack" | "allow_delay") => void;
  /** What levelling just did, or that the plan has moved on since it proposed. */
  status?: { tone: "good" | "warn"; badge: string; words: string };
  /** Its button says what happens: "Level 4 tasks". */
  onLevel?: () => void;
}
/** People's load by day, shaded in Ocean Blue by the share of their day; over capacity in --warn with its words. Proposed. */
export declare function LoadGrid(props: LoadGridProps): React.ReactElement;

/** A cost-performance index with its plain words, and the figures it comes from. */
export type CostIndex = { value: number; words: string; from: string };

export interface CostPanelProps {
  /** The plan, and when the figures are from. */
  about: string;
  planned: number;
  earned: number;
  actual: number;
  budget: number;
  forecast: number;
  cpi: CostIndex;
  spi: CostIndex;
  /** Week by week: what was planned, earned and spent, to date and as planned. None, and there are no curves. */
  weeks?: { ending: string; planned: number; earned?: number; actual?: number }[];
  currency: string;
  /** What it's measured against. None, and the indices' place asks for one. */
  baseline?: string;
  /** The costs by person and by task, as tables: each figure with its hours beneath. */
  byPerson?: { who: Someone; rate?: number; planned: number; spent: number; plannedHours: number; spentHours: number }[];
  byTask?: { id: string; summary: string; planned: number; spent: number; fixed?: number }[];
}
/** Cost against plan: bars on one scale, the indices in words, and the S-curve with its figures beside it. Proposed. */
export declare function CostPanel(props: CostPanelProps): React.ReactElement;

export interface DirectoryProps {
  /** Each thing to open: its name, what kind it is or its key, a line about it, and its mark when it has one. */
  items: { name: string; href: string; kind?: string; key?: string; about: string; icon?: string }[];
  /** The card's heading; for screen readers alone where the page's title says it already. */
  label: string;
}
/** Things to open, in a list: the boards, or the projects to plan. Proposed. */
export declare function Directory(props: DirectoryProps): React.ReactElement;

export interface PlanPageProps {
  views: ("timeline" | "resources" | "costs")[];
  view: "timeline" | "resources" | "costs";
  /** The plan at a glance: when it ends and against its baseline, its critical path, what's late, a due date with little to spare. */
  facts: { ends: string; against?: string; critical: number; late: string[]; tight?: string };
  /** One task changed, and where the finish would go; nothing is saved. */
  whatIf?: { tasks: { id: string; summary: string }[]; asked?: string; ends?: { from: string; to: string }; moves?: { id: string; what: string; from: string; to: string; by: string }[]; late?: string[] };
  /** What the plan assumed to draw itself, folded until it's opened. */
  assumed?: string[];
}
/** A plan's page around its pieces: its views, its facts at a glance, a what-if, and what it assumed. Proposed. */
export declare function PlanPage(props: PlanPageProps): React.ReactElement;

export interface IssueLinksProps {
  /** The issue the links are from. */
  issue: string;
  /** By what they say: "depends on", "is required for", "subtask of", "parent for", "duplicates", "relates to". */
  groups: { phrase: string; links: { id: string; summary: string; href: string; state: IssueState; resolved?: boolean }[] }[];
  /** Add link, open: what it says, which issue, and the issue found. */
  adding?: { phrase: string; to: string; found?: { id: string; summary: string; state: IssueState } };
  onAdd: () => void;
  onLink: (phrase: string, to: string) => void;
}
/** An issue's links, grouped by what they say, each with its id, summary and state; and Add link. Proposed. */
export declare function IssueLinks(props: IssueLinksProps): React.ReactElement;

export interface IssueHistoryProps {
  entries: {
    who: Someone;
    /** When an agent acts for a person: "for Anna Schmidt". */
    for?: string;
    /** Through what, in words: "via the web", "via MCP", "via the API", "via the assistant", or "on its own". */
    via: string;
    /** The moment, and as people read it: "13:58", "Mon 9 Nov, 10:02". */
    at: { at: string; label: string };
    /** What they did, in words, where no change says it: "reported it". */
    did?: string;
    changes?: FieldChange[];
    comment?: React.ReactNode;
    /** On a help desk request: a comment its requester sees, the team's reply to them or theirs. Framed in `--outside`, with its words. */
    public?: "reply" | "theirs";
    /** What an agent changed on its own: "possible" offers Undo to someone who may change the issue; "undone" fades it, saying who undid it. */
    undo?: { state: "possible"; onUndo: () => void } | { state: "undone"; by: string };
  }[];
  /** On a help desk request, the composer's choice, made before anything is sent: an internal note or a reply to the requester. */
  composer?: { requester?: string; visibility: "internal" | "public"; onVisibility: (v: "internal" | "public") => void };
}
/** An issue's history in the ledger's spirit: who, for whom, through what, when, and each change in the grammar. Proposed. */
export declare function IssueHistory(props: IssueHistoryProps): React.ReactElement;

export interface MentionFieldProps {
  value: string;
  onChange: (text: string) => void;
  /** The people it offers after an "@": those whose login or name starts with what's typed. */
  people: { login: string; name: string; kind: Kind }[];
}
/** A text area that offers people after an "@", under the field (`.composer`); the arrows choose, Enter or Tab takes one. Proposed, for a4a. */
export declare function MentionField(props: MentionFieldProps): React.ReactElement;

export interface InboxProps {
  /** By issue, the issue with the latest news first. */
  issues: {
    id: string;
    summary: string;
    /** None once the issue is deleted: it then says so, and doesn't link. */
    href?: string;
    state?: IssueState;
    notifications: {
      who: Someone;
      /** What it means to this person: "Anna Schmidt mentioned you", "Ben Okafor assigned it to you". */
      what: string;
      at: { at: string; label: string };
      unread: boolean;
      changes?: FieldChange[];
      said?: React.ReactNode[];
    }[];
  }[];
  onRead: (issue: string, read: boolean) => void;
}
/** What reached someone, by issue: unread by a dot and weight; each issue's own Mark read. Its count is the Shell's, beside its link. Proposed, for a4a. */
export declare function Inbox(props: InboxProps): React.ReactElement;

export interface WatchToggleProps {
  watching: boolean;
  /** How many watch it, heard as words: "3 people watch it". */
  count: number;
  onToggle: () => void;
}
/** Watch an issue: a toggle, pressed while you do, its word "Watch" either way. Who watches, and why, is a side card of people. Proposed, for a4a. */
export declare function WatchToggle(props: WatchToggleProps): React.ReactElement;

export interface HelpDeskProps {
  /** Whose help desk it is: "Backend platform". */
  project: string;
  /** The form: the project's own words above it. */
  form?: { intro?: React.ReactNode; onSend: (fields: { name: string; email: string; summary: string; description: string }) => void };
  /** After sending: where the link went, or the link itself where no email goes. */
  sent?: { email: string; tracking?: string };
  /** A request's own page: its state, what was asked, and the public conversation, never anything internal. */
  request?: {
    summary: string;
    state: { name: string; resolved: boolean };
    asked: { at: string; text: React.ReactNode };
    messages: { from: "you" | "team"; name: string; at: string; text: React.ReactNode }[];
    emailed: boolean;
    onReply: (text: string) => void;
  };
}
/** A help desk's lone pages for people outside: its form, the page after it, and a request's own page. Proposed, for a4a. */
export declare function HelpDesk(props: HelpDeskProps): React.ReactElement;

export interface AttachmentListProps {
  /** The section's heading: "Files". */
  label: string;
  /** How many there are and how much room they take, beside the heading: "3 files, 2.4 MB of 100 MB". */
  about?: string;
  files: {
    id: string;
    name: string;
    /** Where its bytes are: an image opens in place, anything else downloads. */
    href: string;
    /** "120 KB". */
    size: string;
    /** A raster image (PNG, JPEG, GIF, WebP): its picture is its thumbnail. Anything else shows its kind. */
    image?: boolean;
    /** What kind it is, from its name, under the file's mark: "LOG", "PDF". */
    kind?: string;
    who?: Someone;
    /** The moment, and as people read it. */
    at?: { at: string; label: string };
    /** Where it is, in a list of an issue's files: "on a comment". */
    note?: string;
    /** Who may delete it gets a Confirm: "Delete report.log?". */
    onDelete?: () => void;
  }[];
  /** Files on their way: how far each has come, from 0 to 1, or why it failed. */
  uploading?: { name: string; done: number; words: string; error?: string; onStop?: () => void }[];
  /** Where more go: dropped on it, or chosen with its button. None, and nobody may add any. */
  onAdd?: (files: File[]) => void;
  /** What may go: "Up to 20 MB each. Images show here; everything else downloads." */
  addAbout?: string;
  /** Under a comment's words: smaller, without who and when. */
  compact?: boolean;
}
/** Files on an issue, a comment or an article: each with its picture or kind, name, size, who and when; files on their way; and a place to drop more. Proposed. */
export declare function AttachmentList(props: AttachmentListProps): React.ReactElement;

export type ArticleNode = {
  /** "BACK-A-3". */
  id: string;
  title: string;
  href: string;
  /** The articles under it; folded until opened, unless the open one is among them. */
  children?: ArticleNode[];
  open?: boolean;
};
export interface ArticleTreeProps {
  /** Whose tree: "Backend platform". */
  label: string;
  articles: ArticleNode[];
  /** The id of the article open beside the tree. */
  current?: string;
  onToggle?: (id: string, open: boolean) => void;
}
/** A project's knowledge base as a tree, on NavList: each article a link, those under it indented and folded. Proposed. */
export declare function ArticleTree(props: ArticleTreeProps): React.ReactElement;

export type DiffLine = { op: "same" | "add" | "del"; text: string };
export interface ArticlePageProps {
  id: string;
  title: string;
  /** The articles it sits under, from the top. */
  path: { id: string; title: string; href: string }[];
  /** "Updated by Anna Schmidt, Mon 9 Nov · version 4". */
  meta: React.ReactNode;
  /** Its Markdown, as prose. */
  body: React.ReactNode;
  children?: { id: string; title: string; href: string; about?: string }[];
  /** Issues and articles that mention it by its id. */
  mentionedIn?: { id: string; title: string; href: string; state?: IssueState; resolved?: boolean }[];
  /** Editing: its title and Markdown, and how it will read; "write" or "read" where only one fits. */
  editing?: { title: string; markdown: string; preview: React.ReactNode; show?: "write" | "read" };
  /** A version against the one before, a line each. */
  version?: { label: string; lines: DiffLine[] };
}
/** An article: its words as prose, where it sits, what's under it and what mentions it; its editor and its versions. Proposed. */
export declare function ArticlePage(props: ArticlePageProps): React.ReactElement;

export interface ArticleResultsProps {
  /** Each article found: its title, where it sits, and its words around what matched, the matches marked. */
  results: { id: string; title: string; href: string; path: string[]; when: string; snippet: { text: string; match: boolean }[] }[];
}
/** What a knowledge base search found. Proposed. */
export declare function ArticleResults(props: ArticleResultsProps): React.ReactElement;
/** How a sprint stands against its ideal, in the words its badge takes. */
export type BurndownVerdict = "on_track" | "ahead" | "done" | "behind" | "ended" | "not_started" | "empty";

export interface BurndownProps {
  sprint: { name: string; goal?: string; startDate: string; endDate: string; board: string };
  /** By hours of estimate, or by how many issues. */
  by: "estimate" | "count";
  /** Committed at the start of the first working day, and left now (or at the end). */
  start: number;
  remaining: number;
  /** Each working day: what was left at its end (null for days to come), the ideal, and what it did. */
  days: { date: string; remaining: number | null; ideal: number; completed: number; added: number; removed: number; logged: number }[];
  /** How it stands: a badge, and the sentence saying it against the ideal as today began. */
  status: { verdict: BurndownVerdict; words: string };
  /** Each change to its scope or progress, in order: added, taken out, deleted, resolved, reopened, estimate changed. */
  changes: { date: string; issue: string; summary: string; kind: "added" | "removed" | "deleted" | "resolved" | "reopened" | "estimate"; amount: number }[];
  today: string;
  /** In a dashboard's widget: the words, the facts and the chart, with its figures folded beneath. */
  compact?: boolean;
}
/** A sprint's burndown: what's left, solid, against the ideal, dashed; scope changes in --changes; its figures beside it. Proposed. */
export declare function Burndown(props: BurndownProps): React.ReactElement;

/** How a state stands, which is its band's colour: --chart-done, --chart-short, --chart-failed or --chart-open. */
export type Standing = "done" | "waiting" | "failed" | "open";

export interface CumulativeFlowProps {
  /** The workflow's states in order; a state's tone says whether it waits on someone (warn) or failed (bad). */
  states: { name: string; resolved: boolean; tone?: "warn" | "bad" | "good" | "idle" }[];
  /** Each day's end: how many issues were in each state, in the order of `states`. */
  days: { date: string; counts: number[]; total: number }[];
  today: string;
  compact?: boolean;
}
/** Issues in each state at each day's end, stacked, each band in the colour of how its state stands. Proposed. */
export declare function CumulativeFlow(props: CumulativeFlowProps): React.ReactElement;

export interface DistributionProps {
  /** Equal buckets, in days: each one's start, end and how many fell in it. */
  buckets: { from: number; to: number; count: number }[];
  /** By nearest rank, in days; null when there are none. */
  percentiles: { p50: number | null; p85: number | null; p95: number | null };
  average: number | null;
  /** The slowest, each with how long it took. */
  issues: { id: string; summary: string; days: number; reopened?: boolean }[];
  /** Those resolved without ever starting, left out and said so. */
  notStarted?: string[];
  compact?: boolean;
}
/** How many took how long, in columns of the first series, with the half and 85% marked in ink. Proposed. */
export declare function Distribution(props: DistributionProps): React.ReactElement;

export interface CreatedResolvedProps {
  interval: "day" | "week" | "month";
  /** Each period: created, resolved and reopened in it, and open at its end. */
  buckets: { from: string; to: string; created: number; resolved: number; reopened: number; open: number }[];
  totals: { created: number; resolved: number; reopened: number };
  compact?: boolean;
}
/** What came in against what got done, period by period: created in the first series, resolved in the second. Proposed. */
export declare function CreatedResolved(props: CreatedResolvedProps): React.ReactElement;

export interface TimeReportProps {
  totalMinutes: number;
  entries: number;
  from: string;
  to: string;
  /** The bars, by how the time is grouped. */
  groups: { by: "person" | "project" | "week"; rows: { label: string; who?: Someone; minutes: number }[] };
  onGroup?: (by: "person" | "project" | "week") => void;
  /** Each issue's time here and all told, against its estimate (none: "No estimate"). */
  byIssue: { id: string; summary: string; minutes: number; spentMinutes: number; estimateMinutes: number | null }[];
  /** Each person's minutes per week, weeks beginning on Monday. */
  weeks: string[];
  matrix: { who: Someone; minutes: number[] }[];
  compact?: boolean;
}
/** Time logged as bars on one scale with their figures, spent against estimate as meters, and each person's weeks. Proposed. */
export declare function TimeReport(props: TimeReportProps): React.ReactElement;

/** A dashboard's widget: a report with its parameters, a search's count or list, or a note. */
export type DashboardWidget = { id: string; title?: string; width: "half" | "full" } & (
  | { kind: "report"; report: "burndown" | "flow" | "created-resolved" | "cycle-time" | "time"; body: React.ReactNode }
  | { kind: "search"; show: "count" | "list"; count?: number; issues?: { id: string; summary: string; state: IssueState }[] }
  | { kind: "note"; text: React.ReactNode }
);

export interface DashboardProps {
  widgets: DashboardWidget[];
  /** Arranging: each widget moves earlier or later, goes wide or half, or goes, from its head's buttons. */
  arranging?: boolean;
  onMove?: (id: string, by: -1 | 1) => void;
  onWidth?: (id: string, width: "half" | "full") => void;
  onRemove?: (id: string) => void;
  /** A widget being made, dashed until it's on the dashboard. */
  adding?: React.ReactNode;
}
/** A person's widgets in two columns where there's room and one where there isn't, arranged without dragging. Proposed. */
export declare function Dashboard(props: DashboardProps): React.ReactElement;

export interface MappingTableProps {
  /** Each column of the file: its name, a few of its values, how many rows have one, what it becomes, and whether that was found from its header. */
  columns: { name: string; samples: string[]; filled: number; target: string; found: boolean }[];
  /** What a column may become, grouped: what every issue has, the project's fields, links, or left out. */
  targets: { group: string; options: { value: string; label: string }[] }[];
  onTarget?: (column: number, target: string) => void;
  /** For a mapped field of options, people or sprints: each value in the file and what it becomes; `empty` is what leaving it means. */
  values?: { label: string; items: { value: string; count: number; to: string | null; found: boolean }[]; choices: { value: string; label: string }[]; empty: string }[];
  onValue?: (label: string, value: string, to: string | null) => void;
  /** What a check would do, or what the run did. */
  counts?: { created: number; updated: number; unchanged: number; skipped: number; failed: number; comments: number; links: number; planned: boolean };
  /** Row by row: an error leaves the row out, a warning imports it without the value. */
  problems?: { row: number; key?: string; level: "error" | "warning"; message: string; hint?: string; column?: string }[];
  /** A run's progress, said in words too. */
  progress?: { done: number; total: number; phase: "issues" | "links" };
}
/** Bringing a file of issues in: its columns and values mapped, a check's counts, problems row by row, and the run's progress. Proposed. */
export declare function MappingTable(props: MappingTableProps): React.ReactElement;

export interface RuleProps {
  name: string;
  /** "change": when something happens to an issue; "schedule": every hour or day; "guard": refuses a change that breaks it. */
  kind: "change" | "schedule" | "guard";
  /** The rule as a sentence, in its parts: When … (or how often), if …, then …. The query, command or requirement in each is mono, as written. */
  sentence: { when: string; if?: { words: string; code: string }; then: { words: string; code?: string } };
  on: boolean;
  /** What no longer reads in it, such as a value renamed since: it does nothing until they're fixed. */
  problems?: { part: string; what: string; fix?: string }[];
  /** What it did last, or when it next runs: "Last acted 2 minutes ago, on BACK-12". */
  said?: React.ReactNode;
  onPreview: () => void;
  onEdit: () => void;
  onToggle: () => void;
  onDelete: () => void;
}
/** A workflow rule read as a sentence, what it does and how it stands as badges, and what it did last. Proposed. */
export declare function Rule(props: RuleProps): React.ReactElement;

export interface RuleFormProps {
  /** Each part's word and what fills it in: a choice, a query or command field (QueryBar's), a message. */
  clauses: { word: "When" | "if" | "then"; about?: string; field: React.ReactNode }[];
  /** What it would do now, as a dry run gives it; for a guard, the issues that already break it. */
  preview?: { matching: number; note: string; sample: { id: string; summary: string; changes: FieldChange[] }[] };
  onSave: () => void;
}
/** A rule's form, said as the rule is: a row for each word, the word beside its fields where there's room. Proposed. */
export declare function RuleForm(props: RuleFormProps): React.ReactElement;

export interface CommitsProps {
  /** The issue they mention. */
  issue: string;
  /** Pull or merge requests: open (waiting on review), merged, or closed without merging. */
  pullRequests: {
    number: number;
    title: string;
    href: string;
    state: "open" | "merged" | "closed";
    branch?: string;
    target?: string;
    by?: string;
    repository: string;
    at: { at: string; label: string };
  }[];
  /** Commits, each with the command it gave the issue, if one: applied as its author, or not, and why. */
  commits: {
    sha: string;
    title: string;
    href?: string;
    by: Someone;
    branch?: string;
    at: { at: string; label: string };
    command?: { text: string; applied: boolean; note: string };
  }[];
}
/** An issue's commits and pull requests, newest first, with how each stands and what a commit's command did. Proposed. */
export declare function Commits(props: CommitsProps): React.ReactElement;
