import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import NavList from "./NavList";

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>OFFLINE</title>
        <meta name="description" content="A zine about Miya from SK8" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <div className={styles.grid}>
        <div className={styles.navigation}>
          <Header />
          <NavList />
        </div>
        <main className={styles.main}>{children}</main>
      </div>

      {false ? <Footer /> : null}
    </div>
  );
}
