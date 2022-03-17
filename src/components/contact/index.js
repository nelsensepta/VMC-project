import React from "react";
import Heading from "../utils/Heading";

export default function Contact() {
  return (
    <section className="mx-auto container mt-48" id="contact_us">
      <Heading
        title="Contact Us"
        second="Leave Us A Message"
        desc="We'll respond as soon as possible."
      />
      <div className="sm:w-2/5 w-full mx-auto mt-12">
        <form className="space-y-14">
          <div className="block">
            <label
              htmlFor="fullname"
              className="block mb-2 text-3xl font-medium after:content-['*'] after:text-second after:ml-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
              required
              name="fullname"
            />
          </div>
          <div className="block">
            <label
              htmlFor="email"
              className="block mb-2 text-3xl font-medium after:content-['*'] after:text-second after:ml-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
              required
              name="email"
            />
          </div>
          <div className="block">
            <label
              htmlFor="message"
              className="block mb-2 text-3xl font-medium after:content-['*'] after:text-second after:ml-2"
            >
              Message
            </label>
            <textarea
              rows="5"
              type="text"
              id="message"
              className="block p-3 w-full text-2xl text-gray-900 outline-4 bg-transparent border-2 border-black appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="What do you need to tell us?"
              name="message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary inline-block w-full font-medium text-white text-3xl"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
