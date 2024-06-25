import "@/styles/globals.css";
import Layout from "@/components/Layouts/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <link
        href="/assets/img/apple-touch-icon.png"
        rel="apple-touch-icon"
      ></link>
      <link
        href="/assets/vendor/fontawesome-free/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="/assets/vendor/animate.css/animate.min.css"
        rel="stylesheet"
      />
      <link
        href="/assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="/assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="/assets/vendor/glightbox/css/glightbox.min.css"
        rel="stylesheet"
      />
      <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link
        href="/assets/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />
        <link href="/assets/css/style.css" rel="stylesheet"></link>
        <link href="/assets/css/contact.csss" rel="stylesheet"></link>

        <script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="/assets/vendor/php-email-form/validate.js"></script>

  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>



  <script src="/assets/js/main.js"></script>
  <Layout>
        
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
