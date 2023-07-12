import styles from "./Account.module.css";
export default function Account() {
  return (
    <div className={styles.AccountMain}>
      <div className={styles.Account}>
        <li>my account</li>
        <li>discount</li>
        <li>personal information</li>
        <li>my address</li>
        <li>order history</li>
      </div>
    </div>
  );
}