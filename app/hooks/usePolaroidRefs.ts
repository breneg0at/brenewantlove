"use client";
import { useEffect, useRef } from "react";

const usePolaroidRefs = (length: number) => {
  const divRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const tmp: Record<string, HTMLDivElement | null> = {};
    for (let i = 0; i < length; i++) {
      tmp[`polaroid-${i}`] = null; // Cria refs para cada polaroid
    }
    divRefs.current = tmp;
  }, [length]);

  return divRefs;
};

export default usePolaroidRefs;
