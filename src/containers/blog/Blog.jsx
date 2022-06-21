import Article from "../../components/article/Article";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  const article = {
    imgUrl: blog01,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  };
  const articles = [
    {
      imgUrl: blog02,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: blog03,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: blog04,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: blog05,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
  ];
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article {...article} />
        </div>
        <div className="gpt3__blog-container_groupB">
          {articles.map((item, index) => (
            <Article key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
