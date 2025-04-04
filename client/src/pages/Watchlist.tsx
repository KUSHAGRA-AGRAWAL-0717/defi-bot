
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WatchlistCard from "@/components/watchlist/WatchlistCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Bell, Target } from "lucide-react";

const alertSettings = [
  {
    id: 1,
    name: "Price Change Threshold",
    value: "5%",
    description: "Alert when token price changes by this percentage"
  },
  {
    id: 2,
    name: "Volume Spike",
    value: "3x average",
    description: "Alert when token volume exceeds average by this multiple"
  },
  {
    id: 3,
    name: "Trend Change Detection",
    value: "Enabled",
    description: "AI detects significant trend changes"
  },
  {
    id: 4,
    name: "Whale Movement",
    value: "500 ETH+",
    description: "Alert on large token transfers"
  }
];

const Watchlist = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold">Token Watchlist</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Monitor your favorite tokens and receive AI-powered alerts
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="watchlist" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="watchlist">Token Watchlist</TabsTrigger>
                  <TabsTrigger value="nfts">NFT Collections</TabsTrigger>
                  <TabsTrigger value="protocols">DeFi Protocols</TabsTrigger>
                </TabsList>
                
                <TabsContent value="watchlist">
                  <WatchlistCard />
                </TabsContent>
                
                <TabsContent value="nfts" className="text-center py-16">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-medium mb-2">NFT Collection Tracking Coming Soon</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Monitor floor prices, volume, and trends for your favorite NFT collections.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="protocols" className="text-center py-16">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-medium mb-2">Protocol Monitoring Coming Soon</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Track TVL, yields, and user metrics across DeFi protocols.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-brand-purple" />
                      <span>Alert History</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-start gap-3">
                          <Bell className="h-4 w-4 mt-0.5 text-brand-purple" />
                          <div>
                            <p className="text-sm font-medium">ETH price up 5.2%</p>
                            <p className="text-xs text-gray-500">2 hours ago</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-start gap-3">
                          <Bell className="h-4 w-4 mt-0.5 text-brand-purple" />
                          <div>
                            <p className="text-sm font-medium">SOL trend change detected</p>
                            <p className="text-xs text-gray-500">6 hours ago</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-start gap-3">
                          <Bell className="h-4 w-4 mt-0.5 text-brand-purple" />
                          <div>
                            <p className="text-sm font-medium">BNB volume spike (4.2x average)</p>
                            <p className="text-xs text-gray-500">Yesterday</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <button className="text-sm text-brand-purple hover:underline">
                        View all alerts
                      </button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-brand-purple" />
                      <span>Alert Settings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {alertSettings.map(setting => (
                        <div key={setting.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-sm">{setting.name}</p>
                            <p className="text-xs text-gray-500">{setting.description}</p>
                          </div>
                          <div className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {setting.value}
                          </div>
                        </div>
                      ))}
                      
                      <button className="w-full mt-2 text-brand-purple border border-brand-purple/30 hover:bg-brand-purple/5 px-4 py-2 rounded-md transition-colors">
                        Customize Alert Settings
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Watchlist;
