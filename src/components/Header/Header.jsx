import profileIcon from "../Header/profile.svg";
const Header = () => {
  return (
    <header className="bg-white drop-shadow p-3 flex justify-between items-center py-5 sticky top-0">
      <span className="text-3xl font-bold text-green-600">Knowledge Cafe</span>
      <img src={profileIcon} alt="" className="w-9" />
    </header>
  );
};

export default Header;
