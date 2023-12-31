import { Link } from "react-router-dom";
import AboutMeet from "../components/AboutMeet";
import MeetCard from "../components/MeetCard";
import Members from "../components/Members";
import NextMeet from "../components/NextMeet";
import { meetup } from "../data/meetup";
import PastMeet from "../components/PastMeet";

const Home = () => {
  return (
    <>
      <section>
        <MeetCard meetup={meetup.slice(0, 1)} />
      </section>
      <section>
        <h1 className="mb-4 text-xl font-bold">Next Meetup</h1>
        <NextMeet meetup={meetup.slice(1, 2)} />
      </section>
      <section>
        <h1 className="my-4 text-xl font-bold">About Meetup</h1>
        <AboutMeet meetup={meetup.slice(0, 1)} />
      </section>
      <section>
        <div className="flex items-center justify-between font-bold">
          <h1 className="my-4 text-xl">Members</h1>
          <Link to={"/members"}>See All</Link>
        </div>
        <Members meetup={meetup.slice(0, 1)} />
      </section>
      <section>
        <div className="flex items-center justify-between font-bold">
          <h1 className="my-4 text-xl">Past Meetups</h1>
          <Link to={"/explore"}>See All</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <PastMeet meetup={meetup} />
        </div>
      </section>
    </>
  );
};

export default Home;
