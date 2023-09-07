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
        <h1 className="text-xl font-bold mb-4">Next Meetup</h1>
        <NextMeet meetup={meetup.slice(1, 2)} />
      </section>
    </>
  );
};

export default Home;
