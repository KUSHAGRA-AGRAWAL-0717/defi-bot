
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for market overview
const marketData = [
  { name: 'Apr 1', eth: 3480, btc: 69500, sol: 178 },
  { name: 'Apr 2', eth: 3530, btc: 70200, sol: 182 },
  { name: 'Apr 3', eth: 3490, btc: 69800, sol: 176 },
  { name: 'Apr 4', eth: 3580, btc: 71000, sol: 185 },
  { name: 'Apr 5', eth: 3600, btc: 72500, sol: 189 },
  { name: 'Apr 6', eth: 3750, btc: 73400, sol: 194 },
  { name: 'Apr 7', eth: 3720, btc: 73000, sol: 191 },
];

const marketStats = [
  { name: 'Market Cap', value: '$2.24T', change: '+3.2%', positive: true },
  { name: 'Trading Volume', value: '$89.4B', change: '-1.5%', positive: false },
  { name: 'Total Value Locked', value: '$78.3B', change: '+5.7%', positive: true },
  { name: 'Average Gas', value: '15 Gwei', change: '-8.3%', positive: true },
];

const MarketOverview = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Market Overview</span>
            <div className="flex space-x-2 text-sm font-medium">
              <button className="px-3 py-1 rounded bg-brand-purple/10 text-brand-purple">1D</button>
              <button className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">1W</button>
              <button className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">1M</button>
              <button className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">ALL</button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={marketData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderColor: "#e5e7eb",
                    borderRadius: "0.375rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="btc"
                  stroke="#F7931A"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="eth"
                  stroke="#627EEA"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="sol"
                  stroke="#9945FF"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketStats.map((stat) => (
          <Card key={stat.name} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    stat.positive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;
