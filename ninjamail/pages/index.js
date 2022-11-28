import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="floatingElements">
        <Image className="floatingElements__img" src="/floating-elements.png" alt="Floating elements" fill quality={100} />
      </div>
      <main className="hero">
        <nav className="hero__nav">
          <div className="hero__logo">
            <Image src="/ninjamail-logo.png" alt="NinjaMail Logo" height={35} width={63} />
            <h2>NinjaMail</h2>
          </div>
          <div>
            <ul>
              <li>FEATURES</li>
              <li>PRICING</li>
              <li>SERVICES</li>
              <li>PARTNERS</li>
              <li>SIGN UP FREE</li>
            </ul>
          </div>
        </nav>
        <div className="hero__middle">
          <div className="hero__leftSide">
            <h1 className="hero__title">Create Stunning Email Campaigns</h1>
            <p className="hero__subtitle">Create and launch email campaigns that captivate your customers in just a few clicks.</p>
            <div className="hero__btnContainer">
              <span className="hero__btn--primary">TRY NOW</span>
              <span className="hero__btn--secondary">GET A DEMO</span>
            </div>
          </div>
          <div className="hero__imgContainer">
            <Image className="hero__img" src="/hero-image.png" alt="Hero decorative" fill quality={100} />
          </div>
        </div>
      </main>
      <section className="sectionTwo">
        <div className="sectionTwo__imgContainer">
          <Image src="/section-two-image.png" alt="Decorative" fill quality={100} />
        </div>
        <div className="sectionTwo__cta">
          <h2 className="sectionTwo__ctaText">Reach More Customers</h2>
          <span className="sectionTwo__ctaBtn">LEARN HOW</span>
        </div>
      </section>
      <section className="sectionThree">
        <div className="sectionThree__card">
          <div className="sectionThree__imgContainer">
            <Image src="/card-img-1.png" alt="Decorative" fill quality={100} />
          </div>
          <div className="sectionThree__textContainer">
            <p className="sectionThree__cardText">
              Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.
            </p>
            <a className="sectionThree__cardCta">{"Learn More >"}</a>
          </div>
        </div>
        <div className="sectionThree__card">
          <div className="sectionThree__imgContainer">
            <Image src="/card-img-2.png" alt="Decorative" fill quality={100} />
          </div>
          <div className="sectionThree__textContainer">
            <p className="sectionThree__cardText">
              Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.
            </p>
            <a className="sectionThree__cardCta">{"Learn More >"}</a>
          </div>
        </div>
        <div>
          <h2 className="sectionThree__title">The source for proven, engaging email campaigns</h2>
          <p className="sectionThree__subtitle">{"Whether you're a startup, small business, e-commerce store, or want to promote your app, NinjaMail has the feature set tailored for your business."}</p>
        </div>
        <div className="sectionThree__bg">
          <Image src="/slanted-green-bg.png" alt="Background" fill quality={100} />
        </div>
      </section>
      <section className="sectionFour">
        <div className="sectionFour__cards">
          <div>
            <div>
              <h3>Frankie</h3>
              <p>Member since 2016</p>
            </div>
            <Image src="/section-four-img-1.png" alt="Background" fill quality={100} />
          </div>
          <div>
            <div>
              <h3>Camile</h3>
              <p>Member since 2012</p>
            </div>
            <Image src="/section-four-img-2.png" alt="Background" fill quality={100} />
          </div>
          <div>
            <div>
              <h3>Elayne</h3>
              <p>Member since 2018</p>
            </div>
            <Image src="/section-four-img-3.png" alt="Background" fill quality={100} />
          </div>
        </div>
        <div className="sectionFour__newsletter">
          <h2>Learn how others are reaching their audience easier than ever before.</h2>
          <div>
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="JOIN OUR LIST" />
          </div>
        </div>
      </section>
      <section className="sectionFive">
        <h2 className="sectionFive__text">All the best brands already use us.</h2>
        <div className="sectionFive__logos">
          <div className="sectionFive__imgContainer">
            <Image className="sectionFive__logo" src="/logo-1.png" alt="Logo" fill quality={100} />
          </div>
          <div className="sectionFive__imgContainer">
            <Image className="sectionFive__logo" src="/logo-2.png" alt="Logo" fill quality={100} />
          </div>
          <div className="sectionFive__imgContainer">
            <Image className="sectionFive__logo" src="/logo-3.png" alt="Logo" fill quality={100} />
          </div>
          <div className="sectionFive__imgContainer">
            <Image className="sectionFive__logo" src="/logo-4.png" alt="Logo" fill quality={100} />
          </div>
          <div className="sectionFive__imgContainer">
            <Image className="sectionFive__logo" src="/logo-5.png" alt="Logo" fill quality={100} />
          </div>
        </div>
      </section>
      <section className="sectionSix">
        <h2 className="sectionSix__text">Get started today!</h2>
        <span className="sectionSix__btn">PICK A PLAN</span>
      </section>
      <section className="sectionSeven">
        <div className="sectionSeven__footerTop">
          <div className="sectionSeven__logoContainer">
            <Image className="sectionSeven__logoImg" src="/ninjamail-logo.png" alt="NinjaMail Logo" height={35} width={63} />
            <h2 className="sectionSeven__logoText">NinjaMail</h2>
          </div>
          <div className="sectionSeven__linksContainer">
            <ul className="sectionSeven__linksCol">
              <li className="sectionSeven__link">Features</li>
              <li className="sectionSeven__link">Pricing</li>
              <li className="sectionSeven__link">Services</li>
              <li className="sectionSeven__link">Partners</li>
            </ul>
            <ul className="sectionSeven__linksCol">
              <li className="sectionSeven__link">About Us</li>
              <li className="sectionSeven__link">Tutorials</li>
              <li className="sectionSeven__link">Resources</li>
              <li className="sectionSeven__link">Help Center</li>
              <li className="sectionSeven__link">Templates</li>
              <li className="sectionSeven__link">Case Studies</li>
            </ul>
            <ul className="sectionSeven__linksCol">
              <li className="sectionSeven__link">Medium</li>
              <li className="sectionSeven__link">Twitter</li>
              <li className="sectionSeven__link">Facebook</li>
              <li className="sectionSeven__link">Instagram</li>
              <li className="sectionSeven__link">LinkedIn</li>
            </ul>
            <ul className="sectionSeven__linksCol">
              <li className="sectionSeven__link">Contact Us</li>
              <li className="sectionSeven__link">Slack</li>
              <li className="sectionSeven__link">Jobs</li>
            </ul>
          </div>
        </div>
        <div className="sectionSeven__footerBottom">
          <div>
            <p>NinjaMail is a sample project for Quest AI. ©{new Date().getFullYear()} Quest AI, All rights reserved.</p>
          </div>
          <div>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </section>
    </div>
  )
}
