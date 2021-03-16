import { useState } from 'react';
import Image from 'next/image';
import { Icon, Switch } from '../components';
import Logo from '../../public/logo-black.svg';

const SRC = '/login-bg.png';

export default function Home() {
  const [passwordIcon, setPasswordIcon] = useState('IoEyeOffSharp');

  return (
    <div className="flex h-screen bg-white">
      <div className="relative w-1/2 h-full">
        <Image alt="Smiling man" src={SRC} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center justify-around w-1/2 px-60">
        <Logo />
        <form className="flex flex-col items-center justify-center space-y-7 w-full">
          <div className="w-full">
            <label htmlFor="email" className="block text-gray-lightest">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-gray-dark px-4 py-3 mt-2"
              placeholder="Enter email address"
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block text-gray-lightest">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                className="w-full border border-gray-dark px-4 py-3 mt-2"
                placeholder="Enter password"
              />

              <Icon
                onClick={() => setPasswordIcon('IoEyeSharp')}
                family="Ionicon"
                name={passwordIcon}
                size="20"
                className="absolute top-6 right-4 text-gray-lightest cursor-pointer hover:text-green transition-colors duration-300"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-44 py-6 font-medium text-white bg-green"
          >
            Sign In
          </button>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-center space-x-4">
              <Switch />
              <p className="text-gray-lightest">Remember me</p>
            </div>
            <a href="/" className="text-gray-lightest">
              Forgot your password?
            </a>
          </div>
          <p className="text-black">
            Don’t have an account?
            <a
              href="https://squeeze.cash"
              className="font-semibold"
              target="blank"
            >
              Get started
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
