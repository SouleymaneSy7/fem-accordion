import React from "react";
import { accordionData, HeadingTitle } from "./constants";
import Accordion from "./components/Accordion";
import starIcon from "@/assets/images/icon-star.svg";
import Attribution from "./components/Attribution";

const App = () => {
  return (
    <React.Fragment>
      <main className="bg-white-clr rounded-xl px-[var(--main-padding-x)] py-[var(--main-padding-y)] my-8">
        <h1 className="flex items-center gap-4 text-fs-heading font-fw-bold text-dark-purple-clr mb-[var(--heading-margin-bottom)]">
          <span>
            <img src={starIcon} alt="An star svg icon" />
          </span>
          {HeadingTitle}
        </h1>

        <section>
          {accordionData.map(({ id, accordionTitle, accordionContents }) => {
            return (
              <Accordion key={id} title={accordionTitle}>
                {accordionContents}
              </Accordion>
            );
          })}
        </section>
      </main>

      <Attribution />
    </React.Fragment>
  );
};

export default App;
