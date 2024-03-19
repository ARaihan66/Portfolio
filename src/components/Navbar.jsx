import { useState } from "react";
import Logo from "../../public/logo4.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuItem, setMenuItem] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between relative my-5 md:m-10 z-2 text-white">
        <h1>
          <a
            href="/"
            className="text-3xl text-white no-underline font-extrabold ml-5"
          >
            Portfolio
          </a>
        </h1>
        {menuItem ? (
          <div className="md:hidden absolute right-0 mr-5">
            <RxCross2
              onClick={() => setMenuItem(!menuItem)}
              className="h-[80px] w-[50px] cursor-pointer"
            />
          </div>
        ) : (
          <div className="md:hidden absolute right-0 mr-5">
            <GiHamburgerMenu
              onClick={() => setMenuItem(!menuItem)}
              className="h-[80px] w-[50px] cursor-pointer"
            />
          </div>
        )}
        <div className="hidden md:block">
          <div className=" gap-5 flex flex-row justify-between">
            <div>
              <a href="#about" className="no-underline text-white">
                About
              </a>
            </div>
            <div>
              <a href="#education" className="no-underline text-white">
                Education
              </a>
            </div>
            <div>
              <a href="#experience" className="no-underline text-white">
                Experience
              </a>
            </div>
            <div>
              <a href="#skills" className="no-underline text-white">
                Skills
              </a>
            </div>
            <div>
              <a href="#projects" className="no-underline text-white">
                Projects
              </a>
            </div>
            <div>
              <a href="#contact" className="no-underline text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div>
          <a
            href="https://github.com/ARaihan66"
            target="_blank"
            className=" hidden md:block text-l font-bold no-underline text-white bg-orange-900 rounded-lg p-5 outline-none hover:bg-white hover:text-orange-700"
          >
            Github Link
          </a>
        </div>

        {menuItem && (
          <div className="absolute px-5 py-10 top-14 overflow-hidden  md:hidden z-3 bg-blue-900	 w-[100%] h-screen">
            <div>
              <div className=" gap-5 flex flex-col justify-between">
                <div>
                  <a
                    href="#about"
                    onClick={() => setMenuItem(!menuItem)}
                    className="no-underline text-white"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    href="#education"
                    onClick={() => setMenuItem(!menuItem)}
                    className="no-underline text-white"
                  >
                    Education
                  </a>
                </div>
                <div>
                  <a
                    href="#experience"
                    onClick={() => setMenuItem(!menuItem)}
                    className="no-underline text-white"
                  >
                    Experience
                  </a>
                </div>
                <div>
                  <a
                    href="#skills"
                    onClick={() => setMenuItem(!menuItem)}
                    className="no-underline text-white"
                  >
                    Skills
                  </a>
                </div>
                <div>
                  <a
                    href="#projects"
                    onClick={() => setMenuItem(!menuItem)}
                    className="no-underline text-white"
                  >
                    Projects
                  </a>
                </div>
                <div>
                  <a
                    href="#contact"
                    onClick={() => setMenuItem(!menuItem)}
                    className="no-underline text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a
                href="https://github.com/ARaihan66"
                target="_blank"
                className="text-l font-bold no-underline text-white bg-orange-900 rounded-lg p-5 outline-none hover:bg-white hover:text-orange-700"
              >
                Github Link
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="fixed py-5 px-10 flex justify-between items-center bg-orange-500  bottom-2 left-[15%] md:left-[38%] rounded-3xl">
        <div>
          <a
            href="/"
            className="px-5 py-2 font-bold text-l no-underline md:px-10 md:py-5 hover:text-white"
          >
            Home
          </a>
        </div>
        <div>
          <a href="/" className=" px-5 py-2 font-bold text-l no-underline md:px-10 md:py-5 hover:text-white">
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
