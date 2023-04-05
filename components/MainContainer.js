import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextJS, learn for work, " + keywords} />
        <title>Next JS</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text={'Главная'} />
        <A href={'/users'} text={'Пользователи'} />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
            display: flex;
            gap: 10px;
          }
        `}
      </style>
    </>
  )
}

export default MainContainer