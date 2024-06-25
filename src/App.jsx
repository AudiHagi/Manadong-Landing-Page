import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Button from "./Components/Button";
import MenuCard from "./Components/MenuCard";
import PromoCard from "./Components/PromoCard";
import ReviewCard from "./Components/ReviewCard";
import LocationCard from "./Components/LocationCard";
import Images from "./assets/Images/images.jsx";

function App() {
  const menuItems = [
    { image: Images.ayamRica, name: "Ayam Rica" },
    { image: Images.cumiHitam, name: "Cumi Hitam" },
    { image: Images.cakalangTinorasak, name: "Cakalang Tinorasak" },
    { image: Images.perkedelJagung, name: "Perkedel Jagung" },
    { image: Images.ayamWoku, name: "Ayam Woku" },
    { image: Images.laukFrozen, name: "Lauk Frozen" },
    { image: Images.cakalangRabe, name: "Cakalang Rabe" },
  ];
  const promoItems = [
    {
      image: Images.ayamRica,
      promoName: "Buy 2 Get 1",
      promoDetail: "Buy 2 and get 1 free, applicable to select variants.",
    },
    {
      image: Images.ayamWoku,
      promoName: "Discount 20%",
      promoDetail:
        "Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50.000",
    },
    {
      image: Images.cakalangTinorasak,
      promoName: "Bundle Deal",
      promoDetail:
        "Purchase Ayam Woku and Ayam Rica can save 30% on the total cost.",
    },
  ];
  const reviewItems = [
    {
      reviewName: "Jennifer",
      reviewDetail:
        "Such a good value for your money. Really good Manadonese food. Well recommended!Such a good value for your money. Really good Manadonese food. Well recommended!",
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
          {menuItems.map((menu) => (
            <MenuCard image={menu.image} name={menu.name} />
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
            {promoItems.map((promo) => (
              <PromoCard
                image={promo.image}
                promoName={promo.promoName}
                promoDetail={promo.promoDetail}
              />
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
            {reviewItems.map((review) => (
              <ReviewCard
                reviewName={review.reviewName}
                reviewDetail={review.reviewDetail}
              />
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
          {locationItems.map((location) => (
            <LocationCard
              locationName={location.name}
              locationDetail={location.locationDetail}
            />
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
