import React from "react"
import Chart from "react-google-charts"

const PieChart = ({data, chartType, title}) => {

    return (
        <Chart
            width={'100%'}
            height={'100%'}
            chartType={chartType}
            loader={<div>Loading Chart</div>}
            data={data}
            options={{

            chartArea : {top:12},
            legend : {position : 'center'},
            }}
      />
    )
}

export default PieChart;