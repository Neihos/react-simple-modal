import "./assets/modal.css";

/**
 * Modal component
 *
 * A reusable UI-only React modal component.
 *
 * Props:
 * @param {boolean} isOpen - Controls whether the modal is displayed.
 * @param {function} onClose - Function called to close the modal.
 * @param {string} title - Optional modal title.
 * @param {ReactNode} children - Content displayed inside the modal.
 * @param {boolean} closeOnOverlayClick - If true, clicking the overlay closes the modal.
 */

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  closeOnOverlayClick = true,
}) {
  // If the modal is closed, render nothing
  if (!isOpen) {
    return null;
  }

  // Close modal when clicking on the overlay
  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  // Prevent modal content click from closing the modal
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container" onClick={stopPropagation}>
        {title && <h2 className="modal-title">{title}</h2>}

        <div className="modal-content">{children}</div>

        <button
          type="button"
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
    </div>
  );
}
