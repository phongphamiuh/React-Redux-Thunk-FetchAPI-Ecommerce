import React, { Component } from 'react';

import {Carousel} from 'react-bootstrap'

class SlideEffect extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://resource-cms.springernature.com/springer-cms/rest/v1/content/12458928/data/v3"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://resource-cms.springernature.com/springer-cms/rest/v1/content/12458928/data/v3"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://resource-cms.springernature.com/springer-cms/rest/v1/content/12458928/data/v3"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default SlideEffect;