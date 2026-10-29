import "./WhyChooseUs.css";

import React from "react";

const features = [
  {
    number: "01",
    title: "Practice-Based Learning",
    description:
      "Learn through speaking activities, role-plays and real-life communication exercises.",
  },
  {
    number: "02",
    title: "Personal Feedback",
    description:
      "Get practical guidance to improve your speaking, confidence and presentation.",
  },
  {
    number: "03",
    title: "Flexible Batch Timings",
    description:
      "Choose convenient training batches available between 8 AM and 9 PM.",
  },
  {
    number: "04",
    title: "Real-World Communication",
    description:
      "Prepare for interviews, meetings, presentations and everyday conversations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="ykr-why" id="why-choose-us">
      <div className="ykr-why-container">
        <div className="ykr-why-intro">
          <span className="ykr-why-eyebrow">
            THE YKR ADVANTAGE
          </span>

          <h2>
            We Don't Just Teach.
            <span> We Make You Practice.</span>
          </h2>

          <p>
            Communication improves when you use it. Our
            training approach combines simple techniques,
            interactive activities and regular practice to
            help you communicate with greater confidence.
          </p>

          <a href="#courses" className="ykr-why-link">
            Discover Our Courses
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="ykr-why-features">
          {features.map((feature) => (
            <article
              className="ykr-why-feature"
              key={feature.number}
            >
              <span className="ykr-why-number">
                {feature.number}
              </span>

              <div className="ykr-why-feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <span
                className="ykr-why-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="ykr-why-bottom">
        <span className="ykr-why-bottom-line" />
        <p>
          Learn <span>→</span> Practice <span>→</span>
          Improve <span>→</span> Perform
        </p>
        <span className="ykr-why-bottom-line" />
      </div>
    </section>
  );
}
