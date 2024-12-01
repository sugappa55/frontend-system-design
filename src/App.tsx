// import { useState } from "react";
// import Pagination from "./components/Pagination";
import SortableTable from "./machine-coding-questions/SortableTable";

function App() {
  // const [page, setPage] = useState(1);
  // const onChange = (p: number) => setPage(p);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* <Pagination count={10} currentPage={page} onChange={onChange} /> */}
      <SortableTable />
    </div>
  );
}

export default App;
