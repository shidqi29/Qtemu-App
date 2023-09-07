import PropType from "prop-types";
const AboutMeet = ({ meetup }) => {
  return (
    <>
      {meetup.map((meet) => (
        <div key={meet.id} className="card bg-base-300 p-2 shadow-lg">
          <div className="card-body p-0">
            <p>{meet.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
AboutMeet.propTypes = {
  meetup: PropType.array,
};

export default AboutMeet;
