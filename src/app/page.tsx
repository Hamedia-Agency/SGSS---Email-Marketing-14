"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { AssessmentModal } from "@/components/AssessmentModal";
import { InteractiveGapSimulator } from "@/components/InteractiveGapSimulator";
import { InteractiveHybridBuilder } from "@/components/InteractiveHybridBuilder";

import {
  Shield,
  ShieldAlert,
  Search,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Lock,
  Eye,
  FileCheck,
  Zap,
  ChevronRight,
  XCircle,
  AlertCircle,
  TrendingUp,
  FileSpreadsheet,
} from "lucide-react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <main className={styles.main}>
      {/* NAVBAR */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop"
            alt="Secure Guard Property Assessment"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              <span>The Security Gap Risk Assessment</span>
            </div>

            <h1 className={styles.heroTitle} id="hero-title">
              The Security Gaps Are Not Always{" "}
              <span className={styles.heroTitleAccent}>
                Where You Expect
              </span>
            </h1>

            <p className={styles.heroSubtitle}>
              A professional security walkthrough can reveal vulnerabilities that are easy to miss during everyday operations. Most properties do not appear unprotected. There may already be cameras near the entrances, a security officer in the lobby, controlled gates, alarms, or patrols scheduled throughout the night. Yet incidents can still occur because the individual parts of the security program are not covering the right areas—or are not working together.
            </p>

            <div className={styles.heroCtas}>
              <button
                onClick={handleOpenModal}
                className={styles.btnPrimary}
                id="hero-cta-primary"
              >
                <span>Schedule Your Free Security Assessment</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="#unnoticed-gaps"
                className={styles.btnSecondary}
                id="hero-cta-secondary"
              >
                <span>Identify My Security Gaps</span>
              </a>
            </div>

            {/* Stat Banner */}
            <div className={styles.heroStatBanner}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <Search size={24} />
                </div>
                <div>
                  <div className={styles.statNumber}>94%</div>
                  <div className={styles.statLabel}>Hidden Gaps Found</div>
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <Clock size={24} />
                </div>
                <div>
                  <div className={styles.statNumber}>48 Hours</div>
                  <div className={styles.statLabel}>Assessment Turnaround</div>
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div className={styles.statNumber}>SoCal Wide</div>
                  <div className={styles.statLabel}>6 County Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: WHY SECURITY GAPS GO UNNOTICED ===== */}
      <section className={styles.section} id="unnoticed-gaps">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>
              <Eye size={14} /> Outside Perspective
            </span>
            <h2 className={styles.sectionTitle}>
              Why Security Gaps Often{" "}
              <span className={styles.titleAccent}>Go Unnoticed</span>
            </h2>
            <p className={styles.sectionSubtext}>
              When you work at the same property every day, it is easy to become familiar with how things normally operate. Employees know which entrance to use. Vendors follow established delivery routines. Cameras have remained in the same positions for years. Patrol routes may continue unchanged because they have always been done that way.
            </p>
          </div>

          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.cardIconCircle}>
                <span>🔄</span>
              </div>
              <h3 className={styles.cardTitle}>Habitual Routine Familiarity</h3>
              <p className={styles.cardText}>
                The problem is that security risks change. A new tenant may increase visitor traffic. Construction may create an additional access point. Equipment may be moved to a less visible part of the property. A broken light or damaged gate may make an area more attractive to trespassers.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIconCircle}>
                <span>⚡</span>
              </div>
              <h3 className={styles.cardTitle}>Compounding Minor Concerns</h3>
              <p className={styles.cardText}>
                These concerns may appear minor individually, but together they can create an opportunity for an incident. Unconnected guard notes, unmonitored rear gates, and outdated post orders accumulate into unmanaged liability over time.
              </p>
            </div>
          </div>

          {/* Interactive Property Perspective Gap Simulator Widget */}
          <InteractiveGapSimulator />
        </div>
      </section>

      {/* ===== SECTION 2: WHAT WE LOOK FOR DURING AN ASSESSMENT ===== */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="assessment-pillars">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>
              <ShieldAlert size={14} /> Comprehensive Audit
            </span>
            <h2 className={styles.sectionTitle}>
              What We Look for During a{" "}
              <span className={styles.titleAccent}>Security Assessment</span>
            </h2>
            <p className={styles.sectionSubtext}>
              A meaningful assessment involves more than walking around the property and recommending another guard. Secure Guard reviews how the site operates, how people and vehicles move through it, and where the current security program may be losing visibility.
            </p>
          </div>

          <div className={styles.cardGrid4}>
            {/* Pillar 1 */}
            <div className={styles.card}>
              <div className={styles.cardIconCircle}>
                <span>🚗</span>
              </div>
              <h3 className={styles.cardTitle}>1. Access and Movement</h3>
              <p className={styles.cardText}>
                We examine entrances, exits, gates, loading areas, service doors, parking facilities, and other points where people or vehicles enter the property. The goal is to determine whether access procedures are clear, whether unauthorized entry could occur unnoticed, and whether officers have the information needed to verify visitors, vendors, deliveries, and contractors.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className={styles.card}>
              <div className={styles.cardIconCircle}>
                <span>👁️</span>
              </div>
              <h3 className={styles.cardTitle}>2. Blind Spots & Vulnerable Areas</h3>
              <p className={styles.cardText}>
                Some areas may receive very little attention during normal operations. Rear entrances, stairwells, dark parking sections, equipment-storage areas, perimeter fencing, vacant spaces, and locations outside the normal patrol route can all become vulnerabilities. We look at whether those areas are visible to officers, covered by cameras, included in patrols, or left without meaningful oversight.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className={styles.card}>
              <div className={styles.cardIconCircle}>
                <span>🌙</span>
              </div>
              <h3 className={styles.cardTitle}>3. High-Risk Hours</h3>
              <p className={styles.cardText}>
                A property’s greatest risk is not always during the busiest part of the day. Warehouses may become vulnerable between shifts. Commercial buildings may have little activity overnight. Construction sites can become exposed after crews leave, while residential communities may experience more concerns during evenings and weekends. Understanding when the property is most vulnerable helps determine where full-time coverage is needed.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className={styles.card}>
              <div className={styles.cardIconCircle}>
                <span>🚨</span>
              </div>
              <h3 className={styles.cardTitle}>4. Current Procedures & Response</h3>
              <p className={styles.cardText}>
                Security equipment is only effective when there is a clear response behind it. We review whether officers have site-specific Post Orders, whether patrol activity can be verified, how incidents are reported, who receives notifications, and what happens when suspicious activity is detected. This helps reveal whether your security program is truly prepared to respond—or mainly documenting what happened afterward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: ARE YOUR SERVICES WORKING TOGETHER? ===== */}
      <section className={styles.section} id="integrated-system">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>
              <Zap size={14} /> Systems Cohesion
            </span>
            <h2 className={styles.sectionTitle}>
              Are Your Current Security Services{" "}
              <span className={styles.titleAccent}>Working Together?</span>
            </h2>
            <p className={styles.sectionSubtext}>
              Many properties already have several security measures in place, but each one may operate separately. Secure Guard looks at the entire security structure rather than evaluating each service in isolation.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            {/* Isolated Box */}
            <div className={`${styles.compBox} ${styles.compBoxProblem}`}>
              <h3 className={`${styles.compBoxTitle} text-red-600`}>
                <XCircle size={24} />
                <span>Isolated Security Measures</span>
              </h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span>The guard does not have access to camera information.</span>
                </li>
                <li className={styles.featureItem}>
                  <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span>Cameras record activity without anyone actively reviewing it.</span>
                </li>
                <li className={styles.featureItem}>
                  <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span>Patrol officers check the property without knowing a suspicious vehicle was seen earlier.</span>
                </li>
                <li className={styles.featureItem}>
                  <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span>Incident reports are submitted without triggering any change to the security plan.</span>
                </li>
              </ul>
            </div>

            {/* Integrated Box */}
            <div className={`${styles.compBox} ${styles.compBoxSolution}`}>
              <h3 className={`${styles.compBoxTitle} text-amber-400`}>
                <CheckCircle2 size={24} />
                <span>SGSS Integrated Defense System</span>
              </h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>Improving existing procedures instead of adding unnecessary personnel costs.</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>Connecting on-site officers directly with 24/7 dispatch and active remote monitoring.</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>Adjusting patrol routes dynamically based on real-time site incident trends.</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>Tailored risk assessments, site-specific Post Orders, flexible staffing & digital reporting.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: HOW SECURE GUARD HELPS & HYBRID BUILDER ===== */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="solutions">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>
              <Lock size={14} /> Deployment Strategies
            </span>
            <h2 className={styles.sectionTitle}>
              How Secure Guard <span className={styles.titleAccent}>Helps</span>
            </h2>
            <p className={styles.sectionSubtext}>
              After understanding your property, our team helps determine which risks require immediate attention and which improvements can be introduced over time.
            </p>
          </div>

          {/* Interactive Hybrid Builder Widget */}
          <InteractiveHybridBuilder onOpenModal={handleOpenModal} />
        </div>
      </section>

      {/* ===== SECTION 5: WHAT YOU GAIN FROM THE ASSESSMENT ===== */}
      <section className={styles.section} id="outcomes">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>
              <FileCheck size={14} /> Actionable Clarity
            </span>
            <h2 className={styles.sectionTitle}>
              What You Gain From{" "}
              <span className={styles.titleAccent}>The Assessment</span>
            </h2>
            <p className={styles.sectionSubtext}>
              A security assessment should leave you with greater clarity—not simply another sales proposal. Our team helps you understand where your current coverage is working, where potential gaps may exist, and which improvements deserve priority.
            </p>
          </div>

          <div className={styles.gainGrid}>
            {/* Gain 1 */}
            <div className={styles.gainCard}>
              <div className={styles.gainNumber}>01</div>
              <h3 className={styles.gainTitle}>Vulnerable Entrances & Perimeter</h3>
              <p className={styles.gainDesc}>
                Clear identification of uninspected service doors, blind spots, dark parking zones, and fence weaknesses.
              </p>
            </div>

            {/* Gain 2 */}
            <div className={styles.gainCard}>
              <div className={styles.gainNumber}>02</div>
              <h3 className={styles.gainTitle}>High-Risk Operating Hours</h3>
              <p className={styles.gainDesc}>
                Precise timeline mapping of off-peak hours and shift changes when your property requires stronger coverage.
              </p>
            </div>

            {/* Gain 3 */}
            <div className={styles.gainCard}>
              <div className={styles.gainNumber}>03</div>
              <h3 className={styles.gainTitle}>Patrol & Access Weaknesses</h3>
              <p className={styles.gainDesc}>
                In-depth review of existing guard Post Orders, visitor access logs, and incident escalation protocols.
              </p>
            </div>

            {/* Gain 4 */}
            <div className={styles.gainCard}>
              <div className={styles.gainNumber}>04</div>
              <h3 className={styles.gainTitle}>Guard & Camera Optimization</h3>
              <p className={styles.gainDesc}>
                Direct opportunities to optimize existing security personnel and camera feeds without adding redundant hardware.
              </p>
            </div>

            {/* Gain 5 */}
            <div className={styles.gainCard}>
              <div className={styles.gainNumber}>05</div>
              <h3 className={styles.gainTitle}>Tailored Solution Roadmap</h3>
              <p className={styles.gainDesc}>
                Whether patrol, monitoring, technology, or a hybrid solution is appropriate—giving you a practical starting point.
              </p>
            </div>

            {/* Gain 6 Highlight */}
            <div
              className={styles.gainCard}
              style={{
                backgroundColor: "#1d2c48",
                color: "#ffffff",
                borderColor: "#fecf31",
              }}
            >
              <div className={styles.gainNumber} style={{ color: "#fecf31", opacity: 0.3 }}>
                06
              </div>
              <h3 className={styles.gainTitle} style={{ color: "#fecf31" }}>
                Cost Control & Protection
              </h3>
              <p className={styles.gainDesc} style={{ color: "#c4c4c4" }}>
                Make informed security decisions that maximize protection and accountability without automatically increasing monthly costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA onOpenModal={handleOpenModal} />

      {/* ===== FOOTER ===== */}
      <Footer />

      {/* ===== BACK TO TOP ===== */}
      <BackToTop />

      {/* ===== ASSESSMENT MODAL DIALOG ===== */}
      <AssessmentModal isOpen={modalOpen} onClose={handleCloseModal} />
    </main>
  );
}
