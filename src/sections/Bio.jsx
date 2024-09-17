import { Linkedin, AtSign, GitBranch } from "lucide-react";

const Bio = () => {
  return (
    <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md">
        <img 
        src="/me.png" 
        alt="Erin McKanna profile picture" 
        className="rounded-full w-32 h-32 mx-auto md:mx-0" 
        />
      <h1 className="text-lg md:text-2xl font-bold mt-3">Erin McKanna</h1>
      <p className="text-secondary-foreground py-2">
        I'm a Junior Full-Stack Engineer.
      </p>

      <div className="flex flex-row gap-2 mt-2">
        <a
          href="https://www.linkedin.com/in/erin-mckanna-8b0325228/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="text-blue-400 hover:text-blue-500 cursor-pointer" />
        </a>
        <a
          href="mailto:erin.d.mckanna@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AtSign className="text-pink-400 hover:text-pink-500 cursor-pointer" />
        </a>
        <a
          href="https://github.com/Zyndrr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitBranch className="text-red-400 hover:text-red-500 cursor-pointer" />
        </a>
      </div>
    </section>
  );
};

export default Bio;
