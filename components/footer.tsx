import Image from "next/image";

export const Footer = () => {
  return (
    <div className="border-t border-primary mt-12 py-8 text-slate-600">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto">
        <div className="flex justify-center items-center space-x-4">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Musatafa's profile picture"
          />
          <div>
            <h1>Mustafa Ihssan</h1>
            <h2>Senior Full-Stack Developer</h2>
          </div>
        </div>
        <div className="">&copy; 2023 http://mustafaihssan.com</div>
      </div>
    </div>
  );
};
