export type PlanName = "CREATOR" | "PRO" | "AGENCY";

export const PLANS = [
  { name: "CREATOR" as const, price: 39, linkedinConnections: 1, workspaces: 1, aiGenerations: 100, scheduledPosts: 30, unlimitedScheduling: false, advancedAnalytics: false, repurposing: false, engagementAssistant: false, clientWorkspaces: 0 },
  { name: "PRO" as const, price: 79, linkedinConnections: 2, workspaces: 1, aiGenerations: 500, scheduledPosts: null, unlimitedScheduling: true, advancedAnalytics: true, repurposing: true, engagementAssistant: true, clientWorkspaces: 0 },
  { name: "AGENCY" as const, price: 199, linkedinConnections: 10, workspaces: 1, aiGenerations: 2000, scheduledPosts: null, unlimitedScheduling: true, advancedAnalytics: true, repurposing: true, engagementAssistant: true, clientWorkspaces: 5 }
];

export function getPlanEntitlements(plan: PlanName) {
  const found = PLANS.find((p) => p.name === plan);
  if (!found) throw new Error("Unknown plan");
  return found;
}

export function isBillingBypassed() {
  return process.env.DEV_BYPASS_BILLING === "true";
}
