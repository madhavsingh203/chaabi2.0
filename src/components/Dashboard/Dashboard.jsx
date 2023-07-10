import { Grid } from "@mui/material";
import "./Dashboard.css";
import Card from "../Card/Card";
import BarGraph from "../BarChart/BarChart";
import PieGraphCard from "../PieGraph/PieGraphCard";
import ActivityCard from "../ActivityCard/ActivityCard";
import { barCardData, barData, barDataSevenDays } from "../../mockData1";
import DonutCard from "../Donut/DonutCard";

const Dashboard = () => {
  return (
    <>
      <div
        style={{
          width: "100%"
        }}
      >
        <Grid container mt={2} p={2} className="top-grid">
          {barCardData.map((item, index) => (
            <Grid key={index} item>
              <Card
                title={item.title}
                value={item.value}
                number={item.number}
                chipColor={item.chipColor}
              />
            </Grid>
          ))}

          <Grid container columnGap={3}>
            <Grid item>
              <PieGraphCard />
            </Grid>
            <Grid
              container
              style={{
                backgroundColor: "white"
              }}
              className="middle-grid-container"
            >
              <Grid item className="middle-grid-graph ">
                <div
                  className="middle-grid-top "
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "3rem",
                    width: "100%"
                  }}
                >
                  <p>Last 14 days active workers in training</p>
                  <p>Last 14 days</p>
                </div>

                <BarGraph
                  width="100%"
                  data={barData}
                  vertical={false}
                  horizontal={false}
                  barRadius={10}
                  domain={[0, 400]}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="activity-card-container">
            <ActivityCard />
          </Grid>
          <Grid item className="donut-container">
            <DonutCard />
          </Grid>
          <Grid
            container
            style={{
              backgroundColor: "white",
              width: "100%"
            }}
            className="bottom-grid-container"
          >
            <Grid item className="bottom-grid-graph">
              <div
                className="bottom-grid-top "
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "3rem"
                }}
              >
                <p>Daily Traning Completions</p>
                <p>Last 7 days</p>
              </div>

              <BarGraph
                width="100%"
                data={barDataSevenDays}
                vertical={false}
                horizontal={true}
                barRadius={1}
                domain={[0, 160]}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
