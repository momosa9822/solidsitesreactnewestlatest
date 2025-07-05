import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Pricing1421 from '../components/pricing1421'
import Features16 from '../components/features16'
import FAQ14 from '../components/faq14'
import Footer4 from '../components/footer4'
import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>Pricing | SolidSites</title>
        <meta property="og:title" content="Pricing | SolidSites" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="pricing-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="pricing-text101">Pricing</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="pricing-text102">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="pricing-text103">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="pricing-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="pricing-text105">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="pricing-text106">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="pricing-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="pricing-text108">Pricing</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="pricing-text109">Get a qoute</span>
          </Fragment>
        }
        link1Url="/"
        link3Url="/contact"
        link1Url1="/pricing"
        rootClassName="navbar8root-class-name"
        page1Description={
          <Fragment>
            <span className="pricing-text110">
              Welcome to our website development agency!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="pricing-text111">
              Explore our services for service-based businesses.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="pricing-text112">
              Learn more about our agency and team.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="pricing-text113">
              Get in touch with us for your website needs.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Pricing1421
        text={
          <Fragment>
            <span className="pricing-text114">most popular</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="pricing-text115">starter site</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="pricing-text116">Business site</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="pricing-text117">Complete Business Website</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="pricing-text118">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="pricing-text119">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="pricing-text120">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="pricing-text121">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="pricing-text122">
              Whether your just starting out or ready to grow we&apos;ve got the
              right package to fit your goals and budget 
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="pricing-text123">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="pricing-text124">R2799</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="pricing-text125">R3499</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="pricing-text126">R5499</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="pricing-text127">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="pricing-text128">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="pricing-text129">R250/pm Hosting</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="pricing-text130">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="pricing-text131">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="pricing-text132">R250/pm Hosting</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="pricing-text133">Get Started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="pricing-text134">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="pricing-text135">R250/pm Hosting</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="pricing-text136">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="pricing-text137">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="pricing-text138">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="pricing-text139">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="pricing-text140">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="pricing-text141">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="pricing-text142">Standard Website Design</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="pricing-text143">
              whatsapp button (instant chat)
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="pricing-text144">Custom Website Design</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="pricing-text145">Contact Form + WA button</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="pricing-text146">mobile responsive </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="pricing-text147">3 page website</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="pricing-text148">premuim website design</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="pricing-text149">contact form + WA button</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="pricing-text150">layout cutomization</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="pricing-text151">Blog Setup</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="pricing-text152">5 page website </span>
          </Fragment>
        }
        rootClassName="pricing1421root-class-name1"
        plan1Feature11={
          <Fragment>
            <span className="pricing-text153">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="pricing-text154">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="pricing-text155">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature32={
          <Fragment>
            <span className="pricing-text156">1 page website</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="pricing-text157">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="pricing-text158">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="pricing-text159">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="pricing-text160">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature42={
          <Fragment>
            <span className="pricing-text161">google indexing setup</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="pricing-text162">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="pricing-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="pricing-text164">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="pricing-text165">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature42={
          <Fragment>
            <span className="pricing-text166">mobile responsive</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="pricing-text167">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature52={
          <Fragment>
            <span className="pricing-text168">google indexing setup</span>
          </Fragment>
        }
        plan1Feature321={
          <Fragment>
            <span className="pricing-text169">
              Perfect for one-page info sites
            </span>
          </Fragment>
        }
        plan2Feature421={
          <Fragment>
            <span className="pricing-text170">1 content revision</span>
          </Fragment>
        }
        plan3Feature521={
          <Fragment>
            <span className="pricing-text171">2 content revisions</span>
          </Fragment>
        }
        plan2Feature4211={
          <Fragment>
            <span className="pricing-text172">
              Everything you need to launch your business online
            </span>
          </Fragment>
        }
        plan3Feature5211={
          <Fragment>
            <span className="pricing-text173">
              Built for growth, SEO, and full content control.
            </span>
          </Fragment>
        }
        plan3Feature5212={
          <Fragment>
            <span className="pricing-text174">SEO setup </span>
          </Fragment>
        }
      ></Pricing1421>
      <Features16
        content1={
          <Fragment>
            <span className="pricing-text175">
              We offer smart, affordable website solutions tailored for
              individuals, startups, and small businesses ready to grow online.
              Whether you need a new website or a revamp, we’re here to build
              something that actually works for you.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="pricing-text176">Our Key Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="pricing-text177">Custom Website Development</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="pricing-text178">SEO Optimization</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="pricing-text179">Responsive Web Design</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="pricing-text180">
              We create tailor-made websites to suit your business needs and
              goals.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="pricing-text181">
              We optimize your website to improve search engine rankings and
              drive organic traffic.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="pricing-text182">
              We ensure your website looks great and functions seamlessly on all
              devices.
            </span>
          </Fragment>
        }
      ></Features16>
      <FAQ14
        text={
          <Fragment>
            <span className="pricing-text183">
              We offer complete website solutions for small service-based
              businesses. This includes custom web design, responsive mobile
              development, SEO setup, and conversion-boosting layouts. Whether
              you need a simple one-pager or a full multi-section business site,
              we’ve got you covered.
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="pricing-text184">
              Most websites take 1 to 2 weeks, depending on your needs. Simple
              landing pages can be done in a few days, while larger, custom
              sites may take a bit longer , but we always keep you updated and
              deliver on time.
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="pricing-text185">
              {' '}
              No , the demo is free , after you are satisfied we only require a
              50% deposit to secure your booking. The remaining amount is paid
              on final delivery before going live.
            </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="pricing-text186">
              <span>
                We don’t directly host websites, but we’ll set up and connect
                you with reliable, low-cost hosting platforms like Hostinger,
                Netlify, or local South African providers. We handle the tech ,
                you don’t have to lift a finger.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="pricing-text190">
              Just send us a message via the contact form or email, and we’ll
              get back to you within a few hours. We’ll chat about your needs,
              budget, and ideas , then give you a custom plan and quote. No
              stress, no pressure, just real results.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="pricing-text191">
              Some commonly asked questions 
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="pricing-text192">FAQs</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="pricing-text193">Still have a question?</span>
          </Fragment>
        }
        faq1Question={
          <Fragment>
            <span className="pricing-text194">What services do you offer?</span>
          </Fragment>
        }
        faq2Question={
          <Fragment>
            <span className="pricing-text195">
              How long does it take to build a custom website?
            </span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="pricing-text196">
              Do I need to pay the full amount upfront?
            </span>
          </Fragment>
        }
        faq4Question={
          <Fragment>
            <span className="pricing-text197">
              Do you provide hosting services for websites?
            </span>
          </Fragment>
        }
        faq5Question={
          <Fragment>
            <span className="pricing-text198">
              How do I get started with your website development services?
            </span>
          </Fragment>
        }
        rootClassName="faq14root-class-name"
      ></FAQ14>
      <Footer4
        text={
          <Fragment>
            <span className="pricing-text199">
              All rights reserved. We provide high-quality, responsive website
              design and development services tailored to help small businesses,
              professionals, and service providers establish a strong online
              presence. Our solutions are designed with performance, simplicity,
              and long-term reliability in mind. Use of this website constitutes
              acceptance of our standard terms and conditions. For more
              information, please refer to our [Terms of Service] and [Privacy
              Policy].
            </span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="pricing-text200">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="pricing-text201">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="pricing-text202">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="pricing-text203">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="pricing-text204">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="pricing-text205">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="pricing-text206">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name1"
      ></Footer4>
    </div>
  )
}

export default Pricing
