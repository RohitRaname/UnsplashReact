import { useState } from "react";
import { useAppContext } from "./context";

const Form = () => {
  const { setSearch } = useAppContext();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit" className="btn" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default Form;
