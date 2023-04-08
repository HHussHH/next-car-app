import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage = ({}) => {
  const { push, replace } = useRouter();

  console.log(push, replace);
  return (
    <div>
      <button onClick={() => push("/")}>Go home</button>
      <button onClick={() => replace("/")}>Go home</button>
    </div>
  );
};

export default CarPage;
