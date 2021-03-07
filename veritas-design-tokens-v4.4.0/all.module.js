"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vdsColorRedLighter = exports.vdsColorRedLight = exports.vdsColorRed = exports.vdsColorRedDark = exports.vdsColorRedDarker = exports.vdsColorSilverLightest = exports.vdsColorSilverLighter = exports.vdsColorSilverLight = exports.vdsColorSilver = exports.vdsColorSilverDark = exports.vdsColorSilverDarker = exports.vdsColorSlateLightest = exports.vdsColorSlateLighter = exports.vdsColorSlateLight = exports.vdsColorSlate = exports.vdsColorSlateDark = exports.vdsColorSlateDarker = exports.vdsColorCeruleanLightest = exports.vdsColorCeruleanLighter = exports.vdsColorCeruleanLight = exports.vdsColorCerulean = exports.vdsColorCeruleanDark = exports.vdsColorCeruleanDarker = exports.vdsBreakpointXl = exports.vdsBreakpointLg = exports.vdsBreakpointMd = exports.vdsBreakpointSm = exports.vdsBreakpointXs = exports.vdsBoxShadow5 = exports.vdsBoxShadow4 = exports.vdsBoxShadow3 = exports.vdsBoxShadow2 = exports.vdsBoxShadow1 = exports.vdsBoxShadow0 = exports.vdsBorderColorInformation = exports.vdsBorderColorSuccess = exports.vdsBorderColorWarning = exports.vdsBorderColorError = exports.vdsBorderInformation = exports.vdsBorderSuccess = exports.vdsBorderWarning = exports.vdsBorderError = exports.vdsBorderRadiusCircle = exports.vdsBorderRadiusSecondary = exports.vdsBorderRadiusBase = exports.vdsBorderRadiusNone = exports.vdsBackgroundColorInformation = exports.vdsBackgroundColorSuccess = exports.vdsBackgroundColorWarning = exports.vdsBackgroundColorError = void 0;
exports.vdsFontFamilyCode = exports.vdsFontFamilyText = exports.vdsTransitionAll = exports.vdsBaseTiming = exports.vdsBaseDuration = exports.vdsColorBlack = exports.vdsColorWhite = exports.vdsColorMagentaLightest = exports.vdsColorMagentaLighter = exports.vdsColorMagentaLight = exports.vdsColorMagenta = exports.vdsColorMagentaDark = exports.vdsColorMagentaDarker = exports.vdsColorTealLightest = exports.vdsColorTealLighter = exports.vdsColorTealLight = exports.vdsColorTeal = exports.vdsColorTealDark = exports.vdsColorTealDarker = exports.vdsColorYellowLightest = exports.vdsColorYellowLighter = exports.vdsColorYellowLight = exports.vdsColorYellow = exports.vdsColorYellowDark = exports.vdsColorYellowDarker = exports.vdsColorPurpleLightest = exports.vdsColorPurpleLighter = exports.vdsColorPurpleLight = exports.vdsColorPurple = exports.vdsColorPurpleDark = exports.vdsColorPurpleDarker = exports.vdsColorBlueLightest = exports.vdsColorBlueLighter = exports.vdsColorBlueLight = exports.vdsColorBlue = exports.vdsColorBlueDark = exports.vdsColorBlueDarker = exports.vdsColorGreenLightest = exports.vdsColorGreenLighter = exports.vdsColorGreenLight = exports.vdsColorGreen = exports.vdsColorGreenDark = exports.vdsColorGreenDarker = exports.vdsColorOrangeLightest = exports.vdsColorOrangeLighter = exports.vdsColorOrangeLight = exports.vdsColorOrange = exports.vdsColorOrangeDark = exports.vdsColorOrangeDarker = exports.vdsColorRedLightest = void 0;
exports.vdsTextLineHeightXs = exports.vdsTextLineHeightSm = exports.vdsTextLineHeight = exports.vdsHeadingLineHeightH4Mobile = exports.vdsHeadingLineHeightH3Mobile = exports.vdsHeadingLineHeightH2Mobile = exports.vdsHeadingLineHeightH1Mobile = exports.vdsHeadingLineHeightH6 = exports.vdsHeadingLineHeightH5 = exports.vdsHeadingLineHeightH4 = exports.vdsHeadingLineHeightH3 = exports.vdsHeadingLineHeightH2 = exports.vdsHeadingLineHeightH1 = exports.vdsBaseLineHeight = exports.vdsLetterSpacing = exports.vdsGradientCeruleanPurpleDark = exports.vdsGradientMagentaYellowDark = exports.vdsGradientCeruleanTealDark = exports.vdsGradientTealPurpleDark = exports.vdsGradientPurpleMagentaDark = exports.vdsGradientCeruleanPurple = exports.vdsGradientMagentaYellow = exports.vdsGradientCeruleanTeal = exports.vdsGradientTealPurple = exports.vdsGradientPurpleMagenta = exports.vdsGradientPurpleCerulean = exports.vdsGradientSilverSlate = exports.vdsGradientSilverCerulean = exports.vdsFontWeightExtrabold = exports.vdsFontWeightBold = exports.vdsFontWeightSemibold = exports.vdsFontWeightRegular = exports.vdsFontWeightLight = exports.vdsQuoteFontSizeMobile = exports.vdsQuoteFontSize = exports.vdsTextFontSizeXs = exports.vdsTextFontSizeSm = exports.vdsTextFontSize = exports.vdsHeadingFontSizeH4Mobile = exports.vdsHeadingFontSizeH3Mobile = exports.vdsHeadingFontSizeH2Mobile = exports.vdsHeadingFontSizeH1Mobile = exports.vdsHeadingFontSizeH6 = exports.vdsHeadingFontSizeH5 = exports.vdsHeadingFontSizeH4 = exports.vdsHeadingFontSizeH3 = exports.vdsHeadingFontSizeH2 = exports.vdsHeadingFontSizeH1 = exports.vdsBaseFontSize = exports.vdsBaseFontUnit = void 0;
exports.vdsTextColorInformation = exports.vdsTextColorSuccess = exports.vdsTextColorWarning = exports.vdsTextColorError = exports.vdsTextSelectionColor = exports.vdsTextColor = exports.vdsSpacingStack6X = exports.vdsSpacingStack4X = exports.vdsSpacingStack3X = exports.vdsSpacingStack2X = exports.vdsSpacingStack1X = exports.vdsSpacingStackHalf = exports.vdsSpacingInset6X = exports.vdsSpacingInset4X = exports.vdsSpacingInset3X = exports.vdsSpacingInset2X = exports.vdsSpacingInset1X = exports.vdsSpacingInsetHalf = exports.vdsSpacingInline6X = exports.vdsSpacingInline4X = exports.vdsSpacingInline3X = exports.vdsSpacingInline2X = exports.vdsSpacingInline1X = exports.vdsSpacingInlineHalf = exports.vdsSpacing6X = exports.vdsSpacing4X = exports.vdsSpacing3X = exports.vdsSpacing2X = exports.vdsSpacing1X = exports.vdsSpacingHalf = exports.vdsSpacingNone = exports.vdsTextMaxWidthLg = exports.vdsTextMaxWidthBase = exports.vdsTextMaxWidthSm = exports.vdsTextSelectionOpacity = exports.vdsQuoteLineHeightMobile = exports.vdsQuoteLineHeight = void 0;
exports.vdsBackgroundColorError = "#FBE6E6";
exports.vdsBackgroundColorWarning = "#FFF5E2";
exports.vdsBackgroundColorSuccess = "#E3F8ED";
exports.vdsBackgroundColorInformation = "#E5EFF5";
exports.vdsBorderRadiusNone = 0;
exports.vdsBorderRadiusBase = "0.5rem";
exports.vdsBorderRadiusSecondary = "0.25rem";
exports.vdsBorderRadiusCircle = "50%";
exports.vdsBorderError = "2px solid #DD3131";
exports.vdsBorderWarning = "2px solid #FFAE0C";
exports.vdsBorderSuccess = "2px solid #15C26B";
exports.vdsBorderInformation = "2px solid #2A77AA";
exports.vdsBorderColorError = "#DD3131";
exports.vdsBorderColorWarning = "#FFAE0C";
exports.vdsBorderColorSuccess = "#15C26B";
exports.vdsBorderColorInformation = "#2A77AA";
exports.vdsBoxShadow0 = "none";
exports.vdsBoxShadow1 = "0 2px 4px 0 rgba(17,22,26,0.16), 0 0 4px 0 rgba(17,22,26,0.08), 0 4px 8px 0 rgba(17,22,26,0.04)";
exports.vdsBoxShadow2 = "0 4px 8px 0 rgba(17,22,26,0.16), 0 4px 8px 0 rgba(17,22,26,0.08), 0 8px 16px 0 rgba(17,22,26,0.04)";
exports.vdsBoxShadow3 = "0 0 8px 0 rgba(17,22,26,0.06), 0 4px 16px 0 rgba(17,22,26,0.08), 0 8px 12px 0 rgba(17,22,26,0.06), 0 16px 24px 0 rgba(17,22,26,0.04)";
exports.vdsBoxShadow4 = "0 4px 12px 0 rgba(17,22,26,0.06), 0 4px 24px 8px rgba(17,22,26,0.12), 0 8px 16px 0 rgba(17,22,26,0.06), 0 32px 40px 0 rgba(17,22,26,0.02)";
exports.vdsBoxShadow5 = "0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)";
exports.vdsBreakpointXs = "20rem";
exports.vdsBreakpointSm = "30rem";
exports.vdsBreakpointMd = "48rem";
exports.vdsBreakpointLg = "62rem";
exports.vdsBreakpointXl = "73.75rem";
exports.vdsColorCeruleanDarker = "#014052";
exports.vdsColorCeruleanDark = "#017A9B";
exports.vdsColorCerulean = "#02B3E4";
exports.vdsColorCeruleanLight = "#53CBED";
exports.vdsColorCeruleanLighter = "#A4E4F5";
exports.vdsColorCeruleanLightest = "#F5FCFE";
exports.vdsColorSlateDarker = "#11161A";
exports.vdsColorSlateDark = "#1F2932";
exports.vdsColorSlate = "#2E3D49";
exports.vdsColorSlateLight = "#6D7780";
exports.vdsColorSlateLighter = "#B4B9BD";
exports.vdsColorSlateLightest = "#F7F7F8";
exports.vdsColorSilverDarker = "#242A2F";
exports.vdsColorSilverDark = "#454F58";
exports.vdsColorSilver = "#657482";
exports.vdsColorSilverLight = "#96A0AA";
exports.vdsColorSilverLighter = "#C8CDD2";
exports.vdsColorSilverLightest = "#F9F9FA";
exports.vdsColorRedDarker = "#501212";
exports.vdsColorRedDark = "#962121";
exports.vdsColorRed = "#DD3131";
exports.vdsColorRedLight = "#E87373";
exports.vdsColorRedLighter = "#F3B5B5";
exports.vdsColorRedLightest = "#FBE6E6";
exports.vdsColorOrangeDarker = "#5C3F04";
exports.vdsColorOrangeDark = "#9E6C07";
exports.vdsColorOrange = "#FFAE0C";
exports.vdsColorOrangeLight = "#FFC85A";
exports.vdsColorOrangeLighter = "#FFE2A8";
exports.vdsColorOrangeLightest = "#FFF5E2";
exports.vdsColorGreenDarker = "#084627";
exports.vdsColorGreenDark = "#0E8449";
exports.vdsColorGreen = "#15C26B";
exports.vdsColorGreenLight = "#60D69A";
exports.vdsColorGreenLighter = "#ABE9CA";
exports.vdsColorGreenLightest = "#E3F8ED";
exports.vdsColorBlueDarker = "#0F2B3D";
exports.vdsColorBlueDark = "#1D5174";
exports.vdsColorBlue = "#2A77AA";
exports.vdsColorBlueLight = "#6EA3C5";
exports.vdsColorBlueLighter = "#B2CEE0";
exports.vdsColorBlueLightest = "#E5EFF5";
exports.vdsColorPurpleDarker = "#391B50";
exports.vdsColorPurpleDark = "#6C3498";
exports.vdsColorPurple = "#9F4CDF";
exports.vdsColorPurpleLight = "#BE85E9";
exports.vdsColorPurpleLighter = "#DCBFF3";
exports.vdsColorPurpleLightest = "#F3EAFB";
exports.vdsColorYellowDarker = "#554809";
exports.vdsColorYellowDark = "#A88E12";
exports.vdsColorYellow = "#ECC81A";
exports.vdsColorYellowLight = "#F2DA63";
exports.vdsColorYellowLighter = "#F8EBAD";
exports.vdsColorYellowLightest = "#FDF8E4";
exports.vdsColorTealDarker = "#014943";
exports.vdsColorTealDark = "#018377";
exports.vdsColorTeal = "#02CCBA";
exports.vdsColorTealLight = "#53DCD0";
exports.vdsColorTealLighter = "#A4EDE6";
exports.vdsColorTealLightest = "#E1F9F7";
exports.vdsColorMagentaDarker = "#5C1E2F";
exports.vdsColorMagentaDark = "#AD3959";
exports.vdsColorMagenta = "#FF5483";
exports.vdsColorMagentaLight = "#FF8BAB";
exports.vdsColorMagentaLighter = "#FFC1D2";
exports.vdsColorMagentaLightest = "#FFEAF0";
exports.vdsColorWhite = "#FFFFFF";
exports.vdsColorBlack = "#000709";
exports.vdsBaseDuration = "0.3s";
exports.vdsBaseTiming = "ease";
exports.vdsTransitionAll = "all 0.3s ease";
exports.vdsFontFamilyText = "'Open Sans', sans-serif";
exports.vdsFontFamilyCode = "'Source Code Pro', monospace";
exports.vdsBaseFontUnit = "16";
exports.vdsBaseFontSize = "16px";
exports.vdsHeadingFontSizeH1 = "2.5rem";
exports.vdsHeadingFontSizeH2 = "2rem";
exports.vdsHeadingFontSizeH3 = "1.5rem";
exports.vdsHeadingFontSizeH4 = "1rem";
exports.vdsHeadingFontSizeH5 = "0.75rem";
exports.vdsHeadingFontSizeH6 = "0.625rem";
exports.vdsHeadingFontSizeH1Mobile = "2rem";
exports.vdsHeadingFontSizeH2Mobile = "1.5rem";
exports.vdsHeadingFontSizeH3Mobile = "1.125rem";
exports.vdsHeadingFontSizeH4Mobile = "1rem";
/* Default size for body text */
exports.vdsTextFontSize = "1rem";
exports.vdsTextFontSizeSm = "0.875rem";
exports.vdsTextFontSizeXs = "0.75rem";
/* Default size for quote */
exports.vdsQuoteFontSize = "1.5rem";
exports.vdsQuoteFontSizeMobile = "1.125rem";
/* For `Open Sans` only */
exports.vdsFontWeightLight = "300";
/* For `Open Sans` and `Source Code Pro` */
exports.vdsFontWeightRegular = "400";
/* For `Open Sans` and `Source Code Pro` */
exports.vdsFontWeightSemibold = "600";
/* For `Open Sans` and `Source Code Pro` */
exports.vdsFontWeightBold = "700";
/* For `Open Sans` only */
exports.vdsFontWeightExtrabold = "800";
exports.vdsGradientSilverCerulean = "linear-gradient(to bottom right, #F9F9FA, #F5FCFE)";
exports.vdsGradientSilverSlate = "linear-gradient(to bottom right, #F9F9FA, #F7F7F8)";
/* Accessibility guidelines: use dark text for color contrast */
exports.vdsGradientPurpleCerulean = "linear-gradient(to bottom right, #DCBFF3, #A4E4F5)";
/* Accessibility guidelines: use dark text for color contrast */
exports.vdsGradientPurpleMagenta = "linear-gradient(to bottom right, #9F4CDF, #FF5483)";
/* Accessibility guidelines: use dark text for color contrast */
exports.vdsGradientTealPurple = "linear-gradient(to bottom right, #02CCBA, #9F4CDF)";
/* Accessibility guidelines: use dark text for color contrast */
exports.vdsGradientCeruleanTeal = "linear-gradient(to bottom right, #02B3E4, #02CCBA)";
/* Accessibility guidelines: use dark text for color contrast */
exports.vdsGradientMagentaYellow = "linear-gradient(to bottom right, #FF5483, #ECC81A)";
/* Accessibility guidelines: use dark text for color contrast */
exports.vdsGradientCeruleanPurple = "linear-gradient(to bottom right, #02B3E4, #9F4CDF)";
/* Accessibility guidelines: use light text for color contrast */
exports.vdsGradientPurpleMagentaDark = "linear-gradient(to bottom right, #6C3498, #AD3959)";
/* Accessibility guidelines: use light text for color contrast */
exports.vdsGradientTealPurpleDark = "linear-gradient(to bottom right, #018377, #6C3498)";
/* Accessibility guidelines: use light text for color contrast */
exports.vdsGradientCeruleanTealDark = "linear-gradient(to bottom right, #017A9B, #018377)";
/* Accessibility guidelines: use light text for color contrast */
exports.vdsGradientMagentaYellowDark = "linear-gradient(to bottom right, #AD3959, #A88E12)";
/* Accessibility guidelines: use light text for color contrast */
exports.vdsGradientCeruleanPurpleDark = "linear-gradient(to bottom right, #017A9B, #6C3498)";
exports.vdsLetterSpacing = "1.5px";
exports.vdsBaseLineHeight = "28px";
exports.vdsHeadingLineHeightH1 = "4rem";
exports.vdsHeadingLineHeightH2 = "3rem";
exports.vdsHeadingLineHeightH3 = "2.5rem";
exports.vdsHeadingLineHeightH4 = "2rem";
exports.vdsHeadingLineHeightH5 = "1.5rem";
exports.vdsHeadingLineHeightH6 = "1rem";
exports.vdsHeadingLineHeightH1Mobile = "3rem";
exports.vdsHeadingLineHeightH2Mobile = "2.5rem";
exports.vdsHeadingLineHeightH3Mobile = "2rem";
exports.vdsHeadingLineHeightH4Mobile = "1.75rem";
exports.vdsTextLineHeight = "2rem";
exports.vdsTextLineHeightSm = "1.5rem";
exports.vdsTextLineHeightXs = "1.5rem";
exports.vdsQuoteLineHeight = "2.5rem";
exports.vdsQuoteLineHeightMobile = "2rem";
exports.vdsTextSelectionOpacity = "0.40";
exports.vdsTextMaxWidthSm = "30rem";
exports.vdsTextMaxWidthBase = "40rem";
exports.vdsTextMaxWidthLg = "50rem";
exports.vdsSpacingNone = "0";
exports.vdsSpacingHalf = "0.25rem";
exports.vdsSpacing1X = "0.5rem";
exports.vdsSpacing2X = "1rem";
exports.vdsSpacing3X = "1.5rem";
exports.vdsSpacing4X = "2rem";
exports.vdsSpacing6X = "3rem";
/* Apply using the property: `margin` */
exports.vdsSpacingInlineHalf = "0 0.25rem 0 0";
/* Apply using the property: `margin` */
exports.vdsSpacingInline1X = "0 0.5rem 0 0";
/* Apply using the property: `margin` */
exports.vdsSpacingInline2X = "0 1rem 0 0";
/* Apply using the property: `margin` */
exports.vdsSpacingInline3X = "0 1.5rem 0 0";
/* Apply using the property: `margin` */
exports.vdsSpacingInline4X = "0 2rem 0 0";
/* Apply using the property: `margin` */
exports.vdsSpacingInline6X = "0 3rem 0 0";
/* Apply using the property: `padding` */
exports.vdsSpacingInsetHalf = "0.25rem 0.25rem 0.25rem 0.25rem";
/* Apply using the property: `padding` */
exports.vdsSpacingInset1X = "0.5rem 0.5rem 0.5rem 0.5rem";
/* Apply using the property: `padding` */
exports.vdsSpacingInset2X = "1rem 1rem 1rem 1rem";
/* Apply using the property: `padding` */
exports.vdsSpacingInset3X = "1.5rem 1.5rem 1.5rem 1.5rem";
/* Apply using the property: `padding` */
exports.vdsSpacingInset4X = "2rem 2rem 2rem 2rem";
/* Apply using the property: `padding` */
exports.vdsSpacingInset6X = "3rem 3rem 3rem 3rem";
/* Apply using the property: `margin` */
exports.vdsSpacingStackHalf = "0 0 0.25rem 0";
/* Apply using the property: `margin` */
exports.vdsSpacingStack1X = "0 0 0.5rem 0";
/* Apply using the property: `margin` */
exports.vdsSpacingStack2X = "0 0 1rem 0";
/* Apply using the property: `margin` */
exports.vdsSpacingStack3X = "0 0 1.5rem 0";
/* Apply using the property: `margin` */
exports.vdsSpacingStack4X = "0 0 2rem 0";
/* Apply using the property: `margin` */
exports.vdsSpacingStack6X = "0 0 3rem 0";
exports.vdsTextColor = "#11161A";
exports.vdsTextSelectionColor = "#A4E4F5";
exports.vdsTextColorError = "#501212";
exports.vdsTextColorWarning = "#5C3F04";
exports.vdsTextColorSuccess = "#084627";
exports.vdsTextColorInformation = "#0F2B3D";
