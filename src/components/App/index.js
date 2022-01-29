import css from "./App.module.css";

import articles from "../../libs/articles";
import Post from "../Post/Post";

function App() {
  return (
    <div className="App">
      <div className={css.wrapper}>
        <img className={css.bgImage} src="pigeon.jfif" alt="pigeon" />
      </div>
      <h1>WikiPigeon</h1>
      <div className={css.articlesWrapper}>
        {articles.map((article, index) => {
          return (
            <Post
              title={article.title}
              paragraphs={article.paragraphs}
              comments={article.comments}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
