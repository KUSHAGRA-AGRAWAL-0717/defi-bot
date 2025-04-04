
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsSummary from "@/components/news/NewsSummary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold">DeFi News & Insights</h1>
            <p className="text-gray-500 dark:text-gray-400">
              AI-summarized news and updates from across the crypto ecosystem
            </p>
          </div>
          
          <Tabs defaultValue="news" className="space-y-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="governance">Governance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="news">
              <NewsSummary />
            </TabsContent>
            
            <TabsContent value="research" className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-medium mb-2">Research Papers Coming Soon</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  AI-summarized research papers from leading blockchain and DeFi research teams will be available soon.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="governance" className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-medium mb-2">Governance Updates Coming Soon</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Stay informed about important DAO proposals and governance votes across major DeFi protocols.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
