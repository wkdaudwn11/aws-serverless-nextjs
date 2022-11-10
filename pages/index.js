import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Serverless nextjs - {process.env.NEXT_PUBLIC_ENV}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">AWS Serverless Next.js!</a>
          &nbsp;[{process.env.NEXT_PUBLIC_ENV}]
        </h1>
        <p className={styles.description}>
          BUCKET_REGION{" "}
          <code className={styles.code}>
            {process.env.NEXT_PUBLIC_BUCKET_REGION}
          </code>
        </p>
        <p className={styles.description}>
          BUCKET_NAME{" "}
          <code className={styles.code}>
            {process.env.NEXT_PUBLIC_BUCKET_NAME}
          </code>
        </p>
        <p className={styles.description}>
          DEFAULT_LAMBDA{" "}
          <code className={styles.code}>
            {process.env.NEXT_PUBLIC_DEFAULT_LAMBDA}
          </code>
        </p>
        <p className={styles.description}>
          IMAGE_LAMBDA{" "}
          <code className={styles.code}>
            {process.env.NEXT_PUBLIC_IMAGE_LAMBDA}
          </code>
        </p>
        <p className={styles.description}>
          ClOUDFRONT_ID{" "}
          <code className={styles.code}>
            {process.env.NEXT_PUBLIC_ClOUDFRONT_ID}
          </code>
        </p>
      </main>
    </div>
  );
}
