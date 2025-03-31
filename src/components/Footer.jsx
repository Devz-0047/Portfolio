import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-8 tl:px-4 tl:py-4 ">
          <div>
          <h1 className="text-3xl">Devender Singh</h1>
          <h4 className="font-semibold mt-1">&copy; {currentYear} Devender Singh. All rights reserved.</h4>
          </div>
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://x.com/Dev_128b" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.linkedin.com/in/devender-singh-5a05581b6/" target="_blank">
              <i className="fa-brands fa-linkedin border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/Devz-0047" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
