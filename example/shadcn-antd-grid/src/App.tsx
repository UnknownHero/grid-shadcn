import { Row } from './row.tsx';
import { Col } from './col';

function App() {
  return (
    <div style={{width:'100%'}}>
      <Row gutter={[16, 16]} wrap>
        <Col span={18}>
          col-18
        </Col>
        <Col span={6}>
          col-6
        </Col>
        <Col span={6}>
          col-6
        </Col>
        <Col span={6}>
          col-6
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          col-6
        </Col>
        <Col span={6}>
          col-6
        </Col>
        <Col span={4} offset={2}>
          col-4 offset-2
        </Col>
        <Col span={4}>
          col-4
        </Col>
      </Row>
    </div>
  );
}

export default App;
