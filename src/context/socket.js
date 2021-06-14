import React from "react";
import socketio from "socket.io-client";

export const socket = socketio.connect("http://54.89.37.132:8000");
export const SocketContext = React.createContext();