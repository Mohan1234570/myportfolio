

import React,{useRef, useState} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c92kerk', 'template_954xkzl', form.current, {
        publicKey: 'ErUDWUGkWS6IoKRs1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    
    <section
      id="contact"
      className="w-full py-2 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form ref={form} onSubmit={sendEmail}  className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm from-[#1e2024] to-[#23272b] uppercase tracking-wide">
                    Your name
                  </p>
                  <input type="text"
                      name='username'
                    className=
                      "outline-designColor"
                      required
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input type="text"
                      name='phoneNumber'
                    className=
                      "outline-designColor"
                      required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input type="email"
                  name='email'
                  className=
                    "outline-designColor"
                    required
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input  type="text"
                  name='subject'
                  className=
                    "outline-designColor"
                    required
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide  hover:border-designColor border-transparent">
                  Message
                </p>
                <textarea
                  name='message'
                  className=
                     "outline-designColor"
                  cols="30"
                  rows="8"
                    required
                ></textarea>
              </div>
              <div className="w-full">
                <button
            
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
          
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact

/*


import React,{useRef, useState} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const intitalvalues = {username: "", phoneNumber: "", email: "", subject: "", message: ""};
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [formValues, setFormValues] = useState(intitalvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();


  
  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
      
  };
  
  
  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  
  const sendMsg = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c92kerk', 'template_954xkzl', form.current, {
        publicKey: 'ErUDWUGkWS6IoKRs1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

    const sendEmail =  (e) => {
      e.preventDefault();
      if(setFormErrors(handleSend(formValues))){
        sendMsg();
        setIsSubmit(true)
      }else{
        alert("Error occured");
      }
   
        
      }
    };

  return (
    
    <section
      id="contact"
      className="w-full py-2 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">

            <form  ref={form} onSubmit={sendEmail}  className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
            {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm from-[#1e2024] to-[#23272b] uppercase tracking-wide">
                    Your name
                  </p>
                  <input type="text"
                      name='username'
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className={`${
                        errMsg === "Username is required!" &&
                        "outline-designColor"
                      } contactInput`}                      
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input type="text"
                      name='phoneNumber'
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={`${
                        errMsg === "Phone number is required!" &&
                        "outline-designColor"
                      } contactInput`}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input type="email"
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input  type="text"
                  name='subject'
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide  hover:border-designColor border-transparent">
                  Message
                </p>
                <textarea
                  name='message'
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  // onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
          
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
*/
