import pnLogo from "./assets/pn-logo.png";
import Cart from "./components/Cart";
import {JAVA_RESULTS} from "./data.js";
import {ENGLISH_RESULTS} from "./data.js";
import {HTML_RESULTS} from "./data.js";
import {PYTHON_RESULTS} from "./data.js";


function App() {
  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for (fake batch name)</h1>
      </header>
      <main className="scores-container">
        <div class="scores">
          <h1> JAVA</h1>
              {
                JAVA_RESULTS.map((element, index) => (
                   <Cart index={index} FirstName={element.firstName} LastName={element.lastName} number={element.score}/>
                ))
              }

              
        </div>
        <div class="scores">
          <h1>ENGLISH</h1>
          {
                ENGLISH_RESULTS.map((element, index) => (
                   <Cart index={index} FirstName={element.firstName} LastName={element.lastName} number={element.score}/>
                ))
              }
             
          </div>
          <div class="scores">
          <h1>HTML</h1>
          {
                HTML_RESULTS.map((element, index) => (
                   <Cart index={index} FirstName={element.firstName} LastName={element.lastName} number={element.score}/>
                ))
              }
          </div>
          <div class="scores">
          <h1>PYTHON</h1>
          {
                PYTHON_RESULTS.map((element, index) => (
                   <Cart index={index} FirstName={element.firstName} LastName={element.lastName} number={element.score}/>
                ))
              }
          </div>
      </main>
    </>
  );  
}

export default App;
