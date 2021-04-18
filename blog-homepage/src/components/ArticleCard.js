import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardImage from './CardImage';
import CardDetails from './CardDetails';
import './Article.css';

class ArticleCard extends Component {    
    static propTypes = {
        type: PropTypes.string.isRequired,
        article: PropTypes.object.isRequired
    }
    
    constructor(props) {
        super(props);
        this.state = {   
            isBookMarked: false         
        };
    }

    render() {
        const wrapper = this.props.type === 'your' ? 'wrapper1' : 'wrapper2';

        return (
            <div className="article">
                <div className={wrapper}>
                    <CardImage imageSrc={this.props.article.image} type={this.props.type} link={this.props.article.link} />   
                    <CardDetails article={this.props.article} type={this.props.type} />                             
                </div>                                                        
            </div>
        )
    }
}

export default ArticleCard;