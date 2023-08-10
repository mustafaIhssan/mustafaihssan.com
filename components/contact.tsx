import Image from "next/image";

export const Contact = () => {
  return (
    <div className="mt-24 flex flex-col items-center space-y-10 max-w-screen-lg mx-auto">
      <div>
        <Image src="/user-cog.svg" width={40} height={40} alt="Icon" />
      </div>
      <h2 className="text-4xl font-bold tracking-tight text-primary">
        Get in touch with me.
      </h2>
      <p className="text-lg text-primary w-2/3 mx-auto">
        I am always open to discuss your project, teach you about UX/UI best
        practices or help with your design challenges.
      </p>

      <div className="flex space-x-4">
        <div className="font-sans text-slate-400">Email me at</div>
        <div className="font-semibold">mustafa.ihssan@gmail.com</div>
      </div>
    </div>
  );
};
