
import { motion } from "framer-motion";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
