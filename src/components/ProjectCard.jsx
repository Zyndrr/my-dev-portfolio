import { ChevronRight } from "lucide-react";

const ProjectCard = ({ name, description, url, repo, imgUrl }) => {
  return (
    <a
      className="flex border-b py-8 px-2 rounded-md gap-4 group/item hover:bg-slate-100 mt-1"
      href={url}
    >
      <img
        src={imgUrl}
        alt={name}
        height="50"
        width="50"
        className="object-contain"
      />
      <div className="flex flex-col flex-grow">
        <p className="group-hover/item:text-primary text-xl font-semibold">
          {name}
        </p>
        <p className="card-description text-secondary-foreground">{description}</p>
      </div>
      <div>
        <ChevronRight />
      </div>
    </a>
  );
};

export default ProjectCard;
