function Header() {
  return (
    <header className="header">
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Shop of the best shoes</p>
        </div>
      </div>
      <div>
        <ul className="headerRight">
          <li className="headerRightLi">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 pounds</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
