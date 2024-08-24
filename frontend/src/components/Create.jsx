import CreateIcon from "@mui/icons-material/AddCircleSharp";
import { useState } from "react";

//CRUD Functions
import CreatePopupForm from "./CreatePopupForm";

const Create = () => {
  const [formModal, setFormModal] = useState(false);

  const openModal = () => {
    setFormModal(true);
  };

  const closeModal = () => {
    setFormModal(false);
  };

  return (
    <div>
      <button
        style={{
          color: "#d32232",
          fontSize: "70px",
          float: "right",
          marginRight: "30px",
          marginTop: "0px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={openModal}
      >
        <CreateIcon fontSize="inherit" />
      </button>
      <CreatePopupForm open={formModal} close={closeModal}/>
    </div>
  );
};

export default Create;
