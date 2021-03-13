import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutProvider'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export const TinyBarChartDisconnections = () => {
    const {
        renderCustomBarLabel,
        state: {
            disconnections
        }
    } = useContext(LayoutContext);

    return (
        <div title="tinybardisconnections">
            <ResponsiveContainer className="tiny__barchart__five__noshow" id="tiny__barchart__container" width="100%" height="100%">
                <BarChart width={600} height={300} data={disconnections}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884D8" label={renderCustomBarLabel} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}
