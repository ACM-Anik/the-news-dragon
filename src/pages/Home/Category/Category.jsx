import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();


    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(true);
    }

    return (
        <div>
            {
                id ?
                    <h2 className='mb-4'>Category News: {categoryNews.length}</h2>
                    :
                    <h2 className='mb-4'>Dragon News Home</h2>
            }
            {
                showAll ?
                    categoryNews.map(news =>
                        <NewsCard
                            key={news._id}
                            news={news}
                        ></NewsCard>)
                    :
                    categoryNews.slice(0, 6).map(news => <NewsCard
                        key={news._id}
                        news={news}
                    ></NewsCard>)
            }
            {
                showAll ? '' : <div className='text-center'>
                    <button className='btn btn-danger' onClick={handleShowAll}>Show All</button>
                </div> 
            }

        </div>
    );
};

export default Category;