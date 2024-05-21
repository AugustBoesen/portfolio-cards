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
    text: 'From music festivals to LARP events.',
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
          src={'/eventsbg.jpg'}
          alt="bg1"
          fill
          quality={1}
          sizes="(100vw, 100vh)"
          className="-z-50 blur-3xl opacity-40"
        />
        <h1>EVENTS</h1>
        <p>
          Currently I have organized over 50+ different events with at least 15
          participants that can be regarded as project-based by organizational
          methods. This does not include freeform events, such as parties or
          get-togethers.
        </p>
        <p>
          I have done project coordination, webmastering and communications
          correspondency for events up to 800+ participants. Many of these
          projects have included planning, implementation and uptime in various
          forms. I also have experience in both non-profit and for-profit
          budgeting, merchandizing and recruitment.
        </p>
        <p>
          In past projects, I have gotten positive feedback regarding teamwork
          skills, communication and ability to extensively design project
          frameworks, such as boards, sheets and design documentation.
        </p>
      </section>
      <section className=" content-center mt-5">
        <Carousel
          showArrows={true}
          showIndicators={true}
          infiniteLoop={true}
          dynamicHeight={false}
          className=""
        >
          {eventsList.map((item) => (
            <div key={item.title} className="">
              <div className="border border-fuchsia-950 rounded-2xl">
                <Image
                  className="sm:min-h-[43rem] min-h-[20rem] object-cover opacity-80 rounded-2xl"
                  src={item.image}
                  width={1200}
                  height={800}
                  alt="slides"
                />
              </div>
              <div className="bg-black border-b border-fuchsia-950 border-x h-32 -mt-32 absolute w-full bg-opacity-80 rounded-b-2xl">
                <h3>{item.title}</h3>
                <p className="">{item.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </main>
  );
}
