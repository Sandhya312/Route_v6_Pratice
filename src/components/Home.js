import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is Home and this page contains movie sections.</h1>
      <button
        onClick={() => {
          navigate("/page", { state: { pagename: "Page1", content1: "Children movie", content2: "Cartoon" } });
        }}
        className="btn btn-primary">page1 section</button> {"  "}
      <Link to="/page" state={{ pagename: "Page2", content1: "Teen movie", content2: "Adult" }}
        className="btn btn-success">page2 section</Link>

    </div>
  );
}

export default Home;
