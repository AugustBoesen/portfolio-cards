import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Ticorporate: NextPage = () => {
  return (
    <div className='lg:px-80 text-left z-[5000] absolute bg-black w-screen'>
      <h1>TICORPORATE | PORTFOLIO</h1>
      <Image
        className=' mx-auto'
        src={'/packyiconsmall.webp'}
        alt='packyicon'
        width={275}
        height={275}
      />
      <h1 className='text-teal-500 font-bold mb-16 text-center'>PACKY</h1>
      <div className='bg-cyan-950 bg-opacity-30 px-4'>
        <h2 className='text-teal-300 mt-16'>Projektin yleiskuva</h2>
        <p className=''>
          <b>PACKY on erityisesti</b> aloitteleville sovelluskehittäjille
          suunnattu apu/työkalusovellus, joka tarjoaa teknologiaratkaisuja
          käyttäjän preferenssien sekä tarpeiden mukaan.
        </p>
        <p>
          <b>Alkuperäinen visio</b> toteutettiin vuoden 2024 keväällä Software
          Engineering-opintojakson lopputyönä, jolloin tiimi koostui pitkälti
          eri jäsenistä ja sovelluksen visio oli teknisen sekä käytännön
          toteutuksen suhteen erilainen.
        </p>
        <h3>Roolini projektissa</h3>
        <p>
          <b>Syksyn aikana pääasialliset</b> roolini olivat tuoteomistaja sekä
          UI/UX-kehittäjä. Tuoteomistajan roolissa kehitin sovelluksen vision,
          olin merkittävässä roolissa sen sovellusarkkitehtuurisissa
          ratkaisuissa ja ylläpidin projektin oikeansuuntaista etenemistä. UI:n
          sekä UX:n suunnittelussa käytin Figma-työkalua, implementoinnissa
          Tailwind CSS-kirjastoa ja näiden lisäksi komponenttien animoimiseen
          Framer Motion-kirjastoa.
        </p>
        <Image
          className='mx-auto shadow-inner pb-6 mt-2 border border-slate-800'
          src={'/ticorporate/grid.png'}
          alt='css'
          width={500}
          height={500}
        />
      </div>
      <div className='bg-teal-950 bg-opacity-30 px-4'>
        <h2 className='text-cyan-300 mt-16'>Ennen projektia</h2>
        <p>
          <b>Koska PACKY oli jo prototypioitu</b> kevään opintojaksossa, sen
          perustat olivat todettu toimiviksi. Ajatuksena oli jatkokehittää sen
          potentiaalia aputyökaluna opintojaan suorittaville
          sovelluskehittäjille (esimerkiksi 1. vuoden tietojenkäsittelyn
          opiskelijoille).
        </p>
        <h3>Lähtötaidot</h3>
        <p>
          <b>Ennen Ticorporate-toteutusta</b> osasin suunnitella, toteuttaa ja
          soveltaa UI/UX-puolta mielestäni ammattitasoisesti.
          Sovelluskehitysprojektista tiimitasolla oli vain kevään Software
          Engineering-opintojakson verran aiempaa kokemusta, joten työskentely
          pitkäjänteisesti yhden sovelluksen parissa tuli uutena. En projektin
          alussa tiennyt, miten hahmotella sovelluskehitysprosessin vaiheita
          tällä skaalalla ja halusin oppia paljon tähän liittyviä metodeja.
        </p>
        <h3>Visio</h3>
        <p>
          <b>PACKYN visio oli yksinkertainen</b>, mutta monivaiheinen ja
          skaalaltaan mittava. Sovellusta toteuttaessa halusin ottaa huomioon
          sen, miten käyttäjäpolku strukturoituu, sillä hypoteettisena
          jatkokehityksenä tietokantamuutoksilla halusin olevan mahdollista
          sisällyttää myös muita sovelluskehityksen osa-alueita
          web-sovelluskehityksen lisäksi. Esimerkiksi uudella
          tietokantakokonaisuudella PACKY voisi antaa ohjeistusta aloitteleville
          pelinkehittäjille.
        </p>
        <Image
          className='mx-auto shadow-inner pb-6 mt-2 border border-slate-800'
          src={'/ticorporate/figma.png'}
          alt='css'
          width={500}
          height={500}
        />
      </div>
      <div className='bg-blue-950 bg-opacity-30 px-4'>
        <h2 className='text-blue-300 mt-16'>Projektin aikana</h2>
        <p>
          <b>Projektin aikana suuri osa</b> (n. 75%) oli UI/UX-työskentelyä tai
          frontend-toteutusta. Koodin lisäksi käytin aikaa projektin visiointiin
          (käyttäjäpolun iterointiin), dokumentaatioon (GitHubin README:n
          kirjoittamiseen) ja TiCorporaten muihin puoliin (Business
          Basics-työstö).
        </p>
        <h3>Suunnittelu</h3>
        <p>
          <b>Suunnittelu toteutui pitkälti</b> kolmella eri painopisteellä.
          Software Engineering-opintojaksolla sovellusta oltiin päästy
          prototypioimaan ja tämän pohjalta jatkokehittämään. Tämän
          jatkokehityksen ollessa ensimmäisessä demossa valmis uudistimme
          palautteen perusteella sovelluksen toimivuuden. Tämän jälkeen
          suunnittelu tapahtui tiimin kesken ja koski pitkälti sovelluksen
          struktuuria sekä toteutuksellisia valintoja esimerkiksi funktioissa ja
          tilanhallinnallisissa ratkaisuissa.
        </p>
        <h3>Toteutus</h3>
        <p>
          <b>Projektissa työstöni voidaan jakaa</b> karkeasti kolmeen osaan.
          Osuuteni tuoteomistajana oli varmistaa, että projekti toteutuu
          visiolleen uskollisesti. Tämä vaati suunnittelua sekä hahmottelua
          tiimin kanssa kommunikoiden. UI/UX-suunnittelijana suunnittelin sekä
          implementoin sovelluksen ulkomuodon kokonaisuudessaan - olin vastuussa
          komponenttien järjestyksestä, siitä miltä kaikki näyttää ja miten
          design ilmenee koodissa.
        </p>
        <p>
          <b>Näiden kahden lisäksi</b> toteutin kolmantena sovelluksen
          frontendiä yhdessä muiden tiimiläisten kanssa. Esimerkiksi sovelluksen
          käyttäjäpolussa toinen vaihe (grid-näkymä, jossa featuret valitaan) on
          omaa käsialaani, sillä myös UI-design-perspektiivistä koin tärkeäksi
          sen toteuttamisen juuri siinä muodossa, jollaisena se
          nykymuodossaankin toimii.
        </p>
        <Image
          className='mx-auto shadow-inner pb-6 mt-2 border border-slate-800'
          src={'/ticorporate/css.png'}
          alt='css'
          width={500}
          height={500}
        />
      </div>
      <div className='bg-purple-950 bg-opacity-30 px-4'>
        <h2 className='text-purple-300 mt-16'>Projektin jälkeen</h2>
        <p>
          <b>PACKYn työstö oli minulle henkilökohtaisesti</b> monelta
          osinvalaisevaa ja työstön päätteeksi olen tyytyväinen annettuun
          panokseen niin omalta kuin koko tiimin osalta. Henkilökohtainen
          näkemykseni on, että työpanos jakautui todella hyvin ja jokaisen
          henkilökohtaisen osaamisen/kokemustason osilta olimme jopa onnekkaita.
        </p>
        <h3>Osaamisen nykytilanne</h3>
        <p>
          <b>Vaikka TiCorporate ei antanut</b> minulle UI/UX-toteuttamisen
          osilta juurikaan mitään uutta, otan sen pitkäjänteisen työstämisen
          silti oppimiskokemuksena itseisarvoisesti. Eniten opin
          projektityöstöstä, sen vaiheistamisesta, tämänkokoisen projektin
          teknologioiden skaalasta sekä monesta huomionarvoisesta asiasta, kuten
          tilanhallinnasta, joista en aiemmin omannut juurikaan kokemusta tai
          ymmärrystä.
        </p>
        <h3>Itsereflektio</h3>
        <p>
          <b>TiCorporate-työpanokseni tuntimäärällisesti</b> oli noin 340
          työtuntia. Kipeänä olin syksyn aikana noin 8 arkipäivää, mikä
          tarkoittaa karkeasti noin 40 työtuntia. Omien opintojeni lisäksi olen
          ollut aktiivina sekä loppuvuodesta myös hallituslaisena JAMKO:ssa
          tähän kulunut aika on kokonaisuudessaan myös noin 45 työtuntia. Näiden
          lisäksi voidaan laskea noin 5 yksittäistä päivää (esimerkiksi
          Kauppakadun Approjen jälkeinen perjantai), jolloin pidimme tiimin
          kesken yhteisesti sovittuna vapaapäivän.
        </p>
        <p>
          Olen hyvin tyytyväinen antamaani panokseen ja koen tehneeni oman
          osuuteni esimerkillisesti. Myös aihiot, joita tulin opettelemaan
          TiCorporateen esimerkiksi projektityöstön suhteen, toteutuivat
          mielestäni todella hyvin. Olen tyytyväinen kädenjälkeeni sovelluksen
          ulkomuodossa ja näen siinä myös edelleen jatkokehitysideoita, joiden
          avulla pidemmällä aikavälillä voisin parannella nykyistä mallia.
        </p>
        <p>
          Kehittäisin työstössäni omaa kärsivällisyyttäni muiden kanssa
          työskennellessä ja parantaisin omaa kommunikointiani. Henkilökohtaisen
          jaksamisen suhteen voisin tauottaa työskentelyäni tasavälisemmin ja
          pyytämään aina tarvittaessa apua työkavereilta. Näiltä osin ei ollut
          ongelmia, mutta näen en jatkuvan kehityksen kohteina.
        </p>
        <h3>Tulevaisuus</h3>
        <p>
          <b>PACKYn jälkeen koen</b> olevani avoimempi tekemään työkseni
          UI/UX:ää tulevaisuudessa. Olen edelleen myös kiinnostunut
          sovellusarkkitehtuurista sekä fullstack-työstämisestä, joiden saralla
          olen edelleen asennoitunut työskentelemään korkeamman palkkatason
          vuoksi, mutta mahdollisuuksien mukaan aion ylläpitää omia
          design-taitojani, laajentaa ymmärrystäni ja mahdollisesti käyttää myös
          tätä vahvuusaluetta hyödykseni tulevaisuudessa, kun haen töitä.
        </p>
        <p className='pb-16'>
          <b>TiCorporaten myötä olen</b> myös alkanut pohtimaan
          opinnäytetyöaiheita, sillä UI/UX voisi olla itselleni hyvinkin
          mieleinen aihealue. Vaihtoehtoisesti voisin perehtyä esimerkiksi
          sovelluskehysten välisiin eroihin, hyödynnettäviin painopisteisiin tai
          laajemmalla skaalalla teknologiapinojen suunnitteluun sekä
          huomionarvoisiin kohtiin.
        </p>
      </div>
      <div className='flex justify-evenly w-full py-4 bg-slate-950 border-x border-slate-800'>
        <Link
          className='border w-full text-center border-teal-500 bg-teal-950 bg-opacity-80 py-2 mx-1 rounded-2xl'
          href='/'
        >
          Etusivulle
        </Link>
        <Link
          className='border w-full text-center border-teal-500 bg-teal-950 bg-opacity-80 py-2 mx-1 rounded-2xl'
          href='https://jamk-packy.netlify.app/'
          target='_blank'
        >
          Sovellus
        </Link>
        <Link
          className='border w-full text-center border-teal-500 bg-teal-950 bg-opacity-80 py-2 mx-1 rounded-2xl'
          href='https://github.com/jamktiko/PACKY'
          target='_blank'
        >
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default Ticorporate;
