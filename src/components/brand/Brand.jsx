import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => {
  const images = [google, slack, atlassian, dropbox, shopify];

  return (
    <div className="gpt3__brand section__padding">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Brand;
