import PropType from "prop-types";
const Members = ({ meetup }) => {
  return (
    <>
      {meetup.map((meet) => (
        <div
          key={meet.id}
          className="card mb-5 flex flex-col gap-5 bg-base-300 p-2 shadow-lg sm:card-side"
        >
          <figure>
            <img
              src={meet.organizer.avatar}
              alt=""
              className="w-full h-20 object-contain rounded-full"
            />
          </figure>
          <div className="card-body p-0">
            <p className="font-bold">Organizers</p>
            <p>{meet.organizer.name} & 4 others</p>
          </div>
        </div>
      ))}
    </>
  );
};

Members.propTypes = {
  meetup: PropType.array,
};

export default Members;
