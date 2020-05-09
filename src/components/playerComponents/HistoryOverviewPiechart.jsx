import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function HistoryOverviewPiechart() {
  return (
    <PieChart
      animationDuration={500}
      animationEasing="ease-out"
      center={[50, 50]}
      data={[
        {
          color: "#68ba63",
          title: "One",
          value: 65,
        },
        {
          color: "#df5e59",
          title: "Two",
          value: 35,
        },
      ]}
      label={({ dataEntry }) => dataEntry.value}
      totalValue={100}
      rounded={false}
      center={[50, 50]}
      labelPosition={10}
      lengthAngle={360}
      lineWidth={20}
      paddingAngle={2}
      radius={30}
      startAngle={150}
      viewBoxSize={[100, 100]}
    />
  );
}
