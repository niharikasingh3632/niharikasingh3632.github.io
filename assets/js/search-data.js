// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Collection of my projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-karpathy-s-autoresearch-tool-lets-ai-optimize-code-overnight-autoresearch-is-an-open-source-tool-with-three-simple-files-a-data-prep-script-a-training-loop-to-modify-and-program-md-for-agent-instructions-it-runs-quick-experiments-commits-improvements-via-git-and-plans-smarter-next-steps-turning-nanochat-s-gpt-2-benchmark-from-2-02-hours-to-1-80-hours-through-tweaks-like-better-attention-scalers-replications-spread-fast-yuchen-jin-ran-568-experiments-in-11-hours-on-8-gpus-jaber-abuzaid-boosted-gpu-kernels-10x-over-baseline-and-others-applied-it-to-trading-strategies-gaining-22-returns-karpathy-launched-agenthub-as-a-git-based-hub-for-agent-swarms-hinting-at-agent-driven-research-replacing-solo-human-work",
          title: 'Karpathy’s Autoresearch Tool Lets AI Optimize Code Overnight. Autoresearch is an open-source tool...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
