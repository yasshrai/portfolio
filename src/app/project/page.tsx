import ProjectCard from "./ProjectCard";
import chatappimage from "@/app/assets/chatappbg.jpg";
import bookstorebg from "@/app/assets/bookstorebg.png";
import adminpanelbg from "@/app/assets/adminpanel.jpg";

const projects = [
  {
    image: chatappimage,
    title: "Chat Application",
    description:
      "A chat app built with MongoDB, Express.js, React, Node.js enables real-time messaging and user authentication with dynamic UI updates.",
    link: "https://chatapp-project-57sf.onrender.com",
  },
  {
    image: bookstorebg,
    title: "Book Store",
    description:
      "A bookstore inventory management system built with the MERN stack allows for efficient tracking of book stock with a user-friendly interface and real-time updates.",
    link: "https://bookstore-frontend-76df.onrender.com/",
  },
  {
    image: adminpanelbg,
    title: "College Admin Panel",
    description:
      "A college admin panel built with Next.js and Express.js provides a dynamic and efficient interface for managing student records, courses, and faculty data, featuring secure authentication and real-time updates.",
    link: "https://collegeadminpanel.vercel.app",
  },

];

export default function Project() {
  return (
    <div className="bg-zinc-950 h-[240vh] md:h-[90vh] w-full ">
      <div className="flex flex-col md:flex-row justify-center md:gap-5 md:p-5 gap-20 mt-10 items-center ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
