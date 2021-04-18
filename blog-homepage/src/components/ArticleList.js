import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import './Article.css';
import YourArticles from '../_data/your-articles.json';
import MissedArticles from '../_data/missed-articles.json';

class ArticleList extends Component {
    render() {
        const yourArticleList = YourArticles.map((item, index) => {
            return (<div key={index.toString()} className='column twocolumn'>
                <ArticleCard id={index} article={item} type='your' />
            </div>);
        });
        
        const missedArticleList = MissedArticles.map((item, index) => {
            return (<div key={index.toString()} className='column threecolumn'>
                <ArticleCard id={index} article={item} type='missed' />
            </div>);
        });

        return (
            <div className='app'> 
                <div className='section'>For you</div>  
                <div className='container'>
                    {yourArticleList}
                </div>
                <div style={{marginTop:'60px'}} className='section'>In case you missed it</div> 
                <div className='container'>
                    {missedArticleList}
                </div>
            </div>
        )
    }
}

export default ArticleList;