import { useEffect, useState } from "react";
import "./App.css";
import CommentsData from "./CommentsData";
import CommentsSection from "./CommentsSection";
import jsonFile from "./data.json";

function App() {
  const [commentsData, setCommentsData] = useState<CommentsData>(
    new CommentsData()
  );

  function LoadData(): CommentsData {
    var cd: CommentsData;
    const data = window.localStorage.getItem("COMMENTS_DATA");
    if (data != null) {
      console.log("data is null");
      cd = Object.assign(new CommentsData(), JSON.parse(data));
      if (cd.comments.length === 0) {
        console.log("d.comments.length === 0");
        cd = Object.assign(new CommentsData(), jsonFile);
      }
    } else {
      console.log("data is null, so get original");
      cd = Object.assign(new CommentsData(), jsonFile);
    }
    console.log(cd);
    return cd;
  }

  useEffect(() => {
    console.log("useEffect 1");
    const cd = LoadData();
    window.localStorage.setItem("COMMENTS_DATA", JSON.stringify(cd));
    setCommentsData(cd); //why invalid hook call
  }, []);

  return (
    <div className="App">
      <CommentsSection
        comments={commentsData.comments}
        user={commentsData.currentUser}
        updateCommentData={() => setCommentsData}
      />
    </div>
  );
}

export default App;
