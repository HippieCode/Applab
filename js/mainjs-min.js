$(function(){$(".features__slider").slick({infinite:!0,dots:!1,arrows:!1,slidesToShow:5,slidesToScroll:3,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:830,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:580,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:400,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]}),$(".extra-btn").on("click",function(){$(".extra-btn").toggleClass("extra__btn-active"),$(".extra__cards-item").toggleClass("extra__cards-item-active")}),$(".questions__tabs-item").on("click",function(){$(this).addClass("questions__tabs-active"),$($(this).parent().siblings().find("li")).removeClass("questions__tabs-active")}),$(".questions__tabs-item").on("click",function(e){e.preventDefault(),$($(this).siblings()).removeClass("questions__tabs-active"),$($(this).parent().siblings().find("li")).removeClass("questions__tabs-active"),$(this).addClass("questions__tabs-active"),$($(this).attr("href")).addClass("questions__tabs-active")}),$(".header__mobile-open").on("click",function(){$(".header").addClass("nav__active"),$(".header__mobile-open").addClass("header__mobile-close"),$(".header__mobile-close").on("click",function(){$(".header").toggleClass("nav__active"),$(".header__mobile-open").toggleClass("header__mobile-close")})}),$(".clients__map-slider-clients").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,prevArrow:$(".prev"),nextArrow:$(".next")}),$("#rateYo").rateYo({rating:5,starWidth:"22px",ratedFill:"#ffcc00",spacing:"5px"}),$("#rateYo2").rateYo({rating:5,starWidth:"22px",ratedFill:"#ffcc00",spacing:"5px"}),$("#rateYo3").rateYo({rating:5,starWidth:"22px",ratedFill:"#ffcc00",spacing:"5px"}),$("#rateYo4").rateYo({rating:5,starWidth:"22px",ratedFill:"#ffcc00",spacing:"5px"}),$("#rateYo5").rateYo({rating:5,starWidth:"22px",ratedFill:"#ffcc00",spacing:"5px"}),$("#rateYo6").rateYo({rating:5,starWidth:"22px",ratedFill:"#ffcc00",spacing:"5px"}),$("#rateYo7").rateYo({rating:5,starWidth:"22px",ratedFill:"#ffcc00",spacing:"5px"})});