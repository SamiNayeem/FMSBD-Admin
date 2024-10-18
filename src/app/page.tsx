import { Roboto } from '@next/font/google';
import Image from "next/image";
import Hero from "./components/hero";
import Features from "./components/about-us";
import JoinUsSection from './components/join-us';
import ContactSection from './components/contact-us';
import Preloader from "./components/preloader";

// Import the Roboto font
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={roboto.className}>  {/* Apply the font globally */}
      <Hero />
      <Features />
      <JoinUsSection/>
      <ContactSection/>
      {/* <Preloader /> */}
    </main>
  );
}
