export function linkedinMode() {
  return process.env.LIVE_MODE === "true" ? "LIVE_MODE" : "SANDBOX_MODE";
}

export async function publishLinkedInPost(args: { accessToken: string; authorUrn: string; content: string }) {
  if (linkedinMode() === "SANDBOX_MODE") {
    return { id: `sandbox-${Date.now()}`, status: "PUBLISHED", mode: "SANDBOX_MODE" };
  }

  const response = await fetch("https://api.linkedin.com/v2/ugcPosts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${args.accessToken}`,
      "X-Restli-Protocol-Version": "2.0.0",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      author: args.authorUrn,
      lifecycleState: "PUBLISHED",
      specificContent: {
        "com.linkedin.ugc.ShareContent": {
          shareCommentary: { text: args.content },
          shareMediaCategory: "NONE"
        }
      },
      visibility: {
        "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
      }
    })
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`LinkedIn publish failed: ${response.status} ${message}`);
  }

  return { id: response.headers.get("x-restli-id"), status: "PUBLISHED", mode: "LIVE_MODE" };
}
