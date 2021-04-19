import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardImage from './CardImage';
import CardDetails from './CardDetails';
import './Article.css';

class ArticleCard extends Component {    
    static propTypes = {
        type: PropTypes.string.isRequired,
        article: PropTypes.shape({
            author: PropTypes.shape({
              image: PropTypes.string.isRequired,
              isMediumMember: PropTypes.bool.isRequired,
              name: PropTypes.string.isRequired
            }).isRequired,
            description: PropTypes.string.isRequired,
            hasAudioAvailable: PropTypes.bool.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            memberPreview: PropTypes.bool.isRequired,
            minutesToRead: PropTypes.number.isRequired,
            postedDate: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
          }).isRequired,
        id: PropTypes.number.isRequired
    }
    
    constructor(props) {
        super(props);
        this.state = {   
            article: this.props.article,
            isBookMarked: false         
        };
    }

    handleBookmarkClick(card) {
        this.setState({
            article: card.props.article,
            isBookMarked: !this.state.isBookMarked,
          });
      }

    render() {
        const wrapper = this.props.type === 'your' ? 'wrapper1' : 'wrapper2';

        return (
            <div className="article">
                <div className={wrapper}>
                    <CardImage imageSrc={this.props.article.image} type={this.props.type} link={this.props.article.link} />   
                    <CardDetails isBookMarked={this.state.isBookMarked} article={this.state.article} type={this.props.type} 
                    onClick={() => this.handleBookmarkClick(this)} />                             
                </div>                                                        
            </div>
        )    }
}

export default ArticleCard;