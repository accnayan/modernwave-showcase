
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
