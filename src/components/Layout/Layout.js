import React, { useContext } from 'react';
import { LayoutContext } from '../../LayoutProvider';
import { A } from 'hookrouter';
import './Layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faGlobe, faClock, faCommentAlt, faPlus, faLink, faBan, faThLarge } from '@fortawesome/free-solid-svg-icons';

export const Layout = () => {
    const {
        plusSlides,
        state: {
            open,
            selected,
            slideIndex
        }
    } = useContext(LayoutContext);

    return (
        <div>
            <div title="" className={selected === "home" ? "layout__background" : "layout__hidden"}>
                <div id="layout__planet">
                    <h1 id={!open ? "layout__title" : "layout__title__hidden"}>Metrics</h1>
                    <div id={slideIndex === 1 ? "layout__panels" : "hide__upper"} className="fade">
                        <div id="layout__top-layer-panels">
                            <div className="layout__panels__top__left">
                                <A href="/piechart"><FontAwesomeIcon className="layout__icon" icon={faProjectDiagram} /></A>
                                <p className="layout__labels">Peers Per Client</p>
                            </div>
                            <div className="layout__panels__top__right">
                                <A style={{ color: "#5a4343" }} href="/simplescatter"><FontAwesomeIcon className="layout__icon" icon={faCommentAlt} /></A>
                                <p className="layout__labels__white">Messages Per Minute</p>
                            </div>
                            <p className={slideIndex === 1 ? "layout__arrows prev" : "prev"} onClick={() => plusSlides(-1)}>&#10094;</p>
                            <p className={slideIndex === 2 ? "layout__arrows next" : "next"} onClick={() => plusSlides(+1)}>&#10095;</p>
                        </div>
                        <div id="layout__bottom-layer-panels">
                            <div className="layout__panels__bottom__left">
                                <A href="/tinybarpeers"><FontAwesomeIcon className="layout__icon" icon={faGlobe} /></A>
                                <p className="layout__labels">Peers Per Country</p>
                            </div>
                            <div className="layout__panels__bottom__right">
                                <A href="/area"><FontAwesomeIcon className="layout__icon" icon={faClock} /></A>
                                <p className="layout__labels">Connection Time Per Client</p>
                            </div>
                        </div>
                    </div>
                    <div id={slideIndex === 2 ? "other__layout__panels" : "hide__lower"} className="fade">
                        <div id="other__layout__top-layer-panels">
                            <div className="other__layout__panels__top__left">
                                <A href="/tinybaraggregations"><FontAwesomeIcon className="layout__icon" icon={faPlus} /></A>
                                <p className="layout__labels">Aggregations</p>
                            </div>
                            <div className="other__layout__panels__top__right">
                                <A href="/tinybarbeacon"><FontAwesomeIcon className="layout__icon" icon={faThLarge} /></A>
                                <p className="layout__labels">Average Messages</p>
                            </div>
                            <p className={slideIndex === 1 ? "layout__arrows prev-sec" : "prev-sec"} onClick={() => plusSlides(-1)}>&#10094;</p>
                            <p className={slideIndex === 2 ? "layout__arrows next" : "next"} onClick={() => plusSlides(+1)}>&#10095;</p>
                        </div>
                        <div id="layout__bottom-layer-panels">
                            <div className="other__layout__panels__bottom__left">
                                <A href="/tinybarconnections"><FontAwesomeIcon className="layout__icon" icon={faLink} /></A>
                                <p className="layout__labels">Connections</p>
                            </div>
                            <div className="layout__panels__bottom__right">
                                <A style={{ color: "#5a4343" }} href="/tinybardisconnections"><FontAwesomeIcon className="layout__icon" icon={faBan} /></A>
                                <p className="layout__labels__white">Disconnections</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
