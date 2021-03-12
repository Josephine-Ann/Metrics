import React from 'react'


export const LayoutContext = React.createContext();

export class LayoutProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allClients: [],
            connections: [],
            disconnections: [],
            slideIndex: 1,
            averageMessages: [],
            info: [],
            aggregations: [],
            countryData: [],
            selected: "home",
            testData: [],
            beaconData: [],
            open: false,
            scatterData: [],
            data: [],
            COLORS: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "rgb(136, 132, 216)"],
            RADIAN: Math.PI / 180,
            areaData: [
                {
                    name: 'Page A',
                    uv: 4000,
                    pv: 2400,
                    amt: 2400,
                },
                {
                    name: 'Page B',
                    uv: 3000,
                    pv: 1398,
                    amt: 2210,
                },
                {
                    name: 'Page C',
                    uv: 2000,
                    pv: 9800,
                    amt: 2290,
                },
                {
                    name: 'Page D',
                    uv: 2780,
                    pv: 3908,
                    amt: 2000,
                },
                {
                    name: 'Page E',
                    uv: 1890,
                    pv: 4800,
                    amt: 2181,
                },
                {
                    name: 'Page F',
                    uv: 2390,
                    pv: 3800,
                    amt: 2500,
                },
                {
                    name: 'Page G',
                    uv: 3490,
                    pv: 4300,
                    amt: 2100,
                },
            ]
        };
    }

    getInfo = async () => {
        let clientsInCountries = [{}]
        let figures = {
            connections: {},
            disconnections: {},
            time: {},
            averageLatency: {},
            beaconBlocks: {},
            beaconBlocksAverage: {},
            beaconBlocksAggregations: {},
            quantityClients: {},
            quantityClientsPercentage: {},
        }
        let aggregations = []
        let averageMessages = []
        let scatter = []
        let data = []
        let beaconData = []
        let totalClients = 0
        let countryData = []
        let client = ""
        let areas = []
        let index = 0
        let connections = []
        let disconnections = []
        fetch('http://localhost:4000/getAllMetrics')
            .then(res => res.json())
            .then(json => {
                json.map((item) => {
                    scatter.push({ x: item.connected_time, y: item.total_messages, z: index })
                    totalClients += 1
                    if (!clientsInCountries[0].hasOwnProperty(item.country.toLowerCase())) {
                        clientsInCountries[0][item.country.toLowerCase()] = 1
                    } else {
                        clientsInCountries[0][item.country.toLowerCase()] += 1
                    }
                    client = item.client.toLowerCase()
                    if (figures.connections[client]) {
                        figures.connections[client] += item.connections
                        figures.disconnections[client] += item.disconnections
                        figures.time[client] += item.connected_time
                        figures.averageLatency[client] += item.latency
                        figures.beaconBlocks[client] += item.beacon_blocks
                        figures.quantityClients[client] += 1
                        figures.beaconBlocksAggregations[client] += item.beacon_aggregations
                    } else {
                        this.setState({
                            allClients: item.client
                        })
                        figures.connections[client] = item.connections || 0
                        figures.disconnections[client] = item.disconnections || 0
                        figures.time[client] = item.connected_time || 0
                        figures.averageLatency[client] = item.averageLatency || 0
                        figures.beaconBlocks[client] = item.beacon_blocks || 0
                        figures.quantityClients[client] = 1
                        figures.beaconBlocksAggregations[client] = item.beacon_aggregations || 0
                    }
                    index++
                })
                let country = ""
                for (const property in clientsInCountries[0]) {
                    country = property[0].toUpperCase() + property.slice(1, property.length)
                    if (countryData.length !== 8) {
                        countryData.push({
                            name: country,
                            uv: clientsInCountries[0][property]
                        })
                    }
                }
                for (const property in figures.beaconBlocks) {
                    let figure = (property[0]).toUpperCase() + property.slice(1, property.length)
                    beaconData.push({
                        name: figure,
                        uv: figures.beaconBlocks[property],
                        scatterData: scatter
                    })
                }
                for (const property in figures.beaconBlocksAggregations) {
                    let figure = (property[0]).toUpperCase() + property.slice(1, property.length)
                    aggregations.push({
                        name: figure,
                        uv: figures.beaconBlocksAggregations[property]
                    })
                }
                for (const property in figures.averageLatency) {
                    figures.averageLatency[property] = figures.averageLatency[property] / figures.quantityClients[property]
                }
                for (const property in figures.connections) {
                    let figure = (property[0]).toUpperCase() + property.slice(1, property.length)
                    connections.push({
                        name: figure,
                        uv: figures.connections[property] / figures.quantityClients[property]
                    })
                    figures.connections[property] = figures.connections[property] / figures.quantityClients[property]
                }
                for (const property in figures.disconnections) {
                    let figure = (property[0]).toUpperCase() + property.slice(1, property.length)
                    disconnections.push({
                        name: figure,
                        uv: figures.disconnections[property] / figures.quantityClients[property]
                    })
                    figures.disconnections[property] = figures.disconnections[property] / figures.quantityClients[property]
                }
                for (const property in figures.time) {
                    let figure = (property[0]).toUpperCase() + property.slice(1, property.length)
                    areas.push({
                        name: figure,
                        uv: figures.time[property]
                    })
                    figures.time[property] = figures.time[property] / figures.quantityClients[property]
                }
                for (const property in figures.quantityClients) {
                    figures.quantityClientsPercentage[property] = parseFloat((figures.quantityClients[property] * (100 / totalClients)).toFixed(2))
                    data.push({ name: property, value: parseFloat((figures.quantityClients[property] * (100 / totalClients)).toFixed(2)) })
                }
                for (const property in figures.beaconBlocks) {
                    averageMessages.push({
                        name: property,
                        uv: (figures.beaconBlocks[property] / figures.quantityClients[property])
                    })
                    figures.beaconBlocksAverage[property] = figures.beaconBlocks[property] / figures.quantityClients[property]
                }


                this.setState({
                    info: figures,
                    countryData: clientsInCountries,
                    data: data,
                    testData: countryData,
                    beaconData: beaconData,
                    scatterData: scatter,
                    areaData: areas,
                    aggregations: aggregations,
                    connections: connections,
                    disconnections: disconnections
                })
            })
    }

    openMenu = async () => {
        if (this.state.open === true) {
            this.setState({
                open: false
            })
        } else {
            this.setState({
                open: true
            })
        }
    }

    plusSlides = async (quantity) => {
        if (quantity > 0 && this.state.slideIndex < 2 || quantity < 0 && this.state.slideIndex > 1) {
            this.setState({
                slideIndex: (this.state.slideIndex + quantity)
            })
        }
    }

    renderPie = async ({ name }) => {

    }


    renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, client }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * this.state.RADIAN);
        const y = cy + radius * Math.sin(-midAngle * this.state.RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    componentDidMount() {
        this.getInfo();
    }

    render() {
        return (
            <LayoutContext.Provider
                value={{
                    state: this.state,
                    isWorking: this.isWorking,
                    openMenu: this.openMenu,
                    changePage: this.changePage,
                    renderCustomizedLabel: this.renderCustomizedLabel,
                    plusSlides: this.plusSlides
                }}>
                {!this.state.loading ? this.props.children : "Loading Vocab List..."}
            </LayoutContext.Provider>
        );
    }
}

export default LayoutContext;
