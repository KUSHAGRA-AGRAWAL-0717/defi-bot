
import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for trending tokens
const trendingTokens = [
  {
    id: 1,
    name: "Ethereum",
    symbol: "ETH",
    price: "3,724.85",
    change: "+5.2%",
    positive: true,
    volume: "$14.5B",
    icon: "🔷"
  },
  {
    id: 2,
    name: "Solana",
    symbol: "SOL",
    price: "193.42",
    change: "+8.7%",
    positive: true,
    volume: "$5.2B",
    icon: "🟣"
  },
  {
    id: 3,
    name: "Cardano",
    symbol: "ADA",
    price: "0.48",
    change: "-2.1%",
    positive: false,
    volume: "$1.1B",
    icon: "🔵"
  },
  {
    id: 4,
    name: "Polygon",
    symbol: "MATIC",
    price: "0.56",
    change: "-1.8%",
    positive: false,
    volume: "$697.3M",
    icon: "🟪"
  },
  {
    id: 5,
    name: "Avalanche",
    symbol: "AVAX",
    price: "37.22",
    change: "+3.5%",
    positive: true,
    volume: "$845.7M",
    icon: "🔺"
  }
];

const TrendingTokens = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Trending Tokens</span>
          <button className="text-sm text-brand-purple hover:underline">View all</button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                <th className="pb-3 px-1 text-gray-500 font-medium text-sm">Asset</th>
                <th className="pb-3 px-1 text-gray-500 font-medium text-sm">Price</th>
                <th className="pb-3 px-1 text-gray-500 font-medium text-sm">Change (24h)</th>
                <th className="pb-3 px-1 text-gray-500 font-medium text-sm">Volume (24h)</th>
              </tr>
            </thead>
            <tbody>
              {trendingTokens.map((token) => (
                <tr key={token.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-4 px-1">
                    <div className="flex items-center">
                      <div className="w-8 h-8 flex-shrink-0 mr-3 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                        <span className="text-xl">{token.icon}</span>
                      </div>
                      <div>
                        <p className="font-medium">{token.name}</p>
                        <p className="text-xs text-gray-500">{token.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-1 font-medium">${token.price}</td>
                  <td className="py-4 px-1">
                    <div
                      className={`flex items-center ${
                        token.positive ? "text-brand-green" : "text-brand-red"
                      }`}
                    >
                      {token.positive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                      <span className="ml-1">{token.change}</span>
                    </div>
                  </td>
                  <td className="py-4 px-1 text-gray-600 dark:text-gray-400">
                    {token.volume}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingTokens;
