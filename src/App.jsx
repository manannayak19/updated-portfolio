
import "./App.css";
import About from "./pages/about";
import Balatro from "./backdrops/Balatro";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="absolute inset-0 z-0">
        <Balatro isRotate={false} mouseInteraction={false} pixelFilter={700} />
      </div>
       <div className="relative z-10 flex items-center justify-center h-full">
        <About />
      </div>
      
    </div>
  );
}

export default App;
