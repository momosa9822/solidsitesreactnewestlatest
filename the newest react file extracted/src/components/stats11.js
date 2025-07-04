import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats11.css'

const Stats11 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats11-max-width thq-section-max-width">
        <div className="stats11-container2">
          <h2 className="stats11-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats11-text25">Our Stats</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="stats11-container3 thq-grid-3">
          <div className="stats11-container4 thq-card">
            <h2 className="thq-heading-2 stats11-text10">
              {props.stat1 ?? (
                <Fragment>
                  <span className="stats11-text20">100+</span>
                </Fragment>
              )}
            </h2>
            <span className="stats11-text11 thq-body-small">
              {props.stat1Description ?? (
                <Fragment>
                  <span className="stats11-text21">
                    We have successfully developed over 100 custom websites for
                    service-based businesses.
                  </span>
                </Fragment>
              )}
            </span>
            <button name="Read more" type="button" className="thq-button-flat">
              <span className="stats11-text12 thq-body-small">Read more</span>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div className="stats11-container5 thq-card">
            <h2 className="thq-heading-2 stats11-text13">
              {props.stat2 ?? (
                <Fragment>
                  <span className="stats11-text23">90%</span>
                </Fragment>
              )}
            </h2>
            <span className="stats11-text14 thq-body-small">
              {props.stat2Description ?? (
                <Fragment>
                  <span className="stats11-text22">
                    We ensure that 90% of our websites are responsive, providing
                    optimal viewing experience across a wide range of devices.
                  </span>
                </Fragment>
              )}
            </span>
            <button type="button" className="thq-button-flat">
              <span className="stats11-text15 thq-body-small">Read more</span>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div className="stats11-container6 thq-card">
            <h2 className="thq-heading-2 stats11-text16">
              {props.stat3 ?? (
                <Fragment>
                  <span className="stats11-text24">80%</span>
                </Fragment>
              )}
            </h2>
            <span className="stats11-text17 thq-body-small">
              {props.stat3Description ?? (
                <Fragment>
                  <span className="stats11-text19">
                    We specialize in SEO optimization, with 80% of our websites
                    ranking higher in search engine results.
                  </span>
                </Fragment>
              )}
            </span>
            <button type="button" className="thq-button-flat">
              <span className="stats11-text18 thq-body-small">Read more</span>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="stats11-image thq-img-ratio-16-9"
      />
    </div>
  )
}

Stats11.defaultProps = {
  stat3Description: undefined,
  stat1: undefined,
  stat1Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1603522966635-94daaa5b8f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTA1MTI3OHw&ixlib=rb-4.1.0&q=80&w=1080',
  stat2Description: undefined,
  image1Alt: 'image',
  stat2: undefined,
  stat3: undefined,
  heading1: undefined,
}

Stats11.propTypes = {
  stat3Description: PropTypes.element,
  stat1: PropTypes.element,
  stat1Description: PropTypes.element,
  image1Src: PropTypes.string,
  stat2Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat2: PropTypes.element,
  stat3: PropTypes.element,
  heading1: PropTypes.element,
}

export default Stats11
