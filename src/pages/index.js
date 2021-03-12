/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import Logo from '../../public/logo-black.svg';

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      <div className="bg-blue w-1/2 h-full">
        {/* <Image
          src="/login-bg.png"
          layout="responsive"
          className="w-full h-full"
        /> */}
      </div>
      <div className="flex flex-col items-center justify-around py-12 px-36 bg-white w-1/2 h-full">
        <Logo />
        <div className="flex flex-col w-full">
          <div className="flex">
            <button
              type="button"
              className="flex items-center justify-center w-1/2 font-semibold border-b-2"
            >
              <p className="text-black pb-2">Administrator</p>
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-1/2 font-semibold border-b-2 border-gray-tab"
            >
              <p className="text-gray-tab pb-2">Team Member</p>
            </button>
          </div>
          <div>
            <form>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-lightest font-medium"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    autoComplete="email"
                    className="w-full border px-3 py-2 border-gray"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-lightest font-medium"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    autoComplete="password"
                    className="w-full border px-3 py-2 border-gray"
                  />
                </div>
              </div>
            </form>
            <p>
              Don’t have an account?
              <a href="https://squeeze.cash" className="text-black font-bold">
                Get started
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
