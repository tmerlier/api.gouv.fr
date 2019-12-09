import React from "react";
import App from "next/app";

// import "template.data.gouv.fr/dist/main.css";

// const MainCSS = () => (
//   <style jsx global>{`
//     @import "main";
//   `}</style>
// );

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        {/* <MainCSS /> */}
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
