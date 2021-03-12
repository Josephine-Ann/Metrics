import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutProvider'
import sandwich from './sandwich.svg'
import Home_Icon from './Home_Icon.svg'
import './Navbar.scss'
import { A } from 'hookrouter';
export const Navbar = () => {
    const {
        openMenu,
        state: {
            open
        }
    } = useContext(LayoutContext);

    return (
        <div>
            <div id="navbar__with__buttons">
                <div id="navbar">
                    <img id="navbar__sandwich" onClick={() => openMenu()} src={sandwich} alt="sandwich menu icon" />
                </div>
                <ul id={open ? "navbar__buttons" : "navbar__closed"}>
                    <li><A onClick={() => openMenu()} href="/"><img id="navbar__home" src={Home_Icon} /></A></li>
                    <li><A onClick={() => openMenu()} href="/tinybarpeers">Peers Per Country</A></li>
                    <li><A onClick={() => openMenu()} href="/piechart">Peers Per Client</A></li>
                    <li><A onClick={() => openMenu()} href="/simplescatter">Messages Per Minute</A></li>
                    <li><A onClick={() => openMenu()} href="/area">Connection Time Per Client</A></li>
                    <li><A onClick={() => openMenu()} href="/tinybaraggregations">Aggregations</A></li>
                    <li><A onClick={() => openMenu()} href="/tinybarbeacon">Average Messages</A></li>
                    <li><A onClick={() => openMenu()} href="/tinybarconnections">Connections</A></li>
                    <li><A onClick={() => openMenu()} href="/tinybardisconnections">Disconnections</A></li>
                </ul>
            </div>
            <div id="navbar__sd">
                <A href="/" className="navbar__sd__home">Home</A>
            </div>
        </div>

    )
}