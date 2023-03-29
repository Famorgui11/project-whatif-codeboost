import { Container } from "@/styles/global";
import { AreaSocial, ContextText, SectionHeroStyle } from "./styles";
import IconYoutube from "@/assets/youtube.svg";
import IconInstagram from "@/assets/instagram.svg";
import Image from "next/image";
import { PopupVideo } from "@/components/popupVideo";

const socials = [
    {
        name: "Youtube",
        url: "https://www.youtube.com",
        icon: IconYoutube
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com",
        icon: IconInstagram
    },
];

export function SectionHero({data}) {
    return <SectionHeroStyle>
        <Container>
            <AreaSocial>
                <ul>
                    {
                        socials.map(({name, url, icon}) => {
                            return (
                                <li key={`social-${name}`}>
                                    <a href={url} target="_blank">
                                        <Image src={icon} alt={name} />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </AreaSocial>
            <ContextText>
                <div className="left">
                    <h3>{data.subtitle_hero}</h3>
                    <h1>{data.title_hero}</h1>
                    <p>{data.description_hero}</p>
                    <a href={data.url_button.url} target="_blank">
                        {data.label_button}
                    </a>
                </div>
                <PopupVideo label={data.label_trailer} thumb={data.thumbnail_trailer.url}/>
            </ContextText>
        </Container>
    </SectionHeroStyle>;
}