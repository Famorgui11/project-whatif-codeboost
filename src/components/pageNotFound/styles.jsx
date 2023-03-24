import { styled } from "@/styles";
import { Container } from "@/styles/global";

export const StylePage404 = styled("section", {
    marginTop: 96,
    paddingTop: 95,
    paddingBottom: 150,
    [`${Container}`]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        h1: {
            fontWeight: 600,
            fontSize: "4.9rem",
            lineHeight: "5.9rem",
            color: "$white",
            marginBottom: 24,
        },
        p: {
            maxWidth: 641,
            fontWeight: 400,
            fontSize: "1.6rem",
            lineHeight: "2.4rem",
            color: "$white",
            opacity: 0.3,
            textAlign: "center",
            marginBottom: 40,
        },
        button: {
            fontWeight: 600,
            fontSize: "1.6rem",
            lineHeight: "2.4rem",
            borderRadius: 5,
            padding: "1.5rem 7.3rem", 
            color: "$white",
            transition: "filter .3s ease",
            backgroundColor: "$red900",
            marginBottom: 72,
            "&:hover": {
                filter: "brightness(0.8)",
            },
        },
    },
});