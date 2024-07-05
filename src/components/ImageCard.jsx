import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button  } from 'react-bootstrap';

const ImageCard = ({ imageUrl, title,descriptionTitle, description }) => {
    const handleBookCourse = () => {
        alert('Course booked successfully!');
      };
  return (
    <Card style={{ width: '18rem',marginTop:'50px' }}>
      <Card.Img variant="top" src={imageUrl} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        <strong>{descriptionTitle}</strong><br/><span style={{ display: 'block' }}>
          {description}
          </span>
        </Card.Text>
        <Button variant="primary" onClick={handleBookCourse}>Book Course</Button>

      </Card.Body>
    </Card>
  );
};

export default ImageCard;
