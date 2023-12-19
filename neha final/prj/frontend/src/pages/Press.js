import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Press = () => {
    const [activeIndex, setActiveIndex] = useState(0); // State to track active element index

    const handleItemClick = (index) => {
        setActiveIndex(index); // Update active element index on click
    };

    // Array to be mapped for generating cards
    const cardArray = [0, 1, 2, 3, 4, 5];

    // Array of news articles corresponding to each category
    const newsArticles = [
        {
            category: 'Environment',
            key: 2,
            title: 'Tree Plantation',
            date: '06 June 2019',
            image: "https://cardinalgraciashighschool.org/wp-content/uploads/2017/07/WhatsApp-Image-2017-07-05-at-06.26.54.jpeg",
            content: 'Tree Plantation Quotes   Wings for Dream is an NGO that aims to create a better environment for future generations. …',

        },
        
        {
            category: 'Women Livelihood',
            key: 0,
            title: 'ARASKUPA PROCESSING UNIT: A BLESSING IN DISGUISE',
            date: '03 Jul, 2023',
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbJIlcBKEWFqgbQ1woaBQ6Nsn2PGGAfCn4iwIsTKkUcA0Z-V9F",
            content: 'When we were younger, we were often assigned with the task of going to the atta chakki to get flour.',

        },
        {
            category: 'Education',
            key: 4,
            title: 'MAKING SCHOOLS BETTER',
            date: '4 April , 2023',
            image: "https://images.pexels.com/photos/4827576/pexels-photo-4827576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            content: 'Meena Manch member Prem Kumari of Amar village ensured that Anjali Kumari returned to school. The latters parents& nbsp;told her that Anjali was staying back at home so that she could take care of her...',

        },
        {
            category: 'Street Activity',
            key: 5,
            title: 'Footwear Distribution Camping',
            date: 'Nov 16, 2023',
            image: "https://images.pexels.com/photos/17440926/pexels-photo-17440926/free-photo-of-girl-tying-her-shoelaces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            content: 'A new pair of shoes can transform a child’s life. Kids who receive new shoes have more confidence, attend school …',
        },
        {
            category: 'Student Welfare',
            key: 1,
            title: 'Bridge To Hope Launches Digital Education Programme',
            date: 'Nov 17, 2023',
            image: "https://blogs.adb.org/sites/blogs/files/43106581850_ef7bf3f543_k%20%281%29.jpg",

        },
        // Add more news articles for other categories if needed
    ];

    // Sort news articles based on the assigned key
    newsArticles.sort((a, b) => a.key - b.key);

    return (
        <>
            <Header />
            <div className="loginContainer">
                <div className="container">
                    <div className="presshead d-flex justify-content-between">
                        {newsArticles.map((newsArticle, index) => (
                            <a
                                key={index}
                                className={`p-2 text-muted ${activeIndex === index ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleItemClick(index)}
                            >
                                {newsArticle.category}
                            </a>
                        ))}
                    </div>

                    <div className="jumbotron p-3 p-md-5 text-white rounded bg-grad">
                        <div className="col-md-12 px-0">
                            <h1 className="display-3 font-italic text-center">Encurage Bridge To Hope</h1>
                            <p className="lead my-3 text-center">
                                Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                            </p>

                        </div>
                    </div>

                    <div className="row mb-2 news_cards">
                        {newsArticles.map((newsArticle) => (
                            <div className="col-md-6" key={newsArticle.category}>
                                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <strong className="d-inline-block mb-2 text-primary">
                                            {newsArticle.category}
                                        </strong>
                                        <h3 className="mb-0">
                                            <a className="text-dark" href="#">
                                                {newsArticle.title}
                                            </a>
                                        </h3>
                                        <div className="mb-1 text-muted">
                                            {newsArticle.date}
                                        </div>
                                        <p className="card-text mb-auto">
                                            {newsArticle.content}
                                        </p>
                                       
                                    </div>
                                    <img
                                        className="card-img-right flex-auto d-none d-md-block img-responsive"
                                        src={newsArticle.image}
                                        alt="Thumbnail [200x250]"

                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
