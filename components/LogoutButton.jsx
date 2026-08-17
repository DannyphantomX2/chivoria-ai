"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg"
      style={{ background: "rgba(224,120,86,0.12)", color: "#E07856" }}
    >
      <LogOut size={14} /> Log out
    </button>
  );
}
