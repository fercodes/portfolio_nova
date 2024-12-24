const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 bg-slate-900">
      <div className="text-white-500 flex gap-2">
        <p>May Steve be with you.</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="github"
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </div>
      </div>

      <p className="text-white-500">© 2024 Nova67. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
