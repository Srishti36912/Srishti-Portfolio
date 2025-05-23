/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "desktop with books and laptop and notes containing graphs";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Immigration Analysis",
    description:
      "The goal of this project is to analyze the United Nations dataset on international migration.",
    url: "https://immigration-analysis-un.streamlit.app/",
  },
  {
    title: "Movie Recommendation System",
    description:
      "The goal of this project is to recommend movies based on selected genre using IMDb dataset. ",
    url: "https://immigration-analysis-un.streamlit.app/",
  },
  {
    title: "Amazon Clone",
    description:
      "Created Created a clone of the Amazon.com website using HTML and CSS. This project is a simple static website that mimics the layout and design of the original Amazon website.",
    url: "https://github.com/Srishti36912/Amazon-project",
  },
  {
    title: "Currency Converter",
    description:
      "This is a simple currency converter application that allows users to convert between different currencies.",
    url: "https://github.com/Srishti36912/CurrencyConverter",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
