import React from "react";

type AccordionPropsType = {
  title: string;
  children: React.ReactNode;
};

const Accordion = ({ title, children }: AccordionPropsType) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const id = React.useId();

  const accordionButtonId = `accordion-button-${id}`;
  const accordionContentId = `accordion-content-${id}`;

  const handleShow = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <React.Fragment>
      <div className="py-5 lg:py-6 border-b border-border-bottom-clr">
        <div>
          <h3>
            <button
              type="button"
              id={accordionButtonId}
              aria-expanded={isExpanded}
              aria-controls={accordionContentId}
              onClick={handleShow}
              style={
                isExpanded
                  ? { paddingBlockEnd: "1.25rem" }
                  : { paddingBlockEnd: "0" }
              }
              className="w-full flex items-center justify-between text-dark-purple-clr font-fw-semi-bold hover:text-purple-clr transition-colors text-left"
            >
              <span>{title}</span>
              <span
                className={
                  isExpanded ? "accordion--icon active" : "accordion--icon"
                }
              >
                <span>{isExpanded ? "-" : "+"}</span>
              </span>
            </button>
          </h3>
        </div>

        <div
          role="region"
          id={accordionContentId}
          aria-labelledby={accordionButtonId}
          hidden={!isExpanded}
          className="w-full"
        >
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accordion;
