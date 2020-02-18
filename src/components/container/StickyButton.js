import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
// import $ from "jquery";

class StickyButton extends Component {

  componentDidMount() {
    $(document).scroll(function () {
      // sticky button 2
      if (document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight) {
        $(".sticky-btn-contact").css({
          'opacity': '0',
          'visibility': 'hidden'
        })
      }
      else {
        $(".sticky-btn-contact").css({
          'opacity': '1',
          'visibility': 'visible'
        })
      }
      // sticky button 2
      if (document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight) {
        $(".sticky-btn-contact2").css({
          'opacity': '1',
          'visibility': 'visible'
        })
      }
      else {
        $(".sticky-btn-contact2").css({
          'opacity': '0',
          'visibility': 'hidden'
        })
      }
    });

  }

  render() {
    return (
      <React.Fragment>
        <div className="sticky-btn-contact">
          <Link to={`${process.env.PUBLIC_URL}/contact`}>
            Start A New Project
          </Link>
        </div>
        <div className="sticky-btn-contact2">
          <Link to={`${process.env.PUBLIC_URL}/contact`}>
            Start A New Project
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
export default StickyButton;
