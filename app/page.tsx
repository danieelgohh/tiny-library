import Image from "next/image";

import heroImage from "@/public/images/hero-image.png"
import heroImageSquare from "@/public/images/hero-image-square.png"

export default function Home() {
  const randomiseImage = heroImageSquare

  return (
    <>
      <section className="flex flex-col">
        <h1 className="font-secondary text-[3.375rem]">Find your next favorite book</h1>
        <p className="font-primary font-normal text-2xl text-[#1E1E1E] mt-5 mb-10">A cosy corner of the web where readers discover hand-picked titles across every genre, from timeless classics to hidden indie gems.</p>
        <button className="font-primary font-semibold p-3 border-2 text-xl text-[#1E1E1E] mb-10 mx-auto">BROWSE BOOKS</button>
      </section>
      <Image 
        className={randomiseImage === heroImageSquare ? "mask-t-from-white object-contain" : ""}
        src={randomiseImage}
        alt={randomiseImage === heroImageSquare ? "Background image of a beach shore" : "Background image of a beach shore with a striped filter applied"}
        width={randomiseImage === heroImageSquare ? 627 : 1798}
        height={randomiseImage === heroImageSquare ? 627 : 1799}
      >
      </Image>
    </>
  );
}
