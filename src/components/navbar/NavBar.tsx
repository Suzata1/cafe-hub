'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const socialMedias = [
  { title: "Home", id: "1", href: "/" },
  { title: "Menu", id: "2", href: "/menu" },
  { title: "Contact Us", id: "3", href: "/contact" },
  { title: "Online Ordering", id: "4", href: "/online-order" },
  { title: "About Us", id: "5", href: "/about" },
]

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [location, setLocation] = useState('London')

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <>
      {/* Navbar */}
      <div className="bg-white sticky top-0 px-4 text-red-500 w-full z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center h-16 w-full">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image height={50} width={50} alt="BurgerHub Logo" src="/images/logo.png" />
              <Link href="/" className="font-extrabold text-red-500 text-2xl">
                BurgerHub
              </Link>
            </div>

            {/* Location Selector */}
            <select
              className="bg-orange-600 text-white px-4 py-1 rounded text-sm"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>Brazil</option>
              <option>Kathmandu</option>
              <option>Nepal</option>
              <option>China</option>
            </select>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {socialMedias.map((social) => (
                <Link key={social.id} href={social.href}>
                  <span className="hover:underline">{social.title}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Menu onClick={toggleSidebar} className="cursor-pointer" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white text-black z-40 transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <X onClick={toggleSidebar} className="cursor-pointer" size={24} />
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          {socialMedias.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              onClick={() => setSidebarOpen(false)} // close sidebar on link click
            >
              <span className="hover:text-red-600">{social.title}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}

export default NavBar