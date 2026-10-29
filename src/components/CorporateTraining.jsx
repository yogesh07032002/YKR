import "./CorporateTraining.css";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Presentation,
  TrendingUp,
  Users,
} from "lucide-react";

import React from "react";

const trainingAreas = [
  {
    icon: BriefcaseBusiness,
    title: "Business Communication",
    text: "Communicate clearly in professional situations.",
  },
  {
    icon: Users,
    title: "Team Motivation",
    text: "Build confidence and effective team interactions.",
  },
  {
    icon: Presentation,
    title: "Presentation Skills",
    text: "Present ideas with clarity and confidence.",
  },
  {
    icon: TrendingUp,
    title: "Sales Communication",
    text: "Develop structured customer conversations.",
  },
];

const spanco = [
  { letter: "S", title: "Suspect" },
  { letter: "P", title: "Prospect" },
  { letter: "A", title: "Approach" },
  { letter: "N", title: "Negotiation" },
  { letter: "C", title: "Closure" },
  { letter: "O", title: "Order" },
];

export default function CorporateTraining() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to enquire about Corporate Sales & Motivation Training at YKR Training Institute."
  );

  return (
    <section
      className="ykr-corporate"
      id="corporate-training"
    >
      <div className="ykr-corporate-container">
        <div className="ykr-corporate-main">
          <div className="ykr-corporate-content">
            <span className="ykr-corporate-eyebrow">
              CORPORATE TRAINING
            </span>

            <h2>
              Better Communication.
              <span> Stronger Teams.</span>
            </h2>

            <p className="ykr-corporate-description">
              Empower your professionals and sales teams
              with practical communication, presentation,
              motivation and structured selling skills.
            </p>

            <div className="ykr-corporate-areas">
              {trainingAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    className="ykr-corporate-area"
                    key={area.title}
                  >
                    <div className="ykr-corporate-area-icon">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3>{area.title}</h3>
                      <p>{area.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={`https://wa.me/917218550652?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="ykr-corporate-btn"
            >
              Enquire for Corporate Training
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="ykr-spanco-panel">
            <div className="ykr-spanco-header">
              <div>
                <span>SALES TRAINING FRAMEWORK</span>
                <h3>SPANCO</h3>
              </div>

              <span className="ykr-spanco-symbol">
                <TrendingUp size={24} strokeWidth={1.8} />
              </span>
            </div>

            <p className="ykr-spanco-intro">
              Understand the stages of a structured
              sales process.
            </p>

            <div className="ykr-spanco-list">
              {spanco.map((item, index) => (
                <div
                  className="ykr-spanco-item"
                  key={item.letter}
                >
                  <span className="ykr-spanco-letter">
                    {item.letter}
                  </span>

                  <span className="ykr-spanco-title">
                    {item.title}
                  </span>

                  <span className="ykr-spanco-index">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="ykr-spanco-note">
              <Check size={17} />
              <span>
                Practical, process-oriented sales training
              </span>
            </div>
          </div>
        </div>

        <div className="ykr-corporate-bottom">
          <span>FOR PROFESSIONALS & TEAMS</span>
          <span>COMMUNICATION • SALES • MOTIVATION</span>
        </div>
      </div>
    </section>
  );
}
