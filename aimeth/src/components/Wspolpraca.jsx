//Strona dla wspolpracy z firmami
import "../styles/Wspolpraca.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

function Sponsor(props) {
  const imageUrl = `/sponsorzy/${props.image}`;

  if (props.isEditing) {
    return (
      <div className="bam">
        <input id={`link${props.id}`} type="text" defaultValue={props.link} />
        <input
          id={`obrazek${props.id}`}
          type="file"
          accept=".png, .jpg, .jpeg"
        />
        <button onClick={() => props.onMoveUp(props.id)}>{"<<"}</button>
        <button onClick={() => props.onMoveDown(props.id)}>{">>"}</button>
        <button
          id={`delete${props.id}`}
          onClick={() => props.onDelete(props.id)}
        >
          Usuń
        </button>
      </div>
    );
  } else {
    return (
      <div className="bam">
        <a
          key={props.id}
          rel="noreferrer"
          className={"sponsor"}
          target="_blank"
          href={props.link}
        >
          <div
            className="Wsp_sponsor"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </a>
      </div>
    );
  }
}
export default function Wspolpraca(props) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      link: "https://slaskie.pl/",
      img: "spons1.png",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://89.73.160.85:3300/sponsorzy")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  function handleDelete(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  function handleAdd() {
    const newPost = {
      id: Date.now(), // Używamy aktualnego timestampu jako tymczasowego ID
      link: "",
      zdj: "",
      isEditing: true,
    };
    setPosts([...posts, newPost]);
  }
  function handleMoveUp(id) {
    const index = posts.findIndex((post) => post.id === id);
    if (index > 0) {
      const newPosts = [...posts];
      const temp = newPosts[index];
      newPosts[index] = newPosts[index - 1];
      newPosts[index - 1] = temp;
      setPosts(newPosts);
    }
  }

  function handleMoveDown(id) {
    const index = posts.findIndex((post) => post.id === id);
    if (index < posts.length - 1) {
      const newPosts = [...posts];
      const temp = newPosts[index];
      newPosts[index] = newPosts[index + 1];
      newPosts[index + 1] = temp;
      setPosts(newPosts);
    }
  }
  function editButton() {
    const newPosts = posts.map((post) => {
      return {
        ...post,
        isEditing: true,
      };
    });
    setPosts(newPosts);
  }

  useEffect(() => {
    posts.forEach((post, index) => {
      if (post.isEditing === true) {
        const bamElements = document.querySelectorAll(".bam");
        if (bamElements[index]) {
          bamElements[
            index
          ].style.backgroundImage = `url(/sponsorzy/${post.zdj})`;
        }
      }
    });
  }, [posts]);

  const updatesArray = [
    /* tutaj umieść swoje aktualizacje */
  ];

  async function save() {
    for (const post of posts) {
      const link = document.getElementById(`link${post.id}`).value;
      const fileInput = document.getElementById(`obrazek${post.id}`);
      const file = fileInput.files[0];

      if (file) {
        // Jeśli plik został wybrany
        const formData = new FormData();
        formData.append("file", file);
        formData.append("id", post.id);
        formData.append("link", link);

        try {
          const response = await axios.post(
            "http://89.73.160.85:3300/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          var szlaczek = response.data.slice(20, response.data.length);
          const updates = {
            id: post.id,
            link: link,
            zdj: szlaczek, // Użyj ścieżki do pliku zwróconej przez serwer
          };

          updatesArray.push(updates); // Dodaj aktualizacje do tablicy
        } catch (error) {
          console.error(error);
        }
      } else {
        const updates = {
          id: post.id,
          link: link,
          zdj: post.zdj, // Jeśli plik nie został wybrany, użyj poprzedniego obrazka
        };

        updatesArray.push(updates); // Dodaj aktualizacje do tablicy
      }
    }
    setPosts(updatesArray); // Ustaw stan na tablicę aktualizacji
    updatePost(updatesArray);
  }

  async function updatePost(updates) {
    try {
      const response = await axios.put(
        "http://89.73.160.85:3300/sponsorzy",
        updates
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <motion.div
      className="Wspolpraca"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="partnershipPhoto">
        <div className="partnershipPhotoBg">
          <h1>Współpraca</h1>
        </div>
      </div>
      <hr></hr>

      <div className="Wsp_LP">
        <p>
          <span>SKN AI-METHODS</span>
          <br />
          <br />
          pragnie zaprosić Państwa do{" "}
          <b>współtworzenia i realizowanych projektów </b>
          poprzez wsparcie finansowe, a także barterowe. W zamian oferujemy
          szereg korzyści płynących ze współpracy, które zostaną szczegółowo
          przedstawione podczas bliższego kontaktu.
          <br />
          <br />W celu zapewnienia współpracy na najwyższym poziomie,{" "}
          <b>jesteśmy także otwarci na wszelkie propozycje</b> z Państwa strony.
          <br />
          <br />W celu kontaktu zapraszamy do podstrony{" "}
          <Link to="/kontakt">
            <b className="blue">KONTAKT</b>
          </Link>
        </p>
      </div>

      <h2>Naszymi dotychczasowymi partnerami są:</h2>
      {props.log ? (
        <>
          <button onClick={editButton}>Edytuj</button>
          <button onClick={save}>Zapisz</button>
          <button onClick={handleAdd}>Dodaj sponsora</button>
        </>
      ) : null}
      <div className="Wsp_partners ">
        {posts.map((post) => (
          <Sponsor
            isEditing={post.isEditing}
            key={post.id}
            id={post.id}
            link={post.link}
            image={post.zdj}
            onDelete={handleDelete}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
          />
        ))}
      </div>
    </motion.div>
  );
}
