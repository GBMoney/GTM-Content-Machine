export type WorkspaceRole = "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";

type Action = "workspace:manage" | "post:edit" | "post:approve" | "analytics:read";

const permissionMap: Record<WorkspaceRole, Action[]> = {
  OWNER: ["workspace:manage", "post:edit", "post:approve", "analytics:read"],
  ADMIN: ["workspace:manage", "post:edit", "post:approve", "analytics:read"],
  EDITOR: ["post:edit", "analytics:read"],
  VIEWER: ["analytics:read"]
};

export function can(role: WorkspaceRole, action: Action) {
  return permissionMap[role].includes(action);
}
