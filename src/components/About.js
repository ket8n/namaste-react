import User from "./User";
import UserClass from "./UserClass";

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
    </div>
  );
};

export default About;
