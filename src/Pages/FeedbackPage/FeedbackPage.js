import React from 'react';
import Meditate from './meditate.jpg';
import './Feedback.css';

const Feedback = () => {
    return (
        <>
            <div className="container" style={{ maxWidth: "1200px" }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 col-xl-10" >
                        <div className="mb-4">
                            <h5 className="heading">Roop Jyoti – Industrialist and Economist</h5>
                            <p className="text">With Vipassana we get rid of our negativities and purify our mind and a pure mind guided by pure Dhamma always makes the right decision, always take the right actions.</p>
                        </div>

                        <div className="mb-4">
                            <h5 className="heading">L. Fresse, Vice-President, Fresse & Nicholas Inc.</h5>
                            <p className="text">Vipassana leads to clearer thinking and clear thinking is good for business.</p>
                        </div>

                        <div className="mb-4">
                            <h5 className="heading">D.R. Karthikeyan I.P.S</h5>
                            <p className="text">Special Director, Central Bureau of Investigation, New Delhi</p>
                            <p className="text">I am able to increasingly accept people as they are instead of trying to change them all the time, to fit them in my own standard ‘frame’. To that extent life has become calmer, healthier, peaceful, and positive.</p>
                        </div>

                        <div className="col-md-4 d-flex align-items-end justify-content-center" style={{ width: '100%' }}>
                            <img
                                src={Meditate}
                                alt="Vipassana group meditation"
                                className="img-fluid"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="mb-4">
                                <h5 className="heading">S. Soni, Medical Director, Northern Cancer Centre, Dixon</h5>
                                <p className="text">More relaxed, do not get angry, good listener and performance is excellent along with productivity.</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="heading">Srilata Swaminadhan</h5>
                                <p className="text">Rajasthan State party spokesperson-C.P.I & National President of the All India Progressive Women’s Association</p>
                                <p className="text">I am the scientist, I am the laboratory and I am the specimen! A whole new universe, that I was totally oblivious of, has opened up to me and I am on a new and meaningful journey.</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="heading">N. Steven, Vice-President, Sales, Reber / Russell Company Boulder, CO.</h5>
                                <p className="text">Continued improvement! Calmer in the face of client anxiety and market conditions.</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="heading">Dr. A. N. Rao- Deputy Collector, Betul, M.P</h5>
                                <p className="text">I have experienced an inner joy by attending this course.</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="heading">M. Schaffer, President & CEO, Global Tactics, Spokane, WA.</h5>
                                <p className="text">After the course, I have better ability to cope with stress, better concentration and higher energy level.</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="heading">Dr. Ramesh Shah-Cardiologist, Mumbai</h5>
                                <p className="text">Though I am a medical practitioner for quite some time, I have no hesitation to say that I am highly grateful for this technique which helps to overcome the maladies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feedback;
