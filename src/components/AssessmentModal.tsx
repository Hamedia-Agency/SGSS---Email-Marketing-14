"use client";

import React, { useState, useEffect } from "react";
import { X, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./AssessmentModal.module.css";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AssessmentModal({ isOpen, onClose }: AssessmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "Commercial Building",
    address: "",
    currentSecurity: "Guards Only",
    primaryConcern: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.modalOverlayOpen : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
          <div className={styles.modalBadge}>
            <ShieldCheck size={14} />
            <span>Zero Obligation Risk Review</span>
          </div>
          <h3 className={styles.modalTitle}>Schedule Your Free Security Assessment</h3>
          <p className={styles.modalSubtitle}>
            Complete this quick form and an SGSS security advisor will arrange a site walkthrough.
          </p>
        </div>

        <div className={styles.modalBody}>
          {submitted ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                Assessment Request Submitted!
              </h4>
              <p className="text-slate-600 text-sm max-w-md">
                Thank you, <strong>{formData.fullName || "Valued Client"}</strong>. A Secure Guard representative will review your property details ({formData.propertyType}) and contact you within 2 business hours to confirm your site assessment schedule.
              </p>
              <button onClick={handleResetAndClose} className={styles.submitBtn}>
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Vance"
                    className={styles.input}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className={styles.input}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    className={styles.input}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Property Type *</label>
                  <select
                    className={styles.select}
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="Commercial Building">Commercial Building</option>
                    <option value="Construction Site">Construction Site</option>
                    <option value="Residential Community">Residential / HOA Community</option>
                    <option value="Industrial / Warehouse">Industrial / Warehouse Yard</option>
                    <option value="Retail Center">Retail Shopping Center</option>
                    <option value="Other Property">Other Property Type</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Site Location / Address</label>
                  <input
                    type="text"
                    placeholder="City or Address, SoCal"
                    className={styles.input}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Current Security Program</label>
                  <select
                    className={styles.select}
                    value={formData.currentSecurity}
                    onChange={(e) => setFormData({ ...formData, currentSecurity: e.target.value })}
                  >
                    <option value="Guards Only">On-Site Guards</option>
                    <option value="Cameras Only">CCTV Cameras Only</option>
                    <option value="Mobile Patrol">Mobile Patrol Checks</option>
                    <option value="Unsecured">No Active Security</option>
                    <option value="Combination">Mixed / Existing Provider</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Specific Concerns or Gaps to Evaluate</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Unsecured service entrance, dark parking area, overnight trespassers..."
                  className={styles.textarea}
                  value={formData.primaryConcern}
                  onChange={(e) => setFormData({ ...formData, primaryConcern: e.target.value })}
                />
              </div>

              <button type="submit" className={styles.submitBtn} id="modal-submit-btn">
                <span>Identify My Security Gaps</span>
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
