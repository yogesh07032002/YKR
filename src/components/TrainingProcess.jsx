import "./TrainingProcess.css";

import {
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  Lightbulb,
  MessageCircle,
  MessagesSquare,
  Trophy,
} from "lucide-react";

import React from "react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Attend a Demo",
    description:
      "Experience our training approach through a free demo session.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Choose Your Course",
    description:
      "Select a suitable course and batch timing based on your goals.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Learn the Techniques",
    description:
      "Understand simple techniques using everyday and workplace examples.",
  },
  {
    number: "04",
    icon: MessagesSquare,
    title: "Practice Every Session",
    description:
      "Improve through speaking drills, role-plays and group activities.",
  },
  {
    number: "05",
    icon: MessageCircle,
    title: "Get Personal Feedback",
    description:
      "Receive guidance on your voice, posture, words and message.",
  },
  {
    number: "06",
    icon: Trophy,
    title: "Perform with Confidence",
    description:
      "Apply your skills in mock interviews, presentations and discussions.",
  },
];

export default function TrainingProcess() {
  return (
    <section className="ykr-process" id="training-process">
      <div className="ykr-process-container">
        <div className="ykr-process-heading">
          <div>
            <span className="ykr-process-label">
              HOW WE TRAIN
            </span>

            <h2>
              Your Journey from
              <span> Learning to Confidence.</span>
            </h2>
          </div>

          <p>
            Our six-step training approach combines
            simple techniques, continuous practice
            and personal guidance.
          </p>
        </div>

        <div className="ykr-process-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                className="ykr-process-step"
                key={step.number}
              >
                <div className="ykr-process-step-top">
                  <div className="ykr-process-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="ykr-process-number">
                    {step.number}
                  </span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>

        <div className="ykr-process-footer">
          <div className="ykr-process-footer-text">
            <span className="ykr-process-footer-dot" />
            <p>
              Less Theory. More Practice. Real Confidence.
            </p>
          </div>

          <a
            href="https://wa.me/917218550652?text=Hello%2C%20I%20want%20to%20attend%20a%20free%20demo%20session."
            target="_blank"
            rel="noreferrer"
            className="ykr-process-cta"
          >
            Start with a Free Demo
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
