import React from 'react';
import 'react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, LineMarkSeries } from 'react-vis';

export default function Graph({ data }) {
  console.log(data);
  const dateNormalizer = (date) => {
    return date < 10 ? `0${date}` : date;
  };
  return (
    <XYPlot height={300} width={1100} animation>
      <XAxis
        title="Hours"
        tickFormat={(v) => {
          let date = new Date(v);
          return `${dateNormalizer(date.getHours())}:${dateNormalizer(date.getMinutes())}`;
        }}
        tickLabelAngle={70}
        tickPadding={35}
        tickTotal={30}
      />
      <YAxis title="Temperature" tickTotal={15} tickSize={0} />
      <LineMarkSeries data={data} curve={'curveMonotoneX'} opacityType="linear" />
    </XYPlot>
  );
}

// const data = [{ x: 0, y: 8 },
// { x: 1, y: 5 },
// { x: 2, y: 4 },
// { x: 3, y: 9 },
// { x: 4, y: 1 },
// { x: 5, y: 7 },
// { x: 6, y: 6 },
// { x: 7, y: 3 },
// { x: 8, y: 2 },
// { x: 9, y: 0 },
// ];
// return (
// <XYPlot height={300} width={300}>
//   {/* <VerticalGridLines />
//   <HorizontalGridLines /> */}
//   {/* <VerticalBarSeries data={series1} /> */}
//   <XAxis />
//   <YAxis />
//   <LineSeries data={data} color="#9253a1" />
// </XYPlot>
// );
