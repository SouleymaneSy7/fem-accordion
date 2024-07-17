import React from "react";
import { accordionData, HeadingTitle } from "./constants";
import Accordion from "./components/Accordion";
import starIcon from "@/assets/images/icon-star.svg";

const App = () => {
  return (
    <React.Fragment>
      <main>
        <h1>
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
    </React.Fragment>
  );
};

export default App;
