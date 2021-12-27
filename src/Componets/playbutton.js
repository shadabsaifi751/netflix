import React from 'react';
import ReactApexChart from 'react-apexcharts'

// const Api = () => {
class Api extends React.Component{

    constructor() {
        super();
        this.state = {
            series: [70],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%',
                  }
                },
              },
              labels: ['Cricket'],
            },
          
          
          };
        }
    
    // componentDidMount() {
    //     fetch('https://card-admin.dev.intuaition.net/chart/data').then((resp) => {
    //         resp.json().then((result) => {
    //             // console.log(result.data)
    //             this.setState({users:result.data})
    //         })
    //     })

    // }

    render(){
        return(
            <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
            </div>
            
        )
    }

   
}


export default Api;