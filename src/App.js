import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/io";
import {
  AiOutlineQuestionCircle,
  AiFillStar,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaShare } from "react-icons/fa";

function App() {
  const url = "https://api.jsonbin.io/b/62b82ed4402a5b38023aad20/1";
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
    setLoading(true);
  }, []);

  return (
    <main className="App">
      {loading ? (
        <header>
          <h1>{data.topic}</h1>
          <p>
            {data.type}
            <span>
              <AiOutlineQuestionCircle />
            </span>
          </p>
        </header>
      ) : (
        <Spinner
          animation="grow"
          variant="primary"
          size="sm"
          role="status"
        ></Spinner>
      )}
      {loading && (
        <section>
          <div className="div1">
            <p>{data.description}</p>
            <h2>
              <span>
                <img src={require("./images/image-1.png")} alt="" />
              </span>
              {data.teacher}
            </h2>
            <div className="ratings">
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <p>{data.teacherreviews} total reviews for this teacher</p>
            </div>
            <div className="ratings">
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <p>{data.coursereview} total reviews for this Course</p>
            </div>
            <p>Completed by {data.completed} Users</p>
            <Button variant="primary" size="lg">
              See class schedule
              <span>
                <IoIosArrowForward />
              </span>
            </Button>
            <Button variant="outine-primary" size="lg">
              <AiOutlineHeart />
              save
            </Button>
            <Button variant="outine-primary" size="lg">
              <FaShare />
              Share
            </Button>
          </div>
          <div className="div2">
            <img
              className="img3"
              src={require("./images/paint-1.jpg")}
              alt=""
            />
            <img
              className="img2"
              src={require("./images/paint-2.jpg")}
              alt=""
            />
            <img
              className="img1"
              src={require("./images/paint-3.jpg")}
              alt=""
            />
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
