import React from 'react'
import Card from '../components/movieCard/Card'
import Image from 'next/image'

export default function Movie() {
  return (
    <>
    <div class="container">
        <div class="content-container">
          <div
            class="featured-content"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0), #151515), url('https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685102/Movie%20app%20images/fon2l8ijgmd9cb07hzxk.jpg')",
            }}
          >
            <Image
              class="featured-title"
              width={50}
              height={50}
              src="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685104/Movie%20app%20images/deyv96scoopys9br5jjx.png"
              alt=""
            />
            <p class="featured-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              illo dolor deserunt nam assumenda ipsa eligendi dolore, ipsum id
              fugiat quo enim impedit, laboriosam omnis minima voluptatibus
              incidunt. Accusamus, provident.
            </p>
            <button class="featured-button">WATCH</button>
          </div>
          <div class="movie-list-container">
            <h1 class="movie-list-title">NEW RELEASES</h1>
            <div class="movie-list-wrapper">
              <div class="movie-list">
                <Card
                  title="Conjring"
                  description="lorem lorem hi helln jhfasdkj hfskjd"
                  url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685118/Movie%20app%20images/lihqmgxbs061ku21mpyk.jpg"
                />
                <Card  url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685110/Movie%20app%20images/sjxgnoaei5zkfmvxviiy.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685104/Movie%20app%20images/deyv96scoopys9br5jjx.png" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685102/Movie%20app%20images/fon2l8ijgmd9cb07hzxk.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685103/Movie%20app%20images/gyex2qiovd992jpnynui.png" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685103/Movie%20app%20images/r9ywstq9gsskdboytgwe.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685102/Movie%20app%20images/idutmkxkusvlvn8stv9z.jpg" />
              </div>
              <i class="fas fa-chevron-right arrow"></i>
            </div>
          </div>
          </div>
          </div>
    </>
  )
}
