"use client";

import React, { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

type FocusCardWrapperProps = {
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  children: ReactNode;
};

const FocusCardWrapper = React.memo(
  ({ index, hovered, setHovered, children }: FocusCardWrapperProps) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-[1px] scale-[0.98]"
      )}
    >
      {children}
    </div>
  )
);

FocusCardWrapper.displayName = "FocusCardWrapper";

type FocusCardsProps = {
  children: ReactNode[];
};

export function FocusCards({ children }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {React.Children.map(children, (child, index) => (
        <FocusCardWrapper
          key={index}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        >
          {child}
        </FocusCardWrapper>
      ))}
    </>
  );
}
