"use client";

import React, { useState } from "react";
import { ShieldCheck, Check, Layers, ArrowRight, Zap } from "lucide-react";
import styles from "./InteractiveHybridBuilder.module.css";

interface HybridComponent {
  id: string;
  name: string;
  emoji: string;
  shortDesc: string;
  role: string;
  coveragePoints: number;
  efficiencyRating: string;
}

const componentsData: HybridComponent[] = [
  {
    id: "guard",
    name: "Dedicated On-Site Security Officer",
    emoji: "👮",
    shortDesc: "Manages primary entrances, verifies visitors, controls vendor access, and provides immediate emergency response.",
    role: "Access Control & Lobby Presence",
    coveragePoints: 35,
    efficiencyRating: "High Incident Deterrence",
  },
  {
    id: "patrol",
    name: "Mobile Vehicle Patrol",
    emoji: "🚘",
    shortDesc: "Randomized high-visibility vehicle sweeps for perimeter checks, gates, dark parking lots, and multi-building yards.",
    role: "Exterior & Night Lockdowns",
    coveragePoints: 25,
    efficiencyRating: "Cost-Effective Broad Reach",
  },
  {
    id: "monitoring",
    name: "Active Remote Video Surveillance",
    emoji: "📹",
    shortDesc: "Real-time camera monitoring during unstaffed hours with instant dispatch and speaker warning capabilities.",
    role: "24/7 Virtual Oversight",
    coveragePoints: 25,
    efficiencyRating: "Continuous Blind Spot Coverage",
  },
  {
    id: "tower",
    name: "Rapid Surveillance Towers",
    emoji: "🗼",
    shortDesc: "Autonomous solar towers for open construction zones, high-risk perimeters, and equipment storage locations.",
    role: "Perimeter Perimeter Defense",
    coveragePoints: 15,
    efficiencyRating: "Immediate Deployment Ready",
  },
];

interface InteractiveHybridBuilderProps {
  onOpenModal?: () => void;
}

export function InteractiveHybridBuilder({ onOpenModal }: InteractiveHybridBuilderProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>(["guard", "monitoring"]);

  const toggleComponent = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const totalCoverage = selectedIds.reduce((acc, id) => {
    const found = componentsData.find((c) => c.id === id);
    return acc + (found ? found.coveragePoints : 0);
  }, 0);

  const getScenarioDescription = () => {
    if (selectedIds.includes("guard") && selectedIds.includes("monitoring") && selectedIds.includes("patrol")) {
      return "Optimal Triple-Shield Integration: On-site officer handles primary entrance & access control while remote monitoring covers blind spots and vehicle patrol verifies perimeter lockdown.";
    }
    if (selectedIds.includes("guard") && selectedIds.includes("monitoring")) {
      return "Hybrid Core Strategy: An officer manages visitors and high-traffic hours, while remote monitoring maintains total visibility during off-peak and overnight hours.";
    }
    if (selectedIds.includes("patrol") && selectedIds.includes("monitoring")) {
      return "Automated Patrol & Surveillance: Remote video analytics detect suspicious movement, immediately dispatching mobile patrol officers for on-site verification.";
    }
    return "Custom Hybrid Configuration: Combining targeted security measures tailored to your property's schedule and budget.";
  };

  return (
    <div className={styles.builderContainer} id="hybrid-builder">
      <div className={styles.builderHeader}>
        <div className={styles.builderBadge}>
          <Layers size={16} />
          <span>Interactive Hybrid Solution Architect</span>
        </div>
        <h3 className={styles.builderTitle}>
          Build Your Coordinated Security Plan
        </h3>
        <p className={styles.builderSubtitle}>
          The objective is not to add every service available. It is to identify the right combination for your property, your operating schedule, and your budget.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Component Selector */}
        <div className={styles.componentList}>
          {componentsData.map((comp) => {
            const isSelected = selectedIds.includes(comp.id);
            return (
              <div
                key={comp.id}
                className={`${styles.componentCard} ${isSelected ? styles.componentCardActive : ""}`}
                onClick={() => toggleComponent(comp.id)}
                id={`builder-card-${comp.id}`}
              >
                <div
                  className={`${styles.checkboxIcon} ${
                    isSelected ? styles.checkboxIconActive : ""
                  }`}
                >
                  {isSelected && <Check size={16} strokeWidth={3} />}
                </div>
                <div>
                  <div className={styles.compTitle}>
                    <span>{comp.emoji}</span>
                    <span>{comp.name}</span>
                  </div>
                  <p className={styles.compDesc}>{comp.shortDesc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary & Live Impact */}
        <div className={styles.summaryPanel}>
          <div className="border-b border-slate-700 pb-4">
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Integrated Protection Coverage</span>
              <span className={styles.statVal}>{totalCoverage}%</span>
            </div>
            <div className={styles.coverageBarTrack}>
              <div
                className={styles.coverageBarFill}
                style={{ width: `${totalCoverage}%` }}
              />
            </div>
          </div>

          <div>
            <span className={styles.statLabel}>Active Defense Tiers ({selectedIds.length})</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedIds.map((id) => {
                const comp = componentsData.find((c) => c.id === id);
                return (
                  <span
                    key={id}
                    className="inline-flex items-center gap-1 text-xs bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2.5 py-1 rounded-full font-semibold"
                  >
                    <span>{comp?.emoji}</span>
                    <span>{comp?.role}</span>
                  </span>
                );
              })}
            </div>
          </div>

          <div className={styles.scenarioBox}>
            <div className={styles.scenarioTitle}>
              <Zap size={14} className="inline mr-1" />
              Operational Synergy Analysis
            </div>
            <p className={styles.scenarioDesc}>{getScenarioDescription()}</p>
          </div>

          <button
            onClick={onOpenModal}
            className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-lg hover:shadow-amber-400/40 transition-all flex items-center justify-center gap-2"
            id="builder-cta-btn"
          >
            <span>Evaluate This Setup For My Site</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
