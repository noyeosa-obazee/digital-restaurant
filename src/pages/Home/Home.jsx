import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import heroImage from "../../assets/images/Welcome.png";
import "./Home.css";

// Mock Data for Categories
const CATEGORIES = [
  {
    id: 1,
    title: "Jollof Delights",
    img: "https://placehold.co/400x300?text=Jollof",
  },
  {
    id: 2,
    title: "Swallow & Soups",
    img: "https://placehold.co/400x300?text=Swallow",
  },
  {
    id: 3,
    title: "Grills & BBQ",
    img: "https://placehold.co/400x300?text=Grills",
  },
  {
    id: 4,
    title: "Sweet Treats",
    img: "https://placehold.co/400x300?text=Sweets",
  },
  {
    id: 5,
    title: "Jollof Delights",
    img: "https://placehold.co/400x300?text=Jollof+2",
  },
  {
    id: 6,
    title: "Jollof Delights",
    img: "https://placehold.co/400x300?text=Jollof+3",
  },
];

// Mock Data for Chef's Specials
const SPECIALS = [
  {
    id: 1,
    title: "Spicy Tilapia Pepper Soup",
    desc: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
    price: "3,500",
    img: "https://placehold.co/400x300?text=Pepper+Soup",
  },
  {
    id: 2,
    title: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: "3,500",
    img: "https://placehold.co/400x300?text=Jollof+Rice",
  },
  {
    id: 3,
    title: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: "3,500",
    img: "https://placehold.co/400x300?text=Jollof+Rice",
  },
  {
    id: 4,
    title: "Jollof Rice & Smoked Chicken",
    desc: "Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.",
    price: "3,500",
    img: "https://placehold.co/400x300?text=Smoked+Chicken",
  },
  {
    id: 5,
    title: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: "3,500",
    img: "https://placehold.co/400x300?text=Fried+Chicken",
  },
  {
    id: 6,
    title: "Egusi Soup & Pounded Yam",
    desc: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
    price: "3,500",
    img: "https://placehold.co/400x300?text=Egusi+Soup",
  },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />

      {/* --- 1. HERO SECTION --- */}
      <header className="home-hero">
        <div className="hero-overlay"></div>
        {/* Note: This img tag is the background. You can also use CSS background-image */}
        <img src={heroImage} alt="Hero Background" className="hero-bg-img" />

        <div className="hero-content-centered">
          <h1>
            The Heart of Nigerian Home <br /> Cooking
          </h1>
          <p>Handcrafted with passion, delivered with care.</p>
          <button className="btn-hero-orange">Discover what's new</button>
        </div>

        {/* Floating Search Bar */}
        <div className="hero-search-bar">
          <span className="search-icon">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#807373"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <input type="text" placeholder="What are you craving for today?" />
        </div>
      </header>

      {/* --- 2. POPULAR CATEGORIES --- */}
      <section className="section-container">
        <h2 className="section-title">Popular Categories</h2>
        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="category-card">
              <img src={cat.img} alt={cat.title} />
              <div className="cat-label">
                <h3>{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. CHEF'S SPECIALS --- */}
      <section className="section-container bg-light">
        <h2 className="section-title">Chef's Specials</h2>
        <div className="specials-grid">
          {SPECIALS.map((item) => (
            <div key={item.id} className="special-card">
              <div className="special-img-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="special-info">
                <h3>{item.title}</h3>
                <p className="special-desc">{item.desc}</p>
                <div className="special-footer">
                  <span className="price">₦{item.price}</span>
                  <button className="btn-add-cart">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. NEW MENU PROMO --- */}
      <section className="promo-section">
        <img
          src="https://placehold.co/1600x600?text=Beans+and+Plantain"
          alt="New Menu"
          className="promo-bg"
        />
        <div className="promo-overlay">
          <div className="promo-text">
            <h2>Introducing Our New Menu Additions!</h2>
            <p>
              Explore exciting new dishes, crafted with the freshest ingredients
              and authentic Nigerian flavors. Limited time offer!
            </p>
            <button className="btn-hero-orange">Discover what's new</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
