import "./Reviews.css";
import bernardReview from "../assets/bernardreviewimage.jpg";
import reviewStar from "../assets/star-fill.svg";
import jakeReview from "../assets/jake.jpg";
import jamesReview from "../assets/james.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Reviews = () => {
  return (
    <div className="reviews">
      <h2 className="reviews__title">
        WHAT CUSTOMERS <br></br>SAY
      </h2>
      <div className="mySwiper">
        <div className="reviews__card">
          <img src={bernardReview} alt="image" className="reviews__image" />

          <div className="reviews__rating">
            <div className="reviews__stars">
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
            </div>
          </div>
          <p className="reviews__testimonial">
            "Fast, thorough, and efficient. Truly expansive, I have hired them
            for several different things. Excellent service!"
          </p>
        </div>
        <div className="reviews__card">
          <img src={jakeReview} alt="image" className="reviews__image" />

          <div className="reviews__rating">
            <div className="reviews__stars">
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
            </div>
          </div>
          <p className="reviews__testimonial">
            "The team helped us with a last minute move late in the afternoon.
            They are truly the team for any job you may need."
          </p>
        </div>
        <div className="reviews__card">
          <img src={jamesReview} alt="image" className="reviews__image" />

          <div className="reviews__rating">
            <div className="reviews__stars">
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
              <img src={reviewStar} alt="star" className="reviews__star" />
            </div>
          </div>

          <p className="reviews__testimonial">
            "These guys worked hard. Very professional, I highly recommend."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
