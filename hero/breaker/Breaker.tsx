import "./Breaker.css";
const logo3 =
  "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const logo4 =
  "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const h3 = `China holds military drills around Taiwan as 'punishment'`;
const p = `With live updates from Rupert Wingfield-Hayes and Joy Chiang in
Taiwan, Stephen McDonell in Beijing, Kelly Ng and Fan Wang in
Singapore and Nicole Ng in Sydney`;

function Breaker() {
  return (
    <div className="containerb">
      <div className="breakerb">
        <h3 className="textb">More News from Cliffbytes</h3>
      </div>

      <div className="mainb">
        <div className="firstsectionn">
          <div>
            <img
              className="immg1"
              src={logo3}
              alt="image"
              height="360px"
              width="100%"
            />
          </div>

          <div className="news_contentb1">
            <h3>{h3}</h3>
            <p>{p}</p> <p>2 Hours Ago</p>
            <hr />
          </div>
        </div>
        <div className="secondsectionn">
          <div>
            <img
              className="immg2"
              src={logo4}
              alt="image"
              height="360px"
              width="100%"
            />
          </div>

          <div className="news_contentb2">
            <h3>{h3}</h3>
            <p>{p}</p> <p>2 Hours Ago</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breaker;
