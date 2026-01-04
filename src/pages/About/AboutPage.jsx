const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About the Project</h1>
          <p className="text-lg text-gray-600">AI Model Inventory Manager</p>
        </div>

        {/* What is this project */}
        <section className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">
              🧠 What is AI Model Inventory Manager?
            </h2>
            <p>
              AI Model Inventory Manager is a web-based application designed to
              help users efficiently manage, organize, and track AI models in
              one centralized platform. It provides a clean dashboard where
              users can add, update, search, and monitor AI models with ease.
            </p>
          </div>
        </section>

        {/* Why built */}
        <section className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">❓ Why This Project Was Built</h2>
            <p>
              Managing multiple AI models across different frameworks and
              versions can become complex and unorganized. This project was
              built to solve that problem by offering a structured inventory
              system that improves productivity, visibility, and control over AI
              assets.
            </p>
          </div>
        </section>

        {/* Problems solved */}
        <section className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">✅ Problems It Solves</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Disorganized AI model records</li>
              <li>Difficulty searching and filtering models</li>
              <li>Lack of real-time inventory updates</li>
              <li>No centralized system for model management</li>
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">⚙️ How the System Works</h2>
            <p>
              Users interact with a React-based frontend where they can manage
              AI model data. The frontend communicates with a secure backend
              built using Node.js and Express.js. All model data is stored and
              retrieved from a MongoDB database in real time.
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">🛠 Technologies Used</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside">
                <li>React.js & React Router</li>
                <li>Tailwind CSS & DaisyUI</li>
                <li>Axios for API requests</li>
                <li>Firebase Authentication</li>
              </ul>
              <ul className="list-disc list-inside">
                <li>Node.js & Express.js</li>
                <li>MongoDB Database</li>
                <li>SweetAlert2 & React Hot Toast</li>
                <li>Netlify & Render/Vercel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">🚀 Key Features</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Add, edit, and delete AI models</li>
              <li>Search and filter models by name and category</li>
              <li>Secure user authentication</li>
              <li>Real-time feedback with alerts and notifications</li>
              <li>Responsive and modern user interface</li>
            </ul>
          </div>
        </section>

        {/* Future scope */}
        <section className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">🔮 Future Improvements</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>AI-based model recommendations</li>
              <li>Advanced analytics and usage tracking</li>
              <li>Role-based access control</li>
              <li>Cloud storage for model files</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-500 pt-6">
          <p>
            This project demonstrates full-stack development skills, real-world
            problem solving, and modern web technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
