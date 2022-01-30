import css from "./PigeonBlog.module.css";

import articles from "../../libs/articles";
import Post from "../Post/Post";

function PigeonBlog() {
  return (
    <div className={css.page}>
      <div className={css.imgWrapper}>
        <img className={css.bgImage} src="pigeon.jpg" alt="pigeon" />
      </div>
      <h1 className={css.bigWords}>WikiPigeon</h1>
      <h2 className={css.littleWords}>a blog for pigeons by pigeons</h2>
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

export default PigeonBlog;
