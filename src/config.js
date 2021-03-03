import { io } from "socket.io-client";

const server = "http://localhost:5000";
export const socket = io.connect(server);
