import React from "react";
import { BASE_URL } from "../config";
import { useNavigate,  } from "react-router-dom";

const Contact =() => {
  const Navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    debugger;
    const formData = new FormData(e.target); // e.target here should be the HTMLFormElement
    const fullName = formData.get("fullName");
    const mobileNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const source ="online hospital";
  

    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Send the form data to the server
    const  res= await fetch(`${BASE_URL}/contact`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        mobileNumber,
        email,
        subject,
        message,
        source
      }),
    });

    const result = await res.json();
    if(!res.ok)
    {
      throw new Error(result.message);
      alert(result.message);
      return;
    }
    Navigate("/contactSuccessPage",{state:{result}});

    // If successful, show a success message
    // If not, show an error message

    // Reset the form
    e.target.reset();

  };

  return (
    <section>
      <div className="max-w-screen-md px-4 mx-auto">
        <h2 className="text-center heading">Contact Us</h2>
        <p className="mb-8 font-light text-center lg:mb-16 text_para">
          Got a technical issue ? Want to send feedback about a beta feature?
          Let us know
        </p>
        <form action="#" className="space-y-8 sm:w-max lg:w-auto" onSubmit={handleSubmit}>
        <div>
            <label className="form_label" htmlFor="fullName"> Your FullName</label>
            <input type="string" id="fullName" name="fullName" className="mt-1 form_input" placeholder="Your Full Name" />
          </div>
          <div>
            <label className="form_label" htmlFor="phoneNumber"> Your PhoneNo.</label>
            <input type="number" id="phoneNumber" name="phoneNumber" className="mt-1 form_input" placeholder="1234567890" />
          </div>
          <div>
            <label className="form_label" htmlFor="email"> Your Email</label>
            <input type="email" id="email" name="email" className="mt-1 form_input" placeholder="example@gmail.com" />
          </div>
          <div>
            <label className="form_label" htmlFor="subject"> Subject</label>
            <input type="text" id="subject" name="subject" className="mt-1 form_input" placeholder="Let us know how we can help you?" required />
          </div>
          <div className="sm:col-span-2">
            <label className="form_label" htmlFor="message"> Your Message</label>
            <textarea rows="5" id="message" name="message" className="mt-1 form_input" placeholder="Leave a comment..." required />
          </div>
          <button type="submit" className="flex justify-center mx-auto text-center rounded btn sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
