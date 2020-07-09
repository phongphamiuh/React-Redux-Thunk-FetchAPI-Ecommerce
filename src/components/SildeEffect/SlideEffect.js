import React, { Component } from 'react';

import {Carousel} from 'react-bootstrap'

class SlideEffect extends Component {
    render() {
        return (
           
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://resource-cms.springernature.com/springer-cms/rest/v1/content/18118944/data/v1"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Trải nghiệm thôi</h3>
                    <p>Sách sẽ đưa các bạn đến những kiến thức tuyệt vời</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://resource-cms.springernature.com/springer-cms/rest/v1/content/12458928/data/v3"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Trải nghiệm thôi</h3>
                    <p>Sách sẽ đưa các bạn đến những kiến thức tuyệt vời</p>
                    </Carousel.Caption>
                </Carousel.Item>            
            </Carousel>
           
        );
    }
}
export default SlideEffect;