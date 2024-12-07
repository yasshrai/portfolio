import Image ,{StaticImageData}from "next/image";

interface ProjectCardProps {
  image: StaticImageData | string; 
  title: string;
  description: string; 
  link: string; 
}

export default function ProjectCard({ image, title, description, link }:ProjectCardProps) {
  return (
    <div className="card bg-base-100 w-80 md:w-96 h-[30rem] md:h-[28rem] shadow-2xl hover:outline outline-2  outline-indigo-950 hover:shadow-2xl hover:shadow-violet-950">
      <figure>
        <Image src={image} alt={title} />
      </figure>
      <div className="card-body bg-neutral-950 opacity-95 text-white">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Project Link</button>
          </a>
        </div>
      </div>
    </div>
  );
}
