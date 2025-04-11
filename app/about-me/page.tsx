"use client";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutMePage() {
  let facts: string[] = [
    "Animals can also be allergic to humans.",
    "Squeaky floors were the best home security in 17th century Japan.",
    "Finland has more saunas than cars.",
    "A fear of long words is called Hippopotomonstrosesquippedaliophobia.",
    "The Weeknd &apos;s real name is Abel M. Tesfaye",
    "DisneywORLd vs. DisneyLAnd",
    "Keyboards used to be arranged alphabetically",
    "Video games help surgeons perform better.",
    "At any point in time, 0.7% of the worlds population is drunk.",
    "Like fingerprints, everyone &apos;s tongue print is different.",
    "Artificial banana flavoring is based on an extinct banana.",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <br />
      <br />
      <Button
        className="bg-green-900"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press 4 Fact
      </Button>
      <p>{fact}</p>
      {/* my flexbox starts Here */}
      <div className="flex flex-wrap border-2 border-solid justify-center m-5">
        <p className="p-5 m-5 border-2 border-dotted">
          My hobbies: I love playing all sorts of video games, drawing,
          cooking/baking, and sewing. All of these things add to my skills, and
          I love expanding my horizons!{" "}
        </p>
        <p className="p-5 m-5 border-2 border-dotted">
          Some of my favorite things: I love listening to music, and I &apos;m a
          huge fan of The Weeknd (XOTWOD). His music has greatly impacted me. I
          also love hanging out with my best friend, as well as drinking boba.{" "}
        </p>
      </div>
      {/* Pictures of me */}
      <p className="text-2xl">These are some pictures of myself:</p>
      <br />
      <img alt="#" height={4032 / 8} src="/me1.jpeg" width={3024 / 8} />
      <p>This is me last October...</p>
      <br />
      <img alt="#" height={1280 / 2} src="/me2.jpeg" width={720 / 2} />
      <p className="text-sm">
        And this is a more recent picture of me from January!
      </p>
      <br />
      <br />
      <br />
      {/* Hobbies */}
      <p className="text-lg">
        Here are some more pictures of my favorite things and hobbies!
      </p>
      <div className="flex flex-wrap border-2 border-solid justify-center m-5" />
      <br />
      <br />
      <img alt="#" height={200} src="/HL.jpeg" width={200} />
      <p className="text-sm/3">
        I love playing Hogwarts legacy as a pastime. I have over 60 hours of
        gameplay!
      </p>
      <br />
      <img alt="#" height={250} src="/dti.png" width={250} />
      <p className="text-sm/3">
        I also love playing Roblox on my iPad, but mostly just DTI.
      </p>
      <br />
      <img alt="#" height={250} src="/super-smash-bros.jpeg" width={250} />
      <p>I occasionally play Nintendo games.</p>
      <br />
      <br />
      <p className="text-lg">Another of my hobbies: art (in all forms)!</p>
      <div className="flex flex-wrap border-2 border-solid justify-center m-5" />
      <br />
      <br />
      <img alt="#" height="250" src="art-in-progress.jpeg" width="250" />
      <p>I love sketching, especially for projects.</p>
      <br />
      <img alt="#" height="250" src="my-art.jpeg" width="250" />
      <p>My art is actually on display in the halls!</p>
      <br />
      <br />
      <img alt="#" height={250} src="digital-art.jpeg" width={250} />
      <p>I also occasionally do digital art.</p>
      <br />
      <img alt="#" height={250} src="boba.jpeg" width="250" />
      <p>I like trying new things, and this boba was the best I tried!</p>
      <br />
      <img alt="#" height="250" src="pierogi.jpeg" width="250" />
      <p className="text-sm/3">
        I enjoy cooking, even if it does take a while. This is a traditional
        dish called pierogi.
      </p>
      <br />
      <img alt="#" height="250" src="sewing.jpeg" width="250" />
      <p className="text-sm/3">
        I have tried hand sewing before, and this is a heart plush in progress.
      </p>
      <br />
      <br />
      <br />
      {/* me n my bestie */}
      <p className="text-lg">Something I love: my best friend!</p>
      <div className="flex flex-wrap border-2 border-solid justify-center m-5" />
      <br />
      <img alt="#" height="250" src="us-long-ago.jpeg" width="250" />
      <p>Me and my best friend on a feild trip in 8th grade.</p>
      <br />
      <img alt="#" height="250" src="me-n-bestie.jpeg" width="250" />
      <p>Here we are, dressed as our Hogwarts houses for Halloween.</p>
      <br />
      <img alt="#" height="250" src="besties.jpeg" width="250" />
      <p>In this photo, we are at lunch, celebrating her birthday.</p>
      <br />
      <br />
      {/* The Weeknd ml */}
      <p className="text-lg">
        My favorite artist is The Weeknd, and I love listening to his music.
      </p>
      <div className="flex flex-wrap border-2 border-solid justify-center m-5" />
      <br />
      <img alt="#" height={250} src="The-Weeknd-albums.jpeg" width={250} />
      <p>These are all his albums...</p>
      <br />
      <img alt="#" height="250" src="XO.jpeg" width="250" />
      <p>And this is the symbol for his fans!</p>
      <br />
      <br />
      <Button
        as={link}
        className="bg-cyan-700"
        href="https://weekndmerch.com/"
        target="_blank"
      >
        Merch!
      </Button>
      <br />
      <br />
      <a
        className="bg-green-800 text-slate-950 m-3 p-3"
        href="https://www.theweeknd.com/tour/"
        rel="noreferrer"
        target="_blank"
      >
        My favorite artist!
      </a>
      <br />
      <br />
      <a
        className="bg-red-400 text-slate-950 m-3 p-3"
        href="https://pandachineserestaurantil.com/"
        rel="noreferrer"
        target="_blank"
      >
        Where I got my boba!
      </a>
    </div>
  );
}
