import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Features21 from '../components/features21'
import CTA26 from '../components/cta26'
import Features211 from '../components/features211'
import Component3 from '../components/component3'
import Pricing1421 from '../components/pricing1421'
import Steps2 from '../components/steps2'
import FAQ14 from '../components/faq14'
import ContactForm7 from '../components/contact-form7'
import Contact11 from '../components/contact11'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Quick Strong Sheep</title>
        <meta property="og:title" content="Quick Strong Sheep" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Pricing</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Pricing</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Get a qoute</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name2"
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to our website development agency!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore our services for service-based businesses.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our agency and team.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in touch with us for your website needs.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Get a Free Consultation</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">About our services</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              We specialize in creating custom websites for service-based
              businesses such as HVAC, air conditioning, plumbing, and more. Our
              team of experts will work closely with you to design a website
              that showcases your services and helps you attract more customers.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Tailored Website Solutions for Your Businesses
            </span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MzY5OHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        image7Src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MzYzMnw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        image8Src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MzY1NXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        image9Src="https://images.unsplash.com/photo-1580795478844-5ed694336c90?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MzcxOHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
      ></Hero17>
      <Features24
        feature1ImgSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5Mzc5OXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        rootClassName="features24root-class-name"
      ></Features24>
      <Features21
        feature1Title={
          <Fragment>
            <span className="home-text118">
              70% of people searching for a service provider ignore businesses
              with no website.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">
              75% of people judge a company’s trust worthiness based on its
              website design.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">
              Service businesses with a website get 2–3x more bookings from
              local Google searches.
            </span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="home-text121">
              Customers spend 50% more with service providers who look
              professional online.
            </span>
          </Fragment>
        }
        rootClassName="features21root-class-name"
      ></Features21>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text122">Get a free quote</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text123">
              Let us help you create a professional website that showcases your
              services and attracts more customers.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to take your business online?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features211
        feature1Title={
          <Fragment>
            <span className="home-text125">
              craft a website that fits your brand 
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text126">
              help you appear on google and get visibility
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text127">
              build trust with your customers instantly 
            </span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="home-text128">
              <span>
                turn
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text130">
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
        }
        rootClassName="features211root-class-name"
      ></Features211>
      <Component3 rootClassName="component3root-class-name"></Component3>
      <Pricing1421
        text={
          <Fragment>
            <span className="home-text132">most popular</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text133">starter site</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business site</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Complete Business Website</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Whether your just starting out or ready to grow we&apos;ve got the
              right package to fit your goals and budget 
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">R2799</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">R3499</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">R5499</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">R250/pm Hosting</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">R250/pm Hosting</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Get Started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">R250/pm Hosting</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Standard Website Design</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">whatsapp button (instant chat)</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text162">Custom Website Design</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text163">Contact Form + WA button</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text164">mobile responsive </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text165">3 page website</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text166">premuim website design</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text167">contact form + WA button</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text168">layout cutomization</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text169">Blog Setup</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text170">5 page website </span>
          </Fragment>
        }
        rootClassName="pricing1421root-class-name"
        plan1Feature11={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature32={
          <Fragment>
            <span className="home-text174">1 page website</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature42={
          <Fragment>
            <span className="home-text179">google indexing setup</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature42={
          <Fragment>
            <span className="home-text184">mobile responsive</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature52={
          <Fragment>
            <span className="home-text186">google indexing setup</span>
          </Fragment>
        }
        plan1Feature321={
          <Fragment>
            <span className="home-text187">
              Perfect for one-page info sites
            </span>
          </Fragment>
        }
        plan2Feature421={
          <Fragment>
            <span className="home-text188">1 content revision</span>
          </Fragment>
        }
        plan3Feature521={
          <Fragment>
            <span className="home-text189">2 content revisions</span>
          </Fragment>
        }
        plan2Feature4211={
          <Fragment>
            <span className="home-text190">
              Everything you need to launch your business online
            </span>
          </Fragment>
        }
        plan3Feature5211={
          <Fragment>
            <span className="home-text191">
              Built for growth, SEO, and full content control.
            </span>
          </Fragment>
        }
        plan3Feature5212={
          <Fragment>
            <span className="home-text192">SEO setup </span>
          </Fragment>
        }
      ></Pricing1421>
      <Steps2
        text={
          <Fragment>
            <span className="home-text193">
              At SolidSites, our web development process is structured,
              transparent, and focused on delivering results. We work closely
              with each client to understand their needs, then design and build
              websites that are clean, functional, and aligned with their goals.
              From planning and design to development, testing, and final
              launch, every step is handled with precision to ensure a smooth
              experience and a polished final product.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text194">Initial Consultation</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text195">Website Development</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text196">Testing &amp; Refinement</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text197">Launch &amp; Maintenance</span>
          </Fragment>
        }
        rootClassName="steps2root-class-name"
        step1Description={
          <Fragment>
            <span className="home-text198">
              We start by understanding your business needs and goals to provide
              a tailored solution.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text199">
              Our team will design and develop a custom website that reflects
              your brand and attracts more customers.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text200">
              We thoroughly test the website for functionality and make any
              necessary refinements to ensure a seamless user experience.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text201">
              Once everything is perfect, we launch your website and offer
              ongoing maintenance and support to keep it running smoothly.
            </span>
          </Fragment>
        }
      ></Steps2>
      <FAQ14
        text={
          <Fragment>
            <span className="home-text202">
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
            <span className="home-text203">
              Most websites take 1 to 2 weeks, depending on your needs. Simple
              landing pages can be done in a few days, while larger, custom
              sites may take a bit longer , but we always keep you updated and
              deliver on time.
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text204">
              {' '}
              No , the demo is free , after you are satisfied we only require a
              50% deposit to secure your booking. The remaining amount is paid
              on final delivery before going live.
            </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text205">
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
            <span className="home-text209">
              Just send us a message via the contact form or email, and we’ll
              get back to you within a few hours. We’ll chat about your needs,
              budget, and ideas , then give you a custom plan and quote. No
              stress, no pressure, just real results.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text210">Some commonly asked questions </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text211">FAQs</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="home-text212">Still have a question?</span>
          </Fragment>
        }
        faq1Question={
          <Fragment>
            <span className="home-text213">What services do you offer?</span>
          </Fragment>
        }
        faq2Question={
          <Fragment>
            <span className="home-text214">
              How long does it take to build a custom website?
            </span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="home-text215">
              Do I need to pay the full amount upfront?
            </span>
          </Fragment>
        }
        faq4Question={
          <Fragment>
            <span className="home-text216">
              Do you provide hosting services for websites?
            </span>
          </Fragment>
        }
        faq5Question={
          <Fragment>
            <span className="home-text217">
              How do I get started with your website development services?
            </span>
          </Fragment>
        }
        rootClassName="faq14root-class-name1"
      ></FAQ14>
      <ContactForm7
        content1={
          <Fragment>
            <span className="home-text218">Have a project in mind?</span>
          </Fragment>
        }
        email={
          <Fragment>
            <span className="home-text219">
              Email ; buildwithsolidsites@gmail.com
            </span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="home-text220">Phone : +(27)64 859 4861</span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="home-text221">Contact Us</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text222">
              Get in touch with us today to discuss your website needs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text223">Contact Us</span>
          </Fragment>
        }
        rootClassName="contact-form7root-class-name"
      ></ContactForm7>
      <Contact11
        email={
          <Fragment>
            <span className="home-text224">buildwithsolidsites@gmail.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="home-text225">+(27)64 859 4861</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text226">
              Have a project in mind or need more information? Reach out to us!
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text227">
              Our team is ready to assist you with any inquiries or requests.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="home-text228">
              Feel free to contact us via email, phone or whatsapp.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="home-text229">+(27)64 859 4861</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text230">Get in Touch</span>
          </Fragment>
        }
        rootClassName="contact11root-class-name"
      ></Contact11>
      <Footer4
        text={
          <Fragment>
            <span className="home-text231">
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
            <span className="home-text232">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text233">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text234">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text235">Contact Us</span>
          </Fragment>
        }
        logoSrc="/mmmhfhm-200h.png"
        termsLink={
          <Fragment>
            <span className="home-text236">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text237">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text238">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
