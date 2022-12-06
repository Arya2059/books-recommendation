import "./styles.css";
import { data } from "./data";
import { useState } from "react";
import { BookItem } from "./components/BookItem";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  function getUpdatedData(genre) {
    if (genre === "All") {
      return data;
    } else {
      const filteredData = data.filter((item) => item.genre === genre);
      return filteredData;
    }
  }

  function handleSelectGenre(genre) {
    setSelectedGenre(genre);
  }

  const updatedData = getUpdatedData(selectedGenre);

  return (
    <div className="App">
      <Navbar />

      <ul className="list-non-bullet nav-pills">
        <li
          className={`list-item-inline ${
            selectedGenre === "All" ? "list-item-active" : ""
          }`}
          onClick={() => handleSelectGenre("All")}
        >
          All
        </li>
        <li
          className={`list-item-inline ${
            selectedGenre === "Malwares" ? "list-item-active" : ""
          }`}
          onClick={() => handleSelectGenre("Malwares")}
        >
          Malwares
        </li>
        <li
          className={`list-item-inline ${
            selectedGenre === "Red-team" ? "list-item-active" : ""
          }`}
          onClick={() => handleSelectGenre("Red-team")}
        >
          Red Team
        </li>
        <li
          className={`list-item-inline ${
            selectedGenre === "Blue-team" ? "list-item-active" : ""
          }`}
          onClick={() => handleSelectGenre("Blue-team")}
        >
          Blue Team
        </li>
      </ul>
      {updatedData.map((song, index) => {
        return (
          <BookItem
            key={index}
            index={index}
            title={song.title}
            author={song.author}
            imgSrc={song.imgSrc}
            link={song.link}
          />
        );
      })}

      <Footer />
    </div>
  );
}
