type GreetPersonArrProps = {
  names: {
    fName: string;
    lName: string;
  }[];
};

const GreetPersonArr = (props: GreetPersonArrProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <p key={name.fName}>
            Welcome {name.fName} {name.lName}!
          </p>
        );
      })}
    </div>
  );
};

export default GreetPersonArr;
