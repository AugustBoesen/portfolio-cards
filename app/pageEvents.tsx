import { motion } from 'framer-motion';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const eventsList = [
  {
    title: 'Sports events',
    image: '/events/sotahuuto.jpg',
    text: 'Ranging from 20 to 800 participants and from leisure to competitive',
  },
  {
    title: 'Thematic festivities',
    image: '/events/entertainment.png',
    text: 'From music festivals to LARPs to LARP festivals.',
  },
  {
    title: 'Coaching events',
    image: '/events/coaching.jpeg',
    text: 'Bandcamps, workshops, webinaries and more.',
  },
];

export default function Events() {
  return (
    <main className="pageEvents">
      <section className="bg-gradient-to-br from-fuchsia-950 to-50% shadow-inner-2 border border-fuchsia-950">
        <Image
          src="/eventsbg.jpg"
          alt="bg1"
          fill
          quality={1}
          sizes="(100vw, 100vh)"
          className="-z-50 blur-3xl opacity-40"
        />
        <h1>EVENTS</h1>
        <p>
          <b>Currently I have organized</b> over 50+ different events with at
          least 15 participants that can be regarded as project-based by
          organizational methods. This does not include freeform events, such as
          parties or get-togethers.
        </p>
        <p>
          <b>I have done</b> project coordination, webmastering and
          communications correspondency for events up to 800+ participants. Many
          of these projects have included planning, implementation and uptime in
          various forms. I also have experience in both non-profit and
          for-profit budgeting, merchandizing and recruitment.
        </p>
        <p>
          <b>In past projects</b>, I have gotten positive feedback regarding
          teamwork skills, communication and ability to extensively design
          project frameworks, such as boards, sheets and design documentation.
          In addition to that I have gotten positive results from executing
          marketing strategies by producing effective content from{' '}
          <a
            className="text-base text-fuchsia-100 underline"
            href="https://sotahuuto.fi/tapahtumapaikka-ajankohta-2024/"
          >
            blog/newsletters
          </a>{' '}
          to{' '}
          <a
            className="text-base text-fuchsia-100 underline"
            href="https://www.dropbox.com/s/041z00enzadhmuh/GradiaMusiikin%20esittelyvideo.mp4?st=tkr6a2kh&dl=0"
          >
            {' '}
            infomercial videos
          </a>
          .
        </p>
      </section>
      <section className="content-center mt-5">
        <Carousel
          showArrows={true}
          showIndicators={true}
          infiniteLoop={true}
          dynamicHeight={false}
          className=""
        >
          {eventsList.map(({ title, image, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="border border-fuchsia-950 rounded-2xl">
                <Image
                  className="sm:min-h-[43rem] min-h-[20rem] object-cover opacity-80 rounded-2xl"
                  src={image}
                  width={1200}
                  height={800}
                  alt="slides"
                />
              </div>
              <div className="bg-black border-b border-fuchsia-950 border-x h-32 -mt-32 absolute w-full bg-opacity-80 rounded-b-2xl">
                <h3>{title}</h3>
                <p className="">{text}</p>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </section>
    </main>
  );
}
