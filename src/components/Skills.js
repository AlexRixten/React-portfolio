import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'
import { SkillItem } from './SkillItem';

const skills = [
    {
        'id': '1',
        'percent': '80',
        'title': 'HTML5'
    },
    {
        'id': '2',
        'percent': '75',
        'title': 'CSS3'
    },
    {
        'id': '3',
        'percent': '70',
        'title': 'JS'
    },
    {
        'id': '4',
        'percent': '55',
        'title': 'React'
    },
    {
        'id': '5',
        'percent': '45',
        'title': 'React Native'
    },
]

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et labore excepturi a provident voluptatum debitis, eligendi eum ut blanditiis ducimus consequuntur reprehenderit, quisquam vel molestias recusandae nostrum! Soluta, obcaecati!</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {skills.map(item => <SkillItem key={item.id} item={item} />)}
                            </Carousel>;
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="sharp" className="background-image-left" />
        </section>
    )
}
