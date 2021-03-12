import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { TinyBarChartPeers } from '../components/TinyBarChartPeers/TinyBarChartPeers';
import { SimpleScatterChart } from '../components/SimpleScatterChart/SimpleScatterChart';
import { Piechart } from '../components/PieChart/PieChart';
import { AreaResponsiveContainer } from '../components/AreaResponsiveContainer';
import { useRoutes } from 'hookrouter';
import { Navbar } from '../components/Navbar/Navbar';
import { TinyBarChartBeaconMsg } from '../components/TinyBarChartBeaconMsg/TinyBarChartBeaconMsg';
import { TinyBarChartAggregations } from '../components/TinyBarChartAggregations/TinyBarChartAggregations';
import { TinyBarChartConnections } from '../components/TinyBarChartConnections/TinyBarChartConnections';
import { TinyBarChartDisconnections } from '../components/TinyBarChartDisconnections/TinyBarChartDisconnections';

export const FunctionContextComponent = () => {

    const routes = {
        '/': () => <Layout />,
        '/tinybarpeers': () => <TinyBarChartPeers />,
        '/simplescatter': () => <SimpleScatterChart />,
        '/piechart': () => <Piechart />,
        '/area': () => <AreaResponsiveContainer />,
        '/tinybarbeacon': () => <TinyBarChartBeaconMsg />,
        '/tinybaraggregations': () => <TinyBarChartAggregations />,
        '/tinybarconnections': () => <TinyBarChartConnections />,
        '/tinybardisconnections': () => <TinyBarChartDisconnections />
    };
    const routeResult = useRoutes(routes);

    return (
        <div>
            <Navbar />
            {routeResult}
        </div>
    );

}

