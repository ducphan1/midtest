import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import AnimeCard, { movies } from "../animecard/animecard";
import { Modal, Button } from "antd";
import "./home.css";

import image1 from "../../assets/image/carousel.png";

export const movie1s = [
  {
    id: "1",
    movieName: "Weather With You",
    description:
      "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
    image: image1,
    episode: "1",
  },
];

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedMovie(null);
  };

  return (
    <div className="home">
      <Header />

      <section className="explore">
        <div className="banner" onClick={() => showModal(movie1s[0])}>
          <h2>{selectedMovie ? selectedMovie.movieName : "Explore"}</h2>
          <p>
            {selectedMovie
              ? selectedMovie.description
              : "What are you gonna watch today?"}
          </p>

          {!selectedMovie && (
            <img src={image1} alt="Explore" className="banner-image" />
          )}
        </div>
      </section>

      <section className="new-release">
        <h3>New Release</h3>
        <div className="movie-list">
          {movies.map((movie) => (
            <AnimeCard
              key={movie.id}
              movie={movie}
              onCardClick={() => showModal(movie)}
            />
          ))}
        </div>
      </section>

      <Footer />

      <Modal
        title={selectedMovie?.movieName}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <div className="modal-content">
          <h4>Description</h4>
          <p>{selectedMovie?.description}</p>
          <h4>Episode: {selectedMovie?.episode}</h4>

          {selectedMovie?.image && (
            <img
              src={selectedMovie.image}
              alt={selectedMovie.movieName}
              className="modal-banner-image"
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Home;
