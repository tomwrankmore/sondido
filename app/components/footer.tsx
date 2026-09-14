const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-6 py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-gray-100 sm:flex-row">
        <p>© {new Date().getFullYear()} Sonido. All rights reserved.</p>

        {/* <nav aria-label="Footer navigation">
          <ul className="flex gap-6">
            <li>
              <a
                className="transition-colors hover:text-gray-900"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gray-900"
                href="/contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gray-900"
                href="/privacy"
              >
                Privacy
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </footer>
  );
};

export default Footer;
