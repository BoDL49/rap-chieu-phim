import React from 'react';
import './style.css';

const Modal = (props) => {
    const url = props.show ? 'https://www.youtube.com/embed/qLEYF8KX6GA?autoplay=1' : '';

    return (
        <div>
            {props.show && <div className="modal-overlay" onClick={props.close}></div>}
            <div className='modal-wrapper'
                style={{
                    display: props.show ? 'block' : 'none',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className='modal-header'>
                    <span className="close-modal-btn" onClick={props.close}>x</span>
                </div>
                <div className='modal-body'>
                    <iframe className='video-src' src={url}
                        allow='autoplay; encrypted-media'
                        title='video'
                        frameBorder="0"
                    />
                </div>
            </div>
        </div>
    );
}

export default Modal;
