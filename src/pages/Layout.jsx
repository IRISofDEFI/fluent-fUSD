
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {children}
    </div>
  );
}
