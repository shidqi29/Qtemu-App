import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MeetCard = ({ meetup }) => {
  return (
    <>
      {meetup.map((meet) => (
        <div
          className="card mb-5  gap-5 bg-base-300 p-2 shadow-lg sm:card-side"
          key={meet.id}
        >
          <figure>
            <img src={meet.image} alt="" className="w-full object-contain" />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title text-2xl font-bold">{meet.title}</h2>
            <div className="mb-2 flex h-full flex-row gap-10">
              <div>
                <p>Location</p>
                <p>Members</p>
                <p>Organizers</p>
              </div>
              <div>
                <p>{meet.location}</p>
                <p>{meet.members}</p>
                <p>{meet.organizer.name}</p>
              </div>
            </div>
            <div className="card-actions">
              <Link className="btn btn-primary w-1/3" to={`/meet/${meet.id}`}>
                Join Us
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

MeetCard.propTypes = {
  meetup: PropTypes.any,
};

export default MeetCard;
