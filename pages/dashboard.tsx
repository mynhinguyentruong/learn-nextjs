import allPosts from "../data/posts.json";
const jwt = require("jsonwebtoken");

type Data = {
  allPosts: {
    id: number;
    title: string;
  }[];
};

export default function Post({ allPosts }: Data) {
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      }).then(() => {});
      await fetch('/api/revalidate?secret=123abc');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <ul>
        {allPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
      >
        Sign Out
      </button>
    </>
  );
}

export async function getStaticProps() {
  console.log("get static props ran");
  // verify the token

  // try {
  //   const decoded = await jwt.verify(
  //     // verify the incoming token
  //     `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZha2UuZW1haWxAZ21haWwuY29tIiwiaWF0IjoxNjY0NjMzODIwLCJleHAiOjE2NjQ2MzM4ODB9.lboyY7jpfvIlahpSqTxfZRDaLfZXxtJIM-7LF3r0ox8`,
  //     process.env.ACCESS_TOKEN_SECRET
  //   );
  // } catch (err) {
  //   console.log(err)
  //   // handle error
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //       // statusCode: 301
  //     },
  //   };
  // }

  return {
    props: { allPosts }, // will be passed to the page component as prop
  };
}
