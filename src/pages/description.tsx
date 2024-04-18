import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Description: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://657998921acd268f9af9769e.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert(error);
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{id}</h2>

      <p>{pizza.title}</p>
      <h4>{pizza.price}</h4>
    </div>
  );
};
export { Description };
