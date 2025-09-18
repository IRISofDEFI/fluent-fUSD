import React from "react";
import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";
import ActionCard from "../components/ActionCard";

const SpinningEthereumLogo = () => (
  <img
    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb2162e0d81288afaecc37/b1db28b0d_Screenshot_2025-09-18_014116-removebg-preview.png"
    alt="Ethereum Logo"
    className="h-6 w-6 animate-spin"
    style={{ animationDuration: '3s' }}
  />
);

const SpinningDollarSign = () => (
  <span 
    className="text-lg font-bold animate-spin"
    style={{ animationDuration: '3s' }}
  >
    $
  </span>
);


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            fUSD Protocol
          </h1>
          <p className="text-slate-400 text-lg">
            Manage your digital assets with ease
          </p>
        </div>

        {/* Balance Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <BalanceCard
            symbol="ETH"
            name="Ethereum"
            balance="2.45"
            icon={<SpinningEthereumLogo />}
          />
          <BalanceCard
            symbol="fUSD"
            name="Fractional USD"
            balance="1,250.00"
            icon={<SpinningDollarSign />}
          />
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <ActionCard
            title="Mint fUSD"
            description="Create new fUSD tokens by depositing collateral"
            buttonText="Mint Tokens"
            buttonColor="bg-green-600 hover:bg-green-700"
          />
          <ActionCard
            title="Burn fUSD"
            description="Destroy fUSD tokens to withdraw your collateral"
            buttonText="Burn Tokens"
            buttonColor="bg-red-600 hover:bg-red-700"
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-800">
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <span>Powered by</span>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb2162e0d81288afaecc37/694c878af_fluentxyz.png"
              alt="Fluent Logo"
              className="h-5 w-5 rounded-sm"
            />
            <a href="#" className="font-semibold text-purple-400 hover:text-purple-300 transition-colors">Fluent</a>
          </div>
        </div>
      </div>
    </div>
  );
}