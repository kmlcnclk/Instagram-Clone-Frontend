import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Input,
  Box,
} from '@chakra-ui/react';

function A() {
  return (
    <div className="w-full min-h-screen bg-red-500">
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Box}>
              {isOpen ? (
                <input
                  type="text"
                  autoFocus
                  placeholder="Search"
                  className="bg-[#efefef] text-sm w-[268px] h-9 flex justify-start px-3 space-x-3 cursor-text items-center rounded-md focus:outline-0 mb-6"
                />
              ) : (
                <input
                  type="text"
                  autoFocus
                  placeholder="Search"
                  className="bg-[#efefef] text-sm w-[268px] h-9 flex justify-start px-3 space-x-3 cursor-text items-center rounded-md focus:outline-0 mb-6"
                />
              )}
            </MenuButton>

            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem onClick={() => alert('Kagebunshin')}>{}</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </div>
  );
}

export default A;
