import image1 from "../../assets/images/slide-01.jpg"
import image2 from "../../assets/images/slide-02.jpg"
import image3 from "../../assets/images/slide-03.jpg"

function Slider() {
	return (

		<>



			{/* <section class="section-slide">
				<div class="wrap-slick1">
					<div class="slick1">
						<div class="item-slick1" style={{ backgroundImage: `url(${image1})` }}>
							<div class="container h-full">
								<div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
									<div class="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">
										<span class="ltext-101 cl2 respon2">
											Women Collection 2018
										</span>
									</div>

									<div class="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">
										<h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
											NEW SEASON
										</h2>
									</div>

									<div class="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">
										<a href="product.html" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
											Shop Now
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="item-slick1" style={{ backgroundImage: `url(${image2})` }}>
							<div class="container h-full">
								<div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
									<div class="layer-slick1 animated visible-false" data-appear="rollIn" data-delay="0">
										<span class="ltext-101 cl2 respon2">
											Men New-Season
										</span>
									</div>

									<div class="layer-slick1 animated visible-false" data-appear="lightSpeedIn" data-delay="800">
										<h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
											Jackets & Coats
										</h2>
									</div>

									<div class="layer-slick1 animated visible-false" data-appear="slideInUp" data-delay="1600">
										<a href="product.html" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
											Shop Now
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="item-slick1" style={{ backgroundImage: `url(${image3})` }}>
							<div class="container h-full">
								<div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
									<div class="layer-slick1 animated visible-false" data-appear="rotateInDownLeft" data-delay="0">
										<span class="ltext-101 cl2 respon2">
											Men Collection 2018
										</span>
									</div>

									<div class="layer-slick1 animated visible-false" data-appear="rotateInUpRight" data-delay="800">
										<h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
											New arrivals
										</h2>
									</div>

									<div class="layer-slick1 animated visible-false" data-appear="rotateIn" data-delay="1600">
										<a href="product.html" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
											Shop Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			
			<section className="myslider">
				<div
					id="carouselExampleCaptions"
					class="carousel slide"
					data-bs-ride="carousel"
				>
					<div class="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="0"
							class="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
					</div>
					<div class="carousel-inner">

						<div class="carousel-item active" >
							<img src={"../../assets/images/slide-01.jpg"} class="d-block w-100" alt="..." height={450} />
							<div class="carousel-caption d-none d-md-block">
							</div>
						</div>
						<div class="carousel-item active" >
							<img src={"../../assets/images/slide-02.jpg"} class="d-block w-100" alt="..." height={450} />
							<div class="carousel-caption d-none d-md-block">
							</div>
						</div><div class="carousel-item active" >
							<img src={"../../assets/images/slide-03.jpg"} class="d-block w-100" alt="..." height={450} />
							<div class="carousel-caption d-none d-md-block">
							</div>
						</div>

						
					</div>


				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			
		</section >



		</>

	);
}
export default Slider;