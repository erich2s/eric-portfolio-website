import Image from "next/image";
import memoji from "@/assets/memoji.gif";
import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";

export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center md:my-9">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hi, I'm Eric Huang! 👋</MotionText>
      </h1>
      <div className="overflow-hidden rounded-full p-4">
        <MotionDiv>
          <Image
            src={memoji}
            width={160}
            height={160}
            alt="memoji"
            priority
            className="md:h-[180px] md:w-[180px]"
          />
        </MotionDiv>
      </div>
      <h1>
        <MotionDiv delayOffset={0.8}>Developer 🧑🏻‍💻</MotionDiv>
      </h1>
      <h1>
        <MotionDiv delayOffset={1}>Photographer 📸</MotionDiv>
      </h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p>Welcome to my personal page!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
            Just an indie<b> Node.JS </b>developer who loves to build something
            cool.
          </p>
        </MotionDiv>
      </div>
      <div className="my-8">
        <ContactList delayOffset={1.5} />
      </div>
    </section>
  );
}
