import React from 'react';
import './../css/Carousel_SSS.css';
import {Jumbotron, Container, Button, Image, Carousel, Row, Col} from 'react-bootstrap';
import carouselbg from './../img/carousel_bg2.png';
import feedback_1 from './../img/feedback/lasya-priya-95x120.png';
import feedback_2 from './../img/feedback/hasini-99x120.png';
import feedback_3 from './../img/feedback/lasya-107x120.png';
import feedback_4 from './../img/feedback/women_placeholder.jpg';
import feedback_5 from './../img/feedback/prem-106x120.png';
import feedback_6 from './../img/feedback/kiran-kumar-chalagalla-120x120.png';
import feedback_7 from './../img/feedback/usha-kranti-120x120.png';
import feedback_8 from './../img/feedback/G.SRINIVASA-RAO-ASSOCIATE-120x120.png';
import feedback_9 from './../img/feedback/rex-rajan-120x120.png';
import feedback_10 from './../img/feedback/ankalamma-120x120.png';
import feedback_11 from './../img/feedback/vishuvardhana-rao-107x120.png';

function Carousel_SSS() {
    const imgStyle = {
        borderRadius: '50%',
        border: `3px solid #FBB03B`
    };
    const transparentImgStyle = {
        filter: `opacity(0%)`
    };
    return (
        <div className="div_style">
        <Carousel className='carousel_style'>
        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_1} style={imgStyle} alt="Laasya Priya"></img>
            <p>Laasya Priya</p>
            <p className="feedbackStyle">"I have improved in my Listening, speaking and reading ability and i think the course is excellent."</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_2} style={imgStyle} alt="Haasini"></img>
            <p>Haasini</p>
            <p className="feedbackStyle">"I have improved my understanding, speaking and listening skills in English language. The various activities conducted have made me improve my accent."</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_3} style={imgStyle} alt="Laasya"></img>
            <p>Laasya</p>
            <p className="feedbackStyle">"I feel great about Cambridge flyers as i have learnt not only about English grammar but also LSRW skills which i have improved alot."</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_4} style={imgStyle} alt="Sharika"></img>
            <p>Sharika</p>
            <p className="feedbackStyle">"I am in Cambridge flyers now and so far i have learnt many things and i feel very good about the course. Thank you."</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_5} style={imgStyle} alt="Prem"></img>
            <p>Prem</p>
            <p className="feedbackStyle">"I am a flyers student. So far i have learnt many things in English language without any pressure. Thank you."</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_6} style={imgStyle} alt="Kiran Kumar Chalagalla"></img>
            <p>Kiran Kumar Chalagalla</p>
            <p className="feedbackStyle">"It’s a wonderful institute for english learning.Faculity is so friendly.Best institute for Cambridge course.you definitely find improvement in yourself."</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_7} style={imgStyle} alt="Usha Kranthi"></img>
            <p>Usha Kranthi</p>
            <p className="feedbackStyle">"One of the excellent English coaching center in Vijayawada."</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_8} style={imgStyle} alt="DR.G.SRINIVASA RAO ASSOCIATE PROFESSOR,EEE DEPARTMENT"></img>
            <p>DR.G.SRINIVASA RAO ASSOCIATE PROFESSOR,EEE DEPARTMENT</p>
            <p className="feedbackStyle">"My daughter has attended for Cambridge English movers .It is an excellent English training institute for school, college students, employees and business people."</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_9} style={imgStyle} alt="Rex Rajan"></img>
            <p>Rex Rajan</p>
            <p className="feedbackStyle">"Best Training institute in Vijayawada to Teach Cambridge&nbsp; Courses .The Faculty are highly skilled professionals. I recommend BEC Courses for Students , Employees and Business Professionals to improve&nbsp; English Language skills."</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_10} style={imgStyle} alt="Ankalamma Konakalla"></img>
            <p>Ankalamma Konakalla</p>
            <p className="feedbackStyle">"I have been attending the course Since 1st November 2019. It is an excellent English training institute for employees, adults, school and college students."</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src={carouselbg} style={transparentImgStyle} className="d-block w-100"></img>
            <Carousel.Caption>
                <p><u>Testimonials</u></p><br />
                <img width={109} height={130} src={feedback_11} style={imgStyle} alt="Vishnu vardhan Rao"></img>
            <p>Vishnu vardhan Rao</p>
            <p className="feedbackStyle">"First step English is excellent English coaching center. Educator’s are well knowledgeable ,co-operative, polite and take excellent care of students. My both sons have finished Cambridge certification one level. I have seen a dramatic change in their academic career. My Children have improved skills in listening, speaking, writing and reading. This happened due to personal care of the merciful teacher Thank you very much."</p>
            </Carousel.Caption>
        </Carousel.Item>

        </Carousel>
        </div>
    )
}

export default Carousel_SSS
