import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  {
    /*Note: add EmailJS here*/
  }
  const handleSubmit = () => {};

  return (
    <section
      className="c-space bg-[url('/background.png')] bg-slate-900 bg-cover bg-no-repeat bg-center py-8"
      id="contact"
    >
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            If you want to create new 3d models, or have new ideas for
            Minecraft, I'm you person. Let's collaborate!
          </p>

          <div className="flex gap-3 justify-center py-2">
            <div className="social-icon">
              <a
                href="https://github.com/innova67"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-full h-full"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="github"
                  className="w-1/2 h-1/2"
                />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://x.com/innova67"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-full h-full"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
                  alt="twitter"
                  className="w-1/2 h-1/2"
                />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://discord.com/.nova67"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-full h-full"
              >
                <img
                  src="/assets/discord.svg"
                  alt="discord"
                  className="w-1/2 h-1/2"
                />
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I want to give you a job..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
