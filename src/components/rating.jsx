import { FaStar } from "react-icons/fa6";

const Rating = () => {
  return (
    <section className="min-vh-100 d-flex flex-column gap-4 container py-5">
      <div>
        <h1>Happy Customers</h1>
        <p>Hear what our customers have say to ecolife</p>
      </div>

      <div className="row">
        
        <div className="col">
            <div className="d-flex gap-1 mb-2">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <h6 className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, a!</h6>
            <img src="https://via.placeholder.com/50x50" alt="images" style={{ borderRadius: "50%", marginBottom: "16px"}} />
            <p className="fw-bold">John doe</p>
            <p>CEO, ABC Company</p>
        </div>
        
        <div className="col">
            <div className="d-flex gap-1 mb-2">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <h6 className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, a!</h6>
            <img src="https://via.placeholder.com/50x50" alt="images" style={{ borderRadius: "50%", marginBottom: "16px"}} />
            <p className="fw-bold">John doe</p>
            <p>CEO, ABC Company</p>
        </div>
        
        <div className="col">
            <div className="d-flex gap-1 mb-2">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <h6 className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, a!</h6>
            <img src="https://via.placeholder.com/50x50" alt="images" style={{ borderRadius: "50%", marginBottom: "16px"}} />
            <p className="fw-bold">John doe</p>
            <p>CEO, ABC Company</p>
        </div>
      </div>
    </section>
  );
};

export default Rating;
