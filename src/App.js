import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Table, InputGroup } from 'react-bootstrap';
import { FaRegClock } from "react-icons/fa";
import  FaleMais from './services/FaleMais';

function App() {
  const [callPrice, setCallPrice] = useState(0.01);

  const [validated, setValidated] = useState(false);

  async function handleSubmit(e, data) {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    else {
      const { dddOrigin, dddDestiny, callTime, plan } = data;

      console.log(plan);

      const res = new FaleMais;

      let calculateCall = res.withFaleMais(dddOrigin, dddDestiny, callTime, plan);

      setCallPrice(calculateCall);

      console.log(callPrice);
    }

    setValidated(true);
  }

  return (
    <>
      <Container>
        <Row style={{marginTop: 100}}>
          <Col style={{marginBottom: 30}} sm={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label style={title}>Escolher os códigos das cidades de origem e destino:</Form.Label>
              </Form.Group>
              
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control name="dddOrigin" defaultValue={''} as="select" required>
                    <option value="" disabled>Selecione origem</option>
                    <option value="5">011</option>
                    <option value="6">016</option>
                    <option value="7">017</option>
                    <option value="8">018</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control name="dddDestiny" defaultValue={''} as="select" required>
                    <option value="" disabled>Selecione destino</option>
                    <option value="5">011</option>
                    <option value="6">016</option>
                    <option value="7">017</option>
                    <option value="8">018</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label style={title}>Digite o tempo da ligação em minutos:</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FaRegClock/></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    placeholder="Ex: 120"
                    type="number"
                    name="callTime"
                    required
                  />
                </InputGroup>
                <Form.Control.Feedback type="invalid">
                  Por favor, digite o tempo da ligação.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label style={title}>Escolha um plano FaleMais:</Form.Label>
                <Form.Control name="plan" defaultValue={''} as="select" required>
                  <option value="" disabled>Selecione o plano</option>
                  <option value="30">FaleMais 30</option>
                  <option value="60">FaleMais 60</option>
                  <option value="120">FaleMais 120</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Button variant="primary" size="lg" block type="submit">
                  Calcular ligação
                </Button>
              </Form.Group>

              <Form.Group>
                <Table striped bordered hover variant="dark" responsive>
                  <thead>
                    <tr>
                      <td>Origem</td>
                      <td>Destino</td>
                      <td>Tempo</td>
                      <td>Plano FaleMais</td>
                      <td>Com FaleMais</td>
                      <td>Sem FaleMais</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>011</td>
                      <td>016</td>
                      <td>20</td>
                      <td>FaleMais 30</td>
                      <td>$ 0,00</td>
                      <td>$ 38,00</td>
                    </tr>
                    <tr>
                      <td>011</td>
                      <td>17</td>
                      <td>80</td>
                      <td>FaleMais 60</td>
                      <td>$ 37,40</td>
                      <td>$ 136,00</td>
                    </tr>
                  </tbody>
                </Table>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Control 
                  type="text"
                  value={`$ ${callPrice}`}
                  onChange={e => setCallPrice(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={4}>
            <Form.Group>
              <Form.Label style={title}>Tarifa por minuto</Form.Label>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <td>Origem</td>
                    <td>Destino</td>
                    <td>$/min</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>011</td>
                    <td>016</td>
                    <td>1.90</td>
                  </tr>
                  <tr>
                    <td>016</td>
                    <td>011</td>
                    <td>2.90</td>
                  </tr>
                  <tr>
                    <td>011</td>
                    <td>017</td>
                    <td>1.70</td>
                  </tr>
                  <tr>
                    <td>017</td>
                    <td>011</td>
                    <td>2.70</td>
                  </tr>
                  <tr>
                    <td>011</td>
                    <td>018</td>
                    <td>0.90</td>
                  </tr>
                  <tr>
                    <td>018</td>
                    <td>011</td>
                    <td>1.90</td>
                  </tr>
                  <tr>
                    <td>011</td>
                    <td>011</td>
                    <td>0.20</td>
                  </tr>
                  <tr>
                    <td>016</td>
                    <td>017</td>
                    <td>1.80</td>
                  </tr>
                  <tr>
                    <td>017</td>
                    <td>016</td>
                    <td>2.80</td>
                  </tr>
                  <tr>
                    <td>016</td>
                    <td>018</td>
                    <td>1.60</td>
                  </tr>
                  <tr>
                    <td>018</td>
                    <td>016</td>
                    <td>2.60</td>
                  </tr>
                  <tr>
                    <td>016</td>
                    <td>016</td>
                    <td>0.30</td>
                  </tr>
                  <tr>
                    <td>017</td>
                    <td>018</td>
                    <td>0.40</td>
                  </tr>
                  <tr>
                    <td>017</td>
                    <td>017</td>
                    <td>0.80</td>
                  </tr>
                  <tr>
                    <td>018</td>
                    <td>017</td>
                    <td>1.40</td>
                  </tr>
                  <tr>
                    <td>018</td>
                    <td>018</td>
                    <td>0.30</td>
                  </tr>
                </tbody>
              </Table>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const title = {
  fontSize: 20,
}

export default App;
