import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export default function HistoryOverviewPiechart() {
  const style = (segmentIndex) => {
    if (!segmentIndex) {
      return {
        fill: '#68ba63',
        fontSize: '9px',
        // fontWeight: '600',
      };
    }
    return {
      fill: '#df5e59',
      fontSize: '9px',
      // fontWeight: '600',
    };
  };

  return (
    <PieChart
      animationDuration={500}
      animate
      animationEasing='ease-out'
      center={[50, 50]}
      data={[
        {
          color: '#68ba63',
          title: 'One',
          value: 45,
        },
        {
          color: '#df5e59',
          title: 'Two',
          value: 55,
        },
      ]}
      label={({ dataEntry }) => dataEntry.value}
      labelPosition={125}
      labelStyle={(segmentIndex) => style(segmentIndex)}
      totalValue={100}
      rounded={true}
      lengthAngle={360}
      lineWidth={20}
      paddingAngle={20}
      radius={30}
      startAngle={135}
      viewBoxSize={[100, 100]}
      style={{ width: '12rem', marginRight: '2rem' }}
    />
  );
}
