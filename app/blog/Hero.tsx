import Image from "next/image";
import React from "react";

export default function Hero({ title }: { title: string }) {

  return (
    <div className="relative w-full pt-44 pb-32 px-10 flex items-center justify-center mb-20 bg-[var(--primary)]">
      <div className="absolute top-0 bottom-0 w-full h-full opacity-50 bg-[radial-gradient(var(--background)_0%,_transparent_50%)]" > </div>
      <div className="flex flex-col items-center gap-10 text-center z-10 max-w-[75%]">
        <h2 className=" text-5xl sm:text-7xl text-[var(--foreground)] font-medium font-outline-white drop-shadow-[0_0_5px_var(--foreground)] black-ops">
          {title}
        </h2>
      </div>
    </div>
  );
}
