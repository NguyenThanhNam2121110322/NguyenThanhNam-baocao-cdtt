const product_detail = () => (
    <div class="container">


        <div class="row">
            <aside class="col-md-6">
                <div class="card">
                    <article class="gallery-wrap">
                        <div class="img-big-wrap">
                            <div> <a href="#"><img src="images/items/15.jpg" /></a></div>
                        </div>
                        <div class="thumbs-wrap">
                            <a href="#" class="item-thumb"> <img src="images/items/15.jpg" /></a>
                            <a href="#" class="item-thumb"> <img src="images/items/15-1.jpg" /></a>
                            <a href="#" class="item-thumb"> <img src="images/items/15-2.jpg" /></a>
                            <a href="#" class="item-thumb"> <img src="images/items/15-1.jpg" /></a>
                        </div>
                    </article>
                </div>
            </aside>
            <main class="col-md-6">
                <article class="product-info-aside">

                    <h2 class="title mt-3">Hot sale unisex New Design Shoe </h2>

                    <div class="rating-wrap my-3">
                        <ul class="rating-stars">
                            <li style="width:80%" class="stars-active">
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </li>
                            <li>
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </li>
                        </ul>
                        <small class="label-rating text-muted">132 reviews</small>
                        <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 orders </small>
                    </div>

                    <div class="mb-3">
                        <var class="price h4">USD 465,00</var>
                        <span class="text-muted">USD 562.65 incl. VAT</span>
                    </div>

                    <p>Compact sport shoe for running, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat </p>


                    <dl class="row">
                        <dt class="col-sm-3">Manufacturer</dt>
                        <dd class="col-sm-9"><a href="#">Great textile Ltd.</a></dd>

                        <dt class="col-sm-3">Article number</dt>
                        <dd class="col-sm-9">596 065</dd>

                        <dt class="col-sm-3">Guarantee</dt>
                        <dd class="col-sm-9">2 year</dd>

                        <dt class="col-sm-3">Delivery time</dt>
                        <dd class="col-sm-9">3-4 days</dd>

                        <dt class="col-sm-3">Availabilty</dt>
                        <dd class="col-sm-9">in Stock</dd>
                    </dl>

                    <div class="form-row  mt-4">
                        <div class="form-group col-md flex-grow-0">
                            <div class="input-group mb-3 input-spinner">
                                <div class="input-group-prepend">
                                    <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                </div>
                                <input type="text" class="form-control" value="1" />
                                <div class="input-group-append">
                                    <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-md">
                            <a href="#" class="btn  btn-primary">
                                <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                            </a>
                            <a href="#" class="btn btn-light">
                                <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                            </a>
                        </div>
                    </div>

                </article>
            </main>
        </div>



    </div>
);
export default product_detail;