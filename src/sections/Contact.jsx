const Contact = () => {
  return (
    <section>
      <h1 className="text-2xl text-left font-bold my-6">Contact me</h1>
      <div className="bg-white text-left rounded-xl p-8">
        <p>
          I'm always excited to collaborate on innovative projects or discuss
          new opportunities. If you're interested in working together or would
          like to see my resume, feel free to reach out. I look forward to
          hearing from you!
        </p>
        <form>
          <div className="flex flex-col gap-4 mt-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="input"
              required
            />
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="input"
              required
            />
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="input"
              required
            ></textarea>
          </div>
          <button className="btn mt-6">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
