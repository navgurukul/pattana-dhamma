import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <footer className="footer text-light py-4">
                <div className="container-lg">
                    <div>
                        <h5 className="text-light footer-heading mb-3">Quick Links</h5>

                        <div className="d-flex flex-wrap  mb-4 footer-text">
                            <a href="https://www.dhamma.org/en/about/vipassana" className="footer-link mx-2 my-2" style={{ minWidth: '200px' }}>What is Vipassana</a>
                            <a href="https://www.executive.dhamma.org/en/docs/sng/Sng-bio.pdf" className="footer-link mx-2 my-2" style={{ minWidth: '200px' }}>Biography of Mr Goenka</a>
                            <a href="#contact" className="footer-link mx-2 my-2" style={{ minWidth: '200px' }}>Download Executive Courses Brochure</a>
                            <a href="https://pattana.dhamma.org/exp.shtml" className="footer-link mx-2 my-2" style={{ minWidth: '200px' }}>Feedback from Previous Participants of Executive Courses</a>
                            <a href="#home" className="footer-link mx-2 my-2" style={{ minWidth: '200px' }}>Short Films about Executive Courses</a>
                            <a href="https://pajjota.dhamma.org/fileadmin/dhamma/europe/centers/dhammapajjota/executive/EECC-PressArticlev1-2008v2.pdf" className="footer-link  mx-2 my-2" style={{ minWidth: '200px' }}>Press Release about International Executive Course 2008</a>
                            <a href="https://pattana.dhamma.org/directions.shtml" className="footer-link mx-2 my-2" style={{ minWidth: '200px' }}>How to Get to Dhamma Pattana Center</a>
                        </div>
                        <hr className="bg-light mb-4" />
                        <div className="row">
                        <div className="col-md-6 mb-4 ">
                           <h5 className='mt-3 footer-heading mb-3'>Dhamma Pattana Vipassana Centre</h5>
                           <p className="footer-text">Inside Global Vipassana Pagoda Campus<br />
                            Next to Esselworld, Gorai Village,<br />
                            Borivali (West), Mumbai 400091
                           </p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h5 className='mt-3 footer-heading mb-3'>Contact Details</h5>
                            <p className="footer-text">
                            Tel: [91] (22) 50427501 (Mon-Sat, 10:00 AM – 5:00 PM only)<br />
                            Email: info@pattana.dhamma.org
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

// import React from "react";
// import "./footer.css";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container" >
//         <div className="container-sm"style={{ maxWidth: "1020px" }} >
//           <h5 className="footer-heading mb-3">Quick Links</h5>

//           <div className="d-flex flex-wrap mb-4 footer-links">
//             <a
//               href="https://www.dhamma.org/en/about/vipassana"
//               className="footer-link"
//             >
//               What is Vipassana
//             </a>
//             <a
//               href="https://www.executive.dhamma.org/en/docs/sng/Sng-bio.pdf"
//               className="footer-link"
//             >
//               Biography of Mr Goenka
//             </a>
//             <a href="#contact" className="footer-link">
//               Download Executive Courses Brochure
//             </a>
//             <a
//               href="https://pattana.dhamma.org/exp.shtml"
//               className="footer-link"
//             >
//               Feedback from Previous Participants of Executive Courses
//             </a>
//             <a href="#home" className="footer-link">
//               Short Films about Executive Courses
//             </a>
//             <a
//               href="https://pajjota.dhamma.org/fileadmin/dhamma/europe/centers/dhammapajjota/executive/EECC-PressArticlev1-2008v2.pdf"
//               className="footer-link"
//             >
//               Press Release about International Executive Course 2008
//             </a>
//             <a
//               href="https://pattana.dhamma.org/directions.shtml"
//               className="footer-link"
//             >
//               How to Get to Dhamma Pattana Center
//             </a>
//           </div>
//           <hr className="footer-divider" />
//           <div className="row">
//             <div className="col-md-6 mb-4">
//               <h5 className="footer-heading mb-3">
//                 Dhamma Pattana Vipassana Centre
//               </h5>
//               <p className="footer-text">
//                 Inside Global Vipassana Pagoda Campus
//                 <br />
//                 Next to Esselworld, Gorai Village,
//                 <br />
//                 Borivali (West), Mumbai 400091
//               </p>
//             </div>
//             <div className="col-md-6 mb-4">
//               <h5 className="footer-heading mb-3">Contact Details</h5>
//               <p className="footer-text">
//                 Tel: [91] (22) 50427501 (Mon-Sat, 10:00 AM – 5:00 PM only)
//                 <br />
//                 Email: info@pattana.dhamma.org
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
