import { Box, Button } from "@mui/material";
import { useState, MouseEvent } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Post {
  createdAt: string | Date;
  author: string;
  subtitle: string;
  title: string;
}

const SetPost = () => {
  const INITIAL_POST: Post = {
    createdAt: "",
    author: "",
    subtitle: "",
    title: "",
  };

  const [isLogged, setLog] = useState(false);
  let [post, setPost] = useState(INITIAL_POST);
  let [posts, setPosts] = useState<Post[] | []>([]);

  type Event = MouseEvent<HTMLButtonElement>;

  const createNewPost = (e: Event) => {
    e.preventDefault();
    setPosts((prev) => [...prev, { ...post, createdAt: new Date() }]);
    return setPost(INITIAL_POST);
  };

  return (
    <Box>
      <button onClick={() => setLog((prev) => !prev)}>
        {isLogged ? "Logout" : "Login"}
      </button>
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <p>{post.author}</p>
      {isLogged && (
        <form style={{ padding: 16 }}>
          <input
            type="text"
            placeholder="Enter title:"
            onChange={(event) =>
              setPost((prev) => ({ ...prev, title: event.target.value }))
            }
            value={post.title}
          />
          <br />
          <input
            type="text"
            placeholder="Enter sub title:"
            onChange={(event) =>
              setPost((prev) => ({ ...prev, subtitle: event.target.value }))
            }
            value={post.subtitle}
          />
          <br />
          <input
            type="text"
            placeholder="Enter author:"
            onChange={(event) =>
              setPost((prev) => ({ ...prev, author: event.target.value }))
            }
            value={post.author}
          />
          <br />
          <button
            disabled={!post.title || !post.subtitle || !post.author}
            onClick={createNewPost}
          >
            Create Post
          </button>
        </form>
      )}

      {isLogged && !!posts.length && (
        <Table>
          <TableHead style={{ backgroundColor: "lightseagreen" }}>
            <TableCell>No.</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Sub title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Created At</TableCell>
          </TableHead>
          <TableBody>
            {posts.map((post, index) => (
              <TableRow key={index} style={{ backgroundColor: "lightcyan" }}>
                <TableCell>{index + 1} </TableCell>
                <TableCell>{post.title} </TableCell>
                <TableCell>{post.subtitle} </TableCell>
                <TableCell>{post.author} </TableCell>
                <TableCell>{post.createdAt.toLocaleString()} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
};

export default SetPost;
