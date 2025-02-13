import React from "react";
import './App.css';
import { useState } from "react";

function App() {
  const cores = [
    'white', 
    'radial-gradient(circle, white 1%, blue 90%)',
    'blue', 
    'radial-gradient(circle, white 3%, blue 40%, darkblue 100%)',
    'red', 
    'radial-gradient(circle, white 5%, red 50%, darkred 100%)',
    'green', 
    'radial-gradient(circle, white 10%, green 50%, darkgreen 100%)',
    'yellow', 
    'radial-gradient(circle, white 20%, yellow 70%, gold 100%)',
    'purple', 
    'radial-gradient(circle, white 10%, purple 60%, darkpurple 100%)',
    'gray', 
    'radial-gradient(circle, white 5%, gray 100%)',
    'orange', 
    'radial-gradient(circle, white 5%, orange 40%, darkorange 100%)',
    'pink', 
    'radial-gradient(circle, white 5%, pink 50%, hotpink 100%)',
    'brown', 
    'radial-gradient(circle, white 10%, brown 70%, darkbrown 100%)',
    'cyan', 
    'radial-gradient(circle, white 15%, cyan 60%, darkcyan 100%)',
    'black', 
    'radial-gradient(circle, white 20%, black 100%)',
    'teal', 
    'radial-gradient(circle, white 10%, teal 60%, darkteal 100%)',
    'violet', 
    'radial-gradient(circle, white 10%, violet 50%, darkviolet 100%)',
    'beige', 
    'radial-gradient(circle, white 10%, beige 50%, lightbrown 100%)',
    'navy', 
    'radial-gradient(circle, white 10%, navy 50%, darknavy 100%)',
    'olive', 
    'radial-gradient(circle, white 20%, olive 70%, darkolive 100%)',
    'indigo', 
    'radial-gradient(circle, white 10%, indigo 50%, darkindigo 100%)',
    'maroon', 
    'radial-gradient(circle, white 10%, maroon 60%, darkmaroon 100%)',
    'khaki', 
    'radial-gradient(circle, white 10%, khaki 50%, darkkhaki 100%)',
    'silver', 
    'radial-gradient(circle, white 10%, silver 60%, darksilver 100%)',
    'gold', 
    'radial-gradient(circle, white 20%, gold 60%, darkgold 100%)',
    'chartreuse', 
    'radial-gradient(circle, white 10%, chartreuse 50%, greenyellow 100%)',
    'plum', 
    'radial-gradient(circle, white 10%, plum 50%, darkplum 100%)',
    
    // Linear gradients
    'linear-gradient(to right, red, yellow)', 
    'linear-gradient(to bottom, blue, purple)',
    'linear-gradient(to top, pink, orange)',
    'linear-gradient(to right, cyan, white, magenta)', 
    'linear-gradient(45deg, blue, green)', 
    'linear-gradient(to bottom, black, gray)', 
    'linear-gradient(to left, gold, darkgoldenrod)', 
    'linear-gradient(to top left, purple, violet)', 
    'linear-gradient(to bottom right, teal, lightblue)', 
    'linear-gradient(to top, silver, darkgray)',
    'linear-gradient(to right, brown, darkbrown)',
    'linear-gradient(45deg, chartreuse, lime)', 
    'linear-gradient(135deg, hotpink, pink)'
  ];
  const [tema, setTema]=useState(0);
  
  function alterarTema(){
    setTema((i)=>(i+1) % cores.length);
  }

  return (
    <div className="geral" style={{background:cores[tema]}}>
      <h1>Escolha Seu Estilo</h1>
     <button onClick={alterarTema}>🔀</button>
      
    </div>
  );
}

export default App;
