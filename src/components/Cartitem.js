import { useState } from "react";
import styles from "./Cartitem.module.css";

export default function Cartitem({ id, quantity, product, changecnt, deleteItem }) {
  const [count, setCount] = useState(quantity);
  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
      changecnt(id, count - 1);
    }
  };
  const plus = () => {
    if (count < product.stock) {
      setCount(count + 1);
      changecnt(id, count + 1);
    }
  };
  return (
    <div className={styles.cartitem}>
      {product ? (
        <>
          <img className={styles.img} src={product.thumbnail} alt="" />
          <div className={styles.info}>
            <div className={styles.title}>{product.title}</div>
            <div>
              <span className={styles.discount}>{product.discountPercentage}%</span>
              <span className={styles.price}>{(product.price * 1350).toLocaleString("ko-KR")}원</span>
            </div>
            <div className={styles.stock}>
              <span>(남은수량 : {product.stock})</span>
              <span className={styles.soldout}>{product.stock < 10 ? "(매진임박)" : ""}</span>
            </div>
          </div>
          <div className={styles.btnwrap}>
            <button className={styles.delete} onClick={() => deleteItem(id)}>
              X
            </button>
            <div className={styles.select}>
              <div className={styles.selectbox}>
                <button onClick={minus}>-</button>
                <input
                  value={count}
                  onChange={(e) => {
                    if (isNaN(parseInt(e.target.value))) {
                      alert("숫자를 입력해주세요");
                      return;
                    }
                    if (e.target.value > product.stock) {
                      alert("남은 수량을 확인해주세요");
                      return;
                    }
                    setCount(parseInt(e.target.value));
                  }}
                />
                <button onClick={plus}>+</button>
              </div>
              <div>{(product.price * count * 1350).toLocaleString("ko-KR")}원</div>
            </div>
          </div>
        </>
      ) : (
        <div>제품 정보를 가져오는 중입니다...</div> // 대체 컨텐츠 제공
      )}
    </div>
  );
}

// export default function Cartitem({ id, quantity, totalprice, deleteitem }) {
// const params = id;
// const cartcnt = quantity;
// const [list, setList] = useState([]);
// const [count, setCount] = useState(cartcnt);
// useEffect(
//   () =>
//     async function callAPI() {
//       await axios(`https://dummyjson.com/products/${params}`).then((res) => {
//         setList(res.data);
//       });
//     },
//   [params]
// );
// useEffect(() => {
//   if (list.length !== 0) {
//     let obj = JSON.parse(localStorage.getItem("cart"));
//     obj[list.id] = count;
//     localStorage.setItem("cart", JSON.stringify(obj));
//     settotal();
//   }
// }, [count]);
// const settotal = () => {
//   totalprice(count * list.price * 1350);
// };
// return (
//   <div className={styles.cartitem}>
//     <img className={styles.img} src={list.thumbnail} alt="" />
//     <div className={styles.info}>
//       <div className={styles.title}>{list.title}</div>
//       <div>
//         <span className={styles.discount}>{list.discountPercentage}%</span>
//         <span className={styles.price}>{(list.price * 1350).toLocaleString("ko-KR")}원</span>
//       </div>
//       <div className={styles.stock}>
//         <span>(남은수량 : {list.stock})</span>
//         <span className={styles.soldout}>{list.stock < 10 ? "(매진임박)" : ""}</span>
//       </div>
//     </div>
//     <div className={styles.btnwrap}>
//       <button className={styles.delete} onClick={deleteitem}>
//         X
//       </button>
//       <div className={styles.select}>
//         <div className={styles.selectbox}>
//           <button onClick={() => setCount(count === 0 ? list.stock : (x) => x - 1)}>-</button>
//           <input
//             value={count}
//             onChange={(e) => {
//               if (isNaN(Number(e.target.value))) {
//                 alert("숫자를 입력해주세요");
//                 setCount(0);
//               } else if (e.target.value > list.stock) {
//                 alert("남은 수량을 확인해주세요");
//                 setCount(0);
//               } else {
//                 setCount(e.target.value);
//               }
//             }}
//           ></input>
//           <button onClick={() => setCount(count === list.stock ? 0 : (x) => x + 1)}>+</button>
//         </div>
//         <div>{(count * list.price * 1350).toLocaleString("ko-KR")}원</div>
//       </div>
//     </div>
//   </div>
// );
// }
