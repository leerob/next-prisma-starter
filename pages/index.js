export async function getStaticProps() {
  return {
    props: {
      songs: []
    }
  };
}

export default ({ songs }) => (
  <ul>
    {songs.map((song) => (
      <li key={song.id} {...song} />
    ))}
  </ul>
);
