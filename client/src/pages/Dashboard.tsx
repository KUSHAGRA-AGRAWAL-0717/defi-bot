
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MarketOverview from "@/components/dashboard/MarketOverview";
import TrendingTokens from "@/components/dashboard/TrendingTokens";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Zap, Activity, ArrowUpRight } from "lucide-react";

// Mock alerts data
const recentAlerts = [
  {
    id: 1,
    title: "ETH price up 5.2% in the last 24 hours",
    time: "2 hours ago",
    type: "price"
  },
  {
    id: 2,
    title: "Large transfer: 1,500 ETH moved to Binance",
    time: "5 hours ago",
    type: "whale"
  },
  {
    id: 3,
    title: "Uniswap governance proposal passed",
    time: "12 hours ago",
    type: "governance"
  }
];

// Mock insights data
const aiInsights = [
  {
    id: 1,
    title: "ETH may continue bullish trend based on on-chain metrics",
    description: "Analysis of ETH on-chain data shows increasing accumulation by long-term holders, which has historically preceded price increases.",
    confidence: 85
  },
  {
    id: 2,
    title: "DeFi TVL growth suggests sector recovery",
    description: "Total Value Locked in DeFi protocols has increased by 12% this month, potentially signaling renewed interest in the sector.",
    confidence: 78
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold">Market Dashboard</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Real-time DeFi insights and market analysis
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Last updated: </span>
              <span className="text-sm font-medium">April 4, 2025 12:30 PM</span>
              <button className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
                <Zap className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Market Overview */}
            <MarketOverview />
            
            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Trending Tokens */}
              <div className="lg:col-span-2">
                <TrendingTokens />
              </div>
              
              {/* Alerts */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-brand-purple" />
                      <span>Recent Alerts</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {recentAlerts.length > 0 ? (
                      <div className="space-y-4">
                        {recentAlerts.map(alert => (
                          <div key={alert.id} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <div className={`p-2 rounded-full ${
                              alert.type === 'price' ? 'bg-green-100 text-green-600' : 
                              alert.type === 'whale' ? 'bg-blue-100 text-blue-600' : 
                              'bg-purple-100 text-purple-600'
                            }`}>
                              {alert.type === 'price' ? <ArrowUpRight className="h-4 w-4" /> : 
                               alert.type === 'whale' ? <Activity className="h-4 w-4" /> : 
                               <Bell className="h-4 w-4" />}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{alert.title}</p>
                              <p className="text-xs text-gray-500">{alert.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center py-8 text-gray-500">No recent alerts</p>
                    )}
                    <div className="mt-4">
                      <button className="text-sm text-brand-purple hover:text-brand-purple/90 w-full text-center">
                        View all alerts
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-brand-purple" />
                  <span>AI Market Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="predictions">
                  <TabsList className="mb-4">
                    <TabsTrigger value="predictions">Predictions</TabsTrigger>
                    <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
                    <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="predictions" className="space-y-4">
                    {aiInsights.map(insight => (
                      <div key={insight.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">{insight.title}</h4>
                          <div className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs font-medium">
                            {insight.confidence}% confidence
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{insight.description}</p>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="trends">
                    <div className="p-8 text-center text-gray-500">
                      <p>Trend analysis coming soon</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="opportunities">
                    <div className="p-8 text-center text-gray-500">
                      <p>Opportunity detection coming soon</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
