import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Hero = () => {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '15%',
            centerMode: true,
            prevArrow: (
                  <button className="slick-prev">
                        <i class="fa-regular fa-arrow-left"></i>
                  </button>
            ),
            nextArrow: (
                  <button className="slick-next">
                        <i class="fa-regular fa-arrow-right"></i>
                  </button>
            )
      };

      return (
            <>
                  <div className='HeroSlider'>


                        <Slider {...settings}>
                              <div className='singe_slide'
                              >
                                    <img src="https://img.freepik.com/free-photo/team-volunteers-holding-donation-boxes-looking-camera_637285-10775.jpg?w=1060&t=st=1689575680~exp=1689576280~hmac=e8944585ee82f3cb2967a9f316f6c0d9fcc68e54ed3aa942ce8c067aad4de50b" alt="" />
                                    <div class="content_wrapper">
                                          <h1>Empowering Communities for Change</h1>
                                          <p>Join us in making a difference in the world</p>
                                    </div>
                              </div>

                              <div className='singe_slide'
                              >
                                    <img src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                                    <div class="content_wrapper">
                                          <h1>Creating Opportunities for a Better Tomorrow</h1>
                                          <p>Together, we can build a brighter future</p>
                                    </div>
                              </div>

                              <div className='singe_slide'
                              >
                                    <img src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                                    <div class="content_wrapper">
                                          <h1>Supporting Education for Underprivileged Children</h1>
                                          <p>Providing hope and knowledge to the next generation</p>
                                    </div>
                              </div>

                              <div className='singe_slide'
                              >
                                    <img src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div class="content_wrapper">
                                          <h1>Protecting the Environment for Future Generations</h1>
                                          <p>Taking action for a sustainable and greener planet</p>
                                    </div>
                              </div>

                              <div className='singe_slide'
                              >
                                    <img src="https://digitallearning.eletsonline.com/wp-content/uploads/2014/06/Women-technical-education.jpg" alt="" />
                                    <div class="content_wrapper">
                                          <h1>Empowering Women through Education and Skills</h1>
                                          <p>Unlocking the potential of women for a better society</p>
                                    </div>
                              </div>
                        </Slider>

                  </div>
            </>
      );
};

export default Hero;