import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate(); // Call useNavigate directly in the component

  function MeetupHandler(meetupData) {
    console.log(meetupData);
    fetch(
      "https://react-course-1ef24-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
    // Use navigate here instead of inside the async function
  }

  return (
    <section>
      <h1>Add NewMeetup</h1>
      <NewMeetupForm onAddMeetup={MeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
