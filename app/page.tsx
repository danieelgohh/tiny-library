import Image from "next/image";

import heroImage from "@/public/images/hero-image.png"

export default function Home() {
  return (
    <main className="flex flex-col max-h-screen max-w-screen lg:flex-row lg:w-screen lg:h-6/10 lg:items-center lg:py-5 lg:justify-center">
      <section className="flex flex-col px-5">
        <h1 className="font-secondary text-[3.375rem]">Find your next favorite book</h1>
        <p className="font-primary font-normal text-2xl text-[#1E1E1E] mt-5 mb-10">A cosy corner of the web where readers discover hand-picked titles across every genre, from timeless classics to hidden indie gems.</p>
        <button className="font-primary font-semibold p-3 border-2 text-xl text-[#1E1E1E] mb-10 mx-auto lg:self-start lg:mx-0">BROWSE BOOKS</button>
      </section>
      <Image 
        className="object-contain h-auto w-auto self-center lg:w-full xl:w-auto"
        src={heroImage}
        alt="Background image of a beach shore with a striped filter applied"
        width={627}
        height={627}
      >
      </Image>
    </main>
  );
}
