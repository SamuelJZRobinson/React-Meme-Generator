import { useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "I'm the cool top text",
    bottomText: "I'm the cool bottom text",
    imageURL: "./src/assets/meme.webp",
  });

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevmeme) => ({
      ...prevmeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form>
        <div className="form-row">
          <label>
            Top Text
            <input
              onChange={handleChange}
              type="text"
              name="topText"
              value={meme.topText}
            ></input>
          </label>
          <label>
            Bottom Text
            <input
              onChange={handleChange}
              type="text"
              name="bottomText"
              value={meme.bottomText}
            ></input>
          </label>
        </div>
        <button type="submit">Get random image</button>
      </form>

      <div id="imageContainer">
        <p className="top">{meme.topText}</p>
        <p className="bottom">{meme.bottomText}</p>
        <img src={meme.imageURL} alt="Meme image" />
      </div>
    </main>
  );
}
