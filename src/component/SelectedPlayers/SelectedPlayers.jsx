import SelectedCard from "./../SelectedCard/SelectedCard";

const SelectedPlayers = ({
  purchasedPlayer,
  handleRemove,
  toggle,
  setToggle,
}) => {
  return (
    <div className="mt-4">
      {purchasedPlayer.map((player, i) => (
        <SelectedCard key={i} player={player} handleRemove={handleRemove} />
      ))}
      <div className="mt-6">
        <button
          onClick={() => setToggle(true)}
          className={`${
            toggle === true ||
            "py-1 px-8 border-2 border-black rounded-xl bg-[#e5ff00] outline-2 outline-[#e5ff00]"
          } `}
        >
          Available
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
