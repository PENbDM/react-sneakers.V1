function Drawer() {
  return (
    <div style={{}} className="overlay">
      <div className="drawer">
        <h2 className="cartBlock_title">
          Cart{" "}
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        <div className="items">
          <div className="cartItem">
            <img
              className="CartItemImg"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div>
              <p className="cartItemP">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 Pound</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <img
              className="CartItemImg"
              width={70}
              height={70}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <div>
              <p className="cartItemP">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 Pound</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        <div className="cartTotalCart">
          <ul>
            <li>
              <span>All price</span>
              <div></div>
              <b>5000 pound</b>
            </li>
            <li>
              <span>Tax 5%</span>
              <div></div>
              <b>1000pound</b>
            </li>
          </ul>
          <button className="greenButton">
            Make your order
            <img src="./img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
