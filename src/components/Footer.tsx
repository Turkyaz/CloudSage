const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <p className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <span className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
          ©{new Date().getFullYear()} CloudSage.
        </span>
      </p>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href="discord:@cloud.sage"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="#"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Team
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
