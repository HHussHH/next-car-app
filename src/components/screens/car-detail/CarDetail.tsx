import Layout from "@/components/layout/Layout";
import CarItem from "@/components/ui/Car/CarItem";
import { ICarDataSingle } from "@/interfaces/car.interface";
import { FC } from "react";

const CarDetail: FC<ICarDataSingle> = ({ car }) => {
  return (
    <Layout title={car.name} description="good car">
      <CarItem car={car} />
    </Layout>
  );
};

export default CarDetail;
