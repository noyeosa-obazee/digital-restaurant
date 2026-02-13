import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
// import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-wrapper">
      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
