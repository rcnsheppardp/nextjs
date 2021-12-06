import Link from "next/link";
import React, { useState } from "react";
import { Header } from "../components/header";
//import { fetchPets } from "../helpers/fetchPets";
//import { helloDevJam, helloWorld } from "../helpers/helloWorld";

export default function Home() {
  //useState();
  //const pets = fetchPets();
  //console.log(pets);

  //console.log(petNames);

  return (
    <main>
      <Header />
      <h1>Hello, World!</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <ul>
        {/* {pets.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))} */}
      </ul>
    </main>
  );
}
