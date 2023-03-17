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

export function SectionHero() {
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
                    <h3>COMING SON</h3>
                    <h1>Lorem ipsum dolor sit amet, elit consectetur</h1>
                    <p>Maecenas tristique eu quam sed pretium. Pellentesque 
                        sagittis elit et porttitor consequat. Nam augue turpis, 
                        tincidunt commodo lacus at, auctor suscipit ex</p>
                    <a href="" target="_blank">
                        Saiba mais
                    </a>
                </div>
                <PopupVideo/>
            </ContextText>
        </Container>
    </SectionHeroStyle>;
}