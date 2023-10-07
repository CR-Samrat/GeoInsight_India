import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
//   import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
   import React from "react";
  export default function Navbars() {
    return (
      <Navbar className="mx-auto max-w-screen-xl px-2 py-2">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white rounded-md bg-blue-400">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            GeoInsight India
          </Typography>
          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton variant="text" color="blue-gray">
              {/* <Cog6ToothIcon className="h-4 w-4" /> */}
            </IconButton>
            <IconButton variant="text" color="blue-gray">
              
            </IconButton>
          </div>
          {/* <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            
          </div> */}
        </div>
      </Navbar>
    );
  }