import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost")

socket.on("connection", () => { console.log("connected") })
