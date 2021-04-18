import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import './Article.css';
import YourArticles from '../_data/your-articles.json';
import MissedArticles from '../_data/missed-articles.json';

class ArticleList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  
            yourArticles: YourArticles,
            missedArticles: MissedArticles,
            isBookMarked: false      
        };
    }

    render() {
        const yourArticleList = this.state.yourArticles.map((item, index) => {
            return (<div className='column twocolumn'>
                <ArticleCard key={index} article={item} type='your' />
            </div>);
        });
        
        const missedArticleList = this.state.missedArticles.map((item, index) => {
            return (<div className='column threecolumn'>
                <ArticleCard key={index} article={item} type='missed' />
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