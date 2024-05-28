/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-disable no-unused-vars */
const Contact = () => {
  return (
    <section>
      <div className="max-w-screen-md px-4 mx-auto">
        <h2 className="text-center heading">Contact Us</h2>
        <p className="mb-8 font-light text-center lg:mb-16 text_para">
          Got a technical issue ? Want to send feedback about a beta feature?
          Let us know
        </p>
        <form action="#" className="space-y-8">
          <div className="">
            <label className="form_label" htmlFor="email"> Your Email</label>
            <input type="email" id="email" className="mt-1 form_input"  placeholder="example@gmail.com"/>
          </div>
          <div className="">
            <label className="form_label" htmlFor="subject"> Subject</label>
            <input type="text" id="subject" className="mt-1 form_input"  placeholder="Let us know how we can help you?"/>
          </div>
          <div className="sm:col-span-2">
            <label className="form_label" htmlFor="message"> Your Message</label>
            <textarea rows="5" type="text" id="message" className="mt-1 form_input"  placeholder="Leave a comment..."/>
          </div>
          <button type="submit" className="flex justify-center mx-auto text-center rounded btn sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
