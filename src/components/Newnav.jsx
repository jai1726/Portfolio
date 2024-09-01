
import logo from "../assets/DJlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className=" mb-1 md:mb-2 flex items-center justify-between pt-5  md:py-2" id="home">
            <div className=" flex flex-shrink-0 items-center ">
                <img className="mx-3 w-10" src={logo} alt="logo" />
            </div>
            <div className="flex flex-wrap gap-20 items-center">
            <div className="m-8 hidden md:flex items-center justify-center gap-7 text-xl">
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#Technologies" className='hover:text-gray-400'>Technologies</a>
                <a href="#Project" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <a href="#contact">
    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
        Hire Me
    </button>
</a>
</div>
        </nav>
    );
};

export default Navbar