import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import $ from "jquery";
import "font-awesome/css/font-awesome.min.css";
import logo from "../assets/images/logo_1.png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        // sticky header
        var header = $('.header-area'),
            win = $(window);
        win.on('scroll', function () {
            var scroll = win.scrollTop();
            if (scroll < 120) {
                header.removeClass("sticky");
            } else {
                header.addClass("sticky");
            }
        });

        // responsive menu expand and collapse
        window.addEventListener("scroll", this.handleScroll);
        if ($(window).width() <= 991) {
            $("#mainMenu .nav-link").click(function () {
                $(".navbar-collapse").slideToggle("slow");
            });
            $("#mainMenu .navbar-toggler").click(function () {
                $(".navbar-collapse").slideToggle("slow");
            });

            $("ul#main-menu li a").click(function () {
                $(".navbar-collapse").slideToggle("slow");
            });
        }

        //  add active class and remove active class
        $('.navbar-nav#main-menu .link-item').click(function () {
            $('.navbar-nav#main-menu .link-item').removeClass('active');
            $(this).addClass('active');
        });

        // scroll top
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll() {
        if (window.scrollY > 100) {
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < 100) {
            this.setState({
                scrollingLock: false
            });
        }
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <nav
                id="mainMenu" className="navbar  navbar-expand-lg navbar-light header-area">
                <div className="container-fluid">
                    <Link to={`${process.env.PUBLIC_URL}/`} className="navbar-brand site-logo-header">
                        <img src={logo} alt="site logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtogglerItemItem"
                        aria-controls="navtogglerItemItem" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navtogglerItemItem">
                        <ul className="navbar-nav mt-2 mt-lg-0" id="main-menu">

                            <li className="nav-item">
                                <Link className="link-item active" to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                            </li>

                            <li className="nav-item" id="full-width"><span>About Us </span><i className="fa fa-angle-down"></i>
                                <ul className="dropdown">
                                    <li className="nav-item">
                                        <Link className="link-item" to={`${process.env.PUBLIC_URL}/mission-vision`}> Mission & Vision </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link-item" to={`${process.env.PUBLIC_URL}/how-works`}>How We Work</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link-item" to={`${process.env.PUBLIC_URL}/why-us`}>Why Us ?</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link-item" to={`${process.env.PUBLIC_URL}/Top-management`}> Top Management </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="link-item" to={`${process.env.PUBLIC_URL}/organogram`}>Organogram</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="link-item" to={`${process.env.PUBLIC_URL}/team-member`}>Meet our team</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="link-item" to={`${process.env.PUBLIC_URL}/company-profile`}>Company Profile</Link>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="link-item" to={`${process.env.PUBLIC_URL}/exports`} > Countries We Export </NavLink>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="link-item" to={`${process.env.PUBLIC_URL}/manufacturing`}>Manufacturing</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="link-item" to={`${process.env.PUBLIC_URL}/products`}>Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="link-item" to={`${process.env.PUBLIC_URL}/sustainability`}>Sustainability</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="link-item" to={`${process.env.PUBLIC_URL}/csr`}> CSR</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="link-item" to={`${process.env.PUBLIC_URL}/compliance`}> Compliance</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="link-item" to={`${process.env.PUBLIC_URL}/faq`}> FAQ </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="link-item" to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
