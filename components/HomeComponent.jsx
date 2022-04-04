import React, { Component } from 'react';
import Header from './Header';
import NextImage from 'next/image';
import Icon from '../src/Icon';

class HomeComponent extends Component {
  componentDidMount = () => {
    const { storiesRef } = this.props;
    if (storiesRef.current) {
      this.scrollHandle1();
      storiesRef.current.addEventListener('scroll', this.scrollHandle1);
    }
  };

  scrollHandle1 = () => {
    const { storiesRef, setPrev1, setNext1 } = this.props;

    const isEnd =
      storiesRef.current.scrollLeft + storiesRef.current.offsetWidth >=
      storiesRef.current.scrollWidth;
    const isBegin = storiesRef.current.scrollLeft == 0;

    setPrev1(!isBegin);
    setNext1(!isEnd);
  };

  componentWillUnmount = () => {
    const { storiesRef } = this.props;

    if (storiesRef.current) {
      return () => {
        storiesRef?.current?.removeEventListener('scroll', this.scrollHandle1);
      };
    }
  };

  slideStoriesPrev1 = () => {
    this.props.storiesRef.current.scrollLeft -= 307;
    // this.props.storiesRef.current.scrollLeft;
  };
  slideStoriesNext1 = () => {
    this.props.storiesRef.current.scrollLeft += 307;
    // this.props.storiesRef.current.offsetWidth;
  };

  render() {
    const { storiesRef, prev1, next1 } = this.props;
    return (
      <div>
        <Header />
        <div className="min-h-screen bg-[#fafafa] py-6 px-52 flex mt-[60px]">
          <div>
            <div className="relative mr-7">
              <div
                ref={storiesRef}
                className="flex bg-white border-[1px] border-[#dbdbdb] h-[119px] w-[614px] justify-start items-center overflow-x-hidden scroll-smooth pl-1 pr-4 space-x-3"
              >
                {prev1 && (
                  <button
                    className="absolute z-10 top-[59.5px] bg-white h-6 w-6 drop-shadow-lg -translate-y-1/2 text-black flex justify-center items-center rounded-full left-3 shadow-md"
                    onClick={this.slideStoriesPrev1}
                  >
                    <Icon name="prev" size={24} />
                  </button>
                )}
                {next1 && (
                  <button
                    onClick={this.slideStoriesNext1}
                    className="absolute z-10 top-[59.5px] bg-white h-6 w-6 drop-shadow-lg -translate-y-1/2 text-black flex justify-center items-center rounded-full right-3 shadow-md"
                  >
                    <Icon name="next" size={24} />
                  </button>
                )}
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <ul>
                    <li className="w-[62px] h-[62px] border-2 border-[#d82c7c] rounded-full flex items-center justify-center">
                      <NextImage
                        src="/lisa.jpg"
                        alt="Lisa"
                        width="56px"
                        height="56px"
                        objectFit="cover"
                        priority="true"
                        className="w-11 h-11 rounded-full"
                      />
                    </li>
                    <li className="text-xs mt-1 truncate w-14">lalalalisa_m</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>Posts</div>
          </div>
          <div className="w-[293px] h-[358px] mt-6 fixed top-[88px] right-52">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center space-x-4">
                <NextImage
                  src="/profile_image.png"
                  alt="Profile Image"
                  width="56px"
                  height="56px"
                  objectFit="contain"
                  className="rounded-full cursor-pointer"
                  priority="true"
                />
                <div>
                  <p className="text-sm font-semibold cursor-pointer">
                    kmlcnclk
                  </p>
                  <p className="text-sm text-[#8e8e8e]">Kamilcan Çelik</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#0095f6] cursor-pointer">
                Switch
              </p>
            </div>
            <div className="flex justify-between my-5 items-center">
              <p className="text-sm font-semibold text-[#989898] cursor-pointer">
                Suggestions For You
              </p>
              <p className="text-xs font-semibold cursor-pointer">See All </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <NextImage
                    src="/solar.jpg"
                    alt="Profile Image"
                    width="32px"
                    height="32px"
                    objectFit="contain"
                    className="rounded-full cursor-pointer"
                    priority="true"
                  />
                  <div>
                    <p className="text-sm font-semibold cursor-pointer hover:underline">
                      solarkeem
                    </p>
                    <p className="text-xs text-[#989898]">Folows you</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#0095f6] cursor-pointer">
                  Follow
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <NextImage
                    src="/solar.jpg"
                    alt="Profile Image"
                    width="32px"
                    height="32px"
                    objectFit="contain"
                    className="rounded-full cursor-pointer"
                    priority="true"
                  />
                  <div>
                    <p className="text-sm font-semibold cursor-pointer hover:underline">
                      solarkeem
                    </p>
                    <p className="text-xs text-[#989898]">Folows you</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#0095f6] cursor-pointer">
                  Follow
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <NextImage
                    src="/solar.jpg"
                    alt="Profile Image"
                    width="32px"
                    height="32px"
                    objectFit="contain"
                    className="rounded-full cursor-pointer"
                    priority="true"
                  />
                  <div>
                    <p className="text-sm font-semibold cursor-pointer hover:underline">
                      solarkeem
                    </p>
                    <p className="text-xs text-[#989898]">Folows you</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#0095f6] cursor-pointer">
                  Follow
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <NextImage
                    src="/solar.jpg"
                    alt="Profile Image"
                    width="32px"
                    height="32px"
                    objectFit="contain"
                    className="rounded-full cursor-pointer"
                    priority="true"
                  />
                  <div>
                    <p className="text-sm font-semibold cursor-pointer hover:underline">
                      solarkeem
                    </p>
                    <p className="text-xs text-[#989898]">Folows you</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#0095f6] cursor-pointer">
                  Follow
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <NextImage
                    src="/solar.jpg"
                    alt="Profile Image"
                    width="32px"
                    height="32px"
                    objectFit="contain"
                    className="rounded-full cursor-pointer"
                    priority="true"
                  />
                  <div>
                    <p className="text-sm font-semibold cursor-pointer hover:underline">
                      solarkeem
                    </p>
                    <p className="text-xs text-[#989898]">Folows you</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#0095f6] cursor-pointer">
                  Follow
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div className="mt-8">
                <p className="text-[11px] text-[#c7c7c7]">
                  About &bull; Help &bull; Press &bull; API &bull; Jobs &bull;
                  Privacy &bull; Terms &bull;
                </p>
                <p className="text-[11px] text-[#c7c7c7]">
                  Locations &bull; Top Accounts &bull; Hashtags &bull; Language
                </p>
              </div>
              <p className="text-[11px] text-[#c7c7c7] mt-6">
                © 2022 INSTAGRAM FROM META
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeComponent;
