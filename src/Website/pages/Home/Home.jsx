import { FaArrowRight } from "react-icons/fa";
import HomeSlider from "../../components/Slider/HomeSlider";
import TopProduct from "../../components/TopProducts/TopProduct";
import CategorySlider from "../../components/catSlider/CategorySlider";
import Product from "../../components/product/Product";

import banner1 from "../../assets/img/banner/banner-1.png";
import banner2 from "../../assets/img/banner/banner-2.png";
import banner3 from "../../assets/img/banner/banner-3.png";
import banner4 from "../../assets/img/banner/banner-4.png";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import data from "../../data/data";

import "./Home.css";

const Home = () => {
  const [prodData, setProdData] = useState([]);
  const [catArray, setCatArray] = useState([]);
  const [activeTab, setActiveTab] = useState();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]);
  const [bestSells, setBestSells] = useState([]);

  // Fetching all product data
  useEffect(() => {
    setTimeout(() => {
      setProdData(data.productData);
    }, 3000);
  }, []);

  // Getting all categories
  useEffect(() => {
    if (prodData.length) {
      const uniqueCategories = [...new Set(prodData.flatMap(item => item.items?.map(subItem => subItem.cat_name) || []))];
      setCatArray(uniqueCategories);
      setActiveTab(uniqueCategories[0]);
    }
  }, [prodData]);

  // Filtering products by active category
  useEffect(() => {
    if (prodData.length && activeTab) {
      const filteredProducts = prodData.flatMap(item =>
        item.items?.flatMap(subItem =>
          subItem.cat_name === activeTab
            ? subItem.products.map(product => ({ ...product, parentCatName: item.cat_name, subCatName: subItem.cat_name }))
            : []
        ) || []
      );
      setActiveTabData(filteredProducts);
    }
  }, [prodData, activeTab]);

  // Getting best-selling products from Electronics category
  useEffect(() => {
    const bestSellingProducts = prodData.flatMap(item =>
      item.cat_name === "Electronics"
        ? item.items.flatMap(subItem => subItem.products || [])
        : []
    );
    setBestSells(bestSellingProducts);
    window.scrollTo(0, 0);
  }, [prodData]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 3000,
  };

  return (
    <>
      <HomeSlider />
      <CategorySlider />

      {/* Banner Section */}
      <div className="banner-section my-5">
        <div className="container-fluid">
          <div className="row">
            {[banner1, banner2, banner3].map((banner, index) => (
              <div className={`col-sm-6 col-md-6 col-lg-${index === 2 ? "4" : "4"} banner-part`} key={index}>
                <div className="banner-img">
                  <img src={banner} alt={`Banner ${index + 1}`} />
                  <div className="banner-text">
                    <h4 className="banner-title">
                      {index === 0 && "Everyday Fresh & Clean with Our Products"}
                      {index === 1 && "Make your Breakfast Healthy and Easy"}
                      {index === 2 && "The Best Organic Products Online"}
                    </h4>
                    <a href="#" className="button-shop">
                      Shop Now <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className="popular-products my-5">
        <div className="container-fluid">
          <div className="tab-header d-flex align-items-center justify-content-between popular-productsTileWrap">
            <h3 className="res-full">Popular Products</h3>
            <ul className="list list-inline custom-ul res-full">
              {catArray.map((item, index) => (
                <li className="list-inline-item" key={index}>
                  <a
                    className={`${activeTabIndex === index ? "active" : ""}`}
                    onClick={() => {
                      setActiveTab(item);
                      setActiveTabIndex(index);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="row product-row my-4">
            {activeTabData.map((item, index) => (
              <div className="item" key={index}>
                <Product tag={item.type} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Best Products */}
      <div className="popular-products daily-sells my-5">
        <div className="container-fluid">
          <div className="tab-header d-flex align-items-center justify-content-between">
            <h3>Daily Best Sells</h3>
          </div>

          <div className="row my-4">
            <div className="col-md-3">
              <div className="banner-image my-banner">
                <img src={banner4} alt="Daily Best Sells" className="w-100" style={{ borderRadius: "20px" }} />
                <h2>Bring nature into your home</h2>
                <a href="#" className="button-shop-primary">
                  Shop Now <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <Slider {...sliderSettings} className="product-slider-main">
                {bestSells.map((item, index) => (
                  <div className="item" key={index}>
                    <Product tag={item.type} item={item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="topProducts my-3">
        <div className="container-fluid">
          <div className="row">
            {["Top Selling", "Trending Products", "Recently added", "Top Rated"].map((title, index) => (
              <div className="col-sm-6 col-md-3 custom-collum" key={index}>
                <TopProduct title={title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
