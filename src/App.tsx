// import { useEffect, useState } from 'react';
// import Pagination from "./components/Pagination";
// import Stepper from './components/Stepper';
// import SortableTable from './machine-coding-questions/SortableTable';
// import ProgressBar from './components/ProgressBar';
// import { BreadcrumbsPreview } from './components/Breadcrumbs';
// import GridLights from './machine-coding-questions/GridLights';
// import CursorFollower from './machine-coding-questions/CursorFollower';
import LikeButton from './machine-coding-questions/LikeButton';
// import { InfiniteScrollPreview } from './machine-coding-questions/InfiniteScroll';
// import OtpInput from './machine-coding-questions/OtpInput';

function App() {
  // const [page, setPage] = useState(1);
  // const [step, setStep] = useState(1);
  // const [value, setValue] = useState(0);
  // const onChange = (p: number) => setPage(p);
  // const onChangeStep = (toNext = true) =>
  //   setStep((p) => (toNext ? p + 1 : p - 1));

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     if (value >= 100) return clearInterval(id);
  //     setValue(v => v + 1);
  //   }, 500);

  //   return () => clearInterval(id);
  // }, [value]);

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
      {/* <Pagination count={10} currentPage={page} onChange={onChange} /> */}
      {/* <SortableTable /> */}

      {/* Stepper component */}
      {/* <Stepper
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
      </div> */}

      {/* --------------------------- */}

      {/* <ProgressBar value={value} /> */}
      {/* <BreadcrumbsPreview /> */}
      {/* <GridLights /> */}
      {/* <OtpInput length={6} onSubmit={(value: string) => console.log(value)} /> */}
      {/* <InfiniteScrollPreview /> */}
      {/* <CursorFollower /> */}
      <LikeButton />
    </div>
  );
}

export default App;
