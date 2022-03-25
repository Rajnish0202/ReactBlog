import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/singlepage/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import blogDB from "./fireConfig";

function App() {
  const [curUser, setCurUser] = useState(
    localStorage.getItem("currentUser") ? true : false
  );
  console.log(curUser);

  const [data, setData] = useState([]);
  const dataCollectionRef = collection(blogDB, "blogger");

  // console.log(data);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(dataCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  // console.log(curUser);

  // const user = true;
  return (
    <Router>
      <TopBar curUser={curUser} />
      <Switch>
        <Route exact path='/'>
          <Home data={data} />
        </Route>
        <Route path='/register'>{curUser ? <Home /> : <Register />}</Route>
        <Route path='/login'>{curUser ? <Home /> : <Login />}</Route>
        <Route path='/write'>{curUser ? <Write /> : <Register />}</Route>
        <Route path='/settings'>{curUser ? <Settings /> : <Register />}</Route>
        <Route path='/post/:postId'>
          <Single curUser={curUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
