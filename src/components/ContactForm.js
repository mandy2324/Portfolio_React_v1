import React from "react";

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const encoded =  encode({ "form-name": "contact", name, email, message })
    console.log(encoded);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:encoded
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <section id="contact" className="px-5">
      <div className=" container  flex sm:flex-nowrap flex-wrap">
        <div className="row">
          <div className="align-self-center col-lg-6 bg-white border border-4  py-10 mx-auto">

            <form
              
              name="contact"
              className="bg-light lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
                Contact:
              </h2>

              <div className="mb-4 flex-column">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className=" mb-4 flex-column">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  required="required"
                  data-error="Valid email is required."
                  type="email"
                  id="email"
                  name="email"
                  className=" w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" mb-4 flex-column">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required="required"
                  data-error="Please, leave us a message."
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className=" bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" 
                onClick={handleSubmit}
                >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}