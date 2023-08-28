import "./App.css";
import EcommerceSort from "./components/Ecommerce/EcommerceSort";
import Movies from "./components/Movies/Movies";
import MoviesList from "./components/MoviesList/MoviesList";
import SortByRating from "./components/ProductData/SortByRating";
import Quotes from "./components/Quotes/Quotes";
import UserData from "./components/UserData/UserData";
import Users from "./components/Users/Users";
import WeatherData from "./components/WeatherData/WeatherData";

function App() {
  return (
    <div className="App">
      <h1 style={{ padding: "60px", fontSize: "40px" }}>
        Reactjs Practice Set - 7
      </h1>
      <hr />
      <WeatherData />
      <hr />
      <UserData />
      <hr />
      <Movies />
      <hr />
      <Users />
      <hr />
      <Quotes />
      <hr />
      <MoviesList />
      <hr />
      <EcommerceSort />
      <hr />
      <SortByRating />
    </div>
  );
}

export default App;
