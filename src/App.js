import Review from './Review'
import useFetch from './useFetch'
function App() {
const {Loading,error,data}=useFetch('http://localhost:9000/reviews')

  
  return (
    <div>
    {Loading &&<h3>{Loading}</h3>}
    {error &&<h3>{error}</h3>}
    {data && <Review reviews={data} ></Review>}
   </div>
  );
}
export default App;
