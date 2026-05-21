import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Contacts from "./components/Contacts";
import "./App.css";
import Footer from "./components/Footer";
import Image from "./assets/image.jpg";

function App() {
  return (
    <div className="relative min-h-screen text-white">

      {/* FIXED BACKGROUND IMAGE (PARALLAX) */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Image})` }}
      />

      {/* DARK OVERLAY (ONLY ONE - IMPORTANT) */}
      <div className="fixed inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contacts /></section>
        <Footer/>
      </div>

    </div>
  );
}

export default App;