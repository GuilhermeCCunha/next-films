import styles from "./styles.module.scss";

export default function MoviesWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.moviesWrapper}>{children}</div>;
}
