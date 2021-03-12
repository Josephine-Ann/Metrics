import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutProvider'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TinyBarChartAggregations.scss'

export const TinyBarChartAggregations = () => {
    const {
        renderCustomBarLabel,
        state: {
            aggregations
        }
    } = useContext(LayoutContext);

    return (
        <div title="tinybaraggregations">
            <ResponsiveContainer className="tiny__barchart__five__noshow" id="tiny__barchart__container" width="100%" height="100%">
                <BarChart width={600} height={300} data={aggregations}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#84d888" label={renderCustomBarLabel} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}