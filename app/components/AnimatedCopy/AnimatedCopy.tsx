"use client";

import "./AnimatedCopy.css";
import React, { useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const BLUR_START = "blur(0.35em)";
const BLUR_END = "blur(0em)";

function wrapLineForBlur(line: Element): HTMLSpanElement {
  const inner = document.createElement("span");
  inner.className = "line-inner";

  while (line.firstChild) {
    inner.appendChild(line.firstChild);
  }

  line.appendChild(inner);
  return inner;
}

interface AnimatedCopyProps {
  children: React.ReactNode;
  mode?: "default" | "scroll" | "scrub";
  delay?: number;
}

export default function AnimatedCopy({
  children,
  mode = "default",
  delay = 0,
}: AnimatedCopyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const media = gsap.matchMedia();

      media.add("(min-width: 768px)", () => {
        const targets = containerRef.current!.hasAttribute("data-copy-wrapper")
          ? Array.from(containerRef.current!.children)
          : [containerRef.current!];
        const splits: SplitText[] = [];
        const blurLayers: HTMLSpanElement[] = [];

        targets.forEach((target) => {
          const split = new SplitText(target, {
            type: "lines",
            linesClass: "line",
          });
          split.lines.forEach((line) => blurLayers.push(wrapLineForBlur(line)));
          splits.push(split);
        });

        gsap.set(blurLayers, { filter: BLUR_START });

        if (mode === "scrub") {
          gsap.to(blurLayers, {
            filter: BLUR_END,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 75%",
              scrub: true,
            },
          });
        } else if (mode === "scroll") {
          gsap.to(blurLayers, {
            filter: BLUR_END,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.1,
            delay,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              once: true,
            },
          });
        } else {
          gsap.to(blurLayers, {
            filter: BLUR_END,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.1,
            delay,
          });
        }

        return () => splits.forEach((split) => split.revert());
      });

      return () => media.revert();
    },
    { scope: containerRef },
  );

  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...({ ref: containerRef } as React.Attributes),
    });
  }
  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
