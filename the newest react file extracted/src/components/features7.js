import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features7.css'

const Features7 = (props) => {
  return (
    <div
      className={`features7-layout226 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features7-container1">
        <div className="features7-container2"></div>
      </div>
      <div className="features7-container3">
        <div className="features7-max-width thq-section-max-width thq-grid-auto-300">
          <div className="thq-flex-column">
            <span className="features7-over-title1 thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features7-text2">
                    Tailored solutions for your business
                  </span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column features7-content1">
              <h3 className="features7-title1 thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features7-text6">
                      Custom Website Development
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="features7-description1 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features7-text3">
                      We create unique websites that reflect your brand identity
                      and meet your specific business needs.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <span className="features7-over-title2 thq-body-small">
              {props.feature2Slogan ?? (
                <Fragment>
                  <span className="features7-text9">
                    Seamless experience across all devices
                  </span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column features7-content2">
              <strong className="features7-title2 thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features7-text1">
                      Responsive Web Design
                    </span>
                  </Fragment>
                )}
              </strong>
              <span className="features7-description2 thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features7-text5">
                      Our websites are optimized for desktop, tablet, and mobile
                      devices to ensure a consistent user experience.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <span className="features7-over-title3 thq-body-small">
              {props.feature3Slogan ?? (
                <Fragment>
                  <span className="features7-text7">
                    Boost your online visibility
                  </span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column features7-content3">
              <strong className="features7-title3 thq-heading-3">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features7-text8">SEO Optimization</span>
                  </Fragment>
                )}
              </strong>
              <span className="features7-description3 thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features7-text4">
                      We implement SEO best practices to help your website rank
                      higher in search engine results and attract more organic
                      traffic.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features7.defaultProps = {
  rootClassName: '',
  feature2Title: undefined,
  feature1Slogan: undefined,
  feature1Description: undefined,
  feature3Description: undefined,
  feature2Description: undefined,
  feature1Title: undefined,
  feature3Slogan: undefined,
  feature3Title: undefined,
  feature2Slogan: undefined,
}

Features7.propTypes = {
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Slogan: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Slogan: PropTypes.element,
}

export default Features7
