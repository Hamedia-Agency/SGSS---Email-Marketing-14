"use client";

import { useState } from "react";
import { 
  Map, 
  Search, 
  ClipboardCheck, 
  Target, 
  Settings,
  Shield,
  Eye,
  FileSearch,
  Crosshair,
  Wrench
} from "lucide-react";
import styles from "./ProcessExplorer.module.css";

const steps = [
  {
    id: "step-1",
    tabTitle: "Map Operations",
    badge: "Operational Baseline",
    title: "Map Property Operations",
    desc: "Reviewing your site type, operating schedules, traffic flows, occupancy levels, and historical security incidents to establish a complete operational baseline before evaluating specific risks.",
    tabIcon: Map,
    panelIcon: Shield,
    panelText: "BASELINE"
  },
  {
    id: "step-2",
    tabTitle: "Inspect Environment",
    badge: "Physical Assessment",
    title: "Inspect the Physical Environment",
    desc: "Evaluates your physical boundaries, entrances, perimeters, parking zones, loading bays, and storage areas to pinpoint physical blind spots, lighting gaps, and access vulnerabilities across the property.",
    tabIcon: Search,
    panelIcon: Eye,
    panelText: "INSPECT"
  },
  {
    id: "step-3",
    tabTitle: "Audit Resources",
    badge: "Current Setup",
    title: "Audit Existing Security Resources",
    desc: "Analyze how your current setup, including on-site guards, patrol schedules, camera coverage, access protocols, and reporting workflows, is actively performing relative to your actual daily risks.",
    tabIcon: ClipboardCheck,
    panelIcon: FileSearch,
    panelText: "AUDIT"
  },
  {
    id: "step-4",
    tabTitle: "Pinpoint Vulnerabilities",
    badge: "Risk Analysis",
    title: "Pinpoint & Prioritize Vulnerabilities",
    desc: "Categorize and rank identified security gaps based on location, likelihood, and operational impact, allowing you to address critical threats first rather than treating every observation as equally urgent.",
    tabIcon: Target,
    panelIcon: Crosshair,
    panelText: "PRIORITIZE"
  },
  {
    id: "step-5",
    tabTitle: "Deliver Improvements",
    badge: "Strategy",
    title: "Deliver Actionable Improvements",
    desc: "Provide practical, targeted recommendations, ranging from minor patrol route tweaks and procedural updates to camera repositioning or hybrid technology integration, designed to strengthen your security program.",
    tabIcon: Settings,
    panelIcon: Wrench,
    panelText: "ACTION"
  }
];

export default function ProcessExplorer() {
  const [activeStepId, setActiveStepId] = useState(steps[0].id);

  const activeStep = steps.find((s) => s.id === activeStepId) || steps[0];
  const PanelIcon = activeStep.panelIcon;

  return (
    <div className={styles.explorerContainer}>
      {/* Left Tabs */}
      <div className={styles.tabsList}>
        {steps.map((step) => {
          const isActive = step.id === activeStepId;
          const TabIcon = step.tabIcon;
          
          return (
            <button
              key={step.id}
              className={`${styles.tabButton} ${isActive ? styles.activeTab : ""}`}
              onClick={() => setActiveStepId(step.id)}
            >
              <div className={styles.tabIconWrapper}>
                <TabIcon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={styles.tabTitle}>{step.tabTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Right Content */}
      <div className={styles.contentPanel}>
        <div className={styles.textContent}>
          <div className={styles.badge}>{activeStep.badge}</div>
          <h3 className={styles.contentTitle}>{activeStep.title}</h3>
          <p className={styles.contentDesc}>{activeStep.desc}</p>
        </div>
        
        <div className={styles.iconPanel}>
          <PanelIcon size={64} strokeWidth={1.5} className={styles.iconPanelIcon} />
          <span className={styles.iconPanelText}>{activeStep.panelText}</span>
        </div>
      </div>
    </div>
  );
}