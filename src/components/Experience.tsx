import React from "react";

const Experience = () => {
  return (
    <section id="experiences">
      <div className="flex justify-center text-4xl font-bold text-gray-950 mt-24">
        Experiences
      </div>
      <div className="timeline-container">
        <ul>
          <li style={{ "--accent-color": "#C2C2C2" } as React.CSSProperties}>
            <div className="date">May 2024 - Present</div>
            <div className="title">
              Software Engineer Intern
              <br />
              <div className="text-sm">@ TradeFlow Capital Management</div>
            </div>
            <div className="descr">
              <p className="text-sm font-light">
                Working on a management platform that facilitates trades.
              </p>
            </div>
          </li>
          <li style={{ "--accent-color": "#C2C2C2" } as React.CSSProperties}>
            <div className="date">Aug 2023 - Dec 2023</div>
            <div className="title">
              Contributor, UI designer
              <br />
              <div className="text-sm">for MediConnect</div>
            </div>
            <div className="descr">
              <p className="text-sm font-light">
                Collaborated with 4 team members to develop a desktop
                application targeted to help receptionists in small GP clinics
                accomplish their administrative tasks.
              </p>
            </div>
          </li>
          <li style={{ "--accent-color": "#C2C2C2" } as React.CSSProperties}>
            <div className="date">Jun 2023 - Aug 2023</div>
            <div className="title">
              Contributor, UI designer
              <br />
              <div className="text-sm">for Indecisive Foodies</div>
            </div>
            <div className="descr">
              <p className="text-sm font-light">
                Developed a cross-platform mobile application that recommends
                users various cuisines and food options using NodeJS, Supabase,
                and React Native.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
