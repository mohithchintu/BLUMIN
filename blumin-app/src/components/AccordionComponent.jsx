import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './accordion.css'; // Import the provided styles (renamed to accordion.css)

const AccordionComponent = ({ items }) => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    {items.map((item, index) => (
      <Accordion.Item key={index} className="AccordionItem" value={`item-${index + 1}`}>
        <AccordionTrigger>{item.trigger}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

// PropTypes validation for the items prop
AccordionComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      trigger: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
};

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

export default AccordionComponent;