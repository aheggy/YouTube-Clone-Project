import React, { useState } from "react";
import { useLocation, Route } from "react-router-dom";
import "./Modal.css";

export default function Modal() {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <>
      {location.pathname !== "/" && modalOpen && (
        <Route path="*">
          <div className="modal-window">
            <div className="modal-box">
              <p>Something went wrong. Please check your URL and try again.</p>
              <button className="close-modal" onClick={closeModal}>X</button>
            </div>
          </div>
        </Route>
      )}
    </>
  );
}
