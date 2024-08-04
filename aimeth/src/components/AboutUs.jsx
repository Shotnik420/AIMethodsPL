import React, { useState, useEffect, createElement } from "react";
import axios from "axios";
import "../styles/AboutUs.css";
import { motion } from "framer-motion";

function AboutUs(props) {
  const fileServerAdress = props.FSA;
  console.log(fileServerAdress);
  const [posts, setPosts] = useState({
    obecny1: [
      {
        id: 1,
        zdj: "",
        imie: "Ładowanie...",
        tytul: "Ładowanie...",
        isEditing: false,
      },
    ],
    obecny2: [
      {
        id: 1,
        zdj: "",
        imie: "Ładowanie...",
        tytul: "Ładowanie...",
        isEditing: false,
      },
    ],
    opiekunowie1: [
      {
        id: 1,
        zdj: "",
        imie: "Ładowanie...",
        tytul: "Ładowanie...",
        isEditing: false,
      },
    ],
    opiekunowie2: [
      {
        id: 1,
        zdj: "",
        imie: "Ładowanie...",
        tytul: "Ładowanie...",
        isEditing: false,
      },
    ],
    stary_zarzad_2023: [
      {
        id: 1,
        zdj: "",
        imie: "Ładowanie...",
        tytul: "Ładowanie...",
        isEditing: false,
      },
    ],
    stary_zarzad_2022: [
      {
        id: 1,
        zdj: "",
        imie: "Ładowanie...",
        tytul: "Ładowanie...",
        isEditing: false,
      },
    ],
    stary_zarzad_2021: [
      {
        id: 1,
        zdj: "",
        imie: "Ładowanie...",
        tytul: "Ładowanie...",
        isEditing: false,
      },
    ],
    stary_zarzad_2020: [
      {
        id: 1,
        zdj: "",
        imie: "Ładowanie...",
        tytul: "Ładowanie...",
        isEditing: false,
      },
    ],
    stary_zarzad_2019: [
      {
        id: 1,
        zdj: "",
        imie: "Ładowanie...",
        tytul: "Ładowanie...",
        isEditing: false,
      },
    ],
    stary_zarzad_2018: [
      {
        id: 1,
        zdj: "",
        imie: "Ładowanie...",
        tytul: "Ładowanie...",
        isEditing: false,
      },
    ],
  });

  var updatedPosts = { ...posts };

  function editButton() {
    const newPosts = { ...posts };

    for (const key in newPosts) {
      newPosts[key] = newPosts[key].map((post) => ({
        ...post,
        isEditing: true,
      }));
    }

    setPosts(newPosts);
  }
  useEffect(() => {
    axios
      .get(fileServerAdress + "/zarzad")
      .then((response) => {
        if (response.data !== undefined) {
          setPosts(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);
  useEffect(() => {
    console.log(posts);
    if (updatedPosts.length > 0) {
      console.log(updatedPosts);
    }
    calculate();
  }, [posts]);

  function calculate() {
    var rokObecny = 2024;

    let zarzadElements = [];
    for (var i = rokObecny - 1; i > 2018 - 1; i--) {
      zarzadElements.push(
        <>
          <div className="managementText">
            <b className="managementText--1">
              {"Zarząd Koła " + (i - 1).toString() + "/" + i.toString()}
            </b>
          </div>
          <div className="managementRow">
            {posts["stary_zarzad_" + i.toString()] &&
              posts["stary_zarzad_" + i.toString()].map((post) => {
                if (post) {
                  return (
                    <Osoba
                      key={post.id}
                      id={post.id}
                      image={post.zdj}
                      name={post.imie}
                      position={post.tytul}
                      isEditing={post.isEditing}
                    />
                  );
                }
              })}
          </div>
        </>
      );
    }

    return zarzadElements;
  }

  async function save(event) {
    //nie refreshuj
    event.preventDefault();

    //ustawiamy updated Posts na to co mamy teraz
    updatedPosts = { ...posts };
    //dla każdej kategorii
    for (const key of Object.keys(posts)) {
      //jeżeli is editing jest włączony
      if (
        Array.isArray(posts[key]) &&
        posts[key].length > 0 &&
        "isEditing" in posts[key][0]
      ) {
        const promises = posts[key].map(async (post) => {
          console.log(post.id);

          const imie = document.getElementById(`imie${post.id}`).value;
          const pozycja = document.getElementById(`pozycja${post.id}`).value;
          const fileInput = document.getElementById(`obrazek${post.id}`);
          const file = fileInput.files[0];
          if (file) {
            var powrot = await sendPhoto(post, imie, pozycja, file);
            console.log("test", powrot);
            return powrot;
          } else {
            return {
              ...post,
              id: post.id,
              imie: imie,
              tytul: pozycja,
              isEditing: false,
            };
          }
        });
        const updatedData = await Promise.all(promises);
        updatedPosts[key] = updatedData;
      }
    }
    setPosts(updatedPosts);
    updateDoBazy(updatedPosts);
  }

  async function sendPhoto(post, imie, pozycja, file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", post.id);
    formData.append("nazwa", imie);
    try {
      const response = await axios.post(
        fileServerAdress + "/uploadzarzad",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      var szlaczek = response.data.slice(25, response.data.length);
      return {
        ...post,
        id: post.id,
        imie: imie,
        tytul: pozycja,
        zdj: szlaczek,
        isEditing: false,
      };
    } catch (error) {
      console.error(error);
    }
  }
  function updateDoBazy(updates) {
    axios
      .put(fileServerAdress + "/zarzad", updates)
      .then((response) => {
        console.log("Post updated successfully:", response.data);
        // Update the state with the modified post
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  }
  return (
    <motion.div
      className="aboutUs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="background">
        <div className="backgroundText">O NAS</div>
      </div>
      <hr className="topLine" />
      <div className="introduction">
        <div className="verticalText">Kim jesteśmy?</div>
        <div className="verticalLine"></div>
        <div className="introductionText">
          <p>
            <b>SKN Zastosowania Metod Sztucznej Inteligencji</b> zrzesza
            Studentów Politechniki Śląskiej, będących pasjonatami robotyki
            mobilnej. Działamy przy Katedrze Podstaw Konstrukcji Maszyn na
            Politechnice Śląskiej. Od strony merytorycznej opiekę nad Nami
            sprawują prof. dr hab. Wojciech Moczulski, dr hab. inż. Piotr
            Przystałka, prof. PŚ oraz dr inż. Wawrzyniec Panfil. Od 2006 roku
            zajmujemy się budową autonomicznych robotów mobilnych. W grupach
            roboczych realizujemy projekty w ramach prac inżynierskich oraz
            magisterskich, a także jako działalność dodatkową, poszerzając tym
            samym swoje horyzonty.
          </p>
        </div>
      </div>
      <div className="mainPhotoContainer">
        <div className="verticalText"> Tak wyglądamy</div>
        <div className="verticalLine"></div>
        <div className="mPContainer">
          <div className="mainPhoto"></div>
        </div>
      </div>
      <div className="management">
        <div className="managementText">
          <b className="managementText--1">Zarząd Koła 2023/2024</b>
          <p className="managementText--2">
            {" "}
            Jeśli chcesz skontaktować się z zarządem Koła wejdź w zakładkę{" "}
            <a>kontakt</a>.
          </p>
          {props.log ? (
            <>
              <button
                onClick={() => {
                  editButton("obecny1");
                }}
              >
                edytuj
              </button>
              <button onClick={save}>save</button>
            </>
          ) : null}
        </div>
        <div className="managementRow">
          {posts.obecny1.map((post) => (
            <Osoba
              key={post.id}
              id={post.id}
              image={post.zdj}
              name={post.imie}
              position={post.tytul}
              isEditing={post.isEditing}
            />
          ))}
        </div>

        <div className="managementRow">
          {posts.obecny2.map((post) => (
            <Osoba
              key={post.id}
              id={post.id}
              image={post.zdj}
              name={post.imie}
              position={post.tytul}
              isEditing={post.isEditing}
            />
          ))}
        </div>
        <div className="tutors">
          <b className="managementText--1">Opiekunowie</b>
        </div>
        <div className="managementRow">
          {posts.opiekunowie1.map((post) => (
            <Osoba
              key={post.id}
              id={post.id}
              image={post.zdj}
              name={post.imie}
              position={post.tytul}
              isEditing={post.isEditing}
            />
          ))}
        </div>

        <div className="managementRow">
          {posts.opiekunowie2.map((post) => (
            <Osoba
              key={post.id}
              id={post.id}
              image={post.zdj}
              name={post.imie}
              position={post.tytul}
              isEditing={post.isEditing}
            />
          ))}
        </div>
        {calculate()}
      </div>
    </motion.div>
  );
}

function Osoba(props) {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const backgroundImage = selectedImage
    ? selectedImage
    : `/zarzad/${props.image}`;

  if (props.isEditing) {
    return (
      <div className="tile">
        <div
          className="osobaPhoto"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <input id={`imie${props.id}`} type="text" defaultValue={props.name} />
        <input
          id={`obrazek${props.id}`}
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileChange}
        />
        <input
          id={`pozycja${props.id}`}
          type="text"
          defaultValue={props.position}
        />
      </div>
    );
  } else {
    return (
      <div className="tile" key={props.id}>
        <div
          className="osobaPhoto"
          style={{ backgroundImage: `url(/zarzad/${props.image})` }}
        ></div>
        <div className="osobaId">{props.name}</div>
        <div className="osobaLine"></div>
        <div className="osobaPosition">{props.position}</div>
      </div>
    );
  }
}

export default AboutUs;
