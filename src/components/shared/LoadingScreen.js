import Spinner from 'react-bootstrap/Spinner';

const LoadingScreen = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  );
}

export default LoadingScreen;