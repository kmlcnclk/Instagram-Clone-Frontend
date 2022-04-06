import React, { Component } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import Icon from '../src/Icon';

class StoriesComponent extends Component {
  render() {
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
        <div className="w-full"></div>
        <div className="flex justify-end p-4 w-[200px]">
          <Icon name="cancelIcon" color="#ffffff" size={24} />
        </div>
      </div>
    );
  }
}

export default StoriesComponent;
