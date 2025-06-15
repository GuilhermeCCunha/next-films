import styles from "./styles.module.scss";

export default function ButtonsWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.buttonsWrapper}>{children}</div>;
}
