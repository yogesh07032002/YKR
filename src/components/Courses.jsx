
import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./Courses.css";

const courses = [
  {
    id: "01",
    title: "Business English for Professionals",
    highlight: "PROFESSIONAL · IMPACT",
    image: "/train1.jpg",
    description:
      "Communicate confidently in meetings, write professional emails and create a strong impression at work.",
  },
  {
    id: "02",
    title: "Public Speaking & Stage Confidence",
    highlight: "COURAGE · EXPRESSION",
    image: "/train2.png",
    description:
      "Overcome stage fear, speak with confidence and connect effectively with any audience.",
  },
  {
    id: "03",
    title: "Communication Skills",
    highlight: "CONNECTION · CLARITY",
    image: "/train3.jpg",
    description:
      "Express your ideas clearly, improve listening skills and build stronger relationships.",
  },
  {
    id: "04",
    title: "Body Language & Presence",
    highlight: "PRESENCE · CONFIDENCE",
    image: "/train4.jpg",
    description:
      "Master posture, gestures, eye contact and confident non-verbal communication.",
  },
  {
    id: "05",
    title: "Personality Development",
    highlight: "GROWTH · SELF-CONFIDENCE",
    image: "/train5.jpg",
    description:
      "Discover your strengths, develop self-confidence and improve your interpersonal skills.",
  },
  {
    id: "06",
    title: "Interview & Career Readiness",
    highlight: "CAREER · OPPORTUNITY",
    image: "/train6.jpg",
    description:
      "Prepare for interviews, present your strengths and make a confident professional impression.",
  },
  {
    id: "07",
    title: "Corporate Sales & Motivation Training",
    highlight: "SALES · LEADERSHIP",
    image: "/train7.jpg",
    description:
      "Build customer trust, handle objections and strengthen sales skills using the SPANCO model.",
  },
  {
    id: "08",
    title: "Political Leadership Development",
    highlight: "LEADERSHIP · PUBLIC IMPACT",
    image: "/train8.jpg",
    description:
      "Develop leadership, public speaking, body language and effective citizen communication.",
  },
];

export default function Courses() {
  return (
    <section className="ykr-courses" id="courses">
      <div className="ykr-courses-container">

        {/* SECTION HEADING */}

        <div className="ykr-courses-heading">
          <div>
            <span className="ykr-courses-eyebrow">
              OUR TRAINING PROGRAMS
            </span>

            <h2>
              Develop Skills That
              <span> Make a Difference.</span>
            </h2>
          </div>

          <p>
            Explore practical training programs designed
            to strengthen your communication, confidence,
            professional skills and leadership abilities.
          </p>
        </div>

        {/* FOUR CARDS PER ROW */}

        <div className="ykr-courses-grid">
          {courses.map((course) => {
            const whatsappUrl =
              "https://wa.me/917218550652?text=" +
              encodeURIComponent(
                `Hello YKR Training Institute, I would like to enquire about ${course.title}.`
              );

            return (
              <article
                className="ykr-course-card"
                key={course.id}
              >

                {/* COURSE IMAGE */}

                <div className="ykr-course-image">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                  />

                  <span className="ykr-course-image-number">
                    {course.id}
                  </span>
                </div>

                {/* COURSE INFORMATION */}

                <div className="ykr-course-content">

                  <span className="ykr-course-highlight">
                    {course.highlight}
                  </span>

                  <h3>{course.title}</h3>

                  <p className="ykr-course-description">
                    {course.description}
                  </p>

                  {/* CTA BUTTON */}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ykr-course-link"
                  >
                    Enquire Now
                    <ArrowUpRight size={16} />
                  </a>

                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}

        <div className="ykr-courses-bottom">
          <p>
            Not sure which program is right for you?
            <strong> Our team is here to guide you.</strong>
          </p>

          <a
            href="https://wa.me/917218550652?text=Hello%2C%20please%20help%20me%20choose%20the%20right%20training%20program."
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Course Guidance
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}
