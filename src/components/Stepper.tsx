import { RightIcon } from "../Icons";

const Stepper = ({
  steps,
  currentStep,
}: {
  steps: { title: string }[];
  currentStep: number;
}) => {
  return (
    <div className="flex">
      {steps.map((step, i) => {
        return (
          <div className="flex items-center">
            <div className="flex flex-col gap-1 justify-center items-center">
              <div
                className={`w-16 h-16 rounded-full flex justify-center items-center transition-all ease-in-out
                ${currentStep >= i + 1 ? "bg-green-600" : "bg-blue-600"}`}
              >
                {currentStep >= i + 1 ? <RightIcon /> : i + 1}
              </div>
              {/* <div>{step.title}</div> */}
            </div>
            {i + 1 !== steps.length && (
              <div
                className={`w-[150px] h-2 mx-2 transition-all ease-in-out
                ${currentStep >= i + 1 ? "bg-green-600" : "bg-blue-600"}`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
