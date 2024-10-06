// Polaroid.tsx
import React, { forwardRef } from "react";
import Image from "next/image";

interface PolaroidProps {
  imageUrl: string;
  title: string;
}

const Polaroid = forwardRef<HTMLDivElement, PolaroidProps>(function Polaroid(
  { imageUrl, title },
  ref
) {
  return (
    <div ref={ref} className="polaroidContainer bg-white p-3 shadow-md rounded-lg">
      <Image
        src={imageUrl}
        alt={title}
        width={130} 
        height={130} 
        className="object-cover h-[130px] mb-2"
      />
    </div>
  );
});

export default Polaroid;
