import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import ContactSection from "./components/ContactSection";
import AttributionCard from "./components/AttributionCard";
import CyberBackground from "./components/CyberBackground";
import ScrollReveal from "./components/ScrollReveal";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import {
  getProfiles,
  getProjects,
  getSkills,
  getExperiences,
  getEducations,
  getAttributions,
} from "./services/api";

import type {
  Profile,
  Project,
  Skill,
  Experience,
  Education,
  Attribution,
} from "./types";

function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [attributions, setAttributions] = useState<Attribution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          profilesData,
          projectsData,
          skillsData,
          experiencesData,
          educationsData,
          attributionsData,
        ] = await Promise.all([
          getProfiles(),
          getProjects(),
          getSkills(),
          getExperiences(),
          getEducations(),
          getAttributions(),
        ]);

        if (profilesData.length > 0) {
          setProfile(profilesData[0]);
        }
        setProjects(projectsData);
        setSkills(skillsData);
        setExperiences(experiencesData);
        setEducations(educationsData);
        setAttributions(attributionsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-black flex items-center justify-center text-neon-cyan text-2xl font-mono animate-pulse">
        INITIALIZING SYSTEM...
      </div>
    );
  }

  return (
    <ThemeProvider>
      <AppContent
        profile={profile}
        projects={projects}
        skills={skills}
        experiences={experiences}
        educations={educations}
        attributions={attributions}
      />
    </ThemeProvider>
  );
}

function AppContent({
  profile,
  projects,
  skills,
  experiences,
  educations,
  attributions,
}: {
  profile: Profile | null;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  educations: Education[];
  attributions: Attribution[];
}) {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen font-sans selection:bg-neon-pink selection:text-white overflow-hidden relative transition-colors duration-500 ${
        isDark ? "bg-cyber-black text-gray-300" : "bg-white text-gray-800"
      }`}
    >
      <CyberBackground />

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* 🚀 Hero Section (Profile) */}
        <ScrollReveal direction="fade" className="container mx-auto px-4 py-20">
          {profile && <ProfileCard profile={profile} />}
        </ScrollReveal>

        <main className="container mx-auto px-4 space-y-32 mb-20 flex flex-col items-center">
          {/* 💻 Projects Section */}
          <ScrollReveal direction="up" className="w-full max-w-600 px-4">
            <h2
              className={`text-4xl font-black text-center mb-16 uppercase tracking-tighter ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <span className={isDark ? "text-neon-pink" : "text-pink-600"}>
                System.
              </span>
              run(
              <span className={isDark ? "text-neon-cyan" : "text-cyan-700"}>
                "Projects"
              </span>
              )
            </h2>
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </ScrollReveal>

          {/* 🛠️ Skills Section */}
          <ScrollReveal direction="up" delay={200} className="w-full max-w-7xl">
            <h2
              className={`text-4xl font-black text-center mb-16 uppercase tracking-tighter ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <span className={isDark ? "text-neon-pink" : "text-pink-600"}>
                Load.
              </span>
              modules(
              <span className={isDark ? "text-neon-cyan" : "text-cyan-700"}>
                "Skills"
              </span>
              )
            </h2>
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </ScrollReveal>

          {/* 📜 Experience & Education Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl">
            {/* Experience */}
            <ScrollReveal
              direction="left"
              className="flex flex-col items-center"
            >
              <h2
                className={`text-3xl font-bold mb-10 uppercase tracking-widest border-b pb-4 w-full text-center ${
                  isDark
                    ? "text-neon-purple border-gray-800"
                    : "text-purple-700 border-gray-300"
                }`}
              >
                Experience_Log
              </h2>
              <div className="space-y-8 w-full flex flex-col items-center">
                {experiences.map((exp) => (
                  <ExperienceCard
                    key={`${exp.company}-${exp.title}`}
                    experience={exp}
                  />
                ))}
              </div>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal
              direction="right"
              className="flex flex-col items-center"
            >
              <h2
                className={`text-3xl font-bold mb-10 uppercase tracking-widest border-b pb-4 w-full text-center ${
                  isDark
                    ? "text-neon-purple border-gray-800"
                    : "text-purple-700 border-gray-300"
                }`}
              >
                Education_Database
              </h2>
              <div className="space-y-8 w-full flex flex-col items-center">
                {educations.map((edu) => (
                  <EducationCard
                    key={`${edu.institution}-${edu.degree}`}
                    education={edu}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* 📬 Contact Section */}
          <ScrollReveal direction="up" delay={100} className="max-w-4xl w-full">
            <ContactSection />
          </ScrollReveal>
        </main>

        {/* 👣 Footer */}
        <ScrollReveal direction="fade" className="w-full">
          <footer
            className={`py-12 border-t w-full transition-colors duration-500 ${
              isDark
                ? "bg-black border-gray-900"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="container mx-auto px-4 text-center">
              <p
                className={`mb-4 font-mono text-sm ${
                  isDark ? "text-gray-600" : "text-gray-500"
                }`}
              >
                © {new Date().getFullYear()} PORTFOLIO_SYSTEM. ALL RIGHTS
                RESERVED.
              </p>

              {attributions.length > 0 && (
                <div
                  className={`mt-8 pt-8 border-t ${
                    isDark ? "border-gray-900" : "border-gray-300"
                  }`}
                >
                  <h4
                    className={`text-xs uppercase tracking-widest mb-4 ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Attributions
                  </h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    {attributions.map((attr) => (
                      <AttributionCard key={attr.name} attribution={attr} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </footer>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default App;
