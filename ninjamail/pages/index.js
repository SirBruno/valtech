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
    </div>
  )
}
