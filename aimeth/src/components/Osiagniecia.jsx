import "../styles/Osiagniecia.css";
import { BsFilterSquareFill, BsClockFill, BsArrowUp } from "react-icons/bs";
import { BiSolidMedal } from "react-icons/bi";
import { useState, useEffect } from "react";

import axios from "axios";
export default function Osiagniecia(props) {
  const fileServerAdress = props.FSA;
  const [filter, setFilter] = useState(true);
  const [whatFilter, setWhatFilter] = useState("timeDesc");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(fileServerAdress + "/osiagniecia")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  function wysun() {
    if (filter == true) {
      document.querySelector(".filtr_pasek").style.width = "15vw";

      document.querySelectorAll(".filtr_pasek_element")[0].style.opacity = "1";
      document.querySelectorAll(".filtr_pasek_element")[1].style.opacity = "1";

      document.querySelectorAll(".filtr_pasek_element")[0].style.marginRight =
        "2vw";
      document.querySelectorAll(".filtr_pasek_element")[1].style.marginRight =
        "2vw";
      setFilter(false);
    } else {
      document.querySelector(".filtr_pasek").style.width = "0vw";

      document.querySelectorAll(".filtr_pasek_element")[0].style.opacity = "0";
      document.querySelectorAll(".filtr_pasek_element")[1].style.opacity = "0";

      document.querySelectorAll(".filtr_pasek_element")[0].style.margin = "0";
      document.querySelectorAll(".filtr_pasek_element")[1].style.margin = "0";

      setFilter(true);
    }
  }

  function spawnPosts(x) {
    var grid = document.querySelector(".osiagniecia_grid");
    var posts = grid.children;
    var postsArray = [];
    for (var i = 0; i < posts.length; i++) {
      postsArray.push(posts[i]);
    }

    if (x == "numberAsc" || x == "numberDesc") {
      console.log("sortowanie liczbowe");
      postsArray.sort(function (a, b) {
        var aNumber = a.querySelector(".achievement_number").firstChild
          .innerHTML;
        var bNumber = b.querySelector(".achievement_number").firstChild
          .innerHTML;
        document.querySelector(".arrowCzas").style.opacity = "0";
        document.querySelector(".arrowNumer").style.opacity = "1";
        if (x == "numberDesc") {
          console.log("duzo malo");
          document.querySelector(".arrowNumer").style.transform =
            "rotate(180deg)";
          return aNumber - bNumber;
        } else {
          console.log("malo duzo");
          document.querySelector(".arrowNumer").style.transform =
            "rotate(0deg)";
          return bNumber - aNumber;
        }
      });
    } else if (x == "timeAsc" || x == "timeDesc") {
      console.log("sortowanie czasowe");
      postsArray.sort(function (a, b) {
        var aDate = a.getAttribute("date");
        var bDate = b.getAttribute("date");
        document.querySelector(".arrowNumer").style.opacity = "0";
        document.querySelector(".arrowCzas").style.opacity = "1";
        if (x == "timeDesc") {
          // console.log("młody stary");
          document.querySelector(".arrowCzas").style.transform = "rotate(0deg)";
          return aDate - bDate;
        } else {
          // console.log("stary młody");
          document.querySelector(".arrowCzas").style.transform =
            "rotate(180deg)";
          return bDate - aDate;
        }
      });
    }

    for (var i = 0; i < postsArray.length; i++) {
      grid.appendChild(postsArray[i]);
    }
    // console.log("ustaw to albo cie zjebie");
    setWhatFilter(x);
  }

  function editMode() {
    console.log(posts);
    for (var i = 0; i < posts.length; i++) {
      document.querySelectorAll(".achievement_title h1")[i].innerHTML =
        "<input id='tyt" +
        posts[i].id +
        "' type='text' value='" +
        posts[i].konkurs +
        "'/>";
      document.querySelectorAll(".achievement_number h1")[i].innerHTML =
        "<input id='miejsce" +
        posts[i].id +
        "' type='text' value='" +
        posts[i].miejsce +
        "'/><br/><input id='data" +
        posts[i].id +
        "' type='text' value='" +
        posts[i].date +
        "'/>";
    }
  }

  function save() {
    console.log(posts);
    const updates = posts.map((post) => ({
      id: post.id,
      konkurs: document.getElementById(`tyt${post.id}`).value,
      miejsce: document.getElementById(`miejsce${post.id}`).value,
      date: document.getElementById(`data${post.id}`).value,
    }));

    axios
      .put(fileServerAdress + "/osiagniecia", updates)
      .then((response) => {
        console.log("Post updated successfully:", response.data);
        // Update the state with the modified post

        setPosts(updates);
        console.log(posts);
        posts.map((post) => {
          document.querySelectorAll(".achievement_number h1")[
            post.id - 1
          ].innerHTML = post.miejsce;
          document.querySelectorAll(".achievement_title h1")[
            post.id - 1
          ].innerHTML = post.konkurs;
          document
            .querySelectorAll(".achievement")
            [post.id - 1].setAttribute("date", post.date);
        });
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  }

  function dodajPost() {
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        konkurs: "",
        miejsce: "",
        date: "",
      },
    ]);
  }

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  function Miejsce(the) {
    switch (the.miejsce) {
      case "1":
        return (
          <h1 style={{ color: "gold", borderColor: "gold" }}>{the.miejsce}</h1>
        );

      case "2":
        return (
          <h1 style={{ color: "silver", borderColor: "silver" }}>
            {the.miejsce}
          </h1>
        );
      case "3":
        return (
          <h1 style={{ color: "brown", borderColor: "brown" }}>
            {the.miejsce}
          </h1>
        );
      default:
        return <h1>{the.miejsce}</h1>;
    }
  }
  return (
    <div className="osiagniecia">
      <h1>Osiągniecia:</h1>

      <div className="osiagniecia_filtr">
        <h1>Filtry: </h1>
        <div className="filtr_pasek">
          <div
            className="filtr_pasek_element"
            onClick={() => {
              if (whatFilter == "timeDesc") {
                spawnPosts("timeAsc");
              } else {
                spawnPosts("timeDesc");
              }
            }}
          >
            <BsClockFill />
            <BsArrowUp className="arrowCzas" />
          </div>
          <div
            className="filtr_pasek_element"
            onClick={() => {
              if (whatFilter == "numberDesc") {
                spawnPosts("numberAsc");
              } else {
                spawnPosts("numberDesc");
              }
            }}
          >
            <BiSolidMedal
              style={{
                fontSize: "2.2rem",
              }}
            />
            <BsArrowUp className="arrowNumer" />
          </div>
        </div>
        <div className="filtr" onClick={wysun}>
          <BsFilterSquareFill />
        </div>
      </div>
      {props.log ? (
        <>
          <button onClick={editMode}>edyutj</button>
          <button onClick={save}>save</button>
          <button onClick={dodajPost}>+</button>
        </>
      ) : (
        <div></div>
      )}
      <div className="osiagniecia_grid">
        {posts.map((post) => (
          <div className="achievement" date={post.date} key={post.id}>
            <div className="achievement_number">
              <Miejsce klucz={post.id} miejsce={post.miejsce} />
            </div>
            <div className="achievement_title">
              <h1>{post.konkurs}</h1>
            </div>
            {props.log ? (
              <button onClick={() => deletePost(post.id)}>
                Usuń osiągnięcie
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
