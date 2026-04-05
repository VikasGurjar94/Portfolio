import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import ProjectsPage from "@/components/Projects/ProjectsPage";

export const metadata = {
  title: "Projects | Vikas Gurjar",
  description: "Explore all projects built by Vikas Gurjar — Full Stack Developer. MERN Stack, Next.js, and more.",
};

export default function Projects() {
  return (
    <div>
      <ResponsiveNav />
      <ProjectsPage />
    </div>
  );
}
