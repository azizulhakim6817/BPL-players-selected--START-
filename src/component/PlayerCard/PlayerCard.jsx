import { CircleUserRound } from "lucide-react";
import { Flag } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  availableBalance,
  setAvailableBalance,
  purchasedPlayer,
  setPurchasedPlayer,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const PlayerPice = playerData.price;
    if (availableBalance < PlayerPice) {
      setIsSelected(false);
      toast.error("The coin is not availabled!");
      return;
    } else {
      if (purchasedPlayer.length === 6) {
        toast.error("6 Players is already selected!");
        return;
      }
      setIsSelected(true);
      setAvailableBalance(availableBalance - PlayerPice);
      setPurchasedPlayer([...purchasedPlayer, playerData]);
      toast.success("Player has selected succefully");
    }
  };
  return (
    <div className="mt-4">
      <div className="card bg-base-100 mx-8 md:mx-0 shadow-sm">
        <figure>
          <img
            className="w-full h-full object-cover "
            src={player.player_image}
            alt="Shoes"
          />
        </figure>
        <div className="p-10 md:p-3  ">
          <div className="flex items-center gap-1">
            <CircleUserRound size={20} />
            <h2 className="card-title">{player.player_name}</h2>
          </div>
          <div>
            <div className="flex justify-between items-center border-b-1 border-gray-200">
              <div className="flex gap-2 items-center">
                <Flag size={16} />
                <p className="text-[14px] ">{player.player_country}</p>
              </div>
              <button className="btn mb-2">{player.player_role}</button>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-[14px] font-bold">Rating</p>
              <span className="text-[14px] ">{player.rating}</span>
            </div>
            <div className="mt-1 flex justify-between items-center">
              <p className="text-[14px] font-bold">{player.batting_style}</p>
              <span className="text-[14px] ">{player.bowling_style}</span>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-[14px] font-bold">
                Pirce: $<span>{player.price}</span>
              </p>
              <button
                onClick={() => handleSelected(player)}
                disabled={isSelected}
                className="btn text-[14px] bg-green-600 text-white"
              >
                {isSelected === true ? "Selected" : "Choose Players"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
