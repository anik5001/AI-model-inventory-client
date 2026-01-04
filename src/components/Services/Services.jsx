const Services = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Inventory Management</h3>
              <p>Manage products efficiently using AI insights.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Analytics Dashboard</h3>
              <p>Track sales, stock levels, and performance.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Cloud Storage</h3>
              <p>Secure and scalable cloud-based system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
