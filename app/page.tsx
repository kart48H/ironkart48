import Loader from '@/components/Loader';
import Nav from '@/components/Nav';
import Hud from '@/components/Hud';
import Hero from '@/components/Hero';
import Sommaire from '@/components/Sommaire';
import Defi from '@/components/Defi';
import LeMans from '@/components/LeMans';
import Circuit from '@/components/Circuit';
import Kart from '@/components/Kart';
import Programme from '@/components/Programme';
import Valeurs from '@/components/Valeurs';
import Infos from '@/components/Infos';
import Inscription from '@/components/Inscription';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';
import SilkBackground from '@/components/SilkBackground';

export default function Home() {
  return (
    <>
      <div className="site-bg" aria-hidden="true">
        <SilkBackground pauseWhileCovered="#hero" />
      </div>
      <div className="grain" aria-hidden="true" />
      <Loader />
      <Nav />
      <Hud />
      <Sommaire />
      <main id="top">
        <Hero />
        <Defi />
        <LeMans />
        <Circuit />
        <Kart />
        <Programme />
        <Valeurs />
        <Infos />
        <Inscription />
      </main>
      <Footer />
      <Experience />
    </>
  );
}
