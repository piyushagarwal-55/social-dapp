
import React, { useEffect, useState } from "react";
import { ConnectWallet } from "@nfid/identitykit/react";
import { useAuth } from "./StateManagement/useContext/useClient";
import "./styles/index.css";

const ConnectBtn = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-[#1d9bf0] text-white rounded-full px-6 py-2 font-semibold hover:bg-[#1a8cd8] transition"
  >
    Connect Wallet
  </button>
);

const App = () => {
  const { isAuthenticated, principal } = useAuth();
  const [postText, setPostText] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      try {
        userCheck?.();
        userDatacheck?.();
      } catch (err) {
        console.error("Error in auth checks:", err);
      }
    }
  }, [isAuthenticated]);

  return (
    <div className="flex min-h-screen text-white bg-black font-sans">
      <aside className="w-[260px] fixed h-full border-r border-[#333] p-5 flex flex-col gap-6">
        <div className="text-[#1d9bf0] text-2xl font-bold">ICP Social</div>
        <div className="space-y-2">
          <div className="nav-item active">🏠 Home</div>
          <div className="nav-item">🔍 Explore</div>
          <div className="nav-item">👤 Profile</div>
          <div className="nav-item">{!isAuthenticated && <ConnectWallet connectButtonComponent={ConnectBtn} />}</div>
        </div>
      </aside>
      <main className="ml-[260px] flex-1 border-r border-[#333]">
        <header className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-[#333] p-5 z-10">
          <h1 className="text-2xl font-bold">Home</h1>
          <div
            className={`mt-4 p-3 rounded-md text-center font-semibold ${
              isAuthenticated ? "bg-green-600 text-black" : "bg-pink-600 text-white"
            }`}
          >
            {isAuthenticated ? "Connected to ICP" : "Not connected to ICP"}
          </div>
        </header>
        <section className="p-5 border-b border-[#333]">
          <textarea
            placeholder="What's happening?"
            className="w-full bg-transparent border-none text-white text-lg resize-none outline-none min-h-[120px]"
            maxLength={280}
            value={postText}
            onChange={(e) => {
              setPostText(e.target.value);
              setCharCount(e.target.value.length);
            }}
          />
          <div className="flex justify-between mt-3 items-center">
            <span
              className={`text-sm ${
                charCount > 260 ? (charCount > 280 ? "text-[#f91880]" : "text-[#ffad1f]") : "text-[#71767b]"
              }`}
            >
              {charCount}/280
            </span>
            <button
              className="bg-[#1d9bf0] px-5 py-2 text-white rounded-full font-semibold disabled:opacity-50"
              disabled={!isAuthenticated || postText.length === 0 || postText.length > 280}
            >
              Post
            </button>
          </div>
        </section>
        <section className="p-5">
          <div className="text-[#71767b] text-center">Loading posts...</div>
        </section>
      </main>
    </div>
  );
};

export default App;
