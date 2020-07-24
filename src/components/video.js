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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.video.node.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="560" height="315"
                            title={props.video.node.title}
                            src={'https://www.youtube.com/embed/' + props.video.node.id}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
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