import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Article.css';

class CardImage extends Component {
    static propTypes = {
        imageSrc: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,        
        type: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {            
        };
    }

    render() {
        const cardImage = this.props.type === 'your' ? 'cardImage cardImage1' : 'cardImage cardImage2';

        return (
            <div className={cardImage}>
                <a href={this.props.link}   rel="noopener">
                    <img alt='' className='image' src={this.props.imageSrc} />
                </a>
            </div>       
        )
    }
}

export default CardImage;