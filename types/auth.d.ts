// Интерфейс сессий для auth.ts
import type { DefaultSession } from "@auth/core/types";

declare module "@auth/core/types" {
  interface Session {
    user: {
      _id: string,
    } & DefaultSession['user'];
  }
}

// Принцип работы:
// https://next-auth.js.org/getting-started/typescript