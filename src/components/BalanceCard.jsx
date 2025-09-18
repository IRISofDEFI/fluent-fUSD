import React from "react";
import { Card } from "@/components/ui/card";

export default function BalanceCard({ symbol, name, balance, icon }) {
  return (
    <Card className="bg-slate-800 border-slate-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-pink-400">
            {typeof icon === 'string' ? <span className="text-lg font-bold">{icon}</span> : icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{symbol}</h3>
            <p className="text-sm text-slate-400">{name}</p>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-3xl font-bold text-white">{balance}</p>
        <p className="text-sm text-slate-400">Balance</p>
      </div>
    </Card>
  );
}