const Attribution = () => {
  return (
    <footer className="pt-4 lg:flex lg:items-center  lg:gap-2">
      <p className="text-dark-purple-clr text-center">
        Challenge by {" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-purple-clr font-fw-semi-bold hover:underline transition-all"
        >
          Frontend Mentor
        </a>
      </p>

      <p className="text-dark-purple-clr text-center">
        Code <span className="text-purple-clr">&hearts;</span> by {" "} 
        <a
          href="https://github.com/SouleymaneSy7"
          target="_blank"
          className="text-purple-clr font-fw-semi-bold hover:underline transition-all"
        >
           Souleymane Sy
        </a>
      </p>
    </footer>
  );
};

export default Attribution;
