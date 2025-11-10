import React from "react";

const GetStarted = () => {
  return (
    <div>
      {/* ===== Static Section 2: Get Started ===== */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started with AI Model Inventory Manager
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Ready to take control of your AI models? Join our platform to
            create, manage, and explore powerful AI models with ease. Whether
            you’re a student, researcher, or developer — it’s time to organize
            your AI world smarter.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/register"
              className="btn bg-white text-blue-700 font-semibold rounded-full px-8 py-3 hover:bg-blue-100 transition-all"
            >
              Register Now
            </a>
            <a
              href="/login"
              className="btn border border-white text-blue-700 font-semibold rounded-full px-8 py-3 hover:bg-white hover:text-blue-700 transition-all"
            >
              Login
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
