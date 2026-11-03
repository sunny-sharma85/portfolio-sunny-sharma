import React, { useState } from 'react';

const Contact = (props) => {
  const [formData, setFormData] = useState({ 
    name: '',
    email: '',
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-slate-50 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading with Zoom-in Animation */}
        <div className="text-center mb-12" data-aos="zoom-in" data-aos-duration="800">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Contact <span className="text-cyan-600">Us</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a project in mind, a job opportunity, or just want to say hi? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Left Side: Info & Socials (Slide in from Left) */}
          <div className="flex flex-col justify-between space-y-6" data-aos="fade-right" data-aos-duration="900">
            <div>
              <h3 className="text-xl font-bold mb-3 text-cyan-600">Let's Talk</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                I'm currently looking for full-stack MERN opportunities or exciting freelance projects. Feel free to connect with me directly.
              </p>
              
              <div className="space-y-3 text-sm text-slate-700">
                <p className="flex items-center gap-3">
                  <span className="text-cyan-600 font-semibold">📍 Location:</span> Shimla / Chandigarh, India
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-cyan-600 font-semibold">✉️ Email:</span> devendersharma0823@gmail.com
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Find me on</h4>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com/sunny-sharma85" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-2 bg-slate-100 hover:bg-cyan-600 hover:text-white border border-slate-200 rounded-xl transition-all text-xs font-semibold text-slate-700 shadow-xs"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/devender-sharma-484a36288/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-2 bg-slate-100 hover:bg-cyan-600 hover:text-white border border-slate-200 rounded-xl transition-all text-xs font-semibold text-slate-700 shadow-xs"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/isunnyy.x/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-2 bg-slate-100 hover:bg-cyan-600 hover:text-white border border-slate-200 rounded-xl transition-all text-xs font-semibold text-slate-700 shadow-xs"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form (Slide in from Right) */}
          <form onSubmit={handleSubmit} className="space-y-4" data-aos="fade-left" data-aos-duration="900">
            {submitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl text-center font-medium">
                Thanks! Your message has been received successfully. 🚀
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Recruiter / Friend"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-cyan-600 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-cyan-600 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-cyan-600 transition-colors text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold transition-all shadow-sm text-sm cursor-pointer"
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