import { createStyleConfig, focusStyles } from "@hope-ui/styles";
export const useAnchorStyleConfig = createStyleConfig(({ vars }) => ({
    root: {
        baseStyle: {
            position: "relative",
            outline: "none",
            backgroundColor: "transparent",
            color: "inherit",
            textDecoration: "inherit",
            cursor: "pointer",
            transition: "text-decoration 250ms",
            "&:hover": {
                textDecoration: "underline",
            },
            ...focusStyles(vars),
        },
    },
}));
