import React, { useState } from 'react';
import Modal from './modal';
import Play from '../../assets/icon/ic-play-circle-red.svg';

const PopupComponent = () => {
    const [isShowing, setIsShowing] = useState(false);

    const openModalHandler = () => {
        setIsShowing(true);
    }

    const closeModalHandler = () => {
        setIsShowing(false);
    }

    return (
        <div>
            <div onClick={openModalHandler}
                style={{
                    textDecoration: 'underline',
                    fontSize: '20px',
                    paddingLeft: '2px',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <img src={Play} alt='Play' style={{ marginRight: '5px' }} />
                Xem trailer
            </div>

            <Modal
                show={isShowing}
                close={closeModalHandler}
            />
        </div>
    );
}

export default PopupComponent;
