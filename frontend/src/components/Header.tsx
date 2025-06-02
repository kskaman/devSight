import logoExpanded from "../assets/logoExpanded.png";

const Header = () => {
  return (
    <div className="flex items-center h-[56px] w-full">
      <img src={logoExpanded} alt="Logo" className="h-[56px] ml-4" />
    </div>
  );
};

export default Header;
