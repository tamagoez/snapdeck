import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { MdPassword } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";

import { signInWithTwitter, signInWithEmail } from "../../libs/auth";

const Login: NextPage = () => {
  const router = useRouter();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  if (typeof window !== "undefined") {
    // setMail(sessionStorage.getItem("authmail"));
  }

  function movesignup() {
    window.sessionStorage.setItem("authmail", mail);
    router.push("/auth/signup");
  }

  function login(name: string, pass: string) {
    console.log("login");
    signInWithEmail(name, pass);
    //  if (await logst === false) { console.error("login error") }
  }

  const submitOnEnter = (event: any) => {
    // Watch for enter key
    if (event.keyCode === 13) {
      login(mail, pass);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center p-4 bg-gray-300">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span
                  className="label-text"
                  onClick={() =>
                    document!.getElementById("mailaddress")!.focus()
                  }
                >
                  Email
                </span>
              </label>
              <div className="input-group">
                <button
                  className="btn btn-square"
                  onFocus={() =>
                    document!.getElementById("mailaddress")!.focus()
                  }
                >
                  <IoMdMail />
                </button>
                <input
                  id="mailaddress"
                  type="email"
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="mail@exaple.com"
                  className="input input-bordered w-full"
                  value={mail}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span
                  className="label-text"
                  onClick={() => document!.getElementById("password")!.focus()}
                >
                  Password
                </span>
              </label>
              <div className="input-group">
                <button
                  className="btn btn-square"
                  onFocus={() => document!.getElementById("password")!.focus()}
                >
                  <MdPassword />
                </button>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                  onKeyDown={(e) => submitOnEnter(e)}
                  placeholder="********"
                  className="input input-bordered w-full"
                />
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3 gap-1">
              <button
                className="btn btn-primary"
                onClick={() => login(mail, pass)}
              >
                Login
              </button>
              <button
                className="btn btn-ghost active"
                onClick={() => movesignup()}
              >
                Signup
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

export default Login;
