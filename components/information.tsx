import Link from "next/link";
import { Card } from "./card";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Information = () => {
  return (
    <div className="flex flex-col items-center mb-20 max-w-screen-lg mx-auto">
      <h1>Passion led us here</h1>
      <h2 className="text-3xl font-semibold tracking-tight text-primary pb-10">
        What I do
      </h2>
      <div className="flex space-x-5 justify-between">
        <CardInfo
          title="Web and Mobile Development"
          description="Product Design I have designed mobile apps, websites and eCommerce stores. I mainly work with React, Next.js, Node.js, and Postgress. I also develop mobile apps using React Native."
          icon="/terminal-square.svg"
          link="#"
          linkText="See my Work"
          iconColor="bg-orange-700"
        />

        <CardInfo
          title="Freelance"
          description="Freelance I Can help you with your next project, I have worked with many clients from all over the world, and I have helped them to build their next product."
          icon="/palette.svg"
          link="#"
          linkText="See my Work"
          iconColor="bg-lime-700"
        />

        <CardInfo
          title="Artificial Intelligence"
          description="I did my master's degree in Artificial Intelligence, I have worked on many projects in the field of AI, from Deep Learning to Computer Vision."
          icon="/brain-circuit.svg"
          link="#"
          linkText="See my Work"
          iconColor="bg-emerald-700"
        />
      </div>
    </div>
  );
};

const CardInfo = ({
  title,
  description,
  linkText,
  link,
  icon,
  iconColor,
}: {
  title: string;
  description: string;
  linkText: string;
  link: string;
  icon: string;
  iconColor: string;
}) => {
  return (
    <Card>
      <div className="py-5">
        <div className="py-5 justify-center items-center flex  ">
          <Image
            src={icon}
            width={100}
            height={100}
            alt="Icon"
            className={cn(
              "rounded-lg p-3 invert stroke-2 stroke-black",
              iconColor
            )}
          />
        </div>
        <div className="py-5 text-xl font-semibold tracking-tight text-primary">
          {title}
        </div>
        <div className="text-secondary font-light	">{description}</div>
        {/* <div className="pt-5 font-semibold">
          <Link href="#">{linkText} ➞</Link>
        </div> */}
      </div>
    </Card>
  );
};
