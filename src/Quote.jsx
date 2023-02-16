import React from 'react'

export const Quote = ({quote, author}) => {
    return (
        <blockquote className="blockquote text-end">
            <p className="mb-10">{quote}</p>
            <footer className="blockquote-footer text-center">{author}</footer>
        </blockquote>
    )
}
