import { Box, Button } from "@mui/material";
import { useState, MouseEvent } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

// interface Post {
//   createdAt: string;
//   author: string;
//   subtitle: string;
//   title: string;
// }

const SetPost = () => {
  const [isLogget, setLog] = useState(false);
  console.log(isLogget);

  const INITIAL_POST = {
    createdAt: "",
    author: "",
    subtitle: "",
    title: "",
  };
  let [post, setPost] = useState(INITIAL_POST);

  let [posts, setPosts] = useState<(typeof INITIAL_POST)[]>([]);

  type Event = MouseEvent<HTMLButtonElement>;

  const createNewPost = (e: Event) => {
    e.preventDefault();
    const newPosts = [...posts, post];
    post.createdAt = String(
      new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString()
    );
    setPosts(newPosts);
    return setPost(INITIAL_POST);
  };

  return (
    <Box>
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <p>{post.author}</p>
      {isLogget && (
        <form style={{ padding: 16 }}>
          <input
            type="text"
            placeholder="Enter title:"
            onChange={(event) =>
              setPost((prev) => ({ ...prev, title: event.target.value }))
            }
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter sub title:"
            onChange={(event) =>
              setPost((prev) => ({ ...prev, subtitle: event.target.value }))
            }
          />
          <br />
          <input
            type="text"
            placeholder="Enter author:"
            onChange={(event) =>
              setPost((prev) => ({ ...prev, author: event.target.value }))
            }
          />
        </form>
      )}

      <Button onClick={() => setLog((prev) => !prev)}> Click Here</Button>

      <Table>
        <TableHead style={{ backgroundColor: "lightseagreen" }}>
          <TableCell>No.</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Sub title</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Created At</TableCell>
        </TableHead>
        <TableBody>
          {posts.map((p, index) => (
            <TableRow style={{ backgroundColor: "lightcyan" }}>
              <TableCell>{index + 1} </TableCell>
              <TableCell>{p.title} </TableCell>
              <TableCell>{p.subtitle} </TableCell>
              <TableCell>{p.author} </TableCell>
              <TableCell>{p.createdAt} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={createNewPost}>Create Post</button>
      <form style={{ padding: 16 }}>
        <input
          type="text"
          placeholder="Enter Title:"
          onChange={(event) =>
            setPost((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <br />
        <input
          type="text"
          placeholder="Enter Subtitle:"
          onChange={(event) =>
            setPost((prev) => ({ ...prev, subtitle: event.target.value }))
          }
        />
        <br />
        <input
          type="text"
          placeholder="Enter Author:"
          onChange={(event) =>
            setPost((prev) => ({ ...prev, author: event.target.value }))
          }
        />
      </form>
    </Box>
  );
};

export default SetPost;
