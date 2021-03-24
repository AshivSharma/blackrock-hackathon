import Header from "../components/Header";
import SectorTable from "../components/SectorTable";
import StockChart from "../components/StockChart";
export default function IndustryTable() {
  return (
    <>
      <div class="flex flex-col">
        <Header />
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <SectorTable />
            </div>
          </div>
        </div>
      </div>
      <StockChart />
    </>
  );
}
