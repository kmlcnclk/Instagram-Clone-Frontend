import React, { useState, useRef, useEffect } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import Icon from '../src/Icon';

function Header() {
  const [searchState, setSearchState] = useState(false);

  const headerRef = useRef();

  useEffect(() => {
    // look at here about input click unfocus
    if (headerRef.current) {
      headerRef.current.addEventListener('pointerleave', () => {
        setSearchState(false);
      });
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full h-[60px] 3xs:px-4 lg:px-10 xl:px-52 py-5 flex justify-between items-center border-b-[1px] bg-white border-[#dbdbdb] fixed left-0 top-0 z-50"
    >
      <div className="3xs:w-1/3 md:1/5 lg:w-1/3 xl:w-1/3 flex items-center">
        <NextLink href="/">
          <a className="h-[29px]">
            <NextImage
              src="/Logo.png"
              alt="Instagram"
              width="103px"
              objectFit="contain"
              priority="true"
              height="29px"
            />
          </a>
        </NextLink>
      </div>
      <div className="3xs:hidden sm:block md:block lg:block x:block">
        {searchState ? (
          <div>
            <input
              type="text"
              autoFocus
              placeholder="Search"
              className="bg-[#efefef] text-sm w-[268px] h-9 flex justify-start px-3 space-x-3 cursor-text items-center rounded-md focus:outline-0"
            />
            <div className="relative">
              <div className="w-[19.8px] h-[19.8px] bg-white mt-2 rotate-45 absolute z-0 left-1/2 -translate-x-1/2 shadow-2xl"></div>
              <div className="w-[375px] h-[362px] bg-white mt-3 absolute left-1/2 z-20 rounded-md -translate-x-1/2 shadow-sm pt-3 overflow-y-auto">
                <div className="flex justify-between items-center px-4">
                  <p className="text-black font-semibold">Recent</p>
                  <p className="text-[#0095f6] font-semibold text-sm cursor-pointer">
                    Clear All
                  </p>
                </div>
                <ul className="my-5 space-y-2">
                  <li className="hover:bg-[#fafafa] active:bg-[#efefef] transition-all px-4 py-2 cursor-pointer">
                    <ul className="flex justify-between items-center">
                      <ul className="flex justify-start items-center space-x-3">
                        <li className="flex justify-start items-center">
                          <NextImage
                            src="/lisa.jpg"
                            alt="Lisa"
                            width="44px"
                            height="44px"
                            objectFit="cover"
                            priority="true"
                            className="w-11 h-11 rounded-full"
                          />
                        </li>
                        <li>
                          <ul className="flex flex-col justify-center items-start">
                            <li className="text-sm flex justify-start items-center">
                              <ul className="flex justify-start items-center space-x-1">
                                <li className="text-sm font-semibold">
                                  lalalalisa_m
                                </li>
                                <li className="flex justify-start items-center">
                                  <NextImage
                                    src="/blue_tic.png"
                                    alt="Tic"
                                    width="12px"
                                    height="12px"
                                    priority="true"
                                    contain="cover"
                                  />
                                </li>
                              </ul>
                            </li>
                            <li className="text-[#9d8eab] text-sm flex justify-start items-center">
                              LISA &bull; Following
                            </li>
                          </ul>
                        </li>
                      </ul>

                      <li className="flex justify-center items-center">
                        <Icon name="cancelIcon" size="16" color="#8e8e8e" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[268px] flex justify-center items-center">
            <div
              className="bg-[#efefef] w-[268px] h-9 flex justify-start px-3 space-x-3 cursor-text items-center rounded-md"
              onClick={() => setSearchState(!searchState)}
            >
              <Icon name="searchIcon" color="#8e8e8e" size={16} />
              <p className="text-[#8e8e8e] opacity-80 text-sm">Search</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center 3xs:space-x-2 sm:space-x-5 3xs:w-2/3 md:2/5 lg:w-1/3 xl:w-1/3 3xl:pr-0 lg:pr-3 xl:pr-0 lg:pl-0 xl:pl-6 3xs:justify-end xl:justify-start">
        <Icon
          name="homeFillIcon"
          color="#262626"
          size={24}
          className="cursor-pointer"
        />
        <Icon
          name="messageUnFillIcon"
          color="#262626"
          size={24}
          className="cursor-pointer"
        />
        <Icon
          name="createPlusUnFillIcon"
          color="#262626"
          size={24}
          className="cursor-pointer"
        />
        <Icon
          name="exploreUnFillIcon"
          color="#262626"
          size={24}
          className="cursor-pointer"
        />
        <Icon
          name="heartUnFillIcon"
          color="#262626"
          size={24}
          className="cursor-pointer"
        />
        <div className="flex items-center">
          <NextImage
            src="/profile_image.png"
            alt="PI"
            width="24px"
            height="24px"
            priority="true"
            objectFit="cover"
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
