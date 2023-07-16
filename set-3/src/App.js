import "./App.css";
import Cars from "./Pages/Cars/Cars";
import Cartoon from "./Pages/Cartoon/Cartoon";
import DisplayCartoon from "./Pages/DisplayCartoon/DisplayCartoon";
import DisplayImage from "./Pages/DisplayImage/DisplayImage";
import DisplayName from "./Pages/DisplayName/DisplayName";
import DonationData from "./Pages/DonationData/DonationData";
import Flowers from "./Pages/Flowers/Flowers";
import FlowersPrice from "./Pages/Flowers/FlowersPrice";
import Students from "./Pages/Students/Students";
import Vegetables from "./Pages/Vegetables/Vegetables";
import {
  Donationdata,
  bouquet,
  cars,
  cartoons,
  studentData,
  vegetables,
} from "./data";

function App() {
  return (
    <div className="App">
      <DisplayImage
        image="https://picsum.photos/200"
        height="400px"
        width="400px"
      />
      <hr />
      <Cartoon cartoons={cartoons} />
      <hr />
      <DisplayName cartoons={cartoons} />
      <hr />
      <DisplayCartoon cartoons={cartoons} />
      <hr />
      <Vegetables vegetables={vegetables} />
      <hr />
      <Flowers bouquet={bouquet} />
      <hr />
      <FlowersPrice bouquet={bouquet} />
      <hr />
      <DonationData Donationdata={Donationdata} />
      <hr />
      <Cars cars={cars} />
      <hr />
      <Students studentData={studentData} />
    </div>
  );
}

export default App;
