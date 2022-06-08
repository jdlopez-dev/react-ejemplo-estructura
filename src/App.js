import Header from "./Components/header/Header";
import News from "./Components/news/News";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <main className="main">
          <News />
        </main>
        <aside className="drawer">drawer</aside>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
