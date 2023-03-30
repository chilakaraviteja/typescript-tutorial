type StatusProps = {
  status: "loading" | "success" | "error";
};
const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") {
    message = "Loading....";
  } else if (status === "success") {
    message = "Data Fetched Successfully...";
  } else {
    message = "Error...";
  }
  return (
    <>
      <h2>Status - {message}</h2>
    </>
  );
};

export default Status;
