import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import data from '../utils/data/performance_in_time_revenue.json';

const ShopGraph = () => {
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        // Filter data for the current month
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Month is zero-based
        const currentYear = currentDate.getFullYear();
        const currentMonthData = data.revenue.filter(item => {
            const itemDate = new Date(item.day);
            return itemDate.getMonth() + 1 === currentMonth && itemDate.getFullYear() === currentYear;
        });

        // Filter data for the previous month
        const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;
        const previousMonthData = data.revenue.filter(item => {
            const itemDate = new Date(item.day);
            return itemDate.getMonth() + 1 === previousMonth && itemDate.getFullYear() === previousYear;
        });

        // Extract values for current and previous month
        const currentMonthValues = currentMonthData.map(item => item.value);
        const previousMonthValues = previousMonthData.map(item => item.value);

        // Create x-axis labels for the days in the month
        const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

        // Create graph data
        const graphData = [
            {
                x: days,
                y: currentMonthValues,
                type: 'bar',
                name: 'Current Month',
                marker: { color: '#3182BD' }
            },
            {
                x: days,
                y: previousMonthValues,
                type: 'bar',
                name: 'Previous Month',
                marker: { color: '#FFA07A' }
            }
        ];

        setGraphData(graphData);
    }, []);

    return (
        <div className='container'>
            <div className='revenue revenue2'>
                <p>Revenue</p>
            </div>
            <div className='chart-container'>
                {graphData && (
                    <Plot
                        data={graphData}
                        layout={{
                            xaxis: {
                                // title: 'Day of Month'
                            },
                            yaxis:{
                                // title: 'Revenue',
                                tickmode: 'array'
                            },
                            barmode: 'group',
                            width: 800,
                            height: 400
                        }}
                        style={{ width: '100%', height: '100%' }}
                    />
                )}
            </div>
        </div>
    );
};

export default ShopGraph;