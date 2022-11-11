import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Portofolio() {
  return (
    <>
   <Container>
    <div className="portofolio">
      <h3 className='text-center mt-3'>My Portofolio</h3>
      <CardGroup className='mt-4'>
      <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1667832077/Screenshot_2022-11-07_214053_imn5ld.png" />
      <Card.Body>
        <Card.Title>MyNature</Card.Title>
        <Card.Text>
        MyNature is a website created with the aim of educating the public on the importance of protecting the environment around us.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='mx-3' style={{ width: '12rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1667832618/Screenshot_2022-11-07_214433_jalobk.png" />
      <Card.Body>
        <Card.Title>BMI Calculator</Card.Title>
        <Card.Text>
          BMI Calculator is a website created using javascript, html, css that aims to determine the body mass index of a person.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1667833196/Screenshot_2022-11-07_215938_slm5kh.png" />
      <Card.Body>
        <Card.Title>Gojek Clone</Card.Title>
        <Card.Text>
        Gojek clone adalah sebuah tiruan dari gojek yang dimana saya disini menggunakan dart flutter dan website ini bertujuan untuk mengembangkan ilmu saya
        </Card.Text>
      </Card.Body>
    </Card>

      </CardGroup>
    </div>
   </Container>
   </>
  )
}

export default Portofolio