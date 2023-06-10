function Card() {
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/heart-unlike.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
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
  );
}

export default Card;
