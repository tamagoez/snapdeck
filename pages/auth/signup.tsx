import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { MdPassword } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";

import { signInWithTwitter, signUpWithEmail } from "../../libs/auth";

const Signup: NextPage = () => {
  const router = useRouter();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  let mailv = "";
  if (typeof window !== "undefined") {
    // mailv = sessionStorage.getItem("authmail");
  }
  function movelogin() {
    window.sessionStorage.setItem("authmail", mail);
    router.push("/auth/login");
  }

  function signup() {
    signUpWithEmail(mail, pass);
  }

  const submitOnEnter = (event: any) => {
    // Watch for enter key
    if (event.keyCode === 13) {
      signup();
    }
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center p-4 bg-gray-300">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text" onClick={() => document!.getElementById("email")!.focus()}>Email</span>
              </label>
              <div className="input-group">
                <button className="btn btn-square" onFocus={() => document!.getElementById("email")!.focus()}>
                  <IoMdMail />
                </button>
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="mail@exaple.com"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text" onClick={() => document!.getElementById("password")!.focus()}>Password</span>
              </label>
              <div className="input-group">
                <button className="btn btn-square" onFocus={() => document!.getElementById("password")!.focus()}>
                  <MdPassword />
                </button>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="********"
                  className="input input-bordered w-full"
                  onKeyDown={(e) => submitOnEnter(e)}
                />
              </div>
            </div>
            <div className="form-control mt-11 gap-1">
              <button className="btn btn-primary" onClick={() => signup()}>Signup</button>
              <button
                className="btn btn-ghost active"
                onClick={() => movelogin()}
              >
                Login
              </button>
            </div>
            <div className="divider" />
            <button
              className="btn btn-primary btn-disabled"
              disabled={true}
              onClick={() => signInWithTwitter()}
            >
              Twitter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
