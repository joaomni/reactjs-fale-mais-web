import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container>
        <Row style={{marginTop: 100}}>
          <Col style={{marginBottom: 30}} sm={8}>
            <Form>
              <Form.Group>
                <Form.Label style={{fontSize: 20}}>Escolher os códigos das cidades de origem e destino:</Form.Label>
              </Form.Group>
              
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control as="select">
                    <option selected disabled>Selecione origem</option>
                    <option>011</option>
                    <option>016</option>
                    <option>017</option>
                    <option>018</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control as="select">
                    <option selected disabled>Selecione destino</option>
                    <option>011</option>
                    <option>016</option>
                    <option>017</option>
                    <option>018</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              {/* <Form.Group>
                <Form.Control as="select">
                  <option selected disabled>Selecione o tempo da ligação</option>
                  <option>20</option>
                  <option>80</option>
                  <option>200</option>
                  <option>100</option>
                </Form.Control>
              </Form.Group> */}

              <Form.Group>
                <Form.Label style={{fontSize: 20}}>Escolha o tempo da ligação:</Form.Label>
                <Form.Control type="number" placeholder="120" />
              </Form.Group>

              <Form.Group>
                <Form.Label style={{fontSize: 20}}>Escolha um plano FaleMais:</Form.Label>
                <Form.Control as="select">
                  <option selected disabled>Selecione o plano</option>
                  <option>FaleMais 30</option>
                  <option>FaleMais 60</option>
                  <option>FaleMais 120</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Button variant="primary" size="lg" block type="button">
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
          <Col sm={4}>
            <Form.Group>
              <Form.Label style={{fontSize: 20}}>Tarifa por minuto</Form.Label>
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
                </tbody>
              </Table>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// const styles = StyleSheet.create({
//   simulador: {
    
//   },
// });

export default App;
