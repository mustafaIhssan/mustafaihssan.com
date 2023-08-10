import Image from "next/image";

export const Introduction = () => {
  return (
    <div className="flex flex-row justify-between items-center py-20 max-w-screen-lg mx-auto">
      <div className="space-y-5 mt-12">
        <h1>👋 Hey there, I&apos;m Mustafa Ihssan</h1>
        <h2 className="text-4xl font-bold tracking-tight text-primary">
          A passionate senior full-stack developer driven by React&apos;s magic.
        </h2>
        <p>I craft seamless experiences that blend innovation and code.</p>
        <button className="px-5 py-2 font-medium text-primary border border-b-4 border-r-4 border-primary bg-yellow rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2">
          Get in touch
        </button>
      </div>
      <div>
        <Image
          src="/img.png"
          width={650}
          height={650}
          alt="Musatafa's profile picture"
        />
      </div>
    </div>
  );
};
