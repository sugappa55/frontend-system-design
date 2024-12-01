import { useState } from "react";
// import Pagination from "./components/Pagination";
import Stepper from "./components/Stepper";
import SortableTable from "./machine-coding-questions/SortableTable";

function App() {
  // const [page, setPage] = useState(1);
  const [step, setStep] = useState(1);
  // const onChange = (p: number) => setPage(p);
  const onChangeStep = (toNext = true) =>
    setStep((p) => (toNext ? p + 1 : p - 1));
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      {/* <Pagination count={10} currentPage={page} onChange={onChange} /> */}
      {/* <SortableTable /> */}
      <Stepper
        steps={[
          { title: "One" },
          { title: "Two" },
          { title: "Three" },
          { title: "Four" },
        ]}
        currentStep={step}
      />

      <div className="flex gap-10 mt-10">
        <button
          className="p-3 rounded-lg border "
          onClick={() => onChangeStep(false)}
        >
          Prev
        </button>
        <button
          className="p-3 rounded-lg border "
          onClick={() => onChangeStep()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
