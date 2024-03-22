import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const AlertBar = function () {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="primary">
        <Alert.Heading>Benvenuto!</Alert.Heading>
        <p>
          Per sbloccare tutte le funzionalita' del servizio Meteo Station si invita ad acquistare il servizio Premium!
          <Alert.Link href="#"> Clicca qui per maggiori info!</Alert.Link>.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-primary">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button className="d-md-block ms-auto m-3" onClick={() => setShow(true)}>
          Show Alert
        </Button>
      )}
    </>
  );
};
export default AlertBar;
