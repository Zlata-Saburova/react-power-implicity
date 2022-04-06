import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__slider">
        <h1 className="header__title">The Power of Simplicity</h1>
        <p className="header__text">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <a href="" className="header__link">
          Learn
        </a>
        <ul className="header__list">
          <li className="header__item">
            <div className="header__dot"></div>
          </li>
          <li className="header__item">
            <div className="header__dot"></div>
          </li>
          <li className="header__item">
            <div className="header__dot header__dot--active"></div>
          </li>
          <li className="header__item">
            <div className="header__dot"></div>
          </li>
          <li className="header__item">
            <div className="header__dot"></div>
          </li>
        </ul>
      </div>
    </header>
  );
};
