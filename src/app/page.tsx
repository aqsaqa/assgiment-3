export default function Responsive() {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Vitamin C Serum Benefits</h1>
        <nav className="header-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
            <h1 className="title" style={{ color: 'white' }}>Antioxidant Protection</h1>
            <p className="description">Vitamin C serum free radicals ko neutralize kr ke skin damage control krta hy.</p>
            <button className="readMore">Read More</button>
          </div>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <h1 className="title" style={{ color: 'white' }}>Skin Brightening</h1>
            <p className="description">Vitamin C serum skin tone ko brighten karta hy aur pigmentation ko reduce karta hy.</p>
            <button className="readMore">Read More</button>
          </div>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <h1 className="title" style={{ color: 'white' }}>Collagen Production</h1>
            <p className="description">Vitamin C serum collagen synthesis ko stimulate karta hy.</p>
            <button className="readMore">Read More</button>
          </div>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <h1 className="title" style={{ color: 'white' }}>Hydration Source</h1>
            <p className="description">Vitamin C serum skin ki moisture retention ko increase krta hy jis se skin hydrate hoti hy.</p>
            <button className="readMore">Read More</button>
          </div>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <h1 className="title" style={{ color: 'white' }}>Dark Spots</h1>
            <p className="description">Vitamin C serum dark spots, age spots, aur acne marks ko light karta hy.</p>
            <button className="readMore">Read More</button>
          </div>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <h1 className="title" style={{ color: 'white' }}>Anti Inflammatory</h1>
            <p className="description">Vitamin C serum skin ki redness aur inflammation ko reduce karta hy.</p>
            <button className="readMore">Read More</button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Vitamin C Serum. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </nav>
      </footer>
    </>
  );
}
