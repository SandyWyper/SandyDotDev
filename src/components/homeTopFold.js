import React from "react"
import LinkedInLink from "./linkedInLink"
import GitHubLink from "./gitHubLink"
import HomeNav from "./homeNav"
import DownArrow from "./downArrow"

const HomeTopFold = () => {
  return (
    <section className="w-full p-8 shadow-md sm:p-16 md:p-0 md:grid md:grid-cols-6 top-fold">
      <HomeNav />
      <div className="flex flex-col justify-center h-full md:col-end-6 md:col-start-2">
        <svg
          className="w-56 fill-current text-custom-gray"
          viewBox="0 0 237 36"
        >
          <path d="M1.042 7.447C1.042 4.925 1.679 3.105 2.953 1.987C4.227 0.868998 6.294 0.309999 9.154 0.309999C11.156 0.309999 12.768 0.829999 13.99 1.87C15.212 2.91 16.096 4.496 16.642 6.628L13.015 9.358H11.104L15.316 6.199C14.77 4.457 13.977 3.235 12.937 2.533C11.923 1.831 10.662 1.48 9.154 1.48C8.114 1.48 7.23 1.545 6.502 1.675C5.8 1.805 5.085 2.065 4.357 2.455C3.655 2.819 3.122 3.417 2.758 4.249C2.394 5.081 2.212 6.147 2.212 7.447C2.212 8.591 2.732 9.605 3.772 10.489C4.838 11.373 6.125 12.127 7.633 12.751C9.141 13.375 10.649 14.012 12.157 14.662C13.691 15.312 14.978 16.144 16.018 17.158C17.084 18.172 17.617 19.342 17.617 20.668C17.617 23.268 16.967 25.205 15.667 26.479C14.393 27.753 12.196 28.39 9.076 28.39C6.528 28.39 4.526 27.883 3.07 26.869C1.614 25.829 0.613 24.23 0.0670001 22.072L1.159 21.604C1.679 23.71 2.563 25.179 3.811 26.011C5.085 26.817 6.84 27.22 9.076 27.22C11.572 27.22 13.418 26.739 14.614 25.777C15.836 24.815 16.447 23.112 16.447 20.668C16.447 19.524 15.914 18.51 14.848 17.626C13.808 16.742 12.521 15.988 10.987 15.364C9.479 14.74 7.971 14.103 6.463 13.453C4.955 12.803 3.668 11.971 2.602 10.957C1.562 9.943 1.042 8.773 1.042 7.447ZM25.6333 26.83H38.3473L30.3523 7.993L21.8503 28H20.6023L30.3523 4.99L40.1023 28H25.6333V26.83ZM44.5517 28V5.38H45.7217L58.4357 25.855V5.38H59.6057V28H58.4357L45.7217 7.486V28H44.5517ZM69.9864 28H67.0224V5.38H69.9864C73.8344 5.38 76.9024 6.394 79.1904 8.422C81.4784 10.45 82.6224 13.206 82.6224 16.69C82.6224 20.174 81.4784 22.93 79.1904 24.958C76.9024 26.986 73.8344 28 69.9864 28ZM69.9864 26.83C73.4964 26.83 76.2784 25.933 78.3324 24.139C80.4124 22.345 81.4524 19.862 81.4524 16.69C81.4524 13.518 80.4124 11.035 78.3324 9.241C76.2784 7.447 73.4964 6.55 69.9864 6.55H68.1924V26.83H69.9864ZM89.944 5.38H105.037L95.872 27.025V35.8H94.702V27.025L85.537 5.38H86.785L95.287 25.387L103.282 6.55H89.944V5.38ZM113.312 28H109.568V0.699998H113.312C117.056 0.699998 120.228 2.078 122.828 4.834C125.428 7.59 126.728 10.762 126.728 14.35C126.728 17.938 125.428 21.11 122.828 23.866C120.228 26.622 117.056 28 113.312 28ZM113.312 26.83C116.718 26.83 119.604 25.582 121.97 23.086C124.362 20.564 125.558 17.652 125.558 14.35C125.558 11.048 124.362 8.149 121.97 5.653C119.604 3.131 116.718 1.87 113.312 1.87H110.738V26.83H113.312ZM143.918 6.589C143.034 6.303 141.942 6.16 140.642 6.16C139.342 6.16 138.25 6.303 137.366 6.589C136.482 6.849 135.663 7.356 134.909 8.11C134.181 8.838 133.635 9.917 133.271 11.347C132.907 12.751 132.725 14.532 132.725 16.69C132.725 18.848 132.907 20.642 133.271 22.072C133.635 23.476 134.181 24.555 134.909 25.309C135.663 26.037 136.482 26.544 137.366 26.83C138.25 27.09 139.342 27.22 140.642 27.22C141.942 27.22 143.034 27.09 143.918 26.83C144.802 26.544 145.608 26.037 146.336 25.309C147.09 24.555 147.649 23.476 148.013 22.072C148.377 20.642 148.559 18.848 148.559 16.69C148.559 14.532 148.377 12.751 148.013 11.347C147.649 9.917 147.09 8.838 146.336 8.11C145.608 7.356 144.802 6.849 143.918 6.589ZM147.623 25.621C146.219 27.467 143.892 28.39 140.642 28.39C137.392 28.39 135.065 27.467 133.661 25.621C132.257 23.775 131.555 20.798 131.555 16.69C131.555 12.582 132.257 9.605 133.661 7.759C135.065 5.913 137.392 4.99 140.642 4.99C143.892 4.99 146.219 5.913 147.623 7.759C149.027 9.605 149.729 12.582 149.729 16.69C149.729 20.798 149.027 23.775 147.623 25.621ZM170.807 5.38V6.55H162.617V28H161.447V6.55H153.257V5.38H170.807ZM179.201 28H175.457V0.699998H179.201C182.945 0.699998 186.117 2.078 188.717 4.834C191.317 7.59 192.617 10.762 192.617 14.35C192.617 17.938 191.317 21.11 188.717 23.866C186.117 26.622 182.945 28 179.201 28ZM179.201 26.83C182.607 26.83 185.493 25.582 187.859 23.086C190.251 20.564 191.447 17.652 191.447 14.35C191.447 11.048 190.251 8.149 187.859 5.653C185.493 3.131 182.607 1.87 179.201 1.87H176.627V26.83H179.201ZM213.551 25.699C212.121 27.493 209.781 28.39 206.531 28.39C203.281 28.39 200.954 27.467 199.55 25.621C198.146 23.775 197.444 20.798 197.444 16.69C197.444 12.582 198.146 9.605 199.55 7.759C200.954 5.913 203.281 4.99 206.531 4.99C210.301 4.99 212.862 6.225 214.214 8.695L204.659 16.69H202.826L212.693 8.461C211.549 6.927 209.495 6.16 206.531 6.16C205.231 6.16 204.139 6.303 203.255 6.589C202.371 6.849 201.552 7.356 200.798 8.11C200.07 8.838 199.524 9.917 199.16 11.347C198.796 12.751 198.614 14.532 198.614 16.69C198.614 18.848 198.796 20.642 199.16 22.072C199.524 23.476 200.07 24.555 200.798 25.309C201.552 26.037 202.371 26.544 203.255 26.83C204.139 27.09 205.231 27.22 206.531 27.22C209.495 27.22 211.549 26.453 212.693 24.919L213.551 25.699ZM236.282 5.38L226.532 28.39L216.782 5.38H218.03L226.532 25.387L235.034 5.38H236.282Z" />
        </svg>

        <h2 className="leading-tight">Hi, welcome to my site!</h2>
        <h5 className="max-w-2xl">
          I'm a born again web developer who's into learning things and building
          stuff.
        </h5>
        <ul>
          <li className="scale-hover-2">
            <LinkedInLink />
          </li>
          <li className="scale-hover-2">
            <GitHubLink />
          </li>
        </ul>
      </div>
      <DownArrow />
    </section>
  )
}

export default HomeTopFold
