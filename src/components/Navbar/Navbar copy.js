// import React, { useContext } from 'react'
// import { LayoutContext } from '../../LayoutProvider'
// import sandwich from './sandwich.svg'
// import Home_Icon from './Home_Icon.svg'
// import Black_Home_Icon from './Black_Home_Icon.svg'
// import './Navbar.scss'

// export const Navbar = () => {
//     const {
//         openMenu,
//         changePage,
//         state: {
//             unknown,
//             open
//         }
//     } = useContext(LayoutContext);
//     return (
//         <div>
//             <div id="navbar__with__buttons">
//                 <div id="navbar">
//                     <img id="navbar__sandwich" onClick={() => openMenu()} src={sandwich} alt="sandwich menu icon" />
//                 </div>
//                 <ul id={open ? "navbar__buttons" : "navbar__closed"}>
//                     <li onClick={() => changePage("home")}><img id="navbar__home" src={Home_Icon} /></li>
//                     <li onClick={() => changePage("tinybar")}>Tiny Bar Chart</li>
//                     <li onClick={() => changePage("simplescatter")}>Simple Scatter Chart</li>
//                     <li onClick={() => changePage("piechart")}>Pie Chart</li>
//                     <li onClick={() => changePage("arearesponsivecontainer")}>Area Responsive</li>
//                 </ul>
//             </div>
//             <div id="navbar__sd">
//                 <p onClick={() => changePage("home")} className="navbar__sd__home">Home</p>
//             </div>
//         </div>

//     )
// }