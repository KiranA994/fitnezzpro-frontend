import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap'

function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>

<iframe src="/video1.mp4" frameborder="0" onClick={handleShow}>
</iframe>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6} sm={12}>
                    <iframe src="/video1.mp4" frameborder="0"></iframe>
                </Col>
            </Row>
        </Modal.Body>
       
      </Modal>

      <iframe src="/video2.mp4" frameborder="0" onClick={handleShow}>
      </iframe>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6} sm={12}>
                    <iframe src="/video2.mp4" frameborder="0"></iframe>
                </Col>
            </Row>
        </Modal.Body>
       
      </Modal>

      <iframe src="/video3.mp4" frameborder="0" onClick={handleShow}>
      </iframe>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6} sm={12}>
                    <iframe src="/video3.mp4" frameborder="0"></iframe>
                </Col>
            </Row>
        </Modal.Body>
       
      </Modal>

      <iframe src="/video4.mp4" frameborder="0" onClick={handleShow}>
      </iframe>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6} sm={12}>
                    <iframe src="/video4.mp4" frameborder="0"></iframe>
                </Col>
            </Row>
        </Modal.Body>
       
      </Modal>


    </>


  )
}

export default VideoCard