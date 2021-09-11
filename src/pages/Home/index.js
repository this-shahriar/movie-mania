import { useEffect } from "react";
import { useHistory } from "react-router";

const Home = () => {
  const router = useHistory();

  useEffect(() => {
    router?.push("/movies");
  }, [router]);

  return <div>Home page</div>;
};

export default Home;
