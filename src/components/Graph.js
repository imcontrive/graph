import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import Plot from 'react-plotly.js';

const data = {
    "shop_id": 5349,
    "shop_name": "dsp",
    "time_start": "2024-04-01",
    "time_end": "2024-04-30",
    "conversion_rate": [
        { "day": "2024-04-01", "value": 0.0065 },
        { "day": "2024-04-02", "value": 0.0057 },
        { "day": "2024-04-03", "value": 0.0068 },
        { "day": "2024-04-04", "value": 0.0052 },
        { "day": "2024-04-05", "value": 0.0063 },
        { "day": "2024-04-06", "value": 0.0066 },
        { "day": "2024-04-07", "value": 0.0051 },
        { "day": "2024-04-08", "value": 0.0088 },
        { "day": "2024-04-09", "value": 0.0069 },
        { "day": "2024-04-10", "value": 0.0085 },
        { "day": "2024-04-11", "value": 0.0053 },
        { "day": "2024-04-12", "value": 0.0091 },
        { "day": "2024-04-13", "value": 0.0078 },
        { "day": "2024-04-14", "value": 0.0083 },
        { "day": "2024-04-15", "value": 0.0074 },
        { "day": "2024-04-16", "value": 0.0063 },
        { "day": "2024-04-17", "value": 0.0096 },
        { "day": "2024-04-18", "value": 0.0089 },
        { "day": "2024-04-19", "value": 0.0062 },
        { "day": "2024-04-20", "value": 0.0054 },
        { "day": "2024-04-21", "value": 0.0069 },
        { "day": "2024-04-22", "value": 0.008 },
        { "day": "2024-04-23", "value": 0.0064 },
        { "day": "2024-04-24", "value": 0.0055 },
        { "day": "2024-04-25", "value": 0.0065 },
        { "day": "2024-04-26", "value": 0.0079 },
        { "day": "2024-04-27", "value": 0.0065 },
        { "day": "2024-04-28", "value": 0.0063 },
        { "day": "2024-04-29", "value": 0.0069 },
        { "day": "2024-04-30", "value": 0.0063 }
    ]
}

const Graph = () => {
    const [graphData, setGraphData] = useState(null);

    const days = useMemo(() => data.conversion_rate.map(entry => entry.day), []);
    const values = useMemo(() => data.conversion_rate.map(entry => entry.value), []);


    useEffect(() => {
        const graphData = [{
            x: days,
            y: values,
            type: 'scatters',
            mode: 'lines+markers',
            marker: { color: 'brown' },
        }];
        setGraphData(graphData);
    }, [days, values]);


    return (
        <div className='container'>
            <div className='revenue revenue1'>
                <p>Conversion Rate</p>
            </div>
            <div className='chart-container'>
                {graphData && (
                    <Plot
                        data={graphData}
                        layout={{
                            width: '300px',
                            height: '300px',
                            // title: 'Conversion Rate',
                            // xaxis: { title: 'Date', tickmode: 'auto' },
                            // yaxis: { title: 'Conversion Rate', tickmode: 'array' },
                        }}
                    />
                )}
            </div>
        </div>
    );
}


export default Graph;

