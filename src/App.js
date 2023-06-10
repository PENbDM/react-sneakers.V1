import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content_search_block">
          <h1>All shoes</h1>
          <div className="search-block">
            <img src="/img/sneakers/search.svg" alt="search" />
            <input placeholder="Search..."></input>
          </div>
        </div>
        <div className="sneakers">
          <Card />
          <Card />
          <Card />
          <Card />

          {/* <div className="card">
            <div className="favourite">
              <img src="/img/heart-unlike.svg" alt="unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/5.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/6.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/7.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/8.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/9.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/10.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/11.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/12.jpg"
              alt="Sneakers"
            />
            <h5>Shoes for proper man, son of a bitch</h5>
            <div className="cardBottom">
              <div className="cardBottom_descript">
                <span>Price:</span>
                <b>12 999 pound</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
