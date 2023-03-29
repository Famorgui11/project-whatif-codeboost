import { SectionHeroCharacter } from "@/components/details/sectionHeroCharacter";
import { ListCharacters } from "@/components/home/listCharacters";
import { PageTitle } from "@/components/PageTitle";

export default function PageCharacter() {
    return (
      <>
        <PageTitle 
                title="What If? - Codeboost | Detalhes do personagem"
                description="Um projeto desenvolvido no curso Codeboost" />
        <SectionHeroCharacter />
        <ListCharacters />
      </>
    )
  }