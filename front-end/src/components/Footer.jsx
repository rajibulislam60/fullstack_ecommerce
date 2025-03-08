import { Typography } from "@material-tailwind/react";
import Container from "./Container";

export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <Container>
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 bg-white text-center md:justify-between">
          <Typography
            as="a"
            href="#"
            className="ml-2 mr-4 cursor-pointer py-1.5 font-bold sm:text-[18px] md:text-[22px] lg:text-[26px]"
          >
            Exclusive
          </Typography>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500 sm:text-[12px] md:text-[14px] lg:text-[16px]"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500 sm:text-[12px] md:text-[14px] lg:text-[16px]"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500 sm:text-[12px] md:text-[14px] lg:text-[16px]"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500 sm:text-[12px] md:text-[14px] lg:text-[16px]"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-blue-gray-50" />
        <Typography
          color="blue-gray"
          className="text-center font-normal sm:text-[12px] md:text-[14px] lg:text-[16px]"
        >
          &copy; 2025 Coder24
        </Typography>
      </Container>
    </footer>
  );
}
