/* eslint-disable react/no-unescaped-entities */

export default function Testimonials() {
  return (
    <div className="ml-5 pb-10">
      <h2 className="text-2xl font-medium mt-8 mb-5 text-left tracking-tight">
        What people say...
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-neutral-950 p-5 rounded-lg">
          <p className="font-light italic text-xl p-3">
            "He's the best!<span className="font-normal not-italic"> 🤩"</span>
          </p>
          <div className="flex flex-row items-center">
            <span className="font-light not-italic text-xs indent-10">
              - Pradipta Chandra, Lead - Freshsales Support
            </span>
          </div>
        </div>
        <div className="bg-neutral-950 p-5 rounded-lg">
          <p className="font-light italic text-xl p-3">"What a legend."</p>
          <div className="flex flex-row">
            <span className="font-light not-italic text-xs content-center indent-10">
              - Jermaine Sau, Supervisor | Woolworths Williamstown
            </span>
          </div>
        </div>
        <div className="bg-neutral-950 p-5 rounded-lg">
          <p className="font-light italic text-xl p-3">
            "He's handsome and very helpful{" "}
            <span className="font-normal not-italic"> 😄"</span>
          </p>
          <div className="flex flex-row">
            <span className="font-light not-italic text-xs content-center indent-10">
              - Random adorable old lady who came to shop one day at Woolies
            </span>
          </div>
        </div>
        <div className="bg-neutral-950 p-5 rounded-lg">
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
    </div>
  );
}
