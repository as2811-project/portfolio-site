import { Divider } from "@nextui-org/react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="ml-5">
      <h2 className="text-2xl font-medium mt-8 mb-5 text-left tracking-tight">
        What people say...
        <Divider className="opacity-20" />
      </h2>
      <div className="flex flex-col">
        <BiSolidQuoteAltLeft />
        <p className="font-light italic text-xl p-3">
          "He's the best!<span className="font-normal not-italic"> 🤩"</span>
        </p>
        <div className="flex flex-row">
          <Image
            src="/IMG_4306.jpg"
            alt="Anandh"
            width={40}
            height={50}
            className="rounded-full aspect-square object-cover mr-2"
          />
          <span className="font-light not-italic text-xs content-center">
            Pradipta Chandra, Lead - Freshsales Support
          </span>
        </div>
        <BiSolidQuoteAltLeft className="mt-5" />
        <p className="font-light italic text-xl p-3">"What a legend bruv!"</p>
        <div className="flex flex-row">
          <span className="font-light not-italic text-xs content-center indent-10">
            - Jermaine Sau, Supervisor | Woolworths Williamstown
          </span>
        </div>
        <BiSolidQuoteAltLeft className="mt-5" />
        <p className="font-light italic text-xl p-3">
          "He's handsome and very helpful{" "}
          <span className="font-normal not-italic"> 😄"</span>
        </p>
        <div className="flex flex-row">
          <span className="font-light not-italic text-xs content-center indent-10">
            - Random adorable old lady who came to shop one day at Woolies
          </span>
        </div>
        <BiSolidQuoteAltLeft className="mt-5" />
        <p className="font-light italic text-xl p-3">
          "King <span className="font-normal not-italic"> 👑"</span>
        </p>
        <div className="flex flex-row">
          <span className="font-light not-italic text-xs content-center indent-10">
            - Aditya Ramesh & Sathya Narayanan | Top Accountants and old mates
          </span>
        </div>
      </div>
    </div>
  );
}
