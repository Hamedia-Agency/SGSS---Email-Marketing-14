"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (currentScroll > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      if (totalHeight > 0) {
        setScrollPercent((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.backToTop} ${visible ? styles.backToTopVisible : ""}`}
      aria-label="Back to top"
      id="btn-back-to-top"
    >
      <svg className={styles.progressRing}>
        <circle
          className={styles.progressRingCircle}
          r={radius}
          cx="24"
          cy="24"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
