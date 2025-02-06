import "./certificate.css"


const Certificate = () => {

  return (
    <>
    <h1 className="title-all">Certificate</h1>
    <section id="Certificate" className="Certificate">
          <div className="card">
             <h5 className="title">PHP Laravel</h5>
              <span className="Certificate-img">
                <img src="/Certificate/4.png" />
             </span>
          </div>
          <div className="card">
          <h5 className="title">React - js</h5>
              <span className="Certificate-img">
                <img src="/Certificate/2.jpg" />
             </span>
          </div>
          <div className="card">
              <h5 className="title">Pre Security</h5>
              <span className="Certificate-img">
              <img src="/Certificate/1.png" />
              </span>

          </div>
          <div className="card">
          <h5 className="title">Foundation of Cloud IoT Edge ML</h5>
              <span className="Certificate-img">
                <img src="/Certificate/3.png" />
             </span>
          </div>
    </section>
    </>
  );
}

export default Certificate;
