import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export default function HistoryOverviewPiechart() {
  const style = {
    fill: 'white',
    fontSize: '7px',
  };

  return (
    <PieChart
      animationDuration={500}
      animationEasing='ease-out'
      center={[50, 50]}
      data={[
        {
          color: '#68ba63',
          title: 'One',
          value: 65,
        },
        {
          color: '#df5e59',
          title: 'Two',
          value: 35,
        },
      ]}
      label={({ dataEntry }) => dataEntry.value}
      labelPosition={125}
      labelStyle={style}
      totalValue={100}
      rounded={true}
      lengthAngle={360}
      lineWidth={20}
      paddingAngle={20}
      radius={25}
      startAngle={150}
      viewBoxSize={[100, 100]}
    />
  );
}
