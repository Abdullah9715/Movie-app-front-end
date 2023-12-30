import Image from 'next/image'
import React from 'react'

export default function Card(props) {
  console.log(props.url)
    return (
    <>
                      <div className="movie-list-item w-100">
                            <Image className="movie-list-item-img" width={150} height={100} src={props.url} alt=""/>
                            <span className="movie-list-item-title">{props.title}</span>
                            <p className="movie-list-item-desc">{props.description}</p>
                            <button className="movie-list-item-button">Watch</button>
                        </div>
    </>
  )
}
