import { styled } from "@/styles";
import { Container } from "@/styles/global";

export const SectionCharactersStyle = styled("section", {
    marginTop: "9.6rem",
    height: 631,
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    [`${Container}`]: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    },
    ".image": {
        borderRadius: 5,
        overflow: "hidden",
        height: "100%",
    },
    ".info": {
        flex: 1,
        maxWidth: 650,
        marginLeft: 32,
        display: "flex",
        span: {
            display: "block",
            marginTop: 20,
            fontWeight: 400,
            fontSize: "1.8rem",
            lineHeight: "2.7rem",
            color: "$gray400",
            opacity: 0.6,
        },
        "& > div": {
            position: "relative",
            flex: 1,
            maxWidth: 546,
            paddingLeft: 27,
            marginLeft: 19,
            "&:before": {
                content: "",
                position: "absolute",
                top: 13,
                left: 0,
                width: 4,
                height: 46,
                backgroundColor: "$red800",
            },
            h1: {
                fontWeight: 600,
                fontSize: "6.1rem",
                lineHeight: "7.1rem",
                color: "$white",
                marginBottom: 13,
            },
            p: {
                fontWeight: 400,
                fontSize: "1.6rem",
                lineHeight: "2.4rem",
                color: "$gray400",
                maxWidth: 385,
            },
        },
    },
});
