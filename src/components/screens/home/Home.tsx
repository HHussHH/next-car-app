import { Inter } from "next/font/google";
import Image from "next/image";
import { FC } from "react";
import styles from "./Home.module.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

const Home: FC = () => {
  return <Layout>Home</Layout>;
};

export default Home;
