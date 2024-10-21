import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Elegant Defensive Echidna</title>
        <meta property="og:title" content="Elegant Defensive Echidna" />
      </Helmet>
      <a
        href="https://#"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link"
      >
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text100 thq-body-small thq-link">
                /home
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text101 thq-body-small thq-link">
                /services
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text102 thq-body-small thq-link">
                /about-us
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text103 thq-body-small thq-link">
                /contact
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text104 thq-body-large">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text105 thq-body-large">Services</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text106 thq-body-large">About Us</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text107 thq-body-large">Contact</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text108">Get Started</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text109">Contact Us</span>
            </Fragment>
          }
          logoSrc="/cream%20and%20black%20minimalist%20line%20art%20beauty%20studio%20logo-1500h.jpg"
          link1Url="#Hero17"
          link2Url="#Features24"
          link3Url="#Steps2"
          page1Description={
            <Fragment>
              <span className="home-text110 thq-body-small">
                Welcome to our LLC Services website.
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text111 thq-body-small">
                Explore our range of services for setting up and managing LLCs.
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text112 thq-body-small">
                Learn more about our company and team.
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text113 thq-body-small">
                Get in touch with us for any inquiries.
              </span>
            </Fragment>
          }
          className="home-component10"
        ></Navbar8>
      </a>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114 thq-body-small">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115 thq-body-small">
              Secondary action
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116 thq-body-large">
              Start and manage your Limited Liability Company with confidence
              using our comprehensive resources and expert services.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117 thq-heading-1">
              Setting Up Your LLC Made Easy
            </span>
          </Fragment>
        }
        hero17Id="Hero17"
      ></Hero17>
      <Features24
        features24Id="Features24"
        feature1Title={
          <Fragment>
            <span className="home-text118 thq-heading-2">
              Easy Setup Process
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">
              Tailored Solutions
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120 thq-heading-2">Expert Guidance</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121 thq-body-small">
              Simple steps to establish your LLC
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Customized solutions for your LLC needs
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
              Access to expert advice on LLC management
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Let us help you navigate the process and get your business up and
              running smoothly.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126 thq-heading-2">
              Ready to set up your LLC?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127 thq-heading-2">
              Easy LLC Formation
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128 thq-heading-2">
              Comprehensive Support
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">
              Ongoing Compliance
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130 thq-body-small">
              Simple and straightforward process to set up your LLC with
              step-by-step guidance.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Access to a team of experts to help you with any questions or
              concerns throughout the LLC management.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132 thq-body-small">
              Stay compliant with regulations by receiving timely reminders and
              assistance in filing necessary documents.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144 thq-heading-3">$99</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145 thq-heading-3">$199</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146 thq-heading-3">$299</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148 thq-heading-3">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149 thq-body-large">$899</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152 thq-body-large">$1799</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155 thq-body-large">$2699</span>
          </Fragment>
        }
        pricing14Id="Pricing14"
        plan1Action1={
          <Fragment>
            <span className="home-text156 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162 thq-body-small">LLC Formation</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Operating Agreement Template
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Registered Agent Service
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165 thq-body-small">
              Everything in Plan 1
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166 thq-body-small">
              EIN/Tax ID Number
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167 thq-body-small">
              Compliance Calendar
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Everything in Plan 2
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170 thq-body-small">
              Customized Operating Agreement
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171 thq-body-small">
              Business License Research Package
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        steps2Id="Steps2"
        step1Title={
          <Fragment>
            <span className="home-text186 thq-heading-2">
              Research LLC Requirements
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187 thq-heading-2">
              Choose a Name for Your LLC
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">
              File Articles of Organization
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189 thq-heading-2">
              Create an Operating Agreement
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190 thq-body-small">
              Understand the legal requirements and regulations for forming an
              LLC in your state.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191 thq-body-small">
              Select a unique and distinguishable name that complies with state
              naming rules.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Prepare and submit the required formation document with the state
              to officially create your LLC.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193 thq-body-small">
              Draft an operating agreement outlining ownership and operating
              procedures for your LLC.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194 thq-body-small">
              I used this service to set up my LLC and the process was smooth
              and efficient. Highly recommended!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195 thq-body-small">
              Setting up my LLC was a breeze with the help of this website. The
              resources provided were invaluable.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196 thq-body-small">
              I had a great experience using this service to manage my LLC. The
              support team was responsive and knowledgeable.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197 thq-body-small">
              I would recommend this website to anyone looking to start an LLC.
              The guidance provided was top-notch.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199 thq-heading-2">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200 thq-body-large">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202 thq-body-large">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203 thq-body-large">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204 thq-body-small">
              CEO, Company ABC
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205 thq-body-small">
              Founder, XYZ Inc.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206 thq-body-small">
              Owner, Johnson Enterprises
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207 thq-body-small">Entrepreneur</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210 thq-heading-3">
              Address: 123 Main Street, City, State, Zip Code
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211 thq-heading-3">
              Email: info@companyname.com
            </span>
          </Fragment>
        }
        contact10Id="Contact10"
        location1Description={
          <Fragment>
            <span className="home-text212 thq-body-large">
              Visit us at our main office location for in-person consultations.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213 thq-body-large">
              Send us an email for inquiries and more information.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215 thq-body-small">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216 thq-body-small">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218 thq-body-small">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
