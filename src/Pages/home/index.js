import React from 'react';
import './home.css'; 
import img from "./Mr S.N. Goenka.jpg"
import Footer from '../Footer/footer';

const Home = () => {
    return (
        <>
        <div className="container" >
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-12 col-xl-12 text-center mt-4">
                    <h3 className="custom-heading">Dhamma Pattana Vipassana Centre</h3>
                    <p className="subtext mt-2">Vipassana Meditation as taught by  <a href="https://www.dhamma.org/en/about/goenka" className="link1"> S.N. Goenka </a> in the tradition of Sayagyi U Ba Khin</p>
                </div>
                <div className="container-lg topspacing">
                    <p className='para'>
                        The Dhamma Pattana Vipassana Center conducts Vipassana courses especially for
                        <a href="#Business" className="link"> Business Executives,</a> professionals, and government officials.
                    </p>
                    <p className='para'>
                        <a href="https://www.dhamma.org/en/about/vipassana" className="link">Vipassana,</a> which means to see things as they really are, is one of India's most ancient techniques of meditation. It was taught in India more than 2500 years ago as a universal remedy for universal ills, i.e., an 
                        <a href="https://www.dhamma.org/en/about/art" className="link"> Art of Living </a>. For those who are not familiar with Vipassana Meditation, an 
                        <a href="https://video.server.dhamma.org/video/intro/vintro.html" className="link"> Introduction to Vipassana by Mr. Goenka</a> and 
                        <a href="https://www.dhamma.org/en/about/qanda" className="link">Questions & Answers</a> about Vipassana are available.
                    </p>
                    <p className='para ' >
                        The technique of Vipassana Meditation is taught at ten-day residential courses during which participants learn the basics of the method and practice sufficiently to experience its beneficial results.
                    </p>
                    <h2 className="Heading">Vipassana and the Art of Corporate Management</h2>
                    <p className='para'>
                        Business management involves dealing with all kinds of people. Some behave decently, some don’t. Among this maze of uncertainty, there is one certainty – we don’t have a choice of people we get to deal with. We may not have any immediate options. Does it help to get upset? No, it only makes things worse. Not only for ourselves, but also for those around us. But we do just that -- unless, of course, we have learnt Vipassana meditation and practice it regularly.
                    </p>
                    <p className='para'>
                        Vipassana teaches us not to react in the face of provocation. It provides us with the skill to deal with all types of situations in life -- with serenity, tranquility, and equanimity. Vipassana is an art of stress management. It is an art of people management, art of conflict management. There may be more to the science of management, but Vipassana helps in the art of corporate management.
                    </p>
                    <blockquote className="blockquote">
                        <p className="mb-0 para">“Peace in the world cannot be achieved unless there is peace within individuals. Agitation and peace cannot co-exist. One way to achieve inner peace is Vipassana or insight meditation - a non-sectarian, scientific, results-oriented technique of self-observation and truth realization. Practice of this technique brings experiential understanding of how mind and body interact.</p>
                        <footer className="blockquote-footer para mt-1">A sage once said, <cite title="Source Title">"A balanced mind is necessary to balance the unbalanced mind of others."</cite></footer>
                    </blockquote>
                    <p className='para'>
                        For society to be peaceful, more and more members of society must be peaceful. As leaders, we have a responsibility to set an example, to be an inspiration.
                    </p>
                    <h2 className="Heading">The Teacher - Mr S.N. Goenka</h2>
                    <div class="row ">
                        <div class="col-lg-6 image-section">
                            <img src={img} alt="Placeholder Image" />
                        </div>
                        
                        <div class="col-lg-6">
                            <p  className='para'>
                                Mr. S.N.Goenka was born in Mandalay, Myanmar (Burma ) in 1924, in a business family of Indian origin. Mr. Goenka was a successful entrepreneur even at a young age, eventually establishing sugar mills, textile factories with more than 1,000 employees and import-export firms with offices around the world. He became one of the country’s wealthiest businessmen. By the age of 30, he was elected president of the Yangon (formerly Rangoon) Chamber of Commerce, apart from heading many social, educational and cultural organizations. Relocating to India, he began teaching Vipassana in 1969, where for a few years, he regularly spent ten days teaching and twenty days working at his business office in Mumbai. From 1979 onwards he also started giving courses outside India, notably in Sri Lanka, Thailand, Nepal, France, England, North America, Japan, Australia, and New Zealand. All of these countries today have one or more centres.
                            </p>
                        </div>
                    </div>
                    <p  className='para'>
                        Mr. Goenka, who for most of his life worked as a prominent international businessman based in Myanmar and India, was a keynote speaker on the subject of Spirituality In Business at the World Economic Forum in Davos, Switzerland in January, 2000, addressed the World Peace Summit held at the United Nations in August, 2000 and was the keynote speaker at the Spirit in Business Conference ("SiB") held in New York City in April 2002.
                    </p>
                        <p  className='para'>
                        In April, 2002, Mr. Goenka conducted in the United States, the first 10 day course in Vipassana Meditation especially for business executives and government officials. Subsequently courses are being held at various locations around the world.
                    </p>
                    <p className='para'>
                        This is a paragraph of text that will be displayed next to the image. You can include any content here, such as information about the image, details about a topic, or any other relevant text.
                    </p>
                    <p className='para'>
                        The technique of Vipassana meditation that is taught in Executive courses is identical to that taught in regular  <a href="https://www.dhamma.org/en-US/index" className="link">10-day courses </a>. The only difference is that in an Executive course there are a few additional talks and sets of questions and answers by Mr. Goenka, who was a businessman himself for many years, that are specifically directed to using the principles of Vipassana to artfully deal with the problems and stresses of the business world.
                    </p>
                    <p className='para'>
                        As with all Vipassana courses in this tradition, there are no charges for the course - not even to cover the cost of food and accommodation. All expenses are met by donations from people who, having completed a course and experienced the benefits of Vipassana, wish to give others the opportunity to also benefit. Donations can only be accepted from students once they have completed a 10-Day course.
                    </p>
                    <h2 className="Heading">Course Language</h2>
                    <p className='para'>
                        Vipassana courses at Dhamma Pattana are conducted with instructions in Hindi & English only. In case you are unable to understand Hindi or English, please inform at the time of registration and give your language preference. Instructions are available in a limited number of other languages. The center will try to accommodate your request as far as possible. Please however do reconfirm before coming for the course.
                    </p>
                </div>
            </div>
            
        </div>
        <Footer />
        </>

    );
};

export default Home;