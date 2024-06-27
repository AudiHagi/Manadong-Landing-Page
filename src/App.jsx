import "./App.css";
import Popup from "reactjs-popup";
import Images from "./assets/Images/images.jsx";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Button from "./Components/Button";
import MenuCard from "./Components/MenuCard";
import PromoCard from "./Components/PromoCard";
import ReviewCard from "./Components/ReviewCard";
import LocationCard from "./Components/LocationCard";
import DetailMenuCard from "./Components/DetailMenuCard.jsx";

function App() {
  const menuItems = [
    {
      id: 1,
      image: Images.ayamRica,
      name: "Ayam Rica",
      detail: "Ayam pedas khas Manado",
      price: 50000,
      isNew: true,
    },
    {
      id: 2,
      image: Images.cumiHitam,
      name: "Cumi Hitam",
      detail: "Cumi dengan tinta hitam",
      price: 55000,
      isNew: false,
    },
    {
      id: 3,
      image: Images.cakalangTinorasak,
      name: "Cakalang Tinorasak",
      detail: "Ikan cakalang pedas",
      price: 60000,
      isNew: false,
    },
    {
      id: 4,
      image: Images.perkedelJagung,
      name: "Perkedel Jagung",
      detail: "Perkedel jagung manis",
      price: 65000,
      isNew: false,
    },
    {
      id: 5,
      image: Images.ayamWoku,
      name: "Ayam Woku",
      detail: "Ayam dengan bumbu woku",
      price: 70000,
      isNew: false,
    },
    {
      id: 6,
      image: Images.laukFrozen,
      name: "Lauk Frozen",
      detail: "Aneka lauk beku",
      price: 75000,
      isNew: false,
    },
    {
      id: 7,
      image: Images.cakalangRabe,
      name: "Cakalang Rabe",
      detail: "Ikan cakalang pedas",
      price: 80000,
      isNew: false,
    },
  ];
  const promoItems = [
    {
      image: Images.buy2Get1,
      promoName: "Buy 2 Get 1",
      promoDetail: "Buy 2 and get 1 free, applicable to select variants.",
    },
    {
      image: Images.diskon20,
      promoName: "Discount 20%",
      promoDetail:
        "Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50.000",
    },
    {
      image: Images.bundleDeal,
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
      reviewName: "A***a",
      reviewDetail:
        "Cakalangnya terbaikkkkkkkkkk, the best cakalang everrrrrrr",
    },
    {
      reviewName: "Nadia",
      reviewDetail:
        "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu banget kalo lg kepepet gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab >.<",
    },
  ];
  const locationItems = [
    {
      locationName: "Senopati, Petogongan",
      locationDetail:
        "Santa Modern Market, Lt.1, Blok CKS 5, Jl. Cipaku I No.1, Petogogan, Jakarta Selatan",
    },
    {
      locationName: "Kebun Jeruk / Tanjung Duren",
      locationDetail:
        "Komplek Ruko Greenville Maisonet Blok D Nomor 9, RT.7/RW.5, North Tanjung Duren, Jakarta Barat",
    },
    {
      locationName: "Food Plaza PIK",
      locationDetail:
        "Food Plaza PIK FMA-16, Kamal Muara, Penjaringan Jakarta Utara",
    },
    {
      locationName: "Kuningan - D'Kanteen",
      locationDetail: "D Kanteen, Jl. Komando Raya No.18, DKI Jakarta 12920",
    },
    {
      locationName: "Bintaro, Thelapan Square",
      locationDetail:
        "Jl. Jurang Mangu Bar. No.38, Kota Tangerang Selatan, Banten",
    },
    {
      locationName: "Gading Serpong",
      locationDetail:
        "Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading Serpong No.25, West Pakulonan, Kelapa Dua, Tangerang Regency, Banten 15810",
    },
    {
      locationName: "Cipete",
      locationDetail:
        "Jl. Cipete Raya No.74c, RW.3, Cipete Jakarta Selatan 12410",
    },
    {
      locationName: "Meteng",
      locationDetail: "Jl. H. Agus Salim No.60, Menteng, Jakarta Pusat 10350",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="bg-navbar sm:px-36 px-4">
        <Header />
      </div>

      <div>
        <Banner />
      </div>

      <div className="sm:px-36 py-8 px-4 ">
        <div className="mb-8">
          <h1 className="font-bold text-navbar text-start text-[24px]">
            <span className="border-b-4 border-b-manadong">Our</span> Menu
          </h1>
        </div>
        <div className="sm:grid-cols-5 grid grid-cols-1  gap-x-4 gap-y-4">
          {menuItems.map((menu) => (
            <Popup
              key={menu.id}
              trigger={
                <div className="justify-center flex">
                  <MenuCard
                    image={menu.image}
                    name={menu.name}
                    isNew={menu.isNew}
                  />
                </div>
              }
              modal
            >
              {(close) => (
                <div className="relative w-screen h-screen" onClick={close}>
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <DetailMenuCard
                      className="p-4 bg-white shadow-lg rounded-lg"
                      image={menu.image}
                      menuName={menu.name}
                      menuDetail={menu.detail}
                      menuPrice={menu.price}
                      onClick={close}
                    />
                  </div>
                </div>
              )}
            </Popup>
          ))}
        </div>
        <div className="py-5">
          <Button link="/OrderNow" isLight={true} />
        </div>
      </div>

      <div className="bg-pink h-full sm:grid-cols-3 sm:px-36 px-4 py-8 grid grid-cols-1 gap-4">
        <div className="flex items-center">
          <h1 className="font-bold text-navbar text-start text-[24px]">
            <span className="border-b-4 border-b-manadong">Pro</span>motion
          </h1>
        </div>
        <div className="sm:grid-cols-3 col-span-2 grid grid-cols-1 gap-4 items-start">
          {promoItems.map((promo) => (
            <PromoCard
              key={promo.id}
              image={promo.image}
              promoName={promo.promoName}
              promoDetail={promo.promoDetail}
            />
          ))}
        </div>
      </div>

      <div className="bg-lightBlue sm:px-36 py-8 px-4">
        <div className="mb-8">
          <h1 className="font-bold text-navbar text-start text-[24px]">
            <span className="border-b-4 border-b-manadong">Rev</span>iews
          </h1>
        </div>
        <div className="sm:grid-cols-3 grid grid-cols-1 gap-4">
          {reviewItems.map((review) => (
            <ReviewCard
              key={review.id}
              reviewName={review.reviewName}
              reviewDetail={review.reviewDetail}
            />
          ))}
        </div>
        <div className="mt-8">
          <button className="w-3 h-3 rounded-full bg-navbar"></button>
          <button className="w-3 h-3 rounded-full bg-white ml-2"></button>
          <button className="w-3 h-3 rounded-full bg-white ml-2"></button>
          <button className="w-3 h-3 rounded-full bg-white ml-2"></button>
        </div>
      </div>

      <div className="sm:px-36 py-8 px-4">
        <div className="mb-8">
          <h1 className="font-bold text-navbar text-start text-[24px]">
            <span className="border-b-4 border-b-manadong">Loc</span>ations
          </h1>
        </div>
        <div className="sm:grid-cols-3 grid grid-cols-1 gap-4">
          {locationItems.map((location) => (
            <LocationCard
              key={location.id}
              locationName={location.locationName}
              locationDetail={location.locationDetail}
            />
          ))}
        </div>
      </div>

      <div className="bg-navbar sm:px-36 px-4">
        <Footer />
      </div>
    </div>
  );
}

export default App;
