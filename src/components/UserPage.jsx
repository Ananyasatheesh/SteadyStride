import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard'; // Import your ImageCard component
import image1 from '../assets/image1.jpg'; // Import your image files
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';


const images = [
  { id: 1, imageUrl: image1, title: 'HTML', descriptionTitle: 'Mastering React JS: From Basics to Advanced Concepts',  description: 'Learn the building blocks of the web with HTML. Dive deep into semantic markup, forms, and accessibility to create well-structured web pages.'},
  { id: 2, imageUrl: image2, title: 'App Development', descriptionTitle: 'Comprehensive App Development', description: ' In this immersive course, you will learn everything you need to know to create and deploy fully functional mobile and web applications. ' },
  { id: 3, imageUrl: image3, title: 'React', descriptionTitle: 'Mastering React JS: From Basics to Advanced Concepts', description: 'Welcome to "Mastering React JS: From Basics to Advanced Concepts." In this comprehensive course, you will dive deep into the world of React JS, a popular JavaScript library. ' },
  { id: 4, imageUrl: image4, title: 'CSS', descriptionTitle: 'Mastering CSS', description: 'Master CSS fundamentals and advanced techniques in this comprehensive course. Learn to create stunning and responsive web designs with hands-on projects. ' },
  { id: 5, imageUrl: image5, title: 'C', descriptionTitle: 'Exploring C', description: 'Master the fundamentals of the C programming language. Learn about variables, loops, functions, and pointers to build a strong foundation in programming.' },
  { id: 6, imageUrl: image6, title: 'MERN Stack', descriptionTitle: 'Mastering MERN', description: 'Become a full-stack developer with the MERN (MongoDB, Express.js, React, Node.js) stack. Learn to build dynamic and scalable web applications using popular JavaScript technologies' },
];

const UserPage = () => {
  return (
    <Container>
      <Row>
        {images.map(image => (
          <Col key={image.id} md={4}>
            <ImageCard
              imageUrl={image.imageUrl}
              title={image.title}
              descriptionTitle={image.descriptionTitle}
              description={image.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserPage;
