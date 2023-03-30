type GreetProps = {
  name: {
    fName: string;
    lName: string;
  };
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        Hi {props.name.fName} {props.name.lName} This is TypeScript Tutorial
      </h2>
    </div>
  );
};

export default Greet;
