import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Stats11 from './stats11'
import './component3.css'

const Component3 = (props) => {
  return (
    <div className={`component3-container ${props.rootClassName} `}>
      <Stats11
        stat1={
          <Fragment>
            <span className="component3-text1">68%</span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="component3-text2">76%</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="component3-text3">56%</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="component3-text4">
              Websites Deliver ROI , Here’s the Proof
            </span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1592839961631-0351c10a0b47?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHdlYnNpdGUlMjBjb3B1dGVyfGVufDB8fHx8MTc1MTA1MjI1MXww&amp;ixlib=rb-4.1.0&amp;w=1500"
        stat1Description={
          <Fragment>
            <span className="component3-text5">
              of people say they prefer interacting with businesses through a
              website over visiting in person or calling. A website gives your
              customers an easy, convenient way to contact you, ask questions,
              and request quotes.
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="component3-text6">
              of people who search for local services on mobile devices visit or
              contact a business within 24 hours. A mobile-friendly website
              helps you capture these ready-to-buy customers quickly.
            </span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="component3-text7">
              {' '}
              of consumers are more likely to trust a business with a
              professional website. For service providers, this means more
              calls, bookings, and long-term clients.
            </span>
          </Fragment>
        }
      ></Stats11>
    </div>
  )
}

Component3.defaultProps = {
  rootClassName: '',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component3
