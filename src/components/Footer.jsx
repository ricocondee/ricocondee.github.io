import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.socials}>
        <a
          href="https://github.com/ricocondee/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="256"
            height="256"
            viewBox="0 0 432 416"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="432" height="416" rx="8" fill="none" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 432 416"
              fill="#000000"
              x="0"
              y="0"
              width="432"
              height="416"
            >
              <path
                fill="#000000"
                d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
              />
            </svg>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/ricocondee/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="256"
            height="256"
            viewBox="0 0 432 432"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="432" height="432" rx="8" fill="none" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 432 432"
              fill="#000000"
              x="0"
              y="0"
              width="432"
              height="432"
            >
              <path
                fill="#000000"
                d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"
              />
            </svg>
          </svg>
        </a>
        <a
          href="https://twitter.com/ricocondee/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="256"
            height="256"
            viewBox="0 0 432 384"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="432" height="432" rx="8" fill="none" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 432 432"
              fill="#000000"
              x="0"
              y="0"
              width="432"
              height="432"
            >
              <path
                fill="#000000"
                d="M383 105v11q0 45-16.5 88.5t-47 79.5t-79 58.5T134 365q-73 0-134-39q10 1 21 1q61 0 109-37q-29-1-51.5-18T48 229q8 2 16 2q12 0 23-4q-30-6-50-30t-20-55v-1q19 10 40 11q-39-27-39-73q0-24 12-44q33 40 79.5 64T210 126q-2-10-2-20q0-36 25.5-61.5T295 19q38 0 64 27q30-6 56-21q-10 31-39 48q27-3 51-13q-18 26-44 45z"
              />
            </svg>
          </svg>
        </a>
      </div>
      <p>&copy; 2024 ricocondee. Almost all rights reserved.</p>
    </footer>
  );
};

export default Footer;
