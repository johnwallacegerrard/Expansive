import "./Price.css";

const Price = () => {
  return (
    <div className="price">
      <h2 className="price__title">Our Pricing</h2>
      <ul className="price__list">
        <li className="price__list-item">
          $360 MINIMUM - Includes truck and 2.5 hours of labor
          <br></br>
          <p className="price__list-item-sub">
            Please contact for labor only prices
          </p>
        </li>
        <li className="price__list-item">Each additional hour $140/hr</li>
        <li className="price__list-item">
          Elmira/Horseheads area - NO MINIMUM NEEDED!!
        </li>
      </ul>
    </div>
  );
};

export default Price;
