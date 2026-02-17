import { describe, expect, it } from "vitest";
import { can } from "../src/lib/rbac/access";
import { getPlanEntitlements } from "../src/lib/billing/entitlements";

describe("rbac", () => {
  it("allows owner to approve", () => {
    expect(can("OWNER", "post:approve")).toBe(true);
  });
  it("prevents viewer editing", () => {
    expect(can("VIEWER", "post:edit")).toBe(false);
  });
});

describe("billing", () => {
  it("returns agency limits", () => {
    expect(getPlanEntitlements("AGENCY").aiGenerations).toBe(2000);
  });
});
