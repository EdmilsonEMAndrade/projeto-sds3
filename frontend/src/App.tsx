import BarChart from 'components/BarChart';
import DataTable from 'components/DataTable';
import DonutChart from 'components/DonutChart';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="py-3">Dashboard</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center">Taxa de Sucesso</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center">Taxa de Sucesso</h5>
            <DonutChart/>
          </div>
        </div>
        <div className="py-3">
          <h3 className="text-center">Todas Vendas</h3>
          <DataTable />
        </div>

      </div>

      <Footer />
    </>
  );
}

export default App;
