import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [error, setError] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      setError(
        "Las direcciones de E-mail no coinciden, por favor verifique ambos campos."
      );
      return;
    }

    const userData = {
      name,

      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="Center">
      <div className="Check">
        <Form onSubmit={handleConfirm}>
          <Form.Group className="form-outline mb-4" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escriba su Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4" controlId="formBasicEmail">
            <Form.Label>Dirección de Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Escriba su E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="form-outline mb-4"
            controlId="formBasicConfirmEmail"
          >
            <Form.Label>Confirmar Dirección de Email</Form.Label>
            <Form.Control
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required
              placeholder="Escriba nuevamente su E-mail"
            />
          </Form.Group>

          {error && <p className="error-message">{error}</p>}

          <Button type="submit">Crear Orden</Button>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutForm;
