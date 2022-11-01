import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <main>
        <nav className="nav">
          <div className="nav__logo">
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
      </main>
    </div>
  )
}
