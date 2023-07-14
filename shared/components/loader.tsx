import Image from "next/image";

export default function Loader(): JSX.Element {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue transition-all">
        <hr className="transition-all animate-changewidth duration-1000 absolute left-0 top-1/2" />
        <img
          className="animate-bounce transition-all"
          src="/images/logo1.png"
          alt="Harshith Logo"
        />
        <hr className="transition-all animate-changewidth duration-1000 absolute right-0 top-1/2" />
      </div>
    </>
  );
}
