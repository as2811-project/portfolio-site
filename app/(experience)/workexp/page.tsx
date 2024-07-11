/* eslint-disable react/no-unescaped-entities */
import NavBar from "@/components/Navbar";
import Image from "next/image";

export default async function Experiences() {
  return (
    <div>
      <NavBar />
      <section className="h-screen flex-col justify-center h-screen ml-6 mb-2 p-8 mb-5">
        <h1 className="mt-16 text-5xl font-medium mb-5 text-left ml-5 tracking-tight">
          Experience so far...
        </h1>
        <h2 className="mt-8 text-left text-neutral-400 ml-5 tracking-tight">
          Internships and Full Time
        </h2>
        <div className="p-5">
          <div className="flex flex-row mt-3 content-center">
            <Image
              src="/Freshworks Inc_idGK6bEIM__7.png"
              alt="Freshworks"
              width={55}
              height={40}
              className="ml-5"
            />
            <div className="flex flex-col">
              <h2 className="font-medium text-2xl tracking-tight ml-5">
                Product Specialist | Freshworks
              </h2>
              <h3 className="font-light tracking-tight ml-5">
                Feb 2021 - Dec 2022
              </h3>
            </div>
          </div>
          <div className="flex flex-col ml-5 mt-5 content-center">
            <li>
              I began my career in Product at{" "}
              <a
                className="text-sky-400 after:content-['_↗'] ..."
                href="https://freshworks.com"
                target="_blank"
              >
                Freshworks
              </a>{" "}
              back in 2021 and hit the ground running.
            </li>
            <li>
              My work involved solving customer issues and implementing
              solutions for their requirements within Freshsales.
            </li>
            <li>
              I solved over 800 issues, averaging over 85-90% in CSAT scores
              during my time there.
            </li>
            <li>
              But I did take a hit in raw interaction metrics as I'd personalise
              everything that I did, resulting in high interaction counts.
            </li>
            <li>
              Developed powerful automation scripts, boosting productivity in
              certain complex migration jobs by almost 100%.
            </li>
            <li>
              Trained 4-5 Freshworks employees and ensured their transitions
              into production by the time I left the org.
            </li>
            <li>Won a couple of awards as well for my work.</li>
          </div>
        </div>
        <h2 className="mt-8 text-left text-neutral-400 ml-5 tracking-tight">
          Part Time and Volunteering
        </h2>
        <div className="p-5">
          <div className="flex flex-row mt-3 content-center">
            <div className="ml-5 content-center">
              <Image
                src="/tedx-logo-FE7A5DACA7-seeklogo.com.png"
                alt="tedx"
                width={85}
                height={50}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-medium text-2xl tracking-tight ml-5">
                Assistant Manager, Human Resources | TEDx Chennai
              </h2>
              <h3 className="font-light tracking-tight ml-5">
                Sep 2019 - March 2020
              </h3>
            </div>
          </div>
          <div className="flex flex-col ml-5 mt-5 content-center">
            <li>
              Volunteered at TEDxChennai back in 2019 for their Human Resources
              team.
            </li>
            <li>
              Started off my time there by helping downsize the entire org by
              almost 40% 💀
            </li>
            <li>
              Worked on keeping volunteer satisfaction and motivation up by
              organising co-working sessions and activities
            </li>
            <li>Drafted the POSH policy for the org among other things</li>
            <li>
              The org unfortunately had to shutdown due to COVID, negating all
              our work for the year's event.
            </li>
          </div>
        </div>
        <div className="p-5 mb-5">
          <div className="flex flex-row mt-8 content-center">
            <div className="ml-5 content-center">
              <Image
                src="/Woolworths_idvwtEXgAE_1.png"
                alt="woolies"
                width={90}
                height={60}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-medium text-2xl tracking-tight ml-5">
                Customer Service | Woolworths Williamstown
              </h2>
              <h3 className="font-light tracking-tight ml-5">
                November 2023 - Present
              </h3>
            </div>
          </div>
          <div className="flex flex-col ml-5 mt-5 content-center mb-10">
            <li>
              Currently assisting customers with their weekly grocery shopping
              at Woolies.
            </li>
            <li>
              I serve 100s of customers weekly while helping out the store with
              online order packaging as well.
            </li>
            <li>If required, I help with store restocking as well.</li>
          </div>
        </div>
      </section>
    </div>
  );
}
