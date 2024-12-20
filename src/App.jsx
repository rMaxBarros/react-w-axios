import { useEffect, useState } from "react";

import './styles/App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import article1Img from "./assets/images/article-1.jpg";
import article2Img from "./assets/images/article-2.jpg";
import article3Img from "./assets/images/article-3.jpg";
import { Counter } from "./components/Counter/Counter";

function App() {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    
  }, []);

  return (
    <>
      <Navbar />

      {/* <Counter /> */}

      <section id="articles">
        <Article
          thumbnail={article1Img}
          title="Designing Dashboards"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, quibusdam veniam esse quo iusto numquam blanditiis delectus incidunt at. Officiis harum quos quidem reprehenderit aliquid facilis iste ea modi."
        />
        <Article
          thumbnail={article2Img}
          title="Vibrant Portraits of 2020"
          provider="SpaceNews"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, quibusdam veniam esse quo iusto numquam blanditiis."
        />
        <Article
          thumbnail={article3Img}
          title="36 Days of Malayalam type"
          provider="Spacefligh Now"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, quibusdam veniam esse quo iusto numquam blanditiis delectus incidunt at. Officiis harum quos quidem reprehenderit aliquid facilis iste."
        />
        <Article
          thumbnail={article1Img}
          title="Designing Dashboards"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, quibusdam veniam esse quo iusto numquam blanditiis delectus incidunt at. Officiis harum quos quidem reprehenderit aliquid facilis iste ea modi."
        />
      </section>
    </>
  );
}


export default App;
