/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Image from 'next/image';

function currentAge() {
  const today = new Date();
  const birthday = new Date('1999-05-04');
  const timeDifference = today.getTime() - birthday.getTime();

  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.4375)
  );
  const days = Math.floor(
    ((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) %
      (1000 * 60 * 60 * 24 * 30.4375)) /
      (1000 * 60 * 60 * 24)
  );

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
  const bgImage = '/defaultbg.jpg';
  const cvImage1 = '/cv-picture1.jpg';
  const cvImage2 = '/cv-picture1.jpg';
  const currentAgeValue = currentAge();

  return (
    <main className='pageDefault'>
      <Image
        src={bgImage}
        alt='bg1'
        fill
        quality={1}
        className='-z-50 blur-3xl opacity-50'
      />
      <section className='bg-gradient-to-br from-slate-900 bg-opacity-10 shadow-inner-2 border border-slate-800'>
        <h1>{greeting}</h1>
        <p>
          My name is Severi. I'm a {currentAgeValue} years old sinewy savonian
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
        <div className='flex justify-center'>
          <Image
            src={cvImage1}
            alt='cv-picture1'
            width={420}
            height={500}
            className='blur-3xl opacity-70 absolute defaultpage-picture scale-75 md:scale-100 lg:mt-16 my-6'
          />
          <Image
            src={cvImage2}
            alt='cv-picture2'
            width={420}
            height={500}
            className='defaultpage-picture scale-75 md:scale-100 lg:mt-16 my-6'
            priority
          />
        </div>
      </section>
    </main>
  );
}
