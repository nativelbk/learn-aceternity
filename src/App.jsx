/** @format */

import ThreeDCardDemo from "./components/3dCar";
import { BackgroundGradientAnimationDemo } from "./components/Gradient";
import { HeroParallaxDemo } from "./components/Parallax";
// import { SparklesPreview } from "./components/SparklesPreview";

/** @format */
export default function App() {
  return (
    <>
      <ThreeDCardDemo />
      {/* <SparklesPreview /> */}
      <HeroParallaxDemo />
      <BackgroundGradientAnimationDemo />
    </>
  );
}
