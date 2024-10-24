import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import logo1 from '../assets/image/mainlogo.png';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [isAllOpen, setIsAllOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [islaptopupen, setlaptopupen] = useState(false);
  const [issmart, setsmart] = useState(false);
  const [istablet, settablet] = useState(false);
  const [ismore, setmore] = useState(false);
  const [isrepair, setrepair] = useState(false);
  const [issellgadget, setsellgadgets] = useState(false);
  const [isBuy, setBuy] = useState(false);
  const [isfindnew, setfindnew] = useState(false);
  const [isrecycle, setrecycle] = useState(false);
  const [isstore, setstore] = useState(false);


  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log(email)
    if (email) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <>
      <div className="h-[10vh] w-full bg-white shadow-md p-4 flex items-center justify-around">
        <div className="flex items-center w-1/5">
          <img src={logo1} alt="Logo" className="h-32 object-contain ml-[100px] w-auto" />
        </div>

        <div className="relative flex items-center w-2/5">
          <CiSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 w-full h-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-teal transition duration-200 text-gray-700"
          />
        </div>

        <div className="flex items-center w-1/5 justify-center">
          <FaMapMarkerAlt className="text-gray-600 text-xl mr-2 hover:text-custom-teal transition duration-200 cursor-pointer" />
          <span className="text-gray-800 font-semibold text-lg hover:text-custom-teal transition duration-200">
            Bhopal
          </span>
        </div>

        <div className="flex items-center mr-[100px]">
          {isLoggedIn ? (
            <div className="relative group">
              <div className="flex items-center px-5 py-2 rounded-md text-md font-medium cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg"
                    alt="Profile"
                  />
                </div>
                <FaChevronDown className="ml-2" />
              </div>
              <div className="absolute right-0 top-14 mt-2 z-10 bg-white border rounded-md shadow-lg px-4 hidden group-hover:block">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Orders
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-custom-teal text-white py-2 px-6 rounded-full hover:bg-[#36b5a4] transition duration-200 mr-[100px]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      <hr className="bg-gray-300 w-full h-[1px] mt-1" />

      <div className="w-full h-[6vh] flex items-center justify-center">
        <div className="w-[90%] mx-auto flex justify-between space-x-6 items-center">
          <div
            className="relative"
            onMouseEnter={() => setIsAllOpen(true)}
            onMouseLeave={() => setIsAllOpen(false)}
          >
            <button className="inline-flex justify-center items-center text-md font-medium">
              All
              <FaChevronDown className="ml-2" />
            </button>
            {isAllOpen && (
              <div className="absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[300px] h-auto">
                <div className="px-4 py-2">
                  <h3 className="font-bold text-lg text-gray-800 mt-4 mb-3">Sell</h3>
                  <div className="flex flex-col">
                    <div
                      className="relative"
                      onMouseEnter={() => setIsSellOpen(true)}
                      onMouseLeave={() => setIsSellOpen(false)}
                    >
                      <Link
                        to="#"
                        className=" hover:bg-gray-100 flex justify-between items-center block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200"
                      >
                        Phone <FaChevronRight className="ml-2" />
                      </Link>
                      {isSellOpen && (
                        <div className="absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]">
                          <p className="text-gray-600 mb-3 text-sm">More Sell</p>

                          <h3 className="font-bold text-lg text-gray-800 mb-3">Top Brand</h3>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                iPhone 14
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Samsung Galaxy S23
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                OnePlus 11
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Google Pixel 7
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Xiaomi 13
                              </Link>
                            </li>
                          </ul>

                          <h3 className="font-bold text-lg text-gray-800 mt-4 mb-3">Top Selling Phones</h3>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Apple iPhone 12
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Apple iPhone 11
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Samsung Galaxy Note 20
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                OnePlus
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Apple iPhone 6
                              </Link>
                            </li>
                          </ul>
                        </div>


                      )}
                    </div>
                    <div className="relative"
                      onMouseEnter={() => setlaptopupen(true)}
                      onMouseLeave={() => setlaptopupen(false)}>
                      <Link
                        to="#"
                        className=" hover:bg-gray-100 flex justify-between items-center block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200"
                      >
                        Laptop <FaChevronRight className="ml-2" />
                      </Link>
                      {islaptopupen && (
                        <div className="absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]">
                          <p className="text-gray-600 mb-3 text-sm">More Sell</p>
                          <h3 className="font-bold text-lg text-gray-800 mb-3">Top Brand</h3>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Apple
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Hp
                              </Link></li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Dell
                              </Link></li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Honour
                              </Link></li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Lenovo
                              </Link></li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Mre Laptop Brands
                              </Link></li>
                          </ul>
                          <h3 className="font-bold text-lg text-gray-800 mt-4 mb-3">Top Selling Phones</h3>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Pavilion Series
                              </Link></li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Vastro Serirs
                              </Link></li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Inspiron Series
                              </Link></li>
                          </ul>




                        </div>
                      )}
                    </div>
                    <div className='relative'
                      onMouseEnter={() => setsmart(true)}
                      onMouseLeave={() => setsmart(false)}>
                      <Link
                        to="#"
                        className=" hover:bg-gray-100 flex justify-between items-center block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200"
                      >
                        Smartwatch <FaChevronRight className="ml-2" />
                      </Link>
                      {issmart && (
                        <div className='absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]'>
                          <p className="text-gray-600 mb-3 text-sm">More Sell</p>
                          <h3 className="font-bold text-lg text-gray-800 mb-3">Top Brand</h3>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Apple
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Xiamoi
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Samsung
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                OnePlus
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                More Smartwatch Brand
                              </Link>
                            </li>
                          </ul>


                        </div>

                      )}
                    </div>
                    <div className='relative'
                      onMouseEnter={() => settablet(true)}
                      onMouseLeave={() => settablet(false)}>
                      <Link
                        to="#"
                        className=" hover:bg-gray-100 flex justify-between items-center block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200"
                      >
                        Tablet <FaChevronRight className="ml-2" />
                      </Link>
                      {istablet && (
                        <div className='absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]'>
                          <p className="text-gray-600 mb-3 text-sm">More Sell</p>
                          <h3 className="font-bold text-lg text-gray-800 mb-3">Top Brand</h3>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Apple
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Lenovo
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Samsung
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Honor
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                More Tablet Brand
                              </Link>
                            </li>

                          </ul>

                        </div>
                      )}
                    </div>
                    <div className=' relative'
                      onMouseEnter={() => setmore(true)}
                      onMouseLeave={() => setmore(false)}>
                      <Link
                        to="#"
                        className=" hover:bg-gray-100 flex justify-between items-center block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200"
                      >
                        More <FaChevronRight className="ml-2" />
                      </Link>
                      {ismore && (
                        <div className='absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]'>
                          <p className="text-gray-600 mb-3 text-sm">More in Sell</p>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Smart Spearker
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                TV
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                DSLR Camera
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Earbuds
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                iMac
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Gaming Consoles
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                AC
                              </Link>
                            </li>
                          </ul>


                        </div>
                      )}
                    </div>
                    <div className='relative'
                      onMouseEnter={() => setrepair(true)}
                      onMouseLeave={() => setrepair(false)}>
                      <Link
                        to="#"
                        className="py-1 hover:bg-gray-100 flex justify-between items-center font-bold text-lg text-gray-800 mt-4 mb-3"
                      >
                        Repair <FaChevronRight className="ml-2" />
                      </Link>
                      {isrepair && (
                        <div className='absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]'>
                          <p className="text-gray-600 mb-3 text-sm">More in Repair</p>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Screen
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Battery
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Mic
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Back Panel
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Proximity Sensor
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Charging Jack
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Auxjack
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                More in Repair
                              </Link>
                            </li>

                          </ul>

                        </div>

                      )}
                    </div>
                    <div className='relative'
                      onMouseEnter={() => setsellgadgets(true)}
                      onMouseLeave={() => setsellgadgets(false)}>
                      <Link
                        to="#"
                        className="py-1 hover:bg-gray-100 flex justify-between items-center font-bold text-lg text-gray-800 mt-4 mb-3"
                      >
                        Sell Gadgets <FaChevronRight className="ml-2" />
                      </Link>
                      {issellgadget && (
                        <div className='absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]'>
                          <p className="text-gray-600 mb-3 text-sm">More in Sell Gadgets</p>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Phone
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Laptop
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                TV
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Smart Speaker
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Tablet
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Gaming Consoles
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                iMac
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Smartwatch
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                DSLR Camera
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Earbuds
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                AC
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className='relative'
                      onMouseEnter={() => setBuy(true)}
                      onMouseLeave={() => setBuy(false)}>
                      <Link
                        to="#"
                        className="py-1 hover:bg-gray-100 flex justify-between items-center font-bold text-lg text-gray-800 mt-4 mb-3"
                      >
                        Buy Phone <FaChevronRight className="ml-2" />
                      </Link>
                      {isBuy && (
                        <div className='absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]'>
                          <p className="text-gray-600 mb-3 text-sm">More in Buy Phone</p>
                          <p className="text-black mb-3 text-sm">Refurbished Phones</p>
                          <h3 className="font-bold text-lg text-gray-800 mb-3">Top Brand</h3>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Apple
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Xiaomi
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Samsung
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                One Plus
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Nokia
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Oppo
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Vivo
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                All Brands
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className='relative'
                      onMouseEnter={() => setfindnew(true)}
                      onMouseLeave={() => setIsAllOpen(false)}>
                      <Link
                        to="#"
                        className="py-1 hover:bg-gray-100 flex justify-between items-center font-bold text-lg text-gray-800 mt-4 mb-3"
                      >
                        Find New Gadget <FaChevronRight className="ml-2" />
                      </Link>
                      {isfindnew && (
                        <div className='absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]'>
                          <p className="text-gray-600 mb-3 text-sm">More in find New phone </p>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Phone Finder
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Compare Phones
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Latest Phones
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Videos
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                News
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Reviews
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Article
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                QnA
                              </Link>
                            </li>
                            <h3 className="font-bold text-lg text-gray-800 mb-3">Top Selling Phones</h3>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Apple
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Xiami
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Samsung
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className='relative'
                      onMouseEnter={() => setrecycle(true)}
                      onMouseLeave={() => setrecycle(false)}>
                      <Link
                        to="#"
                        className="py-1 hover:bg-gray-100 flex justify-between items-center font-bold text-lg text-gray-800 mt-4 mb-3"
                      >
                        Recycle <FaChevronRight className="ml-2" />
                      </Link>
                      {isrecycle && (
                        <div className='absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]'>
                          <p className="text-gray-600 mb-3 text-sm">More in Recycle</p>
                          <h3 className="font-bold text-lg text-gray-800 mb-3">Top Brand</h3>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Samsung
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Realme
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Apple
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Xiaomi
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                One plus
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Poco
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Other Brands
                              </Link>
                            </li>
                            <h3 className="font-bold text-lg text-gray-800 mb-3">Top Recycled Phone</h3>

                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Xiaomi Redmi Note 3
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Xiaomi Redmi Note 4
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Apple iPhone 6
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Redmi Note 4
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className='relative'
                      onMouseEnter={() => setstore(true)}
                      onMouseLeave={() => setstore(false)}>
                      <Link
                        to="#"
                        className="py-1 hover:bg-gray-100 flex justify-between items-center font-bold text-lg text-gray-800 mt-4 mb-3"
                      >
                        Cashify Store <FaChevronRight className="ml-2" />
                      </Link>
                      {isstore && (
                        <div className='absolute bg-white shadow-lg mt-2 rounded-md z-10 w-[250px] h-auto p-4 ml-[270px] mb-[200px] mt-[-70px]'>
                          <h3 className="font-bold text-lg text-gray-800 mb-3">More in Cashify Store</h3>
                          <ul>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Dehli
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Gurgaon
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Noida
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Bengaluru
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                pune
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                Agra
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                patna
                              </Link>
                            </li>
                            <li className="mb-1">
                              <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-200">
                                More
                              </Link>
                            </li>

                          </ul>

                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button className="inline-flex justify-center items-center text-md font-medium">
              Sell Gadgets
              <FaChevronDown className="ml-2" />
            </button>
          </div>
          <div className="relative">
            <button className="inline-flex justify-center items-center text-md font-medium">
              Buy Phone
              <FaChevronDown className="ml-2" />
            </button>
          </div>
          <div className="relative">
            <button className="inline-flex justify-center items-center text-md font-medium">
              Find New Gadget
              <FaChevronDown className="ml-2" />
            </button>
          </div>
          <div className="relative">
            <button className="inline-flex justify-center items-center text-md font-medium">
              Buy Laptop
              <FaChevronDown className="ml-2" />
            </button>
          </div>
          <div className="relative">
            <button className="inline-flex justify-center items-center text-md font-medium">
              Cashify Store
              <FaChevronDown className="ml-2" />
            </button>
          </div>
          <div className="relative">
            <button className="inline-flex justify-center items-center text-md font-medium">
              More
              <FaChevronDown className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <hr className="bg-gray-300 w-full h-[1px]" />
    </>
  );
}

export default Header;
