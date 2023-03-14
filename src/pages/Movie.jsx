import { useParams } from 'react-router-dom';
const Movie = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Now showing product with id - {id}</div>;
};

export default Movie;
