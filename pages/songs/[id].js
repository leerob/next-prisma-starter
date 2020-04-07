export async function getStaticProps({ params }) {
  return {
    props: {
      song: {
        youtubeId: 'N6SQ9QoSjCI'
      }
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1'
        }
      }
    ],
    fallback: false
  };
}

export default ({ song }) => (
  <iframe
    width="100%"
    height="315"
    src={`https://www.youtube.com/embed/${song.youtubeId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);
