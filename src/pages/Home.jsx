import AboutMeet from "../components/AboutMeet";
import MeetCard from "../components/MeetCard";
import NextMeet from "../components/NextMeet";
import { meetup } from "../data/meetup";

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
    </>
  );
};

export default Home;
