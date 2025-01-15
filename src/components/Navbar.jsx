import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true)
  const navItems = [
    {label: 'Home', link: '/'},
    {label: 'All Doctos', link: '/doctors'},
    {label: 'About', link: '/about'},
    {label: 'Contact', link: '/contact'},
  ]

  return (
    <nav className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-44 cursor-pointer"
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        {navItems.map((item) => (
        <NavLink to={item.link}>
          <li className="py-1">{item.label}</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">
          Create account
        </button>
      </div>

      <div className="flex items-center gap-4">
        {
          token 
          ? <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="profile pic" />
            <img className="w-2.5 " src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-sky-100 rounded flex flex-col gap-4 p-4">
                <p className="hover:text-black cursor-pointer" onClick={()=> navigate('/my-profile')}>My Profile</p>
                <p className="hover:text-black cursor-pointer" onClick={()=> navigate('/my-appointments')}>My Appointment</p>
                <p className="hover:text-black cursor-pointer" onClick={()=> setToken(false)}>Logout</p>
              </div>
            </div>
          </div>
          : <NavLink to='/login' onClick={()=> setShowMenu(false)} className='px-4 py-2 rounded inline-block'>
          Create Account
        </NavLink>
        }
        <img onClick={()=> setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />

        {/* Mobile Menu ----- */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7" onClick={()=> setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 text-lg font-medium">
            {navItems.map((item) => (
            <NavLink className='px-4 py-2 rounded inline-block' onClick={()=> setShowMenu(false)} to={item.link}>{item.label}</NavLink>
          ))}
          <NavLink to='/login' onClick={()=> setShowMenu(false)} className='px-4 py-2 rounded inline-block'>
            Create Account
          </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
