
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp, ArrowDown, Plus, X, Bell, BellOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock watchlist data
const mockWatchlist = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$69,420",
    change: "+2.5%",
    positive: true,
    alerts: true
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,724",
    change: "+5.2%",
    positive: true,
    alerts: true
  },
  {
    id: 3,
    name: "Binance Coin",
    symbol: "BNB",
    price: "$603",
    change: "-0.8%",
    positive: false,
    alerts: false
  },
  {
    id: 4,
    name: "Solana",
    symbol: "SOL",
    price: "$193",
    change: "+8.7%",
    positive: true,
    alerts: true
  }
];

const WatchlistCard = () => {
  const [watchlist, setWatchlist] = useState(mockWatchlist);
  const [newToken, setNewToken] = useState("");
  const { toast } = useToast();
  
  const toggleAlert = (id: number) => {
    setWatchlist(
      watchlist.map(token => 
        token.id === id ? { ...token, alerts: !token.alerts } : token
      )
    );
    
    const token = watchlist.find(t => t.id === id);
    if (token) {
      toast({
        title: `Alerts ${token.alerts ? 'disabled' : 'enabled'} for ${token.symbol}`,
        description: token.alerts 
          ? `You will no longer receive alerts for ${token.symbol}` 
          : `You will now receive price alerts for ${token.symbol}`,
      });
    }
  };
  
  const removeFromWatchlist = (id: number) => {
    const token = watchlist.find(t => t.id === id);
    setWatchlist(watchlist.filter(token => token.id !== id));
    
    if (token) {
      toast({
        title: `Removed ${token.symbol}`,
        description: `${token.symbol} has been removed from your watchlist`,
      });
    }
  };
  
  const addToWatchlist = () => {
    if (!newToken.trim()) return;
    
    // In a real app, we would validate and fetch token data from an API
    const newTokenObj = {
      id: Date.now(),
      name: newToken,
      symbol: newToken.substring(0, 3).toUpperCase(),
      price: "$0.00",
      change: "+0.0%",
      positive: true,
      alerts: false
    };
    
    setWatchlist([...watchlist, newTokenObj]);
    setNewToken("");
    
    toast({
      title: `Added ${newTokenObj.symbol}`,
      description: `${newTokenObj.symbol} has been added to your watchlist`,
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Your Watchlist</span>
          <Button variant="outline" size="sm" className="text-sm">
            Set Alert Thresholds
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input 
            placeholder="Add token (e.g., Bitcoin, ETH)"
            value={newToken}
            onChange={(e) => setNewToken(e.target.value)}
          />
          <Button 
            onClick={addToWatchlist}
            disabled={!newToken.trim()}
            className="bg-brand-purple hover:bg-brand-purple/90"
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only md:not-sr-only md:ml-2">Add</span>
          </Button>
        </div>
        
        <div className="space-y-2">
          {watchlist.map(token => (
            <div 
              key={token.id}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                  {token.symbol.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{token.name}</div>
                  <div className="text-sm text-gray-500">{token.symbol}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div>
                  <div className="font-medium text-right">{token.price}</div>
                  <div 
                    className={`text-sm flex items-center justify-end ${
                      token.positive ? "text-brand-green" : "text-brand-red"
                    }`}
                  >
                    {token.positive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                    <span className="ml-1">{token.change}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => toggleAlert(token.id)}
                    className={`p-1.5 rounded-md ${
                      token.alerts 
                        ? "bg-brand-purple/10 text-brand-purple" 
                        : "bg-gray-200 text-gray-500 dark:bg-gray-700"
                    }`}
                  >
                    {token.alerts ? <Bell size={16} /> : <BellOff size={16} />}
                  </button>
                  
                  <button 
                    onClick={() => removeFromWatchlist(token.id)}
                    className="p-1.5 rounded-md bg-gray-200 text-gray-500 hover:bg-red-100 hover:text-red-500 dark:bg-gray-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WatchlistCard;
