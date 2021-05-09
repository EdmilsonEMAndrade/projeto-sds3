import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSucess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesObj = {
    name: string;
    data: number[];
}

type BarData = {
    labels:{
        categories: string[];
    }
    series: SeriesObj[];
}


function BarChart() {
    
    const [barData, setBarData] = useState<BarData>({       
            labels: {
                categories: []
            },
            series: [
                {
                    name: "",
                    data: []                   
                }
            ]        
    });

    useEffect(()=>{
        axios.get(`${BASE_URL}/sale/sucess`)
        .then(result=>{
            const data = result.data as SaleSucess[];
            const myLabels = data.map(x=> x.sellerName);
            const mySeriesData = data.map(x=> round(((x.deals/x.visited)*100),1));
            console.log(mySeriesData)
            setBarData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% de Sucesso",
                        data: mySeriesData                   
                    }
                ]    
            })
        })
    },[])
   
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    return (
        <Chart
            options={{...options, xaxis: barData.labels}}
            series= {barData.series}
            type="bar"
            height="240"

        />
    );
}

export default BarChart;