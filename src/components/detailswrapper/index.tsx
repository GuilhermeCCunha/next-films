import styles from "./styles.module.scss";

export default function DetailsWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.detailsWrapper}>{children}</div>;
}
