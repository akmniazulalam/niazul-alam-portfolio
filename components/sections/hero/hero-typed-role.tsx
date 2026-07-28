"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HERO_TYPED_ROLES } from "@/constants/hero";

export function HeroTypedRole() {
  const elRef = useRef<HTMLSpanElement>(null);
  const typedInstanceRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (!elRef.current) return;

    elRef.current.textContent = "";

    typedInstanceRef.current = new Typed(elRef.current, {
      strings: [...HERO_TYPED_ROLES],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
      showCursor: true,
    });

    return () => {
      typedInstanceRef.current?.destroy();
    };
  }, []);

  return (
    <h2 className="font-rajdhani text-3xl font-bold sm:text-3xl lg:text-5xl min-h-[2rem] sm:min-h-[2.25rem] lg:min-h-[2.5rem] flex items-center justify-center lg:justify-start">
      <span className="sr-only">A {HERO_TYPED_ROLES.join(", ")}</span>
      <span aria-hidden="true" className="inline-flex items-center min-w-[17ch] typed">
        <span className="text-text mr-2">A</span>
        <span ref={elRef} className="text-[#FF014F]">
          {HERO_TYPED_ROLES[0]}
        </span>
      </span>
    </h2>
  );
}
