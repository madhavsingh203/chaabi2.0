import React from "react";
import "./ActivityCard.css";
import upArrow from "../../assets/images/upArrow.svg";

const ActivityCard = () => {
  const data = [
    {
      heading: "course a",
      desc: "23 workers took this course this week"
    },
    {
      heading: "course b",
      desc: "253 workers took this course this week"
    },
    {
      heading: "course c",
      desc: "253 workers took this course this week"
    },
    {
      heading: "course d",
      desc: "253 workers took this course this week"
    }
  ];
  return (
    <div className="activity-card">
      <h3>Monthly Training Activity</h3>
      <div
        style={{
          display: "flex",
          margin: "1rem 0px 1.5rem 0px"
        }}
      >
        <img src={upArrow} />
        <p>16% more enrollees this month</p>
      </div>

      {data.map((item, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
            // marginBottom:'10px'
          }}
          key={index}
        >
          <div>
            <div
              style={{
                border: "2px solid #0D62FF",
                width: "1rem",
                height: "1rem",
                borderRadius: "1rem",
                marginRight: "0.5rem"
              }}
            ></div>
            {index === 3 ? (
              <div
                style={{
                  height: "2rem",
                  marginLeft: "0.5rem"
                }}
              ></div>
            ) : (
              <div
                style={{
                  borderLeft: "0.125rem solid #E7EFFF",
                  height: "2rem",
                  marginLeft: "0.5rem"
                }}
              ></div>
            )}
          </div>
          <div
            style={{
              paddingBottom: "0.8rem"
            }}
          >
            <h2>{item.heading}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityCard;
