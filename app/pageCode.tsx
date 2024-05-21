/* eslint-disable react/no-unescaped-entities */
import { color, motion } from 'framer-motion';
import Image from 'next/image';

const skillSet1 = [
  {
    name: 'HTML',
    image: '/skillsetlogos/html.png',
    color: '#d50000',
    level: 9,
  },
  {
    name: 'CSS',
    image: '/skillsetlogos/css.png',
    color: '#1976d2',
    level: 10,
  },
  {
    name: 'JS/TS',
    image: '/skillsetlogos/js.png',
    color: '#ffa000',
    level: 8,
  },
  {
    name: 'Python',
    image: '/skillsetlogos/python.png',
    color: '#f57f17',
    level: 3,
  },
  {
    name: 'C#',
    image: '/skillsetlogos/csharp.png',
    color: '#673ab7',
    level: 2,
  },
];

const skillSet2 = [
  {
    name: 'VSCode',
    image: '/skillsetlogos/vscode.png',
    color: '#d4d4d4',
  },
  {
    name: 'React',
    image: '/skillsetlogos/react.png',
    color: '#80deea',
  },
  {
    name: 'Next.js',
    image: '/skillsetlogos/nextjs.png',
    color: '#f5f5f5',
  },
  {
    name: 'Angular',
    image: '/skillsetlogos/angular.png',
    color: '#dd2c00',
  },
  {
    name: 'Svelte',
    image: '/skillsetlogos/svelte.png',
    color: '#ff3e00',
  },
  {
    name: 'Tailwind CSS',
    image: '/skillsetlogos/tailwind.png',
    color: '#00bcd4',
  },
  {
    name: 'Docker',
    image: '/skillsetlogos/docker.png',
    color: '#81d4fa',
  },
  {
    name: 'Figma',
    image: '/skillsetlogos/figma.webp',
    color: '#f7f7f7',
  },
  {
    name: 'Node.js',
    image: '/skillsetlogos/node.png',
    color: '#388e3c',
  },
  {
    name: 'GitHub',
    image: '/skillsetlogos/github.png',
    color: '#f5f5f5',
  },
  {
    name: 'Godot',
    image: '/skillsetlogos/godot.webp',
    color: '#607d8b',
  },
  {
    name: 'Blender',
    image: '/skillsetlogos/blender.png',
    color: '#ff9800',
  },
  {
    name: 'WordPress',
    image: '/skillsetlogos/wordpress.png',
    color: '#b0bec5',
  },
  {
    name: 'MongoDB',
    image: '/skillsetlogos/mongodb.png',
    color: '#388e3c',
  },
  {
    name: 'MySQL',
    image: '/skillsetlogos/mysql.webp',
    color: '#b2dfdb',
  },
];
export default function Code() {
  return (
    <main className="pageCode">
      <Image
        src={'/codebg.jpg'}
        alt="bg1"
        fill
        quality={1}
        sizes="(100vw, 100vh)"
        className="-z-50 blur-3xl opacity-20"
      />
      <section className="bg-gradient-to-br from-emerald-950 to-70% shadow-inner-2 border border-emerald-950">
        <h1>CODE</h1>
        <p>
          I am currently studying Business Information Technology at JAMK. My
          current studies consist of learning fullstack, but I have specialized
          in frontend and design.
        </p>
        <p>
          I'm a native Javascript/Typescript developer with a strong
          understanding of several frameworks and basic software architecture.
          This particular website has been built with Next.js using Tailwind
          CSS, Framer Motion and some additional react components. Excluding the
          carousel component in the events section, everything is self-made.
        </p>
        <p>
          In addition to my studies, I have done personal research in game
          development through Godot. I also have gone through basics of some
          other coding languages in order to understand them better. I am
          relatively quick at learning new concepts and technologies if needed.
        </p>
      </section>
      <section>
        <h2>Primary skills</h2>
        <div className="bg-black bg-opacity-10">
          {skillSet1.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center my-4 ml-5  "
              style={{ color: skill.color }}
            >
              <div className="ml-2 w-full bg-gray-800 h-4 max-w-[70%]">
                <div
                  className={`-ml-2 inset-1 text-right h-4 skew-x-[-32deg]`}
                  style={{
                    width: `${skill.level * 10}%`,
                    backgroundColor: skill.color,
                  }}
                >
                  <p className="absolute text-white -top-5 w-full bg-none text-center skew-x-[32deg] select-none">
                    {skill.level}
                  </p>
                </div>
              </div>
              <Image
                src={skill.image}
                width={50}
                height={50}
                alt={skill.name}
                className="w-8 h-8 ml-2 rounded"
              />
              <div className="ml-2 select-none">{skill.name}</div>
            </div>
          ))}
        </div>
        <h2>Utility skillset</h2>
        <div className="grid 2xl:grid-cols-4 grid-cols-3 mb-12 bg-black bg-opacity-10">
          {skillSet2.map((skill) => (
            <div
              key={skill.name}
              style={{ color: skill.color }}
              className="flex sm:justify-normal justify-center m-2 py-2 bg-white bg-opacity-10 rounded hover:bg-opacity-20 transition-all duration-300"
            >
              <Image
                src={skill.image}
                width={50}
                height={50}
                alt={skill.name}
                className="w-12 h-12 ml-2 rounded"
              />
              <div className=" sm:block hidden mx-2 bg-black text-center w-full bg-opacity-10 rounded content-center select-none">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
