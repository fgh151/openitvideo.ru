import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

const Video = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div>
            <div onClick={handleShow} onKeyDown={handleShow} role='button' tabIndex={0}>
                <img src={'https://img.youtube.com/vi/' + props.video.node.id + '/mqdefault.jpg'}
                     alt={props.video.node.title}/>
                <p>
                    {props.video.node.title}
                </p>
            </div>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.video.node.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item"
                                title={props.video.node.title}
                                src={'https://www.youtube.com/embed/' + props.video.node.id}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default Video;