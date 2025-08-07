export default function Main() {
  return (
    <main>
      <form>
        <label>
          Top Text
          <input type="text" name="top"></input>
        </label>
        <label>
          Bottom Text
          <input type="text" name="top"></input>
        </label>
        <button type="submit">Generate</button>
      </form>

      <div id="imageContainer">
        <p className="top">I'm the cool top text</p>
        <p className="bottom">I'm the cool bottom text</p>
        <img src="./src/assets/meme.webp" alt="Meme image" />
      </div>
    </main>
  );
}
