
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LaCosaNostraPage() {
  return (
    <div
      className="bg-cover bg-center text-white min-h-screen font-serif"
      style={{ backgroundImage: "url('/images/gta-mafia-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen">
        <header className="text-center py-10 bg-gradient-to-b from-black/90 to-gray-900/70">
          <img
            src="/images/lcn-logo.png"
            alt="La Cosa Nostra Logo"
            className="mx-auto w-32 h-auto mb-4"
          />
          <h1 className="text-5xl font-bold tracking-widest">La Cosa Nostra</h1>
          <p className="text-xl mt-4 italic">Die Familie erhebt sich</p>
        </header>
        ...
      </div>
    </div>
  );
}
