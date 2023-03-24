import { styled } from "@/styles";
import { Container } from "@/styles/global";

export const FooterStyle = styled("footer", {
    [`${Container}`]: {
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        padding: "40px 0",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        "& > div": {
            display: "flex",
            alignItems: "flex-start",
            p: {
                flex: 1,
                maxWidth: "59.3rem",
                fontWeight: 400,
                fontSize: "1.4rem",
                lineHeight: "2.1rem",
                color: "$gray500",
                marginLeft: "18.6rem",
            },
            strong: {
                fontWeight: 700,
                fontSize: "1.4rem",
                lineHeight: "2.1rem",
                color: "$white",
            },
        },
    },
});