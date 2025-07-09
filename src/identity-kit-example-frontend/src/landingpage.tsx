import React from 'react';

interface LandingPageProps {
  onLaunch: () => void;
}

const AnimatedBackground: React.FC = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute w-[200%] h-[200%] bg-gradient-to-tr from-slate-900 via-indigo-900 to-slate-900 animate-gradient-xy"></div>
      <style>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
        }
      `}</style>
    </div>
);


const LandingPage: React.FC<LandingPageProps> = ({ onLaunch }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-8 text-white text-center overflow-hidden">
      <AnimatedBackground />
      <div className="z-10 flex flex-col items-center">
        <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                S
            </div>
            <h1 className="text-6xl font-extrabold tracking-tight text-white">
                SocialDApp
            </h1>
        </div>
        <p className="mt-4 max-w-2xl text-xl text-gray-300">
            The decentralized social hub. Connect your wallet, share your world, and own your identity.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold text-purple-400">Create & Share</h3>
                <p className="mt-2 text-gray-400">Post your thoughts, photos, and videos. Engage with a vibrant community in a censorship-resistant environment.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold text-blue-400">True Ownership</h3>
                <p className="mt-2 text-gray-400">With ICP wallet integration, you are in full control of your digital identity and content. No central authority.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold text-green-400">AI-Powered Chat</h3>
                <p className="mt-2 text-gray-400">Experience the future of conversation with our integrated AI chat, ready to assist and entertain.</p>
            </div>
        </div>

        <button 
            onClick={onLaunch}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        >
            Launch App & Connect
        </button>
      </div>
    </div>
  );
};

export default LandingPage;