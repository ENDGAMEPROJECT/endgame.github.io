"use client";
import * as React from "react";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { endgameLogosPng } from "@/constants/assetsRoutes";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import { Divider, DividerVariants } from "@/components/ui/divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "../components/ui/image";
import Text from "../components/ui/text";

//Banner
import {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerButton,
  BannerContent,
  BannerImg,
} from "@/components/core/Banner";
import {
  CustomCard,
  CardTitle,
  CardSubtitle,
  CardContent,
  CardBody,
} from "@/components/ui/customCard";
import { mission } from "@/constants/mission";

// UI
export default function Page() {
  //const [projects, setProjects] = useState(myprojectCards);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // let title_translation = title;
  // if (currentLang === "es" && title_es) {
  //   title_translation = title_es;
  // }

  // let description_translation = description_en;
  // if (currentLang === "es" && description_es) {
  //   description_translation = description_es;
  // }

  return (
    <main>
      <Banner className="bg-black">
        {/* <BannerImg></BannerImg> */}

        <BannerContent className="absolute">
          <Image
            className="mb-6 md:mb-6 max-w-[480px] md:max-w-[720px]"
            src={endgameLogosPng + "logo_ENDGAME_main_darkBg.png"}
            alt="Endgame logo"
            fit="contain"
          />
          <BannerDescription className="h-full text-balance flex flex-col gap-2 font-normal">
            {t("home.description")}
          </BannerDescription>
          <Divider />
          {/* <Link
            href="#researchlines"
            // scroll={false}
            className={ButtonVariants({
              variant: "outline",
              size: "lg",
              radius: "rounded_sm",
            })}
          >
            {t("home.action-button")}
            <ArrowForwardIcon className="mt-0.5" sx={{ fontSize: 22 }} />
          </Link> */}
        </BannerContent>
      </Banner>

      <Divider size="xl" />

      {/* SECTION 1 */}
      <Heading level="h1">{t("home.aboutSection")}</Heading>
      <section className="standard_margin-s ing_sm flex flex-col gap-24">
        <article>
          <Heading level="h3">{t("home.about.title")}</Heading>
          <Heading level="subtitle"> {t("home.about.content")}</Heading>
        </article>
        <article>
          <Heading level="h3">{t("home.mission.title")}</Heading>
          <section className="gap-4 justify-center grid sm:grid-cols-3 xl:grid-cols-5">
            {mission.map(({ icon }, key) => {
              return (
                <CustomCard className="h-full w-full p-4 bg-black" key={key}>
                  <Image
                    className={"!h-20 opacity-50 p-2"}
                    src={mission[key].icon || "placeholder.jpg"}
                    alt={mission[key].title || "Image"}
                    fit="contain"
                  />
                  <CardContent className="place-content-center text-center">
                    <CardTitle level="h4" className="text-primary">
                      {/* {t("home.mission.content.card1.title")} */}
                      {mission[key].title}
                    </CardTitle>
                    <Text>
                      {/* {t("home.mission.content.card1.content")} */}
                      {t(mission[key].description)}
                    </Text>
                  </CardContent>
                </CustomCard>
              );
            })}
          </section>
        </article>
        <article>
          <Heading level="h3">{t("home.partners.title")}</Heading>
          <Heading level="h5" className="uppercase">
            {t("home.partners.universities.title")}
          </Heading>
          <Heading level="h5" className="uppercase">
            {t("home.partners.agencies.title")}
          </Heading>
        </article>
      </section>
      <Divider size="xl" />

      {/* LATEST CONTENT */}
      {/* 
      <section
        className="standard_margin-s section-researchlines landing_cards"
        id="researchlines"
      >
        <Divider size="md"></Divider>
        <Heading level="h1">{t("home.latestContent.title")}</Heading>
        {/* EVENTS AND NEWS */}
      {/* 
        <section className="cards">
          <header className="mb-4 w-full flex justify-between border-b border-cyan-400">
            <Heading level="h4">{t("home.latestContent.events.title")}</Heading>
            <Button
              className={
                ButtonVariants({
                  variant: "ghost",
                  size: "lg",
                  radius: "rounded_sm",
                }) + ""
              }
            >
              {t("research.button2")}
            </Button>
          </header>
          <section className="flex gap-4">
            <CustomCard className="min-h-40 w-fit min-w-80 p-4 bg-black">
              <CardBody>
                <CardTitle level="h5">
                  {t("home.latestContent.events.event.title")}
                </CardTitle>
                <CardSubtitle>
                  {t("home.latestContent.events.event.date")}
                </CardSubtitle>
              </CardBody>
            </CustomCard>
            <CustomCard className="min-h-40 w-fit p-4 bg-black">
              <CardBody>
                <CardTitle level="h5">
                  {t("home.latestContent.events.event.title")}
                </CardTitle>
                <CardSubtitle>
                  {t("home.latestContent.events.event.date")}
                </CardSubtitle>
              </CardBody>
            </CustomCard>
            <CustomCard className="min-h-40 w-fit p-4 bg-black">
              <CardBody>
                <CardTitle level="h5">
                  {t("home.latestContent.events.event.title")}
                </CardTitle>
                <CardSubtitle>
                  {t("home.latestContent.events.event.date")}
                </CardSubtitle>
              </CardBody>
            </CustomCard>
          </section>
        </section>

        <Divider size="md"></Divider>
      </section> */}
    </main>
  );
}
