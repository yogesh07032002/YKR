
import React from "react";

import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import "./FinalCTA.css";

/* ==========================================
   CONTACT DETAILS
========================================== */

const whatsappNumber = "917218550652";

/* ==========================================
   SOCIAL MEDIA LINKS
   Replace URLs with actual YKR profiles
========================================== */

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/ykr_training_institute?utm_source=qr&dlrf=OG5nM3dzazA5MTl5",
    className: "instagram",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://youtube.com/@ykrtraininginstitute?si=gTWebuHOcvk5BdAg",
    className: "youtube",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/19cEPqKtCE/",
    className: "facebook",
  },
];

/* ==========================================
   FINAL CTA COMPONENT
========================================== */

export default function FinalCTA() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to book a free demo session at YKR Training Institute. Please share the available batches."
  );

  return (
    <section className="ykr-final-cta" id="free-demo">
      <div className="ykr-final-cta-container">

        {/* LEFT CONTENT */}

        <div className="ykr-final-cta-content">

          <span className="ykr-final-cta-label">
            YOUR CONFIDENCE STARTS HERE
          </span>

          <h2>
            Ready to Speak
            <span> with Confidence?</span>
          </h2>

          <p>
            Take the first step towards better English,
            stronger communication and a confident
            personality. Experience our practical
            training approach with a free demo session.
          </p>

          {/* BENEFITS */}

          <div className="ykr-final-cta-benefits">

            <span>
              <CheckCircle2 size={16} />
              Free Demo Session
            </span>

            <span>
              <CheckCircle2 size={16} />
              Practical Learning
            </span>

            <span>
              <CheckCircle2 size={16} />
              Flexible Batches
            </span>

          </div>
        </div>

        {/* RIGHT ACTION PANEL */}

        <div className="ykr-final-cta-actions">

          {/* PANEL HEADING */}

          <div className="ykr-final-cta-action-heading">
            <MessageCircle
              size={23}
              strokeWidth={1.8}
            />

            <span>
              START YOUR LEARNING JOURNEY
            </span>
          </div>

          {/* WHATSAPP CTA */}

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ykr-final-cta-primary"
          >
            <MessageCircle size={19} />

            Book Your Free Demo

            <ArrowUpRight size={19} />
          </a>

          {/* TWO CONTACT NUMBERS */}

          <div className="ykr-final-cta-secondary">

            <PhoneCall size={18} />

            <a href="tel:+917744000613">
              7744000613
            </a>

            <span className="ykr-final-cta-divider">
              |
            </span>

            <a href="tel:+917218550652">
              7218550652
            </a>

          </div>

          {/* SOCIAL MEDIA SECTION */}

          <div className="ykr-final-cta-social">

            <span className="ykr-final-cta-social-label">
              CONNECT WITH US
            </span>

            <div className="ykr-final-cta-social-links">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ykr-social-icon ${social.className}`}
                    aria-label={`Visit ${social.name}`}
                    title={social.name}
                  >
                    <Icon size={21} />
                  </a>
                );
              })}

            </div>
          </div>

          {/* BRANCH AND BATCH INFO */}

          <p className="ykr-final-cta-note">
            6 Branches Across PCMC, Pune
            <span> • </span>
            Batches: 8 AM – 9 PM
          </p>

        </div>
      </div>

      {/* BACKGROUND DECORATION */}

      <div
        className="ykr-final-cta-decoration"
        aria-hidden="true"
      />

    </section>
  );
}
