import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutProvider'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TinyBarChartConnections.scss'

export const TinyBarChartConnections = () => {
    const {
        renderCustomBarLabel,
        state: {
            connections
        }
    } = useContext(LayoutContext);

    return (
        <div title="tinybarconnections">
            <ResponsiveContainer className="tiny__barchart__five__noshow" id="tiny__barchart__container" width="100%" height="100%">
                <BarChart width={600} height={300} data={connections}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#b284d8" label={renderCustomBarLabel} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}

// <BarChart width={600} height={300} data={data}>
//     <XAxis dataKey="name" tick={renderCustomAxisTick} />
//     <YAxis />
//     <Bar dataKey="uv" barSize={30} fill="#8884d8"
//         label={renderCustomBarLabel} />
// </BarChart>
