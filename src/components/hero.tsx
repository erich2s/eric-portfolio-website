import Image from "next/image";
import memoji from "@/assets/memoji.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "./ui/button";
export default function hero() {
  return (
    <main className="container my-10 flex flex-col items-center justify-center md:my-4">
      <h1 className="mb-4 text-[1.4rem] font-bold md:text-[2rem] ">
        Hi, I'm Eric Huang! 👋
      </h1>
      <div className="overflow-hidden rounded-full p-4">
        <Image
          src={memoji}
          width={160}
          height={160}
          alt="memoji"
          priority
          className="scale-150 md:h-[180px] md:w-[180px]"
        />
      </div>
      <h1 className="font-bold">Developer 🧑🏻‍💻</h1>
      <h1 className="font-bold">Photographer 📸</h1>
      <section className="mt-8 flex w-[80%] flex-col gap-2 text-center lg:w-[60%]">
        <p>
          Welcome to my personal page! My name is Eric Huang and my Chinese name
          is
          <span className="whitespace-nowrap"> 黄士崧(huáng shì sōng)</span>.
          I'm an indie <b>Node.JS</b> Full-Stack developer based in Nanning,
          China.
        </p>
        <p>
          I'm passionate about building products that make a difference in
          people's lives. I'm also a photographer/videographer and I love to
          capture the beauty of the world around me.
        </p>
      </section>

      <section className="my-12 flex gap-4" id="socials">
        <Button className="bg-yellow-500 hover:bg-yellow-600" asChild>
          <a href="mailto:tarot1754443943@gmail.com" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="white"
              className="w-fit"
            />
          </a>
        </Button>
        <Button className="bg-black hover:bg-gray-800/90" asChild>
          <a href="https://github.com/erich2s" target="_blank">
            <FontAwesomeIcon icon={faGithub} color="white" className="w-fit" />
          </a>
        </Button>
        <Button className="bg-black hover:bg-gray-800/90" asChild>
          <a href="https://twitter.com/erich2s" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} className="w-fit" />
          </a>
        </Button>
        <Button className="bg-pink-500 hover:bg-pink-600" asChild>
          <a href="https://www.instagram.com/eric.h2s/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              color="white"
              className="w-fit"
            />
          </a>
        </Button>
        <Button className="bg-black hover:bg-gray-800/90" asChild>
          <a href="https://www.tiktok.com/@eric_h2s" target="_blank">
            <FontAwesomeIcon icon={faTiktok} color="white" className="w-fit" />
          </a>
        </Button>
      </section>
    </main>
  );
}
