import Link from "next/link";
import React, { useState } from "react";
import { InputText } from "../components/InputText";
//import { fetchPets } from "../helpers/fetchPets";
//import { helloDevJam, helloWorld } from "../helpers/helloWorld";

export default function Home() {
  //useState();
  //const pets = fetchPets();
  //console.log(pets);

  //console.log(petNames);

  return (
    <main>
      <h1>Hello, World!</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <ul>
        {/* {pets.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))} */}
      </ul>
      <InputText id={"firstname"} label={"First name"} required={true} />
      <InputText id={"middlename"} label={"Middle name"} required={false} />
      <InputText id={"lastname"} label={"Last name"} required={true} />
    </main>
  );
}
