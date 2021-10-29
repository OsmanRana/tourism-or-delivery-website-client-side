import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="rounded ">
            <hr/>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="https://i.ibb.co/YDRhRdT/polynesia-gf00491757-640.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Travel the world with Us</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  rounded"
                        src="https://i.ibb.co/2hFJcC8/beach-g952aed1f1-640.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Relax and Enjoy</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="https://i.ibb.co/Q9R91B2/nature-g96fa0aac1-640.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>See the Unseen</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;