import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Article.css';

class CardAudio extends Component {
    static propTypes = {
        hasAudio: PropTypes.bool.isRequired,
        preview: PropTypes.bool.isRequired
    }

    render() {
        return (
            <div className='dl'>
                <div style={{display:this.props.hasAudio? 'block' : 'none'}}>
                    <svg style={{float:'left'}} className="audio" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
                    </svg>
                    <span className='dt'>Audio Available</span>   
                </div>
                <div style={{display:this.props.preview ? 'block' : 'none'}}> 
                    <svg style={{float:'left'}} className="audio"  width="15" height="15" viewBox="0 0 15 15">
                        <path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                    </svg>
                    <span style={{display:this.props.hasAudio ? 'none' : 'block'}} className='dt'>Member preview</span> 
                </div>
            </div>                               
        )
    }
}

export default CardAudio;