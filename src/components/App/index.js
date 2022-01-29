import "./App.css";
import articles from "../../libs/articles";
import Post from "../Post/Post";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <img
          className="bg-img"
          src="https://images.unsplash.com/photo-1592964378097-281cab4a12a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1982&q=80"
          alt="pigeon"
        />
      </div>
      <h1>WikiPigeon</h1>
      <div className="articles-wrapper">
        {articles.map((article) => {
          return (
            <Post
              title={article.title}
              paragraphs={article.paragraphs}
              comments={article.comments}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
