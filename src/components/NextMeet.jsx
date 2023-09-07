import PropType from "prop-types";
import { Link } from "react-router-dom";
const NextMeet = ({ meetup }) => {
  return (
    <>
      {meetup.map((meet) => (
        <div key={meet.id} className="card bg-base-300 p-2 shadow-lg">
          <div className="card-body p-0">
            <Link to={`/meet/${meet.id}`}>
              <h2 className="card-title text-lg font-bold">{meet.title}</h2>
            </Link>
            <p>{meet.date}</p>
            <p>{meet.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

NextMeet.propTypes = {
  meetup: PropType.array,
};

export default NextMeet;
