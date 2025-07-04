import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Hero171 from './hero171'
import './features211.css'

const Features211 = (props) => {
  return (
    <div
      className={`features211-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <Hero171
        heading1={
          <Fragment>
            <span className="features211-text10">
              we build websites that drive real results
            </span>
          </Fragment>
        }
        content12={
          <Fragment>
            <span className="features211-text11">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="features211-text13">
                we don&apos;t just make good looking sites , we build tools that
                convert viewers into paying customers
              </span>
            </span>
          </Fragment>
        }
        rootClassName="hero171root-class-name1"
      ></Hero171>
      <div className="features211-container1">
        <div className="features211-container2 thq-card thq-flex-column">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="features211-icon1"
          >
            <path
              d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <h2 className="features211-text14 thq-heading-2">
            {props.feature2Title ?? (
              <Fragment>
                <span className="features211-text20">
                  help you appear on google and get visibility
                </span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="features211-container3 thq-card thq-flex-column">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="features211-icon3"
          >
            <path
              d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <h2 className="features211-text15 thq-heading-2">
            {props.feature3Title ?? (
              <Fragment>
                <span className="features211-text19">
                  build trust with your customers instantly 
                </span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="features211-container4 thq-card thq-flex-column">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="features211-icon5"
          >
            <path
              d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <h2 className="features211-text16 thq-heading-2">
            {props.feature4Title ?? (
              <Fragment>
                <span className="features211-text21">
                  <span>
                    turn
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="features211-text23">
                    browsers
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>into buyers </span>
                </span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="features211-container5 thq-card thq-flex-column">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="features211-icon7"
          >
            <path
              d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <h2 className="features211-text17 thq-heading-2">
            {props.feature1Title ?? (
              <Fragment>
                <span className="features211-text18">
                  craft a website that fits your brand 
                </span>
              </Fragment>
            )}
          </h2>
        </div>
      </div>
      <div className="features211-container6">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="features211-image"
        />
      </div>
    </div>
  )
}

Features211.defaultProps = {
  imageSrc1: '/b261ab32-83ce-4368-8015-ee94118245dc-removebg-preview-1500h.png',
  imageAlt1: 'image',
  feature1Title: undefined,
  rootClassName: '',
  feature3Title: undefined,
  feature2Title: undefined,
  feature4Title: undefined,
}

Features211.propTypes = {
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature4Title: PropTypes.element,
}

export default Features211
