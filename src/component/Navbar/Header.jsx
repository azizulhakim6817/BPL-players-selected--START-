import banner from "../../assets/banner-main.png";

const Header = () => {
  return (
    <div className="pt-8 pb-12 text-center bg-black bg-[url('../src/assets/bg-shadow.png')] rounded-xl">
      <img className="mx-auto object-cover" src={banner} alt="banner-img" />
      <h1 className="my-4 font-bold text-3xl text-white ">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="mb-2 text-[16px] text-[#7b7c81]">
        Beyond Boundaries Beyond Limits
      </p>
      <button className="py-1 px-8  border-3 border-black rounded-xl text-[16px] font-bold text-black bg-[#E7FE29] outline-1 outline-amber-400 ">
        Claim Free Credit
      </button>
    </div>
  );
};

export default Header;
