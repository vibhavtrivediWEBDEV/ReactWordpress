import React, { useLayoutEffect, useRef } from "react";
import { ScrollScene } from "scrollscene";
import { gsap } from "gsap";
import lottie from "lottie-web";
import memojiJSON from "./data.json";


export default props => {
    const MemojiRef = useRef(null);
    const MemojiContainerRef = useRef(null);

    const tl = gsap.timeline({ paused: true });

    const handleclick =()=>{
    tl.reverse()
    }
    useLayoutEffect(() => {
      if (MemojiRef === null && MemojiContainerRef === null) {
        return;
      }
  
      const AnimOptions = {
        container: MemojiRef.current,
        renderer: "canvas",
        loop: false,
        autoplay: false,
        animationData: memojiJSON
      };
      const anim = lottie.loadAnimation(AnimOptions);
      
  
      tl.to({ frame: 0 }, 3, {
        frame: anim.totalFrames - 1,
        onUpdate: () => {
          anim.goToAndStop(Math.round(tl.progress() * 85), true);
        },
        ease: "power2.out"
      });
  
      const scrollScene = new ScrollScene({
        triggerElement: MemojiContainerRef.current,
        triggerHook: 0,
        offset: 0,
        duration: "400%",
        gsap: {
          timeline: tl
        }
      });
  
      return () => {
        // scrollScene.reverse();
        tl.reverse()
      };
    }, []);
    return (
   <>
       <div ref={MemojiContainerRef} id="MemojiContainerRef">
        <div ref={MemojiRef} />
      </div>

   </>
    );
  };
  