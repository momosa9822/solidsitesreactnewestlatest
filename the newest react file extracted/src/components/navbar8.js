import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar8.css'

const Navbar8 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className={`navbar8-container1 ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar8-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            <Link to="/" className="navbar8-link11 thq-body-small thq-link">
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar8-text22">Home</span>
                </Fragment>
              )}
            </Link>
            <Link
              to="/pricing"
              className="navbar8-link12 thq-body-small thq-link"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="navbar8-link3 thq-body-small thq-link"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar8-text16">About</span>
                </Fragment>
              )}
            </Link>
            <div
              onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
              className="navbar8-link4-dropdown-trigger"
            >
              <div className="navbar8-icon-container">
                {link5DropdownVisible === true && (
                  <div className="navbar8-container2">
                    <svg viewBox="0 0 1024 1024" className="navbar8-icon1">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </nav>
          <div className="navbar8-buttons1">
            <Link
              to="/pricing"
              className="navbar8-action11 thq-button-filled thq-button-animated"
            >
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="navbar8-text18">Pricing</span>
                  </Fragment>
                )}
              </span>
            </Link>
            <Link
              to="/contact"
              className="navbar8-action21 thq-button-outline thq-button-animated"
            >
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="navbar8-text23">Get a qoute</span>
                  </Fragment>
                )}
              </span>
            </Link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon3">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar8-logo"
              />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon5">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links2">
              <Link to="/" className="navbar8-link13 thq-body-small thq-link">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar8-text22">Home</span>
                  </Fragment>
                )}
              </Link>
              <Link
                to="/pricing"
                className="navbar8-link2 thq-body-small thq-link"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar8-text24">Pricing</span>
                  </Fragment>
                )}
              </Link>
              <div className="navbar8-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar8-trigger"
                >
                  <Link
                    to="/contact"
                    className="navbar8-link5 thq-body-small thq-link"
                  >
                    {props.link4 ?? (
                      <Fragment>
                        <span className="navbar8-text26">Contact</span>
                      </Fragment>
                    )}
                  </Link>
                </div>
              </div>
            </nav>
            <div className="navbar8-buttons2">
              <Link
                to="/pricing"
                className="navbar8-action12 thq-button-filled"
              >
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="navbar8-text18">Pricing</span>
                    </Fragment>
                  )}
                </span>
              </Link>
              <Link
                to="/contact"
                className="navbar8-action22 thq-button-outline"
              >
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="navbar8-text23">Get a qoute</span>
                    </Fragment>
                  )}
                </span>
              </Link>
            </div>
          </div>
        </div>
        {link5DropdownVisible === true && (
          <div className="navbar8-container3 thq-box-shadow">
            <div className="navbar8-link5-menu-list">
              <a href={props.linkUrlPage1}>
                <div className="navbar8-menu-item1">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="navbar8-page1-image thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content1">
                    <span className="navbar8-page1 thq-body-large">
                      {props.page1 ?? (
                        <Fragment>
                          <span className="navbar8-text25">Home</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page1Description ?? (
                        <Fragment>
                          <span className="navbar8-text15">
                            Welcome to our website development agency!
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage2}>
                <div className="navbar8-menu-item2">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="navbar8-page2-image thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content2">
                    <span className="navbar8-page2 thq-body-large">
                      {props.page2 ?? (
                        <Fragment>
                          <span className="navbar8-text17">Services</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page2Description ?? (
                        <Fragment>
                          <span className="navbar8-text20">
                            Explore our services for service-based businesses.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage3}>
                <div className="navbar8-menu-item3">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="navbar8-page3-image thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content3">
                    <span className="navbar8-page3 thq-body-large">
                      {props.page3 ?? (
                        <Fragment>
                          <span className="navbar8-text27">About Us</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page3Description ?? (
                        <Fragment>
                          <span className="navbar8-text14">
                            Learn more about our agency and team.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage4}>
                <div className="navbar8-menu-item4">
                  <img
                    alt={props.page4ImageAlt}
                    src={props.page4ImageSrc}
                    className="navbar8-page4-image thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content4">
                    <span className="navbar8-page4 thq-body-large">
                      {props.page4 ?? (
                        <Fragment>
                          <span className="navbar8-text21">Contact</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page4Description ?? (
                        <Fragment>
                          <span className="navbar8-text19">
                            Get in touch with us for your website needs.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible === true && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar8-container4"
        ></div>
      )}
    </header>
  )
}

Navbar8.defaultProps = {
  linkUrlPage3: 'https://www.teleporthq.io',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1577086009817-3176c4143059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5Mjg3OXw&ixlib=rb-4.1.0&q=80&w=1080',
  page3Description: undefined,
  page1Description: undefined,
  linkUrlPage2: 'https://www.teleporthq.io',
  link3: undefined,
  rootClassName: '',
  page2: undefined,
  action1: undefined,
  logoAlt: 'Website Development Agency Logo',
  linkUrlPage1: 'https://www.teleporthq.io',
  page4Description: undefined,
  page2Description: undefined,
  page3ImageAlt: 'About Us Image',
  logoSrc: '/mmmmmkkmkm-1500h.png',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5Mjg4MXw&ixlib=rb-4.1.0&q=80&w=1080',
  page4: undefined,
  page2ImageAlt: 'Services Image',
  link1: undefined,
  page3ImageSrc:
    'https://images.unsplash.com/photo-1521699492617-3ed82a0501d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5Mjg5NHw&ixlib=rb-4.1.0&q=80&w=1080',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5Mjg4NHw&ixlib=rb-4.1.0&q=80&w=1080',
  action2: undefined,
  link2: undefined,
  linkUrlPage4: 'https://www.teleporthq.io',
  page1: undefined,
  link4: undefined,
  page3: undefined,
  page4ImageAlt: 'Contact Image',
  page1ImageAlt: 'Home Image',
}

Navbar8.propTypes = {
  linkUrlPage3: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  page3Description: PropTypes.element,
  page1Description: PropTypes.element,
  linkUrlPage2: PropTypes.string,
  link3: PropTypes.element,
  rootClassName: PropTypes.string,
  page2: PropTypes.element,
  action1: PropTypes.element,
  logoAlt: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  page4Description: PropTypes.element,
  page2Description: PropTypes.element,
  page3ImageAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  page4: PropTypes.element,
  page2ImageAlt: PropTypes.string,
  link1: PropTypes.element,
  page3ImageSrc: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  action2: PropTypes.element,
  link2: PropTypes.element,
  linkUrlPage4: PropTypes.string,
  page1: PropTypes.element,
  link4: PropTypes.element,
  page3: PropTypes.element,
  page4ImageAlt: PropTypes.string,
  page1ImageAlt: PropTypes.string,
}

export default Navbar8
