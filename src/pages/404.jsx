import { Page404 } from "@/components/pageNotFound";
import { PageTitle } from "@/components/PageTitle";

export default function PageNotFound() {
    return(
        <>
            <PageTitle 
                title="What If? - Codeboost | Página não encontrada"
                description="Um projeto desenvolvido no curso Codeboost" />
            <Page404 />
        </>
    );
}