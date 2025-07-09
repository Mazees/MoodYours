const Footer = () => {
  return (
    <footer className="pt-10 bg-brown-primary">
      <div
        className="w-full text-2xl poppins-extrabold text-center caret-transparent"
      >
        MOODYOURS
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-5 lg:gap-16 p-7">
        <a
          href="https://github.com/Mazees/MoodYours"
          target="_blank"
          className="poppins-light"
        >
          <i className="fa-brands fa-github mr-2"></i>Github Source
        </a>
        <a
          href="https://www.instagram.com/madaputra21?igsh=MXV1bWZqc3NxdWdleA=="
          target="_blank"
          className="poppins-light"
        >
          <i className="fa-brands fa-instagram mr-2"></i>Follow Me
        </a>
        <a
          href="https://saweria.co/MadaPutraYT"
          target="_blank"
          className="poppins-light"
        >
          <i class="fa-solid fa-circle-dollar-to-slot mr-2"></i>Support Me
        </a>
      </div>
      <p className="w-full p-2 flex justify-center items-center poppins-thin">
        © 2025 MoodYours. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
