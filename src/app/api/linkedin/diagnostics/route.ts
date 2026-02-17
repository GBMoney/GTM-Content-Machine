import { NextResponse } from "next/server";
import { linkedinMode } from "@/lib/linkedin/client";

export async function GET() {
  return NextResponse.json({
    mode: linkedinMode(),
    grantedScopes: (process.env.LINKEDIN_SCOPES || "r_liteprofile,r_emailaddress,w_member_social").split(","),
    missingPermissions: [],
    guidance: "If org publishing fails, request w_organization_social and verify organization admin role."
  });
}
