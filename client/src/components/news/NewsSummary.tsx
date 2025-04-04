
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Newspaper, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock news data
const mockNews = [
  {
    id: 1,
    title: "Ethereum Layer 2 Solutions See Surge in Activity as Gas Fees Spike",
    source: "CoinDesk",
    time: "2 hours ago",
    summary: "Ethereum Layer 2 solutions Arbitrum and Optimism have seen a significant increase in total value locked (TVL) and user activity as Ethereum gas fees have risen to an average of 25-30 Gwei. This migration comes as users seek more cost-effective alternatives for DeFi activities.",
    url: "#",
    topics: ["Ethereum", "Layer 2", "Gas Fees"]
  },
  {
    id: 2,
    title: "Major Protocol Unveils New Governance Framework to Increase Decentralization",
    source: "The Block",
    time: "5 hours ago",
    summary: "A leading DeFi protocol has introduced a revamped governance structure aimed at increasing decentralization and community participation. The changes include a new voting mechanism, delegation features, and on-chain execution of approved proposals.",
    url: "#",
    topics: ["Governance", "DAO", "Decentralization"]
  },
  {
    id: 3,
    title: "Regulators Signal Openness to DeFi Innovation While Emphasizing Consumer Protection",
    source: "Bloomberg",
    time: "12 hours ago",
    summary: "Financial regulators from several major economies have issued a joint statement acknowledging the innovative potential of decentralized finance while emphasizing the need for consumer protection measures. The statement suggests a possible path forward for regulatory clarity in the DeFi space.",
    url: "#",
    topics: ["Regulation", "Policy", "Compliance"]
  },
  {
    id: 4,
    title: "New Cross-Chain Bridge Protocol Addresses Security Concerns with Novel Approach",
    source: "DeFi Pulse",
    time: "1 day ago",
    summary: "A new cross-chain bridge protocol has launched with an innovative security architecture designed to address vulnerabilities that have led to exploits in other bridges. The solution uses a combination of trusted execution environments, multi-signature schemes, and automated security monitoring.",
    url: "#",
    topics: ["Security", "Cross-Chain", "Bridges"]
  }
];

const NewsSummary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = ["all", "DeFi", "NFT", "Layer 1", "Layer 2", "Regulation"];
  
  const filteredNews = mockNews.filter(news => {
    if (searchQuery === "") return true;
    
    return news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
           news.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
  });
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search for news..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={activeCategory === category ? "bg-brand-purple hover:bg-brand-purple/90" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredNews.map(news => (
          <Card key={news.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Newspaper className="h-4 w-4" />
                    <span>{news.source}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{news.time}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium">{news.title}</h3>
                </div>
              </div>
              
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                {news.summary}
              </div>
              
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  {news.topics.map(topic => (
                    <Badge key={topic} variant="secondary">{topic}</Badge>
                  ))}
                </div>
                
                <a 
                  href={news.url} 
                  className="text-sm font-medium text-brand-purple hover:text-brand-purple/90 flex items-center gap-1"
                >
                  Read full article
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsSummary;
