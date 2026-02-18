# react-simple-modal

## Description

react-simple-modal is a simple and reusable React modal component.
It allows you to display custom content inside a modal without using jQuery.

This component was created as part of a learning project to replace a jQuery modal with a React solution.

## Prerequisites

- Node.js v18 or higher
- React v18 or higher
- A React project (Vite, CRA or similar)

## Installation

Install the plugin directly from GitHub:

npm install github:Neihos/react-simple-modal

## Usage

Example of a basic modal usage in a React component:

import { useState } from "react";
import { Modal } from "react-simple-modal";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Success"
      >
        <p>The modal content is passed using children.</p>
      </Modal>
    </>
  );
}

export default Example;

| Prop name  | Type              | Description                             |
| ---------- | ----------------- | --------------------------------------- |
| `isOpen`   | boolean           | Controls whether the modal is displayed |
| `onClose`  | function          | Function called to close the modal      |
| `title`    | string (optional) | Modal title                             |
| `children` | ReactNode         | Content displayed inside the modal      |

## Notes

The modal is controlled by the parent component.

Clicking on the overlay or on the close button closes the modal.

The component is UI-only and contains no business logic.
