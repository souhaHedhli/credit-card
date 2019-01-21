import React, { Component } from 'react';
import './creditCard.css';
import { Container, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import puce from '../../assets/puce.png';
// import background from '../../assets/background.jpg';
import masterCard from '../../assets/mastercard-logo.jpg';
import visaLogo from '../../assets/visa-logo.png';

library.add(faCaretRight)

let title = 'credit card';
let cardNumber = '7253 3256 7895 1245';
let secretCode = 5422;
let validationMonth = '11';
let validationYear = '50';
let cardHolder = 'Hedhli souha'

class CreditCard extends Component {
  render() {
    return (
      <Container className='bg'>
        <Row>
          <Col className='titleStyle'>
            <span className='float-right'> {title.toUpperCase()} </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={puce} className='puceStyle m-l-20' alt='puce' />
          </Col>
        </Row>
        <Row>
          <Col sm="9">
            <Row>
              <Col sm="10" className='m-t-10'>
                <span className='cardNumberStyle'>{cardNumber}</span>
              </Col>
            </Row>
            <Row className='m-t-10'>
              <Col className='secretCode-style'>
                {secretCode}
              </Col>



              <Col className='secretCode-style'>
                <Row>
                  <Col>
                  <div className='font-10 m-l-50'>MONTH/YEAR</div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" className='center d-flex p-r-xs'><span className='font-10 float-right'>VALID THRU</span>
                  <span><FontAwesomeIcon icon="caret-right" /></span>
                  </Col>
                  <Col sm="9">
                    {validationMonth}/{validationYear}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className='cardHolderStyle m-t-10'>
                {cardHolder.toUpperCase()}
              </Col>
            </Row>
          </Col>
          <Col sm="3" className='align-items-center m-t-20'>
            <div> <img src={masterCard} className='masterCard-style' alt='master card' /> </div>
            <div> <img src={visaLogo} className='visaLogo-style' alt='visa logo' /> </div>
          </Col>
        </Row>


      </Container>
    );
  }
}

export default CreditCard;
