import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutProvider'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './AreaResponsiveContainer.scss'

export const AreaResponsiveContainer = () => {
    const {
        state: {
            areaData,
        }
    } = useContext(LayoutContext);

    return (
        <div title="/area" id="arearesponsive__div">
            <ResponsiveContainer id="arearesponsive__container" width="80%" height="80%">
                <AreaChart
                    data={areaData}
                    margin={{
                        top: 10,
                        right: 40,
                        left: 10,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}