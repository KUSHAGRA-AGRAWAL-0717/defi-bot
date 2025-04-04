
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContentCreator from "@/components/content/ContentCreator";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Twitter, FileText, MessageSquare } from "lucide-react";

const ContentHub = () => {
  const recentContents = [
    {
      id: 1,
      title: "ETH Layer 2 Thread",
      type: "twitter",
      date: "April 3, 2025",
      published: true
    },
    {
      id: 2,
      title: "DeFi Market Analysis",
      type: "blog",
      date: "April 2, 2025",
      published: true
    },
    {
      id: 3,
      title: "Daily Crypto Update",
      type: "telegram",
      date: "April 1, 2025",
      published: true
    },
    {
      id: 4,
      title: "NFT Market Report",
      type: "blog",
      date: "March 30, 2025",
      published: false
    }
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case "twitter":
        return <Twitter className="h-4 w-4 text-[#1DA1F2]" />;
      case "blog":
        return <FileText className="h-4 w-4 text-brand-purple" />;
      case "telegram":
        return <MessageSquare className="h-4 w-4 text-[#0088cc]" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold">AI Content Hub</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Generate, manage, and schedule your crypto content
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContentCreator />
            </div>
            
            <div>
              <Tabs defaultValue="recent">
                <TabsList className="w-full grid grid-cols-2">
                  <TabsTrigger value="recent">Recent Content</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                </TabsList>
                
                <TabsContent value="recent" className="space-y-2 mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      {recentContents.length > 0 ? (
                        <div className="space-y-3">
                          {recentContents.map((content) => (
                            <div 
                              key={content.id} 
                              className="p-3 border rounded-md hover:border-brand-purple/50 transition-colors cursor-pointer"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center space-x-2">
                                  {renderIcon(content.type)}
                                  <span className="font-medium">{content.title}</span>
                                </div>
                                <div className={`px-2 py-0.5 text-xs rounded-full ${
                                  content.published 
                                    ? "bg-green-100 text-green-800"
                                    : "bg-amber-100 text-amber-800"
                                }`}>
                                  {content.published ? "Published" : "Draft"}
                                </div>
                              </div>
                              <p className="text-xs text-gray-500">{content.date}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center py-8 text-gray-500">No recent content</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="templates" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="p-3 border rounded-md hover:border-brand-purple/50 transition-colors cursor-pointer">
                          <div className="flex items-center space-x-2 mb-1">
                            <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                            <span className="font-medium">Market Analysis Thread</span>
                          </div>
                          <p className="text-xs text-gray-500">10-part Twitter thread template</p>
                        </div>
                        
                        <div className="p-3 border rounded-md hover:border-brand-purple/50 transition-colors cursor-pointer">
                          <div className="flex items-center space-x-2 mb-1">
                            <FileText className="h-4 w-4 text-brand-purple" />
                            <span className="font-medium">Weekly DeFi Recap</span>
                          </div>
                          <p className="text-xs text-gray-500">Blog post with key metrics</p>
                        </div>
                        
                        <div className="p-3 border rounded-md hover:border-brand-purple/50 transition-colors cursor-pointer">
                          <div className="flex items-center space-x-2 mb-1">
                            <MessageSquare className="h-4 w-4 text-[#0088cc]" />
                            <span className="font-medium">Daily Market Update</span>
                          </div>
                          <p className="text-xs text-gray-500">Telegram/Discord announcement</p>
                        </div>
                        
                        <div className="text-center pt-2">
                          <button className="text-sm text-brand-purple hover:underline">
                            View all templates
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <Card className="mt-6">
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-4">Connected Platforms</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white">
                          <Twitter size={16} />
                        </div>
                        <span>Twitter</span>
                      </div>
                      <div className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                        Connected
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-[#0088cc] flex items-center justify-center text-white">
                          <MessageSquare size={16} />
                        </div>
                        <span>Telegram</span>
                      </div>
                      <div className="text-xs text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                        Not connected
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center text-white">
                          <span className="font-bold text-sm">in</span>
                        </div>
                        <span>LinkedIn</span>
                      </div>
                      <div className="text-xs text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                        Not connected
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 text-brand-purple border border-brand-purple/30 hover:bg-brand-purple/5 px-4 py-2 rounded-md transition-colors">
                    Manage Connections
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContentHub;
