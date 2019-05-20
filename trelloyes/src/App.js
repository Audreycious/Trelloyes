import React from "react";
import List from "./components/List/List";
import "./App.css";
function App({ store }) {
  // console.log(store);
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {store.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
// working map code:
/* 
{store.lists.map(listItem => (
  <List key={listItem.id} header={listItem.header} />
  ))} 
*/
