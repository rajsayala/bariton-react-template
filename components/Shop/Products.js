import React from "react";
import Link from "next/link";
import Image from "next/image";

const Products = () => {
  return (
    <>
      <div className="shop-area ptb-110">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7 col-sm-6">
                <div className="woocommerce-result-count">
                  <p>Showing 1-8 of 14 results</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="woocommerce-topbar-ordering">
                  <select className="form-select">
                    <option value="1">Default sorting</option>
                    <option value="2">Sort by popularity</option>
                    <option value="0">Sort by average rating</option>
                    <option value="3">Sort by latest</option>
                    <option value="4">Sort by price: low to high</option>
                    <option value="5">Sort by price: high to low</option>
                    <option value="6">Sort by new</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products">
                    <Image
                      src="/images/shop/product1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/product-hover1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="fas fa-cart-plus"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">White Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$8.50</span>
                    <span className="old">$12.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products">
                    <Image
                      src="/images/shop/product2.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/product-hover2.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="fas fa-cart-plus"></i>
                  </button>

                  <div className="sale-btn">Sale!</div>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">Red Side Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$12.50</span>
                    <span className="old">$20.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products">
                    <Image
                      src="/images/shop/product3.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/product-hover3.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="fas fa-cart-plus"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">Book With Pen</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$8.50</span>
                    <span className="old">$12.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products">
                    <Image
                      src="/images/shop/product4.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/product-hover4.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="fas fa-cart-plus"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">Drop Side Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$7.50</span>
                    <span className="old">$11.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products">
                    <Image
                      src="/images/shop/product5.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/product-hover5.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="fas fa-cart-plus"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">Color Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$10.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products">
                    <Image
                      src="/images/shop/product6.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/product-hover6.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="fas fa-cart-plus"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">Last Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$15.00</span>
                    <span className="old">$20.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>
                <a href="#" className="page-numbers">
                  1
                </a>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="page-numbers">
                  4
                </a>
                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
