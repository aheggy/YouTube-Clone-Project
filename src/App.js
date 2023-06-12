import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./components/search/SearchBar";
import VideoIndex from "./components/video-index/VideoIndex";
import VideoShow from "./components/video-index/VideoShow";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Modal from "./components/modal-window/Modal";


function App() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(videos)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setVideos={setVideos}
            />
            <VideoIndex videos={videos} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/videos" component={VideoIndex} />
          <Route path="/videos/:id" component={VideoShow} />
          <Route path="/*" component={Modal} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
