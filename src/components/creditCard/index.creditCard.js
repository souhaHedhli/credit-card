import React, { Component } from 'react';
import './creditCard.css';
import { Container, Row, Col } from 'reactstrap';

import puce from '../../assets/puce.png';
// import background from '../../assets/background.jpg';
import masterCard from '../../assets/mastercard-logo.jpg';
import visaLogo from '../../assets/visa-logo.png';

let title = 'credit card';
let cardNumber = '7253 3256 7895 1245';
let secretCode = 522;
let validationDate = '11/50';
let cardHolder = 'Hedhli Souha'

class CreditCard extends Component {
  render() {
    return (
      <Container className='bg'>
        <Row>
          <Col className='float-right'>
            {title.toUpperCase}
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={puce} className='puceStyle' alt='puce' />
          </Col>
        </Row>
        <Row>
          <Col sm="9">
            <Row>
              <Col sm="6" className='cardNumberStyle'>
                {cardNumber}
              </Col>
            </Row>
            <Row>
              <Col>
                {secretCode}
              </Col>
              <Col>
                {validationDate}
              </Col>
            </Row>
            <Row>
              <Col className='cardHolderStyle'>
                {cardHolder.toUpperCase}
              </Col>
            </Row>
          </Col>
          <Col sm="3" className='d-flex align-items-center'>
            <img src={masterCard} alt='master card' />
            <img src={visaLogo} alt='visa logo' />
          </Col>
        </Row>


      </Container>
    );
  }
}

export default CreditCard;
