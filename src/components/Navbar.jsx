import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export default function Navbar() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <nav className="flex items-center justify-between p-6 border-b border-slate-800">
      <div className="flex items-center space-x-3">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb2162e0d81288afaecc37/694c878af_fluentxyz.png"
          alt="fUSD Logo"
          className="w-8 h-8 rounded-md"
        />
        <h1 className="text-2xl font-bold text-white">fUSD</h1>
      </div>
      
      <Button 
        onClick={handleConnect}
        className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-all text-white ${
          isConnected 
            ? 'bg-green-600 hover:bg-green-700' 
            : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600'
        }`}
      >
        <Wallet className="w-4 h-4" />
        <span>{isConnected ? 'Connected' : 'Connect Wallet'}</span>
      </Button>
    </nav>
  );
}