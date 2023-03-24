import Image from "next/image";
import Link from "next/link";

import { Container } from "@/styles/global";
import { StylePage404 } from "./styles";
import ImageNotFound from "@/assets/image-not-found.png";

export function Page404() {
    return(
        <StylePage404>
            <Container>
                <h1>Whoops, essa página sumiu.</h1>
                <p>OHHH, parece que não conseguimos encontrar a página que você está procurando. Tente voltar à página anterior ou consulte nossa Central de Ajuda para obter mais informações.</p>
            <Link href="/">
                <button>Voltar</button>
            </Link>
            <Image src={ImageNotFound} alt="Image Not Found"></Image>
            </Container>
        </StylePage404>
    );
}