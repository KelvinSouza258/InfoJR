import React from 'react'
import './styles.css'

export default function Article({title, content }: {title: string, content: string }) {
    return (
        <article>
            <h3 className="article-title">{title}</h3>
            <p className="article-text font-mulish">{content}</p>
            <a className="article-anchor" href="#">Learn More</a>
        </article>
    )
}
