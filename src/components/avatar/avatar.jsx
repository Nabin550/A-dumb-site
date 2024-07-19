const user = {
  name: "Not Nabin",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imgeSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      ></img>
    </>
  );
}
