import { Card, Image, ListGroup } from 'react-bootstrap';
import './AboutUs.css'
import PersonalImg from '../../Images/personal.jpeg';
import { MDBIcon } from 'mdb-react-ui-kit';

function AboutUs() {
  return (
      <div className="aboutUsDiv">
    <Card style={{ width: '22rem' }}>
      <Image variant="top" src={PersonalImg} alt="Image of the website creator" />
      <Card.Body>
        <Card.Title>Stoyan Nikolov</Card.Title>
        <Card.Text>
          Passionate web developer who is looking to return back to his homeland 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><MDBIcon color='secondary' icon='phone' className='me-3' />+44 7494 100013</ListGroup.Item>
        <ListGroup.Item><MDBIcon color='secondary' icon='envelope' className='me-3' />stoyan.iv.nikolov@gmail.com</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">CV Resume</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AboutUs;