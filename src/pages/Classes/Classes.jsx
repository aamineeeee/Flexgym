import "./Classes.css";
import { useState } from "react";
import ClassesList from "../../assets/api/ClassesList";

const Classes = () => {
  const daysOfWeek = [
    "Agadir",
    "Tangier",
    "Fes",
    "Rabat",
    "Mohammedia",
    "Casablanca",
    "Marrakesh",
  ];

  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];

  const [selectedDay, setSelectedDay] = useState(currentDay);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="classes-wrapper">
      <section className="banner classes-banner">
        <div className="container center">
          <div className="banner-heading">
            <h1>Partners</h1>
          </div>
        </div>
      </section>

      <section className="class-timings center py-5 my-5">
        <div className="container center flex-col">
          <div className="title">
            <h4
              className="text-lg uppercase font-bold"
              style={{ color: "orangered" }}
            >
              IN PROGRAM
            </h4>
          </div>
          <div className="heading text-4xl uppercase font-bold mb-4 p-1">
            Gyms available
          </div>

          <nav className="weekbar rounded mb-5">
            <ul className="week-list center flex-wrap">
              {daysOfWeek.map((day) => (
                <li
                  key={day}
                  className={`list-item mx-1 ${
                    selectedDay === day ? "active" : ""
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </li>
              ))}
            </ul>
          </nav>

          {selectedDay && (
            <div className="time-table center flex-wrap">
              {ClassesList.find(
                (item) => item.day === selectedDay
              )?.classes.map((classInfo) => (
                <div
                  className="class-col center flex-col group"
                  key={classInfo.name}
                >
                  <div className="class-timings">
                    <p className="text-white uppercase font-bold group-hover:text-black">
                      {classInfo.time}
                    </p>
                  </div>
                  <div className="class-name">
                    <a
                      href={classInfo.locationURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold uppercase text-2xl p-3 group-hover:text-black"
                      style={{ color: "orangered", textDecoration: "none" }}
                    >
                      {classInfo.name}
                    </a>
                  </div>
                  <div className="class-instructor">
                    <p className="text-white uppercase group-hover:text-black">
                      {classInfo.instructor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Classes;
