import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import axios from "axios";
import Card from "../components/Card";

export default function Main() {
  const [list, setList] = useState([]);
  useEffect(
    () =>
      async function callAPI() {
        axios("https://dummyjson.com/products?limit=0").then((res) => {
          setList(res.data.products);
        });
      },
    []
  );
  return (
    <div className={styles.main}>
      <div className={styles.filters}>
        <Filter name={"낮은가격순"} onClick={() => setList([...list].sort((a, b) => a.price - b.price))} />
        <Filter name={"높은가격순"} onClick={() => setList([...list].sort((a, b) => b.price - a.price))} />
        <Filter
          name={"할인율순"}
          onClick={() => setList([...list].sort((a, b) => b.discountPercentage - a.discountPercentage))}
        />
        <Filter name={"평점순"} onClick={() => setList([...list].sort((a, b) => b.rating - a.rating))} />
      </div>
      <ul className={styles.products}>
        {list.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            thumbnail={el.thumbnail}
            title={el.title}
            discountPercentage={el.discountPercentage}
            price={el.price}
            rating={el.rating}
            stock={el.stock}
          />
        ))}
      </ul>
    </div>
  );
}

const Filter = ({ onClick, name }) => {
  return (
    <label className={styles.filter}>
      <input type="radio" name="filter" onClick={onClick}></input>
      <span>{name}</span>
    </label>
  );
};
