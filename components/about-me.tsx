import Link from "next/link";
import { Card } from "./card";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 p-12 flex justify-end">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-primary pb-10">
            About me
          </h2>
          <div className="flex flex-col space-y-6 mb-6">
            <p>
              I&apos;m a full stack web developer with 5+ years of experience in
              a wide range of technologies and frameworks, I mainly with React,
              Next.js, Node.js, and Postgress. I also develop mobile apps using
              React Native.
            </p>
            <p>
              I&apos;m currently working as a Sr. full stack web developer at{" "}
              <Link
                className="border-b border-secondary pb-0.5"
                href="https://www.mmeagroup.com/"
              >
                MMEA Group
              </Link>
              , one of main projects I&apos;m leading and working on is a SaaS
              ERP Platform named <strong>XWise</strong>, which is a cloud-base
              ERP platform that manages all the business processes of a companym
              from sales, inventory, accounting, HR, and more.
            </p>
            <p>
              I have a master&apos;s degree in Artificial Intelligence, I have a
              strong background in AI, I have worked on many projects in the
              field of AI, from Deep Learning to Computer Vision. I&apos;m
              Published in the field of Clothing Parsing Semantic Segmentation,
              check my{" "}
              <Link
                className="border-b border-secondary pb-0.5"
                href="https://link.springer.com/article/10.1007/s11063-019-10173-y"
              >
                Paper
              </Link>{" "}
              for more details.
            </p>
            <p>
              In my free time, I like to work on my side projects, ranging from
              AI to web apps, and mobile apps.
            </p>
            <p>I love good design, photography, books and coffee.</p>
          </div>
        </div>
      </div>
      <div className="flex-1  flex flex-col bg-yellow">
        <Image
          src="/me.png"
          className="mx-auto"
          width={500}
          height={500}
          alt="Musatafa's profile picture"
        />

        <div className="mx-auto mb-5">
          <Card>Link to my CV</Card>
        </div>
      </div>
    </div>
  );
};
