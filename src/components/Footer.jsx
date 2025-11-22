import React from "react";
const Footer =() =>{
  return (
    <footer className="py-6 border-t border-[#111] text-center text-textSecondary">
      © {new Date().getFullYear()} Vishal Singh — Full Stack Developer
    </footer>
  );
}

export default Footer;