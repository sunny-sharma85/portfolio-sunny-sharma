import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Yahan tu apne Express backend ka API endpoint hit karega (e.g., http://localhost:5000/api/contact)
    console.log("Form Data Submitted:", formData);
    
    // Abhi ke liye success message dikha rahe hain
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000); // 5 sec baad status reset
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Have a project in mind, a job opportunity, or just want to say hi? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 shadow-xl">
          
          {/* Left Side: Info & Socials */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Let's Talk</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                I'm currently looking for full-stack MERN opportunities or exciting freelance projects. Feel free to connect with me directly.
              </p>
              
              <div className="space-y-3 text-sm text-gray-300">
                <p className="flex items-center gap-3">
                  <span className="text-cyan-400 font-semibold">📍 Location:</span> Chandigarh, India
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-cyan-400 font-semibold">✉️ Email:</span> sunny.dev@example.com
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Find me on</h4>
              <div className="flex space-x-4">
                <Link to={"https://github.com/sunny-sharma85"} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 hover:bg-cyan-500 hover:text-gray-950 rounded-lg transition-colors text-sm font-medium">
                  GitHub
                </Link>
                <Link to={"https://www.linkedin.com/in/devender-sharma-484a36288/"} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 hover:bg-cyan-500 hover:text-gray-950 rounded-lg transition-colors text-sm font-medium">
                  LinkedIn
                </Link>
                <Link to={"https://www.instagram.com/isunnyy.x/"} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 hover:bg-cyan-500 hover:text-gray-950 rounded-lg transition-colors text-sm font-medium">
                  Instagram
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="p-3 bg-green-500/10 border border-green-500 text-green-400 text-sm rounded-lg text-center">
                Thanks Sunny! Your message has been received successfully. 🚀
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Recruiter / Friend"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                className="w-full px-4 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-gray-950 font-bold transition-all duration-200 shadow-lg text-sm"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;