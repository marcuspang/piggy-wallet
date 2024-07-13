"use client";

import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <Image src="/parent-background.png" alt="Parent Background" layout="fill" objectFit="contain" className="relative -top-12" />
      <h1 className="text-3xl font-bold font-heading">Welcome to Piggy Wallet</h1>
    </div>
  );
};

export default HomePage;
