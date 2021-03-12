import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutProvider'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './TinyBarChartBeaconMsg.scss'

export const TinyBarChartBeaconMsg = () => {
    const {
        renderCustomBarLabel,
        state: {
            beaconData
        }
    } = useContext(LayoutContext);

    return (
        <div title="tinybarbeacon">
            <ResponsiveContainer className="tiny__barchart__five__noshow" id="tiny__barchart__container" width="100%" height="100%">
                <BarChart width={600} height={300} data={beaconData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#d88884" label={renderCustomBarLabel} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}