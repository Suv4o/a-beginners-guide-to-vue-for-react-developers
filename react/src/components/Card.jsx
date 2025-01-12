// Card component with external CSS Module

// import styles from "./Card.module.css";

// const Card = () => <div className={styles.header}>Hello, React!</div>;

// export default Card;

// Card component with scoped Styled-Components (CSS-in-JS)

import styled from "styled-components";

const Header = styled.h1`
    color: blue;
    font-size: 20px;
`;

const Card = () => <Header>Hello, React!</Header>;

export default Card;
