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
      label?: string;
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
    }
  | {
      kind: "pipeline-snapshot";
      stages: Array<{ label: string; count: string }>;
      deal: {
        name: string;
        amount: string;
        stage: string;
        forecast: string;
        probability: string;
      };
      alerts: string[];
    }
  | {
      kind: "stage-claim";
      stage: string;
      statement: string;
      evidence: string[];
      verdict: string;
    }
  | {
      kind: "truth-chain";
      steps: string[];
      feedback: string;
    }
  | {
      kind: "proof-ladder";
      levels: Array<{ label: string; stages: string; proof: string; risk: string }>;
    }
  | {
      kind: "control-grid";
      controls: Array<{ label: string; question: string; corruption: string }>;
    }
  | {
      kind: "deal-record";
      name: string;
      amount: string;
      fields: Array<{ label: string; value: string; tone: "neutral" | "warn" | "risk" }>;
      note: string;
    }
  | {
      kind: "evidence-audit";
      deal: string;
      findings: Array<{
        label: string;
        evidence: string;
        strength: "adequate" | "weak" | "missing";
      }>;
    }
  | {
      kind: "deal-reconstruction";
      verdict: string;
      changes: Array<{ label: string; from: string; to: string }>;
      actions: string[];
    }
  | {
      kind: "evidence-layers";
      layers: Array<{ label: string; purpose: string; examples: string }>;
      manager: string;
    }
  | {
      kind: "identity-stack";
      entity: string;
      records: Array<{ name: string; owner: string; evidence: string; origin: string }>;
      status: string;
    }
  | {
      kind: "recurrence-loop";
      steps: Array<{ label: string; detail: string }>;
      source: string;
      result: string;
    }
  | {
      kind: "identity-failures";
      fragmentation: { entity: string; records: string[]; consequence: string };
      collision: { entities: string[]; record: string; consequence: string };
      principle: string;
    }
  | {
      kind: "entity-boundary";
      question: string;
      options: Array<{ label: string; decision: string }>;
      rule: string;
    }
  | {
      kind: "identity-model";
      phase: string;
      centre: string;
      parts: Array<{ label: string; detail: string }>;
    }
  | {
      kind: "match-router";
      input: string;
      routes: Array<{
        label: string;
        evidence: string;
        action: string;
        tone: "good" | "warn" | "neutral" | "risk";
      }>;
      principle: string;
    }
  | {
      kind: "ingress-map";
      sources: string[];
      decisions: string[];
      control: string;
    }
  | {
      kind: "company-identity";
      mode: "context" | "collision" | "fragmentation" | "governed";
      label: string;
      signals: string[];
      records: Array<{
        name: string;
        meta: string;
        status: "neutral" | "good" | "warn" | "risk";
      }>;
      verdict: string;
    }
  | {
      kind: "duplicate-factory";
      sources: Array<{ label: string; signal: string; tone: "good" | "warn" | "risk" }>;
      impactChecks: string[];
      outcome: string;
    }
  | {
      kind: "integration-health";
      app: string;
      source: string;
      destination: string;
      syncStatus: string;
      dependants: Array<{ label: string; status: "ok" | "risk" }>;
      symptom: string;
    }
  | {
      kind: "map-anatomy";
      layers: Array<{ label: string; role: string; outcome: string }>;
      principle: string;
    }
  | {
      kind: "interface-contract";
      section: string;
      purpose: string;
      items: Array<{ number: string; label: string; question: string; evidence: string }>;
    }
  | {
      kind: "interface-path";
      source: string;
      steps: Array<{ label: string; state: "good" | "warn" | "risk" }>;
      decision: string;
    }
  | {
      kind: "semantic-break";
      field: string;
      expected: string[];
      received: string;
      consumers: Array<{ label: string; outcome: string }>;
      verdict: string;
    }
  | {
      kind: "use-case-fit";
      cases: Array<{
        label: string;
        action: string;
        autonomy: string;
        review: string;
        tone: "ready" | "blocked";
      }>;
      principle: string;
    }
  | {
      kind: "operating-contract";
      tool: string;
      parts: Array<{ label: string; detail: string }>;
      principle: string;
    }
  | {
      kind: "autonomy-ladder";
      levels: Array<{
        number: string;
        label: string;
        action: string;
        control: string;
        tone: "good" | "warn" | "risk";
      }>;
      principle: string;
    }
  | {
      kind: "intervention-router";
      problem: string;
      options: Array<{
        label: string;
        fit: string;
        tone: "recommended" | "possible" | "avoid";
      }>;
      decision: string;
    }
  | {
      kind: "dashboard-display";
      title: string;
      headline: { label: string; value: string; note: string };
      metrics: Array<{
        label: string;
        value: string;
        detail: string;
        tone: "good" | "warn" | "risk" | "neutral";
      }>;
      question: string;
    }
  | {
      kind: "decision-contract";
      decision: string;
      parts: Array<{ number: string; label: string; detail: string }>;
      principle: string;
    }
  | {
      kind: "role-surfaces";
      sharedModel: string;
      roles: Array<{
        role: string;
        cadence: string;
        question: string;
        surface: string;
      }>;
      principle: string;
    }
  | {
      kind: "decision-surface";
      role: string;
      cadence: string;
      decision: string;
      evidence: Array<{ label: string; value: string; tone: "good" | "warn" | "risk" }>;
      action: string;
      surface: string;
    }
  | {
      kind: "failure-board";
      failures: Array<{ label: string; symptom: string; consequence: string }>;
      verdict: string;
    }
  | {
      kind: "funnel-gap";
      acquisition: Array<{ label: string; evidence: string }>;
      handoff: { label: string; status: string };
      postSale: Array<{ label: string; evidence: string; tone: "good" | "warn" | "risk" }>;
      verdict: string;
    }
  | {
      kind: "bowtie-path";
      phases: Array<{
        label: string;
        evidence: string;
        side: "acquire" | "pivot" | "retain";
      }>;
      principle: string;
    }
  | {
      kind: "transition-contract";
      transition: { from: string; to: string };
      parts: Array<{ number: string; label: string; detail: string }>;
      principle: string;
    }
  | {
      kind: "lifecycle-spine";
      span: string;
      objects: Array<{ label: string; responsibility: string }>;
      principle: string;
    }
  | {
      kind: "handoff-bridge";
      transition: { from: string; to: string };
      packet: Array<{ label: string; detail: string }>;
      acceptance: string;
    }
  | {
      kind: "value-progression";
      steps: Array<{
        label: string;
        evidence: string;
        notEnough: string;
        tone: "warn" | "good" | "great";
      }>;
      principle: string;
    }
  | {
      kind: "measurement-grammar";
      metrics: Array<{ label: string; question: string }>;
      principle: string;
    }
  | {
      kind: "capture-record";
      contact: {
        name: string;
        email: string;
        created: string;
        source: string;
      };
      fields: Array<{
        label: string;
        value: string;
        tone: "good" | "warn" | "risk" | "neutral";
      }>;
      route: string;
      missing: string[];
      verdict: string;
    }
  | {
      kind: "account-priority";
      company: string;
      score: string;
      fields: Array<{
        label: string;
        value: string;
        tone: "good" | "warn" | "risk" | "neutral";
      }>;
      decision: string;
      reason: string;
    }
  | {
      kind: "targeting-concepts";
      concepts: Array<{ label: string; question: string; boundary: string }>;
      principle: string;
    }
  | {
      kind: "priority-engine";
      gate: { label: string; result: string };
      layers: Array<{
        label: string;
        evidence: string;
        tone: "good" | "warn" | "risk" | "neutral";
      }>;
      verdict: string;
      reason: string;
    }
  | {
      kind: "outcome-router";
      outcomes: Array<{
        label: string;
        condition: string;
        tone: "good" | "warn" | "risk" | "neutral";
      }>;
      principle: string;
    }
  | {
      kind: "score-explainer";
      score: string;
      status: string;
      evidence: Array<{
        label: string;
        value: string;
        tone: "good" | "warn" | "risk" | "neutral";
      }>;
      verdict: string;
      action: string;
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
