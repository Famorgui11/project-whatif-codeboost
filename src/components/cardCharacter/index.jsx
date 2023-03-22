import Image from "next/image";
import Link from "next/link";
import { StyleCard } from "./styles";

export function CardCharacter({ image, name, slug }) {
    return(
        <StyleCard>
            <Link href={`/character/${slug}`}>
                <div className="image">
                    <Image 
                        src={image}
                        width={280}
                        height={372} 
                        alt="Character"/>
                </div>
                <div className="info">
                    <div>
                        <h3>{name}</h3>
                        <span>Marvel Studios</span>
                    </div>
                    <span>What if</span>
                </div>
            </Link>
        </StyleCard>
    )
}