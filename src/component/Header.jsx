import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Gpt_Search = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });

    // unsubscribe when component is unmounte
    return () => unSubscribe();
  }, []);

  return (
    <div className="w-full z-40 absolute px-8 py-2 bg-gradient-to-b from-black flex-col flex md:flex-row items-center text-center  justify-between">
      <img className="w-44 block mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="">
          
          {Gpt_Search && (
            <select
              className="bg-gray-400 p-1 m-2 rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.idendtifier} value={lang.idendtifier}>
                  {lang.name}
                </option>
              ))}{" "}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="font-bold text-white m-2   bg-slate-400 p-1 h-10 text-center my-auto rounded-md"
          >
            {Gpt_Search?"Home" : "Gpt Search"}
          </button>

          <button
            onClick={handleSignout}
            className="font-bold text-white bg-red-600 p-1 h-10 text-center my-auto rounded-md"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
