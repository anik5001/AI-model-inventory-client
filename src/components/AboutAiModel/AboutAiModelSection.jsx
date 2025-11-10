import React from "react";

const AboutAiModelSection = () => {
  return (
    <div>
      {/* ===== Static Section: About AI Models ===== */}
      <section className="bg-gray-50 py-10 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            About AI Models
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Artificial Intelligence (AI) models are algorithms trained to
            recognize patterns and make intelligent decisions. These models
            learn from large datasets using techniques like{" "}
            <span className="font-semibold text-gray-900">
              machine learning
            </span>{" "}
            and
            <span className="font-semibold text-gray-900"> deep learning</span>.
            Neural networks—one of the most popular AI model architectures—mimic
            the way the human brain processes information.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Neural Networks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Neural networks consist of layers of interconnected nodes that
                process input data to identify complex patterns—used in
                applications like speech recognition and recommendation systems.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                AI Use Cases
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From chat bots like ChatGPT to image recognition, AI models
                power a wide range of modern innovations, automating tasks and
                improving user experiences.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Why It Matters
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI models are transforming industries by providing faster
                insights, enabling smarter automation, and pushing the
                boundaries of what technology can achieve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAiModelSection;
