// Hero.jsx - Fixed version
import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth <= 768);
  
  // Create a ref for the hero section to track scroll progress relative to it
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"] // Track from top of hero to top of viewport leaving hero
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Y Position - More controlled movement
  const videoY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, isMobileDevice ? 380 : 530, isMobileDevice ? 400 : 560]
  );

  // Scale
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [1, isMobileDevice ? 0.28 : 0.35, isMobileDevice ? 0.25 : 0.3]
  );

  // Width
const videoScaleX = useTransform(
  scrollYProgress,
  [0, 0.3, 1],
  [1, isMobileDevice ? 0.80 : 0.5, isMobileDevice ? 0.75 : 0.45]
);

  // Move Left
  const videoX = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, isMobileDevice ? -18 : -32, isMobileDevice ? -22 : -38]
  );

  // Opacity
const videoOpacity = useTransform(
  scrollYProgress,
  [0, 0.2, 0.6],
  [
    1,
    isMobileDevice ? 1.5 : 0.95,
    isMobileDevice ? 0.95 : 0
  ]
);

  // State for hover effect
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Content data for each video
  const videoContent = [
    {
      title: "WHITE CLAW",
      subtitle: "WE ACTIVATE BRANDS IN",
      description: "MOMENTS THAT MATTER TO BUILD CULTURAL RESONANCE",
      caseStudy: "HOW WHITE CLAW DROVE $2B+ IN SALES.",
      cta: "CASE STUDY →"
    },
    {
      title: "TOBLERONE",
      subtitle: "WE ACTIVATE BRANDS IN",
      description: "MOMENTS THAT MATTER TO BUILD CULTURAL RESONANCE",
      caseStudy: "HOW TOBLERONE SUPERCHARGED BRAND RECALL BY 29%.",
      cta: "CASE STUDY →"
    },
    {
      title: "FA WALES",
      subtitle: "WE ACTIVATE BRANDS IN",
      description: "MOMENTS THAT MATTER TO BUILD CULTURAL RESONANCE",
      caseStudy: "HOW FA WALES MADE FOOTBALL A NATION'S #1 SPORT.",
      cta: "CASE STUDY →"
    }
  ];

  return (
    <>
      {/* Wrap hero section with ref */}
      <section ref={heroRef} className="hero-wrapper">
        <section className="banner-co">
          <div className="banner-container">
            <img
              src="https://ritzmediaworld.com/4th_floor_rmw/home/banner/rmw(new)/NEWbanner-04.jpg"
              alt="Hero Banner"
            />
          </div>

          <motion.div
            className="animation-vd"
            style={{
              y: videoY,
              scale: videoScale,
              scaleX: videoScaleX,
              x: videoX,
              opacity: videoOpacity,
            }}
          >
            <video autoPlay muted loop playsInline>
              <source src="https://cdn.jsdelivr.net/gh/wearebulletproof/bulletproof-website-2024/videos/BF_3.mp4" />
            </video>
          </motion.div>
        </section>

        <section className="second-d">
          <div className="texts">
            <h3>
              The world's largest independent brand
              <br />
              agency, 17 years in the making
            </h3>

            <h2>WE CREATE DESIRE THROUGH</h2>

            <h1 className="disruption">
              <span>DIS</span>
              <span className="gap">
                {/* The video will animate into this gap */}
              </span>
              <span>RUP</span>
              <br />
              <span>TION</span>
            </h1>
          </div>
        </section>
      </section>

      <section className="deliver">
        <h2>WHAT WE DELIVER</h2>

        <div className={`grid-temp ${isMobileDevice ? 'mobile-view' : 'desktop-view'}`}>
          {[0, 1, 2].map((index) => (
            <motion.div 
              key={index}
              className={`three ${hoveredIndex === index ? 'active' : ''}`}
              onMouseEnter={() => !isMobileDevice && setHoveredIndex(index)}
              onMouseLeave={() => !isMobileDevice && setHoveredIndex(null)}
              onTouchStart={() => {
                if (isMobileDevice) {
                  setHoveredIndex(hoveredIndex === index ? null : index);
                }
              }}
              animate={isMobileDevice ? {
                height: hoveredIndex === index ? 'auto' : '380px',
              } : {}}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <video autoPlay muted loop playsInline>
                <source src={index === 0 
                  ? "https://cdn.jsdelivr.net/gh/wearebulletproof/bulletproof-website-2024/videos/White_Claw_wave_01%201.mp4"
                  : index === 1
                  ? "https://cdn.jsdelivr.net/gh/niccolomiranda/bulletproof/videos/D_Tob_Truffle.mp4"
                  : "https://cdn.jsdelivr.net/gh/niccolomiranda/bulletproof/videos/D_FAW_BlackGeo_Loop.mp4"
                } />
              </video>
              
              {/* Overlay Content */}
              <motion.div 
                className="overlay-content"
                initial={isMobileDevice ? { y: 100, opacity: 0 } : { opacity: 0 }}
                animate={isMobileDevice ? 
                  (hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }) :
                  (hoveredIndex === index ? { opacity: 1 } : { opacity: 0 })
                }
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <div className="content-wrapper">
                  <h3 className="brand-title">{videoContent[index].title}</h3>
                  <p className="brand-subtitle">{videoContent[index].subtitle}</p>
                  <p className="brand-description">{videoContent[index].description}</p>
                  <p className="case-study">{videoContent[index].caseStudy}</p>
                  <span className="cta-button">{videoContent[index].cta}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="celebrate-section">
        <h2 className="celebrate-heading">
          THINK,&nbsp;&nbsp; CREATE,&nbsp;&nbsp; CELEBRATE
        </h2>
        <div className="celebrate-grid">
          <div className="item item1">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800" alt="" />
          </div>
          <div className="item item2">
            <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800" alt="" />
          </div>
          <div className="item item3">
            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800" alt="" />
          </div>
          <div className="item item4">
            <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200" alt="" />
          </div>
        </div>
        <button className="load-btn">LOAD MORE IMAGES ↗</button>
      </section>

      <section className="timeline-section">
        <div className="timeline-heading">
          <h2>17 YEARS OF BRAND EXCELLENCE</h2>
          <p>
            From pioneering print innovations to 360° Digital Marketing,
            <br />
            our journey reflects our commitment to excellence.
          </p>
        </div>
        <div className="timeline">
          <div className="line"></div>
          <div className="timeline-item">
            <span className="year">2008</span>
            <div className="circle">
              <img src="https://ritzmediaworld.com/_next/image?url=%2Frmw-logo-sm-size.png&w=640&q=70" alt="" />
            </div>
            <h4>Foundation</h4>
            <p>Ritz Media World launched with a mission to reimagine brand communication for India's growing markets.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2012</span>
            <div className="circle">
              <img src="https://ritzmediaworld.com/_next/image?url=%2Fnew-about%2Fs7%2Fs7-r2-i2.png&w=1080&q=75" alt="" />
            </div>
            <h4>Innovation Leadership</h4>
            <p>Pioneered newspaper storytelling in Hindustan Times, setting new creative benchmarks for print.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2016</span>
            <div className="circle">
              <img src="https://ritzmediaworld.com/new-about-imgs/s7/brain.jpg" alt="" />
            </div>
            <h4>Digital Expansion</h4>
            <p>Scaled into 360° digital marketing, unifying performance, content and automation.</p>
          </div>
        </div>
      </section>

      <section className="awards-section">
        <h2 className="awards-heading">
          AWARDS & COMPANY <br />
          RECOGNITION
        </h2>
        <div className="awards-grid">
          <div className="award-card">
            <span className="award-year">2024</span>
            <button className="plus-btn">+</button>
            <div className="award-logo">
              <img src="" alt="" />
            </div>
            <h4>Best Creative Agency (Real Estate) in Delhi/NCR By Big FM</h4>
          </div>
          <div className="award-card active">
            <span className="award-year">2025</span>
            <button className="plus-btn">+</button>
            <div className="award-logo">
              <img src="" alt="" />
            </div>
            <h4>Best Creative Agency (Real Estate) in Delhi/NCR By Big FM</h4>
          </div>
          <div className="award-card">
            <span className="award-year">2024</span>
            <button className="plus-btn">+</button>
            <div className="award-logo">
              <img src="" alt="" />
            </div>
            <h4>Best Creative Agency (Real Estate) in Delhi/NCR By Big FM</h4>
          </div>
        </div>
        <div className="award-navigation">
          <button className="nav-btn">&#8592;</button>
          <button className="nav-btn">&#8594;</button>
        </div>
      </section>

      <section className="news-section">
        <div className="news-heading">
          <h2>HUSTLE <span>&</span> HEART</h2>
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipisicing elit, sed do ei...</p>
        </div>
        <div className="news-wrapper">
          <div className="news-image">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900" alt="" />
          </div>
          <div className="news-card">
            <h3>NEWS & <br />VIEWS</h3>
            <button>Linkedin ↗</button>
          </div>
          <div className="news-image">
            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=900" alt="" />
          </div>
          <div className="news-image grayscale">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900" alt="" />
          </div>
        </div>
        <div className="slider-dots">
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>
      </section>

      <section className="services-section">
        <div className="overlay"></div>
        <div className="services-content">
          <div className="row">
            <span>DIGITAL MARKETING</span>
            <span>CREATIVE SERVICE</span>
          </div>
          <div className="row">
            <span>PRINT ADVERTISEMENT</span>
            <span>RADIO ADVERTISEMENT</span>
          </div>
          <div className="row">
            <span>CONTENT MARKETING</span>
            <span>WEB DEVELOPMENT</span>
          </div>
          <div className="row">
            <span>INFLUENCER MARKETING</span>
            <span>CELEBRITY ENDORSEMENT</span>
          </div>
          <div className="row">
            <span>CREATIVE SERVICE</span>
            <span>PRINT ADVERTISEMENT</span>
          </div>
          <div className="row">
            <span>CELEBRITY ENDORSEMENT</span>
            <span>RADIO ADVERTISEMENT</span>
          </div>
          <div className="row">
            <span>INFLUENCER MARKETING</span>
            <span>DIGITAL MARKETING</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;