const Testimonials = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          What Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <p>"This system saved our inventory cost!"</p>
              <h4 className="font-bold mt-2">— Manager</h4>
            </div>
          </div>
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <p>"Very easy to use and accurate."</p>
              <h4 className="font-bold mt-2">— Store Owner</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
