import { ReactNode, useState } from "react";
import styles from "./Tabs.module.scss";

export enum TabStyle {
  Primary = "Primary",
  Underline = "Underline"
}

export interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  tabStyle: TabStyle;
}

const Tabs: React.FC<TabsProps> = ({ tabs, tabStyle }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__buttons}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={ tabStyle === TabStyle.Primary ?
              (`${styles.tabs__buttonPrimary} ${selectedTabIndex === index ? "body-l body-l--primary" : "body-l"}`)
              :
              (`${styles.tabs__buttonUnderline} ${selectedTabIndex === index ? `subtitle-l ${styles['tabs__buttonUnderline--active']}` : "subtitle-l"}`)
            }
            onClick={() => setSelectedTabIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[selectedTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
