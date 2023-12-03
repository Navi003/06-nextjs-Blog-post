import React from "react";
import Image from "next/image";
export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black
      dark:border-slate-500 drop-shadow-xl
      shadow-black rounded-full mx-auto mt-8
      w-52 h-52 object-cover"
        src="/images/navi.jpeg"
        width={200}
        priority={true}
        alt="profile picture"
        height={200}
      ></Image>
    </section>
  );
}
