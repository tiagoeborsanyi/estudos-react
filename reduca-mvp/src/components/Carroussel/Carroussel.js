import React from 'react';

import classes from './Carroussel.css';

const carroussel = props => (
    <div className={classes.container}>
        <div>
            <div className={classes.carousel}>
                <ul className={classes.slides}>
                    <input type="radio" name="radio-buttons" className={classes.img1} id="img1" defaultChecked />
                    <li className={classes.slideContainer}>
                        <div className={classes.slideImage}>
                            <img src={require('../../assets/images/edu1.jpeg')} alt="imagetr 1" />
                        </div>
                        <div className={classes.carouselControls}>
                            <label htmlFor="img3" className={classes.prevSlide}>
                                <span>&lsaquo;</span>
                            </label>
                            <label htmlFor="img2" className={classes.nextSlide}>
                            <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" className={classes.img2} id="img2" />
                    <li className={classes.slideContainer}>
                        <div className={classes.slideImage}>
                            <img src={require('../../assets/images/edu2.png')} alt="imagemj 2" />
                        </div>
                        <div className={classes.carouselControls}>
                            <label htmlFor="img1" className={classes.prevSlide}>
                                <span>&lsaquo;</span>
                            </label>
                            <label htmlFor="img3" className={classes.nextSlide}>
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" className={classes.img3} id="img3" />
                    <li className={classes.slideContainer}>
                        <div className={classes.slideImage}>
                            <img src={require('../../assets/images/edu3.png')} alt="imagetg 3" />
                        </div>
                        <div className={classes.carouselControls}>
                            <label htmlFor="img2" className={classes.prevSlide}>
                                <span>&lsaquo;</span>
                            </label>
                            <label htmlFor="img1" className={classes.nextSlide}>
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <div className={classes.carouselDots}>
                        <label htmlFor="img1" className={classes.carouselDot+' '+classes.imgDot1} id="img1"></label>
                        <label htmlFor="img2" className={classes.carouselDot+' '+classes.imgDot2} id="img2"></label>
                        <label htmlFor="img3" className={classes.carouselDot+' '+classes.imgDot3} id="img3"></label>
                    </div>
                </ul>
            </div>
        </div>
    </div>
);

export default carroussel;