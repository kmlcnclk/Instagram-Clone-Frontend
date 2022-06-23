import React, { Component } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import Icon from '../src/Icon';
import { Box } from '@chakra-ui/react';
class StoriesComponent extends Component {
  state = {
    x: 0,
    next: true,
    prev: false,
  };

  slideStoriesPrev1 = async () => {
    await this.setState({ x: this.state.x - 1, next: true });
    console.log(this.state.x);
    if (this.state.x == 0) {
      this.setState({ prev: false });
    }
  };
  slideStoriesNext1 = async () => {
    await this.setState({ x: this.state.x + 1, prev: true });
    console.log(this.state.x);
    if (this.state.x == 2) {
      this.setState({ next: false });
    }
  };

  render() {
    const { x, prev, next } = this.state;

    return (
      <div className="flex w-full min-h-screen bg-[#1a1a1a]">
        <div className="p-4 w-[200px]">
          <NextLink href="/">
            <a className="h-[29px]">
              <NextImage
                src="/Instagram_white.png"
                alt="Instagram"
                width="103px"
                objectFit="contain"
                priority="true"
                height="29px"
              />
            </a>
          </NextLink>
        </div>

        <div
          className={`w-[900px] overflow-x-hidden scroll-smooth flex justify-center items-center`}
        >
          {prev && (
            <button
              className="absolute z-10 top-[320px] bg-white h-6 w-6 drop-shadow-lg -translate-y-1/2 text-black flex justify-center items-center rounded-full left-[370px] shadow-md"
              onClick={this.slideStoriesPrev1}
            >
              <Icon name="prev" size={24} />
            </button>
          )}
          {next && (
            <button
              onClick={this.slideStoriesNext1}
              className="absolute z-10 top-[320px] bg-white h-6 w-6 drop-shadow-lg -translate-y-1/2 text-black flex justify-center items-center rounded-full right-[440px] shadow-md"
            >
              <Icon name="next" size={24} />
            </button>
          )}
          {x == 0 && (
            <div className="m-4 w-[480px] h-[600px] flex items-center justify-center">
              <Box
                bgAttachment="scroll"
                bgSize="contain"
                bgRepeat="no-repeat"
                bgImage="url('/kelli.jpg')"
                className="w-full h-full rounded-lg"
              ></Box>
            </div>
          )}
          {x == 1 && (
            <div className="m-4 w-[480px] h-[600px] flex items-center justify-center">
              <Box
                bgAttachment="scroll"
                bgSize="contain"
                bgRepeat="no-repeat"
                bgImage="url('/a.jpg')"
                className="w-full h-full rounded-lg"
              ></Box>
            </div>
          )}
          {x == 2 && (
            <div className="m-4 w-[480px] h-[600px] flex items-center justify-center">
              <Box
                bgAttachment="scroll"
                bgSize="contain"
                bgRepeat="no-repeat"
                bgImage="url('/lisa.jpg')"
                className="w-full h-full rounded-lg"
              ></Box>
            </div>
          )}
        </div>

        <div className="flex justify-end p-4 w-[200px]">
          <Icon name="cancelIcon" color="#ffffff" size={24} />
        </div>
      </div>
    );
  }
}

export default StoriesComponent;
