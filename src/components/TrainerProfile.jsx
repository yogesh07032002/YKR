import React from "react";

import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  MessageSquare,
  Mic2,
  Users,
} from "lucide-react";

import "./TrainerProfile.css";

const specializations = [
  {
    icon: Mic2,
    title: "Public Speaking",
  },
  {
    icon: MessageSquare,
    title: "Communication Skills",
  },
  {
    icon: Users,
    title: "Personality Development",
  },
  {
    icon: CheckCircle2,
    title: "Spoken English",
  },
];

export default function TrainerProfile() {
  return (
    <section className="ykr-trainer" id="about">
      <div className="ykr-trainer-container">

        {/* TRAINER IMAGE */}

        <div className="ykr-trainer-visual">
          <div className="ykr-trainer-photo">
            <img
              src="/trainer.jpeg"
              alt="Prof. Yogesh Rathod, Founder and Trainer at YKR Training Institute"
              loading="lazy"
            />
          </div>

          <div className="ykr-trainer-experience">
            <Award size={26} strokeWidth={1.8} />

            <div>
              <strong>6+ Years</strong>
              <span>Training Experience</span>
            </div>
          </div>

          <div className="ykr-trainer-photo-accent" />
        </div>

        {/* TRAINER CONTENT */}

        <div className="ykr-trainer-content">
          <span className="ykr-trainer-eyebrow">
            MEET YOUR TRAINER
          </span>

          <h2>
            Learn from Experience.
            <span> Speak with Confidence.</span>
          </h2>

          <div className="ykr-trainer-identity">
            <h3>Prof. Yogesh Rathod</h3>
            <p>
              Founder & Trainer — YKR Training Institute
            </p>
          </div>

          <p className="ykr-trainer-description">
            Prof. Yogesh Rathod is a communication and
            personality development trainer with
            <strong> 6+ years of experience</strong>, having
            conducted training programs at reputed colleges
            and organizations, including
            <strong>
              {" "}D. Y. Patil, Siddhi Pharmacy College,
              ISB&M, and Siddhant College.
            </strong>
          </p>

          <p className="ykr-trainer-description">
            Having empowered
            <strong> 500+ individuals</strong>, he
            specializes in public speaking, communication
            skills, spoken English, and confidence building.
          </p>

          <div className="ykr-trainer-divider" />

          <h4 className="ykr-trainer-specialization-title">
            TRAINING SPECIALIZATIONS
          </h4>

          <div className="ykr-trainer-specializations">
            {specializations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="ykr-trainer-specialization"
                  key={item.title}
                >
                  <Icon size={17} strokeWidth={2} />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>

          <p className="ykr-trainer-closing">
            Ready to speak confidently and unlock your
            potential? Connect with Prof. Yogesh Rathod
            today!
          </p>

          <a
            href="https://wa.me/917218550652?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20Prof.%20Yogesh%20Rathod%20regarding%20YKR%20Training%20Institute."
            target="_blank"
            rel="noopener noreferrer"
            className="ykr-trainer-btn"
          >
            Connect With Prof. Yogesh Rathod
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
