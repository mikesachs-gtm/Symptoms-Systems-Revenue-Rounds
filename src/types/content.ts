export type VisualTone = "paper" | "navy" | "teal" | "split";

export type VisualSpec =
  | {
      kind: "portal-shift";
      portalLabel: string;
      changes: string[];
      status: string;
    }
  | {
      kind: "comparison";
      items: Array<{ symptom: string; assumption: string; question: string }>;
    }
  | {
      kind: "state-model";
      states: Array<{ number: string; label: string; detail: string }>;
      centre: string;
    }
  | {
      kind: "drift-types";
      types: Array<{ label: string; from: string; to: string; status: string }>;
    }
  | {
      kind: "chain";
      steps: string[];
      hinge: number;
    }
  | {
      kind: "motion-contrast";
      before: string[];
      change: string;
      after: string[];
    }
  | {
      kind: "impact-grid";
      impacts: Array<{ label: string; value: string }>;
    }
  | {
      kind: "surface-grid";
      centre: string;
      surfaces: Array<{ label: string; detail: string }>;
    }
  | {
      kind: "matrix";
      columns: string[];
      rows: Array<{ values: string[]; result: string; tone: "good" | "warn" | "risk" }>;
    }
  | {
      kind: "dependency-map";
      decision: string;
      dependencies: string[];
    }
  | {
      kind: "control-loop";
      trigger: string;
      questions: string[];
      outcome: string;
    }
  | {
      kind: "cadence";
      principles: string[];
      cadence: string;
      output: string;
    }
  | {
      kind: "close";
      question: string;
      states: string[];
      ctaLabel: string;
    };

export interface Scene {
  id: `scene-${string}`;
  eyebrow: string;
  heading: string;
  lead: string;
  emphasis?: string;
  tone: VisualTone;
  visual: VisualSpec;
}

export interface EpisodeCta {
  label: string;
  url: string;
  note: string;
}

export interface Episode {
  slug: string;
  title: string;
  pillar: string;
  duration: string;
  summary: string;
  published: string;
  cta: EpisodeCta;
  scenes: Scene[];
}
