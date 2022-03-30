import {useState} from 'react';

function App() {

  const [count, setCount] = useState(8);
  const multiply = () => {
    setCount((count !== 0) ? (count * 2) : (count + 8))
  }

  return (
    <>
      <section className="bg-warning">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* <div className="col-md-3"></div> */}
            <div className="col-md-6 shadow my-md-5 mt-sm-0 bg-primary">
              <div className="card text-center m-5">
                <h1 className='display-1'>{ count }</h1>
                <div className="card-body">
                  <h3 className="card-title text-underline">Counter</h3>
                  <p className="card-text lead fs-6">
                    If you hit the <strong>Multiply</strong> button, it will multiply the display number above by <b>2</b>. 
                    And when you hit the <strong>Reset</strong> button, the display number will reset to <b>0</b>. 
                  </p>
                  <div className="d-sm-flex align-items-center justify-content-center">
                    <div className='form-control border-0'>
                      <button type='button' className="btn btn-success text-uppercase" onClick={multiply}>Multiply</button>
                    </div>
                    <div className='form-control border-0'>
                      <button type='button' className="btn btn-danger text-uppercase" onClick={() => setCount(0)}>Reset</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3"></div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
