import React from "react";
import "../styles/News.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";

import { ImClock, ImPilcrow } from "react-icons/im";
export default function News(props) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      data: "11.9.2001",
      tytul: "Tytul",
      opis: "lorem ipsum bim bam booom ijdsadhasdhasbbcdj cbdshjbcajbc ascbhasc jadc asbjc",
    },
  ]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [latestPost, setLatestPost] = useState(null);
  const [tytul, setTytul] = useState("");
  useEffect(() => {
    axios
      .get("http://89.73.160.85:3300/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
    const fetchLatestPost = async () => {
      try {
        const response = await axios.get(
          "https://graph.facebook.com/v18.0/121131737755098/feed?fields=message%2Cfull_picture%2Cpermalink_url%2Ccreated_time&access_token=EAALxecvEcSQBO4AiVDxTOTwsTWAza80rou6u3Kzv3hiQMkIVfTZAmckQzZBDKh4rjzOsatuk5WWGxz7TYboUJthhZAZAua8j2dkV9YoIWIS78VJS5wM77vEjJlycAivfKd0YeVLU696hKN6b1rlYYqlxJ0kV7toik2zU9vbqwCixyyi4xrtTQCRZABSuIvLD0lc8kBkcmsDUL8aUZD"
        );

        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          setLatestPost(response.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching latest Facebook post:", error);
      }
    };
    fetchLatestPost();
  }, []);

  useEffect(() => {
    if (isEditMode) editMode();
  }, [posts]);

  const updatePost = async () => {
    const updates = posts.map((post) => ({
      id: post.id,
      name: document.getElementById(`tyt${post.id}`).value,
      opis: document.getElementById(`opi${post.id}`).value,
      data: document.getElementById(`dat${post.id}`).value,
    }));
    console.log(updates);
    axios
      .put("http://89.73.160.85:3300/posts", updates)
      .then((response) => {
        console.log("Post updated successfully:", response.data);
        // Update the state with the modified post

        setPosts(updates);
        setIsEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  const editMode = () => {
    setIsEditMode(true);
  };

  function dodajNews() {
    let id = 1;
    posts.forEach((element) => {
      element.id = id;
      id++;
    });
    if (id > 4) {
      alert("Nie można dodać więcej niż 4 posty!");
      return;
    }
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        data: "",
        name: "",
        opis: "",
      },
    ]);
  }

  useEffect(() => {
    if (!latestPost) return;
    const separators = [".", "?", "!", " "];
    let title = "";
    var znak;
    for (let separator of separators) {
      znak = separator;
      let parts = latestPost.message.split(separator);
      if (parts[0].length <= 30) {
        title = parts[0];
        break;
      }
    }

    if (!title) {
      title = latestPost.message.substring(0, 30);
    }

    setTytul(title + znak);
    document.querySelector(
      ".lp_obrazek"
    ).style.backgroundImage = `url(${latestPost.full_picture})`;
  }, [latestPost]);

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  function movePostUp(index) {
    if (index === 0) return; // Nie można przesunąć najwyższego posta w górę
    setPosts((prevPosts) => {
      const newPosts = [...prevPosts];
      const temp = newPosts[index];
      newPosts[index] = newPosts[index - 1];
      newPosts[index - 1] = temp;
      return newPosts;
    });
  }

  function movePostDown(index) {
    if (index === posts.length - 1) return; // Nie można przesunąć najniższego posta w dół
    setPosts((prevPosts) => {
      const newPosts = [...prevPosts];
      const temp = newPosts[index];
      newPosts[index] = newPosts[index + 1];
      newPosts[index + 1] = temp;
      return newPosts;
    });
  }
  function updatePostData(index, newData) {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) =>
        i === index ? { ...post, data: newData } : post
      )
    );
  }

  function updatePostName(index, newName) {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) =>
        i === index ? { ...post, name: newName } : post
      )
    );
  }

  function updatePostOpis(index, newOpis) {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) =>
        i === index ? { ...post, opis: newOpis } : post
      )
    );
  }
  return (
    <div className="news">
      <div className="newsHeader">
        <h1>
          Aktualności
          <hr></hr>
        </h1>
      </div>
      <div className="newsContainer">
        <div className="newsContainerBg">
          <div className="news_lp">
            <div className="lpContainer">
              <div className="facebookIcon">
                <BsFacebook />
              </div>
              <h1>Najnowszy post:</h1>
              <div className="lp_obrazek"></div>
              <h2 id="newsTitle">{tytul}</h2>
              <div className="lp_tytul">
                {latestPost?.message.slice(tytul.length)}
              </div>
              <div className="lpMoreContainer">
                <a
                  target="_blank"
                  className="lpMore"
                  href={latestPost?.permalink_url}
                >
                  Zobacz więcej...
                </a>
                <div className="lpDate">
                  <ImClock />{" "}
                  <span className="put_data">
                    {new Date(latestPost?.created_time).toLocaleDateString(
                      "pl-PL"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="news_pp">
            <h1>Nadchodzące wydarzenia:</h1>
            {isEditMode
              ? posts.map((post, index) => (
                  <div className="data_pasek" key={index}>
                    <input
                      style={{
                        fontSize: "1rem",
                        textAlign: "center",
                      }}
                      id={`dat${post.id}`}
                      className="data"
                      type="text"
                      value={post.data}
                      onChange={(e) => updatePostData(index, e.target.value)}
                    />
                    <div className="data_tekst">
                      <input
                        id={`tyt${post.id}`}
                        className="data_tekst"
                        type="text"
                        value={post.name}
                        onChange={(e) => updatePostName(index, e.target.value)}
                      />
                      <input
                        id={`opi${post.id}`}
                        className="opisContainer"
                        type="text"
                        value={post.opis}
                        onChange={(e) => updatePostOpis(index, e.target.value)}
                      />

                      <div className="deletePost">
                        <button onClick={() => deletePost(post.id)}>X</button>
                        <button onClick={() => movePostUp(index)}>^^^</button>
                        <button onClick={() => movePostDown(index)}>
                          \/\/\/
                        </button>
                      </div>

                      <div></div>
                    </div>
                  </div>
                ))
              : posts.map((post, index) => (
                  <div className="data_pasek" key={index}>
                    <div className="data">{post.data}</div>
                    <div className="data_tekst">
                      <h1>{post.name}</h1>
                      <div className="opisContainer">
                        <p>{post.opis}</p>
                      </div>
                    </div>
                  </div>
                ))}

            <div id="konsola">
              {props.log ? (
                <div>
                  <button onClick={editMode}>Edytuj</button>
                </div>
              ) : (
                <></>
              )}
              {isEditMode ? (
                <>
                  <button onClick={updatePost}>Zapisz</button>
                  <button onClick={dodajNews}>Dodaj</button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
