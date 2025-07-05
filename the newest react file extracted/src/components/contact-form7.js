import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form7.css'

const ContactForm7 = (props) => {
  return (
    <div
      className={`contact-form7-contact1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact-form7-max-width thq-section-max-width thq-flex-row">
        <div className="contact-form7-section-title thq-flex-column">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact-form7-text23">
                  Get in touch with us today to discuss your website needs.
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact-form7-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-form7-text24">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-small contact-form7-text12">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form7-text19">
                    Have a project in mind?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="contact-form7-content2">
            <div className="contact-form7-row1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="thq-body-small">
                {props.email ?? (
                  <Fragment>
                    <span className="contact-form7-text20">
                      Email ; buildwithsolidsites@gmail.com
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form7-row2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span className="thq-body-small">
                {props.phone ?? (
                  <Fragment>
                    <span className="contact-form7-text21">
                      Phone : +(27)64 859 4861
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form7-form thq-flex-column"
        >
         <input type="hidden" name="form-name" value="Contact" />
            <div className="contact-form7-container1">
            <div className="contact-form7-input1">
              <label
                htmlFor="contact-form-7-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-7-first-name"
                placeholder="First Name"
                required
                name="first-name"
                className="thq-input"
              />
            </div>
            <div className="contact-form7-input2">
              <label
                htmlFor="contact-form-7-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-7-last-name"
                placeholder="Last Name"
                name="last-name"
                required
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container2">
            <div className="contact-form7-input3">
              <label htmlFor="contact-form-7-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-7-email"
                required="true"
                placeholder="Email"
                name="email"
                className="thq-input"
              />
            </div>
            <div className="contact-form7-input4">
              <label htmlFor="contact-form-7-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-7-phone"
                placeholder="Phone Number"
                name="phone"
                required
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container3">
            <div className="contact-form7-input5">
              <label
                htmlFor="contact-form-7-options"
                className="thq-body-small"
              >
                Choose one topic
              </label>
              <select
                id="contact-form-7-options"
                placeholder="Select one"
                name="service"
                required
                className="thq-select"
              >
                <option value="starter site">Starter Site</option>
                <option value="business site">Business Site</option>
                <option value="complete business website">
                  Complete Business Website
                </option>
                <option value="ask a question">Ask a Question</option>
                <option value="free quote">Free Quote</option>
              </select>
            </div>
          </div>
          <div className="contact-form7-container4">
            <div className="contact-form7-input6">
              <label
                htmlFor="contact-form-7-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-7-message"
                rows="3"
                placeholder="Enter your message"
                name="message"
                required
                className="thq-input"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="contact-form7-button thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="contact-form7-text22">Contact Us</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm7.defaultProps = {
  content1: undefined,
  email: undefined,
  phone: undefined,
  action: undefined,
  content2: undefined,
  heading1: undefined,
  rootClassName: '',
}

ContactForm7.propTypes = {
  content1: PropTypes.element,
  email: PropTypes.element,
  phone: PropTypes.element,
  action: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ContactForm7
