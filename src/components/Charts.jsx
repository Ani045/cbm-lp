import React from 'react';
import ReactECharts from 'echarts-for-react';

export const HeroEChart = () => {
    const option = {
        grid: { top: 10, right: 0, bottom: 20, left: 0, containLabel: false },
        xAxis: { type: 'category', show: false },
        yAxis: { type: 'value', show: false },
        tooltip: { trigger: 'axis' },
        series: [{
            data: [120, 132, 101, 134, 90, 230, 210, 250, 280, 320, 310, 350],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: { width: 3, color: '#6634A1' },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [{ offset: 0, color: 'rgba(102, 52, 161, 0.2)' }, { offset: 1, color: 'rgba(102, 52, 161, 0)' }]
                }
            }
        }]
    };
    return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />;
};

export const RevenueGrowthChart = () => {
    const option = {
        backgroundColor: 'transparent',
        grid: { top: 30, right: 20, bottom: 30, left: 40 },
        tooltip: { trigger: 'axis', backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#334155', textStyle: { color: '#fff' } },
        xAxis: {
            type: 'category',
            data: ['Q1', 'Q2', 'Q3', 'Q4'],
            axisLine: { lineStyle: { color: '#475569' } },
            axisLabel: { color: '#94a3b8' }
        },
        yAxis: {
            type: 'value',
            splitLine: { lineStyle: { color: '#334155', type: 'dashed' } },
            axisLabel: { color: '#94a3b8' }
        },
        series: [
            {
                name: 'Revenue',
                data: [100000, 115000, 135000, 160000],
                type: 'line',
                smooth: true,
                symbolSize: 8,
                itemStyle: { color: '#a855f7' },
                lineStyle: { width: 4, color: '#a855f7' },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [{ offset: 0, color: 'rgba(168, 85, 247, 0.3)' }, { offset: 1, color: 'rgba(168, 85, 247, 0)' }]
                    }
                }
            }
        ]
    };
    return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />;
};
