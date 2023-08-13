import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import TempNav from "./components/TempNav";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "./components/fetchFromAPI";
import VideoPlayer from "./components/VideoPlayer";
import AppContext from "./components/AppContext";
function App() {
  const [videos, setVideos] = useState([]);



  // const [testVidos, setTestVideos] = useState([
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "DHjqpvDnNGE",
  //     },
  //     snippet: {
  //       publishedAt: "2022-01-13T17:56:13Z",
  //       channelId: "UCsBjURrPoezykLs9EqgamOA",
  //       title: "JavaScript in 100 Seconds",
  //       description:
  //         "JavaScript is the the programming language that built the web. Learn how it evolved into a powerful tool for building websites, ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/DHjqpvDnNGE/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/DHjqpvDnNGE/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/DHjqpvDnNGE/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Fireship",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-01-13T17:56:13Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "W6NZfCO5SIk",
  //     },
  //     snippet: {
  //       publishedAt: "2018-04-24T02:37:33Z",
  //       channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
  //       title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
  //       description:
  //         "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. Want to master JavaScript? Get my complete ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/W6NZfCO5SIk/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Programming with Mosh",
  //       liveBroadcastContent: "none",
  //       publishTime: "2018-04-24T02:37:33Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "PkZNo7MFNFg",
  //     },
  //     snippet: {
  //       publishedAt: "2018-12-10T14:13:40Z",
  //       channelId: "UC8butISFwT-Wl7EV0hUK0BQ",
  //       title: "Learn JavaScript - Full Course for Beginners",
  //       description:
  //         "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/PkZNo7MFNFg/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/PkZNo7MFNFg/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "freeCodeCamp.org",
  //       liveBroadcastContent: "none",
  //       publishTime: "2018-12-10T14:13:40Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "jS4aFq5-91M",
  //     },
  //     snippet: {
  //       publishedAt: "2021-06-21T16:42:15Z",
  //       channelId: "UC8butISFwT-Wl7EV0hUK0BQ",
  //       title: "JavaScript Programming - Full Course",
  //       description:
  //         "Learn JavaScript from scratch by solving over a hundred different coding challenges. Go here for the interactive browser version: ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/jS4aFq5-91M/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/jS4aFq5-91M/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "freeCodeCamp.org",
  //       liveBroadcastContent: "none",
  //       publishTime: "2021-06-21T16:42:15Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "SBmSRK3feww",
  //     },
  //     snippet: {
  //       publishedAt: "2023-04-03T16:28:04Z",
  //       channelId: "UCB6dvaWu0N8uVq2yKsZ5s5g",
  //       title: "JavaScript Full Course (2023) - Beginner to Pro - Part 1",
  //       description:
  //         "In part 1 of this JavaScript tutorial and JavaScript full course, we learn how to build websites with JavaScript and use it with HTML ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/SBmSRK3feww/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/SBmSRK3feww/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/SBmSRK3feww/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "SuperSimpleDev",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-04-03T16:28:04Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "lkIFF4maKMU",
  //     },
  //     snippet: {
  //       publishedAt: "2022-11-22T15:04:57Z",
  //       channelId: "UCsBjURrPoezykLs9EqgamOA",
  //       title: "100+ JavaScript Concepts you Need to Know",
  //       description:
  //         "The ultimate 10 minute JavaScript course that quickly breaks down over 100 key concepts every web developer should know.",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/lkIFF4maKMU/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/lkIFF4maKMU/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/lkIFF4maKMU/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Fireship",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-11-22T15:04:57Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "uaWYRL0g1iw",
  //     },
  //     snippet: {
  //       publishedAt: "2023-04-30T12:00:29Z",
  //       channelId: "UCcJQ96WlEhJ0Ve0SLmU310Q",
  //       title: "How to MASTER Javascript FAST in 2023",
  //       description:
  //         "Try RunJS for FREE - Your Javascript Desktop Playground - https://bit.ly/41OUi7H In this video, I will tell you exactly how I would ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/uaWYRL0g1iw/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/uaWYRL0g1iw/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/uaWYRL0g1iw/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Internet Made Coder",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-04-30T12:00:29Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "quJzdnXuNDc",
  //     },
  //     snippet: {
  //       publishedAt: "2023-01-23T17:31:44Z",
  //       channelId: "UCZ9qFEC82qM6Pk-54Q4TVWA",
  //       title: "How to Learn Javascript in 2023 (From ZERO)",
  //       description:
  //         "Is Javascript the programming language you are 100% set on learning? This video lays out a complete strategy for how to learn it ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/quJzdnXuNDc/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/quJzdnXuNDc/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/quJzdnXuNDc/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Andy Sterkowitz",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-01-23T17:31:44Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "aXOChLn5ZdQ",
  //     },
  //     snippet: {
  //       publishedAt: "2022-11-24T16:00:11Z",
  //       channelId: "UCsBjURrPoezykLs9EqgamOA",
  //       title: "JavaScript for the Haters",
  //       description:
  //         "Why does everybody hate JavaScript so much? A complete roast of JS that highlights the strongest criticisms against the world's ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/aXOChLn5ZdQ/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/aXOChLn5ZdQ/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/aXOChLn5ZdQ/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Fireship",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-11-24T16:00:11Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "c-I5S_zTwAc",
  //     },
  //     snippet: {
  //       publishedAt: "2019-12-09T19:15:01Z",
  //       channelId: "UCRLEADhMcb8WUdnQ5_Alk7g",
  //       title: "Learn JAVASCRIPT in just 5 MINUTES (2020)",
  //       description:
  //         'Learn the most important parts of 2020 Javascript in just 5 minutes Learn the "Zero to Freelance Programmer" Strategy here ...',
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/c-I5S_zTwAc/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/c-I5S_zTwAc/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/c-I5S_zTwAc/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Aaron Jack",
  //       liveBroadcastContent: "none",
  //       publishTime: "2019-12-09T19:15:01Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "eWLDAAMsD-c",
  //     },
  //     snippet: {
  //       publishedAt: "2021-03-20T17:00:27Z",
  //       channelId: "UCp3qCNTjy-UZy7HbTpZqR4w",
  //       title:
  //         "JavaScript Tutorial für Anfänger: Lerne JavaScript in 90 Minuten (deutsch)",
  //       description:
  //         "Kostenloses Beratungsgespräch: https://weiterbildung.developerakademie.com/y In diesem JavaScript Tutorial lernst du die ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/eWLDAAMsD-c/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/eWLDAAMsD-c/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/eWLDAAMsD-c/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Programmieren lernen",
  //       liveBroadcastContent: "none",
  //       publishTime: "2021-03-20T17:00:27Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "8dWL3wF_OMw",
  //     },
  //     snippet: {
  //       publishedAt: "2022-03-05T16:39:40Z",
  //       channelId: "UC4SVo0Ue36XCfOyb5Lh1viQ",
  //       title: "JavaScript Full Course for free 🌐 (2023)",
  //       description:
  //         "JavaScript #tutorial #beginners JavaScript tutorial for beginners full course ⭐️Time Stamps⭐️ #1 (00:00:00) JavaScript tutorial ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/8dWL3wF_OMw/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/8dWL3wF_OMw/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/8dWL3wF_OMw/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Bro Code",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-03-05T16:39:40Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "htznIeWKgg8",
  //     },
  //     snippet: {
  //       publishedAt: "2023-06-18T18:00:27Z",
  //       channelId: "UCc7gpqMnnOSbU_F2-5MVVZw",
  //       title:
  //         "JavaScript Crash Course: Master the Basics in One Video! Ignite Your Front-End Mastery Series!",
  //       description:
  //         "SORRY FOR THE INCONVENIENCE (due to some error last part of the video is removed. here's is the link of remaining part): ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/htznIeWKgg8/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/htznIeWKgg8/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/htznIeWKgg8/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Sheryians Coding School",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-06-18T18:00:27Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "E3XxeE7NF30",
  //     },
  //     snippet: {
  //       publishedAt: "2023-03-03T15:00:13Z",
  //       channelId: "UC4JX40jDee_tINbkjycV4Sg",
  //       title: "Learn JavaScript With This ONE Project!",
  //       description:
  //         "Today, you are going to be learning JavaScript by completing a project with me. I will explain all of the syntax, what it does and ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/E3XxeE7NF30/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/E3XxeE7NF30/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/E3XxeE7NF30/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Tech With Tim",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-03-03T15:00:13Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "LZpS4xS307Q",
  //     },
  //     snippet: {
  //       publishedAt: "2022-02-19T17:00:10Z",
  //       channelId: "UCp3qCNTjy-UZy7HbTpZqR4w",
  //       title: "5 JavaScript Konzepte die du kennen musst (als Anfänger)",
  //       description:
  //         "Kostenloses Beratungsgespräch: https://weiterbildung.developerakademie.com/y In diesem Video lernst du 5 JavaScript ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/LZpS4xS307Q/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/LZpS4xS307Q/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/LZpS4xS307Q/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Programmieren lernen",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-02-19T17:00:10Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "KyWFHWtkwN8",
  //     },
  //     snippet: {
  //       publishedAt: "2021-05-01T16:00:11Z",
  //       channelId: "UCp3qCNTjy-UZy7HbTpZqR4w",
  //       title: "JavaScript in 5 Minuten",
  //       description:
  //         "Kostenloses Beratungsgespräch: https://weiterbildung.developerakademie.com/y JavaScript ist die Programmiersprache, die laut ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/KyWFHWtkwN8/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/KyWFHWtkwN8/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/KyWFHWtkwN8/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Programmieren lernen",
  //       liveBroadcastContent: "none",
  //       publishTime: "2021-05-01T16:00:11Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "7L2RLBmEJmE",
  //     },
  //     snippet: {
  //       publishedAt: "2023-02-04T17:00:03Z",
  //       channelId: "UCFbNIlppjAuEX4znoulh0Cw",
  //       title:
  //         "How To Learn JavaScript In 2023 - From Zero To Mid-Level Developer",
  //       description:
  //         "JavaScript Simplified Course: https://javascriptsimplified.com JavaScript is complex and difficult to learn, but it doesn't have to be.",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/7L2RLBmEJmE/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/7L2RLBmEJmE/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/7L2RLBmEJmE/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Web Dev Simplified",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-02-04T17:00:03Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "uqMk2OaFf-g",
  //     },
  //     snippet: {
  //       publishedAt: "2023-06-02T07:00:32Z",
  //       channelId: "UCVbz7l0COUdLupcY4YtYH0w",
  //       title:
  //         "Сравнение моих &quot;любимых&quot; языков программирования: Python vs JavaScript",
  //       description:
  //         "В этом видео мы сравниваем Python и JavaScript. Рассматриваем области применения, зарплаты разработчиков, а также ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/uqMk2OaFf-g/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/uqMk2OaFf-g/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/uqMk2OaFf-g/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Sergey Nemchinskiy",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-06-02T07:00:32Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "5AML5Ux2Fbk",
  //     },
  //     snippet: {
  //       publishedAt: "2023-03-21T18:24:52Z",
  //       channelId: "UCGP8LgaWO1lLfFQUQ2BA7rA",
  //       title: "انهي احسن JavaScript ولا TypeScript ؟",
  //       description:
  //         "من زمان وJavaScript بيتميز بان الVariable ممكن يشيل اي نوع بيانات من غير اي قيود. يعني لو عرفت نوع Variable بيشيل string ممكن ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/5AML5Ux2Fbk/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/5AML5Ux2Fbk/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/5AML5Ux2Fbk/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Yehia Tech يحيى تك",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-03-21T18:24:52Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "lI1ae4REbFM",
  //     },
  //     snippet: {
  //       publishedAt: "2022-06-30T16:00:11Z",
  //       channelId: "UCqrILQNl5Ed9Dz6CGMyvMTQ",
  //       title:
  //         "JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)",
  //       description:
  //         "FORK THIS REPL https://join.replit.com/cp-javascript GET THE FREE COURSE ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/lI1ae4REbFM/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/lI1ae4REbFM/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/lI1ae4REbFM/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Clever Programmer",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-06-30T16:00:11Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "zJSY8tbf_ys",
  //     },
  //     snippet: {
  //       publishedAt: "2022-08-24T13:07:36Z",
  //       channelId: "UC8butISFwT-Wl7EV0hUK0BQ",
  //       title:
  //         "Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS)",
  //       description:
  //         "Learn JavaScript, HTML, and CSS in this Frontend Web Development course. In this massive course, you will go from no coding ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/zJSY8tbf_ys/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/zJSY8tbf_ys/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/zJSY8tbf_ys/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "freeCodeCamp.org",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-08-24T13:07:36Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#channel",
  //       channelId: "UCmXmlB4-HJytD7wek0Uo97A",
  //     },
  //     snippet: {
  //       publishedAt: "2018-12-25T10:37:24Z",
  //       channelId: "UCmXmlB4-HJytD7wek0Uo97A",
  //       title: "JavaScript Mastery",
  //       description:
  //         "Launch your development career with project-based coaching - showcase your skills with practical development experience and ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0xffffffff-no-rj-mo",
  //         },
  //         medium: {
  //           url: "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s240-c-k-c0xffffffff-no-rj-mo",
  //         },
  //         high: {
  //           url: "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0xffffffff-no-rj-mo",
  //         },
  //       },
  //       channelTitle: "JavaScript Mastery",
  //       liveBroadcastContent: "none",
  //       publishTime: "2018-12-25T10:37:24Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "hdI2bqOjy3c",
  //     },
  //     snippet: {
  //       publishedAt: "2019-03-13T15:46:32Z",
  //       channelId: "UC29ju8bIPH5as8OGnQzwJyA",
  //       title: "JavaScript Crash Course For Beginners",
  //       description:
  //         "In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/hdI2bqOjy3c/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/hdI2bqOjy3c/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Traversy Media",
  //       liveBroadcastContent: "none",
  //       publishTime: "2019-03-13T15:46:32Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "cYNVVspXUdA",
  //     },
  //     snippet: {
  //       publishedAt: "2022-09-03T12:00:31Z",
  //       channelId: "UCcJQ96WlEhJ0Ve0SLmU310Q",
  //       title: "How I Would Learn Javascript FAST in 2023 (from zero)",
  //       description:
  //         "Sign up to Morning Brew for free today at https://morningbrewdaily.com/internetmadecoder In this video we learn how to learn ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/cYNVVspXUdA/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/cYNVVspXUdA/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/cYNVVspXUdA/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Internet Made Coder",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-09-03T12:00:31Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "a00NRSFgHsY",
  //     },
  //     snippet: {
  //       publishedAt: "2021-02-02T15:00:00Z",
  //       channelId: "UC-T8W79DN6PBnzomelvqJYw",
  //       title: "5 JavaScript Concepts You HAVE TO KNOW",
  //       description:
  //         "How well do you know JavaScript? Well, if you don't know these 5 concepts, then you better get on it! 00:00 - Intro 01:00 - Equality ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/a00NRSFgHsY/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/a00NRSFgHsY/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/a00NRSFgHsY/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "James Q Quick",
  //       liveBroadcastContent: "none",
  //       publishTime: "2021-02-02T15:00:00Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "Ukg_U3CnJWI",
  //     },
  //     snippet: {
  //       publishedAt: "2014-08-05T14:30:15Z",
  //       channelId: "UCc1Pn7FxieMohCZFPYEbs7w",
  //       title: "Learn JavaScript in 12 Minutes",
  //       description:
  //         "Learn the fundamental features of JavaScript - the language used to add dynamic, interactive content to websites. I teach you how ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/Ukg_U3CnJWI/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/Ukg_U3CnJWI/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/Ukg_U3CnJWI/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Jake Wright",
  //       liveBroadcastContent: "none",
  //       publishTime: "2014-08-05T14:30:15Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "Mus_vwhTCq0",
  //     },
  //     snippet: {
  //       publishedAt: "2018-09-27T18:56:49Z",
  //       channelId: "UCsBjURrPoezykLs9EqgamOA",
  //       title: "JavaScript Pro Tips - Code This, NOT That",
  //       description:
  //         "New Series! Code this , not that . Learn how to write solid modern JavaScript and avoid bad code from the olden days.",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/Mus_vwhTCq0/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/Mus_vwhTCq0/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/Mus_vwhTCq0/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Fireship",
  //       liveBroadcastContent: "none",
  //       publishTime: "2018-09-27T18:56:49Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "YXHnanpIdNo",
  //     },
  //     snippet: {
  //       publishedAt: "2022-01-08T17:00:17Z",
  //       channelId: "UCp3qCNTjy-UZy7HbTpZqR4w",
  //       title: "JavaScript: Simples Tutorial für komplette Anfänger",
  //       description:
  //         "Kostenloses Beratungsgespräch: https://weiterbildung.developerakademie.com/y In diesem Tutorial lernst du JavaScript als ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/YXHnanpIdNo/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/YXHnanpIdNo/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/YXHnanpIdNo/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Programmieren lernen",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-01-08T17:00:17Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "9emXNzqCKyg",
  //     },
  //     snippet: {
  //       publishedAt: "2019-07-15T16:41:44Z",
  //       channelId: "UCsBjURrPoezykLs9EqgamOA",
  //       title: "The JavaScript Survival Guide",
  //       description:
  //         'The JavaScript Survival Guide provides protection from the so-called "weird" features that you will encounter as a JS developer.',
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/9emXNzqCKyg/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/9emXNzqCKyg/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/9emXNzqCKyg/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Fireship",
  //       liveBroadcastContent: "none",
  //       publishTime: "2019-07-15T16:41:44Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "6YwbZbHRQ8w",
  //     },
  //     snippet: {
  //       publishedAt: "2022-08-04T14:58:22Z",
  //       channelId: "UCetRsdZxDQDcgVDJd6erz6g",
  //       title: "JAVASCRIPT do básico ao avançado ( Mapa de estudos / Roadmap )",
  //       description:
  //         "Javascript é uma das linguagens mais versáteis e requisitadas no meio de tecnologia, isso porque com javascript você pode ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/6YwbZbHRQ8w/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/6YwbZbHRQ8w/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/6YwbZbHRQ8w/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Attekita Dev",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-08-04T14:58:22Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "EgDmCbhmstU",
  //     },
  //     snippet: {
  //       publishedAt: "2023-06-25T17:30:02Z",
  //       channelId: "UCc7gpqMnnOSbU_F2-5MVVZw",
  //       title:
  //         "JavaScript Advance Crash Course: Level Up Your Coding Skills! Accelerate Your Front-End Mastery!",
  //       description:
  //         "Are you ready to take your JavaScript skills to the next level? Look no further! Join our JavaScript Advance Crash Course and ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/EgDmCbhmstU/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/EgDmCbhmstU/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/EgDmCbhmstU/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Sheryians Coding School",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-06-25T17:30:02Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "xcydoidzuGQ",
  //     },
  //     snippet: {
  //       publishedAt: "2022-11-05T13:00:08Z",
  //       channelId: "UCpuohDedAhBFqei4vvC3neA",
  //       title:
  //         "TUTTO JavaScript in 30 MINUTI - Corso Completo PROGRAMMAZIONE FACILE partendo da zero",
  //       description:
  //         "Imparare da zero tutto JavaScript in meno di 30 minuti non è facile ma è possibile. In questo corso completo ti spiegherò tutto ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/xcydoidzuGQ/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/xcydoidzuGQ/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/xcydoidzuGQ/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Gian's Tech",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-11-05T13:00:08Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "_buOIVAEB9M",
  //     },
  //     snippet: {
  //       publishedAt: "2023-04-30T15:30:07Z",
  //       channelId: "UCsvqVGtbbyHaMoevxPAq9Fg",
  //       title:
  //         "🔥 Javascript Full Course 2023 | Learn Javascript in 12 Hours | Javascript for Beginners|Simplilearn",
  //       description: "Post Graduate Program In Full Stack Web Development: ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/_buOIVAEB9M/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/_buOIVAEB9M/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/_buOIVAEB9M/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Simplilearn",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-04-30T15:30:07Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "EfAl9bwzVZk",
  //     },
  //     snippet: {
  //       publishedAt: "2021-01-20T15:30:01Z",
  //       channelId: "UCY38RvRIxYODO4penyxUwTg",
  //       title:
  //         "JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours",
  //       description:
  //         "Web Dev Roadmap for Beginners (Free!): https://bit.ly/DaveGrayWebDevRoadmap This JavaScript Full Course for Beginners is ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/EfAl9bwzVZk/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/EfAl9bwzVZk/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/EfAl9bwzVZk/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Dave Gray",
  //       liveBroadcastContent: "none",
  //       publishTime: "2021-01-20T15:30:01Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#playlist",
  //       playlistId: "PLNmsVeXQZj7qOfMI2ZNk-LXUAiXKrwDIi",
  //     },
  //     snippet: {
  //       publishedAt: "2016-06-30T09:02:32Z",
  //       channelId: "UCLGY6_j7kZfA1dmmjR1J_7w",
  //       title: "JavaScript Lernen für Anfänger bis Profis",
  //       description:
  //         "Lernt hier Javascript auf Deutsch (German) und steigt vom Anfänger zum Forgeschrittenen Webdeveloper. Schreibt endlich ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/UeZi8a99iS0/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/UeZi8a99iS0/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/UeZi8a99iS0/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "The Morpheus Tutorials",
  //       liveBroadcastContent: "none",
  //       publishTime: "2016-06-30T09:02:32Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "FOD408a0EzU",
  //     },
  //     snippet: {
  //       publishedAt: "2023-03-04T17:00:15Z",
  //       channelId: "UCFbNIlppjAuEX4znoulh0Cw",
  //       title: "How To Create/Use Functions - JavaScript Essentials",
  //       description:
  //         "JavaScript Simplified Course: https://javascriptsimplified.com Functions are one of the most important things to understand in ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/FOD408a0EzU/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/FOD408a0EzU/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/FOD408a0EzU/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Web Dev Simplified",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-03-04T17:00:15Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "CxgOKJh4zWE",
  //     },
  //     snippet: {
  //       publishedAt: "2021-12-20T08:00:14Z",
  //       channelId: "UCiyasqPIZz8zzbJp7-17dJw",
  //       title: "JavaScript - Полный Курс JavaScript Для Начинающих [11 ЧАСОВ]",
  //       description:
  //         "Полный курс JavaScript [24 ЧАСА] - ВКЛЮЧАЕТ 80 ЗАДАЧ С РЕШЕНИЯМИ https://www.udemy.com/course/javascript-ru/?",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/CxgOKJh4zWE/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/CxgOKJh4zWE/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/CxgOKJh4zWE/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Bogdan Stashchuk",
  //       liveBroadcastContent: "none",
  //       publishTime: "2021-12-20T08:00:14Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "Ri76yOpLrNg",
  //     },
  //     snippet: {
  //       publishedAt: "2021-09-20T13:45:01Z",
  //       channelId: "UCFuIUoyHB12qpYa8Jpxoxow",
  //       title:
  //         "JavaScript (A linguagem mais AMADA e/ou ODIADA 😁) // Dicionário do Programador",
  //       description:
  //         "VPS COM DESCONTO → https://codft.me/HGRi76yOpLrNg JavaScript, JS ou ECMAScript, não importa o nome, ela é ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/Ri76yOpLrNg/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/Ri76yOpLrNg/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/Ri76yOpLrNg/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Código Fonte TV",
  //       liveBroadcastContent: "none",
  //       publishTime: "2021-09-20T13:45:01Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "ZvbzSrg0afE",
  //     },
  //     snippet: {
  //       publishedAt: "2020-10-19T11:52:56Z",
  //       channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
  //       title:
  //         "How JavaScript Works 🔥&amp; Execution Context | Namaste JavaScript Ep.1",
  //       description:
  //         "Understanding how JavaScript works behind the scenes, inside the JS Engine will make you a better developer. This video covers ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/ZvbzSrg0afE/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/ZvbzSrg0afE/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/ZvbzSrg0afE/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Akshay Saini",
  //       liveBroadcastContent: "none",
  //       publishTime: "2020-10-19T11:52:56Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "92bkNXvnpmg",
  //     },
  //     snippet: {
  //       publishedAt: "2023-06-25T12:15:00Z",
  //       channelId: "UCWX0cUR2rZcqKei1Vstww-A",
  //       title:
  //         "How Much HTML, CSS, &amp; JavaScript Is Enough In 2023 | Setting Realistic Expectations",
  //       description:
  //         "Remote jobs newsletter - https://indiaremotejobs.substack.com/ In this video, I talk about what should you learn if you're searching ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/92bkNXvnpmg/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/92bkNXvnpmg/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/92bkNXvnpmg/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Harkirat Singh",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-06-25T12:15:00Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "Zx9k4R4g5rs",
  //     },
  //     snippet: {
  //       publishedAt: "2023-02-04T08:58:07Z",
  //       channelId: "UCdki4c03RgiBBQQmsqYxRdA",
  //       title: "Изучи JavaScript за 5 минут в 2023",
  //       description:
  //         "Мой канал в telegram: https://t.me/burtovoy_it Курсы по программированию на JavaScript: https://burtovoy.org В этом видео мы ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/Zx9k4R4g5rs/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/Zx9k4R4g5rs/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/Zx9k4R4g5rs/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Александр Буртовой",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-02-04T08:58:07Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "qikxEIxsXco",
  //     },
  //     snippet: {
  //       publishedAt: "2020-12-01T05:45:14Z",
  //       channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
  //       title: "Closures in JS 🔥 | Namaste JavaScript Episode 10",
  //       description:
  //         "Closures in JavaScript is the most important topic for interviews. Even many senior frontend developers don't understand this ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/qikxEIxsXco/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/qikxEIxsXco/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/qikxEIxsXco/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Akshay Saini",
  //       liveBroadcastContent: "none",
  //       publishTime: "2020-12-01T05:45:14Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "RvcRxEeJqi8",
  //     },
  //     snippet: {
  //       publishedAt: "2019-12-31T18:07:05Z",
  //       channelId: "UCdbMvobipjxi6gdr3L1PBrQ",
  //       title: "APRENDA JAVASCRIPT EM 10 MINUTOS",
  //       description:
  //         "Pacote Full-Stack: https://pacotefullstack.com/completo Curso Desenvolvimento de Games: ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/RvcRxEeJqi8/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/RvcRxEeJqi8/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/RvcRxEeJqi8/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Danki Code",
  //       liveBroadcastContent: "none",
  //       publishTime: "2019-12-31T18:07:05Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "N8Xt5rP_DUo",
  //     },
  //     snippet: {
  //       publishedAt: "2023-06-01T22:30:08Z",
  //       channelId: "UCrvxjsSrcpInnd4NIGDHt2g",
  //       title:
  //         "JAVASCRIPT desde cero | Curso tutorial completo gratis por Sergie Code",
  //       description:
  //         "El curso que tanto me pidieron llegó! JavaScript es un lenguaje de programación multipropósito el cual sirve, no solo para ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/N8Xt5rP_DUo/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/N8Xt5rP_DUo/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/N8Xt5rP_DUo/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Sergie Code",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-06-01T22:30:08Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "PFmuCDHHpwk",
  //     },
  //     snippet: {
  //       publishedAt: "2018-03-30T00:30:46Z",
  //       channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
  //       title:
  //         "Object-oriented Programming in JavaScript: Made Super Simple | Mosh",
  //       description:
  //         "Get the COMPLETE course (70% OFF - LIMITED TIME): http://bit.ly/2keDCna Object-oriented programming in JavaScript: learn all ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/PFmuCDHHpwk/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/PFmuCDHHpwk/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/PFmuCDHHpwk/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Programming with Mosh",
  //       liveBroadcastContent: "none",
  //       publishTime: "2018-03-30T00:30:46Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "McKNP3g6VBA",
  //     },
  //     snippet: {
  //       publishedAt: "2022-01-12T18:29:17Z",
  //       channelId: "UCwAa6VoM1GCg7n4s3u9FTAg",
  //       title: "Curso Javascript Completo (6 Horas)",
  //       description:
  //         "Neste Curso de Javascript Completo vamos aprender todos os conceitos importantes dessa linguagem de programação ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/McKNP3g6VBA/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/McKNP3g6VBA/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/McKNP3g6VBA/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Programação Web",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-01-12T18:29:17Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "R81DdtlPrqU",
  //     },
  //     snippet: {
  //       publishedAt: "2023-04-29T00:05:13Z",
  //       channelId: "UCsvqVGtbbyHaMoevxPAq9Fg",
  //       title:
  //         "🔥JavaScript Full Course 2023 | JavaScript Tutorial For Beginners 2023 | JavaScript | Simplilearn",
  //       description: "Caltech Coding Bootcamp(US Only): ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/R81DdtlPrqU/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/R81DdtlPrqU/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/R81DdtlPrqU/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Simplilearn",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-04-29T00:05:13Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "o7qnEYyC9Pg",
  //     },
  //     snippet: {
  //       publishedAt: "2023-06-27T00:22:45Z",
  //       channelId: "UCJnKVGmXRXrH49Tvrx5X0Sw",
  //       title: "JAVASCRIPT PARA WEB | DO ZERO AO JAVASCRIPT | PRIMEIRO DIA",
  //       description:
  //         "Descubra o mundo do JavaScript e sua importância para a web. Aprenda como funciona o Document Object Model (DOM) e ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/o7qnEYyC9Pg/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/o7qnEYyC9Pg/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/o7qnEYyC9Pg/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "LINUXtips",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-06-27T00:22:45Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#playlist",
  //       playlistId: "PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5",
  //     },
  //     snippet: {
  //       publishedAt: "2020-01-08T04:07:46Z",
  //       channelId: "UCNSCWwgW-rwmoE3Yc4WmJhw",
  //       title: "Javascript Cơ Bản",
  //       description:
  //         "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/0SJE9dYdpps/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/0SJE9dYdpps/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/0SJE9dYdpps/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "F8 Official",
  //       liveBroadcastContent: "none",
  //       publishTime: "2020-01-08T04:07:46Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "WRlfwBof66s",
  //     },
  //     snippet: {
  //       publishedAt: "2021-09-27T21:00:08Z",
  //       channelId: "UCHxTOeCucWlObUstXf8jb8Q",
  //       title: "Aprenda JAVASCRIPT em apenas 5 MINUTOS (2023)",
  //       description:
  //         "javascript #webdevelopment Aprenda as partes mais importantes do JavaScript em 2023 em apenas 5 minutos Este vídeo foi ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/WRlfwBof66s/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/WRlfwBof66s/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/WRlfwBof66s/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Tiger Codes",
  //       liveBroadcastContent: "none",
  //       publishTime: "2021-09-27T21:00:08Z",
  //     },
  //   },
  // ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      console.log(data);
      setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <TempNav />
        <SubNavbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Routes>
          <Route path="/" exact element={<Feed videos={videos} />}></Route>
          <Route path="/video/:id" exact element={<VideoPlayer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
