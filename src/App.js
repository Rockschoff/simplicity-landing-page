import "./styles.css";
import { galaxy } from "./static/galaxy.jpg";

export default function App() {
  return (
    <div className="App">
      <nav></nav>
      <div className="banner">
        <div className="banner-left">
          <h1>Simplicity.</h1>
          <p>
            mollit duis commodo Lorem aliquip id irure veniam Lorem incididunt
            ex consequat nisi anim occaecat officia nisi tempor laboris nulla
            dolore sit consequat.
            <br /> ex proident culpa aliquip officia do tempor quis pariatur
            adipisicing cillum sunt in magna est elit eiusmod commodo nulla
            labore quis amet enim commodo minim id amet
          </p>
          <button>Download</button>
        </div>
        <div className="banner-right">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/918/567/original/dark-blue-nebula-sparkle-purple-star-universe-in-outer-space-horizontal-galaxy-on-space-free-photo.jpg"
            alt="galaxy"
          />
        </div>
      </div>
    </div>
  );
}
