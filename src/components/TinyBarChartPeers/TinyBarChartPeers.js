import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutProvider'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TinyBarChartPeers.scss'

export const TinyBarChartPeers = () => {
    const {
        renderCustomBarLabel,
        state: {
            testData
        }
    } = useContext(LayoutContext);

    return (
        <div title="tinybarpeers">
            <ResponsiveContainer className="tiny__barchart__five__noshow" id="tiny__barchart__container" width="100%" height="100%">
                <BarChart width={600} height={300} data={testData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" label={renderCustomBarLabel} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}