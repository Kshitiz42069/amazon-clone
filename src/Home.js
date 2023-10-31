import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='Home'>
        <div className="home_container">
            <img className='home_image' src="https://m.media-amazon.com/images/I/71-w4U1QlhL._SX3000_.jpg" alt="amazon_banner" />
            <div className="home_row">
                <Product 
                    id={123456}
                    title={'Apple iPhone 14 (512 GB) - Starlight'}
                    image={'https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UY436_FMwebp_QL65_.jpg'}
                    price={97999}
                    rating={5}
                />
                <Product 
                    id={123457}
                    title={'Samsung Galaxy S22 5G (Phantom White, 8GB RAM, 128GB Storage)'}
                    image={'https://m.media-amazon.com/images/I/71HUnJvHsbL._AC_UY436_FMwebp_QL65_.jpg'}
                    price={62999}
                    rating={4}
                />
                <Product 
                    id={123425}
                    title={'Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage)'}
                    image={'https://m.media-amazon.com/images/I/71PzXKXjz6L._AC_UY436_FMwebp_QL65_.jpg'}
                    price={94999}
                    rating={4}
                />
                <Product 
                    id={123756}
                    title={'MI 10T 5G Cosmic Black, 8GB RAM, 128GB Storage'}
                    image={'https://m.media-amazon.com/images/I/71phm03oYhL._AC_UY436_FMwebp_QL65_.jpg'}
                    price={20999}
                    rating={3}
                />
            </div>
            <div className="home_row">
                <Product 
                    id={121456}
                    title={'Dell Alienware x16 Gaming Laptop, Intel Core i9 13900HK/32GB/2TB SSD/NVIDIA RTX 4090 16GB GDDR6'}
                    image={'https://m.media-amazon.com/images/I/61Zwojyjm5L._AC_UY436_FMwebp_QL65_.jpg'}
                    price={455879}
                    rating={5}
                />
                <Product 
                    id={323456}
                    title={'Razer Basilisk V3 Pro Customizable Wireless Gaming Mouse- Classic Black'}
                    image={'https://m.media-amazon.com/images/I/61Ghn2XKJoL._SX679_.jpg'}
                    price={13899}
                    rating={4}
                />
                <Product 
                    id={123459}
                    title={'Razer RZ04-02980200-R3M1 RGB Kitty Ears Chroma USB Gaming Wired Over Ear Headphones with Mic'}
                    image={'https://m.media-amazon.com/images/I/71yKwvJeqXL._SX679_.jpg'}
                    price={16699}
                    rating={5}
                />
            </div>
            <div className="home_row">
                <Product 
                    id={129456}
                    title={'Samsung 163 cm (65 inches) The Frame Series 4K Smart QLED TV QA65LS03BAKLXL (Black)'}
                    image={'https://m.media-amazon.com/images/I/91Fag2ehZPL._SX679_.jpg'}
                    price={129999}
                    rating={4}
                />
                <Product 
                    id={123499}
                    title={'MI 125 cm (50 inches) X Series 4K Ultra HD Smart Android LED TV L50M7-A2IN (Black)'}
                    image={'https://m.media-amazon.com/images/I/81xT3no1+6L._AC_UY436_FMwebp_QL65_.jpg'}
                    price={34999}
                    rating={3}
                />
            </div>
            <div className="home_row">
                <Product
                    id={123009}
                    title={'FUR JADEN Brown Textured Leatherette Stylish & Spacious Weekender'}
                    image={'https://m.media-amazon.com/images/I/71-8gqDAalL._AC_UL800_FMwebp_QL65_.jpg'}
                    price={899}
                    rating={4}
                />
                <Product
                    id={122346}
                    title={'American Tourister Nylon 65 cms Blue Travel Duffle (40X (0) 01 009)'}
                    image={'https://m.media-amazon.com/images/I/61A1kzMhPiL._AC_UL800_FMwebp_QL65_.jpg'}
                    price={2099}
                    rating={5}
                />
                <Product
                    id={132156}
                    title={'Storite Nylon 25 Cms Small Imported Lightweight Waterproof Duffle'}
                    image={'https://m.media-amazon.com/images/I/81dlygHx3PL._AC_UL800_FMwebp_QL65_.jpg'}
                    price={1099}
                    rating={5}
                />
            </div>
        </div>
    </div>
  )
}

export default Home