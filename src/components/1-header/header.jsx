import { useEffect, useState } from "react";
import "./header.css"


const Header = () => {
  const [showModel , setshowModel] = useState(false);
  const [theme , setTheme] = useState(localStorage.getItem("currentMood"));

  useEffect(() => {

    if (theme === "light")
    {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }

  } , [theme]);

  return (
    <header id="up" className='flex'>
      <button onClick={() => {
          setshowModel(true)
      }} className="menu icon-menu flex">
       </button>

      <div><button className="cv"><a>CV <i className="fa-solid fa-download"></i></a></button></div>

       <nav>
          <ul className='flex'>
             <li><a href="#Home">Home</a></li>
             <li><a href="#Projects">Projects</a></li>
             <li><a href="#Achievement">Achievement</a></li>
             <li><a href="#Certificate">certificate</a></li>
             <li><a href="#Contact">Contact</a></li>
          </ul>
       </nav>

        <button  onClick={() => {
        // senv value to the listStyle
        localStorage.setItem("currentMood" , theme === "dark" ? "light" : "dark")

        // get the value from LS
        setTheme(localStorage.getItem("currentMood"))

      }} className="mode flex">

           {theme === "dark" ? (
            <span  className="icon-moon-o"> </span>
           ) : (
            <span  className="icon-sun"> </span>
           )}
       </button>


    {showModel && (
      <div className="fixed">
         <ul className="model">

         <li>
           <button className="icon-close" onClick={() => {
            setshowModel(false)}
           } />
         </li>

         <li><a href="">About</a></li>
         <li><a href="">Projects</a></li>
         <li><a href="">Articles</a></li>
         <li><a href="">Contact</a></li>
         <li><a href="">Contact</a></li>
         </ul>
      </div>
    )}

    </header>
  );
}

export default Header;
