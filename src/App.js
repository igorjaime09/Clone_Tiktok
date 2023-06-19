import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video.js";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              nome={item.nome}
              descricao={item.descricao}
              musica={item.musica}
              url={item.url}
            />
          );
        })}

        {/* <Video 
          likes={1039}
          messages={34}
          shares={21}
          nome="igorjaime"
          descricao="Gato pulando"
          musica="Música emocionante - Criador desconhecido"
          url=""
        /> */}
      </div>
    </div>
  );
}

export default App;
