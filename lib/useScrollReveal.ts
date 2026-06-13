"use client";

import { useEffect, useRef, useState } from "react";

let _popped = false;
let _resetTimer: ReturnType<typeof setTimeout> | null = null;

if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    _popped = true;
    if (_resetTimer) clearTimeout(_resetTimer);
    _resetTimer = setTimeout(() => {
      _popped = false;
      _resetTimer = null;
    }, 600);
  });
}

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (_popped) {
      setVisible(true);
      return;
    }

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) setVisible(true);
    };
    window.addEventListener("pageshow", onPageShow);

    const rect = el.getBoundingClientRect();
    const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isAlreadyVisible) {
      setVisible(true);
      window.removeEventListener("pageshow", onPageShow);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    const onPageShowCleanup = onPageShow;
    return () => {
      window.removeEventListener("pageshow", onPageShowCleanup);
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, visible };
}
