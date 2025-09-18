import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ActionCard({ title, description, buttonText, buttonColor = "bg-purple-600 hover:bg-purple-700" }) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAction = async () => {
    if (!amount) return;
    
    setLoading(true);
    // Simulate action
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setAmount("");
  };

  return (
    <Card className="bg-slate-800 border-slate-700 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Amount
          </label>
          <Input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 h-12"
          />
        </div>
        
        <Button
          onClick={handleAction}
          disabled={!amount || loading}
          className={`w-full h-12 text-base font-medium rounded-lg transition-all ${buttonColor} disabled:opacity-50`}
        >
          {loading ? "Processing..." : buttonText }
        </Button>
      </div>
    </Card>
  );
}