import React from 'react';
import ViewHeader from './ViewHeader';

function Article(props) {
    return(
        <div className="main_article">
            <dl className="article_header_title">
                <dt>{ props.title }</dt>
                <dd>{ props.subtitle }</dd>
            </dl>
            <p>{ props.article }</p>
        </div>
    );
}

export default Article;