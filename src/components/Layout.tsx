import Header from "./Header";
import BannerTwo from "./BannerTwo";
import BannerOne from "./BannerOne";
import StreetWear from "./StreetWear";
export default function Layout({ children }: { children: any }) {
  return (
    <>
      <BannerOne>
        <Header></Header>
        <StreetWear></StreetWear>
      </BannerOne>
      <main>{children}</main>
      <BannerTwo />
    </>
  );
}
