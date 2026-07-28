import React from "react";
import HeroBanner from "@/components/home/HeroBanner";
import FeatureCards from "@/components/home/FeatureCards";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner Bagian Atas */}
      <HeroBanner />
      
      {/* Daftar Fitur dan Akses Menu Utama Kelurahan */}
      <FeatureCards />
    </div>
  );
}
