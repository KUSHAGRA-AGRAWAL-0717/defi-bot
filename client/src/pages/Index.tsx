
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const features = [
    {
      title: "AI-Powered Content Creation",
      description: "Generate engaging Twitter threads, blog summaries, and captions using AI directly from Telegram.",
      icon: "✍️",
      path: "/content"
    },
    {
      title: "DeFi Market Analysis",
      description: "Get real-time price alerts, trend predictions, and AI-driven market insights for tokens, NFTs, and liquidity pools.",
      icon: "📊",
      path: "/content"
    },
    {
      title: "News Summarization",
      description: "AI summarizes crypto news, research papers, and DeFi updates into short, easy-to-digest messages.",
      icon: "📰",
      path: "/content"
    },
    {
      title: "Automated Content Posting",
      description: "Schedule and auto-post AI-generated content on Twitter, Telegram, and LinkedIn.",
      icon: "🔄",
      path: "/content"
    },
    {
      title: "Personalized Watchlists",
      description: "Create watchlists for DeFi tokens, and AI will notify you of important movements.",
      icon: "👁️",
      path: "/watchlist"
    },
    {
      title: "News",
      description: "Record your thoughts and convert them into well-structured tweets and posts.",
      icon: "🎤",
      path: "/news"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-teal/5 -z-10" />
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
                AI-Powered Content Creation for DeFi Enthusiasts
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Create engaging crypto content across platforms and stay updated with real-time DeFi insights, all powered by AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-brand-purple hover:bg-brand-purple/90 text-lg px-8 py-6">
                  <Link to="/dashboard">Get Started</Link>
                </Button>
                <Button variant="outline" className="text-lg px-8 py-6">
                  <Link to="/content">Try Content Creator</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-40 left-10 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -z-10 animate-pulse-soft" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl -z-10 animate-pulse-soft" />
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
                All-in-One Crypto Content Platform
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Streamline your DeFi content workflow and stay ahead of market trends with our AI-powered tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Link 
                to={feature.path}
                  key={index} 
                  className="crypto-card group hover:border-brand-purple/50 transition-all"
                >
                  <div className="mb-5 text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-purple transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* How it Works Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
                How CryptoScribe Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our AI platform simplifies crypto content creation and market monitoring in three easy steps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-xl font-bold mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold">Connect Your Accounts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Link your social media accounts and specify your DeFi interests and content preferences.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-xl font-bold mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold">Create & Customize</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use AI to generate content or get real-time market insights tailored to your specific needs.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-xl font-bold mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold">Publish & Monitor</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Schedule posts across platforms and receive AI-powered alerts about your watched assets.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-brand-purple/5 dark:bg-brand-dark/50 relative overflow-hidden">
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 gradient-text">
                Ready to Transform Your DeFi Content Strategy?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Join thousands of creators and investors who are already using CryptoScribe to stay ahead in the DeFi space.
              </p>
              <Link to="/dashboard">
                <Button className="bg-brand-purple hover:bg-brand-purple/90 text-lg px-8 py-6 group">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl -z-0 animate-pulse-soft" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl -z-0 animate-pulse-soft" />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
