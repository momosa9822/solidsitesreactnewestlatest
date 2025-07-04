import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq14.css'

const FAQ14 = (props) => {
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <div className={`faq14faq8 thq-section-padding ${props.rootClassName} `}>
      <div className="faq14-max-width thq-section-max-width">
        <div className="faq14-container10 thq-flex-column">
          <div className="faq14-section-title thq-flex-column">
            <h2 className="faq14-text10 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="faq14-text25">FAQs</span>
                </Fragment>
              )}
            </h2>
            <p className="faq14-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="faq14-text22">
                    Some commonly asked questions 
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="faq14-list thq-flex-column">
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq14-trigger1"
              >
                <p className="faq14-faq1-question1 thq-body-large">
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="faq14-text28">
                        What services do you offer?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container1">
                  {faq1Visible === false && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon10">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible === true && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon12">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible === true && (
                <div className="faq14-container13">
                  <span className="thq-body-small">
                    {props.text ?? (
                      <Fragment>
                        <span className="faq14-text27">
                          We offer complete website solutions for small
                          service-based businesses. This includes custom web
                          design, responsive mobile development, SEO setup, and
                          conversion-boosting layouts. Whether you need a simple
                          one-pager or a full multi-section business site, we’ve
                          got you covered.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq14-trigger2"
              >
                <p className="faq14-faq2-question1 thq-body-large">
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="faq14-text23">
                        How long does it take to build a custom website?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container2">
                  {faq2Visible === false && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon14">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible === true && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon16">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible === true && (
                <div className="faq14-container16">
                  <span className="thq-body-small">
                    {props.text1 ?? (
                      <Fragment>
                        <span className="faq14-text18">
                          Most websites take 1 to 2 weeks, depending on your
                          needs. Simple landing pages can be done in a few days,
                          while larger, custom sites may take a bit longer , but
                          we always keep you updated and deliver on time.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq14-trigger3"
              >
                <p className="faq14-faq2-question2 thq-body-large">
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="faq14-text21">
                        Do I need to pay the full amount upfront?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container3">
                  {faq3Visible === false && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon18">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible === true && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon20">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible === true && (
                <div className="faq14-container19">
                  <span className="thq-body-small">
                    {props.text2 ?? (
                      <Fragment>
                        <span className="faq14-text26">
                          {' '}
                          No , the demo is free , after you are satisfied we
                          only require a 50% deposit to secure your booking. The
                          remaining amount is paid on final delivery before
                          going live.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq14-trigger4"
              >
                <p className="faq14-faq2-question3 thq-body-large">
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="faq14-text20">
                        Do you provide hosting services for websites?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container4">
                  {faq4Visible === false && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon22">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible === true && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon24">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible === true && (
                <div className="faq14-container22">
                  <span className="thq-body-small">
                    {props.text3 ?? (
                      <Fragment>
                        <span className="faq14-text30">
                          <span>
                            We don’t directly host websites, but we’ll set up
                            and connect you with reliable, low-cost hosting
                            platforms like Hostinger, Netlify, or local South
                            African providers. We handle the tech , you don’t
                            have to lift a finger.
                          </span>
                          <br></br>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq14-trigger5"
              >
                <p className="faq14-faq1-question2 thq-body-large">
                  {props.faq5Question ?? (
                    <Fragment>
                      <span className="faq14-text24">
                        How do I get started with your website development
                        services?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container5">
                  {faq5Visible === false && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon26">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible === true && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon28">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible === true && (
                <div className="faq14-container25">
                  <span className="thq-body-small">
                    {props.text4 ?? (
                      <Fragment>
                        <span className="faq14-text29">
                          Just send us a message via the contact form or email,
                          and we’ll get back to you within a few hours. We’ll
                          chat about your needs, budget, and ideas , then give
                          you a custom plan and quote. No stress, no pressure,
                          just real results.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
          </div>
        </div>
        <div className="faq14-content1 thq-flex-column">
          <div className="faq14-content2">
            <h2 className="faq14-text17 thq-heading-2">
              {props.heading2 ?? (
                <Fragment>
                  <span className="faq14-text19">Still have a question?</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ14.defaultProps = {
  text1: undefined,
  heading2: undefined,
  rootClassName: '',
  faq4Question: undefined,
  faq3Question: undefined,
  content1: undefined,
  faq2Question: undefined,
  faq5Question: undefined,
  heading1: undefined,
  text2: undefined,
  text: undefined,
  faq1Question: undefined,
  text4: undefined,
  text3: undefined,
}

FAQ14.propTypes = {
  text1: PropTypes.element,
  heading2: PropTypes.element,
  rootClassName: PropTypes.string,
  faq4Question: PropTypes.element,
  faq3Question: PropTypes.element,
  content1: PropTypes.element,
  faq2Question: PropTypes.element,
  faq5Question: PropTypes.element,
  heading1: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
  faq1Question: PropTypes.element,
  text4: PropTypes.element,
  text3: PropTypes.element,
}

export default FAQ14
