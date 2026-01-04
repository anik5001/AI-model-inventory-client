const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

        <p className="text-center text-gray-600 mb-10">
          Have questions, feedback, or suggestions? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="card bg-base-200 shadow">
              <div className="card-body">
                <h2 className="card-title">📧 Email</h2>
                <p>aniksarker047@gmail.com</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow">
              <div className="card-body">
                <h2 className="card-title">🌍 Location</h2>
                <p>Bangladesh</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow">
              <div className="card-body">
                <h2 className="card-title">🔗 Social</h2>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/anik-sarker50017/"
                    className="link link-primary"
                  >
                    View Profile
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com/anik5001"
                    className="link link-primary"
                  >
                    View Repository
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title mb-4">📝 Send a Message</h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
                <button className="btn btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
