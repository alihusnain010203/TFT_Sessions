import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import Img from "../src/assets/Nabeel Sabir Khan.png"
import ImgTwo from "../src/assets/Untitled design (1).png";
import ImgThree from "../src/assets/Primary.svg";
import ImgFour from "../src/assets/Monochrome-dark.svg";
import Whatsapp from "../src/assets/WhatsApp.svg.webp";

function App() {
  const [show, setshow] = useState(false);
  const [error, setError] = useState(false);
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    currently_wroking: "",
    graduation_year: "",
  });
  function register() {
    const modifiedData = {
      ...data,
      graduation_year: parseInt(data.graduation_year, 10) || 0,
      currently_wroking: false, // Always set to false
    };

    fetch("https://tft-trainings.cyclic.app/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedData),
    })
      .then((res) => {
        setshow(true);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
      })
      .then((responseData) => {
        // console.log(responseData);
      })
      .catch((err) => {
        setError(true);
        console.error("Error:", err);
      });
  }

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      data.name === "" ||
      data.email === "" ||
      data.phone === "" ||
      data.currently_wroking === "" ||
      data.graduation_year === ""
    ) {
      alert("Please Fill All The Details");
      return;
    } else {
      register();
    }
  };
  return (
    <>
      <div className="nav">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70px",
            width: "250px",
          }}
        >
          <img
            src={ImgFour}
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {!show ? (
        <div>
          <div className="container d-flex container_one d-flex align-content-around ">
            <div
              className="row form-container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "30px",
                // alignItems: "center",
              }}
            >
              <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
                <p className="heading">
                  <b>Build your Career at Top Product Companies</b>
                </p>

                <p className="heading-five">
                  Welcome to TFT Trainings, where innovation meets expertise!
                  Dive into the dynamic world of cutting-edge technologies, web
                  and app development, graphic design, and Mobile App
                  development. Our institute is your gateway to mastering the
                  latest frameworks and skills that drive the digital landscape.
                  Whether you're passionate about front-end wizardry, back-end
                  brilliance, or creating stunning visuals, we're here to guide
                  you on an exciting learning journey. Join us and embark on a
                  path of limitless possibilities in the realm of technology.
                  Let's build the future together!
                </p>
              </div>

              <div className="col-md-5 mt-5">
                <div className="signin ml-5">
                  <div className="content">
                    <h2>Book Your Seat</h2>

                    <div className="form">
                      <input
                        type="text"
                        value={data.name}
                        name="name"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        placeholder="Enter Your Name"
                      />
                      <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        placeholder="Enter Your Email"
                      />
                      <input
                        type="phone"
                        name="phone"
                        value={data.phone}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        placeholder="Enter Your Number"
                      />
                      <input
                        type="text"
                        name="currently_wroking"
                        value={data.currently_wroking}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        placeholder="Are You Currently Working"
                      />
                      <input
                        type="text"
                        name="graduation_year"
                        value={data.graduation_year}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        placeholder="Type Your Grad Year"
                      />

                      <div className="inputBox">
                        <input
                          type="submit"
                          onClick={(e) => {
                            onSubmit(e);
                          }}
                          value="Register Now"
                        />
                      </div>
                      <div>
                        {error && (
                          <p
                            style={{
                              color: "red",
                              padding: "10px",
                              backgroundColor: "black",
                            }}
                          >
                            Try Again
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container container_two">
            <center>
              {" "}
              <h1 className="mt-4">About the session</h1>
            </center>
            <div className="d-flex justify-content-around row detail-holder ">
              <div className="img-section col-md-4">
                <div className="img-holder">
                  <img src={ImgTwo} height="300px" alt="" />
                </div>
                <p className="name">
                  Nabeel Sabir Khan <br />
                  <i>CEO of TechOverflow</i>
                </p>
              </div>
              <div className="list-holder col-md-8">
                <ol
                  className="list"
                  style={{ listStyle: "none" ,fontSize:"20px" }}
                >
                  <li>
                    🌟 Explore the world of coding and see if it sparks your
                    creativity!
                  </li>
                  <li>🧭Explore key concepts in a fun and interactive way.</li>

                  <li>
                    🌍Discover if a coding career aligns with your aspirations.
                  </li>
                  <li>💡Ask questions and get expert insights.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="container container_three text-center">
            {/* <center>
              <h1>What will you learn</h1>
            </center> */}
            {/* <div className="d-flex"> */}
            {/* <p className="about">
              In this session, understand how you can stand out in competitive
              SDE roles, excel in technical interviews, and develop the mindset
              prized by top tech companies. Equip yourself with the knowledge
              and inspiration to make your next career step with confidence.
            </p> */}
            <div className="date-holder">
              <img
                src="https://img.freepik.com/premium-vector/calendar-icon-calendar-logo-date-time-icon_761928-109.jpg"
                alt="calendar"
                height="70px"
                width="70px"
              />
              <p className="time">
                <b>Date & Time:</b> February 29th, 2024, at 6:30 AM
              </p>
            </div>
            <div className="address-holder">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/000/552/683/small/location_pin_002.jpg"
                alt="map"
                height="70px"
                width="70px"
              />
              <p className="address">
                <b>Address:</b> Zoom
              </p>
            </div>
            <div className="footer">
              <p>
                For any queries, please contact:{" "}
                <span className="footer-span">info@tfttrainings.com</span>{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="after">
          <div className="after-padding">
            <b>
              <div className="after-card">
                <div>
                  Congratulations !🥳
                  <br />U Have Registered
                </div>

                <a
                  href="https://chat.whatsapp.com/KA8q7lBM2yYLrBQTk7Oerd"
                  className="whatsappLink"
                  style={{}}
                >
                  <img src={Whatsapp} width="45px" alt="" />

                  <p style={{ marginLeft: "10px", fontSize: "30px" }}>
                    Join Us
                  </p>
                </a>
              </div>
            </b>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
