import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const BootstrapEx = () => {
  return (
    <div className="container card-wrapper">
      <h1 className="text-center">Bootstrap with React practice</h1>
      <br/>
      <div className="tex-center">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://picsum.photos/id/1/200/200" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BootstrapEx