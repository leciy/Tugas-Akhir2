import { FaRegClock } from "react-icons/fa6";

function Magazine() {
  return (
    <>
      <section
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-5 container py-5"
        style={{ maxWidth: "800px" }}
      >
        <header className="text-center">
          <p>Discover</p>
          <h1>Upcoming</h1>
          <p>
            Stay updated on the latest ecolife events that promote green
            activites and learn how you can participate.
          </p>
        </header>
        <div className="container-fluid">
          <div className="d-flex gap-3 justify-content-center">
            <p>View All</p>
            <p>Green Events</p>
            <p>Sustainbility Workshop </p>
            <p>Enviromental Conferences </p>
            <p>Community Cleanup</p>
          </div>
        </div>
        <div className="d-flex flex-column gap-4 w-100">

          <div className="border border-dark p-3 d-flex justify-content-between flex-lg-row flex-column ">
            <div>
              <div className="d-flex gap-3 align-items-center">
                <FaRegClock />
                <p className="my-auto">Duration: 45 minutes</p>
                <div className="btn btn-light ">Comming Soon</div>
              </div>
              <h3>Join Our Webinars</h3>
              <p>
                Learn from industry experts and gain insights on sustainable
                living.
              </p>
            </div>
            <figure>
              <img
                src="https://via.placeholder.com/120x120"
                alt="place-holder"
                className="object-fit-cover "
              />
            </figure>
          </div>
          

          <div className="border border-dark p-3 d-flex justify-content-between flex-lg-row flex-column ">
            <div>
              <div className="d-flex gap-3 align-items-center">
                <FaRegClock />
                <p className="my-auto">Duration: 45 minutes</p>
                <div className="btn btn-light ">Comming Soon</div>
              </div>
              <h3>Join Our Webinars</h3>
              <p>
                Learn from industry experts and gain insights on sustainable
                living.
              </p>
            </div>
            <figure>
              <img
                src="https://via.placeholder.com/120x120"
                alt="place-holder"
                className="object-fit-cover "
              />
            </figure>
          </div>

          <div className="border border-dark p-3 d-flex justify-content-between flex-lg-row flex-column ">
            <div>
              <div className="d-flex gap-3 align-items-center">
                <FaRegClock />
                <p className="my-auto">Duration: 45 minutes</p>
                <div className="btn btn-light ">Comming Soon</div>
              </div>
              <h3>Join Our Webinars</h3>
              <p>
                Learn from industry experts and gain insights on sustainable
                living.
              </p>
            </div>
            <figure>
              <img
                src="https://via.placeholder.com/120x120"
                alt="place-holder"
                className="object-fit-cover "
              />
            </figure>
          </div>

        </div>
      </section>

      <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-5 container py-5">
        <header className="text-center">
          <p>latest</p>
          <h1>Explore the Green Lifestyle</h1>
          <p>Discover sustainable living tips and eco-friendly solutions</p>
        </header>
        <div className="row gap-3">
          <div className="col">
            <div className="card">
              <img
                src="https://via.placeholder.com/600x300"
                className="card-img-top"
                alt="image's card"
              />
              <div className="card-body">
                <div className="d-flex gap-2 align-items-center ">
                  <div className="btn btn-light mb-2">Sustainbility</div>
                  <p>5 min reading</p>
                </div>
                <h2 className="card-title">Card title</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card s content.
                </p>
                <a href="#" className="link-dark text-decoration-none">
                  Learn More &gt;
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="https://via.placeholder.com/600x300"
                className="card-img-top"
                alt="image's card"
              />
              <div className="card-body">
                <div className="d-flex gap-2 align-items-center ">
                  <div className="btn btn-light mb-2">Sustainbility</div>
                  <p>5 min reading</p>
                </div>
                <h2 className="card-title">Card title</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card s content.
                </p>
                <a href="#" className="link-dark text-decoration-none">
                  Learn More &gt;
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="https://via.placeholder.com/600x300"
                className="card-img-top"
                alt="image's card"
              />
              <div className="card-body">
                <div className="d-flex gap-2 align-items-center ">
                  <div className="btn btn-light mb-2">Sustainbility</div>
                  <p>5 min reading</p>
                </div>
                <h2 className="card-title">Card title</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card s content.
                </p>
                <a href="#" className="link-dark text-decoration-none">
                  Learn More &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-w-100 mx-auto">
          <button className="btn btn-outline-dark px-4 py-2">View All</button>
        </div>
      </section>
    </>
  );
}

export default Magazine;
