import { styled } from "@/styles";
import bgThumb from "@/assets/thumb-video.png";

export const StylePopupVideo = styled("div", {
    width: "100%",
    maxWidth: 312,
    span: {
        display: "block",
        fontWeight: 600,
        fontSize: "1.2rem",
        lineHeight: "1.8rem",
        letterSpacing: "0.095em",
        color: "$gray100",
        marginBottom: 14,
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 179,
        background: `url(${bgThumb.src}) no-repeat center center`,
        borderRadius: 10,
        "&:hover": {
            "& > div": {
                transform: "scale(1.1)",
            },
        },
        "& > div": {
            width: 47,
            height: 47,
            background: "rgba(19, 19, 19, 0.8)",
            backdropFilter: "blur(2.5px)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform .3s ease",
        },
    },
});