import { FC } from "react";
import Layout from "@/components/layout/Layout";
import { ICarData } from "@/interfaces/car.interface";
import CarItem from "@/components/ui/Car/CarItem";

const Home: FC<ICarData> = ({ cars }) => {
  return (
    <Layout title="Home" description="we like to sale cars">
      <h1>Hello nextJs</h1>

      {cars.length ? (
        cars.map((car) => <CarItem key={car.id} car={car} />)
      ) : (
        <div>Cars not found</div>
      )}
    </Layout>
  );
};

export default Home;
