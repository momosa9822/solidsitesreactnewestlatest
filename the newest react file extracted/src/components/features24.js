import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import Features7 from './features7'
import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div
      className={`features24-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features24-container2">
        <div className="features24-container3">
          <Features7
            feature1Title={
              <Fragment>
                <span className="features24-text1">
                  Custom Website Development
                </span>
              </Fragment>
            }
            feature2Title={
              <Fragment>
                <span className="features24-text2">Responsive Web Design</span>
              </Fragment>
            }
            feature3Title={
              <Fragment>
                <span className="features24-text3">SEO Optimization</span>
              </Fragment>
            }
            rootClassName="features7root-class-name"
            feature1Slogan={
              <Fragment>
                <span className="features24-text4">
                  Tailored solutions for your business
                </span>
              </Fragment>
            }
            feature2Slogan={
              <Fragment>
                <span className="features24-text5">
                  Seamless experience across all devices
                </span>
              </Fragment>
            }
            feature3Slogan={
              <Fragment>
                <span className="features24-text6">
                  Boost your online visibility
                </span>
              </Fragment>
            }
            feature1Description={
              <Fragment>
                <span className="features24-text7">
                  We create unique websites that reflect your brand identity and
                  meet your specific business needs.
                </span>
              </Fragment>
            }
            feature2Description={
              <Fragment>
                <span className="features24-text8">
                  Our websites are optimized for desktop, tablet, and mobile
                  devices to ensure a consistent user experience.
                </span>
              </Fragment>
            }
            feature3Description={
              <Fragment>
                <span className="features24-text9">
                  We implement SEO best practices to help your website rank
                  higher in search engine results and attract more organic
                  traffic.
                </span>
              </Fragment>
            }
          ></Features7>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  rootClassName: '',
}

Features24.propTypes = {
  rootClassName: PropTypes.string,
}

export default Features24
