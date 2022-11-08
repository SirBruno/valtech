import Image from 'next/image'

export default function Home() {
  return (
    <div>
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
      </section>
    </div>
  )
}
