import Image from "next/image";
import ThemeChangeBtn from "./themeChangeBtn";
import Autocomplete from "./autocomplete";

interface IProps {
  withLogo?: boolean;
}

export default function Header({ withLogo }: IProps) {
  return (
    <header>
      <div className="flex items-center p-2 md:p-8 lg:p-12">
        <div className="w-36 md:w-44 lg:w-52 h-10 relative">
          <Image src="/logo.png" alt="" fill />
        </div>
        <div className="text-sea hidden md:block ml-20 uppercase font-medium relative after:absolute after:bottom-0 after:w-1/2 after:content-[''] after:border-sea after:border-t-2 after:left-1/4 after:right-1/4">
          dashboard
        </div>
        <div className="ml-auto flex items-center">
          <Autocomplete />
          <button className="relative h-3 md:h-4 w-4">
            <Image src="/icon-loupe.svg" fill alt=""  />
          </button>
          <ThemeChangeBtn />
          <div className="bg-gradient-to-r from-blue-dark dark:from-blue-medium dark:to-blue-light via-sea to-blue p-[0.05rem] ml-2 md:ml-6">
            <div className="flex h-full w-full items-center justify-center bg-gray-light back dark:bg-gray-dark">
              <h1 className="text-blue-dark uppercase px-2 md:px-8 py-0 md:py-2 text-sm dark:text-white">
                sign in
              </h1>
            </div>
          </div>
        </div>
      </div>
      {withLogo && (
        <div className="w-full h-52 md:h-72 lg:h-96 xl:h-[40rem] bg-[url('/top_img.png')] bg-cover flex items-center relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-r before:from-blue-dark before:from-0% before:via-blue-light before:via-80% before:to-transparent before:to-100%">
          <div className="ml-12 md:ml-32 lg:ml-40 absolute left-0 md:left-10 lg:left-16 xl:left-40 top-0 h-full flex flex-col justify-center">
            <div className="text-sea-light uppercase text-2xl md:text-5xl lg:text-6xl xl:text-7xl">
              the news hub:
            </div>
            <div className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2">
              Where information meets insight
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
