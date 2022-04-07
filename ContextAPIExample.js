import React, { createContext } from 'react';
import ReactDOM from "react-dom";

const Fname = createContext();
const Mname = createContext();
const Lname = createContext();

function CoC() {
  return (
    <>
      <Fname.Consumer>
        {(fname) => {
          return (
            <Mname.Consumer>
              {(mname) => {
                return (
                  <Lname.Consumer>
                    {(lname) => {
                      return (
                        <h1>
                          My Name is {fname}
                          {mname}
                          {lname}
                        </h1>
                      );
                    }}
                  </Lname.Consumer>
                );
              }}
            </Mname.Consumer>
          );
        }}
      </Fname.Consumer>
    </>
  );
}

function CoB() {
  return <CoC />;
}

function CoA() {
  return <CoB />;
}

export default function App() {
  return (
    <>
      <Fname.Provider value="Ashok ">
        <Mname.Provider value="Kumari ">
          <Lname.Provider value="Gahlot">
            <CoA />
          </Lname.Provider>
        </Mname.Provider>
      </Fname.Provider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
