import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAppContext } from "./context";

const ImgContainer = ({}) => {
  const { search } = useAppContext();

  console.log('rerender')


  // reactQuery use caching
  // this fetch new data only when key changes 
  // if this remain images then this wont change()
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images",search],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=7pmB29Xi9rOWHhYpvtuc4edchzh1w0eawUjJwNAqngA&query=${search}`
      );

      return res.data.results;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>There was an error.</p>;
  if(data.length===0) return <h3>no results found</h3>

  return (
    <section className="gallery">
      {data.map(({ id, urls: { regular } }) => (
        <img key={id} src={regular} alt="" />
      ))}
    </section>
  );
};
export default ImgContainer;
