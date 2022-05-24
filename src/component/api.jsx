import React, { Component } from 'react';

const axios = require('axios')

class Api extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        this.getApi()
    }

    getApi  = () => {
        axios.get('https://api.coinpaprika.com/v1/coins/')
        .then((res) => {
            let element = []
            for (let i = 0; i < 10; i++) {
                element.push(res.data[i])
            }
            this.setState({
                data: element
            })
        })
    }

    componentDidUpdate(){
        console.log(this.state.data);
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.symbol}</td>
                                        <td>{e.rank}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Api;