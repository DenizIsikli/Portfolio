import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";

// Components
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

// Skeleton grid
import { SkeletonGrid } from "./components/ui/skeleton";

// Lazy-loaded sections
const Experience = React.lazy(() => import("./components/Experience"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Education = React.lazy(() => import("./components/Education"));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Deniz Isikli - Software Engineer</title>

        <meta
          name="description"
          content="Deniz Isikli — Software Engineering student at DTU. Experience in C++, Python, .NET, and full-stack development. Explore projects, experience, and skills."
        />

        <meta
          name="keywords"
          content="Deniz Isikli, portfolio, software engineer, DTU, C++, Python, .NET, React, student developer"
        />

        <meta name="author" content="Deniz Isikli" />

        {/* Open Graph */}
        <meta property="og:title" content="Deniz Isikli Portfolio" />
        <meta
          property="og:description"
          content="Software Engineering student at DTU. Explore projects, experience, and skills."
        />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Deniz Isikli",
            "jobTitle": "Software Engineering Student",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Technical University of Denmark"
            },
            "knowsAbout": ["C++", "Python", ".NET", "React", "SQL", "Docker"],
            "sameAs": [
              "https://github.com/DenizIsikli",
              "https://www.linkedin.com/in/deniz-isikli/"
            ]
          }
        `}</script>
      </Helmet>

      {/* Layout */}
      <Header />
      <div className="main-content">
        <About />

        <Suspense
          fallback={
            <div className="container py-16">
              <SkeletonGrid count={6} />
            </div>
          }
        >
          <Experience />
          <Skills />
          <Projects />
          <Education />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;
