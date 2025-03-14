import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
       <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/001.jpg" alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      Muzammil Shaheen is known for his dedication and hard work in various fields,
       particularly in technology, education, or business depending on context.
        People who succeed through hard work often demonstrate perseverance,
         discipline, and a commitment to continuous improvement, which might
          reflect his approach. His efforts likely include overcoming challenges
           and achieving goals through persistent effort. Could you share more
       specific details about his work or achievements that youre referring to?
      </p>
    </blockquote>
    </div>
    </figure>
    </div>
  )
}
export default page