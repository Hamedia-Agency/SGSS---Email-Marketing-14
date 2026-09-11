'use client';

import React, { useState } from 'react';
import styles from './ProcessExplorer.module.css';
import { FileSearch, Map, GitBranch, DollarSign, Target } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Audit Current Setup',
    icon: <FileSearch size={24} />,
    description: 'Examine your active guard schedules, post orders, patrol logs, access management processes, and security technology. This creates an exact baseline of what resources you are currently paying for, where officers are stationed, and how your existing budget is allocated across daily operations.'
  },
  {
    id: '02',
    title: 'Map Daily Workflows',
    icon: <Map size={24} />,
    description: 'Track how employees, visitors, contractors, and delivery vehicles move through your property over a 24-hour cycle. By analyzing shift changes, loading dock activity, opening and closing procedures, and overnight lulls, we determine when your site is bustling and when vulnerabilities naturally spike.'
  },
  {
    id: '03',
    title: 'Analyze Gaps & Overlaps',
    icon: <GitBranch size={24} />,
    description: 'Cross-reference your current guard schedule directly against your site\'s physical traffic patterns. This exposes operational mismatches—such as paying for static guards during low-risk periods or leaving high-traffic delivery windows and dark perimeters without adequate oversight.'
  },
  {
    id: '04',
    title: 'Realign the Budget',
    icon: <DollarSign size={24} />,
    description: 'Evaluate every dollar spent against your property\'s actual risk priorities. Instead of simply cutting hours or adding new expenses, we identify underutilized services and reallocate existing funds directly toward high-vulnerability times and locations that require immediate protection.'
  },
  {
    id: '05',
    title: 'Execute Custom Strategy',
    icon: <Target size={24} />,
    description: 'Deliver a clear, actionable plan to optimize your security footprint. This includes refined officer shift schedules, updated post orders, targeted mobile patrol routes, or hybrid camera integration—ensuring your security program is streamlined, responsive, and aligned with how your site actually operates.'
  }
];

export const ProcessExplorer = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={styles.processContainer}>
      <div className={styles.processNavigation}>
        {steps.map((step, index) => (
          <button
            key={step.id}
            className={`${styles.processTab} ${index === activeStep ? styles.activeTab : ''}`}
            onClick={() => setActiveStep(index)}
          >
            <span className={styles.tabNumber}>{step.id}</span>
            <span className={styles.tabTitle}>{step.title}</span>
          </button>
        ))}
      </div>
      
      <div className={styles.processContentArea}>
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className={`${styles.processPanel} ${index === activeStep ? styles.activePanel : ''}`}
          >
            <div className={styles.panelHeader}>
              <div className={styles.panelIconWrap}>
                {step.icon}
              </div>
              <h3 className={styles.panelTitle}>
                <span className={styles.panelNumber}>{step.id}.</span> {step.title}
              </h3>
            </div>
            <p className={styles.panelDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
