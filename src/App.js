import React from "react";
import "./App.css";
import List from "./componenets/list/List";

const App = ({ store }) => {
  const { lists, allCards } = store;
  const createList = list => {
    const cardList = [];
    list.cardIds.forEach(id => {
      if (allCards[id]) {
        cardList.push(allCards[id]);
      }
    });
    return <List key={list.key} header={list.header} cards={cardList} />;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>

      <div className="App-list">{lists.map(createList)}</div>
    </div>
  );
};

export default App;
