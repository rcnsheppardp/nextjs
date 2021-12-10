//import { useEffect } from "react";
//import { SolrClientParams } from "solr-client";
import { createClient } from "solr-client";

type SearchResultsProps = {
  search: object[];
};

export async function getStaticProps() {
  const client = createClient({ host: "localhost", port: 8984 });

  const obj = await client.search("rcn");

  console.log("Solr response:", obj);

  return {
    props: {
      search: obj,
    },
  };
}

export function SearchResults(props: SearchResultsProps) {
  return (
    <ul>
      {props.search.map((s, index) => (
        <li key={index}>{s}</li>
      ))}
    </ul>
  );
}
