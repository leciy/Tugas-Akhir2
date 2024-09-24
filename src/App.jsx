import About from "./components/about";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Magazine from "./components/magazine";
import Navbar from "./components/navbar";
import Rating from "./components/rating";

function App() {
  return (
    <main>
      <Navbar />
      <Dashboard />
      <About />
      <Magazine />
      <Rating />
      <Footer />
    </main>
  );
}

export default App;
