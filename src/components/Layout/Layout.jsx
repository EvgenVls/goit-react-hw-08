import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <main className={css.container}>
      <AppBar />
      {children}
      <Toaster />
    </main>
  );
}
