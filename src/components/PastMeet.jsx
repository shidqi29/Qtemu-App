import PropType from "prop-types";
import { Link } from "react-router-dom";
const PastMeet = ({ meetup }) => {
  return (
    <>
      {meetup.map((meet) => (
        <div key={meet.id} className="card bg-base-300 p-2 shadow-lg">
          <div className="card-body p-0">
            <div className="card-title">{meet.date}</div>
            <hr />
            <p>{meet.title}</p>
            <p>{meet.members} went</p>
            <div className="card-actions">
              <Link className="btn btn-primary w-1/3" to={`/meet/${meet.id}`}>
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

PastMeet.propTypes = {
  meetup: PropType.array,
};

export default PastMeet;
