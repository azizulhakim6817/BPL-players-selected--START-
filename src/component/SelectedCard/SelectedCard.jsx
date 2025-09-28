import { Trash } from "lucide-react";

const SelectedCard = ({ player, handleRemove }) => {
  const handleDelete = (playerName) => {
    handleRemove(playerName);
  };

  return (
    <div className="mt-2 py-1 px-2 flex justify-between items-center rounded-md border-1 border-gray-400">
      <div>
        <div className="flex justify-between items-center gap-4">
          <img
            className="w-10 h-10 object-cover rounded-md"
            src={player.player_image}
            alt={player.player_name}
          />
          <div>
            <p className="text-[18px] font-semibold">{player.player_name}</p>
            <p className="text-[14px] text-gray-500">{player.player_role}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleDelete(player)}
          className="mr-6 text-rose-600"
        >
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
