import React from "react";
import Card from "../Card/Card";
import "./List.css";

function List(props) {
  console.log(props);
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map(cardData => (
          <Card title={cardData.title} content={cardData.content} />
        ))}
      </div>
    </section>
  );
}

export default List;
// {store.lists.header.map(header => {
//   <h2>{header}</h2>;
// })}
// {/* <h2>{store.lists}</h2>
// {} */}
