import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Easiest Countries to Get a Visa",
      excerpt:
        "Discover the countries where obtaining a visa is straightforward and hassle-free. Start planning your next trip today!",
      image: "https://i.ibb.co.com/85krCtT/blog1.jpg",
      date: "January 5, 2025",
    },
    {
      id: 2,
      title: "How to Track Your Visa Application Online",
      excerpt:
        "Learn how to track your visa status seamlessly using our Visa Navigator platform. Step-by-step guide included!",
      image: "https://i.ibb.co.com/LrYBknQ/blog2.jpg",
      date: "January 3, 2025",
    },
    {
      id: 3,
      title: "Visa Fee Waivers: Everything You Need to Know",
      excerpt:
        "Understand the latest updates on visa fee waivers and how they could benefit your travel plans.",
      image: "https://i.ibb.co.com/80gp5HM/blog3.jpg",
      date: "January 1, 2025",
    },
    {
        "id": 4,
        "title": "Common Mistakes to Avoid in Visa Applications",
        "excerpt": "Learn about the most common mistakes applicants make and how to avoid them for a smooth visa process.",
        "image": "https://i.ibb.co.com/m8KCRq1/blog4.jpg",
        "date": "January 6, 2025"
      },
      {
        "id": 5,
        "title": "Best Time to Apply for a Tourist Visa",
        "excerpt": "Discover the best time to apply for a tourist visa based on your destination and travel plans.",
        "image": "https://i.ibb.co.com/jTpLbD5/blog5.jpg",
        "date": "January 7, 2025"
      },
      {
        "id": 6,
        "title": "New Visa Policies in 2025: What You Need to Know",
        "excerpt": "Stay updated with the latest changes in visa policies worldwide and plan your travel accordingly.",
        "image": "https://i.ibb.co.com/Wc1RYjb/blog6.jpg",
        "date": "January 8, 2025"
      }
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Latest Updates & Blog Posts</h2>
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <div key={post.id} className="px-4">
            <div className=" rounded-lg shadow-lg overflow-hidden h-[500px] flex flex-col">
              <div className="h-64 w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm mb-4">{post.date}</p>
                  <p className="mb-4">{post.excerpt}</p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition mt-auto">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blog;
