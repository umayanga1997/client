import "next-auth";

// Modified custom interface with new fields : * Previous fields are available in the interface
declare module "next-auth" {
  interface Session {
    user: User;
  }

  interface User {
    id: string;
    username: String;
  }
}
