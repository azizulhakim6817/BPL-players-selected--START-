import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className=" relative mt-36 bg-black text-white py-16">
      <div className=" absolute top-[-90px] left-[600px]">
        <img className="mx-auto" src={footerLogo} alt="" />
      </div>
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* About Us */}
        <div className="md:w-[350px]">
          <h3 className="font-bold text-xl mb-2">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are a passionate team dedicated to providing the best services to
            our customers. We are committed to delivering high-quality
            experiences and solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-[250px] text-center md:text-left">
          <h3 className="font-bold text-xl mb-2 text-center">Quick Links</h3>
          <ul className="space-y-2">
            <li className="text-center text-gray-400 text-sm hover:text-[#E7FE29] cursor-pointer">
              Home
            </li>
            <li className="text-gray-400 text-sm text-center hover:text-[#E7FE29] cursor-pointer">
              Service
            </li>
            <li className="text-gray-400 text-sm text-center hover:text-[#E7FE29] cursor-pointer">
              About
            </li>
            <li className="text-gray-400 text-sm text-center hover:text-[#E7FE29] cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="md:w-[350px]">
          <h3 className="font-bold text-xl mb-2">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-2 px-4 rounded-l-lg  bg-white text-gray-700"
            />
            <button className="py-2 px-4 rounded-r-lg bg-gradient-to-br from-[#E7FE29] to-orange-700 text-black font-semibold hover:opacity-90 transition duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 text-center text-md text-gray-500 ">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
