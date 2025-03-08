import React from "react";
import Container from "../components/Container";

const About = () => {
  return (
    <section>
      <Container>
        <div className="bg-white-100 mt-5 px-2 py-12">
          <div className="mx-auto grid gap-12 lg:grid-cols-2">
            <div className="text-left">
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Discover the Future of Innovation
              </h2>
              <p className="mb-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper
                mauris, non aliquam nisi purus vel nisl. Integer efficitur
                turpis in bibendum tincidunt.
              </p>
              <p className="mb-4 text-sm text-gray-500">
                Nulla facilisi. Vestibulum fringilla leo et purus consectetur,
                vel tincidunt dolor rhoncus. In hac habitasse platea dictumst.
                Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat
                nisi.
              </p>
              <p className="text-sm text-gray-500">
                consectetur adipiscing elit. Duis accumsan, nunc et tempus
                blandit, metus mi consectetur felis turpis vitae ligula. nunc et
                tempus blandit, metus mi consectetur felis turpis vitae ligula.
              </p>
              <p className="text-sm text-gray-500">
                consectetur adipiscing elit. Duis accumsan, nunc et tempus
                blandit, metus mi consectetur felis turpis vitae ligula. nunc et
                tempus blandit, metus mi consectetur felis turpis vitae ligula.
              </p>
            </div>
            <div>
              <img
                src="https://readymadeui.com/management-img.webp"
                alt="Placeholder Image"
                className="h-full w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
