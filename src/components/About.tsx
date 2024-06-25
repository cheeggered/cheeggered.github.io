import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
              About Me
            </h2>
            <div className="mt-24 space-y-8 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:space-y-0">
              <div className="relative h-full overflow-hidden rounded-lg bg-white">
                <img
                  src="https://storage.cloud.google.com/cheeggered/portrait.jpeg"
                  alt="Portrait"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mt-4 text-lg text-gray-600">
                  Hello! I'm a sophomore at the National University of
                  Singapore, passionate about becoming a skilled software
                  engineer. My interests span both front-end and back-end
                  development. In my free time, I enjoy crocheting and crafting
                  beaded accessories. I'm eager to explore opportunities to
                  apply my skills and collaborate on innovative projects.
                </p>
                <div className="flex mt-4 space-x-4">
                  <a
                    href="https://www.linkedin.com/in/chee-teng-mah-636291242/"
                    className="text-gray-400 underline hover:text-gray-900"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/cheeggered"
                    className="text-gray-400 underline hover:text-gray-900"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
