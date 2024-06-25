import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Button from "./Components/Button";
import MenuCard from "./Components/MenuCard";
import PromoCard from "./Components/PromoCard";
import ReviewCard from "./Components/ReviewCard";
import LocationCard from "./Components/LocationCard";
import ayamRica from "./assets/Images/image 16.png";
import ayamWoku from "./assets/Images/Ayam Woku.png";
import cakalangTinorasak from "./assets/Images/Cakalang Tinorasak.png";
import cumiHitam from "./assets/Images/Cumi Hitam.png";
import perkedelJagung from "./assets/Images/image 17.png";
import laukFrozen from "./assets/Images/image 19.png";
import cakalangRabe from "./assets/Images/image 21.png";

function App() {
  const menuItems = [
    { image: ayamRica, name: "Ayam Rica" },
    { image: ayamWoku, name: "Ayam Woku" },
    { image: cakalangTinorasak, name: "Cakalang Tinorasak" },
    { image: cumiHitam, name: "Cumi Hitam" },
    { image: perkedelJagung, name: "Perkedel Jagung" },
    { image: laukFrozen, name: "Lauk Frozen" },
    { image: cakalangRabe, name: "Cakalang Rabe" },
  ];
  const promoItems = [
    {
      image: ayamRica,
      promoName: "Buy 2 Get 1",
      promoDetail: "Buy 2 and get 1 free, applicable to select variants.",
    },
    {
      image: ayamWoku,
      promoName: "Discount 20%",
      promoDetail:
        "Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50.000",
    },
    {
      image: cakalangTinorasak,
      promoName: "Bundle Deal",
      promoDetail:
        "Purchase Ayam Woku and Ayam Rica can save 30% on the total cost.",
    },
  ];
  const reviewItems = [
    {
      reviewName: "Jennifer",
      reviewDetail:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      reviewName: "A**********a",
      reviewDetail: "Cakalangnya terbaikkkkkkkk, the best cakalang everrrr",
    },
    {
      reviewName: "Nadia",
      reviewDetail:
        "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESSS... beres deh tanggung jawab",
    },
  ];
  const locationItems = [
    {
      locationName: "Senopati, Petogongan",
      locationDetail:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      locationName: "Kebun Jeruk / Tanjung Duren",
      locationDetail:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      locationName: "Food Plaza PIK",
      locationDetail:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      locationName: "Kuningan - D'Kanteen",
      locationDetail:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      locationName: "Bintaro, Thelapan Square",
      locationDetail:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      locationName: "Gading Serpong",
      locationDetail:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      locationName: "Cipete",
      locationDetail:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      locationName: "Meteng",
      locationDetail:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="bg-navbar px-8 md:px-14 lg:px-36">
        <Header />
      </div>

      <div>
        <Banner />
      </div>

      <div className="py-8 px-8 md:px-14 lg:px-36">
        <div className="mb-4">
          <h1 className="font-bold text-navbar text-start text-2xl">
            <span className="underline decoration-manadong">Our</span> Menu
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {menuItems.map((menuItem) => (
            <MenuCard key={menuItem.name} {...menuItem} />
          ))}
        </div>
        <div className="py-5">
          <Button link="/OrderNow" />
        </div>
      </div>

      <div className="flex bg-pink h-full px-8 md:px-14 lg:px-36">
        <div className="w-1/2 flex items-center">
          <h1 className="font-bold text-navbar text-start text-2xl">
            <span className="underline decoration-manadong">Pro</span>motion
          </h1>
        </div>
        <div>
          <div>
            {promoItems.map((promoItem) => (
              <PromoCard key={promoItem.name} {...promoItem} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-lightblue py-8 px-8 md:px-14 lg:px-36">
        <div className="mb-4">
          <h1 className="font-bold text-navbar text-start text-2xl">
            <span className="underline decoration-manadong">Rev</span>iews
          </h1>
        </div>
        <div>
          <div className="">
            {reviewItems.map((reviewItem) => (
              <ReviewCard key={reviewItem.name} {...reviewItem} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 px-8 md:px-14 lg:px-36">
        <div className="mb-4">
          <h1 className="font-bold text-navbar text-start text-2xl">
            <span className="underline decoration-manadong">Loc</span>ations
          </h1>
        </div>
        <div className="">
          {locationItems.map((locationItem) => (
            <LocationCard key={locationItem.name} {...locationItem} />
          ))}
        </div>
      </div>

      <div className="bg-navbar px-8 md:px-14 lg:px-36">
        <Footer />
      </div>
    </div>
  );
}

export default App;
