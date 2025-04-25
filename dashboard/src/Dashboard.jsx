import App from "./App";
import Funds from "./Fund";
import { GeneralContextProvider } from "./GeneralContext";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Dashboard(){
    return(
        <div className="dashboard-container">

          <GeneralContextProvider>
             <WatchList/>
          </GeneralContextProvider>
      
        
   
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<App />} />
        </Routes>
      </div>
    </div>
    );
}