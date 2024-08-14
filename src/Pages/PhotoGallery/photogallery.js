import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img10 from "./assets/img10.jpg";
import img11 from "./assets/img11.jpg";
import img12 from "./assets/img12.jpg";
import "./photogallery.css";

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate
    const images = [
        { src: img1, alt: 'Image 1', text: 'Garden and pathways for walking' },
        { src: img2, alt: 'Image 2', text: 'DPVC main building' },
        { src: img3, alt: 'Image 3', text: 'A/c Meditation Hall' },
        { src: img4, alt: 'Image 4', text: 'Individual Meditation cushions' },
        { src: img5, alt: 'Image 5', text: 'Individual rooms' },
        { src: img6, alt: 'Image 2', text: 'All residential rooms are equipped with A/C' },
        { src: img7, alt: 'Image 1', text: 'Modern Hygenic Kitchen' },
        { src: img8, alt: 'Image 3', text: 'Solar Heater for hot water supply' },
        { src: img10, alt: 'Image 5', text: 'Dining hall' },
        { src: img11, alt: 'Image 4', text: 'Dining hall' },
        { src: img12, alt: 'Image 5', text: 'Panoramic view of the Meditation Hall' },
    ];

    const handleClick = (src) => {
        setSelectedImage(src);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };
    const handleFeedbackClick = () => {
        navigate('/feedbackPage');
    };
    return (
        <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row justify-content-center">
                <h3 className="custom-heading text-center mt-4 ">Photo Gallery</h3>
                <h4 className="feedback-section text-center mb-5" onClick={handleFeedbackClick}>
                    Feedback from past participants
                </h4>
                {images.map((image, index) => (
                    <div
                        className={`${index === images.length - 1 ? 'col-12' : 'col-md-5 mx-2'
                            } mb-1`}
                        key={index}
                    >
                        <div className="card h-100 border-0">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="img-fluid card-img-top gallery-image"
                                onClick={() => handleClick(image.src)}
                                style={{ objectFit: 'cover', width: '100%', height: '350px' }}
                            />
                            <div className="card-body p-0">
                                <p className="mb-3 text-center mt-2 imgText">{image.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleClose}>×</button>
                        <img src={selectedImage} alt="Selected" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;

