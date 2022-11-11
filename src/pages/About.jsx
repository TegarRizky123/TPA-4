import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function About() {
  return (
    <>
      <Container>
        <div className="d-flex center">
          <div className="text-about">
            <p>I am tegar risqy yulian santoso born 23 juli 2003 now residing in pemalang, I am a graduate of SMA N 2 Pemalang who is now focusing on studying at the Harapan Bersama Polytechnic campus in Tegal City, currently I am participating in an independent study program held by the Indonesian Ministry of Education, Culture, Research and Technology which aims to increase my abilities in the field of web programming, apart from web programming I am also learning to hone my skills in group discussions, and also hone my public speaking skills.</p>
          </div>
          <Card.Img id="me" variant="top" style={{ width: '400px' }} src="https://res-console.cloudinary.com/dzgtndwwd/thumbnails/v1/image/upload/v1667829116/bWVfbHZmbnB5/preview" />
        </div>
      </Container>
      <Container>
        <div className="hobby">
          <h3 className='text-center'>My Hobby</h3>
          <hr />
          <CardGroup>
            <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/a4/2c/d9/a42cd915110ffb8cd7cf97af2a8c1139.gif" />
              <Card.Body style={{ backgroundColor: "#fff" }}>
                <Card.Title style={{ backgroundColor: "#fff" }}>Fishing</Card.Title>
              </Card.Body>
            </Card>
            <Card className='mx-1' style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/f4/bc/e0/f4bce0eab7f3823a7a44cde24384ec8f.gif" />
              <Card.Body style={{ backgroundColor: "#fff" }}>
                <Card.Title style={{ backgroundColor: "#fff" }}>Bicycle</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/dc/c9/ce/dcc9cea8525b59b91d1a6ed0e27fff59.gif" />
              <Card.Body style={{ backgroundColor: "#fff" }}>
                <Card.Title style={{ backgroundColor: "#fff" }}>Music</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </Container>
    </>
  )
}

export default About