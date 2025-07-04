import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero171.css'

const Hero171 = (props) => {
  return (
    <div className={`hero171-header78 ${props.rootClassName} `}>
      <div className="hero171-column thq-section-max-width thq-section-padding">
        <div className="hero171-content">
          <h1 className="hero171-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero171-text3">
                  Custom Website Development Agency
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero171-text2 thq-body-large">
            {props.content12 ?? (
              <Fragment>
                <span className="hero171-text4">
                  We specialize in creating custom websites for service-based
                  businesses to help them improve their online presence and
                  attract more customers.
                </span>
              </Fragment>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

Hero171.defaultProps = {
  heading1: undefined,
  rootClassName: '',
  content12: undefined,
}

Hero171.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  content12: PropTypes.element,
}

export default Hero171
