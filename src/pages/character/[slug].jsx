import { SectionHeroCharacter } from "@/components/details/sectionHeroCharacter";
import { ListCharacters } from "@/components/home/listCharacters";
import { PageTitle } from "@/components/PageTitle";
import { getPrismicClient } from "@/service/prismic";
import { useRouter } from "next/router";

export default function PageCharacter({character, characters}) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>
  }
  
    return (
      <>
        <PageTitle 
                title="What If? - Codeboost | Detalhes do personagem"
                description="Um projeto desenvolvido no curso Codeboost" />
        { character && <SectionHeroCharacter data={character} /> }
        { characters && <ListCharacters data={characters} /> }
      </>
    );
  }

  export const getStaticPaths = async () => {
    const prismic = getPrismicClient();

    const characters = await prismic.getAllByType("character");

    const paths = characters.map(({data}) => {
      return {
        params: { slug: data.slug},
      };
    });

    return {
      paths,
      fallback: true,
    };
  };

  export const getStaticProps = async (context) => {
    const prismic = getPrismicClient();

    const characters = await prismic.getAllByType("character");

    const character = characters.find(({data}) => {
      return data.slug === context.params.slug;
    });

    characters.splice(characters.findIndex((e) => {
      return e.data.slug === character.data.slug;
    }), 1)

    return {
      props: {
        character: character.data,
        characters,
      },
    };
  };