import React, { Component } from 'react';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import CardAudio from './CardAudio';
import './Article.css';

class CardDetails extends Component { 
    static propTypes = {
        article: PropTypes.object.isRequired,
        isBookMarked: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {            
        };
    }

    render() {
        const [name, image, isMediumMember, title, description, link, postedDate, minutesToRead, hasAudio, memberPreview] = 
        [this.props.article.author.name, this.props.article.author.image, this.props.article.author.isMediumMember, this.props.article.title, 
            this.props.article.description, this.props.article.link, this.props.article.postedDate, this.props.article.minutesToRead, 
            this.props.article.hasAudioAvailable, this.props.article.memberPreview];

        const cardAudio = hasAudio || memberPreview ? 
            <CardAudio hasAudio={hasAudio} preview={memberPreview} /> : "";

        const bookmarkColor = this.props.isBookMarked ? 'red' : 'rgba(0, 0, 0, 0.54)';

        return (
            <div className='cardDetails'>
                <div style={{paddingTop:'5px', height:'5%'}}>
                    <div className='dl'>
                        {cardAudio}
                    </div>
                </div>
                <div style={{paddingTop:'10px', height:'65%'}}>
                    <a href={link}   rel="noopener">
                        <h2 className="article__title">{title}</h2>                        
                        <p className="article__description">
                            {description}
                        </p>   
                    </a>                                 
                </div>
                <div style={{paddingTop:'15px'}}>
                    <div className='dl'>
                        <div className='author-div'>
                            <div className={isMediumMember ? 'author-member' : ''}>
                                <img alt={name} className='author-image' src={image} />
                            </div>
                            <div style={{position:'relative', height:'40px', padding: '2px'}}>
                                <span style={{position:'absolute', top:'0'}} className='author-name'>{name}</span>
                                <span style={{position:'absolute', bottom:'0'}} className='dt'>{dateFormat(postedDate, "mmm dd")} - {minutesToRead} min read</span>
                            </div>  
                        </div>
                        <div>
                            <a style={{float:'right', color:bookmarkColor}} 
                            onClick={this.props.onClick} href="/#"  rel="noopener">
                                <svg className="bookmark" width="25" height="25" viewBox="0 0 25 25">
                                    <path d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z" fillRule="evenodd"></path>
                                </svg>
                            </a>                                      
                        </div>
                    </div>
                </div>
            </div>                                
        )
    }
}

export default CardDetails;