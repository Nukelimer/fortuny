import clsx from 'clsx'
import React from 'react'


interface OpinionProps {

    opinion_styles: string
    opinion: string,
    author: string,
    author_styles: string
    styling?: string
}
export default function Opinion({ opinion, author, author_styles, opinion_styles, styling }: OpinionProps) {
    return (
        <div className={`${styling}`}>
          
                <h3 className={clsx(opinion_styles)}>{opinion}</h3>
                <p className={clsx(author_styles)}>{author}</p>
     

        </div>
    )
}
