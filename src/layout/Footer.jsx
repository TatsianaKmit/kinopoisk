import React from 'react';
import { Link } from 'react-router-dom';
import { Chat, Instagram, Telegram, Facebook, LinkedIn, GitHub } from '../style/icons/index';

function Footer() {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <div className="container-slim">
                <div className='footer__wrapper'>
                    <div className='footer__year'>
                        <h4>©{year}</h4>
                    </div>
                    <div className='footer__contact'>
                        <div className="footer__chat">
                            <Chat />
                        </div>
                        <div className="footer__text">
                            <h4>Contact Me</h4>
                        </div>
                        <div className="footer__icons">
                            <div className="footer__icon">
                                <Link to='https://www.instagram.com/tania_kmit/' target="_blank">
                                    <Instagram />
                                </Link>
                            </div>
                            <div className="footer__icon">
                                <Link to='https://www.facebook.com/tania_kmit' target="_blank">
                                    <Facebook />
                                </Link>
                            </div>
                            <div className="footer__icon">
                                <Link to='https://t.me/tania_kmit' target="_blank">
                                    <Telegram />
                                </Link>
                            </div>
                            <div className="footer__icon">
                                <Link to='https://www.linkedin.com/in/tatsiana-kmit-9a1409308' target="_blank">
                                    <LinkedIn />
                                </Link>
                            </div>
                            <div className="footer__icon">
                                <Link to='https://github.com/TatsianaKmit' target="_blank">
                                    <GitHub />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer