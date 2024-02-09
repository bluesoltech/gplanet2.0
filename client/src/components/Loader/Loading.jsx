import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[85vh]">
      <HashLoader color="green" />
    </div>
  );
};

export default Loading;
