// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './style.css';

function Shopping_cart(){
        return (
            <>
                <section id="page-header">
                    <p>Rời đi với 1 thông báo chúng tôi yêu bạn từ tận trái tim</p>
                </section>
                {/* ----------------------------------------- */}
                {/* <section id="cart" className="section-p1">
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>Xóa</td>
                                <td>Ảnh</td>
                                <td>Sản phẩm</td>
                                <td>Giá</td>
                                <td>Số lượng</td>
                                <td>Tổng số</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#"><FontAwesomeIcon icon={faTimesCircle}/></a></td>
                                <td><img src={require("../../assets/img/products/f1.jpg")} alt="" /></td>
                                <td>Áo thun hoạt họa</td>
                                <td>150.000 vnđ</td>
                                <td><input type="number" name="" id="" defaultValue="1" /></td>
                                <td>150.000 vnđ</td>
                            </tr>
                            <tr>
                                <td><a href="#"><FontAwesomeIcon icon={faTimesCircle}/></a></td>
                                <td><img src={require("../../assets/img/products/f1.jpg")} alt="" /></td>
                                <td>Áo thun hoạt họa</td>
                                <td>150.000 vnđ</td>
                                <td><input type="number" name="" id="" defaultValue="1" /></td>
                                <td>150.000 vnđ</td>
                            </tr>
                            <tr>
                                <td><a href="#"><FontAwesomeIcon icon={faTimesCircle}/></a></td>
                                <td><img src={require("../../assets/img/products/f1.jpg")} alt="" /></td>
                                <td>Áo thun hoạt họa</td>
                                <td>150.000 vnđ</td>
                                <td><input type="number" name="" id="" defaultValue="1" /></td>
                                <td>150.000 vnđ</td>
                            </tr>
                        </tbody>
                    </table>
                </section> */}
                {/* --------------------------------------- */}
                <section id="cart-add" className="section-p1">
                    <div id="coupon">
                        <h3>Nộp phiếu</h3>
                        <div>
                            <input type="text" placeholder="Nhập vào phiếu của bạn" name="" id="" />
                            <button className="normal">Nộp</button>
                        </div>
                    </div>
                    <div id="subtotal">
                        <h3>Tổng các giỏ hàng</h3>
                        <table>
                            <tr>
                                <td>Tổng giỏ hàng</td>
                                <td> 200.000 vnđ</td>
                            </tr>
                            <tr>
                                <td>Đang giao</td>
                                <td> Miễn phí</td>
                            </tr>
                            <tr>
                                <td><strong>Tổng</strong></td>
                                <td> 350.000 vnđ</td>
                            </tr>
                        </table>
                        <button className="normal"> nhấn để kiểm tra</button>
                    </div>
                </section>
                {/* --------------------------------------- */}
                <section id="newsletter" className="section-p1 section-m1">
                    <div className="newstext">
                        <h4> Đăng ký để nhận thông tin mới</h4>
                        <p> nhập email để cập nhật thông tin từ chúng tôi và <span>ưu đãi đặc biệt</span> </p>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="your email address" />
                        <button className="normal">Đăng ký</button>
                    </div>
                </section>
                {/* <script src={require("../../assets/js/script")}></script> */}
            </>
        );
    }
export default Shopping_cart;