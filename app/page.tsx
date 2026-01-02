import Hero from "@/components/hero";
import FeaturedQuiz from "@/components/featured-quiz";
import Description from "@/components/description";

import CourseCards from "@/components/cards";

export default function Home() {
  return (
    <main>
      <Hero />
      <CourseCards />
      <Description/>
    </main>
  );
}