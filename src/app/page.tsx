import Image from "next/image";

const page = () => {
  return (
    <div><figure className="md:flex bg-pink-200 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/rizu-pic.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          "Hello. I'm RIZWAN AHMED from RAHIM YAR KHAN. I'm a student of BSCS.       I'm a MUSLIM. Now I started to learn AI and INSHAALLAH one day I will succeed."
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          RIZWAN AHMED
        </div>
        <div className="text-slate-700 dark:text-slate-500">
      STUDENT OF BSCS,RYK
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}
export default page