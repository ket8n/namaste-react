import UserClass from "./UserClass";
import userContext from "../utils/userContext";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      {/* <User
        name="Ketan Chopade [functional]"
        location="Gandhinagar"
        contact="@ketanchopade"
      /> */}
      <UserClass
        name="Ketan Chopade [class]"
        location="Gandhinagar"
        contact="@ketanchopade"
      />
      <userContext.Consumer>
        {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
      </userContext.Consumer>
    </div>
  );
};

export default About;
