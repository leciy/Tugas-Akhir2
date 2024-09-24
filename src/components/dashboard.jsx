function Dashboard() {
  return (
    <section className="vh-100 d-flex justify-content-lg-center align-items-lg-center gap-5 container" >
      <div className="row">
        <div className="col-lg-6 col d-flex flex-column justify-content-center align-items-center gap-3 mb-lg-0 mb-5">
          <h1 className="big-font">
            Ecolife: Embrace a Greener Future
          </h1>
          <p>
            Discover a wide range of environmentally friendly products and join
            us in our weekly green activities
          </p>
          <div className="d-flex gap-2 align-items-start w-100">
            <button
              className="button btn btn-dark"
            >
              Shop
            </button>
            <button
              className="button btn btn-outline-dark"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-lg-center align-items-lg-center">
          <figure className="w-auto h-auto">
            <img
              src="https://via.placeholder.com/600x500"
              alt="Placeholder Image"
              className="img-fluid"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
