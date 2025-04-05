"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useTranslation } from "react-i18next";

import "./style.scss";

export default function ExperienceTabs() {
  const { t } = useTranslation("t");

  return (
    <Tabs className="tabs" selectedTabClassName="tabs__tab-selected">
      <TabList className="tabs__list">
        <Tab className="tabs__tab">
          {t("t:experience:tabs:first_tab:title")}
        </Tab>
        <Tab className="tabs__tab">
          {t("t:experience:tabs:second_tab:title")}
        </Tab>
        <Tab className="tabs__tab">
          {t("t:experience:tabs:third_tab:title")}
        </Tab>
        <Tab className="tabs__tab">
          {t("t:experience:tabs:fourth_tab:title")}
        </Tab>
      </TabList>

      <TabPanel className="tabs__tabpanel">
        <h3 className="tabs__tabpanel__title">
          {t("t:experience:tabs:first_tab:subtitle")}
        </h3>
        <p className="tabs__tabpanel__period">
          {t("t:experience:tabs:first_tab:period")}
        </p>
        <div className="tabs__tabpanel__content">
          <ul>
            <li>{t("t:experience:tabs:first_tab:topics:first")}</li>
            <li>{t("t:experience:tabs:first_tab:topics:second")}.</li>
            <li>{t("t:experience:tabs:first_tab:topics:third")}</li>
          </ul>
        </div>
      </TabPanel>

      <TabPanel className="tabs__tabpanel">
        <h3 className="tabs__tabpanel__title">
          {t("t:experience:tabs:second_tab:subtitle")}
        </h3>
        <p className="tabs__tabpanel__period">
          {t("t:experience:tabs:second_tab:period")}
        </p>
        <div className="tabs__tabpanel__content">
          <ul>
            <li>{t("t:experience:tabs:second_tab:topics:first")}</li>
            <li>{t("t:experience:tabs:second_tab:topics:second")}.</li>
            <li>{t("t:experience:tabs:second_tab:topics:third")}</li>
            <li>{t("t:experience:tabs:second_tab:topics:fourth")}</li>
          </ul>
        </div>
      </TabPanel>

      <TabPanel className="tabs__tabpanel">
        <h3 className="tabs__tabpanel__title">
          {t("t:experience:tabs:third_tab:subtitle")}
        </h3>
        <p className="tabs__tabpanel__period">
          {t("t:experience:tabs:third_tab:period")}
        </p>
        <div className="tabs__tabpanel__content">
          <ul>
            <li>{t("t:experience:tabs:third_tab:topics:first")}</li>
            <li>{t("t:experience:tabs:third_tab:topics:second")}.</li>
            <li>{t("t:experience:tabs:third_tab:topics:third")}</li>
            <li>{t("t:experience:tabs:third_tab:topics:fourth")}</li>
          </ul>
        </div>
      </TabPanel>

      <TabPanel className="tabs__tabpanel">
        <h3 className="tabs__tabpanel__title">
          {t("t:experience:tabs:fourth_tab:subtitle")}
        </h3>
        <p className="tabs__tabpanel__period">
          {t("t:experience:tabs:fourth_tab:period")}
        </p>
        <div className="tabs__tabpanel__content">
          <ul>
            <li>{t("t:experience:tabs:fourth_tab:topics:first")}</li>
            <li>{t("t:experience:tabs:fourth_tab:topics:second")}.</li>
            <li>{t("t:experience:tabs:fourth_tab:topics:third")}</li>
            <li>{t("t:experience:tabs:fourth_tab:topics:fourth")}</li>
          </ul>
        </div>
      </TabPanel>
    </Tabs>
  );
}
