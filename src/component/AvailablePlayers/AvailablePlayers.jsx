import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  fetchData,
  setAvailableBalance,
  availableBalance,
  purchasedPlayer,
  setPurchasedPlayer,
}) => {
  const playerData = use(fetchData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
      {playerData.map((player, i) => (
        <PlayerCard
          key={i}
          player={player}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          setPurchasedPlayer={setPurchasedPlayer}
          purchasedPlayer={purchasedPlayer}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
