"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, Menu, X, ArrowRight, PhoneCall, ChevronRight } from "lucide-react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onOpenModal?: () => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCtaClick = (e: React.MouseEvent) => {
    if (onOpenModal) {
      e.preventDefault();
      onOpenModal();
    }
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          {/* Logo */}
          <Link href="#" className={styles.brand} id="nav-brand">
            <div className={styles.brandLogo}>
              <Shield size={24} strokeWidth={2.5} />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>SECURE GUARD</span>
              <span className={styles.brandTagline}>Security Services</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className={styles.navLinks}>
            <li>
              <a href="#unnoticed-gaps" className={styles.navLink} id="nav-gaps">
                Unnoticed Gaps
              </a>
            </li>
            <li>
              <a href="#assessment-pillars" className={styles.navLink} id="nav-pillars">
                Assessment Pillars
              </a>
            </li>
            <li>
              <a href="#integrated-system" className={styles.navLink} id="nav-cohesion">
                Services Cohesion
              </a>
            </li>
            <li>
              <a href="#solutions" className={styles.navLink} id="nav-solutions">
                Deployments
              </a>
            </li>
            <li>
              <a href="#outcomes" className={styles.navLink} id="nav-gains">
                What You Gain
              </a>
            </li>
          </ul>

          {/* Nav CTAs */}
          <div className={styles.navCtas}>
            <div className={`${styles.phoneBadge} hidden lg:flex`}>
              <PhoneCall size={16} />
              <span>(800) 400-9000</span>
            </div>
            <button
              onClick={handleCtaClick}
              className={styles.ctaBtn}
              id="nav-cta-btn"
            >
              <span>Schedule Assessment</span>
              <ArrowRight size={16} />
            </button>
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}>
        <a
          href="#unnoticed-gaps"
          className={styles.mobileNavLink}
          onClick={() => setMobileOpen(false)}
        >
          <span>Unnoticed Security Gaps</span>
          <ChevronRight size={18} />
        </a>
        <a
          href="#assessment-pillars"
          className={styles.mobileNavLink}
          onClick={() => setMobileOpen(false)}
        >
          <span>Assessment Pillars</span>
          <ChevronRight size={18} />
        </a>
        <a
          href="#integrated-system"
          className={styles.mobileNavLink}
          onClick={() => setMobileOpen(false)}
        >
          <span>Services Integration</span>
          <ChevronRight size={18} />
        </a>
        <a
          href="#solutions"
          className={styles.mobileNavLink}
          onClick={() => setMobileOpen(false)}
        >
          <span>Deployment Strategies</span>
          <ChevronRight size={18} />
        </a>
        <a
          href="#outcomes"
          className={styles.mobileNavLink}
          onClick={() => setMobileOpen(false)}
        >
          <span>What You Gain</span>
          <ChevronRight size={18} />
        </a>

        <div className="mt-4 pt-4 border-t border-slate-700 flex flex-col gap-3">
          <div className={styles.phoneBadge}>
            <PhoneCall size={16} />
            <span>Call 24/7 Operations: (800) 400-9000</span>
          </div>
          <button
            onClick={(e) => {
              setMobileOpen(false);
              handleCtaClick(e);
            }}
            className={styles.ctaBtn}
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>Schedule Free Security Assessment</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
