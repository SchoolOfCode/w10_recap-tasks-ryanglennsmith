import css from "./App.module.css";

import articles from "../../libs/articles";
import Post from "../Post/Post";

function App() {
  return (
    <div className={css.App}>
      <div className={css.imgWrapper}>
        <img className={css.bgImage} src="pigeon.jfif" alt="pigeon" />
      </div>
      <h1 className={css.bigWords}>WikiPigeon</h1>
      <h2 className={css.littleWords}>a blog by pigeons for pigeons</h2>
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
