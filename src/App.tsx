import { MainPage } from "./components/organisms/MainPage";
import { Routes, Route } from "react-router-dom";
import Druid from "./routes/druid";
import Hunter from "./routes/hunter";
import Paladin from "./routes/paladin";
import Priest from "./routes/priest";
import Rogue from "./routes/rogue";
import Warlock from "./routes/warlock";
import Warrior from "./routes/warrior";
import Shaman from "./routes/shaman";
import Mage from "./routes/mage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/druid" element={<Druid />} />
            <Route path="/hunter" element={<Hunter />} />
            <Route path="/mage" element={<Mage />} />
            <Route path="/paladin" element={<Paladin />} />
            <Route path="/priest" element={<Priest />} />
            <Route path="/rogue" element={<Rogue />} />
            <Route path="/shaman" element={<Shaman />} />
            <Route path="/warlock" element={<Warlock />} />
            <Route path="/warrior" element={<Warrior />} />
        </Routes>
    );
}

export default App;
