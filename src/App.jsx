import { Suspense, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import AvailablePlayers from "./component/AvailablePlayers/AvailablePlayers";
import Header from "./component/Navbar/Header";
import SelectedPlayers from "./component/SelectedPlayers/SelectedPlayers";
import { toast } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const fetchData = fetchPlayers();

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(12000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  // remonve selected-player------------------------
  const handleRemove = (playerName) => {
    if (purchasedPlayer.length === 2) {
      toast.error("2 Players is must be removed");
      return;
    }
    const filderData = purchasedPlayer.filter(
      (e) => e.player_name !== playerName.player_name
    );

    setPurchasedPlayer(filderData);
    setAvailableBalance(availableBalance + playerName.price);
    toast.success("Players has been removed succefully");
  };

  return (
    <div className="w-[1080px] mx-auto py-2">
      <Navbar availableBalance={availableBalance} />
      <Header />
      <div className="mt-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          {toggle === true
            ? "Available"
            : `Selected Players ${purchasedPlayer.length} /6`}
        </h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`${
              toggle === true ? "bg-[#E7FE29]" : ""
            } py-1 px-4 border-gray-200  font-semibold border-1 border-r-0 rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`${
              toggle === false ? "bg-[#E7FE29]" : ""
            } py-1 px-4 border-gray-200  font-semibold border-1 border-l-0 rounded-r-xl`}
          >
            Selected <span>({purchasedPlayer.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xs"></span>}
        >
          <AvailablePlayers
            fetchData={fetchData}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            setPurchasedPlayer={setPurchasedPlayer}
            purchasedPlayer={purchasedPlayer}
          />
        </Suspense>
      ) : (
        <SelectedPlayers
          purchasedPlayer={purchasedPlayer}
          handleRemove={handleRemove}
          toggle={toggle}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default App;
