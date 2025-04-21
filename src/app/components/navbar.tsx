"use client";
import React, { useState } from "react";
import { LucideMenu, LucideX } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="  shadow-md z-50 flex justify-between items-center px-6 py-4">
      <div className="font-bold text-xl">TakeNote</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">
          Cách hoạt động
        </a>
        <a href="#features" className="text-gray-600 hover:text-blue-600">
          Tính năng
        </a>
        <a href="#pricing" className="text-gray-600 hover:text-blue-600">
          Gói dịch vụ
        </a>
        <a href="#testimonial" className="text-gray-600 hover:text-blue-600">
          Cảm nhận
        </a>
        <a href="#newsletter" className="text-gray-600 hover:text-blue-600">
          Đăng ký
        </a>
      </div>

      {/* Mobile Menu Toggle Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <LucideX className="w-6 h-6 text-gray-600" />
          ) : (
            <LucideMenu className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
          <div className="bg-white w-3/4 p-6 absolute right-0 top-0 h-full">
            <ul className="space-y-4">
              <li>
                <a
                  href="#how-it-works"
                  className="block text-gray-800 hover:text-blue-600"
                >
                  Cách hoạt động
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block text-gray-800 hover:text-blue-600"
                >
                  Tính năng
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block text-gray-800 hover:text-blue-600"
                >
                  Gói dịch vụ
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="block text-gray-800 hover:text-blue-600"
                >
                  Cảm nhận
                </a>
              </li>
              <li>
                <a
                  href="#newsletter"
                  className="block text-gray-800 hover:text-blue-600"
                >
                  Đăng ký
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
