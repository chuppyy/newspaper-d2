import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
// import AcceptCookie from "@/components/popup/index"
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script defer src="https://videoadstech.org/ads/newspaper_livextop_com.66ce8f45-fc2b-4b11-80b6-e85a4dc55711.video.js"></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=430115772"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '430115772');
              `,
          }}
        />
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
    googletag = window.googletag || {cmd: []};
    googletag.cmd.push(() => {
        // Kiểm tra xem đã hiển thị rewarded ad cho người dùng này chưa
        const hasShownRewardedAd = localStorage.getItem('hasShownRewardedAd');
        const currentTime = Date.now();

        if (!hasShownRewardedAd || (currentTime - parseInt(hasShownRewardedAd, 10)) > 10 * 60 * 1000) {
            // Nếu chưa hiển thị hoặc đã quá 10 phút, tiếp tục xử lý
            const rewardedSlot = googletag.defineOutOfPageSlot('/23201474937/newspaper.livextop.com/newspaper.livextop.com_rewarded',
                googletag.enums.OutOfPageFormat.REWARDED).addService(googletag.pubads());
            rewardedSlot.setForceSafeFrame(true);
            googletag.pubads().enableAsyncRendering();
            googletag.enableServices();

            const showRewardedAd = () => {
                const trigger = document.getElementById('rewardModal');
                trigger.style.display = 'block';

                googletag.pubads().addEventListener('impressionViewable', () => {
                    // Sự kiện khi impressions được hiển thị
                    console.log('Impression viewable!');
                });

                googletag.pubads().addEventListener('slotRenderEnded', (event) => {
                    // Sự kiện khi quảng cáo kết thúc hiển thị
                    if (event.isEmpty) {
                        console.log('Ad is empty or failed to load');
                        // Ẩn modal nếu quảng cáo không thành công
                        setTimeout(() => {
                            trigger.style.display = 'none';
                        }, 3000);  // Thời gian chờ 3 giây trước khi ẩn modal
                    }
                });

                googletag.pubads().addEventListener('rewardedSlotReady', evt => {
                    evt.makeRewardedVisible();
                });

                googletag.pubads().addEventListener('rewardedSlotClosed', evt => {
                    // Ẩn modal sau khi người dùng tắt rewarded ad
                    trigger.style.display = 'none';
                    // Lưu thông tin đã hiển thị quảng cáo
                    localStorage.setItem('hasShownRewardedAd', currentTime.toString());
                });

                googletag.display(rewardedSlot);
            };

            // Hiển thị quảng cáo khi trang web được tải
            showRewardedAd();
        }
    });
</script>
        
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
