import React from 'react';
import NextImage from 'next/image';
import Icon from '../src/Icon';
import { Input } from '@chakra-ui/react';

function PostCard() {
  return (
    <div className="3xs:w-[320px] 2xs:w-[375px] xs:w-[450px] md:w-[685px] lg:w-[614px] xl:w-[614px] border-[1px] border-[#dbdbdb] h-auto">
      <div className="flex justify-between items-center m-4">
        <div className="flex justify-start items-center space-x-4">
          <NextImage
            src="/solar.jpg"
            alt="Profile Image"
            width="32px"
            height="32px"
            objectFit="contain"
            className="rounded-full cursor-pointer"
            priority="true"
          />
          <p className="text-sm font-semibold">solarkeem</p>
        </div>
        <Icon name="threePointIcon" size={24} color="#262626" />
      </div>
      <NextImage
        src="/kelli.jpg"
        alt="Profile Image"
        width="684px"
        height="684px"
        objectFit="contain"
        className="3xs:w-[320px] 2xs:w-[375px] xs:w-[450px] md:w-[685px] lg:w-[614px] xl:w-[614px]"
        priority="true"
      />
      <div className="space-y-4 m-4">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center space-x-4">
            <Icon name="heartUnFillIcon" size={24} />
            <Icon name="commentIcon" size={24} />
            <Icon name="shareIcon" size={24} />
          </div>
          <Icon name="collectionIcon" size={24} />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold cursor-pointer">222.614 likes</p>
          <p className="text-sm font-semibold cursor-pointer hover:underline">
            solarkeem
          </p>
          <p className="text-sm cursor-pointer text-[#8e8e8e]">
            View all 869 comments
          </p>
          <p className="text-[9px] text-[#8e8e8e] cursor-pointer">
            9 HOURS AGO
          </p>
        </div>
      </div>
      <div className="border-t-[1px] border-[#dbdbdb] p-4 flex items-center space-x-3">
        <Icon name="smileIcon" size={24} className="cursor-pointer" />
        <Input
          type="text"
          placeholder="Add a comment..."
          _placeholder={{ fontSize: '14px' }}
          variant="unstyled"
        />
        <button className="text-sm text-[#bce3fd]">Post</button>
      </div>
    </div>
  );
}

export default PostCard;
