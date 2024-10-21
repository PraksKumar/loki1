import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div id={props.features24Id} className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features24-text2 thq-heading-2">
                      Easy Setup Process
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text3 thq-body-small">
                      Simple steps to establish your LLC
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features24-text5 thq-heading-2">
                      Tailored Solutions
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text4 thq-body-small">
                      Customized solutions for your LLC needs
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features24-text6 thq-heading-2">
                      Expert Guidance
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text1 thq-body-small">
                      Access to expert advice on LLC management
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

Features24.defaultProps = {
  feature3Description: undefined,
  feature1Title: undefined,
  feature1Description: undefined,
  feature2Description: undefined,
  feature2Title: undefined,
  feature3ImgAlt: 'Illustration of a person receiving expert guidance',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1677005284143-b896b7b149a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ0NTc1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1531346878377-a5be20888e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ0NTc1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Illustration of customizable solutions for LLCs',
  features24Id: '',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1544655152-4dc3bc4df059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ0NTc1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature1ImgAlt: 'Illustration of a person setting up an LLC',
}

Features24.propTypes = {
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  features24Id: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
}

export default Features24
