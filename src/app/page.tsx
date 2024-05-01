import Image from "next/image";
import BannerOne from "../components/BannerOne";
import Header from "../components/Header";
import StreetWear from "../components/StreetWear";
import Feature from "../components/Feature";
import SubFeature from "../components/SubFeature";
import { TbShoppingCart } from "react-icons/tb";
import ProductsComponent from "../components/ProductsComponent";
import AllProdBtn from "../components/AllProdBtn";
import Category from "../components/category";
import BannerTwo from "../components/BannerTwo";
export default function Home() {
  return (
    <main style={{ backgroundColor: "white" }}>
      <Feature>
        <SubFeature
          icon={<TbShoppingCart size={34}></TbShoppingCart>}
          title='Free Delivery'
          content={"lorem adwadwdwad"}
        ></SubFeature>
        <SubFeature
          icon={<TbShoppingCart size={34}></TbShoppingCart>}
          title='Free Delivery'
          content={"lorem adwadwdwad"}
        ></SubFeature>
        <SubFeature
          icon={<TbShoppingCart size={34}></TbShoppingCart>}
          title='Free Delivery'
          content={"lorem adwadwdwad"}
        ></SubFeature>
        <SubFeature
          icon={<TbShoppingCart size={34}></TbShoppingCart>}
          title='Free Delivery'
          content={"lorem adwadwdwad"}
        ></SubFeature>
      </Feature>
      <ProductsComponent>
        <AllProdBtn></AllProdBtn>
      </ProductsComponent>
      <Category></Category>
    </main>
  );
}
