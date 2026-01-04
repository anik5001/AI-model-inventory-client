const FAQ = () => {
  return (
    <section className="py-16 bg-base-200 rounded-2xl">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          FAQ
        </h2>

        <div className="collapse collapse-arrow bg-base-100 mb-2">
          <input type="radio" name="faq" />
          <div className="collapse-title font-medium">Is this system free?</div>
          <div className="collapse-content">
            <p>Yes, basic features are free.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100">
          <input type="radio" name="faq" />
          <div className="collapse-title font-medium">Is data secure?</div>
          <div className="collapse-content">
            <p>We use secure authentication and cloud storage.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
