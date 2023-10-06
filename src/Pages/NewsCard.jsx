import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { details, thumbnail_url, title, _id } = news;
  return (
    <div className="mt-10">
      <div className="card w-full bg-base-100 shadow-xl ">
        <figure>
          <img
            className="w-full h-[300px] object-cover object-top"
            src={thumbnail_url}
            alt="news"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <span className=" text-blue-600 font-bold">
                <Link to={`/news/${_id}`}> read more...</Link>
              </span>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  news: PropTypes.object,
};
export default NewsCard;
