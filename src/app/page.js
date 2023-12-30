import Image from "next/image";
import styles from "./page.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Card from "./components/movieCard/Card";

export default function Home() {
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
          <div class="movie-list-container">
            <h1 class="movie-list-title">NEW RELEASES</h1>
            <div class="movie-list-wrapper">
              <div class="movie-list">
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685102/Movie%20app%20images/ipcv6hfhwhdfg1tezu0z.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685101/Movie%20app%20images/wnx7edzcfhvwnjn9nyar.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685101/Movie%20app%20images/eqdzfoqfg22w9vbd9d3u.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685100/Movie%20app%20images/rpou57bsselgyigjcv4j.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685100/Movie%20app%20images/j9bdikv0ujmeuzy92gqj.jpg" />
              </div>
              <i class="fas fa-chevron-right arrow"></i>
            </div>
          </div>
          <div
            class="featured-content"
            style={{
              background:
                " linear-gradient(to bottom, rgba(0,0,0,0), #151515), url('https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685110/Movie%20app%20images/sjxgnoaei5zkfmvxviiy.jpg')",
            }}
          >
            <Image
              class="featured-title"
              width={100}
              height={100}
              src="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685103/Movie%20app%20images/gyex2qiovd992jpnynui.png"
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
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685097/Movie%20app%20images/vwfedibzjbymfi08j5id.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685097/Movie%20app%20images/ojvaaca6e0neurok4mti.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685097/Movie%20app%20images/xvthiut3ww8mycfia2jo.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685096/Movie%20app%20images/zyd9tefky34t8ntcf0vz.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685096/Movie%20app%20images/jcepkkzbi1mtqp9z8pq0.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685094/Movie%20app%20images/vebw6ibj1box0jiogrpz.jpg" />
              </div>
              <i class="fas fa-chevron-right arrow"></i>
            </div>
          </div>
          <div class="movie-list-container">
            <h1 class="movie-list-title">NEW RELEASES</h1>
            <div class="movie-list-wrapper">
              <div class="movie-list">
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685093/Movie%20app%20images/jwqbhkzom2ffyhip56xe.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685100/Movie%20app%20images/nd1lffya2wcvix28f4pm.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685100/Movie%20app%20images/d6vkw0ijft8xwnfrc8mc.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685093/Movie%20app%20images/dyqugjnqhqzo3tonvnyz.jpg" />
                <Card url="https://res.cloudinary.com/dbiuz1n41/image/upload/v1703685094/Movie%20app%20images/jefkw4q9oatuoerswli4.jpg" />
              </div>
              <i class="fas fa-chevron-right arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
