import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch= useDispatch();

  const email = useRef(null);
  const name= useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {
    const message = checkValidData(email.current.value, password.current.value, email.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              console.log(user);
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " -" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage + "-" + errorCode);
        });
    }
  };

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="relative h-[100vh] w-[100vw]">
        <img
          className="h-full w-full"
          src={BG_URL}
          alt="bg-poster"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-4/12 p-6 rounded-md bg-black bg-opacity-80  mt-[-1rem] absolute top-24 md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%]"
      >
        <h1 className="font-bold p-2 text-white  mb-4 text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        
        {!isSignInForm && (
          <input
          ref={name}
            className="w-full px-4 py-2 m-3 rounded-sm bg-gray-700"
            type="name"
            name="name"
            placeholder="Enter Your Name"
          />
        )}
        <input
          ref={email}
          className="w-full px-4 py-2 m-3 rounded-sm bg-gray-700"
          type="email"
          name="email"
          placeholder="Enter Your Email"
        />
        
        <input
          ref={password}
          className="w-full px-4 py-2 m-3 rounded-sm bg-gray-700"
          type="password"
          name="password"
          placeholder="Enter Your Passowrd"
        />
        <p className="text-red-500 font-bold p-3">{errorMessage}</p>
        <button
          className="w-full p-2 m-3 mb-6 rounded-sm bg-red-700 text-white"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="m-3 text-white cursor-pointer" onClick={handleSignIn}>
          {isSignInForm ? "New to Netflix ? " : "Already registerd ?"}
          <span className="underline">
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
