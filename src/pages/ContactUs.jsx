import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="mb-6 text-center">
        Have questions, feedback, or suggestions? We'd love to hear from you! Fill out the form below or reach out via email.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            className="w-full border rounded-md p-2"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            className="w-full border rounded-md p-2"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
