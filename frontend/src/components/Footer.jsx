function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-white">
        <p className="col-md-4 mb-0 text-white">© 2025 Company, Inc</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          aria-label="Bootstrap"
        >
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">Features</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">FAQs</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">About</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
