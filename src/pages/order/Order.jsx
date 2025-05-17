import orderImg from "../../assets/shop/banner2.jpg";
import Cover from "../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useFetch from "../../hooks/useFetch";
import FoodCard from "../../components/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";

const Order = () => {
  const categories = ['salad','pizza','soup', 'dessert','drinks'];
  const {category} = useParams();
  const intIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(intIndex);

  useTitle("Order");

  const [data] = useFetch("menu.json");
  const desserts = data.filter((item) => item.category === "dessert");
  const salads = data.filter((item) => item.category === "salad");
  const soups = data.filter((item) => item.category === "soup");
  const pizzas = data.filter((item) => item.category === "pizza");
  const drinks = data.filter((item) => item.category === "drinks")

  return (
    <div className="">
      <Cover
        img={orderImg}
        title={"Order Food"}
        subtitle={"Delicious moments are just an order away"}
      />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab  items={salads} />
        </TabPanel>
        <TabPanel><OrderTab  items={pizzas} /></TabPanel>
        <TabPanel><OrderTab  items={soups} /></TabPanel>
        <TabPanel><OrderTab  items={desserts} /></TabPanel>
        <TabPanel><OrderTab  items={drinks} /></TabPanel>
      </Tabs>
    </div>
  );
};
export default Order;
