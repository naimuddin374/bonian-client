import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import 'font-awesome/css/font-awesome.min.css';
import "../../assets/css/modal-video.min.css";

class VideoModal extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <React.Fragment>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='OrS-93U4AYQ' onClose={() => this.setState({ isOpen: false })} />
                <a id="play-video" onClick={this.openModal} className="video-play-button" href="#video">
                    <i className="fa fa-play"></i>
                </a>
            </React.Fragment>
        )
    }
}

export default VideoModal;