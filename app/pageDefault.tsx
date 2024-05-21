/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Image from 'next/image';

function currentAge() {
  const birthday = new Date('1999-05-04');
  const today = new Date();
  let years = today.getFullYear() - birthday.getFullYear();
  let months = today.getMonth() - birthday.getMonth();
  let days = today.getDate() - birthday.getDate();

  // Check if the current month and day are before the birthday month and day
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  // Check if the current day is before the birthday day
  if (days < 0) {
    months--;
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      0
    );
    days = previousMonth.getDate() + days;
  }

  return years;
}

let greetings = [
  'Good morning, early bird!',
  'Good day, friend!',
  'Good evening, night owl!',
];

let greeting = '';

if (new Date().getHours() < 10 && new Date().getHours() >= 6) {
  greeting = greetings[0];
}
if (new Date().getHours() >= 10 && new Date().getHours() < 18) {
  greeting = greetings[1];
}
if (new Date().getHours() >= 18 || new Date().getHours() < 6) {
  greeting = greetings[2];
}

export default function Default() {
  return (
    <main className="pageDefault">
      <Image
        src={'/defaultbg.jpg'}
        alt="bg1"
        fill
        quality={1}
        sizes="(100vw, 100vh)"
        className="-z-50 blur-3xl opacity-50"
      />
      <section className=" bg-gradient-to-br from-slate-900  bg-opacity-10 shadow-inner-2 border border-slate-800">
        <h1>{greeting}</h1>
        <p>
          My name is Severi. I'm a {currentAge()} years old sinewy savonian
          fellow with a passion to create and improve.
        </p>
        <p>
          I'm an avid producer of music, a student of code and an experienced
          coordinator of events. You being here might be because you are looking
          for something along those lines. In this website, you can take a look
          at what I've been up to during the course of my life.
        </p>
        <p>
          Feel free to look around and, from the bottom right corner, shoot a
          message my way if anything piqued your interest!
        </p>
      </section>
      <section>
        <div className="flex justify-center">
          <Image
            className=" blur-3xl opacity-70 absolute defaultpage-picture scale-75 md:scale-100 lg:mt-16 my-6"
            src="/cv-picture1.jpg"
            alt="cv-picture1"
            width={420}
            height={500}
          />
          <Image
            className="defaultpage-picture scale-75 md:scale-100  lg:mt-16 my-6"
            src="/cv-picture1.jpg"
            alt="cv-picture2"
            width={420}
            height={500}
          />
        </div>
      </section>
    </main>
  );
}
