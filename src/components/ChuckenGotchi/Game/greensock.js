import { TimelineLite, Power2 } from "gsap";

const baseDuration = 1;

export function scudCloud(cloud, callback) {
  const timeline = new TimelineLite();
  timeline.set(cloud, {
    scale: 2
  });
  timeline.to(cloud, baseDuration * 1, {
    scale: 0.8,
    ease: Power2.easeOut,
    onComplete: callback
  });
}
