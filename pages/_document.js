import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html className='js' >
      <Head />
      <body className=" home page template-slider button-custom layout-full-width if-zoom if-border-hide no-content-padding no-shadows header-split sticky-header sticky-tb-color ab-hide subheader-both-center menu-link-color menuo-no-borders footer-copy-center mobile-tb-center mobile-side-slide mobile-mini-mr-ll tablet-sticky mobile-header-mini mobile-sticky tr-menu">
        <Main />
        <NextScript />
        <script src="assets/js/jquery-2.1.4.min.js"  async></script>
        <script src="assets/js/mfn.menu.js"  async></script>
        <script src="assets/js/jquery.plugins.js"  async></script>
        <script src="assets/js/jquery.jplayer.min.js"  async></script>
        <script src="assets/js/animations/animations.js"  async></script>
        <script src="assets/js/translate3d.js"  async></script>
        <script src="assets/js/scripts.js"  async></script>
        <script src="assets/rs-plugin-6.custom/js/revolution.tools.min.js"  async></script>
        <script src="assets/rs-plugin-6.custom/js/rs6.min.js"  async></script>
      </body>
    </Html>
  )
}