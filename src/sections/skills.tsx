import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
export default function skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: "/icons/react.png",
        },
        {
          name: "Next.js",
          icon: "/icons/next-js.png",
        },
        {
          name: "Vue.js",
          icon: "/icons/vue.png",
        },

        {
          name: "TypeScript",
          icon: "/icons/typescript.png",
        },
        {
          name: "JavaScript",
          icon: "/icons/javascript.png",
        },
        {
          name: "HTML5",
          icon: "/icons/html5.png",
        },
        {
          name: "Tailwind CSS",
          icon: "/icons/tailwindcss.png",
        },
        {
          name: "shadcn/ui",
          icon: "/icons/shadcn-ui.png",
        },
        {
          name: "PNPM",
          icon: "/icons/pnpm.png",
        },
        {
          name: "Vite",
          icon: "/icons/vite.png",
        },
        {
          name: "Prettier",
          icon: "/icons/prettier.png",
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: "/icons/nodejs.png",
        },
        {
          name: "Nest.js",
          icon: "/icons/nest-js.png",
        },
        {
          name: "Express.js",
          icon: "/icons/express-js.png",
        },
        {
          name: "Prisma ORM",
          icon: "/icons/prisma.png",
        },
        {
          name: "MySQL",
          icon: "/icons/mysql.png",
        },

        {
          name: "Spring Boot (a lil' bit..)",
          icon: "/icons/springboot.png",
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Docker",
          icon: "/icons/docker.png",
        },
        {
          name: "Git",
          icon: "/icons/git.png",
        },
        {
          name: "Ubuntu",
          icon: "/icons/ubuntu.svg",
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: "/icons/typescript.png",
        },
        {
          name: "JavaScript",
          icon: "/icons/javascript.png",
        },
        {
          name: "Python",
          icon: "/icons/python.png",
        },
        {
          name: "Java",
          icon: "/icons/java.png",
        },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        {
          name: "macOS",
          icon: "/icons/macos.png",
        },
        {
          name: "VS Code",
          icon: "/icons/vscode.png",
        },
        {
          name: "Arc",
          icon: "/icons/arc.png",
        },
        {
          name: "Warp Terminal",
          icon: "/icons/warp.webp",
        },
        {
          name: "Postman",
          icon: "/icons/postman.svg",
        },
      ],
    },
    {
      title: "Visual",
      skills: [
        {
          name: "DaVinci Resolve",
          icon: "/icons/davinci-resolve.png",
        },
        {
          name: "Lightroom",
          icon: "/icons/lightroom.png",
        },
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-center gap-0 md:gap-5 md:px-6">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center ">
          <Image src={icon} alt={name} width={64} height={64} />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
