import React from "react";
import { Shield } from "lucide-react";
import styles from "./Footer.module.css";

const soCalCounties = [
  "Los Angeles County",
  "Orange County",
  "Riverside County",
  "San Bernardino County",
  "San Diego County",
  "Ventura County",
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Col */}
        <div className={styles.brandCol}>
          <div className={styles.footerLogo}>
            <Shield size={24} className="text-amber-400" />
            <span>SECURE GUARD</span>
          </div>
          <p className={styles.brandDesc}>
            Secure Guard Security Services provides customized security risk assessments, site-specific procedures, mobile patrols, active monitoring, and transparent 24/7 reporting.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className={styles.footerHeading}>Navigation</h4>
          <ul className={styles.footerNav}>
            <li><a href="#unnoticed-gaps">Unnoticed Security Gaps</a></li>
            <li><a href="#assessment-pillars">Assessment Pillars</a></li>
            <li><a href="#integrated-system">Services Integration</a></li>
            <li><a href="#solutions">Deployment Strategies</a></li>
            <li><a href="#outcomes">What You Gain</a></li>
          </ul>
        </div>

        {/* Security Solutions */}
        <div>
          <h4 className={styles.footerHeading}>Services</h4>
          <ul className={styles.footerNav}>
            <li><a href="#solutions">Dedicated On-Site Guards</a></li>
            <li><a href="#solutions">Mobile Vehicle Patrol</a></li>
            <li><a href="#solutions">Active Remote Monitoring</a></li>
            <li><a href="#solutions">Surveillance Towers</a></li>
            <li><a href="#solutions">Access Control & Gate Audit</a></li>
          </ul>
        </div>

        {/* Service Region */}
        <div>
          <h4 className={styles.footerHeading}>Southern California</h4>
          <p className="text-xs text-gray-400 mb-3">
            Providing site assessments & security coverage across:
          </p>
          <div className={styles.countyPillList}>
            {soCalCounties.map((county) => (
              <span key={county} className={styles.countyPill}>
                {county}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>© {new Date().getFullYear()} Secure Guard Security Services. All Rights Reserved.</p>
        <p className="text-xs text-gray-400">
          Professional Security Risk Assessments • License PPO #12048
        </p>
      </div>
    </footer>
  );
}
