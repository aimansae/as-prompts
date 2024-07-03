import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../public/assets/images/logo.svg"; // Adjust the path as necessary
import Profile from "../public/assets/images/logo.svg"; // Adjust the path as necessary
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
const Navbar = () => {
  const isUserLoggedIn = true;
  const signOut = () => {};
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link className="flex gap-2 flex-center" href="/">
        {/* Use the Image component properly */}
        <Image
          src={LogoImage}
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-prompt">
              Create post
            </Link>
            <button onClick={signOut} className="outline_btn" type="button">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                alt="profile image"
                src={Profile}
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  type="button"
                  className="black_btn"
                >Sign In </button>
              ))}
          </>
        )}
      </div>
      {/*Mobile Nav*/}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (<div className="flex">

          <Image
                alt="profile image"
                src={Profile}
                width={37}
                height={37}
                className="rounded-full"
              />
        </div>):  <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  type="button"
                  className="black_btn"
                >Sign In </button>
              ))}
          </>}

      </div>
    </nav>
  );
};

export default Navbar;
