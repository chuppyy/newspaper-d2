import { Suspense } from "react";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";

const formatDate = (str: string) => {
  const date = new Date(str);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export default function Page(data: any) {
  const article = data.data;
  const {
    videoScriptSrc,
    googleClientId,
    googleClientSlotId,
    googleAdSlot,
    mgWidgetId1,
    mgWidgetId2,
    mgWidgetFeedId,
    adsKeeperSrc,
    googleTagId,
  } = data.parameters;

  // // QC video
  // useEffect(() => {
  //   const scriptElement = document.createElement("script");
  //   scriptElement.src = `${videoScriptSrc}?v=${Math.floor(Math.random() * 1000)}`;
  //   scriptElement.async = true;
  //   const scriptContainer = document.getElementById("player_dev");
  //   if (scriptContainer) {
  //     scriptContainer.appendChild(scriptElement);
  //   }
  //   return () => {
  //     if (scriptContainer) {
  //       scriptContainer.removeChild(scriptElement);
  //     }
  //   };
  // }, [videoScriptSrc]);

/*
useEffect(() => {
  // New Script
  const script = document.createElement("script");
  script.src = `https://cdn.unibotscdn.com/player/mvp/player.js?v=${Math.floor(
    Math.random() * 1000
  )}`;
  script.async = true;
  document.head.appendChild(script);
  // Ensure the script runs once the component mounts
  const script2 = document.createElement("script");
  script2.innerHTML = `
      window.unibots = window.unibots || { cmd: [] };
      unibots.cmd.push(function() { unibotsPlayer("boonovel.com_1703240626524") });
  `;
  const scriptContainer = document.getElementById("div-ub-boonovel.com_1703240626524")
  if(scriptContainer) {
    scriptContainer.appendChild(script2);
  }
  
  // Cleanup function to remove the script when the component unmounts
  return () => {
    const div = document.getElementById("div-ub-boonovel.com_1703240626524");
    if (div) {
      div.innerHTML = "";
    }
  };
}, []);*/


  useEffect(() => {
    try {
      var qcImgDiv = document.getElementById("qcImgk");
      if (qcImgDiv) {
        var insElement = document.createElement("ins");
        insElement.className = "adsbygoogle";
        insElement.style.display = "block";
        insElement.setAttribute("data-ad-client", googleClientId);
        insElement.setAttribute("data-ad-slot", googleAdSlot);
        insElement.setAttribute("data-ad-format", "auto");
        insElement.setAttribute("data-full-width-responsive", "true");
        qcImgDiv.appendChild(insElement);
      }

      var qcDivqc3 = document.getElementById("qcmgidgb3");
      if (qcDivqc3) {
        var newDiv = document.createElement('div');
        newDiv.innerHTML = `<div data-type="_mgwidget" data-widget-id="${mgWidgetId1}"></div>
                            <script>(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})(window,"_mgq");</script>`;
        qcDivqc3.appendChild(newDiv);
      }

      var qcDivqc2 = document.getElementById("qcmgidgb2");
      if (qcDivqc2) {
       var insElement = document.createElement("ins");
        insElement.className = "adsbygoogle";
        insElement.style.display = "block";
        insElement.setAttribute("data-ad-client", googleClientId);
        insElement.setAttribute("data-ad-slot", googleAdSlot);
        insElement.setAttribute("data-ad-format", "auto");
        insElement.setAttribute("data-full-width-responsive", "true");
        qcDivqc2.appendChild(insElement);
      }

      var qcDiv = document.getElementById("qcmgidgb");
      if (qcDiv) {
        var newDiv = document.createElement('div');
        newDiv.innerHTML = `<div data-type="_mgwidget" data-widget-id="${mgWidgetId2}"></div>
                            <script>(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})(window,"_mgq");</script>`;
        qcDiv.appendChild(newDiv);
      }

      const ads = document.getElementsByClassName("adsbygoogle").length;
      for (var i = 0; i < ads; i++) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("Error with ads", err);
    }

    // Adjust iframe dimensions
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe: HTMLIFrameElement) => {
      if (iframe) {
        if (iframe.src.includes("twitter")) {
          iframe.style.height = window.innerWidth <= 525 ? "650px" : "827px";
          iframe.style.width = window.innerWidth <= 525 ? "100%" : "550px";
        } else if (iframe.src.includes("instagram")) {
          iframe.style.height = window.innerWidth <= 525 ? "553px" : "628px";
          iframe.style.width = "100%";
        } else {
          iframe.style.height = window.innerWidth <= 525 ? "250px" : "300px";
          iframe.style.width = "100%";
        }
      }
    });
  }, [googleClientId, googleAdSlot, mgWidgetId1, mgWidgetId2]);

  return (
    <>
      <Head>
        <title>{article.name + "-" + article.userCode}</title>
        <meta property="og:image" content={article.avatarLink} />
        <meta property="og:title" content={article.name + "-" + article.userCode} />
      </Head>
      <Script src={adsKeeperSrc} async></Script>
      <Script id="gg-1" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} />
      <Script id="gg-2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleTagId}');
        `}
      </Script>
     
      <Script id="adsbygoogle-init" strategy="afterInteractive" crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleClientId}`} />

      <main>
        <div className="container-flu details">
          
          <h1>{article.name}</h1>
          <p className="mb-4 text-lg">Posted: {formatDate(article.dateTimeStart)}</p>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={googleClientId}
            data-ad-slot={googleClientSlotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <div id="player_dev"></div>
          <div id="div-ub-boonovel.com_1703240626524"></div>
          <Suspense fallback={<p>Loading ...</p>}>
            <article className="content" dangerouslySetInnerHTML={{ __html: article.content }} />
          </Suspense>
        </div>

        <div data-type="_mgwidget" data-widget-id={mgWidgetFeedId}></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})
              (window,"_mgq");
            `,
          }}
          async
        ></script>
        <!-- rewarded / put on <body> -->
<style>
    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 300px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
        margin: auto;
        padding: 25px;
        background-color: #fefefe;
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media all and (orientation: landscape) {
        /* Modal Content */
        .modal-content {
            margin: auto;
            padding: 25px;
            background-color: #fefefe;
            text-align: center;
            position: fixed;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .btn {
        padding: .5rem;
        background: #2990EA;
        border: none;
        border-radius: 4px;
        margin: 4px;
    }
</style>
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

<div id="rewardModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <!-- Hiển thị hình ảnh hoặc nội dung của quảng cáo rewarded tại đây -->
    </div>
</div>
<!-- end rewarded -->

        
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  try {
    const slug = params?.slug;
    const response = await fetch(`${process.env.APP_API}/News/news-detail?id=${slug?.slice(slug?.lastIndexOf("-") + 1)}`).then((res) => res.json());

    // Pass parameters dynamically
    const parameters = {
      videoScriptSrc: "https://nexvelar.digital/ads/nthotnews_boonovel_com.eb373146-0084-4675-83c9-23556caad088.video.js",
      //Code auto 
      googleClientId: "ca-pub-2388584177550957",
      //GA tiêu đề
      googleClientSlotId:"6488553234",
      //GA sau video
      googleAdSlot: "5099751269",
//Cái sau
      mgWidgetId1: "1677050",
      //Cái trước
      mgWidgetId2: "1677050",

      mgWidgetFeedId: "1677049",
      //scrip adkeeper
      adsKeeperSrc: "https://jsc.adskeeper.com/site/986655.js",
      //Analytic
      googleTagId: "G-YSM71MQHG7",
    };

    return {
      props: { data: response.data, parameters },
      revalidate: 360000,
    };
  } catch (error) {
    return {
      props: { data: {}, parameters: {} },
    };
  }
}
