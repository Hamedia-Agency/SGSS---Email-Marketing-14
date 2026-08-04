"use client";

import React, { useState } from "react";
import { Eye, ShieldAlert, CheckCircle2, AlertTriangle, Lightbulb, Lock } from "lucide-react";
import styles from "./InteractiveGapSimulator.module.css";

interface ZoneData {
  id: string;
  name: string;
  icon: string;
  dailyTitle: string;
  dailyDesc: string;
  dailyPoints: string[];
  auditTitle: string;
  auditDesc: string;
  auditPoints: string[];
  riskScore: number; // 0 to 100
  solution: string;
}

const zones: ZoneData[] = [
  {
    id: "service",
    name: "Service & Delivery Entrances",
    icon: "🚪",
    dailyTitle: "Daily Operation Perception",
    dailyDesc: "Vendors and contractors arrive daily using known service doors. Staff recognize delivery drivers, assuming credentials are check-in verified.",
    dailyPoints: [
      "Known vendors use service doors without log friction",
      "Delivery dock remains open during standard operating hours",
      "Personnel assume lobby guards monitor the rear entrance",
    ],
    auditTitle: "SGSS Walkthrough Finding",
    auditDesc: "Service entrances often lack verification logging during peak vendor delivery hours, allowing unauthorized individuals to enter undetected behind trusted trucks.",
    auditPoints: [
      "No physical badge or visitor verification at loading bay",
      "Rear delivery doors left propped open for convenience",
      "Guard station lacks line of sight or camera coverage to door",
    ],
    riskScore: 78,
    solution: "Implement strict access control verification, digital visitor logs, and targeted camera monitoring focused on delivery zones.",
  },
  {
    id: "parking",
    name: "Overnight Parking & Exterior",
    icon: "🚗",
    dailyTitle: "Daily Operation Perception",
    dailyDesc: "Parking areas appear safe during daylight. Overhead fixtures are installed, and vehicle traffic is routine during business shifts.",
    dailyPoints: [
      "Lighting seems adequate when staff leave at dusk",
      "Patrol cars occasionally drive past during early evening",
      "No recent major incidents reported by daytime staff",
    ],
    auditTitle: "SGSS Walkthrough Finding",
    auditDesc: "Overnight darkness exposes dead light bulbs, hidden shadow corners between tall vehicles, and extended 3-hour gaps between random drive-by patrols.",
    auditPoints: [
      "3 main light poles non-functional in rear parking sector",
      "Overnight trespassers identify blind spots between shifts",
      "Mobile patrols lack verified GPS arrival timestamps",
    ],
    riskScore: 85,
    solution: "Deploy GPS-tracked mobile patrol sweeps with site-specific lighting audits and high-visibility perimeter deterrence.",
  },
  {
    id: "perimeter",
    name: "Perimeter Fencing & Storage",
    icon: "🧱",
    dailyTitle: "Daily Operation Perception",
    dailyDesc: "Perimeter fencing encloses property borders. Construction materials and equipment are parked in designated storage yards.",
    dailyPoints: [
      "Chain link fence defines boundary around property",
      "Equipment is parked inside fenced perimeter",
      "Security signs warning of surveillance posted on fence",
    ],
    auditTitle: "SGSS Walkthrough Finding",
    auditDesc: "Fence lines often feature cut fabric, bent latches, or overgrown foliage that hides forced entry points from main street view.",
    auditPoints: [
      "Overlooked fence section compromised near rear alley",
      "High-value equipment visible from unmonitored street side",
      "Patrol routes skip perimeter walking path due to debris",
    ],
    riskScore: 72,
    solution: "Adjust guard Post Orders to include mandatory perimeter fence checks and integrate rapid-deployment active surveillance towers.",
  },
  {
    id: "routes",
    name: "Patrol Routes & Blind Spots",
    icon: "🚶",
    dailyTitle: "Daily Operation Perception",
    dailyDesc: "Guards perform regular rounds through the building lobby, main hallways, and main entrance doors.",
    dailyPoints: [
      "Guard walks through main lobby every hour",
      "Incident log is filled out at the front desk",
      "Presence gives tenants and visitors immediate peace of mind",
    ],
    auditTitle: "SGSS Walkthrough Finding",
    auditDesc: "Predictable patrol routes leave stairwells, basement storage, and fire exits uninspected for hours at a time, creating open vulnerability windows.",
    auditPoints: [
      "Patrol routes follow identical static schedule every night",
      "Stairwell fire doors uninspected for latch mechanism failures",
      "No digital proof or timestamp verification of patrol sweeps",
    ],
    riskScore: 82,
    solution: "Transition to digitized QR checkpoint patrol tracking with randomized sweep times and full property coverage verification.",
  },
];

export function InteractiveGapSimulator() {
  const [activeZoneId, setActiveZoneId] = useState<string>("service");
  const [viewMode, setViewMode] = useState<"daily" | "audit">("audit");

  const currentZone = zones.find((z) => z.id === activeZoneId) || zones[0];

  return (
    <div className={styles.simulator} id="gap-simulator">
      {/* Header */}
      <div className={styles.simHeader}>
        <div className={styles.simTitle}>
          <Eye className={styles.simTitleIcon} size={24} />
          <span>Interactive Property Perspective Simulator</span>
        </div>
        <div className={styles.viewToggle}>
          <button
            className={`${styles.toggleBtn} ${viewMode === "daily" ? styles.toggleBtnActive : ""}`}
            onClick={() => setViewMode("daily")}
            id="sim-toggle-daily"
          >
            Daily Operational View
          </button>
          <button
            className={`${styles.toggleBtn} ${viewMode === "audit" ? styles.toggleBtnActive : ""}`}
            onClick={() => setViewMode("audit")}
            id="sim-toggle-audit"
          >
            Outside Intruder View (SGSS Audit)
          </button>
        </div>
      </div>

      {/* Zone Tabs */}
      <div className={styles.zoneTabs}>
        {zones.map((zone) => (
          <button
            key={zone.id}
            className={`${styles.zoneTab} ${activeZoneId === zone.id ? styles.zoneTabActive : ""}`}
            onClick={() => setActiveZoneId(zone.id)}
            id={`sim-tab-${zone.id}`}
          >
            <span className="text-xl">{zone.icon}</span>
            <span>{zone.name}</span>
          </button>
        ))}
      </div>

      {/* Body */}
      <div className={styles.simBody}>
        {/* Perspective Card */}
        <div
          className={`${styles.perspectiveCard} ${
            viewMode === "daily" ? styles.dailyViewCard : styles.auditViewCard
          }`}
        >
          <div
            className={`${styles.cardBadge} ${
              viewMode === "daily" ? styles.dailyBadge : styles.auditBadge
            }`}
          >
            {viewMode === "daily" ? (
              <>
                <CheckCircle2 size={14} />
                <span>Standard Familiar View</span>
              </>
            ) : (
              <>
                <ShieldAlert size={14} />
                <span>SGSS Assessment Vulnerability Reveal</span>
              </>
            )}
          </div>
          <h3 className={styles.cardTitle}>
            {viewMode === "daily" ? currentZone.dailyTitle : currentZone.auditTitle}
          </h3>
          <p className={styles.cardDesc}>
            {viewMode === "daily" ? currentZone.dailyDesc : currentZone.auditDesc}
          </p>

          <ul className={styles.pointList}>
            {(viewMode === "daily" ? currentZone.dailyPoints : currentZone.auditPoints).map(
              (pt, idx) => (
                <li key={idx} className={styles.pointItem}>
                  {viewMode === "daily" ? (
                    <span className="text-slate-400 font-bold">•</span>
                  ) : (
                    <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <span>{pt}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Risk Gauge & Solution */}
        <div className={styles.riskGauge}>
          <div className={styles.meterHeader}>
            <span className={styles.meterLabel}>Vulnerability Exposure Score</span>
            <span
              className={styles.meterVal}
              style={{
                color: viewMode === "audit" ? "#dc2626" : "#16a34a",
              }}
            >
              {viewMode === "audit" ? `${currentZone.riskScore}% High Risk` : "15% Perceived Safe"}
            </span>
          </div>

          <div className={styles.meterTrack}>
            <div
              className={styles.meterFill}
              style={{
                width: viewMode === "audit" ? `${currentZone.riskScore}%` : "15%",
                backgroundColor: viewMode === "audit" ? "#dc2626" : "#16a34a",
              }}
            />
          </div>

          <p className="text-xs text-slate-500">
            {viewMode === "audit"
              ? "Critical Security Gap: Unexamined routines leave vulnerability windows for theft or trespass."
              : "Everyday familiarity masks security gaps that outside perpetrators look for."}
          </p>

          <div className={styles.solutionBox}>
            <div className={styles.solutionTitle}>
              <Lightbulb size={16} className="text-amber-600" />
              <span>Recommended SGSS Action</span>
            </div>
            <p className={styles.solutionDesc}>{currentZone.solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
