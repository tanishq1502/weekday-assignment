import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/actions/actionCreators";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const body = {
      limit: 9,
      offset: 0,
    };
    
    dispatch(actionCreators.getJobData(body)).then((res) => {
      console.log(res);
    });
  }, [dispatch]);

  return <div>Home</div>;
}

export default Home;
