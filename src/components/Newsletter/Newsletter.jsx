const Newsletter = () => {
  return (
    <section className="py-16 bg-slate-100  text-center mt-10 rounded-2xl">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Newsletter</h2>
      <p className="mb-6">Get updates and new features</p>
      <div className="join">
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn btn-secondary join-item">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
