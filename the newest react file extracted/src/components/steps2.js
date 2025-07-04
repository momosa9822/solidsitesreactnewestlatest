import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div
      className={`steps2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">The Web development process </h2>
            <p className="thq-body-large">
              {props.text ?? (
                <Fragment>
                  <span className="steps2-text32">
                    At RapidSites, our web development process is structured,
                    transparent, and focused on delivering results. We work
                    closely with each client to understand their needs, then
                    design and build websites that are clean, functional, and
                    aligned with their goals. From planning and design to
                    development, testing, and final launch, every step is
                    handled with precision to ensure a smooth experience and a
                    polished final product.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="steps2-actions"></div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text31">Initial Consultation</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text13 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      We start by understanding your business needs and goals to
                      provide a tailored solution.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text27">Website Development</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text16 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      Our team of experts will design and develop a custom
                      website that reflects your brand and attracts customers.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text17 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      Testing &amp; Refinement
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text19 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text26">
                      We thoroughly test the website for functionality and make
                      any necessary refinements to ensure a seamless user
                      experience.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text20 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text24">
                      Launch &amp; Maintenance
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text22 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Once everything is perfect, we launch your website and
                      offer ongoing maintenance and support to keep it running
                      smoothly.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text23 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Title: undefined,
  step1Description: undefined,
  step3Description: undefined,
  step2Title: undefined,
  step3Title: undefined,
  step2Description: undefined,
  step4Description: undefined,
  rootClassName: '',
  step1Title: undefined,
  text: undefined,
}

Steps2.propTypes = {
  step4Title: PropTypes.element,
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
  step2Description: PropTypes.element,
  step4Description: PropTypes.element,
  rootClassName: PropTypes.string,
  step1Title: PropTypes.element,
  text: PropTypes.element,
}

export default Steps2
