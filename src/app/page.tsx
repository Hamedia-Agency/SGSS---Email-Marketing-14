import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PreFooterCTA } from "@/components/PreFooterCTA";

import { ProcessExplorer } from "@/components/ProcessExplorer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CoverageSection } from "@/components/CoverageSection";
import { 
  ShieldCheck, 
  Car, 
  Video, 
  Sun, 
  Smartphone
} from "lucide-react";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ===== 1. HERO (DARK) ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/BG-scaled.webp"
            alt="Security Cost Optimization"
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
              Strategic Budget Alignment
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Security Cost <span className={styles.heroTitleAccent}>Optimization</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard Security Services conducts operational security reviews designed to identify where coverage may be misaligned with the way a property actually operates and where the security budget may be better allocated.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="#prefooter-cta" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Get a Security Assessment
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== 2. VULNERABILITY (LIGHT) ===== */}
      <section className={styles.section} id="vulnerability">
        <div className="container">
          <div className={styles.splitGrid} style={{ marginBottom: '0', alignItems: 'center' }}>
            <div className={styles.splitImageWrapper} style={{ height: '100%', minHeight: '400px' }}>
              <Image 
                src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/Town-1.webp" 
                alt="Security Coverage Shortfalls" 
                fill
                className={styles.splitImage}
              />
            </div>
            <div className={styles.sectionHeaderLeft} style={{ marginBottom: 0 }}>
              <span className={styles.sectionTag}>Coverage Gaps</span>
              <h2 className={styles.sectionTitle}>
                Where Security Coverage Can Fall Short
              </h2>
              <p className={styles.bodyText}>
                Simply increasing security hours does not guarantee better protection if coverage fails to align with your property’s actual operational rhythms. 
              </p>
              <p className={styles.bodyText}>
                Secure Guard evaluates your site's daily activity patterns to align security hours directly with your highest-vulnerability periods, ensuring your resources are deployed where they deliver maximum protection rather than spread thin across static shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. OPERATIONS (DARK) ===== */}
      <section 
        className={`${styles.section} ${styles.sectionDark}`} 
        id="operations"
        style={{
          backgroundImage: `linear-gradient(rgba(29, 44, 72, 0.85), rgba(29, 44, 72, 0.85)), url('https://cms.secureguardservices.com/wp-content/uploads/2026/08/em11-2-1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '40px' }}>
            <div className={styles.splitGrid} style={{ alignItems: 'center', gap: '60px' }}>
              <div className={styles.sectionHeaderLeft} style={{ marginBottom: 0 }}>
                <span className={`${styles.sectionTag} ${styles.sectionTagDark}`}>Efficiency</span>
                <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                  How We Optimize Your Security Spend
                </h2>
                <div className={`${styles.bodyText} ${styles.bodyTextDark}`}>
                  <h4 style={{ color: 'var(--color-gold)', marginBottom: '8px' }}>Aligning Security with Site Activity</h4>
                  <p style={{ marginBottom: '20px' }}>Secure Guard analyzes daily workflows, shift changes, delivery schedules, and foot/vehicle traffic to eliminate duplicated, underutilized, or poorly timed coverage hours. Rather than automatically cutting guard hours, we redirect your existing budget away from static, low-activity shifts and focus it directly on peak-vulnerability windows where a physical presence delivers the highest operational value.</p>
                  
                  <h4 style={{ color: 'var(--color-gold)', marginBottom: '8px' }}>Allocating Resources by Risk Level</h4>
                  <p style={{ marginBottom: '20px' }}>Secure Guard evaluates your physical layout—from high-value equipment yards and restricted storage zones to routine perimeters and parking structures—to determine where continuous guard presence is necessary, where periodic mobile patrols suffice, and where surveillance technology offers the best coverage. Assigning security resources based on localized risk rather than rigid standard templates ensures your budget delivers maximum protection where it is needed most.</p>
                  
                </div>
              </div>
              <div className={styles.splitImageWrapper} style={{ height: '100%', minHeight: '400px', borderRadius: '16px', overflow: 'hidden' }}>
                <Image 
                  src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/em11-2.webp" 
                  alt="Optimize Spend" 
                  fill
                  className={styles.splitImage}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.sectionHeaderLeft} style={{ marginBottom: 0, padding: '32px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '100%' }}>
              <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`} style={{ fontSize: '1.8rem' }}>
                Technology & Personnel Integration
              </h2>
              <p className={`${styles.bodyText} ${styles.bodyTextDark}`}>
                Existing cameras, access control systems, and monitoring tools deliver maximum value when seamlessly integrated with your physical security force. Secure Guard evaluates your property to determine where technology can maintain continuous observation and where human presence is essential for access control, visitor management, and direct response. 
              </p>
              <p className={`${styles.bodyText} ${styles.bodyTextDark}`} style={{ marginBottom: 0 }}>
                By coordinating remote video monitoring, mobile patrols, and on-site officers into a unified network, we ensure your technology and personnel complement each other, eliminating redundant expenses while making your current security hardware work significantly harder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. FEATURES (LIGHT) ===== */}
      <section className={styles.section} id="features">
        <div className="container">
          <div className={styles.sectionHeaderCentered} style={{ marginBottom: '56px' }}>
            <span className={styles.sectionTag}>Comprehensive Solutions</span>
            <h2 className={styles.sectionTitle}>
              Building the Right Security Combination
            </h2>
            <p className={styles.bodyTextCentered}>
              Secure Guard evaluates your unique layout, risk profile, and operating hours to deploy the exact mix of protection your property requires.
            </p>
          </div>
          
          <div className={styles.cardsGridFive}>
            <div className={styles.featureCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '30px 20px' }}>
              <div className={styles.featureCardIcon} style={{ width: '56px', height: '56px', marginBottom: '16px' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 className={styles.featureTitle} style={{ marginBottom: '10px', fontSize: '1.15rem' }}>On-Site Security Officers</h3>
              <p className={styles.featureDesc} style={{ fontSize: '0.95rem' }}>Provide continuous visible deterrence, manage access gates, handle visitor screening, and deliver immediate on-scene response for high-risk zones and busy operational hours.</p>
            </div>
            
            <div className={styles.featureCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '30px 20px' }}>
              <div className={styles.featureCardIcon} style={{ width: '56px', height: '56px', marginBottom: '16px' }}>
                <Car size={28} />
              </div>
              <h3 className={styles.featureTitle} style={{ marginBottom: '10px', fontSize: '1.15rem' }}>Mobile Patrols</h3>
              <p className={styles.featureDesc} style={{ fontSize: '0.95rem' }}>Conduct scheduled or randomized physical inspections, perimeter checks, and door locks for expansive properties or lower-risk periods that do not require a full-time standing guard post.</p>
            </div>
            
            <div className={styles.featureCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '30px 20px' }}>
              <div className={styles.featureCardIcon} style={{ width: '56px', height: '56px', marginBottom: '16px' }}>
                <Video size={28} />
              </div>
              <h3 className={styles.featureTitle} style={{ marginBottom: '10px', fontSize: '1.15rem' }}>Remote Video Monitoring</h3>
              <p className={styles.featureDesc} style={{ fontSize: '0.95rem' }}>Delivers continuous, active visual oversight across key property vulnerabilities, allowing trained specialists to detect, verify, and intercept suspicious activity in real time.</p>
            </div>
            
            <div className={styles.featureCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '30px 20px' }}>
              <div className={styles.featureCardIcon} style={{ width: '56px', height: '56px', marginBottom: '16px' }}>
                <Sun size={28} />
              </div>
              <h3 className={styles.featureTitle} style={{ marginBottom: '10px', fontSize: '1.15rem' }}>Solar Surveillance Towers</h3>
              <p className={styles.featureDesc} style={{ fontSize: '0.95rem' }}>Supply standalone, elevated camera coverage, night visibility, and active deterrence lighting for expansive outdoor yards, remote parking lots, and unwired construction sites.</p>
            </div>
            
            <div className={styles.featureCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '30px 20px' }}>
              <div className={styles.featureCardIcon} style={{ width: '56px', height: '56px', marginBottom: '16px' }}>
                <Smartphone size={28} />
              </div>
              <h3 className={styles.featureTitle} style={{ marginBottom: '10px', fontSize: '1.15rem' }}>SecureTrack Platform</h3>
              <p className={styles.featureDesc} style={{ fontSize: '0.95rem' }}>Unifies on-site officers, field supervisors, 24/7 central dispatchers, and live camera feeds into a single coordinated management system to verify patrol rounds, log incidents, and give you complete portfolio transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. HOW IT WORKS (DARK) ===== */}
      <section className={`${styles.section} ${styles.sectionDark}`} id="process">
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={`${styles.sectionTag} ${styles.sectionTagDark}`}>5-Step Evaluation</span>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
              Operational Security Review Process
            </h2>
            <p className={`${styles.bodyTextCentered} ${styles.bodyTextDark}`}>
              Secure Guard conducts a structured, five-step evaluation to align your security program directly with how your facility functions in real-world conditions.
            </p>
          </div>
          <ProcessExplorer />
        </div>
      </section>

      {/* ===== 6. WHY CHOOSE SECURE GUARD (DARK) ===== */}
      <section className={`${styles.section} ${styles.sectionDark} ${styles.patternSection}`} id="why-secure-guard">
        <div className={styles.patternLeft}></div>
        <div className={styles.patternRight}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.sectionHeaderCentered} style={{ maxWidth: '900px' }}>
            <span className={`${styles.sectionTag} ${styles.sectionTagDark}`}>Cost Efficiency</span>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
              The Secure Guard Difference
            </h2>
            <p className={`${styles.bodyTextCentered} ${styles.bodyTextDark}`}>
              Secure Guard rejects rigid, template-based security in favor of custom strategies built around your site's exact layout, risk factors, and daily operating cycles. Rather than blindly adding costly guard hours or redundant hardware, we evaluate your existing setup to maximize budget efficiency and focus resources where vulnerabilities peak. By unifying physical officers, mobile patrols, smart surveillance, 24/7 central dispatch, and digital reporting into a single connected system, we deliver streamlined, high-impact protection for single properties and multi-location portfolios.
            </p>
          </div>
        </div>
      </section>

      <CoverageSection />

      {/* ===== 7. FAQ (LIGHT) ===== */}
      <section className={styles.faqSection} id="faq">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>FAQ</span>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      <Footer />
      <BackToTop />
    </main>
  );
}
