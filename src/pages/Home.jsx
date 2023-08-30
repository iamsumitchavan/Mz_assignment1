import WithUser from "../component/WithUser";
function Home({ user }) {
  return (
    <div>
      <div>
        <h1>This is home page{user.email}</h1>
      </div>
    </div>
  );
}
export default WithUser(Home);
