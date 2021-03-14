import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutProvider'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './SimpleScatterChart.scss'

export const SimpleScatterChart = () => {
    const {
        state: {
            scatterData
        }
    } = useContext(LayoutContext);

    return (
        <ResponsiveContainer title="simplescatter" id="simple__scatterchart__container" width="100%" height="100%">
            <ScatterChart
                width={400}
                height={400}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 5,
                }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="stature" unit="min" />
                <YAxis type="number" dataKey="y" name="weight" unit="b" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={scatterData} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    )
}