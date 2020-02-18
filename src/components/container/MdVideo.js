import React from 'react';
import Modal from 'react-responsive-modal';

// import video 
import MdvideoContent from "../../../src/assets/videos/MD.mp4";

class MdVideo extends React.Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <React.Fragment>
                <button className="md-video-btn-play" onClick={this.onOpenModal}><i className="fa fa-play"></i></button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <video className='mdvideo_modal' autoPlay loop>
                        <source src={MdvideoContent} type='video/mp4' />
                    </video>
                </Modal>
            </React.Fragment>
        );
    }
}

export default MdVideo