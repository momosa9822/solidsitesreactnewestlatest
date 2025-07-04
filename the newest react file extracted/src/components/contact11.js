import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact11.css'

const Contact11 = (props) => {
  return (
    <div
      className={`contact11-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact11-max-width thq-section-max-width">
        <div className="contact11-section-title">
          <div className="contact11-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact11-text23">Get in Touch</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact11-text25">
                    Have a project in mind or need more information? Reach out
                    to us!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact11-content2 thq-flex-row">
          <div className="contact11-content3">
            <div className="contact11-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact11-contact-info1">
                <h3 className="contact11-text12 thq-heading-3">Email</h3>
                <p className="thq-body-large">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="contact11-text20">
                        Our team is ready to assist you with any inquiries or
                        requests.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact11-text21">
                        buildwithsolidsites@gmail.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact11-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact11-contact-info2">
                <h3 className="contact11-text14 thq-heading-3">Phone</h3>
                <p className="thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact11-text19">
                        Feel free to contact us via email, phone, or by visiting
                        our office.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact11-text24">+(27)64 859 4861</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact11-content6">
              <div className="contact11-container2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="contact11-icon14"
                >
                  <g fill="none">
                    <g clip-path="url(#akarIconsWhatsappFill0)">
                      <path
                        d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413s-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899a9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413"
                        fill="currentColor"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clippath id="akarIconsWhatsappFill0">
                        <path d="M0 0h24v24H0z" fill="#fff"></path>
                      </clippath>
                    </defs>
                  </g>
                </svg>
              </div>
              <div className="contact11-contact-info3">
                <h3 className="contact11-text17 thq-heading-3">whatsapp</h3>
                <p className="thq-body-large">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="contact11-text22">+(27)64 859 4861</span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact11.defaultProps = {
  content3: undefined,
  content2: undefined,
  email: undefined,
  content5: undefined,
  heading1: undefined,
  phone1: undefined,
  rootClassName: '',
  content1: undefined,
}

Contact11.propTypes = {
  content3: PropTypes.element,
  content2: PropTypes.element,
  email: PropTypes.element,
  content5: PropTypes.element,
  heading1: PropTypes.element,
  phone1: PropTypes.element,
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
}

export default Contact11
