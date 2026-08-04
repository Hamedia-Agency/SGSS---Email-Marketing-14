"use client";

import React from "react";
import { ShieldCheck, ArrowRight, Phone } from "lucide-react";
import styles from "./PreFooterCTA.module.css";

interface PreFooterCTAProps {
  onOpenModal?: () => void;
}

export function PreFooterCTA({ onOpenModal }: PreFooterCTAProps) {
  return (
    <section className={styles.preFooter}>
      <div className={styles.preFooterBg} />
      <div className={`container ${styles.preFooterWrapper}`}>
        <div className={styles.badge}>
          <ShieldCheck size={18} />
          <span>Proactive Security Assessment</span>
        </div>
        <h2 className={styles.title}>
          Find the Gaps Before an <br />
          <span className={styles.titleAccent}>Incident Finds Them</span>
        </h2>
        <p className={styles.subtitle}>
          The more important question is whether there are vulnerabilities you have not noticed yet. Tell us about your property, current security coverage, and the problems you are trying to prevent. Secure Guard will review your situation and help you identify the right next step.
        </p>
        <div className={styles.btnGroup}>
          <button
            onClick={onOpenModal}
            className={styles.btnPrimary}
            id="prefooter-btn-primary"
          >
            <span>Identify My Security Gaps</span>
            <ArrowRight size={18} />
          </button>
          <a
            href="tel:8004009000"
            className={styles.btnSecondary}
            id="prefooter-btn-phone"
          >
            <Phone size={18} />
            <span>Speak with a Security Advisor</span>
          </a>
        </div>
      </div>
    </section>
  );
}
