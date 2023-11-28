import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const sendDataToApi = async () => {
    try {
      // Send data to the API
      await axios.post("https://6564cb05ceac41c0761ed51e.mockapi.io/crud", {
        firstName,
        lastName,
        checkbox
      });

      // Navigate to the "read" page
      navigate("/read");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={sendDataToApi} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
