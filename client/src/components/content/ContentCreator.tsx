import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader, Twitter, FileText, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContentCreator = () => {
  const [prompt, setPrompt] = useState({ content: "", type: "", tone: "" });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const { toast } = useToast();
  const handleGenerate = async() => {
    
    if (!prompt) {
      toast({
        title: "Please enter a prompt",
        description:
          "You need to provide some context for the AI to generate content.",
        variant: "destructive",
      });
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          topic: prompt.content,
          format_type: prompt.type,
          tone:prompt.tone,
        })
      });
      const data = await response.json();
      if(data){
         setIsGenerating(true);
      }
      return;
    }
    // In a real implementation, this would call an API
    // For demo purposes, we'll simulate a delay and generate fake content
    setTimeout(() => {
      let content = "";

      if (prompt.type === "twitter") {
        content = `1/ Here's what you need to know about the latest DeFi development 🧵\n\n2/ The TVL in DeFi protocols has increased by 15% over the past month, signaling renewed confidence in the ecosystem.\n\n3/ Major innovations in Layer 2 solutions are reducing gas fees and improving user experience.\n\n4/ This trend is likely to continue as adoption increases. #DeFi #Crypto`;
      } else if (prompt.type === "blog") {
        content = `# The Future of DeFi: Beyond Traditional Finance\n\nDecentralized Finance has evolved significantly in recent years, moving from simple token swaps to complex financial instruments. This article explores the latest trends and what they mean for investors.\n\n## Key Developments\n\n- Cross-chain liquidity solutions\n- Real-world asset tokenization\n- Institutional DeFi adoption\n\nAs we move forward, expect to see more integration between traditional finance and DeFi platforms, creating a more accessible financial ecosystem for everyone.`;
      } else if (prompt.type === "telegram") {
        content = `📣 DEFI MARKET UPDATE 📣\n\nEthereum layer 2 solutions seeing massive growth with Arbitrum and Optimism leading the charge!\n\n💰 ETH Price: $3,724\n⚡ Gas: 15 Gwei\n🏦 Total TVL: $78.3B\n\nTop Gainers:\n- @ArbitrumFoundation +12%\n- @OptimismFND +8.5%\n- @AaveAave +6.2%\n\nKey events to watch this week:\n- Ethereum Shanghai upgrade\n- Uniswap v4 announcement\n- MakerDAO governance vote`;
      }

      setGeneratedContent(content);
      setIsGenerating(false);

      toast({
        title: "Content generated!",
        description: "Your AI-powered content is ready to review and publish.",
      });
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({
      title: "Copied to clipboard",
      description: "Content has been copied to your clipboard.",
    });
  };

  const renderIcon = () => {
    switch (prompt.type) {
      case "twitter":
        return <Twitter className="h-5 w-5 text-[#1DA1F2]" />;
      case "blog":
        return <FileText className="h-5 w-5 text-brand-purple" />;
      case "telegram":
        return <MessageSquare className="h-5 w-5 text-[#0088cc]" />;
      default:
        return <Twitter className="h-5 w-5 text-[#1DA1F2]" />;
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create Content</TabsTrigger>
          <TabsTrigger value="schedule">Schedule Posts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Content Type
                    </label>
                    
                    <Select value={prompt.type} onValueChange={(value) => setPrompt({ ...prompt, type: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="twitter">Twitter Thread</SelectItem>
                        <SelectItem value="blog">Blog Post</SelectItem>
                        <SelectItem value="telegram">
                          Telegram Update
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Content Tone
                    </label>
                    <Select value={prompt.tone} onValueChange={(value) => setPrompt({ ...prompt, tone: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="informative">Informative</SelectItem>
                        <SelectItem value="analytical">Analytical</SelectItem>
                        <SelectItem value="enthusiastic">
                          Enthusiastic
                        </SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    What should the AI write about?
                  </label>
                  <Textarea
                    placeholder="E.g., Write about the rising TVL in DeFi protocols and what it means for investors..."
                    value={prompt.content}
                    onChange={(e) =>
                      setPrompt({ ...prompt, content: e.target.value })
                    }
                    className="min-h-[120px]"
                  />
                </div>
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt}
                  className="w-full bg-brand-purple hover:bg-brand-purple/90"
                >
                  {isGenerating ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Content"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {generatedContent && (
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {renderIcon()}
                    <h3 className="font-medium">
                      Generated{" "}
                      {prompt.type.charAt(0).toUpperCase() +
                        prompt.type.slice(1)}{" "}
                      Content
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopy}>
                      Copy
                    </Button>
                    <Button
                      size="sm"
                      className="bg-brand-purple hover:bg-brand-purple/90"
                    >
                      Publish Now
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 whitespace-pre-wrap font-mono text-sm">
                  {generatedContent}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent
          value="schedule"
          className="min-h-[300px] flex items-center justify-center"
        >
          <div className="text-center text-gray-500">
            <p className="mb-2">Scheduling feature coming soon</p>
            <p className="text-sm">
              Automatically schedule your AI-generated content across platforms
            </p>
          </div>
        </TabsContent>

        <TabsContent
          value="analytics"
          className="min-h-[300px] flex items-center justify-center"
        >
          <div className="text-center text-gray-500">
            <p className="mb-2">Content analytics coming soon</p>
            <p className="text-sm">
              Track performance of your AI-generated content
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentCreator;
