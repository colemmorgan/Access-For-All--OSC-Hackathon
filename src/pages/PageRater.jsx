import React from "react";
import { useParams } from "react-router";

export default function PageRater({ sites }) {
  const { id } = useParams();
  const site = sites.find(site => +site.id === +id);
  console.log(site)

  return (
    <div>
      <div className="max-w-[80%] mx-auto mt-12">
        <h4 className="text-center text-3xl mb-12 ">
          WAVE Accessability Assessment
        </h4>
        {site ? (
          <Iframe site={site} />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

const Iframe = ({site}) => {
  return (
    <iframe
      src={site.wave_url}
      title="Embedded content"
      className="w-full h-screen"
    />
  );
};
