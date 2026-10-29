
import React from "react";

import {
  ArrowUpRight,
  Building2,
  MapPin,
  Navigation,
  PhoneCall,
} from "lucide-react";

import "./Branches.css";

/* ==========================================
   GOOGLE MAP EMBED LINKS
========================================== */

// 01 - TALWADE IT PARK
const talwadeMapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.636405382288!2d73.78728989678959!3d18.696770300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7dc7274096b%3A0x369bca0ccd2b6d26!2sYKR%20TRAINING%20INSTITUTE!5e1!3m2!1sen!2sin!4v1793095976894!5m2!1sen!2sin";

// 02 - DEHUGAON
const dehugaonMapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.191673593765!2d73.76546457524147!3d18.716478082415506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b71b9103f245%3A0xa895e93e132ef021!2sSic%20arts%20Studio%20tattoo%20%2F%20dreadlocks%20%2F%20dance%20%2F%20zumba%20and%20fitness%20for%20ladies!5e1!3m2!1sen!2sin!4v1793096390926!5m2!1sen!2sin";

// 03 - CHIKHALI
const chikhaliMapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.919210628793!2d73.81145877524077!3d18.68422768244128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b76c81299a41%3A0xd4fb9ead1c543455!2sYKR%20TRAINING%20INSTITUTE!5e1!3m2!1sen!2sin!4v1793096181061!5m2!1sen!2sin";

// 04 - SANE CHAUK
const saneChaukMapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.266433133944!2d73.79303119678956!3d18.668817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7f5c6fc5ac9%3A0xe7006a05e7173380!2sMosmi's%20Pre-School%20(%20Koyana%20Nagar%20%2F%20Sane%20Chowk%20Branch%20)!5e1!3m2!1sen!2sin!4v1793097411430!5m2!1sen!2sin";

/* ==========================================
   BRANCH DATA
========================================== */

const branches = [
  {
    id: "01",
    name: "Talwade IT Park",
    area: "Talwade, Pune",
    address:
      "Office No. 8, Bhagubai Nana Bhari Complex, Talwade, Pune",
    headquarters: true,
    mapQuery: "YKR Training Institute Talwade Pune",
    mapEmbed: talwadeMapEmbed,
  },

  {
    id: "02",
    name: "Dehugaon",
    area: "Dehugaon, PCMC",
    mapQuery: "Sic arts Studio Dehugaon Pune",
    mapEmbed: dehugaonMapEmbed,
  },

  {
    id: "03",
    name: "Chikhali",
    area: "Chikhali, PCMC",
    mapQuery: "YKR Training Institute Chikhali Pune",
    mapEmbed: chikhaliMapEmbed,
  },

  {
    id: "04",
    name: "Sane Chauk",
    area: "Sane Chauk, PCMC",
    mapQuery:
      "Mosmi's Pre-School Koyana Nagar Sane Chowk Pune",
    mapEmbed: saneChaukMapEmbed,
  },

  {
    id: "05",
    name: "Chinchwad",
    area: "Chinchwad, Pune",
    mapQuery: "Chinchwad Pune",
  },

  {
  id: "06",
  name: "Ravet",
  area: "Ravet, Pune",
  mapQuery: "Ravet Pune",
},
];

/* ==========================================
   BRANCHES COMPONENT
========================================== */

export default function Branches() {
  return (
    <section
      className="ykr-branches"
      id="branches"
    >
      <div className="ykr-branches-container">

        {/* SECTION HEADING */}

        <div className="ykr-branches-heading">
          <div>
            <span className="ykr-branches-eyebrow">
              OUR LOCATIONS
            </span>

            <h2>
              Your Learning Journey,
              <span> Closer to Home.</span>
            </h2>
          </div>

          <p>
            Explore our six training locations across
            PCMC, Pune, and connect with the branch
            most convenient for you.
          </p>
        </div>

        {/* BRANCH CARDS */}

        <div className="ykr-branches-grid">
          {branches.map((branch) => {
            const mapsUrl =
              "https://www.google.com/maps/search/?api=1&query=" +
              encodeURIComponent(branch.mapQuery);

            return (
              <article
                key={branch.id}
                className={`ykr-branch-card ${
                  branch.headquarters
                    ? "ykr-branch-headquarters"
                    : ""
                } ${
                  branch.mapEmbed
                    ? "ykr-branch-has-map"
                    : "ykr-branch-no-map"
                }`}
              >

                {/* CARD TOP */}

                <div className="ykr-branch-top">
                  <div className="ykr-branch-icon">
                    {branch.headquarters ? (
                      <Building2
                        size={23}
                        strokeWidth={1.8}
                      />
                    ) : (
                      <MapPin
                        size={23}
                        strokeWidth={1.8}
                      />
                    )}
                  </div>

                  <span className="ykr-branch-number">
                    {branch.id} / 06
                  </span>
                </div>

                {/* HEADQUARTERS BADGE */}

                {branch.headquarters && (
                  <span className="ykr-branch-hq-label">
                    HEADQUARTERS
                  </span>
                )}

                {/* BRANCH INFORMATION */}

                <div className="ykr-branch-info">
                  <h3>{branch.name}</h3>

                  <p className="ykr-branch-area">
                    {branch.area}
                  </p>

                  {branch.address && (
                    <p className="ykr-branch-address">
                      {branch.address}
                    </p>
                  )}
                </div>

                {/* GOOGLE MAP - ONLY IF AVAILABLE */}

                {branch.mapEmbed && (
                  <div className="ykr-branch-map">
                    <iframe
                      src={branch.mapEmbed}
                      title={`YKR Training Institute - ${branch.name} Location`}
                      width="100%"
                      height="190"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                )}

                {/* VIEW ON MAP BUTTON */}

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ykr-branch-directions"
                  aria-label={`View map for ${branch.name}`}
                >
                  <Navigation size={16} />
                  <span>View on Map</span>
                  <ArrowUpRight size={17} />
                </a>

              </article>
            );
          })}
        </div>

        {/* CONTACT BANNER */}

        <div className="ykr-branches-contact">
          <div className="ykr-branches-contact-left">
            <div className="ykr-branches-contact-icon">
              <PhoneCall size={22} />
            </div>

            <div>
              <h3>
                Need Help Finding Your Nearest Branch?
              </h3>

              <p>
                Contact our team for exact branch
                addresses, batch availability and
                admission details.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/917218550652?text=Hello%2C%20please%20share%20the%20nearest%20YKR%20Training%20Institute%20branch%20location."
            target="_blank"
            rel="noopener noreferrer"
            className="ykr-branches-contact-btn"
          >
            Find My Nearest Branch
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}
