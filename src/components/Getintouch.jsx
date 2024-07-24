// import { useState } from 'react';
// import emailjs from 'emailjs-com';

// const Getintouch = () => {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.send(
//       'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
//       'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
//       formData,
//       'YOUR_USER_ID' // Replace with your EmailJS User ID
//     )
//     .then((result) => {
//       console.log(result.text);
//       alert('Message sent successfully!');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     }, (error) => {
//       console.log(error.text);
//       alert('Failed to send the message, please try again.');
//     });
//   };
//   return (
//     <>
//       <div id="contact" >
//         <div className="pt-12 bg-black ">
//           <div
//             className="w-full h-[200vh] md:h-[150vh] bg-no-repeat  bg-cover "
//             style={{ backgroundImage: `url('/pic15.svg')` }}
//           >
//             <div className="flex justify-center items-center">
//               <div
//                 className="w-[12.813rem] h-28 bg-no-repeat realtive text-white "
//                 style={{ backgroundImage: `url('/anartist.svg')` }}
//               >
//                 <div className="">
//                   <h1 className="text-[1.8rem] text-center pt-3">
//                     GET IN TOUCH
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col px-10 space-y-14 md:space-y-0 md:px-0  md:justify-center md:items-center md:space-x-96 text-white ">
//               <div>
//                 <img src="pin.svg" alt="address" width={45} height={45} />
//                 Address
//               </div>
//               <div>
//                 <img src="phone-call.svg" alt="phone" width={45} height={45} />
//                 Phone No
//               </div>
//               <div>
//                 <img src="email.svg" alt="email" width={45} height={45} />
//                 Email
//               </div>
//             </div>

//             <div className="pt-24 px-10 md:pt-40 md:px-24 ">
//               <h1 className="text-white text-[1rem] md:text-[2rem]">Send Me A Message</h1>

//               <div className="md:flex md:flex-col gap-4 text-white pt-10">
//                 <div className="md:flex gap-4">
//                   <div className="flex flex-col flex-1">
//                     <label htmlFor="name" className="mb-1">
//                       Name*
//                     </label>
//                     <input
//                       required
//                       id="name"
//                       className="bg-[#AFAFAF38] h-12 px-3 rounded"
//                     />
//                   </div>
//                   <div className="flex flex-col flex-1 pt-5 md:pt-0">
//                     <label htmlFor="email" className="mb-1">
//                       Email*
//                     </label>
//                     <input
//                       required
//                       id="email"
//                       className="bg-[#AFAFAF38] h-12 px-3 rounded"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-col pt-5">
//                   <label htmlFor="subject" className="mb-1">
//                     Subject*
//                   </label>
//                   <input
//                     required
//                     id="subject"
//                     className="bg-[#AFAFAF38] h-12 px-3 rounded"
//                   />
//                 </div>
//                 <div className="flex flex-col pt-5 ">
//                   <label htmlFor="message" className="mb-1">
//                     Message*
//                   </label>
//                   <textarea
//                     required
//                     id="message"
//                     className="bg-[#AFAFAF38] h-32 px-3 py-2 rounded"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end items-center pt-8 ">
//                 <div className="bg-[#FF975C] rounded-3xl w-[9.813rem] h-[2.75rem] flex justify-center items-center ">
//                   <h1 className="text-white text-[1rem]  ">Send Message</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Getintouch;

import { useState } from "react";
import emailjs from "emailjs-com";

const Getintouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        "YOUR_USER_ID" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div id="contact">
      <div className="pt-12 bg-black">
        <div
          className="w-full h-[200vh] md:h-[210vh]  lg:h-[150vh] bg-no-repeat bg-cover "
          style={{ backgroundImage: `url('/pic15.svg')` }}
        >
          <div className="flex justify-center items-center">
            <div
              className="w-[12.813rem] h-28 bg-no-repeat relative text-white"
              style={{ backgroundImage: `url('/anartist.svg')` }}
            >
              <div>
                <h1 className="text-[1.8rem] text-center pt-3">GET IN TOUCH</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-10 space-y-14  text-white lg:hidden">
            <div>
              <img src="pin.svg" alt="address" width={45} height={45} /> Address
            </div>
            <div>
              <img src="phone-call.svg" alt="phone" width={45} height={45} />{" "}
              Phone No
            </div>
            <div>
              <img src="email.svg" alt="email" width={45} height={45} /> Email
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex justify-center items-center space-x-96 text-white ">
              <div>
                <img src="pin.svg" alt="address" width={45} height={45} />{" "}
                Address
              </div>
              <div>
                <img src="phone-call.svg" alt="phone" width={45} height={45} />{" "}
                Phone No
              </div>
              <div>
                <img src="email.svg" alt="email" width={45} height={45} /> Email
              </div>
            </div>
          </div>
          <div className="pt-24 px-10 md:pt-40 md:px-24">
            <h1 className="text-white text-[1rem] md:text-[2rem]">
              Send Me A Message
            </h1>
            <form
              className="md:flex md:flex-col gap-4 text-white pt-10"
              onSubmit={sendEmail}
            >
              <div className="md:flex gap-4">
                <div className="flex flex-col flex-1">
                  <label htmlFor="name" className="mb-1">
                    Name*
                  </label>
                  <input
                    required
                    id="name"
                    className="bg-[#AFAFAF38] h-12 px-3 rounded"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col flex-1 pt-5 md:pt-0">
                  <label htmlFor="email" className="mb-1">
                    Email*
                  </label>
                  <input
                    required
                    id="email"
                    className="bg-[#AFAFAF38] h-12 px-3 rounded"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col pt-5">
                <label htmlFor="subject" className="mb-1">
                  Subject*
                </label>
                <input
                  required
                  id="subject"
                  className="bg-[#AFAFAF38] h-12 px-3 rounded"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col pt-5">
                <label htmlFor="message" className="mb-1">
                  Message*
                </label>
                <textarea
                  required
                  id="message"
                  className="bg-[#AFAFAF38] h-32 px-3 py-2 rounded"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end items-center pt-8">
                <button
                  type="submit"
                  className="bg-[#FF975C] rounded-3xl w-[9.813rem] h-[2.75rem] flex justify-center items-center"
                >
                  <h1 className="text-white text-[1rem]">Send Message</h1>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
