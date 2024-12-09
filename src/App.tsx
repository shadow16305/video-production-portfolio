import "./App.css";
import { About } from "./components/about";
import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero";
import { MainNavigation } from "./components/main-navigation/main-navigation";
import { Presentation } from "./components/presentation/presentation";
import { Projects } from "./components/projects/projects";
import { Rates } from "./components/rates";
import { Reviews } from "./components/reviews/reviews";
import { VideoTypes } from "./components/video-types/video-types";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <main className="size-full">
      <MainNavigation />
      <Hero />
      <Presentation />
      <Projects />
      <VideoTypes />
      <About />
      <Reviews />
      <Rates />
      <Footer />
      <Toaster />
    </main>
  );
}

export default App;
