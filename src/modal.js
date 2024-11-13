// src/Modal.js
import React from 'react';

function Modal({ comment, onClose }) {
  if (!comment) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Comment Details</h3>
        <p><strong>ID:</strong> {comment.id}</p>
        <p><strong>Name:</strong> {comment.name}</p>
        <p><strong>Email:</strong> {comment.email}</p>
        <p><strong>Body:</strong> {comment.body}</p>
        <button onClick={onClose} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  closeButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Modal;
