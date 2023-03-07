import React, { useEffect } from "react";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import { FaGithub } from 'react-icons/fa';
import { useRouter } from "next/router";

function Header() {

  let route = useRouter();

  useEffect(()=> {
    const header = document.querySelector('.header');
    const sticky = header.offsetTop + 100;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("border-b");
      } else {
        header.classList.remove("border-b");
      }
    })
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    }
  },[])
 
  return (
    <div className="h-20 header z-50  transition-shadow  bg-white sticky top-0 flex items-center w-full justify-start px-12">
      <Image src={Logo} alt="logo" className="h-10 w-fit" />
      <div className="w-full h-full flex justify-end items-center">
        <button onClick={()=> window.open("https://github.com/arshad-yaseen/form-validation-react")} className="py-1 px-4 border border-black mr-3 flex items-center text-black rounded-md font-[500]">
           <div className="flex items-center justify-center mr-1"><FaGithub/></div> Star on Github
        </button>
        <button onClick={()=> route.push("/install")} className="py-1 px-4 border border-indigo-600 text-white bg-indigo-600 rounded-md font-[500]">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Header;
