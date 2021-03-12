import React, { useContext } from 'react'
import { LayoutContext } from '../../LayoutProvider'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import './PieChart.scss'

export const Piechart = () => {
    const {
        renderCustomizedLabel,
        state: {
            data,
            COLORS
        }
    } = useContext(LayoutContext);

    return (
        <div>
            <ResponsiveContainer id="piechart__container" width="100%" height="100%">
                <PieChart width={800} height={800}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <ul id="piechart__list">
                <li id="first"><FontAwesomeIcon style={{ color: COLORS[1] }} className="icon" icon={faCaretRight} /> Lighthouse</li>
                <li id="second"><FontAwesomeIcon style={{ color: COLORS[0] }} className="icon" icon={faCaretRight} /> Prysm</li>
                <li id="third"><FontAwesomeIcon style={{ color: COLORS[3] }} className="icon" icon={faCaretRight} /> Teku</li>
                <li id="fourth"><FontAwesomeIcon style={{ color: COLORS[4] }} className="icon" icon={faCaretRight} /> Lodestar</li>
                <li id="fifth"><FontAwesomeIcon style={{ color: COLORS[2] }} className="icon" icon={faCaretRight} /> Unknown</li>
            </ul>
        </div>


    )
}