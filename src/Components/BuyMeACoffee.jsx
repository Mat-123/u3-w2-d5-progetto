import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function DonationCard() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                If you'd like to support my work, please consider making a donation:
                <br />
                <strong>BTC: 3Cmv8aWgrGhZ7ni2v6jgbVAMAZH7qcdbh7</strong>
                <br />
                <strong>EVM: 0x39091567Dce9D304a02B513e145b371Dc08eD5e4</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DonationCard;
