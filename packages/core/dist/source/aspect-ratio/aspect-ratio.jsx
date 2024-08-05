/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/aspect-ratio.tsx
 */
import { createHopeComponent, hope, mapResponsive } from "@hope-ui/styles";
import { splitProps } from "solid-js";
import { mergeDefaultProps } from "../utils";
const BaseAspectRatio = hope("div", {
    baseStyle: {
        position: "relative",
        maxWidth: "100%",
        "&::before": {
            content: '""',
            height: 0,
            display: "block",
        },
        "& > *:not(style)": {
            overflow: "hidden",
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSize: "100%",
        },
        "& > img, & > video": {
            objectFit: "cover",
        },
    },
}, "hope-AspectRatio-root");
/**
 * `AspectRatio` is used to cropping media (videos, images and maps)
 * to a desired aspect ratio.
 */
export const AspectRatio = createHopeComponent(props => {
    props = mergeDefaultProps({ ratio: 4 / 3 }, props);
    const [local, others] = splitProps(props, ["ratio"]);
    return (<BaseAspectRatio _before={{ pb: mapResponsive(local.ratio, r => `${(1 / r) * 100}%`) }} {...others}/>);
});
