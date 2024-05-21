/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const cardData = [
  {
    title: 'Electronic Dance',
    link: 'https://example.com/card1',
    image: '/edm.jpg',
    description: 'A 3-piece 2010s EDM EP on spotify',
  },
  {
    title: 'Modern Folk',
    link: 'https://example.com/card1',
    image: '/folk.png',
    description: 'Traditional folk elements with modern rhythm',
  },
  {
    title: 'Modern pop',
    link: 'https://example.com/card1',
    image: '/pop.png',
    description: 'Music for the masses with modern quality',
  },
  {
    title: 'Ghibli-esque',
    link: 'https://example.com/card1',
    image: '/ghibli.png',
    description: 'A more classical take with, inspired by Joe Hisaishi',
  },
  {
    title: 'Music for visuals',
    link: 'https://example.com/card1',
    image: '/jazz.png',
    description: 'An entirely self-made 3D music video',
  },
  {
    title: 'Commissions',
    link: 'https://example.com/card1',
    image: '/commission.png',
    description: 'Commissional pieces,  mixing & mastering',
  },
];

export default function Music() {
  return (
    <main className="pageMusic">
      <Image
        src={'/musicbg.jpg'}
        alt="bg1"
        fill
        quality={1}
        sizes="(100vw, 100vh)"
        className="-z-50 blur-3xl opacity-30"
      />
      <section className="bg-gradient-to-br from-cyan-950  to-50% shadow-inner-2 border border-cyan-950">
        <h1>MUSIC</h1>
        <p>
          I started producing music early in 2014, initially doing an internship
          for a video game company. After that, I've gone to a high school of
          arts, attained a vocational qualification in music and went on to
          produce all kinds of tracks. My major instruments have been keys and
          drums, but I've dabbled on many others over the course of these years.
        </p>
        <p>
          I specialize in virtual instrumentation and ambiental sound design. My
          portfolio may suggest on genre specialty, but modern folk, pop and EDM
          have always been my main focuses.
        </p>
        <p>
          In addition to full tracks, I have also done commissional work no
          mixing, mastering and video production assistance.
        </p>
      </section>
      <section>
        {cardData.map((card) => (
          <div
            className="music-card"
            key={card.title}
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            <div className=" z-10 bg-black bg-opacity-60 md:w-[30rem] pl-6 pt-2 blur-none">
              <a href={card.link}>{card.title}</a>
              <p className="border-t mr-4 pb-4">{card.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
