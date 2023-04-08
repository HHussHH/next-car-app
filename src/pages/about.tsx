import Layout from "@/components/layout/Layout";
import { NextPageAuth } from "@/interfaces/page.interface";
import { NextPage } from "next";

const AboutPage: NextPageAuth = ({}) => {
  return <Layout title="About">about</Layout>;
};
//если разкоммитить это, то появится проверка на авторизацию (странице about станет не доступна)
// AboutPage.isOnlyUser = true;

export default AboutPage;
