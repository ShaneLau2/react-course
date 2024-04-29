import React from "react"; // Add the missing import statement for React
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <MeetupItem key={meetup.id} {...meetup} />
            ))}
        </ul>
    );
}
export default MeetupList;