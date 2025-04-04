
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="font-display text-2xl font-bold gradient-text">CryptoScribe</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              AI-powered content creation and DeFi market insights platform, simplifying crypto content management across multiple platforms.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-purple dark:hover:text-brand-teal">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple dark:hover:text-brand-teal">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple dark:hover:text-brand-teal">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/content" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-teal">
                  AI Content Creation
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-teal">
                  DeFi Analytics
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-teal">
                  News Summarization
                </Link>
              </li>
              <li>
                <Link to="/watchlist" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-teal">
                  Personalized Watchlists
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-teal">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-teal">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-teal">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-teal">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} CryptoScribe AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
