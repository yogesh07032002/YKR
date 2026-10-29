import "./FAQ.css";

import {
  ArrowUpRight,
  MessageCircleQuestion,
  Minus,
  Plus,
} from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question: "What courses are available at YKR Training Institute?",
    answer:
      "YKR offers eight training programs covering Spoken English, Business English, Public Speaking, Communication Skills, Body Language, Personality Development, Interview & Career Readiness, and Corporate Sales & Motivation Training.",
  },
  {
    question: "What is the duration of the Spoken English course?",
    answer:
      "The Spoken English course is designed for a duration of 2 months, with a focus on practical speaking activities and real-life communication.",
  },
  {
    question: "Can I attend a free demo session before joining?",
    answer:
      "Yes. You can contact YKR Training Institute to book a free demo session and understand the training approach before enrolling.",
  },
  {
    question: "What are the available batch timings?",
    answer:
      "YKR offers flexible batch options between 8 AM and 9 PM. Contact the institute to confirm the available timings for your preferred course and branch.",
  },
  {
    question: "Is the training practical or theory-based?",
    answer:
      "The training emphasizes practice through speaking exercises, role-plays, group activities, presentations and personal feedback, rather than relying only on theory.",
  },
  {
    question: "Where are YKR Training Institute branches located?",
    answer:
      "YKR has six locations across PCMC, Pune: Talwade IT Park, Dehugaon, Chikhali, Sane Chauk, Chinchwad and Bhosari. Contact the team for exact branch addresses.",
  },
  {
    question: "Do you provide corporate training?",
    answer:
      "Yes. YKR offers Corporate Sales & Motivation Training, including professional communication, presentation skills, team motivation and SPANCO-based sales training.",
  },
  {
    question: "How can I enquire about admission?",
    answer:
      "You can contact YKR Training Institute on WhatsApp at +91 72185 50652 to enquire about courses, batch availability, branch locations and demo sessions.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="ykr-faq" id="faq">
      <div className="ykr-faq-container">
        <div className="ykr-faq-intro">
          <span className="ykr-faq-eyebrow">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Questions?
            <span> We've Got Answers.</span>
          </h2>

          <p>
            Find answers to common questions about
            our courses, training approach, batch
            timings and admissions.
          </p>

          <div className="ykr-faq-help">
            <div className="ykr-faq-help-icon">
              <MessageCircleQuestion size={25} />
            </div>

            <h3>Still Have a Question?</h3>

            <p>
              Our team is here to help you choose
              the right training program.
            </p>

            <a
              href="https://wa.me/917218550652?text=Hello%2C%20I%20have%20a%20question%20about%20YKR%20Training%20Institute."
              target="_blank"
              rel="noreferrer"
            >
              Ask Us on WhatsApp
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="ykr-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`ykr-faq-item ${
                  isOpen ? "ykr-faq-item-active" : ""
                }`}
                key={faq.question}
              >
                <h3 className="ykr-faq-question-heading">
                  <button
                    type="button"
                    className="ykr-faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`ykr-faq-answer-${index}`}
                    id={`ykr-faq-question-${index}`}
                  >
                    <span className="ykr-faq-question-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="ykr-faq-question-text">
                      {faq.question}
                    </span>

                    <span className="ykr-faq-toggle">
                      {isOpen ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  className="ykr-faq-answer-wrapper"
                  id={`ykr-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`ykr-faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
