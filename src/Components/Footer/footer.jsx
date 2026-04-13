import React from "react";

const Footer = () => {
  return (
    <div className="pt-30 pb-4 bg-[#101727]">
      <div className="max-mA">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-white px-6 sm:p-0">
          <div className="space-y-3">
            <h2 className="text-[30px] font-extrabold">DigiTools</h2>
            <p className="text-sm text-gray-300 max-w-50">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <p className="font-bold mb-3">Product</p>
            <ul className="text-sm space-y-3">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integration</li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-3">Company</p>
            <ul className="text-sm space-y-3">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-3">Resources</p>
            <ul className="text-sm space-y-3">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-bold">Social Links</p>
            <div className="flex gap-3 items-center text-[#101727]">
              <span className="bg-white p-2 rounded-full">
                <i className="fa-brands fa-instagram text-[18px]"></i>
              </span>
              <span className="bg-white p-2 rounded-full">
                <i className="fa-brands fa-facebook  text-[18px]"></i>
              </span>
              <span className="bg-white p-2 rounded-full">
                <i className="fa-brands fa-x-twitter text-[18px]"></i>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-gray-500 mt-20" />
        <div className="text-gray-300 text-sm flex items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap mt-4">
          <p>&copy; 2026 Digitools. All rights reserved.</p>
          <ul className="flex items-center gap-5">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
