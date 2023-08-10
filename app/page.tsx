import { AboutMe } from "@/components/about-me";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Information } from "@/components/information";
import { Introduction } from "@/components/intorduction";

export default function Home() {
  return (
    <>
      <Introduction />
      <Information />
      <AboutMe />
      <Contact />
    </>
  );
}
