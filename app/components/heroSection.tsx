


export default function HeroSection() {


  return (
    <section className="Hero">
      <div className="hero-container">
        <div className="hero-copy">
          <h2 className="HeroText">Envoyez et recevez, sans frais avec Wire</h2>
          <p className="HeroSub">
            Une application qui vous permet d’envoyer de l’argent de façon instantané dans le monde entier, tout ça de façon automatisé et sûr.
          </p>
          <div className="hero-cta">
            <button className="install-btn">Installer l'application dès maintenant</button>
          </div>
        </div>
        <div className="hero-visual">
          <img
            className="frame"
            src="/Framephone.png"
            alt="phone"
          />
        </div>
      </div>
    </section>
  );
}