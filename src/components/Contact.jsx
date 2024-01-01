import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_yuupw2d';
    const templateId = 'template_824pecx';
    const publicKey = 'r0KnBFKbrOLEJNy3H';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Arif Raihan',
      message: message,

    };
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        alert("Thank you. I will get back to you as soon as possible.");
        setName('');
        setEmail('');
        setMessage('');

      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert("Ahh, something went wrong. Please try again.");
      });


  }


  return (
    <div className={`xl:mt-6 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-2 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form onSubmit={handleSubmit} className='mt-1 flex flex-col gap-4'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your email</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              cols="30"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Write Your Message'
              className='bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            >
            </textarea>
          </label>
          <button
            type="submit"
            className='bg-tertiary py-1 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >Send</button>

        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[300px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}
export default SectionWrapper(Contact, "contact");





// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";


// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   }
//   // template_vx23qei
//   // service_yuupw2d
//   // r0KnBFKbrOLEJNy3H
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs.send(
//       'service_yuupw2d',
//       'template_vx23qei',
//       {
//         from_name: form.name,
//         to_name: "Arif",
//         from_email: form.email,
//         to_email: "arifraihan188@gmail.com",
//         message: form.message,
//       },
//       'r0KnBFKbrOLEJNy3H'
//     ).then(
//       () => {
//         setLoading(false);
//         alert("Thank you. I will get back to you as soon as possible.");

//         setForm({
//           name: "",
//           email: "",
//           message: "",
//         });
//       },
//       (error) => {
//         setLoading(false);
//         console.error(error);

//         alert("Ahh, something went wrong. Please try again.");
//       }
//     )
//   }

//   return (
//     <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>
//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='What you want to say?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   )
// }

// export default SectionWrapper(Contact, "contact");