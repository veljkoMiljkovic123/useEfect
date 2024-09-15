import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";
import LoadingComponent from "./components/LoadingComponent";

function App() {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  //useEfect
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setMyData(data.products);
        setIsLoading(true)
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      {/*  <h1 className='text-4xl bg-blue-400 p-4'>Hello React</h1> */}

    {isLoading?  <div className="flex flex-wrap gap-5 mt-[100px]">
        {myData.map((el, index) => {
          return <CardComponent item={el} key={index} />;
        })}
      </div>:<LoadingComponent />}
    </div>
  );
}

export default App;
