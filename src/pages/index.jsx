import { ListCharacters } from "@/components/home/listCharacters";
import { SectionHero } from "@/components/home/sectionHero";
import { PageTitle } from "@/components/PageTitle";
import { getPrismicClient } from "@/service/prismic";

export default function Home({dataPage}) {
  return( <>
    <PageTitle 
      title="What If? - Codeboost"
      description="Um projeto desenvolvido no curso Codeboost" />
    <SectionHero data={dataPage} />
    <ListCharacters/>
  </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentsPages = await prismic.getSingle("home");
  return {
    props: {
      dataPage: contentsPages.data,
    },
    revalidate: 60,
  };
};