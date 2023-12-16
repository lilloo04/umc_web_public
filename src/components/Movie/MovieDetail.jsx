import { useLocation, useParams } from "react-router-dom";

export default function MovieDetail() {
  // URL로 넘겨받은 title
  const { title } = useParams();

  // 네비게이트 훅을 통해 페이지 이동 시에 넘겨받은 정보
  // 이미지, 별점 등의 모든 정보들
  const { state } = useLocation();

  // title 및 state 정보를 콘솔에 출력
  console.log("Title:", title);
  console.log("Movie Data:", state);

  // Movie Data 객체가 유효한 경우에만 화면을 구성
  if (state) {
    const { movieData } = state;

    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt={movieData.title}
        />
        <h1>Title: {movieData.title}</h1>
      </div>
    );
  } else {
    return <p>Movie data not available.</p>;
  }
}
