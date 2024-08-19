import React from "react";
import styles from "./UserInfo.module.scss";

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  // Проверяем, является ли additionalText датой
  const date = new Date(additionalText);
  const isValidDate = !isNaN(date);

  // Форматируем дату, если она валидна
  const formattedDate = isValidDate
    ? `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.${date.getFullYear()}`
    : additionalText;

  return (
    <div className={styles.root}>
      <img
        className={styles.avatar}
        src={avatarUrl || "/noavatar.png"}
        alt={fullName}
      />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{formattedDate}</span>
      </div>
    </div>
  );
};
