import { useSelector } from "react-redux";

const ProtectedRoute = ({ render }) => {
  const isLogged = useSelector((state) => state.user !== null);

  if (isLogged) {
    return render;
  }
  return (
    <>
      <h2>Error 403 - Forbidden, are you trying to break my program!?</h2>
      <a href="/">Go back!</a>
    </>
  );
};

export default ProtectedRoute;
