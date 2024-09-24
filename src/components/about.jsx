import { FaCube } from "react-icons/fa6";

function About() {
  return (
    <>
      <section className="vh-100 d-flex justify-content-center align-items-center gap-5 container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center gap-3">
            <div className="icon-container">
              <FaCube style={{ fontSize: "32px" }} />
            </div>
            <h1>Discover Eco-Friendly Products That Make a Difference</h1>
            <p>
              At ecolife, we are committed to offering a wide range of
              environmentally friendly products that help you live a sustainable
              lifestyle. From reusable household items to organic personal care
              products, our collection is designed to minimize your carbon
              footprint without compromising on quality. Join us in our mission
              to create a greener future for all.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center h-100">
            <figure>
              <img
                src="https://via.placeholder.com/600x500"
                alt="Placeholder Image"
                className="img-fluid"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="min-vh-100 container py-5">
        <div className="row">
          <div
            style={{
              maxWidth: "600px",
              marginBottom: "40px",
              paddingTop: "0px",
            }}
          >
            <p className="fw-semibold">Eco-friendly</p>
            <h1>Sustainable Products for a Greener Future</h1>
            <p>
              At ecolife, we believe in providing environmentally friendly
              products that promote sustainability, cost-saving, and have a
              positive impact on the environment.
            </p>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="icon-container mb-3">
                <FaCube style={{ fontSize: "32px" }} />
              </div>
              <h2 className="fw-bold mb-3">Sustainability at its core</h2>
              <p>
                Our products are designed to minimize environmental impact while
                maximizing benefits for our customers.
              </p>
            </div>

            <div className="col">
              <div className="icon-container mb-3">
                <FaCube style={{ fontSize: "32px" }} />
              </div>
              <h2 className="fw-bold mb-3">Cost Savings for You</h2>
              <p>
                Our products are designed to minimize environmental impact while
                maximizing benefits for our customers.
              </p>
            </div>

            <div className="col">
              <div className="icon-container mb-3">
                <FaCube style={{ fontSize: "32px" }} />
              </div>
              <h2 className="fw-bold mb-3">Join the Green Movement</h2>
              <p>
                Our products are designed to minimize environmental impact while
                maximizing benefits for our customers.
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center">
            <button className="btn btn-outline-dark px-4 py-2">
              Learn More
            </button>
            <button className="btn">Sign Up &gt;</button>
          </div>
        </div>
      </section>

      <section
        className="bg-image text-white"
        style={{ width: "100%", height: "600px" }}
      >
        <div className="container d-flex align-items-center h-100 gap-3 ">
          <div
            style={{ width: "600px", marginBottom: "40px", paddingTop: "0px" }}
          >
            <h1 className="fw-bold">Discover Our Eco-friendly Products</h1>
            <p>
              Explore our wide range of environmentally friendly products and
              make a positive impact
            </p>
            <div className="d-flex gap-2">
              <button className="button btn btn-dark">Shop</button>
              <button className="button btn btn-outline-dark">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="d-flex align-items-center"
        style={{ width: "100%", height: "400px" }}
      >
        <div className="container">
          <div className="mb-4" style={{ maxWidth: "600px" }}>
            <h1>Stay Updated with ecolife&apos;s Newsletter</h1>
            <p>
              Subscribe to our newsletter for the latest updates on products and
              green activities.
            </p>
          </div>
          <form className="d-flex flex-column flex-md-row">
            <input
              className="form-control border-dark me-md-2 mb-2 mb-md-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default About;
