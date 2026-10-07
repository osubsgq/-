type Tabinfo = {
  技能: {
    content: string[];
  };
  團隊: {
    content: string[];
  };
};

export const tabinfo: Tabinfo = {
  技能: {
    content: [
      "React / Next.js 前後端開發",
      "PostgreSQL / Firebase 資料庫運維",
      "Tailwind CSS UI/UX 設計",
      "C++ / Python 競賽程式設計",
      "Java (FRC) / Arduino 機器人程式",
      "Meta / YouTube 社群經營",
    ],
  },
  團隊: {
    content: [
      "CodeCat 程式貓科技教育 - 創辦人",
      "綠洲計畫特殊選才 - 委員 / 講師",
      "康普思生活通 - 後端工程師",
      "CPE Guide - 總召",
      "Next.js / React 讀書會 - 主持人",
      "APCS Guide - 測試組長",
    ],
  },
};
