//conditional rendering

// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }
// return <div>{content}</div>;

//works inside jsx,just a bit more compact code using ??
//<div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;

//Rendering lists
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function List() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
}
