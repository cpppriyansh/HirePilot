// Type definitions for better-auth
declare module '@better-auth/core' {
  // Add type declarations for better-auth here
  // This is a minimal declaration to resolve the TypeScript error
  export interface AuthOptions {
    // Add necessary options here
  }
  
  export function initAuth(options: AuthOptions): any;
  // Add other exports as needed
}
