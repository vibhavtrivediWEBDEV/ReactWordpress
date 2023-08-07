import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import "./gsap.css";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Architecto aliquam', 
    subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.'
  },
  {
    title: 'Ceritatis placeat', 
    subtitle: 'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?'
  },
  {
    title: 'Vitae voluptates', 
    subtitle: 'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.'
  }
];

const Gsap = () => {
  const [background, setBackground] = useState('#262626');
  const headerRef = useRef(null);
  const sectionRefs = useRef([]);

  const toggleBackground = () => {
    const color = background !== '#262626' ? '#262626' : '#1b4943';
    setBackground(color);
  };

  useEffect(() => {
    const headerElement = headerRef.current;
    gsap.to(headerElement, {
      scale: 0.5, // Adjust the scale value as desired
      scrollTrigger: {
        trigger: headerElement,
        scrub: true,
        start: "top top",
        end: "bottom top",
      },
    });

    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          scale: 0.3, // Adjust the initial scale value
          opacity: 0,
        },
        {
          scale: 1, // Adjust the final scale value
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            delay:index+1,
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
        <button onClick={() => toggleBackground()}>Change background</button>
        <p>Scroll down to see sections being revealed by ScrollTrigger.</p>
      </header>
      <main className="App-main">
        {sections.map(({ title, subtitle }, index) => (
          <div
            className="App-section"
            key={title}
            ref={addToRefs}
            style={{ transform: "scale(0.5)", opacity: 0 }}
          >
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Gsap;
