import { exec } from "child_process";

export const ProxymanActions = {
  ToggleSystemProxy: "ToggleSystemProxy",
  ToggleMapLocal: "ToggleMapLocal",
  ToggleBreakpoint: "ToggleBreakpoint",
  ToggleBlocklist: "ToggleBlocklist",
  ToggleAllowlist: "ToggleAllowlist",
  ToggleMapRemote: "ToggleMapRemote",
  ToggleScripting: "ToggleScripting",
  ClearSession: "ClearSession",
} as const;

export type ProxymanActionType = (typeof ProxymanActions)[keyof typeof ProxymanActions];

export function runSchemaAction(action: ProxymanActionType): Promise<void> {
  return new Promise((resolve, reject) => {
    // build URL
    const uri = `proxyman://action?name=${action}`;

    // open Proxyman with schema
    exec(`open "${uri}"`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else if (stderr) {
        reject(new Error(stderr));
      } else {
        resolve();
      }
    });
  });
}
