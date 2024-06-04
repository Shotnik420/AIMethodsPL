import React from "react";
import "../styles/News.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";

import { ImClock, ImPilcrow } from "react-icons/im";
export default function News({ props, accentColor }) {
  useEffect(() => {
    document.getElementById("newsLine").style.backgroundColor = accentColor;
  }, [accentColor]);

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
          <hr id="newsLine"></hr>
        </h1>
      </div>
      <div className="newsContainer">
        <div className="newsContainerBg">
          <div className="newsPage">
            <MainNews
              bgImg="https://sknaimeth.polsl.pl/wp-content/uploads/2024/03/Screenshot_20240318_181732_Gallery-594x446.jpg"
              readTime="10 minut czytania"
              title="Podsumowanie roku 2023 – raport roczny"
              desc="Nadszedł czas podsumowania naszej pracy, dlatego jak co roku
              udostępniamy nasz raport za rok 2023. W tym roku..."
              date="21 lutego 2024"
            />
            <div className="newsColumn">
              <SecondaryNews
                bgImg="https://sknaimeth.polsl.pl/wp-content/uploads/2023/09/20230831_214025-594x446.jpg"
                readTime="8 minut czytania"
                title="Licealiści z projektem autonomicznego pojazdu napędzanego wodorem"
                desc="Uczniowie Mikołaj Szumilas i Mateusz Trebuniak z III Liceum Ogólnokształcącego..."
                date="20 marca 2024"
              />
              <SecondaryNews
                bgImg="https://sknaimeth.polsl.pl/wp-content/uploads/2023/06/353644957_682761760326956_5266989271111620418_n-594x594.jpg"
                readTime="5 minut czytania"
                title="Projekt pt. „Autonomiczne autko” realizowany przez licealistów"
                desc="Projekt pt. „Autonomiczne autko” realizowany przez Mikołaja i Mateusza – uczniów..."
                date="1 września 2023"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainNews({ bgImg, readTime, title, desc, date }) {
  return (
    <div
      className="mainNews"
      style={{
        backgroundImage: `url(
          "${bgImg}"
        )`,
      }}
    >
      <div className="mainInfoContainer">
        <div className="mainReadTime">{readTime}</div>
        <div className="mainNewsTitle">{title}</div>
        <div className="mainNewsDesc">{desc}</div>
        <div className="mainNewsSection">
          <div className="mainNewsDate">{date}</div>
          <div className="mainNewsBtn">Czytaj dalej...</div>
        </div>
      </div>
    </div>
  );
}

function SecondaryNews({ bgImg, readTime, title, desc, date }) {
  return (
    <div
      className="secondaryNews"
      style={{
        backgroundImage: `url(
        "${bgImg}"
      )`,
      }}
    >
      <div className="secondaryInfoContainer">
        <div className="secondaryReadTime">{readTime}</div>
        <div className="secondaryNewsTitle">{title}</div>
        <div className="secondaryNewsDesc">{desc}</div>
        <div className="secondaryNewsSection">
          <div className="secondaryNewsDate">{date}</div>
          <div className="secondaryNewsBtn">Czytaj dalej...</div>
        </div>
      </div>
    </div>
  );
}
