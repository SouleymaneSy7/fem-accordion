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
      <div>
        <h3>
          <button
            type="button"
            id={accordionButtonId}
            aria-expanded={isExpanded}
            aria-controls={accordionContentId}
            onClick={handleShow}
          >
            <span>{title}</span>
            <span className="accordion--icon"></span>
          </button>
        </h3>
      </div>

      <div
        id={accordionContentId}
        role="region"
        aria-labelledby={accordionButtonId}
        hidden={!isExpanded}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default Accordion;
