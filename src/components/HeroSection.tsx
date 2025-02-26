import React from "react";

const HeroSection: React.FC = () => {
  const backgroundImageUrl = "/mother.jpg"; 

  return (
    <div className="relative w-full h-90 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImageUrl})`, 
          filter: "blur(4px) brightness(90%)", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <h1 className="relative text-white text-4xl md:text-6xl font-bold text-center z-10">
        Healthy Mothers, Thriving Children, Stronger Futures
      </h1>
    </div>
  );
};

export default HeroSection;
