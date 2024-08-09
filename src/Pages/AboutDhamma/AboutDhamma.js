import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AboutDhamma.css';

const AboutDhamma = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Card className="p-4 shadow-sm border-0">
                        <Card.Body>
                            <h2 className="text-center mb-4">
                                About Dhamma Pattana Vipassana Centre
                            </h2>
                            <p className="lead">
                                Dhamma Pattana Vipassana Centre (Harbour of Dhamma) is situated atop a lush green hill, overseeing the sea, in a quaint village called Gorai a few kilometers away from Mumbai city and yet untouched by its stress and pollution.
                                The close proximity of the centre to the main city enables people leading extremely busy lives to reach a Vipassana center in a very short time.
                                This peaceful haven for Vipassana meditators lies within the majestic Global Pagoda complex.
                                The Global pagoda stores the precious relics of Buddha, emanating powerful meditative vibrations that would put a wandering mind to rest.
                            </p>
                            <p className="lead">
                                Dhamma Pattana Centre's meditation hall and rooms being air-conditioned, one is advised to bring appropriate woollens.
                                The cente is a compact two-story building and one is required to climb two stairs, 3 to 4 times a day.
                                However there is an elevator available for use of the elderly and needy. Accomodation is usually individual,
                                however in certain unavoidable circumstances one may have to share a room with another participant.
                            </p>
                            <div className="text-center mb-4">
                            <Button
                                style={{
                                color: 'green',
                                borderColor: 'green',
                                fontSize: '1.2rem',
                                padding: '10px 20px',
                                backgroundColor:'white'
                                }}
                                href="https://pattana.dhamma.org/photos.shtml"
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseOver={(e) => {
                                e.target.style.backgroundColor = 'green';
                                e.target.style.color = 'white';
                                }}
                                onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'white';
                                e.target.style.color = 'green';
                                }}
                            >
                                See More Photos
                            </Button>
                            </div>

                            <h3 className="text-center mb-4">Getting to Dhamma Pattana</h3>
                            <div className="mb-3">
                                <strong className="mb-0">Dhamma Pattana Vipassana Centre</strong>
                                <p className="mb-0">Inside Global Vipassana Pagoda Campus</p>
                                <p className="mb-0">Next to Esselworld, Gorai Village,</p>
                                <p className="mb-0">Borivali (West), Mumbai 400091</p>
                            </div>
                            <p className="lead">
                                The Dhamma Pattana center is located inside the Global Vipassana Pagoda Complex. To reach it, you must come to Borivali and take a ferry boat from the Gorai jetty.
                            </p>
                            <p className="lead">
                                <strong>From Borivali (west) to Global Vipassana Pagoda:</strong><br />
                                From Borivali Station, exit on the west side, and take an auto-rickshaw to the Gorai creek. From there, take a ferry from the Gorai Jetty, adjacent to the bus stand, to Esselworld. The walking distance from Esselworld to the Pagoda is 5 to 10 minutes.
                            </p>
                            <p className="lead">
                                <strong>Drive to the Global Vipassana Pagoda:</strong><br />
                                You can also drive directly to the Global Vipassana Pagoda. From the airport, take the Western Express Highway up to Dahisar. On the Mira Bhayander road, take a left at the large Shivaji statue at Dahisar. Follow the signboards for Esselworld, and drive all the way to the gate of Esselworld. Inform the security that you are visiting the Global Vipassana Pagoda.
                            </p>
                            <h5 className="mt-4 mb-3">Car Hire Services in Mumbai</h5>
                            <p className="lead">
                                Dial-a-Taxi service is available from the following operators in Mumbai:
                            </p>
                            <div className="mb-4">
                                <p><strong>Meru Taxi:</strong> <span className="text-primary">+91-22-44224422</span></p>
                                <p><strong>Tab Cab:</strong> <span className="text-primary">+91-22-63636363</span></p>
                                <p><strong>Easy Cab:</strong> <span className="text-primary">+91-22-43434343</span></p>
                            </div>
                            <h5 className="mt-4 mb-3">Recommended Hotels</h5>
                            <p className="lead">
                                Below are some hotels where Vipassana students often stay. Please note that DPVC is not responsible for the services provided by these hotels or taxi companies.
                            </p>
                            <ul className="list-unstyled">
                                <li>
                                    <h6>Near Mumbai International and Domestic Airport:</h6>
                                    <p>Hotel Columbus, Vile Parle East. Tel: +91-22-26182029</p>
                                </li>
                                <li>
                                    <h6>Hotel Suresha, Chakala, Andheri East:</h6>
                                    <p>Near Airport. Tel: +91-22-28232323, +91-22-28261212</p>
                                </li>
                                <li>
                                    <h6>On the Western Express highway, closer to Dhamma Pattana:</h6>
                                    <p>Hotel Karan Palace, Plot No.8, Sonawala Road, Goregaon (E), Mumbai - 400063. Tel: +91-22-26861615</p>
                                </li>
                                <li>
                                    <h6>Hotel Sai Leela:</h6>
                                    <p>Plot No.9, Sonawala Road, Goregaon (E), Mumbai - 400063. Tel: +91-22-26865350</p>
                                </li>
                                <li>
                                    <h6>Near Mumbai Main Business District:</h6>
                                    <p>Hotel Lawrence - +91-22-22843618</p>
                                    <p>Hotel Residency - +91-22-66670555 residencyhotel@vsnl.com</p>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default AboutDhamma;
