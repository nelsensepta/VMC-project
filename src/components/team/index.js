import React from "react";
import Heading from "../utils/Heading";
import Card from "./Card";

export default function Teams({ teams }) {
  return (
    <section className="mx-auto container sm:mt-64 mt-36" id="our_team">
      <Heading
        title="Our Team"
        second="Join Our Team"
        desc="Virtual Moves Co. Team consist of"
      />
      <div className="flex items-center justify-between mt-16 w-full sm:hidden">
        <div className="inline-block text-center mx-auto border-b-4 w-1/2 border-primary pb-2">
          <button className="font-medium text-lg">Designers</button>
        </div>
        <div className="inline-block text-center mx-auto border-b-4 w-1/2 pb-2">
          <button className="text-lg">Developers</button>
        </div>
      </div>
      <div className="flex justify-between items-center sm:gap-5 gap-14 mt-16 flex-col sm:flex-row">
        {teams.map((team) => (
          <Card team={team} key={team.id} />
        ))}
      </div>
      <div className="sm:flex justify-center items-center sm:mt-20 hidden">
        <div className="flex items-center justify-center gap-2 mt-16 w-1/3">
          <div className="inline-block text-center mx-auto border-b-4 w-3/4 border-primary"></div>
          <div className="inline-block text-center mx-auto border-b-4 w-1/4"></div>
          <div className="inline-block text-center mx-auto border-b-4 w-1/4"></div>
        </div>
      </div>
    </section>
  );
}
