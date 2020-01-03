window.modules["52"] = [function(require,module,exports){module.exports={"generic":true,"types":{"absolute-size":"xx-small | x-small | small | medium | large | x-large | xx-large","alpha-value":"<number> | <percentage>","angle-percentage":"<angle> | <percentage>","animateable-feature":"scroll-position | contents | <custom-ident>","attachment":"scroll | fixed | local","auto-repeat":"repeat( [ auto-fill | auto-fit ] , [ <line-names>? <fixed-size> ]+ <line-names>? )","auto-track-list":"[ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>? <auto-repeat> [ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>?","basic-shape":"<inset()> | <circle()> | <ellipse()> | <polygon()>","bg-image":"none | <image>","bg-layer":"<bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box>{1,2}","bg-size":"[ <length-percentage> | auto ]{1,2} | cover | contain","blur()":"blur( <length> )","blend-mode":"normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity","box":"border-box | padding-box | content-box","br-style":"none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset","br-width":"<length> | thin | medium | thick","brightness()":"brightness( <number-percentage> )","calc()":"calc( <calc-sum> )","calc-sum":"<calc-product> [ [ '+' | '-' ] <calc-product> ]*","calc-product":"<calc-value> [ '*' <calc-value> | '/' <number> ]*","calc-value":"<number> | <dimension> | <percentage> | ( <calc-sum> )","cf-final-image":"<image> | <color>","cf-mixing-image":"<percentage>? && <image>","circle()":"circle( [ <shape-radius> ]? [ at <position> ]? )","clip-source":"<url>","color":"<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>","color-stop":"<color> <length-percentage>?","color-stop-list":"<color-stop>#{2,}","common-lig-values":"[ common-ligatures | no-common-ligatures ]","composite-style":"clear | copy | source-over | source-in | source-out | source-atop | destination-over | destination-in | destination-out | destination-atop | xor","compositing-operator":"add | subtract | intersect | exclude","contextual-alt-values":"[ contextual | no-contextual ]","content-list":"[ <string> | contents | <url> | <quote> | <attr()> | counter( <ident> , <'list-style-type'>? ) ]+","content-replacement":"<image>","contrast()":"contrast( [ <number-percentage> ] )","counter-style":"<counter-style-name> | symbols()","counter-style-name":"<custom-ident>","cross-fade()":"cross-fade( <cf-mixing-image> , <cf-final-image>? )","cubic-bezier-timing-function":"ease | ease-in | ease-out | ease-in-out | cubic-bezier( <number> , <number> , <number> , <number> )","deprecated-system-color":"ActiveBorder | ActiveCaption | AppWorkspace | Background | ButtonFace | ButtonHighlight | ButtonShadow | ButtonText | CaptionText | GrayText | Highlight | HighlightText | InactiveBorder | InactiveCaption | InactiveCaptionText | InfoBackground | InfoText | Menu | MenuText | Scrollbar | ThreeDDarkShadow | ThreeDFace | ThreeDHighlight | ThreeDLightShadow | ThreeDShadow | Window | WindowFrame | WindowText","discretionary-lig-values":"[ discretionary-ligatures | no-discretionary-ligatures ]","display-box":"contents | none","display-inside":"flow | flow-root | table | flex | grid | subgrid | ruby","display-internal":"table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container","display-legacy":"inline-block | inline-list-item | inline-table | inline-flex | inline-grid","display-listitem":"list-item && <display-outside>? && [ flow | flow-root ]?","display-outside":"block | inline | run-in","drop-shadow()":"drop-shadow( <length>{2,3} <color>? )","east-asian-variant-values":"[ jis78 | jis83 | jis90 | jis04 | simplified | traditional ]","east-asian-width-values":"[ full-width | proportional-width ]","element()":"element( <id-selector> )","ellipse()":"ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )","ending-shape":"circle | ellipse","explicit-track-list":"[ <line-names>? <track-size> ]+ <line-names>?","family-name":"<string> | <custom-ident>+","feature-tag-value":"<string> [ <integer> | on | off ]?","feature-value-name":"<custom-ident>","fill-rule":"nonzero | evenodd","filter-function":"<blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <sepia()> | <saturate()>","filter-function-list":"[ <filter-function> | <url> ]+","final-bg-layer":"<bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box> || <'background-color'>","fit-content()":"fit-content( [ <length> | <percentage> ] )","fixed-breadth":"<length-percentage>","fixed-repeat":"repeat( [ <positive-integer> ] , [ <line-names>? <fixed-size> ]+ <line-names>? )","fixed-size":"<fixed-breadth> | minmax( <fixed-breadth> , <track-breadth> ) | minmax( <inflexible-breadth> , <fixed-breadth> )","font-variant-css21":"[ normal | small-caps ]","frames-timing-function":"frames( <integer> )","frequency-percentage":"<frequency> | <percentage>","generic-family":"serif | sans-serif | cursive | fantasy | monospace | -apple-system","generic-name":"serif | sans-serif | cursive | fantasy | monospace","geometry-box":"<shape-box> | fill-box | stroke-box | view-box","gradient":"<-legacy-gradient()> | <linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()>","grayscale()":"grayscale( <number-percentage> )","grid-line":"auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ] ]","historical-lig-values":"[ historical-ligatures | no-historical-ligatures ]","hsl()":"hsl( [ <hue> <percentage> <percentage> [ / <alpha-value> ]? ] | [ <hue> , <percentage> , <percentage> , <alpha-value>? ] )","hsla()":"hsla( [ <hue> <percentage> <percentage> [ / <alpha-value> ]? ] | [ <hue> , <percentage> , <percentage> , <alpha-value>? ] )","hue":"<number> | <angle>","hue-rotate()":"hue-rotate( <angle> )","image":"<url> | <image()> | <image-set()> | <element()> | <cross-fade()> | <gradient>","image()":"image( [ [ <image> | <string> ]? , <color>? ]! )","image-set()":"image-set( <image-set-option># )","image-set-option":"[ <image> | <string> ] <resolution>","inflexible-breadth":"<length> | <percentage> | min-content | max-content | auto","inset()":"inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )","invert()":"invert( <number-percentage> )","keyframes-name":"<custom-ident> | <string>","keyframe-selector":"from | to | <percentage>","leader()":"leader( <leader-type> )","leader-type":"dotted | solid | space | <string>","length-percentage":"<length> | <percentage>","line-names":"'[' <custom-ident>* ']'","line-name-list":"[ <line-names> | <name-repeat> ]+","linear-gradient()":"linear-gradient( [ <angle> | to <side-or-corner> ]? , <color-stop-list> )","mask-layer":"<mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || <geometry-box> || [ <geometry-box> | no-clip ] || <compositing-operator> || <masking-mode>","mask-position":"[ <length-percentage> | left | center | right ] [ <length-percentage> | top | center | bottom ]?","mask-reference":"none | <image> | <mask-source>","mask-source":"<url>","masking-mode":"alpha | luminance | match-source","matrix()":"matrix( <number> [, <number> ]{5} )","matrix3d()":"matrix3d( <number> [, <number> ]{15} )","media-type":"<ident>","mf-boolean":"<mf-name>","mf-name":"<ident>","minmax()":"minmax( [ <length> | <percentage> | <flex> | min-content | max-content | auto ] , [ <length> | <percentage> | <flex> | min-content | max-content | auto ] )","named-color":"transparent | aliceblue | antiquewhite | aqua | aquamarine | azure | beige | bisque | black | blanchedalmond | blue | blueviolet | brown | burlywood | cadetblue | chartreuse | chocolate | coral | cornflowerblue | cornsilk | crimson | cyan | darkblue | darkcyan | darkgoldenrod | darkgray | darkgreen | darkgrey | darkkhaki | darkmagenta | darkolivegreen | darkorange | darkorchid | darkred | darksalmon | darkseagreen | darkslateblue | darkslategray | darkslategrey | darkturquoise | darkviolet | deeppink | deepskyblue | dimgray | dimgrey | dodgerblue | firebrick | floralwhite | forestgreen | fuchsia | gainsboro | ghostwhite | gold | goldenrod | gray | green | greenyellow | grey | honeydew | hotpink | indianred | indigo | ivory | khaki | lavender | lavenderblush | lawngreen | lemonchiffon | lightblue | lightcoral | lightcyan | lightgoldenrodyellow | lightgray | lightgreen | lightgrey | lightpink | lightsalmon | lightseagreen | lightskyblue | lightslategray | lightslategrey | lightsteelblue | lightyellow | lime | limegreen | linen | magenta | maroon | mediumaquamarine | mediumblue | mediumorchid | mediumpurple | mediumseagreen | mediumslateblue | mediumspringgreen | mediumturquoise | mediumvioletred | midnightblue | mintcream | mistyrose | moccasin | navajowhite | navy | oldlace | olive | olivedrab | orange | orangered | orchid | palegoldenrod | palegreen | paleturquoise | palevioletred | papayawhip | peachpuff | peru | pink | plum | powderblue | purple | rebeccapurple | red | rosybrown | royalblue | saddlebrown | salmon | sandybrown | seagreen | seashell | sienna | silver | skyblue | slateblue | slategray | slategrey | snow | springgreen | steelblue | tan | teal | thistle | tomato | turquoise | violet | wheat | white | whitesmoke | yellow | yellowgreen | <-non-standart-color>","namespace-prefix":"<ident>","number-percentage":"<number> | <percentage>","numeric-figure-values":"[ lining-nums | oldstyle-nums ]","numeric-fraction-values":"[ diagonal-fractions | stacked-fractions ]","numeric-spacing-values":"[ proportional-nums | tabular-nums ]","opacity()":"opacity( [ <number-percentage> ] )","perspective()":"perspective( <length> )","polygon()":"polygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )","position":"[ center && [ left | right | top | bottom ] <length-percentage>? ] | [ [ left | right ] <length-percentage>? ] && [ [ top | bottom ] <length-percentage>? ] | [ [ left | center | right | <length-percentage> ] || [ top | center | bottom | <length-percentage> ] ]","quote":"open-quote | close-quote | no-open-quote | no-close-quote","radial-gradient()":"radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )","relative-size":"larger | smaller","repeat-style":"repeat-x | repeat-y | [ repeat | space | round | no-repeat ]{1,2}","repeating-linear-gradient()":"repeating-linear-gradient( [ <angle> | to <side-or-corner> ]? , <color-stop-list> )","repeating-radial-gradient()":"repeating-radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )","rgb()":"rgb( [ [ <percentage>{3} | <number>{3} ] [ / <alpha-value> ]? ] | [ [ <percentage>#{3} | <number>#{3} ] , <alpha-value>? ] )","rgba()":"rgba( [ [ <percentage>{3} | <number>{3} ] [ / <alpha-value> ]? ] | [ [ <percentage>#{3} | <number>#{3} ] , <alpha-value>? ] )","rotate()":"rotate( <angle> )","rotate3d()":"rotate3d( <number> , <number> , <number> , <angle> )","rotateX()":"rotateX( <angle> )","rotateY()":"rotateY( <angle> )","rotateZ()":"rotateZ( <angle> )","saturate()":"saturate( <number-percentage> )","scale()":"scale( <number> [, <number> ]? )","scale3d()":"scale3d( <number> , <number> , <number> )","scaleX()":"scaleX( <number> )","scaleY()":"scaleY( <number> )","scaleZ()":"scaleZ( <number> )","shape-radius":"<length-percentage> | closest-side | farthest-side","skew()":"skew( <angle> [, <angle> ]? )","skewX()":"skewX( <angle> )","skewY()":"skewY( <angle> )","sepia()":"sepia( <number-percentage> )","shadow":"inset? && <length>{2,4} && <color>?","shadow-t":"[ <length>{2,3} && <color>? ]","shape":"rect( [ [ <top> , <right> , <bottom> , <left> ] | [ <top> <right> <bottom> <left> ] ] )","shape-box":"<box> | margin-box","side-or-corner":"[ left | right ] || [ top | bottom ]","single-animation":"<time> || <single-timing-function> || <time> || <single-animation-iteration-count> || <single-animation-direction> || <single-animation-fill-mode> || <single-animation-play-state> || [ none | <keyframes-name> ]","single-animation-direction":"normal | reverse | alternate | alternate-reverse","single-animation-fill-mode":"none | forwards | backwards | both","single-animation-iteration-count":"infinite | <number>","single-animation-play-state":"running | paused","single-timing-function":"linear | <cubic-bezier-timing-function> | <step-timing-function> | <frames-timing-function>","single-transition":"<single-transition-timing-function> || [ none | <single-transition-property> ] || <time> || <time>","single-transition-timing-function":"<single-timing-function>","single-transition-property":"all | <custom-ident>","size":"closest-side | farthest-side | closest-corner | farthest-corner | <length> | <length-percentage>{2}","step-timing-function":"step-start | step-end | steps( <integer> [, [ start | end ] ]? )","symbol":"<string> | <image> | <ident>","target":"<target-counter()> | <target-counters()> | <target-text()>","target-counter()":"target-counter( [ <string> | <url> ] , <custom-ident> , <counter-style>? )","target-counters()":"target-counters( [ <string> | <url> ] , <custom-ident> , <string> , <counter-style>? )","target-text()":"target-text( [ <string> | <url> ] , [ content | before | after | first-letter ]? )","time-percentage":"<time> | <percentage>","track-breadth":"<length-percentage> | <flex> | min-content | max-content | auto","track-list":"[ <line-names>? [ <track-size> | <track-repeat> ] ]+ <line-names>?","track-repeat":"repeat( [ <positive-integer> ] , [ <line-names>? <track-size> ]+ <line-names>? )","track-size":"<track-breadth> | minmax( <inflexible-breadth> , <track-breadth> ) | fit-content( [ <length> | <percentage> ] )","transform-function":"[ <matrix()> || <translate()> || <translateX()> || <translateY()> || <scale()> || <scaleX()> || <scaleY()> || <rotate()> || <skew()> || <skewX()> || <skewY()> || <matrix3d()> || <translate3d()> || <translateZ()> || <scale3d()> || <scaleZ()> || <rotate3d()> || <rotateX()> || <rotateY()> || <rotateZ()> || <perspective()> ]+","transform-list":"<transform-function>+","translate()":"translate( <length-percentage> [, <length-percentage> ]? )","translate3d()":"translate3d( <length-percentage> , <length-percentage> , <length> )","translateX()":"translateX( <length-percentage> )","translateY()":"translateY( <length-percentage> )","translateZ()":"translateZ( <length> )","type-or-unit":"string | integer | color | url | integer | number | length | angle | time | frequency | em | ex | px | rem | vw | vh | vmin | vmax | mm | q | cm | in | pt | pc | deg | grad | rad | ms | s | Hz | kHz | %","viewport-length":"auto | <length-percentage>","-legacy-gradient()":"<-webkit-gradient()> | <-legacy-linear-gradient()> | <-legacy-repeating-linear-gradient()> | <-legacy-radial-gradient()> | <-legacy-repeating-radial-gradient()>","-legacy-linear-gradient()":"-moz-linear-gradient( <-legacy-linear-gradient-arguments> ) | -ms-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-repeating-linear-gradient()":"-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -ms-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-linear-gradient-arguments":"[ <angle> | <side-or-corner> ]? , <color-stop-list>","-legacy-radial-gradient()":"-moz-radial-gradient( <-legacy-radial-gradient-arguments> ) | -ms-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-repeating-radial-gradient()":"-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -ms-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-radial-gradient-arguments":"[ <position> , ]? [ [ [ <-legacy-radial-gradient-shape> || <-legacy-radial-gradient-size> ] | [ <length> | <percentage> ]{2} ] , ]? <color-stop-list>","-legacy-radial-gradient-size":"closest-side | closest-corner | farthest-side | farthest-corner | contain | cover","-legacy-radial-gradient-shape":"circle | ellipse","-non-standart-font":"-apple-system-body | -apple-system-headline | -apple-system-subheadline | -apple-system-caption1 | -apple-system-caption2 | -apple-system-footnote | -apple-system-short-body | -apple-system-short-headline | -apple-system-short-subheadline | -apple-system-short-caption1 | -apple-system-short-footnote | -apple-system-tall-body","-non-standart-color":"-moz-ButtonDefault | -moz-ButtonHoverFace | -moz-ButtonHoverText | -moz-CellHighlight | -moz-CellHighlightText | -moz-Combobox | -moz-ComboboxText | -moz-Dialog | -moz-DialogText | -moz-dragtargetzone | -moz-EvenTreeRow | -moz-Field | -moz-FieldText | -moz-html-CellHighlight | -moz-html-CellHighlightText | -moz-mac-accentdarkestshadow | -moz-mac-accentdarkshadow | -moz-mac-accentface | -moz-mac-accentlightesthighlight | -moz-mac-accentlightshadow | -moz-mac-accentregularhighlight | -moz-mac-accentregularshadow | -moz-mac-chrome-active | -moz-mac-chrome-inactive | -moz-mac-focusring | -moz-mac-menuselect | -moz-mac-menushadow | -moz-mac-menutextselect | -moz-MenuHover | -moz-MenuHoverText | -moz-MenuBarText | -moz-MenuBarHoverText | -moz-nativehyperlinktext | -moz-OddTreeRow | -moz-win-communicationstext | -moz-win-mediatext | -moz-activehyperlinktext | -moz-default-background-color | -moz-default-color | -moz-hyperlinktext | -moz-visitedhyperlinktext | -webkit-activelink | -webkit-focus-ring-color | -webkit-link | -webkit-text","-non-standart-image-rendering":"optimize-contrast | -moz-crisp-edges | -o-crisp-edges | -webkit-optimize-contrast","-non-standart-width":"min-intrinsic | intrinsic | -moz-min-content | -moz-max-content | -webkit-min-content | -webkit-max-content","-non-standart-word-break":"break-word","-webkit-image-set()":"<image-set()>","-webkit-gradient()":"-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [ , <-webkit-gradient-point> | , <-webkit-gradient-radius> , <-webkit-gradient-point> ] [, <-webkit-gradient-radius> ]? [, <-webkit-gradient-color-stop()> ]* )","-webkit-gradient-color-stop()":"from( <color> ) | color-stop( [ <number-zero-one> | <percentage> ] , <color> ) | to( <color> )","-webkit-gradient-point":"[ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]","-webkit-gradient-radius":"<length> | <percentage>","-webkit-gradient-type":"linear | radial","-webkit-mask-box-repeat":"repeat | stretch | round","-webkit-mask-clip-style":"border | border-box | padding | padding-box | content | content-box | text","-ms-filter":"[ <progid> | FlipH | FlipV ]+","age":"child | young | old","border-radius":"<length-percentage>{1,2}","bottom":"<length> | auto","generic-voice":"[ <age>? <gender> <integer>? ]","gender":"male | female | neutral","left":"<length> | auto","mask-image":"<mask-reference>#","name-repeat":"repeat( [ <positive-integer> | auto-fill ] , <line-names>+ )","outline-radius":"<border-radius>","paint":"none | currentColor | <color> | <url> [ none | currentColor | <color> ]?","path()":"path( <string> )","right":"<length> | auto","svg-length":"<percentage> | <length> | <number>","svg-writing-mode":"lr-tb | rl-tb | tb-rl | lr | rl | tb","top":"<length> | auto","x":"<number>","y":"<number>"},"properties":{"-ms-overflow-style":"auto | none | scrollbar | -ms-autohiding-scrollbar","-moz-appearance":"none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized","-moz-binding":"<url> | none","-moz-border-bottom-colors":"[ <color> ]* <color> | none","-moz-border-left-colors":"[ <color> ]* <color> | none","-moz-border-right-colors":"[ <color> ]* <color> | none","-moz-border-top-colors":"[ <color> ]* <color> | none","-moz-context-properties":"none | [ fill | fill-opacity | stroke | stroke-opacity ]#","-moz-float-edge":"border-box | content-box | margin-box | padding-box","-moz-force-broken-image-icon":"<integer>","-moz-image-region":"<shape> | auto","-moz-orient":"inline | block | horizontal | vertical","-moz-outline-radius":"<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?","-moz-outline-radius-bottomleft":"<outline-radius>","-moz-outline-radius-bottomright":"<outline-radius>","-moz-outline-radius-topleft":"<outline-radius>","-moz-outline-radius-topright":"<outline-radius>","-moz-stack-sizing":"ignore | stretch-to-fit","-moz-text-blink":"none | blink","-moz-user-focus":"ignore | normal | select-after | select-before | select-menu | select-same | select-all | none","-moz-user-input":"auto | none | enabled | disabled","-moz-user-modify":"read-only | read-write | write-only","-moz-window-shadow":"default | menu | tooltip | sheet | none","-webkit-border-before":"<'border-width'> || <'border-style'> || <'color'>","-webkit-border-before-color":"<'color'>","-webkit-border-before-style":"<'border-style'>","-webkit-border-before-width":"<'border-width'>","-webkit-box-reflect":"[ above | below | right | left ]? <length>? <image>?","-webkit-mask":"<mask-image> [ <'-webkit-mask-repeat'> || <'-webkit-mask-attachment'> || <'-webkit-mask-position'> || <'-webkit-mask-origin'> || <'-webkit-mask-clip'> ]*","-webkit-mask-attachment":"<attachment> [, <attachment> ]*","-webkit-mask-clip":"<-webkit-mask-clip-style> [, <-webkit-mask-clip-style> ]*","-webkit-mask-composite":"<composite-style> [, <composite-style> ]*","-webkit-mask-image":"<mask-image> [, <mask-image> ]*","-webkit-mask-origin":"[ padding | border | content ] [, [ border | padding | content ] ]*","-webkit-mask-position":"<mask-position>#","-webkit-mask-position-x":"[ <length-percentage> | left | center | right ]#","-webkit-mask-position-y":"[ <length-percentage> | top | center | bottom ]#","-webkit-mask-repeat":"<repeat-style> [, <repeat-style> ]*","-webkit-mask-repeat-x":"repeat | no-repeat | space | round","-webkit-mask-repeat-y":"repeat | no-repeat | space | round","-webkit-tap-highlight-color":"<color>","-webkit-text-fill-color":"<color>","-webkit-text-stroke":"<length> || <color>","-webkit-text-stroke-color":"<color>","-webkit-text-stroke-width":"<length>","-webkit-touch-callout":"default | none","align-content":"flex-start | flex-end | center | space-between | space-around | space-evenly | stretch","align-items":"flex-start | flex-end | center | baseline | stretch","align-self":"auto | flex-start | flex-end | center | baseline | stretch","all":"initial | inherit | unset","animation":"<single-animation>#","animation-delay":"<time>#","animation-direction":"<single-animation-direction>#","animation-duration":"<time>#","animation-fill-mode":"<single-animation-fill-mode>#","animation-iteration-count":"<single-animation-iteration-count>#","animation-name":"[ none | <keyframes-name> ]#","animation-play-state":"<single-animation-play-state>#","animation-timing-function":"<single-timing-function>#","appearance":"auto | none","azimuth":"<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards","backdrop-filter":"none | <filter-function-list>","backface-visibility":"visible | hidden","background":"[ <bg-layer> , ]* <final-bg-layer>","background-attachment":"<attachment>#","background-blend-mode":"<blend-mode>#","background-clip":"<box>#","background-color":"<color>","background-image":"<bg-image>#","background-origin":"<box>#","background-position":"<position>#","background-position-x":"[ center | [ left | right | x-start | x-end ]? <length-percentage>? ]#","background-position-y":"[ center | [ top | bottom | y-start | y-end ]? <length-percentage>? ]#","background-repeat":"<repeat-style>#","background-size":"<bg-size>#","block-size":"<'width'>","border":"<br-width> || <br-style> || <color>","border-block-end":"<'border-width'> || <'border-style'> || <'color'>","border-block-end-color":"<'color'>","border-block-end-style":"<'border-style'>","border-block-end-width":"<'border-width'>","border-block-start":"<'border-width'> || <'border-style'> || <'color'>","border-block-start-color":"<'color'>","border-block-start-style":"<'border-style'>","border-block-start-width":"<'border-width'>","border-bottom":"<br-width> || <br-style> || <color>","border-bottom-color":"<color>","border-bottom-left-radius":"<length-percentage>{1,2}","border-bottom-right-radius":"<length-percentage>{1,2}","border-bottom-style":"<br-style>","border-bottom-width":"<br-width>","border-collapse":"collapse | separate","border-color":"<color>{1,4}","border-image":"<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>","border-image-outset":"[ <length> | <number> ]{1,4}","border-image-repeat":"[ stretch | repeat | round | space ]{1,2}","border-image-slice":"<number-percentage>{1,4} && fill?","border-image-source":"none | <image>","border-image-width":"[ <length-percentage> | <number> | auto ]{1,4}","border-inline-end":"<'border-width'> || <'border-style'> || <'color'>","border-inline-end-color":"<'color'>","border-inline-end-style":"<'border-style'>","border-inline-end-width":"<'border-width'>","border-inline-start":"<'border-width'> || <'border-style'> || <'color'>","border-inline-start-color":"<'color'>","border-inline-start-style":"<'border-style'>","border-inline-start-width":"<'border-width'>","border-left":"<br-width> || <br-style> || <color>","border-left-color":"<color>","border-left-style":"<br-style>","border-left-width":"<br-width>","border-radius":"<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?","border-right":"<br-width> || <br-style> || <color>","border-right-color":"<color>","border-right-style":"<br-style>","border-right-width":"<br-width>","border-spacing":"<length> <length>?","border-style":"<br-style>{1,4}","border-top":"<br-width> || <br-style> || <color>","border-top-color":"<color>","border-top-left-radius":"<length-percentage>{1,2}","border-top-right-radius":"<length-percentage>{1,2}","border-top-style":"<br-style>","border-top-width":"<br-width>","border-width":"<br-width>{1,4}","bottom":"<length> | <percentage> | auto","box-align":"start | center | end | baseline | stretch","box-decoration-break":"slice | clone","box-direction":"normal | reverse | inherit","box-flex":"<number>","box-flex-group":"<integer>","box-lines":"single | multiple","box-ordinal-group":"<integer>","box-orient":"horizontal | vertical | inline-axis | block-axis | inherit","box-pack":"start | center | end | justify","box-shadow":"none | <shadow>#","box-sizing":"content-box | border-box","break-after":"auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region","break-before":"auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region","break-inside":"auto | avoid | avoid-page | avoid-column | avoid-region","caption-side":"top | bottom | block-start | block-end | inline-start | inline-end","caret-color":"auto | <color>","clear":"none | left | right | both | inline-start | inline-end","clip":"<shape> | auto","clip-path":"<clip-source> | [ <basic-shape> || <geometry-box> ] | none","color":"<color>","column-count":"<number> | auto","column-fill":"auto | balance","column-gap":"<length> | normal","column-rule":"<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>","column-rule-color":"<color>","column-rule-style":"<br-style>","column-rule-width":"<br-width>","column-span":"none | all","column-width":"<length> | auto","columns":"<'column-width'> || <'column-count'>","contain":"none | strict | content | [ size || layout || style || paint ]","content":"normal | none | [ <content-replacement> | <content-list> ] [ / <string> ]?","counter-increment":"[ <custom-ident> <integer>? ]+ | none","counter-reset":"[ <custom-ident> <integer>? ]+ | none","cursor":"[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing | hand | -webkit-grab | -webkit-grabbing | -webkit-zoom-in | -webkit-zoom-out | -moz-grab | -moz-grabbing | -moz-zoom-in | -moz-zoom-out ] ]","direction":"ltr | rtl","display":"none | inline | block | list-item | inline-list-item | inline-block | inline-table | table | table-cell | table-column | table-column-group | table-footer-group | table-header-group | table-row | table-row-group | flex | inline-flex | grid | inline-grid | run-in | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents | -ms-flexbox | -ms-inline-flexbox | -ms-grid | -ms-inline-grid | -webkit-flex | -webkit-inline-flex | -webkit-box | -webkit-inline-box | -moz-inline-stack | -moz-box | -moz-inline-box","display-inside":"auto | block | table | flex | grid | ruby","display-list":"none | list-item","display-outside":"block-level | inline-level | run-in | contents | none | table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container","empty-cells":"show | hide","filter":"none | <filter-function-list> | <-ms-filter>","flex":"none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]","flex-basis":"content | <'width'>","flex-direction":"row | row-reverse | column | column-reverse","flex-flow":"<'flex-direction'> || <'flex-wrap'>","flex-grow":"<number>","flex-shrink":"<number>","flex-wrap":"nowrap | wrap | wrap-reverse","float":"left | right | none | inline-start | inline-end","font":"[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar | <-non-standart-font>","font-family":"[ <family-name> | <generic-family> ]#","font-feature-settings":"normal | <feature-tag-value>#","font-kerning":"auto | normal | none","font-language-override":"normal | <string>","font-variation-settings":"normal | [ <string> <number> ]#","font-size":"<absolute-size> | <relative-size> | <length-percentage>","font-size-adjust":"none | <number>","font-stretch":"normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded","font-style":"normal | italic | oblique","font-synthesis":"none | [ weight || style ]","font-variant":"normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]","font-variant-alternates":"normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]","font-variant-caps":"normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps","font-variant-east-asian":"normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]","font-variant-ligatures":"normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]","font-variant-numeric":"normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]","font-variant-position":"normal | sub | super","font-weight":"normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900","grid":"<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>","grid-area":"<grid-line> [ / <grid-line> ]{0,3}","grid-auto-columns":"<track-size>+","grid-auto-flow":"[ row | column ] || dense","grid-auto-rows":"<track-size>+","grid-column":"<grid-line> [ / <grid-line> ]?","grid-column-end":"<grid-line>","grid-column-gap":"<length-percentage>","grid-column-start":"<grid-line>","grid-gap":"<'grid-row-gap'> <'grid-column-gap'>?","grid-row":"<grid-line> [ / <grid-line> ]?","grid-row-end":"<grid-line>","grid-row-gap":"<length-percentage>","grid-row-start":"<grid-line>","grid-template":"none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?","grid-template-areas":"none | <string>+","grid-template-columns":"none | <track-list> | <auto-track-list>","grid-template-rows":"none | <track-list> | <auto-track-list>","height":"[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto","hyphens":"none | manual | auto","image-orientation":"from-image | <angle> | [ <angle>? flip ]","image-rendering":"auto | crisp-edges | pixelated | optimizeSpeed | optimizeQuality | <-non-standart-image-rendering>","image-resolution":"[ from-image || <resolution> ] && snap?","ime-mode":"auto | normal | active | inactive | disabled","initial-letter":"normal | [ <number> <integer>? ]","initial-letter-align":"[ auto | alphabetic | hanging | ideographic ]","inline-size":"<'width'>","isolation":"auto | isolate","justify-content":"flex-start | flex-end | center | space-between | space-around | space-evenly","left":"<length> | <percentage> | auto","letter-spacing":"normal | <length-percentage>","line-break":"auto | loose | normal | strict","line-height":"normal | <number> | <length> | <percentage>","list-style":"<'list-style-type'> || <'list-style-position'> || <'list-style-image'>","list-style-image":"<url> | none","list-style-position":"inside | outside","list-style-type":"<counter-style> | <string> | none","margin":"[ <length> | <percentage> | auto ]{1,4}","margin-block-end":"<'margin-left'>","margin-block-start":"<'margin-left'>","margin-bottom":"<length> | <percentage> | auto","margin-inline-end":"<'margin-left'>","margin-inline-start":"<'margin-left'>","margin-left":"<length> | <percentage> | auto","margin-right":"<length> | <percentage> | auto","margin-top":"<length> | <percentage> | auto","marker-offset":"<length> | auto","mask":"<mask-layer>#","mask-clip":"[ <geometry-box> | no-clip ]#","mask-composite":"<compositing-operator>#","mask-image":"<mask-reference>#","mask-mode":"<masking-mode>#","mask-origin":"<geometry-box>#","mask-position":"<position>#","mask-repeat":"<repeat-style>#","mask-size":"<bg-size>#","mask-type":"luminance | alpha","max-block-size":"<'max-width'>","max-height":"<length> | <percentage> | none | max-content | min-content | fit-content | fill-available","max-inline-size":"<'max-width'>","max-width":"<length> | <percentage> | none | max-content | min-content | fit-content | fill-available | <-non-standart-width>","min-block-size":"<'min-width'>","min-height":"<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available","min-inline-size":"<'min-width'>","min-width":"<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available | <-non-standart-width>","mix-blend-mode":"<blend-mode>","object-fit":"fill | contain | cover | none | scale-down","object-position":"<position>","offset":"[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?","offset-anchor":"auto | <position>","offset-block-end":"<'left'>","offset-block-start":"<'left'>","offset-inline-end":"<'left'>","offset-inline-start":"<'left'>","offset-distance":"<length-percentage>","offset-path":"none | ray( [ <angle> && <size>? && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]","offset-position":"auto | <position>","offset-rotate":"[ auto | reverse ] || <angle>","opacity":"<number-zero-one>","order":"<integer>","orphans":"<integer>","outline":"[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]","outline-color":"<color> | invert","outline-offset":"<length>","outline-style":"auto | <br-style>","outline-width":"<br-width>","overflow":"visible | hidden | scroll | auto","overflow-clip-box":"padding-box | content-box","overflow-wrap":"normal | break-word","overflow-x":"visible | hidden | scroll | auto","overflow-y":"visible | hidden | scroll | auto","padding":"[ <length> | <percentage> ]{1,4}","padding-block-end":"<'padding-left'>","padding-block-start":"<'padding-left'>","padding-bottom":"<length> | <percentage>","padding-inline-end":"<'padding-left'>","padding-inline-start":"<'padding-left'>","padding-left":"<length> | <percentage>","padding-right":"<length> | <percentage>","padding-top":"<length> | <percentage>","page-break-after":"auto | always | avoid | left | right","page-break-before":"auto | always | avoid | left | right","page-break-inside":"auto | avoid","perspective":"none | <length>","perspective-origin":"<position>","pointer-events":"auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit","position":"static | relative | absolute | sticky | fixed | -webkit-sticky","quotes":"none | [ <string> <string> ]+","resize":"none | both | horizontal | vertical","right":"<length> | <percentage> | auto","ruby-align":"start | center | space-between | space-around","ruby-merge":"separate | collapse | auto","ruby-position":"over | under | inter-character","scroll-behavior":"auto | smooth","scroll-snap-coordinate":"none | <position>#","scroll-snap-destination":"<position>","scroll-snap-points-x":"none | repeat( <length-percentage> )","scroll-snap-points-y":"none | repeat( <length-percentage> )","scroll-snap-type":"none | mandatory | proximity","scroll-snap-type-x":"none | mandatory | proximity","scroll-snap-type-y":"none | mandatory | proximity","shape-image-threshold":"<number>","shape-margin":"<length-percentage>","shape-outside":"none | <shape-box> || <basic-shape> | <image>","tab-size":"<integer> | <length>","table-layout":"auto | fixed","text-align":"start | end | left | right | center | justify | match-parent","text-align-last":"auto | start | end | left | right | center | justify","text-combine-upright":"none | all | [ digits <integer>? ]","text-decoration":"<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'>","text-decoration-color":"<color>","text-decoration-line":"none | [ underline || overline || line-through || blink ]","text-decoration-skip":"none | [ objects || spaces || ink || edges || box-decoration ]","text-decoration-style":"solid | double | dotted | dashed | wavy","text-emphasis":"<'text-emphasis-style'> || <'text-emphasis-color'>","text-emphasis-color":"<color>","text-emphasis-position":"[ over | under ] && [ right | left ]","text-emphasis-style":"none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>","text-indent":"<length-percentage> && hanging? && each-line?","text-justify":"auto | inter-character | inter-word | none","text-orientation":"mixed | upright | sideways","text-overflow":"[ clip | ellipsis | <string> ]{1,2}","text-rendering":"auto | optimizeSpeed | optimizeLegibility | geometricPrecision","text-shadow":"none | <shadow-t>#","text-size-adjust":"none | auto | <percentage>","text-transform":"none | capitalize | uppercase | lowercase | full-width","text-underline-position":"auto | [ under || [ left | right ] ]","top":"<length> | <percentage> | auto","touch-action":"auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation","transform":"none | <transform-list>","transform-box":"border-box | fill-box | view-box","transform-origin":"[ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>? | [ <length-percentage> | left | center | right | top | bottom ]","transform-style":"flat | preserve-3d","transition":"<single-transition>#","transition-delay":"<time>#","transition-duration":"<time>#","transition-property":"none | <single-transition-property>#","transition-timing-function":"<single-transition-timing-function>#","unicode-bidi":"normal | embed | isolate | bidi-override | isolate-override | plaintext | -moz-isolate | -moz-isolate-override | -moz-plaintext | -webkit-isolate","user-select":"auto | text | none | contain | all","vertical-align":"baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>","visibility":"visible | hidden | collapse","white-space":"normal | pre | nowrap | pre-wrap | pre-line","widows":"<integer>","width":"[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto","will-change":"auto | <animateable-feature>#","word-break":"normal | break-all | keep-all | <-non-standart-word-break>","word-spacing":"normal | <length-percentage>","word-wrap":"normal | break-word","writing-mode":"horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr | <svg-writing-mode>","z-index":"auto | <integer>","-moz-background-clip":"padding | border","-moz-border-radius-bottomleft":"<'border-bottom-left-radius'>","-moz-border-radius-bottomright":"<'border-bottom-right-radius'>","-moz-border-radius-topleft":"<'border-top-left-radius'>","-moz-border-radius-topright":"<'border-bottom-right-radius'>","-moz-osx-font-smoothing":"auto | unset | grayscale","-moz-user-select":"none | text | all | -moz-none","-ms-filter":"<string>","-ms-flex-align":"start | end | center | baseline | stretch","-ms-flex-item-align":"auto | start | end | center | baseline | stretch","-ms-flex-line-pack":"start | end | center | justify | distribute | stretch","-ms-flex-negative":"<'flex-shrink'>","-ms-flex-pack":"start | end | center | justify | distribute","-ms-flex-order":"<integer>","-ms-flex-positive":"<'flex-grow'>","-ms-flex-preferred-size":"<'flex-basis'>","-ms-interpolation-mode":"nearest-neighbor | bicubic","-ms-grid-column-align":"start | end | center | stretch","-ms-grid-row-align":"start | end | center | stretch","-ms-high-contrast-adjust":"auto | none","-ms-user-select":"none | element | text","-webkit-appearance":"none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | listbox | listitem | media-fullscreen-button | media-mute-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | push-button | radio | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield","-webkit-background-clip":"[ <box> | border | padding | content | text ]#","-webkit-column-break-after":"always | auto | avoid","-webkit-column-break-before":"always | auto | avoid","-webkit-column-break-inside":"always | auto | avoid","-webkit-font-smoothing":"none | antialiased | subpixel-antialiased","-webkit-line-clamp":"<positive-integer>","-webkit-mask-box-image":"[ <url> | <gradient> | none ] [ <length-percentage>{4} <-webkit-mask-box-repeat>{2} ]?","-webkit-overflow-scrolling":"auto | touch","-webkit-print-color-adjust":"economy | exact","-webkit-text-security":"none | circle | disc | square","-webkit-user-drag":"none | element | auto","-webkit-user-select":"auto | none | text | all","alignment-baseline":"auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical","baseline-shift":"baseline | sub | super | <svg-length>","behavior":"<url>+","clip-rule":"nonzero | evenodd","cue":"<'cue-before'> <'cue-after'>?","cue-after":"<url> <decibel>? | none","cue-before":"<url> <decibel>? | none","dominant-baseline":"auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge","fill":"<paint>","fill-opacity":"<number-zero-one>","fill-rule":"nonzero | evenodd","glyph-orientation-horizontal":"<angle>","glyph-orientation-vertical":"<angle>","kerning":"auto | <svg-length>","marker":"none | <url>","marker-end":"none | <url>","marker-mid":"none | <url>","marker-start":"none | <url>","pause":"<'pause-before'> <'pause-after'>?","pause-after":"<time> | none | x-weak | weak | medium | strong | x-strong","pause-before":"<time> | none | x-weak | weak | medium | strong | x-strong","rest":"<'rest-before'> <'rest-after'>?","rest-after":"<time> | none | x-weak | weak | medium | strong | x-strong","rest-before":"<time> | none | x-weak | weak | medium | strong | x-strong","shape-rendering":"auto | optimizeSpeed | crispEdges | geometricPrecision","src":"[ <url> format( <string># )? | local( <family-name> ) ]#","speak":"auto | none | normal","speak-as":"normal | spell-out || digits || [ literal-punctuation | no-punctuation ]","stroke":"<paint>","stroke-dasharray":"none | [ <svg-length>+ ]#","stroke-dashoffset":"<svg-length>","stroke-linecap":"butt | round | square","stroke-linejoin":"miter | round | bevel","stroke-miterlimit":"<number-one-or-greater>","stroke-opacity":"<number-zero-one>","stroke-width":"<svg-length>","text-anchor":"start | middle | end","unicode-range":"<unicode-range>#","voice-balance":"<number> | left | center | right | leftwards | rightwards","voice-duration":"auto | <time>","voice-family":"[ [ <family-name> | <generic-voice> ] , ]* [ <family-name> | <generic-voice> ] | preserve","voice-pitch":"<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]","voice-range":"<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]","voice-rate":"[ normal | x-slow | slow | medium | fast | x-fast ] || <percentage>","voice-stress":"normal | strong | moderate | none | reduced","voice-volume":"silent | [ [ x-soft | soft | medium | loud | x-loud ] || <decibel> ]","zoom":"normal | reset | <number> | <percentage>"}}}, {}];
window.modules["53"] = [function(require,module,exports){var List = require(54);

module.exports = function createConvertors(walker) {
    var walk = walker.walk;
    var walkUp = walker.walkUp;

    return {
        fromPlainObject: function(ast) {
            walk(ast, function(node) {
                if (node.children && node.children instanceof List === false) {
                    node.children = new List().fromArray(node.children);
                }
            });

            return ast;
        },
        toPlainObject: function(ast) {
            walkUp(ast, function(node) {
                if (node.children && node.children instanceof List) {
                    node.children = node.children.toArray();
                }
            });

            return ast;
        }
    };
};
}, {"54":54}];
window.modules["55"] = [function(require,module,exports){'use strict';

var sourceMapGenerator = require(56);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var noop = function() {};

function each(processChunk, node) {
    var list = node.children;
    var cursor = list.head;

    while (cursor !== null) {
        this.generate(processChunk, cursor.data, cursor, list);
        cursor = cursor.next;
    }
}

function eachComma(processChunk, node) {
    var list = node.children;
    var cursor = list.head;

    while (cursor !== null) {
        if (cursor.prev) {
            processChunk(',');
        }

        this.generate(processChunk, cursor.data, cursor, list);
        cursor = cursor.next;
    }
}

function createGenerator(types) {
    var context = {
        generate: function(processChunk, node, item, list) {
            if (hasOwnProperty.call(types, node.type)) {
                types[node.type].call(this, processChunk, node, item, list);
            } else {
                throw new Error('Unknown node type: ' + node.type);
            }
        },
        each: each,
        eachComma: eachComma
    };

    return function(node, fn) {
        if (typeof fn !== 'function') {
            // default generator concats all chunks in a single string
            var buffer = [];
            context.generate(function(chunk) {
                buffer.push(chunk);
            }, node);
            return buffer.join('');
        }
        context.generate(fn, node);
    };
}

function createMarkupGenerator(types) {
    var context = {
        generate: function(processChunk, node, item, list) {
            if (hasOwnProperty.call(types, node.type)) {
                var nodeBuffer = [];
                types[node.type].call(this, function(chunk) {
                    nodeBuffer.push(chunk);
                }, node, item, list);
                processChunk({
                    node: node,
                    value: nodeBuffer
                });
            } else {
                throw new Error('Unknown node type: ' + node.type);
            }
        },
        each: each,
        eachComma: eachComma
    };

    return function(node, enter, leave) {
        function updatePos(str) {
            for (var i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) === 10) { // \n
                    line++;
                    column = 0;
                } else {
                    column++;
                }
            }

            return str;
        }

        function walk(node, buffer) {
            var value = node.value;

            enter(node.node, buffer, line, column);

            if (typeof value === 'string') {
                buffer += updatePos(value);
            } else {
                for (var i = 0; i < value.length; i++) {
                    if (typeof value[i] === 'string') {
                        buffer += updatePos(value[i]);
                    } else {
                        buffer = walk(value[i], buffer);
                    }
                }
            }

            leave(node.node, buffer, line, column);

            return buffer;
        }

        if (typeof enter !== 'function') {
            enter = noop;
        }
        if (typeof leave !== 'function') {
            leave = noop;
        }

        var buffer = [];
        var line = 1;
        var column = 0;

        context.generate(function() {
            buffer.push.apply(buffer, arguments);
        }, node);

        return walk(buffer[0], '');
    };
}

function getTypesFromConfig(config) {
    var types = {};

    if (config.node) {
        for (var name in config.node) {
            var nodeType = config.node[name];

            types[name] = nodeType.generate;
        }
    }

    return types;
}

module.exports = function(config) {
    var types = getTypesFromConfig(config);
    var markupGenerator = createMarkupGenerator(types);

    return {
        translate: createGenerator(types),
        translateWithSourceMap: function(node) {
            return sourceMapGenerator(markupGenerator, node);
        },
        translateMarkup: markupGenerator
    };
};

module.exports.createGenerator = createGenerator;
module.exports.createMarkupGenerator = createMarkupGenerator;
module.exports.sourceMap = require(56);
}, {"56":56}];
window.modules["74"] = [function(require,module,exports){'use strict';

var Tokenizer = require(75);
var sequence = require(76);
var noop = function() {};

function createParseContext(name) {
    return function() {
        return this[name]();
    };
}

function processConfig(config) {
    var parserConfig = {
        context: {},
        scope: {},
        atrule: {},
        pseudo: {}
    };

    if (config.parseContext) {
        for (var name in config.parseContext) {
            switch (typeof config.parseContext[name]) {
                case 'function':
                    parserConfig.context[name] = config.parseContext[name];
                    break;

                case 'string':
                    parserConfig.context[name] = createParseContext(config.parseContext[name]);
                    break;
            }
        }
    }

    if (config.scope) {
        for (var name in config.scope) {
            parserConfig.scope[name] = config.scope[name];
        }
    }

    if (config.atrule) {
        for (var name in config.atrule) {
            var atrule = config.atrule[name];

            if (atrule.parse) {
                parserConfig.atrule[name] = atrule.parse;
            }
        }
    }

    if (config.pseudo) {
        for (var name in config.pseudo) {
            var pseudo = config.pseudo[name];

            if (pseudo.parse) {
                parserConfig.pseudo[name] = pseudo.parse;
            }
        }
    }

    if (config.node) {
        for (var name in config.node) {
            parserConfig[name] = config.node[name].parse;
        }
    }

    return parserConfig;
}

module.exports = function createParser(config) {
    var parser = {
        scanner: new Tokenizer(),
        filename: '<unknown>',
        needPositions: false,
        tolerant: false,
        onParseError: noop,
        parseAtrulePrelude: true,
        parseRulePrelude: true,
        parseValue: true,
        parseCustomProperty: false,

        readSequence: sequence,

        tolerantParse: function(consumer, fallback) {
            if (this.tolerant) {
                var start = this.scanner.currentToken;

                try {
                    return consumer.call(this);
                } catch (e) {
                    var fallbackNode = fallback.call(this, start);
                    this.onParseError(e, fallbackNode);
                    return fallbackNode;
                }
            } else {
                return consumer.call(this);
            }
        },

        getLocation: function(start, end) {
            if (this.needPositions) {
                return this.scanner.getLocationRange(
                    start,
                    end,
                    this.filename
                );
            }

            return null;
        },
        getLocationFromList: function(list) {
            if (this.needPositions) {
                return this.scanner.getLocationRange(
                    list.head !== null ? list.first().loc.start.offset - this.scanner.startOffset : this.scanner.tokenStart,
                    list.head !== null ? list.last().loc.end.offset - this.scanner.startOffset : this.scanner.tokenStart,
                    this.filename
                );
            }

            return null;
        }
    };

    config = processConfig(config || {});
    for (var key in config) {
        parser[key] = config[key];
    }

    return function(source, options) {
        options = options || {};

        var context = options.context || 'default';
        var ast;

        parser.scanner.setSource(source, options.offset, options.line, options.column);
        parser.filename = options.filename || '<unknown>';
        parser.needPositions = Boolean(options.positions);
        parser.tolerant = Boolean(options.tolerant);
        parser.onParseError = typeof options.onParseError === 'function' ? options.onParseError : noop;
        parser.parseAtrulePrelude = 'parseAtrulePrelude' in options ? Boolean(options.parseAtrulePrelude) : true;
        parser.parseRulePrelude = 'parseRulePrelude' in options ? Boolean(options.parseRulePrelude) : true;
        parser.parseValue = 'parseValue' in options ? Boolean(options.parseValue) : true;
        parser.parseCustomProperty = 'parseCustomProperty' in options ? Boolean(options.parseCustomProperty) : false;

        if (!parser.context.hasOwnProperty(context)) {
            throw new Error('Unknown context `' + context + '`');
        }

        ast = parser.context[context].call(parser, options);

        if (!parser.scanner.eof) {
            parser.scanner.error();
        }

        // console.log(JSON.stringify(ast, null, 4));
        return ast;
    };
};
}, {"75":75,"76":76}];
window.modules["90"] = [function(require,module,exports){var List = require(54);
var Tokenizer = require(75);
var Lexer = require(60);
var grammar = require(73);
var createParser = require(74);
var createGenerator = require(55);
var createConvertor = require(53);
var createWalker = require(92);
var clone = require(91);
var names = require(61);
var mix = require(85);

function assign(dest, src) {
    for (var key in src) {
        dest[key] = src[key];
    }

    return dest;
}

function createSyntax(config) {
    var parse = createParser(config);
    var walker = createWalker(config);
    var generator = createGenerator(config);
    var convertor = createConvertor(walker);

    var syntax = {
        List: List,
        Tokenizer: Tokenizer,
        Lexer: Lexer,

        property: names.property,
        keyword: names.keyword,

        grammar: grammar,
        lexer: null,
        createLexer: function(config) {
            return new Lexer(config, syntax, syntax.lexer.structure);
        },

        parse: parse,

        walk: walker.walk,
        walkUp: walker.walkUp,
        walkRules: walker.walkRules,
        walkRulesRight: walker.walkRulesRight,
        walkDeclarations: walker.walkDeclarations,

        translate: generator.translate,
        translateWithSourceMap: generator.translateWithSourceMap,
        translateMarkup: generator.translateMarkup,

        clone: clone,
        fromPlainObject: convertor.fromPlainObject,
        toPlainObject: convertor.toPlainObject,

        createSyntax: function(config) {
            return createSyntax(mix({}, config));
        },
        fork: function(extension) {
            var base = mix({}, config); // copy of config
            return createSyntax(
                typeof extension === 'function'
                    ? extension(base, assign)
                    : mix(base, extension)
            );
        }
    };

    syntax.lexer = new Lexer({
        generic: true,
        types: config.types,
        properties: config.properties,
        node: config.node
    }, syntax);

    return syntax;
};

exports.create = function(config) {
    return createSyntax(mix({}, config));
};
}, {"53":53,"54":54,"55":55,"60":60,"61":61,"73":73,"74":74,"75":75,"85":85,"91":91,"92":92}];
window.modules["96"] = [function(require,module,exports){var cmpChar = require(75).cmpChar;
var isNumber = require(75).isNumber;
var TYPE = require(75).TYPE;

var IDENTIFIER = TYPE.Identifier;
var NUMBER = TYPE.Number;
var PLUSSIGN = TYPE.PlusSign;
var HYPHENMINUS = TYPE.HyphenMinus;
var N = 110; // 'n'.charCodeAt(0)
var DISALLOW_SIGN = true;
var ALLOW_SIGN = false;

function checkTokenIsInteger(scanner, disallowSign) {
    var pos = scanner.tokenStart;

    if (scanner.source.charCodeAt(pos) === PLUSSIGN ||
        scanner.source.charCodeAt(pos) === HYPHENMINUS) {
        if (disallowSign) {
            scanner.error();
        }
        pos++;
    }

    for (; pos < scanner.tokenEnd; pos++) {
        if (!isNumber(scanner.source.charCodeAt(pos))) {
            scanner.error('Unexpected input', pos);
        }
    }
}

// An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
module.exports = {
    name: 'AnPlusB',
    structure: {
        a: [String, null],
        b: [String, null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var end = start;
        var prefix = '';
        var a = null;
        var b = null;

        if (this.scanner.tokenType === NUMBER ||
            this.scanner.tokenType === PLUSSIGN) {
            checkTokenIsInteger(this.scanner, ALLOW_SIGN);
            prefix = this.scanner.getTokenValue();
            this.scanner.next();
            end = this.scanner.tokenStart;
        }

        if (this.scanner.tokenType === IDENTIFIER) {
            var bStart = this.scanner.tokenStart;

            if (cmpChar(this.scanner.source, bStart, HYPHENMINUS)) {
                if (prefix === '') {
                    prefix = '-';
                    bStart++;
                } else {
                    this.scanner.error('Unexpected hyphen minus');
                }
            }

            if (!cmpChar(this.scanner.source, bStart, N)) {
                this.scanner.error();
            }

            a = prefix === ''  ? '1'  :
                prefix === '+' ? '+1' :
                prefix === '-' ? '-1' :
                prefix;

            var len = this.scanner.tokenEnd - bStart;
            if (len > 1) {
                // ..n-..
                if (this.scanner.source.charCodeAt(bStart + 1) !== HYPHENMINUS) {
                    this.scanner.error('Unexpected input', bStart + 1);
                }

                if (len > 2) {
                    // ..n-{number}..
                    this.scanner.tokenStart = bStart + 2;
                } else {
                    // ..n- {number}
                    this.scanner.next();
                    this.scanner.skipSC();
                }

                checkTokenIsInteger(this.scanner, DISALLOW_SIGN);
                b = '-' + this.scanner.getTokenValue();
                this.scanner.next();
                end = this.scanner.tokenStart;
            } else {
                prefix = '';
                this.scanner.next();
                end = this.scanner.tokenStart;
                this.scanner.skipSC();

                if (this.scanner.tokenType === HYPHENMINUS ||
                    this.scanner.tokenType === PLUSSIGN) {
                    prefix = this.scanner.getTokenValue();
                    this.scanner.next();
                    this.scanner.skipSC();
                }

                if (this.scanner.tokenType === NUMBER) {
                    checkTokenIsInteger(this.scanner, prefix !== '');

                    if (!isNumber(this.scanner.source.charCodeAt(this.scanner.tokenStart))) {
                        prefix = this.scanner.source.charAt(this.scanner.tokenStart);
                        this.scanner.tokenStart++;
                    }

                    if (prefix === '') {
                        // should be an operator before number
                        this.scanner.error();
                    } else if (prefix === '+') {
                        // plus is using by default
                        prefix = '';
                    }

                    b = prefix + this.scanner.getTokenValue();

                    this.scanner.next();
                    end = this.scanner.tokenStart;
                } else {
                    if (prefix) {
                        this.scanner.eat(NUMBER);
                    }
                }
            }
        } else {
            if (prefix === '' || prefix === '+') { // no number
                this.scanner.error(
                    'Number or identifier is expected',
                    this.scanner.tokenStart + (
                        this.scanner.tokenType === PLUSSIGN ||
                        this.scanner.tokenType === HYPHENMINUS
                    )
                );
            }

            b = prefix;
        }

        return {
            type: 'AnPlusB',
            loc: this.getLocation(start, end),
            a: a,
            b: b
        };
    },
    generate: function(processChunk, node) {
        var a = node.a !== null && node.a !== undefined;
        var b = node.b !== null && node.b !== undefined;

        if (a) {
            processChunk(
                node.a === '+1' ? '+n' :
                node.a ===  '1' ?  'n' :
                node.a === '-1' ? '-n' :
                node.a + 'n'
            );

            if (b) {
                b = String(node.b);
                if (b.charAt(0) === '-' || b.charAt(0) === '+') {
                    processChunk(b.charAt(0));
                    processChunk(b.substr(1));
                } else {
                    processChunk('+');
                    processChunk(b);
                }
            }
        } else {
            processChunk(String(node.b));
        }
    }
};
}, {"75":75}];
window.modules["97"] = [function(require,module,exports){var TYPE = require(75).TYPE;

var ATRULE = TYPE.Atrule;
var SEMICOLON = TYPE.Semicolon;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;

function consumeRaw(startToken) {
    return this.Raw(startToken, SEMICOLON, LEFTCURLYBRACKET, false, true);
}

function isDeclarationBlockAtrule() {
    for (var offset = 1, type; type = this.scanner.lookupType(offset); offset++) {
        if (type === RIGHTCURLYBRACKET) {
            return true;
        }

        if (type === LEFTCURLYBRACKET ||
            type === ATRULE) {
            return false;
        }
    }

    if (this.tolerant) {
        return false;
    }

    this.scanner.skip(offset);
    this.scanner.eat(RIGHTCURLYBRACKET);
}

module.exports = {
    name: 'Atrule',
    structure: {
        name: String,
        prelude: ['AtrulePrelude', 'Raw', null],
        block: ['Block', null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var nameLowerCase;
        var prelude = null;
        var block = null;

        this.scanner.eat(ATRULE);

        name = this.scanner.substrToCursor(start + 1);
        nameLowerCase = name.toLowerCase();
        this.scanner.skipSC();

        // parse prelude
        if (this.scanner.eof === false &&
            this.scanner.tokenType !== LEFTCURLYBRACKET &&
            this.scanner.tokenType !== SEMICOLON) {
            if (this.parseAtrulePrelude) {
                var preludeStartToken = this.scanner.currentToken;
                prelude = this.tolerantParse(this.AtrulePrelude.bind(this, name), consumeRaw);

                if (this.tolerant && !this.scanner.eof) {
                    if (prelude.type !== 'Raw' &&
                        this.scanner.tokenType !== LEFTCURLYBRACKET &&
                        this.scanner.tokenType !== SEMICOLON) {
                        prelude = consumeRaw.call(this, preludeStartToken);
                    }
                }

                // turn empty AtrulePrelude into null
                if (prelude.type === 'AtrulePrelude' && prelude.children.head === null) {
                    prelude = null;
                }
            } else {
                prelude = consumeRaw.call(this, this.scanner.currentToken);
            }

            this.scanner.skipSC();
        }

        if (this.atrule.hasOwnProperty(nameLowerCase)) {
            if (typeof this.atrule[nameLowerCase].block === 'function') {
                if (this.scanner.tokenType !== LEFTCURLYBRACKET) {
                    // FIXME: make tolerant
                    this.scanner.error('Curly bracket is expected');
                }

                block = this.atrule[nameLowerCase].block.call(this);
            } else {
                if (!this.tolerant || !this.scanner.eof) {
                    this.scanner.eat(SEMICOLON);
                }
            }
        } else {
            switch (this.scanner.tokenType) {
                case SEMICOLON:
                    this.scanner.next();
                    break;

                case LEFTCURLYBRACKET:
                    // TODO: should consume block content as Raw?
                    block = this.Block(isDeclarationBlockAtrule.call(this));
                    break;

                default:
                    if (!this.tolerant) {
                        this.scanner.error('Semicolon or block is expected');
                    }
            }
        }

        return {
            type: 'Atrule',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            prelude: prelude,
            block: block
        };
    },
    generate: function(processChunk, node) {
        processChunk('@');
        processChunk(node.name);

        if (node.prelude !== null) {
            processChunk(' ');
            this.generate(processChunk, node.prelude);
        }

        if (node.block) {
            this.generate(processChunk, node.block);
        } else {
            processChunk(';');
        }
    },
    walkContext: 'atrule'
};
}, {"75":75}];
window.modules["98"] = [function(require,module,exports){var List = require(54);

module.exports = {
    name: 'AtrulePrelude',
    structure: {
        children: [[]]
    },
    parse: function(name) {
        var children = null;

        if (name !== null) {
            name = name.toLowerCase();
        }

        if (this.atrule.hasOwnProperty(name)) {
            // custom consumer
            if (typeof this.atrule[name].prelude === 'function') {
                children = this.atrule[name].prelude.call(this);
            }
        } else {
            // default consumer
            this.scanner.skipSC();
            children = this.readSequence(this.scope.AtrulePrelude);
        }

        if (children === null) {
            children = new List();
        }

        return {
            type: 'AtrulePrelude',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(processChunk, node) {
        this.each(processChunk, node);
    },
    walkContext: 'atrulePrelude'
};
}, {"54":54}];
window.modules["99"] = [function(require,module,exports){var TYPE = require(75).TYPE;

var IDENTIFIER = TYPE.Identifier;
var STRING = TYPE.String;
var DOLLARSIGN = TYPE.DollarSign;
var ASTERISK = TYPE.Asterisk;
var COLON = TYPE.Colon;
var EQUALSSIGN = TYPE.EqualsSign;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;
var CIRCUMFLEXACCENT = TYPE.CircumflexAccent;
var VERTICALLINE = TYPE.VerticalLine;
var TILDE = TYPE.Tilde;

function getAttributeName() {
    if (this.scanner.eof) {
        this.scanner.error('Unexpected end of input');
    }

    var start = this.scanner.tokenStart;
    var expectIdentifier = false;
    var checkColon = true;

    if (this.scanner.tokenType === ASTERISK) {
        expectIdentifier = true;
        checkColon = false;
        this.scanner.next();
    } else if (this.scanner.tokenType !== VERTICALLINE) {
        this.scanner.eat(IDENTIFIER);
    }

    if (this.scanner.tokenType === VERTICALLINE) {
        if (this.scanner.lookupType(1) !== EQUALSSIGN) {
            this.scanner.next();
            this.scanner.eat(IDENTIFIER);
        } else if (expectIdentifier) {
            this.scanner.error('Identifier is expected', this.scanner.tokenEnd);
        }
    } else if (expectIdentifier) {
        this.scanner.error('Vertical line is expected');
    }

    if (checkColon && this.scanner.tokenType === COLON) {
        this.scanner.next();
        this.scanner.eat(IDENTIFIER);
    }

    return {
        type: 'Identifier',
        loc: this.getLocation(start, this.scanner.tokenStart),
        name: this.scanner.substrToCursor(start)
    };
}

function getOperator() {
    var start = this.scanner.tokenStart;
    var tokenType = this.scanner.tokenType;

    if (tokenType !== EQUALSSIGN &&        // =
        tokenType !== TILDE &&             // ~=
        tokenType !== CIRCUMFLEXACCENT &&  // ^=
        tokenType !== DOLLARSIGN &&        // $=
        tokenType !== ASTERISK &&          // *=
        tokenType !== VERTICALLINE         // |=
    ) {
        this.scanner.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected');
    }

    if (tokenType === EQUALSSIGN) {
        this.scanner.next();
    } else {
        this.scanner.next();
        this.scanner.eat(EQUALSSIGN);
    }

    return this.scanner.substrToCursor(start);
}

// '[' S* attrib_name ']'
// '[' S* attrib_name S* attrib_matcher S* [ IDENT | STRING ] S* attrib_flags? S* ']'
module.exports = {
    name: 'AttributeSelector',
    structure: {
        name: 'Identifier',
        matcher: [String, null],
        value: ['String', 'Identifier', null],
        flags: [String, null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var matcher = null;
        var value = null;
        var flags = null;

        this.scanner.eat(LEFTSQUAREBRACKET);
        this.scanner.skipSC();

        name = getAttributeName.call(this);
        this.scanner.skipSC();

        if (this.scanner.tokenType !== RIGHTSQUAREBRACKET) {
            // avoid case `[name i]`
            if (this.scanner.tokenType !== IDENTIFIER) {
                matcher = getOperator.call(this);

                this.scanner.skipSC();

                value = this.scanner.tokenType === STRING
                    ? this.String()
                    : this.Identifier();

                this.scanner.skipSC();
            }

            // attribute flags
            if (this.scanner.tokenType === IDENTIFIER) {
                flags = this.scanner.getTokenValue();
                this.scanner.next();

                this.scanner.skipSC();
            }
        }

        this.scanner.eat(RIGHTSQUAREBRACKET);

        return {
            type: 'AttributeSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            matcher: matcher,
            value: value,
            flags: flags
        };
    },
    generate: function(processChunk, node) {
        var flagsPrefix = ' ';

        processChunk('[');
        this.generate(processChunk, node.name);

        if (node.matcher !== null) {
            processChunk(node.matcher);

            if (node.value !== null) {
                this.generate(processChunk, node.value);

                // space between string and flags is not required
                if (node.value.type === 'String') {
                    flagsPrefix = '';
                }
            }
        }

        if (node.flags !== null) {
            processChunk(flagsPrefix);
            processChunk(node.flags);
        }

        processChunk(']');
    }
};
}, {"75":75}];
window.modules["100"] = [function(require,module,exports){var List = require(54);
var TYPE = require(75).TYPE;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var SEMICOLON = TYPE.Semicolon;
var ATRULE = TYPE.Atrule;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;

function consumeRaw(startToken) {
    return this.Raw(startToken, 0, 0, false, true);
}
function consumeRule() {
    return this.tolerantParse(this.Rule, consumeRaw);
}
function consumeRawDeclaration(startToken) {
    return this.Raw(startToken, 0, SEMICOLON, true, true);
}
function consumeDeclaration() {
    var node = this.tolerantParse(this.Declaration, consumeRawDeclaration);

    if (this.scanner.tokenType === SEMICOLON) {
        this.scanner.next();
    }

    return node;
}

module.exports = {
    name: 'Block',
    structure: {
        children: [['Atrule', 'Rule', 'Declaration']]
    },
    parse: function(isDeclaration) {
        var consumer = isDeclaration ? consumeDeclaration : consumeRule;

        var start = this.scanner.tokenStart;
        var children = new List();

        this.scanner.eat(LEFTCURLYBRACKET);

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case RIGHTCURLYBRACKET:
                    break scan;

                case WHITESPACE:
                case COMMENT:
                    this.scanner.next();
                    break;

                case ATRULE:
                    children.appendData(this.tolerantParse(this.Atrule, consumeRaw));
                    break;

                default:
                    children.appendData(consumer.call(this));
            }
        }

        if (!this.tolerant || !this.scanner.eof) {
            this.scanner.eat(RIGHTCURLYBRACKET);
        }

        return {
            type: 'Block',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(processChunk, node) {
        processChunk('{');
        this.each(processChunk, node);
        processChunk('}');
    },
    walkContext: 'block'
};
}, {"54":54,"75":75}];
window.modules["101"] = [function(require,module,exports){var TYPE = require(75).TYPE;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;

// currently only Grid Layout uses square brackets, but left it universal
// https://drafts.csswg.org/css-grid/#track-sizing
// [ ident* ]
module.exports = {
    name: 'Brackets',
    structure: {
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var children = null;

        this.scanner.eat(LEFTSQUAREBRACKET);
        children = readSequence.call(this, recognizer);
        this.scanner.eat(RIGHTSQUAREBRACKET);

        return {
            type: 'Brackets',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(processChunk, node) {
        processChunk('[');
        this.each(processChunk, node);
        processChunk(']');
    }
};
}, {"75":75}];
window.modules["102"] = [function(require,module,exports){var CDC = require(75).TYPE.CDC;

module.exports = {
    name: 'CDC',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(CDC); // -->

        return {
            type: 'CDC',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function(processChunk) {
        processChunk('-->');
    }
};
}, {"75":75}];
window.modules["103"] = [function(require,module,exports){var CDO = require(75).TYPE.CDO;

module.exports = {
    name: 'CDO',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(CDO); // <!--

        return {
            type: 'CDO',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function(processChunk) {
        processChunk('<!--');
    }
};
}, {"75":75}];
window.modules["104"] = [function(require,module,exports){var TYPE = require(75).TYPE;
var IDENTIFIER = TYPE.Identifier;
var FULLSTOP = TYPE.FullStop;

// '.' ident
module.exports = {
    name: 'ClassSelector',
    structure: {
        name: String
    },
    parse: function() {
        this.scanner.eat(FULLSTOP);

        return {
            type: 'ClassSelector',
            loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
            name: this.scanner.consume(IDENTIFIER)
        };
    },
    generate: function(processChunk, node) {
        processChunk('.');
        processChunk(node.name);
    }
};
}, {"75":75}];
window.modules["105"] = [function(require,module,exports){var TYPE = require(75).TYPE;

var PLUSSIGN = TYPE.PlusSign;
var SOLIDUS = TYPE.Solidus;
var GREATERTHANSIGN = TYPE.GreaterThanSign;
var TILDE = TYPE.Tilde;

// + | > | ~ | /deep/
module.exports = {
    name: 'Combinator',
    structure: {
        name: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        switch (this.scanner.tokenType) {
            case GREATERTHANSIGN:
            case PLUSSIGN:
            case TILDE:
                this.scanner.next();
                break;

            case SOLIDUS:
                this.scanner.next();
                this.scanner.expectIdentifier('deep');
                this.scanner.eat(SOLIDUS);
                break;

            default:
                this.scanner.error('Combinator is expected');
        }

        return {
            type: 'Combinator',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: this.scanner.substrToCursor(start)
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.name);
    }
};
}, {"75":75}];
window.modules["106"] = [function(require,module,exports){var TYPE = require(75).TYPE;

var ASTERISK = TYPE.Asterisk;
var SOLIDUS = TYPE.Solidus;

// '/*' .* '*/'
module.exports = {
    name: 'Comment',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var end = this.scanner.tokenEnd;

        if ((end - start + 2) >= 2 &&
            this.scanner.source.charCodeAt(end - 2) === ASTERISK &&
            this.scanner.source.charCodeAt(end - 1) === SOLIDUS) {
            end -= 2;
        }

        this.scanner.next();

        return {
            type: 'Comment',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.source.substring(start + 2, end)
        };
    },
    generate: function(processChunk, node) {
        processChunk('/*');
        processChunk(node.value);
        processChunk('*/');
    }
};
}, {"75":75}];
window.modules["107"] = [function(require,module,exports){var TYPE = require(75).TYPE;

var IDENTIFIER = TYPE.Identifier;
var COLON = TYPE.Colon;
var EXCLAMATIONMARK = TYPE.ExclamationMark;
var SOLIDUS = TYPE.Solidus;
var ASTERISK = TYPE.Asterisk;
var DOLLARSIGN = TYPE.DollarSign;
var HYPHENMINUS = TYPE.HyphenMinus;
var SEMICOLON = TYPE.Semicolon;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;
var PLUSSIGN = TYPE.PlusSign;
var NUMBERSIGN = TYPE.NumberSign;

module.exports = {
    name: 'Declaration',
    structure: {
        important: [Boolean, String],
        property: String,
        value: ['Value', 'Raw']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var property = readProperty.call(this);
        var important = false;
        var value;

        this.scanner.skipSC();
        this.scanner.eat(COLON);

        if (isCustomProperty(property) ? this.parseCustomProperty : this.parseValue) {
            value = this.Value(property);
        } else {
            value = this.Raw(this.scanner.currentToken, EXCLAMATIONMARK, SEMICOLON, false, false);
        }

        if (this.scanner.tokenType === EXCLAMATIONMARK) {
            important = getImportant(this.scanner);
            this.scanner.skipSC();
        }

        // TODO: include or not to include semicolon to range?
        // if (this.scanner.tokenType === SEMICOLON) {
        //     this.scanner.next();
        // }

        if (!this.scanner.eof &&
            this.scanner.tokenType !== SEMICOLON &&
            this.scanner.tokenType !== RIGHTPARENTHESIS &&
            this.scanner.tokenType !== RIGHTCURLYBRACKET) {
            this.scanner.error();
        }

        return {
            type: 'Declaration',
            loc: this.getLocation(start, this.scanner.tokenStart),
            important: important,
            property: property,
            value: value
        };
    },
    generate: function(processChunk, node, item) {
        processChunk(node.property);
        processChunk(':');
        this.generate(processChunk, node.value);

        if (node.important) {
            processChunk(node.important === true ? '!important' : '!' + node.important);
        }

        if (item && item.next) {
            processChunk(';');
        }
    },
    walkContext: 'declaration'
};

function isCustomProperty(name) {
    return name.length >= 2 &&
           name.charCodeAt(0) === HYPHENMINUS &&
           name.charCodeAt(1) === HYPHENMINUS;
}

function readProperty() {
    var start = this.scanner.tokenStart;
    var prefix = 0;

    // hacks
    switch (this.scanner.tokenType) {
        case ASTERISK:
        case DOLLARSIGN:
        case PLUSSIGN:
        case NUMBERSIGN:
            prefix = 1;
            break;

        // TODO: not sure we should support this hack
        case SOLIDUS:
            prefix = this.scanner.lookupType(1) === SOLIDUS ? 2 : 1;
            break;
    }

    if (this.scanner.lookupType(prefix) === HYPHENMINUS) {
        prefix++;
    }

    if (prefix) {
        this.scanner.skip(prefix);
    }

    this.scanner.eat(IDENTIFIER);

    return this.scanner.substrToCursor(start);
}

// ! ws* important
function getImportant(scanner) {
    scanner.eat(EXCLAMATIONMARK);
    scanner.skipSC();

    var important = scanner.consume(IDENTIFIER);

    // store original value in case it differ from `important`
    // for better original source restoring and hacks like `!ie` support
    return important === 'important' ? true : important;
}
}, {"75":75}];
window.modules["108"] = [function(require,module,exports){var List = require(54);
var TYPE = require(75).TYPE;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var SEMICOLON = TYPE.Semicolon;

function consumeRaw(startToken) {
    return this.Raw(startToken, 0, SEMICOLON, true, true);
}

module.exports = {
    name: 'DeclarationList',
    structure: {
        children: [['Declaration']]
    },
    parse: function() {
        var children = new List();

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case WHITESPACE:
                case COMMENT:
                case SEMICOLON:
                    this.scanner.next();
                    break;

                default:
                    children.appendData(this.tolerantParse(this.Declaration, consumeRaw));
            }
        }

        return {
            type: 'DeclarationList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(processChunk, node) {
        this.each(processChunk, node);
    }
};
}, {"54":54,"75":75}];
window.modules["109"] = [function(require,module,exports){var NUMBER = require(75).TYPE.Number;

// special reader for units to avoid adjoined IE hacks (i.e. '1px\9')
function readUnit(scanner) {
    var unit = scanner.getTokenValue();
    var backSlashPos = unit.indexOf('\\');

    if (backSlashPos > 0) {
        // patch token offset
        scanner.tokenStart += backSlashPos;

        // return part before backslash
        return unit.substring(0, backSlashPos);
    }

    // no backslash in unit name
    scanner.next();

    return unit;
}

// number ident
module.exports = {
    name: 'Dimension',
    structure: {
        value: String,
        unit: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var value = this.scanner.consume(NUMBER);
        var unit = readUnit(this.scanner);

        return {
            type: 'Dimension',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: value,
            unit: unit
        };
    },
    generate: function(processChunk, node) {
        processChunk(node.value);
        processChunk(node.unit);
    }
};
}, {"75":75}];
window.modules["139"] = [function(require,module,exports){var List = require(54);

module.exports = {
    parse: function() {
        return new List().appendData(
            this.Identifier()
        );
    }
};
}, {"54":54}];
window.modules["149"] = [function(require,module,exports){module.exports = {
    getNode: require(150)
};
}, {"150":150}];
window.modules["150"] = [function(require,module,exports){var cmpChar = require(75).cmpChar;
var TYPE = require(75).TYPE;

var IDENTIFIER = TYPE.Identifier;
var STRING = TYPE.String;
var NUMBER = TYPE.Number;
var FUNCTION = TYPE.Function;
var URL = TYPE.Url;
var NUMBERSIGN = TYPE.NumberSign;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var PLUSSIGN = TYPE.PlusSign;
var HYPHENMINUS = TYPE.HyphenMinus;
var COMMA = TYPE.Comma;
var SOLIDUS = TYPE.Solidus;
var ASTERISK = TYPE.Asterisk;
var PERCENTSIGN = TYPE.PercentSign;
var BACKSLASH = TYPE.Backslash;
var U = 117; // 'u'.charCodeAt(0)

module.exports = function defaultRecognizer(context) {
    switch (this.scanner.tokenType) {
        case NUMBERSIGN:
            return this.HexColor();

        case COMMA:
            context.space = null;
            context.ignoreWSAfter = true;
            return this.Operator();

        case SOLIDUS:
        case ASTERISK:
        case PLUSSIGN:
        case HYPHENMINUS:
            return this.Operator();

        case LEFTPARENTHESIS:
            return this.Parentheses(this.readSequence, context.recognizer);

        case LEFTSQUAREBRACKET:
            return this.Brackets(this.readSequence, context.recognizer);

        case STRING:
            return this.String();

        case NUMBER:
            switch (this.scanner.lookupType(1)) {
                case PERCENTSIGN:
                    return this.Percentage();

                case IDENTIFIER:
                    // edge case: number with folowing \0 and \9 hack shouldn't to be a Dimension
                    if (cmpChar(this.scanner.source, this.scanner.tokenEnd, BACKSLASH)) {
                        return this.Number();
                    } else {
                        return this.Dimension();
                    }

                default:
                    return this.Number();
            }

        case FUNCTION:
            return this.Function(this.readSequence, context.recognizer);

        case URL:
            return this.Url();

        case IDENTIFIER:
            // check for unicode range, it should start with u+ or U+
            if (cmpChar(this.scanner.source, this.scanner.tokenStart, U) &&
                cmpChar(this.scanner.source, this.scanner.tokenStart + 1, PLUSSIGN)) {
                return this.UnicodeRange();
            } else {
                return this.Identifier();
            }
    }
};
}, {"75":75}];
window.modules["154"] = [function(require,module,exports){'use strict';

// token types (note: value shouldn't intersect with used char codes)
var WHITESPACE = 1;
var IDENTIFIER = 2;
var NUMBER = 3;
var STRING = 4;
var COMMENT = 5;
var PUNCTUATOR = 6;
var CDO = 7;
var CDC = 8;
var ATRULE = 14;
var FUNCTION = 15;
var URL = 16;
var RAW = 17;

var TAB = 9;
var N = 10;
var F = 12;
var R = 13;
var SPACE = 32;

var TYPE = {
    WhiteSpace:   WHITESPACE,
    Identifier:   IDENTIFIER,
    Number:           NUMBER,
    String:           STRING,
    Comment:         COMMENT,
    Punctuator:   PUNCTUATOR,
    CDO:                 CDO,
    CDC:                 CDC,
    Atrule:           ATRULE,
    Function:       FUNCTION,
    Url:                 URL,
    Raw:                 RAW,

    ExclamationMark:      33,  // !
    QuotationMark:        34,  // "
    NumberSign:           35,  // #
    DollarSign:           36,  // $
    PercentSign:          37,  // %
    Ampersand:            38,  // &
    Apostrophe:           39,  // '
    LeftParenthesis:      40,  // (
    RightParenthesis:     41,  // )
    Asterisk:             42,  // *
    PlusSign:             43,  // +
    Comma:                44,  // ,
    HyphenMinus:          45,  // -
    FullStop:             46,  // .
    Solidus:              47,  // /
    Colon:                58,  // :
    Semicolon:            59,  // ;
    LessThanSign:         60,  // <
    EqualsSign:           61,  // =
    GreaterThanSign:      62,  // >
    QuestionMark:         63,  // ?
    CommercialAt:         64,  // @
    LeftSquareBracket:    91,  // [
    Backslash:            92,  // \
    RightSquareBracket:   93,  // ]
    CircumflexAccent:     94,  // ^
    LowLine:              95,  // _
    GraveAccent:          96,  // `
    LeftCurlyBracket:    123,  // {
    VerticalLine:        124,  // |
    RightCurlyBracket:   125,  // }
    Tilde:               126   // ~
};

var NAME = Object.keys(TYPE).reduce(function(result, key) {
    result[TYPE[key]] = key;
    return result;
}, {});

// https://drafts.csswg.org/css-syntax/#tokenizer-definitions
// > non-ASCII code point
// >   A code point with a value equal to or greater than U+0080 <control>
// > name-start code point
// >   A letter, a non-ASCII code point, or U+005F LOW LINE (_).
// > name code point
// >   A name-start code point, a digit, or U+002D HYPHEN-MINUS (-)
// That means only ASCII code points has a special meaning and we a maps for 0..127 codes only
var SafeUint32Array = typeof Uint32Array !== 'undefined' ? Uint32Array : Array; // fallback on Array when TypedArray is not supported
var SYMBOL_TYPE = new SafeUint32Array(0x80);
var PUNCTUATION = new SafeUint32Array(0x80);
var STOP_URL_RAW = new SafeUint32Array(0x80);

for (var i = 0; i < SYMBOL_TYPE.length; i++) {
    SYMBOL_TYPE[i] = IDENTIFIER;
}

// fill categories
[
    TYPE.ExclamationMark,    // !
    TYPE.QuotationMark,      // "
    TYPE.NumberSign,         // #
    TYPE.DollarSign,         // $
    TYPE.PercentSign,        // %
    TYPE.Ampersand,          // &
    TYPE.Apostrophe,         // '
    TYPE.LeftParenthesis,    // (
    TYPE.RightParenthesis,   // )
    TYPE.Asterisk,           // *
    TYPE.PlusSign,           // +
    TYPE.Comma,              // ,
    TYPE.HyphenMinus,        // -
    TYPE.FullStop,           // .
    TYPE.Solidus,            // /
    TYPE.Colon,              // :
    TYPE.Semicolon,          // ;
    TYPE.LessThanSign,       // <
    TYPE.EqualsSign,         // =
    TYPE.GreaterThanSign,    // >
    TYPE.QuestionMark,       // ?
    TYPE.CommercialAt,       // @
    TYPE.LeftSquareBracket,  // [
    // TYPE.Backslash,          // \
    TYPE.RightSquareBracket, // ]
    TYPE.CircumflexAccent,   // ^
    // TYPE.LowLine,            // _
    TYPE.GraveAccent,        // `
    TYPE.LeftCurlyBracket,   // {
    TYPE.VerticalLine,       // |
    TYPE.RightCurlyBracket,  // }
    TYPE.Tilde               // ~
].forEach(function(key) {
    SYMBOL_TYPE[Number(key)] = PUNCTUATOR;
    PUNCTUATION[Number(key)] = PUNCTUATOR;
});

for (var i = 48; i <= 57; i++) {
    SYMBOL_TYPE[i] = NUMBER;
}

SYMBOL_TYPE[SPACE] = WHITESPACE;
SYMBOL_TYPE[TAB] = WHITESPACE;
SYMBOL_TYPE[N] = WHITESPACE;
SYMBOL_TYPE[R] = WHITESPACE;
SYMBOL_TYPE[F] = WHITESPACE;

SYMBOL_TYPE[TYPE.Apostrophe] = STRING;
SYMBOL_TYPE[TYPE.QuotationMark] = STRING;

STOP_URL_RAW[SPACE] = 1;
STOP_URL_RAW[TAB] = 1;
STOP_URL_RAW[N] = 1;
STOP_URL_RAW[R] = 1;
STOP_URL_RAW[F] = 1;
STOP_URL_RAW[TYPE.Apostrophe] = 1;
STOP_URL_RAW[TYPE.QuotationMark] = 1;
STOP_URL_RAW[TYPE.LeftParenthesis] = 1;
STOP_URL_RAW[TYPE.RightParenthesis] = 1;

// whitespace is punctuation ...
PUNCTUATION[SPACE] = PUNCTUATOR;
PUNCTUATION[TAB] = PUNCTUATOR;
PUNCTUATION[N] = PUNCTUATOR;
PUNCTUATION[R] = PUNCTUATOR;
PUNCTUATION[F] = PUNCTUATOR;
// ... hyper minus is not
PUNCTUATION[TYPE.HyphenMinus] = 0;

module.exports = {
    TYPE: TYPE,
    NAME: NAME,

    SYMBOL_TYPE: SYMBOL_TYPE,
    PUNCTUATION: PUNCTUATION,
    STOP_URL_RAW: STOP_URL_RAW
};
}, {}];
window.modules["91"] = [function(require,module,exports){'use strict';

var List = require(54);

module.exports = function clone(node) {
    var result = {};

    for (var key in node) {
        var value = node[key];

        if (value) {
            if (Array.isArray(value)) {
                value = value.slice(0);
            } else if (value instanceof List) {
                value = new List().fromArray(value.map(clone));
            } else if (value.constructor === Object) {
                value = clone(value);
            }
        }

        result[key] = value;
    }

    return result;
};
}, {"54":54}];
window.modules["71"] = [function(require,module,exports){module.exports = function createCustomError(name, message) {
    // use Object.create(), because some VMs prevent setting line/column otherwise
    // (iOS Safari 10 even throws an exception)
    var error = Object.create(SyntaxError.prototype);
    var errorStack = new Error();

    error.name = name;
    error.message = message;

    Object.defineProperty(error, 'stack', {
        get: function() {
            return (errorStack.stack || '').replace(/^(.+\n){1,3}/, name + ': ' + message + '\n');
        }
    });

    return error;
};
}, {}];
window.modules["92"] = [function(require,module,exports){'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

function walkRules(node, item, list) {
    switch (node.type) {
        case 'StyleSheet':
            var oldStylesheet = this.stylesheet;
            this.stylesheet = node;

            node.children.each(walkRules, this);

            this.stylesheet = oldStylesheet;
            break;

        case 'Atrule':
            if (node.block !== null) {
                var oldAtrule = this.atrule;
                this.atrule = node;

                walkRules.call(this, node.block);

                this.atrule = oldAtrule;
            }

            this.fn(node, item, list);
            break;

        case 'Rule':
            this.fn(node, item, list);

            var oldRule = this.rule;
            this.rule = node;

            walkRules.call(this, node.block);

            this.rule = oldRule;
            break;

        case 'Block':
            var oldBlock = this.block;
            this.block = node;

            node.children.each(walkRules, this);

            this.block = oldBlock;
            break;
    }
}

function walkRulesRight(node, item, list) {
    switch (node.type) {
        case 'StyleSheet':
            var oldStylesheet = this.stylesheet;
            this.stylesheet = node;

            node.children.eachRight(walkRulesRight, this);

            this.stylesheet = oldStylesheet;
            break;

        case 'Atrule':
            if (node.block !== null) {
                var oldAtrule = this.atrule;
                this.atrule = node;

                walkRulesRight.call(this, node.block);

                this.atrule = oldAtrule;
            }

            this.fn(node, item, list);
            break;

        case 'Rule':
            var oldRule = this.rule;
            this.rule = node;

            walkRulesRight.call(this, node.block);

            this.rule = oldRule;

            this.fn(node, item, list);
            break;

        case 'Block':
            var oldBlock = this.block;
            this.block = node;

            node.children.eachRight(walkRulesRight, this);

            this.block = oldBlock;
            break;
    }
}

function walkDeclarations(node) {
    switch (node.type) {
        case 'StyleSheet':
            var oldStylesheet = this.stylesheet;
            this.stylesheet = node;

            node.children.each(walkDeclarations, this);

            this.stylesheet = oldStylesheet;
            break;

        case 'Atrule':
            if (node.block !== null) {
                var oldAtrule = this.atrule;
                this.atrule = node;

                walkDeclarations.call(this, node.block);

                this.atrule = oldAtrule;
            }
            break;

        case 'Rule':
            var oldRule = this.rule;
            this.rule = node;

            if (node.block !== null) {
                walkDeclarations.call(this, node.block);
            }

            this.rule = oldRule;
            break;

        case 'Block':
            node.children.each(function(node, item, list) {
                if (node.type === 'Declaration') {
                    this.fn(node, item, list);
                } else {
                    walkDeclarations.call(this, node);
                }
            }, this);
            break;
    }
}

function getWalkersFromStructure(name, nodeType) {
    var structure = nodeType.structure;
    var walkers = [];

    for (var key in structure) {
        if (hasOwnProperty.call(structure, key) === false) {
            continue;
        }

        var fieldTypes = structure[key];
        var walker = {
            name: key,
            type: false,
            nullable: false
        };

        if (!Array.isArray(structure[key])) {
            fieldTypes = [structure[key]];
        }

        for (var i = 0; i < fieldTypes.length; i++) {
            var fieldType = fieldTypes[i];
            if (fieldType === null) {
                walker.nullable = true;
            } else if (typeof fieldType === 'string') {
                walker.type = 'node';
            } else if (Array.isArray(fieldType)) {
                walker.type = 'list';
            }
        }

        if (walker.type) {
            walkers.push(walker);
        }
    }

    if (walkers.length) {
        return {
            context: nodeType.walkContext,
            fields: walkers
        };
    }

    return null;
}

function getTypesFromConfig(config) {
    var types = {};

    if (config.node) {
        for (var name in config.node) {
            if (hasOwnProperty.call(config.node, name)) {
                var nodeType = config.node[name];

                if (nodeType.structure) {
                    var walkers = getWalkersFromStructure(name, nodeType);
                    if (walkers !== null) {
                        types[name] = walkers;
                    }
                } else {
                    throw new Error('Missed `structure` field in `' + name + '` node type definition');
                }
            }
        }
    }

    return types;
}

function createContext(root, fn) {
    var context = {
        fn: fn,
        root: root,
        stylesheet: null,
        atrule: null,
        atrulePrelude: null,
        rule: null,
        selector: null,
        block: null,
        declaration: null,
        function: null
    };

    return context;
}

module.exports = function createWalker(config) {
    var types = getTypesFromConfig(config);
    var walkers = {};

    for (var name in types) {
        if (hasOwnProperty.call(types, name)) {
            var config = types[name];
            walkers[name] = Function('node', 'context', 'walk',
                (config.context ? 'var old = context.' + config.context + ';\ncontext.' + config.context + ' = node;\n' : '') +
                config.fields.map(function(field) {
                    var line = field.type === 'list'
                        ? 'node.' + field.name + '.each(walk);'
                        : 'walk(node.' + field.name + ');';

                    if (field.nullable) {
                        line = 'if (node.' + field.name + ') {\n    ' + line + '}';
                    }

                    return line;
                }).join('\n') +
                (config.context ? '\ncontext.' + config.context + ' = old;' : '')
            );
        }
    }

    return {
        walk: function(root, fn) {
            function walk(node, item, list) {
                fn.call(context, node, item, list);
                if (walkers.hasOwnProperty(node.type)) {
                    walkers[node.type](node, context, walk);
                }
            }

            var context = createContext(root, fn);

            walk(root);
        },
        walkUp: function(root, fn) {
            function walk(node, item, list) {
                if (walkers.hasOwnProperty(node.type)) {
                    walkers[node.type](node, context, walk);
                }
                fn.call(context, node, item, list);
            }

            var context = createContext(root, fn);

            walk(root);
        },
        walkRules: function(root, fn) {
            walkRules.call(createContext(root, fn), root);
        },
        walkRulesRight: function(root, fn) {
            walkRulesRight.call(createContext(root, fn), root);
        },
        walkDeclarations: function(root, fn) {
            walkDeclarations.call(createContext(root, fn), root);
        }
    };
};
}, {}];
window.modules["157"] = [function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = require(158);
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;
}, {"158":158}];
window.modules["159"] = [function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = require(160);

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};
}, {"160":160}];
window.modules["160"] = [function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};
}, {}];
window.modules["161"] = [function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
}, {}];
window.modules["199"] = [function(require,module,exports){var entityMap = require(200),
    legacyMap = require(202),
    xmlMap = require(201),
    decodeCodePoint = require(203);

var decodeXMLStrict = getStrictDecoder(xmlMap),
    decodeHTMLStrict = getStrictDecoder(entityMap);

function getStrictDecoder(map) {
    var keys = Object.keys(map).join("|"),
        replace = getReplacer(map);

    keys += "|#[xX][\\da-fA-F]+|#\\d+";

    var re = new RegExp("&(?:" + keys + ");", "g");

    return function(str) {
        return String(str).replace(re, replace);
    };
}

var decodeHTML = (function() {
    var legacy = Object.keys(legacyMap).sort(sorter);

    var keys = Object.keys(entityMap).sort(sorter);

    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        } else {
            keys[i] += ";";
        }
    }

    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
        replace = getReplacer(entityMap);

    function replacer(str) {
        if (str.substr(-1) !== ";") str += ";";
        return replace(str);
    }

    //TODO consider creating a merged map
    return function(str) {
        return String(str).replace(re, replacer);
    };
})();

function sorter(a, b) {
    return a < b ? 1 : -1;
}

function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            if (str.charAt(2) === "X" || str.charAt(2) === "x") {
                return decodeCodePoint(parseInt(str.substr(3), 16));
            }
            return decodeCodePoint(parseInt(str.substr(2), 10));
        }
        return map[str.slice(1, -1)];
    };
}

module.exports = {
    XML: decodeXMLStrict,
    HTML: decodeHTML,
    HTMLStrict: decodeHTMLStrict
};
}, {"200":200,"201":201,"202":202,"203":203}];
window.modules["203"] = [function(require,module,exports){var decodeMap = require(204);

module.exports = decodeCodePoint;

// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }

    if (codePoint in decodeMap) {
        codePoint = decodeMap[codePoint];
    }

    var output = "";

    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }

    output += String.fromCharCode(codePoint);
    return output;
}
}, {"204":204}];
window.modules["204"] = [function(require,module,exports){module.exports={"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}}, {}];
window.modules["206"] = [function(require,module,exports){/**
 * ascii-folder.js
 * https://github.com/mplatt/fold-to-ascii-js
 *
 * This is a JavaScript port of the Apache Lucene ASCII Folding Filter.
 *
 * The Apache Lucene ASCII Folding Filter is licensed to the Apache Software
 * Foundation (ASF) under one or more contributor license agreements. See the
 * NOTICE file distributed with this work for additional information regarding
 * copyright ownership. The ASF licenses this file to You under the Apache
 * License, Version 2.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
class ASCIIFolder {
    /**
     * Sanitize strings by converting alphabetic, numeric, and symbolic Unicode characters which are not contained in
     * the first 127 ASCII characters (the "Basic Latin" Unicode block) into a ASCII equivalents.
     *
     * @param str The string to be sanitized
     * @param replacement The character an unmapped character should be replaced with or null should the original
     * character be retained
     * @returns {string} The sanitized string
     */
    static fold(str = '', replacement = '') {
        let foldedStr = '';

        if (str === null)
            return '';
        if (typeof str === 'number')
            return '' + str;
        if (typeof str !== 'string')
            throw new Error('Invalid input data type');
        for (let character of str) {
            if (character.charCodeAt(0) < 128) {
                foldedStr = foldedStr.concat(character);
            }
            else {
                foldedStr = foldedStr.concat(ASCIIFolder.replaceChar(character, replacement));
            }
        }
        return foldedStr;
    }
    /**
     * Replaces a single character
     *
     * @param char The character to replace
     * @param replacement What string unmapped characters should be replaced with
     * @returns {string} A string representing the replacement of the character
     */
    static replaceChar(char, replacement) {
        let ascii = ASCIIFolder.mapping.get(char.charCodeAt(0));
        return ascii ? ascii : replacement;
    }
}

ASCIIFolder.mapping = new Map([
    [0xC0, 'A'],
    [0xC1, 'A'],
    [0xC2, 'A'],
    [0xC3, 'A'],
    [0xC4, 'A'],
    [0xC5, 'A'],
    [0x100, 'A'],
    [0x102, 'A'],
    [0x104, 'A'],
    [0x18F, 'A'],
    [0x1CD, 'A'],
    [0x1DE, 'A'],
    [0x1E0, 'A'],
    [0x1FA, 'A'],
    [0x200, 'A'],
    [0x202, 'A'],
    [0x226, 'A'],
    [0x23A, 'A'],
    [0x1D00, 'A'],
    [0x1E00, 'A'],
    [0x1EA0, 'A'],
    [0x1EA2, 'A'],
    [0x1EA4, 'A'],
    [0x1EA6, 'A'],
    [0x1EA8, 'A'],
    [0x1EAA, 'A'],
    [0x1EAC, 'A'],
    [0x1EAE, 'A'],
    [0x1EB0, 'A'],
    [0x1EB2, 'A'],
    [0x1EB4, 'A'],
    [0x1EB6, 'A'],
    [0x24B6, 'A'],
    [0xFF21, 'A'],
    [0xE0, 'a'],
    [0xE1, 'a'],
    [0xE2, 'a'],
    [0xE3, 'a'],
    [0xE4, 'a'],
    [0xE5, 'a'],
    [0x101, 'a'],
    [0x103, 'a'],
    [0x105, 'a'],
    [0x1CE, 'a'],
    [0x1DF, 'a'],
    [0x1E1, 'a'],
    [0x1FB, 'a'],
    [0x201, 'a'],
    [0x203, 'a'],
    [0x227, 'a'],
    [0x250, 'a'],
    [0x259, 'a'],
    [0x25A, 'a'],
    [0x1D8F, 'a'],
    [0x1D95, 'a'],
    [0x1E01, 'a'],
    [0x1E9A, 'a'],
    [0x1EA1, 'a'],
    [0x1EA3, 'a'],
    [0x1EA5, 'a'],
    [0x1EA7, 'a'],
    [0x1EA9, 'a'],
    [0x1EAB, 'a'],
    [0x1EAD, 'a'],
    [0x1EAF, 'a'],
    [0x1EB1, 'a'],
    [0x1EB3, 'a'],
    [0x1EB5, 'a'],
    [0x1EB7, 'a'],
    [0x2090, 'a'],
    [0x2094, 'a'],
    [0x24D0, 'a'],
    [0x2C65, 'a'],
    [0x2C6F, 'a'],
    [0xFF41, 'a'],
    [0xA732, 'AA'],
    [0xC6, 'AE'],
    [0x1E2, 'AE'],
    [0x1FC, 'AE'],
    [0x1D01, 'AE'],
    [0xA734, 'AO'],
    [0xA736, 'AU'],
    [0xA738, 'AV'],
    [0xA73A, 'AV'],
    [0xA73C, 'AY'],
    [0x249C, '(a)'],
    [0xA733, 'aa'],
    [0xE6, 'ae'],
    [0x1E3, 'ae'],
    [0x1FD, 'ae'],
    [0x1D02, 'ae'],
    [0xA735, 'ao'],
    [0xA737, 'au'],
    [0xA739, 'av'],
    [0xA73B, 'av'],
    [0xA73D, 'ay'],
    [0x181, 'B'],
    [0x182, 'B'],
    [0x243, 'B'],
    [0x299, 'B'],
    [0x1D03, 'B'],
    [0x1E02, 'B'],
    [0x1E04, 'B'],
    [0x1E06, 'B'],
    [0x24B7, 'B'],
    [0xFF22, 'B'],
    [0x180, 'b'],
    [0x183, 'b'],
    [0x253, 'b'],
    [0x1D6C, 'b'],
    [0x1D80, 'b'],
    [0x1E03, 'b'],
    [0x1E05, 'b'],
    [0x1E07, 'b'],
    [0x24D1, 'b'],
    [0xFF42, 'b'],
    [0x249D, '(b)'],
    [0xC7, 'C'],
    [0x106, 'C'],
    [0x108, 'C'],
    [0x10A, 'C'],
    [0x10C, 'C'],
    [0x187, 'C'],
    [0x23B, 'C'],
    [0x297, 'C'],
    [0x1D04, 'C'],
    [0x1E08, 'C'],
    [0x24B8, 'C'],
    [0xFF23, 'C'],
    [0xE7, 'c'],
    [0x107, 'c'],
    [0x109, 'c'],
    [0x10B, 'c'],
    [0x10D, 'c'],
    [0x188, 'c'],
    [0x23C, 'c'],
    [0x255, 'c'],
    [0x1E09, 'c'],
    [0x2184, 'c'],
    [0x24D2, 'c'],
    [0xA73E, 'c'],
    [0xA73F, 'c'],
    [0xFF43, 'c'],
    [0x249E, '(c)'],
    [0xD0, 'D'],
    [0x10E, 'D'],
    [0x110, 'D'],
    [0x189, 'D'],
    [0x18A, 'D'],
    [0x18B, 'D'],
    [0x1D05, 'D'],
    [0x1D06, 'D'],
    [0x1E0A, 'D'],
    [0x1E0C, 'D'],
    [0x1E0E, 'D'],
    [0x1E10, 'D'],
    [0x1E12, 'D'],
    [0x24B9, 'D'],
    [0xA779, 'D'],
    [0xFF24, 'D'],
    [0xF0, 'd'],
    [0x10F, 'd'],
    [0x111, 'd'],
    [0x18C, 'd'],
    [0x221, 'd'],
    [0x256, 'd'],
    [0x257, 'd'],
    [0x1D6D, 'd'],
    [0x1D81, 'd'],
    [0x1D91, 'd'],
    [0x1E0B, 'd'],
    [0x1E0D, 'd'],
    [0x1E0F, 'd'],
    [0x1E11, 'd'],
    [0x1E13, 'd'],
    [0x24D3, 'd'],
    [0xA77A, 'd'],
    [0xFF44, 'd'],
    [0x1C4, 'DZ'],
    [0x1F1, 'DZ'],
    [0x1C5, 'Dz'],
    [0x1F2, 'Dz'],
    [0x249F, '(d)'],
    [0x238, 'db'],
    [0x1C6, 'dz'],
    [0x1F3, 'dz'],
    [0x2A3, 'dz'],
    [0x2A5, 'dz'],
    [0xC8, 'E'],
    [0xC9, 'E'],
    [0xCA, 'E'],
    [0xCB, 'E'],
    [0x112, 'E'],
    [0x114, 'E'],
    [0x116, 'E'],
    [0x118, 'E'],
    [0x11A, 'E'],
    [0x18E, 'E'],
    [0x190, 'E'],
    [0x204, 'E'],
    [0x206, 'E'],
    [0x228, 'E'],
    [0x246, 'E'],
    [0x1D07, 'E'],
    [0x1E14, 'E'],
    [0x1E16, 'E'],
    [0x1E18, 'E'],
    [0x1E1A, 'E'],
    [0x1E1C, 'E'],
    [0x1EB8, 'E'],
    [0x1EBA, 'E'],
    [0x1EBC, 'E'],
    [0x1EBE, 'E'],
    [0x1EC0, 'E'],
    [0x1EC2, 'E'],
    [0x1EC4, 'E'],
    [0x1EC6, 'E'],
    [0x24BA, 'E'],
    [0x2C7B, 'E'],
    [0xFF25, 'E'],
    [0xE8, 'e'],
    [0xE9, 'e'],
    [0xEA, 'e'],
    [0xEB, 'e'],
    [0x113, 'e'],
    [0x115, 'e'],
    [0x117, 'e'],
    [0x119, 'e'],
    [0x11B, 'e'],
    [0x1DD, 'e'],
    [0x205, 'e'],
    [0x207, 'e'],
    [0x229, 'e'],
    [0x247, 'e'],
    [0x258, 'e'],
    [0x25B, 'e'],
    [0x25C, 'e'],
    [0x25D, 'e'],
    [0x25E, 'e'],
    [0x29A, 'e'],
    [0x1D08, 'e'],
    [0x1D92, 'e'],
    [0x1D93, 'e'],
    [0x1D94, 'e'],
    [0x1E15, 'e'],
    [0x1E17, 'e'],
    [0x1E19, 'e'],
    [0x1E1B, 'e'],
    [0x1E1D, 'e'],
    [0x1EB9, 'e'],
    [0x1EBB, 'e'],
    [0x1EBD, 'e'],
    [0x1EBF, 'e'],
    [0x1EC1, 'e'],
    [0x1EC3, 'e'],
    [0x1EC5, 'e'],
    [0x1EC7, 'e'],
    [0x2091, 'e'],
    [0x24D4, 'e'],
    [0x2C78, 'e'],
    [0xFF45, 'e'],
    [0x24A0, '(e)'],
    [0x191, 'F'],
    [0x1E1E, 'F'],
    [0x24BB, 'F'],
    [0xA730, 'F'],
    [0xA77B, 'F'],
    [0xA7FB, 'F'],
    [0xFF26, 'F'],
    [0x192, 'f'],
    [0x1D6E, 'f'],
    [0x1D82, 'f'],
    [0x1E1F, 'f'],
    [0x1E9B, 'f'],
    [0x24D5, 'f'],
    [0xA77C, 'f'],
    [0xFF46, 'f'],
    [0x24A1, '(f)'],
    [0xFB00, 'ff'],
    [0xFB03, 'ffi'],
    [0xFB04, 'ffl'],
    [0xFB01, 'fi'],
    [0xFB02, 'fl'],
    [0x11C, 'G'],
    [0x11E, 'G'],
    [0x120, 'G'],
    [0x122, 'G'],
    [0x193, 'G'],
    [0x1E4, 'G'],
    [0x1E5, 'G'],
    [0x1E6, 'G'],
    [0x1E7, 'G'],
    [0x1F4, 'G'],
    [0x262, 'G'],
    [0x29B, 'G'],
    [0x1E20, 'G'],
    [0x24BC, 'G'],
    [0xA77D, 'G'],
    [0xA77E, 'G'],
    [0xFF27, 'G'],
    [0x11D, 'g'],
    [0x11F, 'g'],
    [0x121, 'g'],
    [0x123, 'g'],
    [0x1F5, 'g'],
    [0x260, 'g'],
    [0x261, 'g'],
    [0x1D77, 'g'],
    [0x1D79, 'g'],
    [0x1D83, 'g'],
    [0x1E21, 'g'],
    [0x24D6, 'g'],
    [0xA77F, 'g'],
    [0xFF47, 'g'],
    [0x24A2, '(g)'],
    [0x124, 'H'],
    [0x126, 'H'],
    [0x21E, 'H'],
    [0x29C, 'H'],
    [0x1E22, 'H'],
    [0x1E24, 'H'],
    [0x1E26, 'H'],
    [0x1E28, 'H'],
    [0x1E2A, 'H'],
    [0x24BD, 'H'],
    [0x2C67, 'H'],
    [0x2C75, 'H'],
    [0xFF28, 'H'],
    [0x125, 'h'],
    [0x127, 'h'],
    [0x21F, 'h'],
    [0x265, 'h'],
    [0x266, 'h'],
    [0x2AE, 'h'],
    [0x2AF, 'h'],
    [0x1E23, 'h'],
    [0x1E25, 'h'],
    [0x1E27, 'h'],
    [0x1E29, 'h'],
    [0x1E2B, 'h'],
    [0x1E96, 'h'],
    [0x24D7, 'h'],
    [0x2C68, 'h'],
    [0x2C76, 'h'],
    [0xFF48, 'h'],
    [0x1F6, 'HV'],
    [0x24A3, '(h)'],
    [0x195, 'hv'],
    [0xCC, 'I'],
    [0xCD, 'I'],
    [0xCE, 'I'],
    [0xCF, 'I'],
    [0x128, 'I'],
    [0x12A, 'I'],
    [0x12C, 'I'],
    [0x12E, 'I'],
    [0x130, 'I'],
    [0x196, 'I'],
    [0x197, 'I'],
    [0x1CF, 'I'],
    [0x208, 'I'],
    [0x20A, 'I'],
    [0x26A, 'I'],
    [0x1D7B, 'I'],
    [0x1E2C, 'I'],
    [0x1E2E, 'I'],
    [0x1EC8, 'I'],
    [0x1ECA, 'I'],
    [0x24BE, 'I'],
    [0xA7FE, 'I'],
    [0xFF29, 'I'],
    [0xEC, 'i'],
    [0xED, 'i'],
    [0xEE, 'i'],
    [0xEF, 'i'],
    [0x129, 'i'],
    [0x12B, 'i'],
    [0x12D, 'i'],
    [0x12F, 'i'],
    [0x131, 'i'],
    [0x1D0, 'i'],
    [0x209, 'i'],
    [0x20B, 'i'],
    [0x268, 'i'],
    [0x1D09, 'i'],
    [0x1D62, 'i'],
    [0x1D7C, 'i'],
    [0x1D96, 'i'],
    [0x1E2D, 'i'],
    [0x1E2F, 'i'],
    [0x1EC9, 'i'],
    [0x1ECB, 'i'],
    [0x2071, 'i'],
    [0x24D8, 'i'],
    [0xFF49, 'i'],
    [0x132, 'IJ'],
    [0x24A4, '(i)'],
    [0x133, 'ij'],
    [0x134, 'J'],
    [0x248, 'J'],
    [0x1D0A, 'J'],
    [0x24BF, 'J'],
    [0xFF2A, 'J'],
    [0x135, 'j'],
    [0x1F0, 'j'],
    [0x237, 'j'],
    [0x249, 'j'],
    [0x25F, 'j'],
    [0x284, 'j'],
    [0x29D, 'j'],
    [0x24D9, 'j'],
    [0x2C7C, 'j'],
    [0xFF4A, 'j'],
    [0x24A5, '(j)'],
    [0x136, 'K'],
    [0x198, 'K'],
    [0x1E8, 'K'],
    [0x1D0B, 'K'],
    [0x1E30, 'K'],
    [0x1E32, 'K'],
    [0x1E34, 'K'],
    [0x24C0, 'K'],
    [0x2C69, 'K'],
    [0xA740, 'K'],
    [0xA742, 'K'],
    [0xA744, 'K'],
    [0xFF2B, 'K'],
    [0x137, 'k'],
    [0x199, 'k'],
    [0x1E9, 'k'],
    [0x29E, 'k'],
    [0x1D84, 'k'],
    [0x1E31, 'k'],
    [0x1E33, 'k'],
    [0x1E35, 'k'],
    [0x24DA, 'k'],
    [0x2C6A, 'k'],
    [0xA741, 'k'],
    [0xA743, 'k'],
    [0xA745, 'k'],
    [0xFF4B, 'k'],
    [0x24A6, '(k)'],
    [0x139, 'L'],
    [0x13B, 'L'],
    [0x13D, 'L'],
    [0x13F, 'L'],
    [0x141, 'L'],
    [0x23D, 'L'],
    [0x29F, 'L'],
    [0x1D0C, 'L'],
    [0x1E36, 'L'],
    [0x1E38, 'L'],
    [0x1E3A, 'L'],
    [0x1E3C, 'L'],
    [0x24C1, 'L'],
    [0x2C60, 'L'],
    [0x2C62, 'L'],
    [0xA746, 'L'],
    [0xA748, 'L'],
    [0xA780, 'L'],
    [0xFF2C, 'L'],
    [0x13A, 'l'],
    [0x13C, 'l'],
    [0x13E, 'l'],
    [0x140, 'l'],
    [0x142, 'l'],
    [0x19A, 'l'],
    [0x234, 'l'],
    [0x26B, 'l'],
    [0x26C, 'l'],
    [0x26D, 'l'],
    [0x1D85, 'l'],
    [0x1E37, 'l'],
    [0x1E39, 'l'],
    [0x1E3B, 'l'],
    [0x1E3D, 'l'],
    [0x24DB, 'l'],
    [0x2C61, 'l'],
    [0xA747, 'l'],
    [0xA749, 'l'],
    [0xA781, 'l'],
    [0xFF4C, 'l'],
    [0x1C7, 'LJ'],
    [0x1EFA, 'LL'],
    [0x1C8, 'Lj'],
    [0x24A7, '(l)'],
    [0x1C9, 'lj'],
    [0x1EFB, 'll'],
    [0x2AA, 'ls'],
    [0x2AB, 'lz'],
    [0x19C, 'M'],
    [0x1D0D, 'M'],
    [0x1E3E, 'M'],
    [0x1E40, 'M'],
    [0x1E42, 'M'],
    [0x24C2, 'M'],
    [0x2C6E, 'M'],
    [0xA7FD, 'M'],
    [0xA7FF, 'M'],
    [0xFF2D, 'M'],
    [0x26F, 'm'],
    [0x270, 'm'],
    [0x271, 'm'],
    [0x1D6F, 'm'],
    [0x1D86, 'm'],
    [0x1E3F, 'm'],
    [0x1E41, 'm'],
    [0x1E43, 'm'],
    [0x24DC, 'm'],
    [0xFF4D, 'm'],
    [0x24A8, '(m)'],
    [0xD1, 'N'],
    [0x143, 'N'],
    [0x145, 'N'],
    [0x147, 'N'],
    [0x14A, 'N'],
    [0x19D, 'N'],
    [0x1F8, 'N'],
    [0x220, 'N'],
    [0x274, 'N'],
    [0x1D0E, 'N'],
    [0x1E44, 'N'],
    [0x1E46, 'N'],
    [0x1E48, 'N'],
    [0x1E4A, 'N'],
    [0x24C3, 'N'],
    [0xFF2E, 'N'],
    [0xF1, 'n'],
    [0x144, 'n'],
    [0x146, 'n'],
    [0x148, 'n'],
    [0x149, 'n'],
    [0x14B, 'n'],
    [0x19E, 'n'],
    [0x1F9, 'n'],
    [0x235, 'n'],
    [0x272, 'n'],
    [0x273, 'n'],
    [0x1D70, 'n'],
    [0x1D87, 'n'],
    [0x1E45, 'n'],
    [0x1E47, 'n'],
    [0x1E49, 'n'],
    [0x1E4B, 'n'],
    [0x207F, 'n'],
    [0x24DD, 'n'],
    [0xFF4E, 'n'],
    [0x1CA, 'NJ'],
    [0x1CB, 'Nj'],
    [0x24A9, '(n)'],
    [0x1CC, 'nj'],
    [0xD2, 'O'],
    [0xD3, 'O'],
    [0xD4, 'O'],
    [0xD5, 'O'],
    [0xD6, 'O'],
    [0xD8, 'O'],
    [0x14C, 'O'],
    [0x14E, 'O'],
    [0x150, 'O'],
    [0x186, 'O'],
    [0x19F, 'O'],
    [0x1A0, 'O'],
    [0x1D1, 'O'],
    [0x1EA, 'O'],
    [0x1EC, 'O'],
    [0x1FE, 'O'],
    [0x20C, 'O'],
    [0x20E, 'O'],
    [0x22A, 'O'],
    [0x22C, 'O'],
    [0x22E, 'O'],
    [0x230, 'O'],
    [0x1D0F, 'O'],
    [0x1D10, 'O'],
    [0x1E4C, 'O'],
    [0x1E4E, 'O'],
    [0x1E50, 'O'],
    [0x1E52, 'O'],
    [0x1ECC, 'O'],
    [0x1ECE, 'O'],
    [0x1ED0, 'O'],
    [0x1ED2, 'O'],
    [0x1ED4, 'O'],
    [0x1ED6, 'O'],
    [0x1ED8, 'O'],
    [0x1EDA, 'O'],
    [0x1EDC, 'O'],
    [0x1EDE, 'O'],
    [0x1EE0, 'O'],
    [0x1EE2, 'O'],
    [0x24C4, 'O'],
    [0xA74A, 'O'],
    [0xA74C, 'O'],
    [0xFF2F, 'O'],
    [0xF2, 'o'],
    [0xF3, 'o'],
    [0xF4, 'o'],
    [0xF5, 'o'],
    [0xF6, 'o'],
    [0xF8, 'o'],
    [0x14D, 'o'],
    [0x14F, 'o'],
    [0x151, 'o'],
    [0x1A1, 'o'],
    [0x1D2, 'o'],
    [0x1EB, 'o'],
    [0x1ED, 'o'],
    [0x1FF, 'o'],
    [0x20D, 'o'],
    [0x20F, 'o'],
    [0x22B, 'o'],
    [0x22D, 'o'],
    [0x22F, 'o'],
    [0x231, 'o'],
    [0x254, 'o'],
    [0x275, 'o'],
    [0x1D16, 'o'],
    [0x1D17, 'o'],
    [0x1D97, 'o'],
    [0x1E4D, 'o'],
    [0x1E4F, 'o'],
    [0x1E51, 'o'],
    [0x1E53, 'o'],
    [0x1ECD, 'o'],
    [0x1ECF, 'o'],
    [0x1ED1, 'o'],
    [0x1ED3, 'o'],
    [0x1ED5, 'o'],
    [0x1ED7, 'o'],
    [0x1ED9, 'o'],
    [0x1EDB, 'o'],
    [0x1EDD, 'o'],
    [0x1EDF, 'o'],
    [0x1EE1, 'o'],
    [0x1EE3, 'o'],
    [0x2092, 'o'],
    [0x24DE, 'o'],
    [0x2C7A, 'o'],
    [0xA74B, 'o'],
    [0xA74D, 'o'],
    [0xFF4F, 'o'],
    [0x152, 'OE'],
    [0x276, 'OE'],
    [0xA74E, 'OO'],
    [0x222, 'OU'],
    [0x1D15, 'OU'],
    [0x24AA, '(o)'],
    [0x153, 'oe'],
    [0x1D14, 'oe'],
    [0xA74F, 'oo'],
    [0x223, 'ou'],
    [0x1A4, 'P'],
    [0x1D18, 'P'],
    [0x1E54, 'P'],
    [0x1E56, 'P'],
    [0x24C5, 'P'],
    [0x2C63, 'P'],
    [0xA750, 'P'],
    [0xA752, 'P'],
    [0xA754, 'P'],
    [0xFF30, 'P'],
    [0x1A5, 'p'],
    [0x1D71, 'p'],
    [0x1D7D, 'p'],
    [0x1D88, 'p'],
    [0x1E55, 'p'],
    [0x1E57, 'p'],
    [0x24DF, 'p'],
    [0xA751, 'p'],
    [0xA753, 'p'],
    [0xA755, 'p'],
    [0xA7FC, 'p'],
    [0xFF50, 'p'],
    [0x24AB, '(p)'],
    [0x24A, 'Q'],
    [0x24C6, 'Q'],
    [0xA756, 'Q'],
    [0xA758, 'Q'],
    [0xFF31, 'Q'],
    [0x138, 'q'],
    [0x24B, 'q'],
    [0x2A0, 'q'],
    [0x24E0, 'q'],
    [0xA757, 'q'],
    [0xA759, 'q'],
    [0xFF51, 'q'],
    [0x24AC, '(q)'],
    [0x239, 'qp'],
    [0x154, 'R'],
    [0x156, 'R'],
    [0x158, 'R'],
    [0x210, 'R'],
    [0x212, 'R'],
    [0x24C, 'R'],
    [0x280, 'R'],
    [0x281, 'R'],
    [0x1D19, 'R'],
    [0x1D1A, 'R'],
    [0x1E58, 'R'],
    [0x1E5A, 'R'],
    [0x1E5C, 'R'],
    [0x1E5E, 'R'],
    [0x24C7, 'R'],
    [0x2C64, 'R'],
    [0xA75A, 'R'],
    [0xA782, 'R'],
    [0xFF32, 'R'],
    [0x155, 'r'],
    [0x157, 'r'],
    [0x159, 'r'],
    [0x211, 'r'],
    [0x213, 'r'],
    [0x24D, 'r'],
    [0x27C, 'r'],
    [0x27D, 'r'],
    [0x27E, 'r'],
    [0x27F, 'r'],
    [0x1D63, 'r'],
    [0x1D72, 'r'],
    [0x1D73, 'r'],
    [0x1D89, 'r'],
    [0x1E59, 'r'],
    [0x1E5B, 'r'],
    [0x1E5D, 'r'],
    [0x1E5F, 'r'],
    [0x24E1, 'r'],
    [0xA75B, 'r'],
    [0xA783, 'r'],
    [0xFF52, 'r'],
    [0x24AD, '(r)'],
    [0x15A, 'S'],
    [0x15C, 'S'],
    [0x15E, 'S'],
    [0x160, 'S'],
    [0x218, 'S'],
    [0x1E60, 'S'],
    [0x1E62, 'S'],
    [0x1E64, 'S'],
    [0x1E66, 'S'],
    [0x1E68, 'S'],
    [0x24C8, 'S'],
    [0xA731, 'S'],
    [0xA785, 'S'],
    [0xFF33, 'S'],
    [0x15B, 's'],
    [0x15D, 's'],
    [0x15F, 's'],
    [0x161, 's'],
    [0x17F, 's'],
    [0x219, 's'],
    [0x23F, 's'],
    [0x282, 's'],
    [0x1D74, 's'],
    [0x1D8A, 's'],
    [0x1E61, 's'],
    [0x1E63, 's'],
    [0x1E65, 's'],
    [0x1E67, 's'],
    [0x1E69, 's'],
    [0x1E9C, 's'],
    [0x1E9D, 's'],
    [0x24E2, 's'],
    [0xA784, 's'],
    [0xFF53, 's'],
    [0x1E9E, 'SS'],
    [0x24AE, '(s)'],
    [0xDF, 'ss'],
    [0xFB06, 'st'],
    [0x162, 'T'],
    [0x164, 'T'],
    [0x166, 'T'],
    [0x1AC, 'T'],
    [0x1AE, 'T'],
    [0x21A, 'T'],
    [0x23E, 'T'],
    [0x1D1B, 'T'],
    [0x1E6A, 'T'],
    [0x1E6C, 'T'],
    [0x1E6E, 'T'],
    [0x1E70, 'T'],
    [0x24C9, 'T'],
    [0xA786, 'T'],
    [0xFF34, 'T'],
    [0x163, 't'],
    [0x165, 't'],
    [0x167, 't'],
    [0x1AB, 't'],
    [0x1AD, 't'],
    [0x21B, 't'],
    [0x236, 't'],
    [0x287, 't'],
    [0x288, 't'],
    [0x1D75, 't'],
    [0x1E6B, 't'],
    [0x1E6D, 't'],
    [0x1E6F, 't'],
    [0x1E71, 't'],
    [0x1E97, 't'],
    [0x24E3, 't'],
    [0x2C66, 't'],
    [0xFF54, 't'],
    [0xDE, 'TH'],
    [0xA766, 'TH'],
    [0xA728, 'TZ'],
    [0x24AF, '(t)'],
    [0x2A8, 'tc'],
    [0xFE, 'th'],
    [0x1D7A, 'th'],
    [0xA767, 'th'],
    [0x2A6, 'ts'],
    [0xA729, 'tz'],
    [0xD9, 'U'],
    [0xDA, 'U'],
    [0xDB, 'U'],
    [0xDC, 'U'],
    [0x168, 'U'],
    [0x16A, 'U'],
    [0x16C, 'U'],
    [0x16E, 'U'],
    [0x170, 'U'],
    [0x172, 'U'],
    [0x1AF, 'U'],
    [0x1D3, 'U'],
    [0x1D5, 'U'],
    [0x1D7, 'U'],
    [0x1D9, 'U'],
    [0x1DB, 'U'],
    [0x214, 'U'],
    [0x216, 'U'],
    [0x244, 'U'],
    [0x1D1C, 'U'],
    [0x1D7E, 'U'],
    [0x1E72, 'U'],
    [0x1E74, 'U'],
    [0x1E76, 'U'],
    [0x1E78, 'U'],
    [0x1E7A, 'U'],
    [0x1EE4, 'U'],
    [0x1EE6, 'U'],
    [0x1EE8, 'U'],
    [0x1EEA, 'U'],
    [0x1EEC, 'U'],
    [0x1EEE, 'U'],
    [0x1EF0, 'U'],
    [0x24CA, 'U'],
    [0xFF35, 'U'],
    [0xF9, 'u'],
    [0xFA, 'u'],
    [0xFB, 'u'],
    [0xFC, 'u'],
    [0x169, 'u'],
    [0x16B, 'u'],
    [0x16D, 'u'],
    [0x16F, 'u'],
    [0x171, 'u'],
    [0x173, 'u'],
    [0x1B0, 'u'],
    [0x1D4, 'u'],
    [0x1D6, 'u'],
    [0x1D8, 'u'],
    [0x1DA, 'u'],
    [0x1DC, 'u'],
    [0x215, 'u'],
    [0x217, 'u'],
    [0x289, 'u'],
    [0x1D64, 'u'],
    [0x1D99, 'u'],
    [0x1E73, 'u'],
    [0x1E75, 'u'],
    [0x1E77, 'u'],
    [0x1E79, 'u'],
    [0x1E7B, 'u'],
    [0x1EE5, 'u'],
    [0x1EE7, 'u'],
    [0x1EE9, 'u'],
    [0x1EEB, 'u'],
    [0x1EED, 'u'],
    [0x1EEF, 'u'],
    [0x1EF1, 'u'],
    [0x24E4, 'u'],
    [0xFF55, 'u'],
    [0x24B0, '(u)'],
    [0x1D6B, 'ue'],
    [0x1B2, 'V'],
    [0x245, 'V'],
    [0x1D20, 'V'],
    [0x1E7C, 'V'],
    [0x1E7E, 'V'],
    [0x1EFC, 'V'],
    [0x24CB, 'V'],
    [0xA75E, 'V'],
    [0xA768, 'V'],
    [0xFF36, 'V'],
    [0x28B, 'v'],
    [0x28C, 'v'],
    [0x1D65, 'v'],
    [0x1D8C, 'v'],
    [0x1E7D, 'v'],
    [0x1E7F, 'v'],
    [0x24E5, 'v'],
    [0x2C71, 'v'],
    [0x2C74, 'v'],
    [0xA75F, 'v'],
    [0xFF56, 'v'],
    [0xA760, 'VY'],
    [0x24B1, '(v)'],
    [0xA761, 'vy'],
    [0x174, 'W'],
    [0x1F7, 'W'],
    [0x1D21, 'W'],
    [0x1E80, 'W'],
    [0x1E82, 'W'],
    [0x1E84, 'W'],
    [0x1E86, 'W'],
    [0x1E88, 'W'],
    [0x24CC, 'W'],
    [0x2C72, 'W'],
    [0xFF37, 'W'],
    [0x175, 'w'],
    [0x1BF, 'w'],
    [0x28D, 'w'],
    [0x1E81, 'w'],
    [0x1E83, 'w'],
    [0x1E85, 'w'],
    [0x1E87, 'w'],
    [0x1E89, 'w'],
    [0x1E98, 'w'],
    [0x24E6, 'w'],
    [0x2C73, 'w'],
    [0xFF57, 'w'],
    [0x24B2, '(w)'],
    [0x1E8A, 'X'],
    [0x1E8C, 'X'],
    [0x24CD, 'X'],
    [0xFF38, 'X'],
    [0x1D8D, 'x'],
    [0x1E8B, 'x'],
    [0x1E8D, 'x'],
    [0x2093, 'x'],
    [0x24E7, 'x'],
    [0xFF58, 'x'],
    [0x24B3, '(x)'],
    [0xDD, 'Y'],
    [0x176, 'Y'],
    [0x178, 'Y'],
    [0x1B3, 'Y'],
    [0x232, 'Y'],
    [0x24E, 'Y'],
    [0x28F, 'Y'],
    [0x1E8E, 'Y'],
    [0x1EF2, 'Y'],
    [0x1EF4, 'Y'],
    [0x1EF6, 'Y'],
    [0x1EF8, 'Y'],
    [0x1EFE, 'Y'],
    [0x24CE, 'Y'],
    [0xFF39, 'Y'],
    [0xFD, 'y'],
    [0xFF, 'y'],
    [0x177, 'y'],
    [0x1B4, 'y'],
    [0x233, 'y'],
    [0x24F, 'y'],
    [0x28E, 'y'],
    [0x1E8F, 'y'],
    [0x1E99, 'y'],
    [0x1EF3, 'y'],
    [0x1EF5, 'y'],
    [0x1EF7, 'y'],
    [0x1EF9, 'y'],
    [0x1EFF, 'y'],
    [0x24E8, 'y'],
    [0xFF59, 'y'],
    [0x24B4, '(y)'],
    [0x179, 'Z'],
    [0x17B, 'Z'],
    [0x17D, 'Z'],
    [0x1B5, 'Z'],
    [0x21C, 'Z'],
    [0x224, 'Z'],
    [0x1D22, 'Z'],
    [0x1E90, 'Z'],
    [0x1E92, 'Z'],
    [0x1E94, 'Z'],
    [0x24CF, 'Z'],
    [0x2C6B, 'Z'],
    [0xA762, 'Z'],
    [0xFF3A, 'Z'],
    [0x17A, 'z'],
    [0x17C, 'z'],
    [0x17E, 'z'],
    [0x1B6, 'z'],
    [0x21D, 'z'],
    [0x225, 'z'],
    [0x240, 'z'],
    [0x290, 'z'],
    [0x291, 'z'],
    [0x1D76, 'z'],
    [0x1D8E, 'z'],
    [0x1E91, 'z'],
    [0x1E93, 'z'],
    [0x1E95, 'z'],
    [0x24E9, 'z'],
    [0x2C6C, 'z'],
    [0xA763, 'z'],
    [0xFF5A, 'z'],
    [0x24B5, '(z)'],
    [0x2070, '0'],
    [0x2080, '0'],
    [0x24EA, '0'],
    [0x24FF, '0'],
    [0xFF10, '0'],
    [0xB9, '1'],
    [0x2081, '1'],
    [0x2460, '1'],
    [0x24F5, '1'],
    [0x2776, '1'],
    [0x2780, '1'],
    [0x278A, '1'],
    [0xFF11, '1'],
    [0x2488, '1.'],
    [0x2474, '(1)'],
    [0xB2, '2'],
    [0x2082, '2'],
    [0x2461, '2'],
    [0x24F6, '2'],
    [0x2777, '2'],
    [0x2781, '2'],
    [0x278B, '2'],
    [0xFF12, '2'],
    [0x2489, '2.'],
    [0x2475, '(2)'],
    [0xB3, '3'],
    [0x2083, '3'],
    [0x2462, '3'],
    [0x24F7, '3'],
    [0x2778, '3'],
    [0x2782, '3'],
    [0x278C, '3'],
    [0xFF13, '3'],
    [0x248A, '3.'],
    [0x2476, '(3)'],
    [0x2074, '4'],
    [0x2084, '4'],
    [0x2463, '4'],
    [0x24F8, '4'],
    [0x2779, '4'],
    [0x2783, '4'],
    [0x278D, '4'],
    [0xFF14, '4'],
    [0x248B, '4.'],
    [0x2477, '(4)'],
    [0x2075, '5'],
    [0x2085, '5'],
    [0x2464, '5'],
    [0x24F9, '5'],
    [0x277A, '5'],
    [0x2784, '5'],
    [0x278E, '5'],
    [0xFF15, '5'],
    [0x248C, '5.'],
    [0x2478, '(5)'],
    [0x2076, '6'],
    [0x2086, '6'],
    [0x2465, '6'],
    [0x24FA, '6'],
    [0x277B, '6'],
    [0x2785, '6'],
    [0x278F, '6'],
    [0xFF16, '6'],
    [0x248D, '6.'],
    [0x2479, '(6)'],
    [0x2077, '7'],
    [0x2087, '7'],
    [0x2466, '7'],
    [0x24FB, '7'],
    [0x277C, '7'],
    [0x2786, '7'],
    [0x2790, '7'],
    [0xFF17, '7'],
    [0x248E, '7.'],
    [0x247A, '(7)'],
    [0x2078, '8'],
    [0x2088, '8'],
    [0x2467, '8'],
    [0x24FC, '8'],
    [0x277D, '8'],
    [0x2787, '8'],
    [0x2791, '8'],
    [0xFF18, '8'],
    [0x248F, '8.'],
    [0x247B, '(8)'],
    [0x2079, '9'],
    [0x2089, '9'],
    [0x2468, '9'],
    [0x24FD, '9'],
    [0x277E, '9'],
    [0x2788, '9'],
    [0x2792, '9'],
    [0xFF19, '9'],
    [0x2490, '9.'],
    [0x247C, '(9)'],
    [0x2469, '10'],
    [0x24FE, '10'],
    [0x277F, '10'],
    [0x2789, '10'],
    [0x2793, '10'],
    [0x2491, '10.'],
    [0x247D, '(10)'],
    [0x246A, '11'],
    [0x24EB, '11'],
    [0x2492, '11.'],
    [0x247E, '(11)'],
    [0x246B, '12'],
    [0x24EC, '12'],
    [0x2493, '12.'],
    [0x247F, '(12)'],
    [0x246C, '13'],
    [0x24ED, '13'],
    [0x2494, '13.'],
    [0x2480, '(13)'],
    [0x246D, '14'],
    [0x24EE, '14'],
    [0x2495, '14.'],
    [0x2481, '(14)'],
    [0x246E, '15'],
    [0x24EF, '15'],
    [0x2496, '15.'],
    [0x2482, '(15)'],
    [0x246F, '16'],
    [0x24F0, '16'],
    [0x2497, '16.'],
    [0x2483, '(16)'],
    [0x2470, '17'],
    [0x24F1, '17'],
    [0x2498, '17.'],
    [0x2484, '(17)'],
    [0x2471, '18'],
    [0x24F2, '18'],
    [0x2499, '18.'],
    [0x2485, '(18)'],
    [0x2472, '19'],
    [0x24F3, '19'],
    [0x249A, '19.'],
    [0x2486, '(19)'],
    [0x2473, '20'],
    [0x24F4, '20'],
    [0x249B, '20.'],
    [0x2487, '(20)'],
    [0xAB, '"'],
    [0xBB, '"'],
    [0x201C, '"'],
    [0x201D, '"'],
    [0x201E, '"'],
    [0x2033, '"'],
    [0x2036, '"'],
    [0x275D, '"'],
    [0x275E, '"'],
    [0x276E, '"'],
    [0x276F, '"'],
    [0xFF02, '"'],
    [0x2018, '\''],
    [0x2019, '\''],
    [0x201A, '\''],
    [0x201B, '\''],
    [0x2032, '\''],
    [0x2035, '\''],
    [0x2039, '\''],
    [0x203A, '\''],
    [0x275B, '\''],
    [0x275C, '\''],
    [0xFF07, '\''],
    [0x2010, '-'],
    [0x2011, '-'],
    [0x2012, '-'],
    [0x2013, '-'],
    [0x2014, '-'],
    [0x207B, '-'],
    [0x208B, '-'],
    [0xFF0D, '-'],
    [0x2045, '['],
    [0x2772, '['],
    [0xFF3B, '['],
    [0x2046, ']'],
    [0x2773, ']'],
    [0xFF3D, ']'],
    [0x207D, '('],
    [0x208D, '('],
    [0x2768, '('],
    [0x276A, '('],
    [0xFF08, '('],
    [0x2E28, '(('],
    [0x207E, ')'],
    [0x208E, ')'],
    [0x2769, ')'],
    [0x276B, ')'],
    [0xFF09, ')'],
    [0x2E29, '))'],
    [0x276C, '<'],
    [0x2770, '<'],
    [0xFF1C, '<'],
    [0x276D, '>'],
    [0x2771, '>'],
    [0xFF1E, '>'],
    [0x2774, '{'],
    [0xFF5B, '{'],
    [0x2775, '}'],
    [0xFF5D, '}'],
    [0x207A, '+'],
    [0x208A, '+'],
    [0xFF0B, '+'],
    [0x207C, '='],
    [0x208C, '='],
    [0xFF1D, '='],
    [0xFF01, '!'],
    [0x203C, '!!'],
    [0x2049, '!?'],
    [0xFF03, '#'],
    [0xFF04, '$'],
    [0x2052, '%'],
    [0xFF05, '%'],
    [0xFF06, '&'],
    [0x204E, '*'],
    [0xFF0A, '*'],
    [0xFF0C, ','],
    [0xFF0E, '.'],
    [0x2044, '/'],
    [0xFF0F, '/'],
    [0xFF1A, ':'],
    [0x204F, ';'],
    [0xFF1B, ';'],
    [0xFF1F, '?'],
    [0x2047, '??'],
    [0x2048, '?!'],
    [0xFF20, '@'],
    [0xFF3C, '\\'],
    [0x2038, '^'],
    [0xFF3E, '^'],
    [0xFF3F, '_'],
    [0x2053, '~'],
    [0xFF5E, '~']
]);

module.exports = ASCIIFolder;
}, {}];
window.modules["220"] = [function(require,module,exports){module.exports = CollectingHandler;

function CollectingHandler(cbs) {
    this._cbs = cbs || {};
    this.events = [];
}

var EVENTS = require(216).EVENTS;
Object.keys(EVENTS).forEach(function(name) {
    if (EVENTS[name] === 0) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function() {
            this.events.push([name]);
            if (this._cbs[name]) this._cbs[name]();
        };
    } else if (EVENTS[name] === 1) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a) {
            this.events.push([name, a]);
            if (this._cbs[name]) this._cbs[name](a);
        };
    } else if (EVENTS[name] === 2) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a, b) {
            this.events.push([name, a, b]);
            if (this._cbs[name]) this._cbs[name](a, b);
        };
    } else {
        throw Error("wrong number of arguments");
    }
});

CollectingHandler.prototype.onreset = function() {
    this.events = [];
    if (this._cbs.onreset) this._cbs.onreset();
};

CollectingHandler.prototype.restart = function() {
    if (this._cbs.onreset) this._cbs.onreset();

    for (var i = 0, len = this.events.length; i < len; i++) {
        if (this._cbs[this.events[i][0]]) {
            var num = this.events[i].length;

            if (num === 1) {
                this._cbs[this.events[i][0]]();
            } else if (num === 2) {
                this._cbs[this.events[i][0]](this.events[i][1]);
            } else {
                this._cbs[this.events[i][0]](
                    this.events[i][1],
                    this.events[i][2]
                );
            }
        }
    }
};
}, {"216":216}];
window.modules["17"] = [function(require,module,exports){var assignValue = require(284),
    copyObject = require(354),
    createAssigner = require(356),
    isArrayLike = require(333),
    isPrototype = require(328),
    keys = require(295);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;
}, {"284":284,"295":295,"328":328,"333":333,"354":354,"356":356}];
window.modules["346"] = [function(require,module,exports){/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;
}, {}];
window.modules["375"] = [function(require,module,exports){var baseRest = require(341),
    eq = require(285),
    isIterateeCall = require(357),
    keysIn = require(376);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;
}, {"285":285,"341":341,"357":357,"376":376}];
window.modules["395"] = [function(require,module,exports){var postcss = require(396);
var translate = require(394).syntax.translate;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var DEFAULT_RAWS = {
    before: '',
    after: '',
    between: '',
    semicolon: false,
    left: '',
    right: ''
};
var ROOT_RAWS = {
    semicolon: true
};
var DECL_RAWS = {
    before: '',
    after: '',
    between: ':',
    important: '!important'
};

function clone(source) {
    var result = Object.create(Object.getPrototypeOf(source));

    for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
            result[key] = source[key];
        }
    }

    return result;
}

function listToPostcss(list, used) {
    var result = [];
    var before = '';

    list.each(function(node) {
        if (node.type === 'Raw' || node.type === 'Space') {
            // attach raw and spaces to next node
            before += node.value;
        } else {
            var postcssNode = cssoToPostcss(node, used);

            if (before !== '') {
                postcssNode.raws = clone(postcssNode.raws);
                postcssNode.raws.before = before;
                before = '';
            }

            result.push(postcssNode);
        }
    });

    return result;
}

function cssoToPostcss(node, used) {
    var postcssNode = node.loc ? node.loc.postcssNode : null;

    if (postcssNode) {
        // used is null when WeakSet is not supported
        if (used === null || used.has(postcssNode)) {
            // make node clone if it's already used in resulting tree
            postcssNode = clone(postcssNode);
        } else {
            used.add(postcssNode);
        }
    }

    switch (node.type) {
        case 'StyleSheet':
            if (!postcssNode) {
                postcssNode = postcss.root();
            }

            postcssNode.raws = ROOT_RAWS;
            postcssNode.nodes = listToPostcss(node.children, used);

            break;

        case 'Atrule':
            if (!postcssNode) {
                postcssNode = postcss.atRule();
            }

            postcssNode.raws = DEFAULT_RAWS;
            postcssNode.name = node.name;
            postcssNode.params = node.prelude ? translate(node.prelude) : '';
            postcssNode.nodes = node.block ? listToPostcss(node.block.children, used) : undefined;

            break;

        case 'Rule':
            if (!postcssNode) {
                postcssNode = postcss.rule();
            }

            postcssNode.raws = DEFAULT_RAWS;
            postcssNode.selector = translate(node.prelude);
            postcssNode.nodes = listToPostcss(node.block.children, used);

            break;

        case 'Declaration':
            if (!postcssNode) {
                postcssNode = postcss.decl();
            }

            if (typeof node.important === 'string') {
                postcssNode.raws = clone(DECL_RAWS);
                postcssNode.raws.important = '!' + node.important;
            } else {
                postcssNode.raws = DECL_RAWS;
            }

            postcssNode.prop = node.property;
            postcssNode.value = translate(node.value);
            postcssNode.important = Boolean(node.important);

            break;

        case 'Comment':
            if (!postcssNode) {
                postcssNode = postcss.comment();
            }

            postcssNode.raws = DEFAULT_RAWS;
            postcssNode.text = node.value;

            break;
    }

    return postcssNode;
};

module.exports = function(node) {
    var result;
    var used = null;

    // node.js 0.10 doesn't support for WeakSet -> always clone nodes
    if (typeof WeakSet === 'function') {
        // use weak set to avoid using the same original postcss node twice
        // in resulting tree, since nodes are changing on tree building
        used = new WeakSet();
    }

    result = cssoToPostcss(node, used);

    return result;
};
}, {"394":394,"396":396}];
window.modules["398"] = [function(require,module,exports){var resolveKeyword = require(58).keyword;

module.exports = function cleanAtrule(node, item, list) {
    if (node.block) {
        // otherwise removed at-rule don't prevent @import for removal
        if (this.stylesheet !== null) {
            this.stylesheet.firstAtrulesAllowed = false;
        }

        if (node.block.children.isEmpty()) {
            list.remove(item);
            return;
        }
    }

    switch (node.name) {
        case 'charset':
            if (!node.prelude || node.prelude.children.isEmpty()) {
                list.remove(item);
                return;
            }

            // if there is any rule before @charset -> remove it
            if (item.prev) {
                list.remove(item);
                return;
            }

            break;

        case 'import':
            if (this.stylesheet === null || !this.stylesheet.firstAtrulesAllowed) {
                list.remove(item);
                return;
            }

            // if there are some rules that not an @import or @charset before @import
            // remove it
            list.prevUntil(item.prev, function(rule) {
                if (rule.type === 'Atrule') {
                    if (rule.name === 'import' || rule.name === 'charset') {
                        return;
                    }
                }

                this.root.firstAtrulesAllowed = false;
                list.remove(item);
                return true;
            }, this);

            break;

        default:
            var keyword = resolveKeyword(node.name);
            if (keyword.name === 'keyframes' ||
                keyword.name === 'media' ||
                keyword.name === 'supports') {

                // drop at-rule with no prelude
                if (!node.prelude || node.prelude.children.isEmpty()) {
                    list.remove(item);
                }
            }
    }
};
}, {"58":58}];
window.modules["399"] = [function(require,module,exports){module.exports = function cleanComment(data, item, list) {
    list.remove(item);
};
}, {}];
window.modules["400"] = [function(require,module,exports){module.exports = function cleanDeclartion(node, item, list) {
    if (node.value.children && node.value.children.isEmpty()) {
        list.remove(item);
    }
};
}, {}];
window.modules["406"] = [function(require,module,exports){var List = require(58).List;
var clone = require(58).clone;
var usageUtils = require(407);
var clean = require(405);
var replace = require(409);
var restructure = require(408);
var walkRules = require(58).walkRules;

function readChunk(children, specialComments) {
    var buffer = new List();
    var nonSpaceTokenInBuffer = false;
    var protectedComment;

    children.nextUntil(children.head, function(node, item, list) {
        if (node.type === 'Comment') {
            if (!specialComments || node.value.charAt(0) !== '!') {
                list.remove(item);
                return;
            }

            if (nonSpaceTokenInBuffer || protectedComment) {
                return true;
            }

            list.remove(item);
            protectedComment = node;
            return;
        }

        if (node.type !== 'WhiteSpace') {
            nonSpaceTokenInBuffer = true;
        }

        buffer.insert(list.remove(item));
    });

    return {
        comment: protectedComment,
        stylesheet: {
            type: 'StyleSheet',
            loc: null,
            children: buffer
        }
    };
}

function compressChunk(ast, firstAtrulesAllowed, num, options) {
    options.logger('Compress block #' + num, null, true);

    var seed = 1;

    if (ast.type === 'StyleSheet') {
        ast.firstAtrulesAllowed = firstAtrulesAllowed;
        ast.id = seed++;
    }

    walkRules(ast, function markScopes(node) {
        if (node.type === 'Atrule' && node.block !== null) {
            node.block.id = seed++;
        }
    });
    options.logger('init', ast);

    // remove redundant
    clean(ast, options);
    options.logger('clean', ast);

    // replace nodes for shortened forms
    replace(ast, options);
    options.logger('replace', ast);

    // structure optimisations
    if (options.restructuring) {
        restructure(ast, options);
    }

    return ast;
}

function getCommentsOption(options) {
    var comments = 'comments' in options ? options.comments : 'exclamation';

    if (typeof comments === 'boolean') {
        comments = comments ? 'exclamation' : false;
    } else if (comments !== 'exclamation' && comments !== 'first-exclamation') {
        comments = false;
    }

    return comments;
}

function getRestructureOption(options) {
    return 'restructure' in options ? options.restructure :
           'restructuring' in options ? options.restructuring :
           true;
}

function wrapBlock(block) {
    return new List().appendData({
        type: 'Rule',
        loc: null,
        prelude: {
            type: 'SelectorList',
            loc: null,
            children: new List().appendData({
                type: 'Selector',
                loc: null,
                children: new List().appendData({
                    type: 'TypeSelector',
                    loc: null,
                    name: 'x'
                })
            })
        },
        block: block
    });
}

module.exports = function compress(ast, options) {
    ast = ast || { type: 'StyleSheet', loc: null, children: new List() };
    options = options || {};

    var compressOptions = {
        logger: typeof options.logger === 'function' ? options.logger : function() {},
        restructuring: getRestructureOption(options),
        forceMediaMerge: Boolean(options.forceMediaMerge),
        usage: options.usage ? usageUtils.buildIndex(options.usage) : false
    };
    var specialComments = getCommentsOption(options);
    var firstAtrulesAllowed = true;
    var input;
    var output = new List();
    var chunk;
    var chunkNum = 1;
    var chunkChildren;

    if (options.clone) {
        ast = clone(ast);
    }

    if (ast.type === 'StyleSheet') {
        input = ast.children;
        ast.children = output;
    } else {
        input = wrapBlock(ast);
    }

    do {
        chunk = readChunk(input, Boolean(specialComments));
        compressChunk(chunk.stylesheet, firstAtrulesAllowed, chunkNum++, compressOptions);
        chunkChildren = chunk.stylesheet.children;

        if (chunk.comment) {
            // add \n before comment if there is another content in output
            if (!output.isEmpty()) {
                output.insert(List.createItem({
                    type: 'Raw',
                    value: '\n'
                }));
            }

            output.insert(List.createItem(chunk.comment));

            // add \n after comment if chunk is not empty
            if (!chunkChildren.isEmpty()) {
                output.insert(List.createItem({
                    type: 'Raw',
                    value: '\n'
                }));
            }
        }

        if (firstAtrulesAllowed && !chunkChildren.isEmpty()) {
            var lastRule = chunkChildren.last();

            if (lastRule.type !== 'Atrule' ||
               (lastRule.name !== 'import' && lastRule.name !== 'charset')) {
                firstAtrulesAllowed = false;
            }
        }

        if (specialComments !== 'exclamation') {
            specialComments = false;
        }

        output.appendList(chunkChildren);
    } while (!input.isEmpty());

    return {
        ast: ast
    };
};
}, {"58":58,"405":405,"407":407,"408":408,"409":409}];
window.modules["411"] = [function(require,module,exports){var resolveKeyword = require(58).keyword;
var compressKeyframes = require(412);

module.exports = function(node) {
    // compress @keyframe selectors
    if (resolveKeyword(node.name).name === 'keyframes') {
        compressKeyframes(node);
    }
};
}, {"58":58,"412":412}];
window.modules["413"] = [function(require,module,exports){// Can unquote attribute detection
// Adopted implementation of Mathias Bynens
// https://github.com/mathiasbynens/mothereff.in/blob/master/unquoted-attributes/eff.js
var escapesRx = /\\([0-9A-Fa-f]{1,6})(\r\n|[ \t\n\f\r])?|\\./g;
var blockUnquoteRx = /^(-?\d|--)|[\u0000-\u002c\u002e\u002f\u003A-\u0040\u005B-\u005E\u0060\u007B-\u009f]/;

function canUnquote(value) {
    if (value === '' || value === '-') {
        return;
    }

    // Escapes are valid, so replace them with a valid non-empty string
    value = value.replace(escapesRx, 'a');

    return !blockUnquoteRx.test(value);
}

module.exports = function(node) {
    var attrValue = node.value;

    if (!attrValue || attrValue.type !== 'String') {
        return;
    }

    var unquotedValue = attrValue.value.replace(/^(.)(.*)\1$/, '$2');
    if (canUnquote(unquotedValue)) {
        node.value = {
            type: 'Identifier',
            loc: attrValue.loc,
            name: unquotedValue
        };
    }
};
}, {}];
window.modules["414"] = [function(require,module,exports){var packNumber = require(415).pack;
var LENGTH_UNIT = {
    // absolute length units
    'px': true,
    'mm': true,
    'cm': true,
    'in': true,
    'pt': true,
    'pc': true,

    // relative length units
    'em': true,
    'ex': true,
    'ch': true,
    'rem': true,

    // viewport-percentage lengths
    'vh': true,
    'vw': true,
    'vmin': true,
    'vmax': true,
    'vm': true
};

module.exports = function compressDimension(node, item) {
    var value = packNumber(node.value, item);

    node.value = value;

    if (value === '0' && this.declaration !== null && this.atrulePrelude === null) {
        var unit = node.unit.toLowerCase();

        // only length values can be compressed
        if (!LENGTH_UNIT.hasOwnProperty(unit)) {
            return;
        }

        // issue #200: don't remove units in flex property as it could change value meaning
        if (this.declaration.property === 'flex') {
            return;
        }

        // issue #222: don't remove units inside calc
        if (this['function'] && this['function'].name === 'calc') {
            return;
        }

        item.data = {
            type: 'Number',
            loc: node.loc,
            value: value
        };
    }
};
}, {"415":415}];
window.modules["423"] = [function(require,module,exports){var lexer = require(58).lexer;
var packNumber = require(415).pack;

// http://www.w3.org/TR/css3-color/#svg-color
var NAME_TO_HEX = {
    'aliceblue': 'f0f8ff',
    'antiquewhite': 'faebd7',
    'aqua': '0ff',
    'aquamarine': '7fffd4',
    'azure': 'f0ffff',
    'beige': 'f5f5dc',
    'bisque': 'ffe4c4',
    'black': '000',
    'blanchedalmond': 'ffebcd',
    'blue': '00f',
    'blueviolet': '8a2be2',
    'brown': 'a52a2a',
    'burlywood': 'deb887',
    'cadetblue': '5f9ea0',
    'chartreuse': '7fff00',
    'chocolate': 'd2691e',
    'coral': 'ff7f50',
    'cornflowerblue': '6495ed',
    'cornsilk': 'fff8dc',
    'crimson': 'dc143c',
    'cyan': '0ff',
    'darkblue': '00008b',
    'darkcyan': '008b8b',
    'darkgoldenrod': 'b8860b',
    'darkgray': 'a9a9a9',
    'darkgrey': 'a9a9a9',
    'darkgreen': '006400',
    'darkkhaki': 'bdb76b',
    'darkmagenta': '8b008b',
    'darkolivegreen': '556b2f',
    'darkorange': 'ff8c00',
    'darkorchid': '9932cc',
    'darkred': '8b0000',
    'darksalmon': 'e9967a',
    'darkseagreen': '8fbc8f',
    'darkslateblue': '483d8b',
    'darkslategray': '2f4f4f',
    'darkslategrey': '2f4f4f',
    'darkturquoise': '00ced1',
    'darkviolet': '9400d3',
    'deeppink': 'ff1493',
    'deepskyblue': '00bfff',
    'dimgray': '696969',
    'dimgrey': '696969',
    'dodgerblue': '1e90ff',
    'firebrick': 'b22222',
    'floralwhite': 'fffaf0',
    'forestgreen': '228b22',
    'fuchsia': 'f0f',
    'gainsboro': 'dcdcdc',
    'ghostwhite': 'f8f8ff',
    'gold': 'ffd700',
    'goldenrod': 'daa520',
    'gray': '808080',
    'grey': '808080',
    'green': '008000',
    'greenyellow': 'adff2f',
    'honeydew': 'f0fff0',
    'hotpink': 'ff69b4',
    'indianred': 'cd5c5c',
    'indigo': '4b0082',
    'ivory': 'fffff0',
    'khaki': 'f0e68c',
    'lavender': 'e6e6fa',
    'lavenderblush': 'fff0f5',
    'lawngreen': '7cfc00',
    'lemonchiffon': 'fffacd',
    'lightblue': 'add8e6',
    'lightcoral': 'f08080',
    'lightcyan': 'e0ffff',
    'lightgoldenrodyellow': 'fafad2',
    'lightgray': 'd3d3d3',
    'lightgrey': 'd3d3d3',
    'lightgreen': '90ee90',
    'lightpink': 'ffb6c1',
    'lightsalmon': 'ffa07a',
    'lightseagreen': '20b2aa',
    'lightskyblue': '87cefa',
    'lightslategray': '789',
    'lightslategrey': '789',
    'lightsteelblue': 'b0c4de',
    'lightyellow': 'ffffe0',
    'lime': '0f0',
    'limegreen': '32cd32',
    'linen': 'faf0e6',
    'magenta': 'f0f',
    'maroon': '800000',
    'mediumaquamarine': '66cdaa',
    'mediumblue': '0000cd',
    'mediumorchid': 'ba55d3',
    'mediumpurple': '9370db',
    'mediumseagreen': '3cb371',
    'mediumslateblue': '7b68ee',
    'mediumspringgreen': '00fa9a',
    'mediumturquoise': '48d1cc',
    'mediumvioletred': 'c71585',
    'midnightblue': '191970',
    'mintcream': 'f5fffa',
    'mistyrose': 'ffe4e1',
    'moccasin': 'ffe4b5',
    'navajowhite': 'ffdead',
    'navy': '000080',
    'oldlace': 'fdf5e6',
    'olive': '808000',
    'olivedrab': '6b8e23',
    'orange': 'ffa500',
    'orangered': 'ff4500',
    'orchid': 'da70d6',
    'palegoldenrod': 'eee8aa',
    'palegreen': '98fb98',
    'paleturquoise': 'afeeee',
    'palevioletred': 'db7093',
    'papayawhip': 'ffefd5',
    'peachpuff': 'ffdab9',
    'peru': 'cd853f',
    'pink': 'ffc0cb',
    'plum': 'dda0dd',
    'powderblue': 'b0e0e6',
    'purple': '800080',
    'rebeccapurple': '639',
    'red': 'f00',
    'rosybrown': 'bc8f8f',
    'royalblue': '4169e1',
    'saddlebrown': '8b4513',
    'salmon': 'fa8072',
    'sandybrown': 'f4a460',
    'seagreen': '2e8b57',
    'seashell': 'fff5ee',
    'sienna': 'a0522d',
    'silver': 'c0c0c0',
    'skyblue': '87ceeb',
    'slateblue': '6a5acd',
    'slategray': '708090',
    'slategrey': '708090',
    'snow': 'fffafa',
    'springgreen': '00ff7f',
    'steelblue': '4682b4',
    'tan': 'd2b48c',
    'teal': '008080',
    'thistle': 'd8bfd8',
    'tomato': 'ff6347',
    'turquoise': '40e0d0',
    'violet': 'ee82ee',
    'wheat': 'f5deb3',
    'white': 'fff',
    'whitesmoke': 'f5f5f5',
    'yellow': 'ff0',
    'yellowgreen': '9acd32'
};

var HEX_TO_NAME = {
    '800000': 'maroon',
    '800080': 'purple',
    '808000': 'olive',
    '808080': 'gray',
    '00ffff': 'cyan',
    'f0ffff': 'azure',
    'f5f5dc': 'beige',
    'ffe4c4': 'bisque',
    '000000': 'black',
    '0000ff': 'blue',
    'a52a2a': 'brown',
    'ff7f50': 'coral',
    'ffd700': 'gold',
    '008000': 'green',
    '4b0082': 'indigo',
    'fffff0': 'ivory',
    'f0e68c': 'khaki',
    '00ff00': 'lime',
    'faf0e6': 'linen',
    '000080': 'navy',
    'ffa500': 'orange',
    'da70d6': 'orchid',
    'cd853f': 'peru',
    'ffc0cb': 'pink',
    'dda0dd': 'plum',
    'f00': 'red',
    'ff0000': 'red',
    'fa8072': 'salmon',
    'a0522d': 'sienna',
    'c0c0c0': 'silver',
    'fffafa': 'snow',
    'd2b48c': 'tan',
    '008080': 'teal',
    'ff6347': 'tomato',
    'ee82ee': 'violet',
    'f5deb3': 'wheat',
    'ffffff': 'white',
    'ffff00': 'yellow'
};

function hueToRgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}

function hslToRgb(h, s, l, a) {
    var r;
    var g;
    var b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
    }

    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255),
        a
    ];
}

function toHex(value) {
    value = value.toString(16);
    return value.length === 1 ? '0' + value : value;
}

function parseFunctionArgs(functionArgs, count, rgb) {
    var cursor = functionArgs.head;
    var args = [];
    var wasValue = false;

    while (cursor !== null) {
        var node = cursor.data;
        var type = node.type;

        switch (type) {
            case 'Number':
            case 'Percentage':
                if (wasValue) {
                    return;
                }

                wasValue = true;
                args.push({
                    type: type,
                    value: Number(node.value)
                });
                break;

            case 'Operator':
                if (node.value === ',') {
                    if (!wasValue) {
                        return;
                    }
                    wasValue = false;
                } else if (wasValue || node.value !== '+') {
                    return;
                }
                break;

            default:
                // something we couldn't understand
                return;
        }

        cursor = cursor.next;
    }

    if (args.length !== count) {
        // invalid arguments count
        // TODO: remove those tokens
        return;
    }

    if (args.length === 4) {
        if (args[3].type !== 'Number') {
            // 4th argument should be a number
            // TODO: remove those tokens
            return;
        }

        args[3].type = 'Alpha';
    }

    if (rgb) {
        if (args[0].type !== args[1].type || args[0].type !== args[2].type) {
            // invalid color, numbers and percentage shouldn't be mixed
            // TODO: remove those tokens
            return;
        }
    } else {
        if (args[0].type !== 'Number' ||
            args[1].type !== 'Percentage' ||
            args[2].type !== 'Percentage') {
            // invalid color, for hsl values should be: number, percentage, percentage
            // TODO: remove those tokens
            return;
        }

        args[0].type = 'Angle';
    }

    return args.map(function(arg) {
        var value = Math.max(0, arg.value);

        switch (arg.type) {
            case 'Number':
                // fit value to [0..255] range
                value = Math.min(value, 255);
                break;

            case 'Percentage':
                // convert 0..100% to value in [0..255] range
                value = Math.min(value, 100) / 100;

                if (!rgb) {
                    return value;
                }

                value = 255 * value;
                break;

            case 'Angle':
                // fit value to (-360..360) range
                return (((value % 360) + 360) % 360) / 360;

            case 'Alpha':
                // fit value to [0..1] range
                return Math.min(value, 1);
        }

        return Math.round(value);
    });
}

function compressFunction(node, item, list) {
    var functionName = node.name;
    var args;

    if (functionName === 'rgba' || functionName === 'hsla') {
        args = parseFunctionArgs(node.children, 4, functionName === 'rgba');

        if (!args) {
            // something went wrong
            return;
        }

        if (functionName === 'hsla') {
            args = hslToRgb.apply(null, args);
            node.name = 'rgba';
        }

        if (args[3] === 0) {
            // try to replace `rgba(x, x, x, 0)` to `transparent`
            // always replace `rgba(0, 0, 0, 0)` to `transparent`
            // otherwise avoid replacement in gradients since it may break color transition
            // http://stackoverflow.com/questions/11829410/css3-gradient-rendering-issues-from-transparent-to-white
            var scopeFunctionName = this['function'] && this['function'].name;
            if ((args[0] === 0 && args[1] === 0 && args[2] === 0) ||
                !/^(?:to|from|color-stop)$|gradient$/i.test(scopeFunctionName)) {

                item.data = {
                    type: 'Identifier',
                    loc: node.loc,
                    name: 'transparent'
                };

                return;
            }
        }

        if (args[3] !== 1) {
            // replace argument values for normalized/interpolated
            node.children.each(function(node, item, list) {
                if (node.type === 'Operator') {
                    if (node.value !== ',') {
                        list.remove(item);
                    }
                    return;
                }

                item.data = {
                    type: 'Number',
                    loc: node.loc,
                    value: packNumber(args.shift(), null)
                };
            });

            return;
        }

        // otherwise convert to rgb, i.e. rgba(255, 0, 0, 1) -> rgb(255, 0, 0)
        functionName = 'rgb';
    }

    if (functionName === 'hsl') {
        args = args || parseFunctionArgs(node.children, 3, false);

        if (!args) {
            // something went wrong
            return;
        }

        // convert to rgb
        args = hslToRgb.apply(null, args);
        functionName = 'rgb';
    }

    if (functionName === 'rgb') {
        args = args || parseFunctionArgs(node.children, 3, true);

        if (!args) {
            // something went wrong
            return;
        }

        // check if color is not at the end and not followed by space
        var next = item.next;
        if (next && next.data.type !== 'WhiteSpace') {
            list.insert(list.createItem({
                type: 'WhiteSpace',
                value: ' '
            }), next);
        }

        item.data = {
            type: 'HexColor',
            loc: node.loc,
            value: toHex(args[0]) + toHex(args[1]) + toHex(args[2])
        };

        compressHex(item.data, item);
    }
}

function compressIdent(node, item) {
    if (this.declaration === null) {
        return;
    }

    var color = node.name.toLowerCase();

    if (NAME_TO_HEX.hasOwnProperty(color) &&
        lexer.matchDeclaration(this.declaration).isType(node, 'color')) {
        var hex = NAME_TO_HEX[color];

        if (hex.length + 1 <= color.length) {
            // replace for shorter hex value
            item.data = {
                type: 'HexColor',
                loc: node.loc,
                value: hex
            };
        } else {
            // special case for consistent colors
            if (color === 'grey') {
                color = 'gray';
            }

            // just replace value for lower cased name
            node.name = color;
        }
    }
}

function compressHex(node, item) {
    var color = node.value.toLowerCase();

    // #112233 -> #123
    if (color.length === 6 &&
        color[0] === color[1] &&
        color[2] === color[3] &&
        color[4] === color[5]) {
        color = color[0] + color[2] + color[4];
    }

    if (HEX_TO_NAME[color]) {
        item.data = {
            type: 'Identifier',
            loc: node.loc,
            name: HEX_TO_NAME[color]
        };
    } else {
        node.value = color;
    }
}

module.exports = {
    compressFunction: compressFunction,
    compressIdent: compressIdent,
    compressHex: compressHex
};
}, {"58":58,"415":415}];
window.modules["422"] = [function(require,module,exports){var List = require(58).List;

module.exports = function compressBackground(node) {
    function lastType() {
        if (buffer.length) {
            return buffer[buffer.length - 1].type;
        }
    }

    function flush() {
        if (lastType() === 'WhiteSpace') {
            buffer.pop();
        }

        if (!buffer.length) {
            buffer.unshift(
                {
                    type: 'Number',
                    loc: null,
                    value: '0'
                },
                {
                    type: 'WhiteSpace',
                    value: ' '
                },
                {
                    type: 'Number',
                    loc: null,
                    value: '0'
                }
            );
        }

        newValue.push.apply(newValue, buffer);

        buffer = [];
    }

    var newValue = [];
    var buffer = [];

    node.children.each(function(node) {
        if (node.type === 'Operator' && node.value === ',') {
            flush();
            newValue.push(node);
            return;
        }

        // remove defaults
        if (node.type === 'Identifier') {
            if (node.name === 'transparent' ||
                node.name === 'none' ||
                node.name === 'repeat' ||
                node.name === 'scroll') {
                return;
            }
        }

        // don't add redundant spaces
        if (node.type === 'WhiteSpace' && (!buffer.length || lastType() === 'WhiteSpace')) {
            return;
        }

        buffer.push(node);
    });

    flush();
    node.children = new List().fromArray(newValue);
};
}, {"58":58}];
window.modules["420"] = [function(require,module,exports){function removeItemAndRedundantWhiteSpace(list, item) {
    var prev = item.prev;
    var next = item.next;

    if (next !== null) {
        if (next.data.type === 'WhiteSpace' && (prev === null || prev.data.type === 'WhiteSpace')) {
            list.remove(next);
        }
    } else if (prev !== null && prev.data.type === 'WhiteSpace') {
        list.remove(prev);
    }

    list.remove(item);
}

module.exports = function compressBorder(node) {
    node.children.each(function(node, item, list) {
        if (node.type === 'Identifier' && node.name.toLowerCase() === 'none') {
            if (list.head === list.tail) {
                // replace `none` for zero when `none` is a single term
                item.data = {
                    type: 'Number',
                    loc: node.loc,
                    value: '0'
                };
            } else {
                removeItemAndRedundantWhiteSpace(list, item);
            }
        }
    });
};
}, {}];
window.modules["433"] = [function(require,module,exports){var translate = require(58).translate;

function Index() {
    this.seed = 0;
    this.map = Object.create(null);
}

Index.prototype.resolve = function(str) {
    var index = this.map[str];

    if (!index) {
        index = ++this.seed;
        this.map[str] = index;
    }

    return index;
};

module.exports = function createDeclarationIndexer() {
    var ids = new Index();

    return function markDeclaration(node) {
        var id = translate(node);

        node.id = ids.resolve(id);
        node.length = id.length;
        node.fingerprint = null;

        return node;
    };
};
}, {"58":58}];
window.modules["436"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _container = require(437);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents an at-rule.
 *
 * If it’s followed in the CSS by a {} block, this node will have
 * a nodes property representing its children.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('@charset "UTF-8"; @media print {}');
 *
 * const charset = root.first;
 * charset.type  //=> 'atrule'
 * charset.nodes //=> undefined
 *
 * const media = root.last;
 * media.nodes   //=> []
 */
var AtRule = function (_Container) {
  _inherits(AtRule, _Container);

  function AtRule(defaults) {
    _classCallCheck(this, AtRule);

    var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));

    _this.type = 'atrule';
    return _this;
  }

  AtRule.prototype.append = function append() {
    var _Container$prototype$;

    if (!this.nodes) this.nodes = [];

    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    return (_Container$prototype$ = _Container.prototype.append).call.apply(_Container$prototype$, [this].concat(children));
  };

  AtRule.prototype.prepend = function prepend() {
    var _Container$prototype$2;

    if (!this.nodes) this.nodes = [];

    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    return (_Container$prototype$2 = _Container.prototype.prepend).call.apply(_Container$prototype$2, [this].concat(children));
  };

  /**
   * @memberof AtRule#
   * @member {string} name - the at-rule’s name immediately follows the `@`
   *
   * @example
   * const root  = postcss.parse('@media print {}');
   * media.name //=> 'media'
   * const media = root.first;
   */

  /**
   * @memberof AtRule#
   * @member {string} params - the at-rule’s parameters, the values
   *                           that follow the at-rule’s name but precede
   *                           any {} block
   *
   * @example
   * const root  = postcss.parse('@media print, screen {}');
   * const media = root.first;
   * media.params //=> 'print, screen'
   */

  /**
   * @memberof AtRule#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `after`: the space symbols after the last child of the node
   *   to the end of the node.
   * * `between`: the symbols between the property and value
   *   for declarations, selector and `{` for rules, or last parameter
   *   and `{` for at-rules.
   * * `semicolon`: contains true if the last child has
   *   an (optional) semicolon.
   * * `afterName`: the space between the at-rule name and its parameters.
   *
   * PostCSS cleans at-rule parameters from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('  @media\nprint {\n}')
   * root.first.first.raws //=> { before: '  ',
   *                       //     between: ' ',
   *                       //     afterName: '\n',
   *                       //     after: '\n' }
   */


  return AtRule;
}(_container2.default);

exports.default = AtRule;
module.exports = exports['default'];

}, {"437":437}];
window.modules["438"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _node = require(439);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a comment between declarations or statements (rule and at-rules).
 *
 * Comments inside selectors, at-rule parameters, or declaration values
 * will be stored in the `raws` properties explained above.
 *
 * @extends Node
 */
var Comment = function (_Node) {
  _inherits(Comment, _Node);

  function Comment(defaults) {
    _classCallCheck(this, Comment);

    var _this = _possibleConstructorReturn(this, _Node.call(this, defaults));

    _this.type = 'comment';
    return _this;
  }

  /**
   * @memberof Comment#
   * @member {string} text - the comment’s text
   */

  /**
   * @memberof Comment#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node.
   * * `left`: the space symbols between `/*` and the comment’s text.
   * * `right`: the space symbols between the comment’s text.
   */


  return Comment;
}(_node2.default);

exports.default = Comment;
module.exports = exports['default'];

}, {"439":439}];
window.modules["437"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _declaration = require(441);

var _declaration2 = _interopRequireDefault(_declaration);

var _comment = require(438);

var _comment2 = _interopRequireDefault(_comment);

var _node = require(439);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function cleanSource(nodes) {
    return nodes.map(function (i) {
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}

/**
 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 *
 * @extends Node
 * @abstract
 */

var Container = function (_Node) {
    _inherits(Container, _Node);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, _Node.apply(this, arguments));
    }

    Container.prototype.push = function push(child) {
        child.parent = this;
        this.nodes.push(child);
        return this;
    };

    /**
     * Iterates through the container’s immediate children,
     * calling `callback` for each child.
     *
     * Returning `false` in the callback will break iteration.
     *
     * This method only iterates through the container’s immediate children.
     * If you need to recursively iterate through all the container’s descendant
     * nodes, use {@link Container#walk}.
     *
     * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
     * if you are mutating the array of child nodes during iteration.
     * PostCSS will adjust the current index to match the mutations.
     *
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * const root = postcss.parse('a { color: black; z-index: 1 }');
     * const rule = root.first;
     *
     * for ( let decl of rule.nodes ) {
     *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
     *     // Cycle will be infinite, because cloneBefore moves the current node
     *     // to the next index
     * }
     *
     * rule.each(decl => {
     *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
     *     // Will be executed only for color and z-index
     * });
     */


    Container.prototype.each = function each(callback) {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};

        this.lastEach += 1;
        var id = this.lastEach;
        this.indexes[id] = 0;

        if (!this.nodes) return undefined;

        var index = void 0,
            result = void 0;
        while (this.indexes[id] < this.nodes.length) {
            index = this.indexes[id];
            result = callback(this.nodes[index], index);
            if (result === false) break;

            this.indexes[id] += 1;
        }

        delete this.indexes[id];

        return result;
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each node.
     *
     * Like container.each(), this method is safe to use
     * if you are mutating arrays during iteration.
     *
     * If you only need to iterate through the container’s immediate children,
     * use {@link Container#each}.
     *
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walk(node => {
     *   // Traverses all descendant nodes.
     * });
     */


    Container.prototype.walk = function walk(callback) {
        return this.each(function (child, i) {
            var result = callback(child, i);
            if (result !== false && child.walk) {
                result = child.walk(callback);
            }
            return result;
        });
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each declaration node.
     *
     * If you pass a filter, iteration will only happen over declarations
     * with matching properties.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {string|RegExp} [prop]   - string or regular expression
     *                                   to filter declarations by property name
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walkDecls(decl => {
     *   checkPropertySupport(decl.prop);
     * });
     *
     * root.walkDecls('border-radius', decl => {
     *   decl.remove();
     * });
     *
     * root.walkDecls(/^background/, decl => {
     *   decl.value = takeFirstColorFromGradient(decl.value);
     * });
     */


    Container.prototype.walkDecls = function walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk(function (child, i) {
                if (child.type === 'decl') {
                    return callback(child, i);
                }
            });
        } else if (prop instanceof RegExp) {
            return this.walk(function (child, i) {
                if (child.type === 'decl' && prop.test(child.prop)) {
                    return callback(child, i);
                }
            });
        } else {
            return this.walk(function (child, i) {
                if (child.type === 'decl' && child.prop === prop) {
                    return callback(child, i);
                }
            });
        }
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each rule node.
     *
     * If you pass a filter, iteration will only happen over rules
     * with matching selectors.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {string|RegExp} [selector] - string or regular expression
     *                                     to filter rules by selector
     * @param {childIterator} callback   - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * const selectors = [];
     * root.walkRules(rule => {
     *   selectors.push(rule.selector);
     * });
     * console.log(`Your CSS uses ${selectors.length} selectors`);
     */


    Container.prototype.walkRules = function walkRules(selector, callback) {
        if (!callback) {
            callback = selector;

            return this.walk(function (child, i) {
                if (child.type === 'rule') {
                    return callback(child, i);
                }
            });
        } else if (selector instanceof RegExp) {
            return this.walk(function (child, i) {
                if (child.type === 'rule' && selector.test(child.selector)) {
                    return callback(child, i);
                }
            });
        } else {
            return this.walk(function (child, i) {
                if (child.type === 'rule' && child.selector === selector) {
                    return callback(child, i);
                }
            });
        }
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each at-rule node.
     *
     * If you pass a filter, iteration will only happen over at-rules
     * that have matching names.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {string|RegExp} [name]   - string or regular expression
     *                                   to filter at-rules by name
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walkAtRules(rule => {
     *   if ( isOld(rule.name) ) rule.remove();
     * });
     *
     * let first = false;
     * root.walkAtRules('charset', rule => {
     *   if ( !first ) {
     *     first = true;
     *   } else {
     *     rule.remove();
     *   }
     * });
     */


    Container.prototype.walkAtRules = function walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk(function (child, i) {
                if (child.type === 'atrule') {
                    return callback(child, i);
                }
            });
        } else if (name instanceof RegExp) {
            return this.walk(function (child, i) {
                if (child.type === 'atrule' && name.test(child.name)) {
                    return callback(child, i);
                }
            });
        } else {
            return this.walk(function (child, i) {
                if (child.type === 'atrule' && child.name === name) {
                    return callback(child, i);
                }
            });
        }
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each comment node.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walkComments(comment => {
     *   comment.remove();
     * });
     */


    Container.prototype.walkComments = function walkComments(callback) {
        return this.walk(function (child, i) {
            if (child.type === 'comment') {
                return callback(child, i);
            }
        });
    };

    /**
     * Inserts new nodes to the end of the container.
     *
     * @param {...(Node|object|string|Node[])} children - new nodes
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
     * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
     * rule.append(decl1, decl2);
     *
     * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
     * root.append({ selector: 'a' });                       // rule
     * rule.append({ prop: 'color', value: 'black' });       // declaration
     * rule.append({ text: 'Comment' })                      // comment
     *
     * root.append('a {}');
     * root.first.append('color: black; z-index: 1');
     */


    Container.prototype.append = function append() {
        for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
            children[_key] = arguments[_key];
        }

        for (var _iterator = children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var child = _ref;

            var nodes = this.normalize(child, this.last);
            for (var _iterator2 = nodes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                var _ref2;

                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }

                var node = _ref2;
                this.nodes.push(node);
            }
        }
        return this;
    };

    /**
     * Inserts new nodes to the start of the container.
     *
     * @param {...(Node|object|string|Node[])} children - new nodes
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
     * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
     * rule.prepend(decl1, decl2);
     *
     * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
     * root.append({ selector: 'a' });                       // rule
     * rule.append({ prop: 'color', value: 'black' });       // declaration
     * rule.append({ text: 'Comment' })                      // comment
     *
     * root.append('a {}');
     * root.first.append('color: black; z-index: 1');
     */


    Container.prototype.prepend = function prepend() {
        for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            children[_key2] = arguments[_key2];
        }

        children = children.reverse();
        for (var _iterator3 = children, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }

            var child = _ref3;

            var nodes = this.normalize(child, this.first, 'prepend').reverse();
            for (var _iterator4 = nodes, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
                var _ref4;

                if (_isArray4) {
                    if (_i4 >= _iterator4.length) break;
                    _ref4 = _iterator4[_i4++];
                } else {
                    _i4 = _iterator4.next();
                    if (_i4.done) break;
                    _ref4 = _i4.value;
                }

                var node = _ref4;
                this.nodes.unshift(node);
            }for (var id in this.indexes) {
                this.indexes[id] = this.indexes[id] + nodes.length;
            }
        }
        return this;
    };

    Container.prototype.cleanRaws = function cleanRaws(keepBetween) {
        _Node.prototype.cleanRaws.call(this, keepBetween);
        if (this.nodes) {
            for (var _iterator5 = this.nodes, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
                var _ref5;

                if (_isArray5) {
                    if (_i5 >= _iterator5.length) break;
                    _ref5 = _iterator5[_i5++];
                } else {
                    _i5 = _iterator5.next();
                    if (_i5.done) break;
                    _ref5 = _i5.value;
                }

                var node = _ref5;
                node.cleanRaws(keepBetween);
            }
        }
    };

    /**
     * Insert new node before old node within the container.
     *
     * @param {Node|number} exist             - child or child’s index.
     * @param {Node|object|string|Node[]} add - new node
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }));
     */


    Container.prototype.insertBefore = function insertBefore(exist, add) {
        exist = this.index(exist);

        var type = exist === 0 ? 'prepend' : false;
        var nodes = this.normalize(add, this.nodes[exist], type).reverse();
        for (var _iterator6 = nodes, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
            var _ref6;

            if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref6 = _iterator6[_i6++];
            } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref6 = _i6.value;
            }

            var node = _ref6;
            this.nodes.splice(exist, 0, node);
        }var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (exist <= index) {
                this.indexes[id] = index + nodes.length;
            }
        }

        return this;
    };

    /**
     * Insert new node after old node within the container.
     *
     * @param {Node|number} exist             - child or child’s index
     * @param {Node|object|string|Node[]} add - new node
     *
     * @return {Node} this node for methods chain
     */


    Container.prototype.insertAfter = function insertAfter(exist, add) {
        exist = this.index(exist);

        var nodes = this.normalize(add, this.nodes[exist]).reverse();
        for (var _iterator7 = nodes, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
            var _ref7;

            if (_isArray7) {
                if (_i7 >= _iterator7.length) break;
                _ref7 = _iterator7[_i7++];
            } else {
                _i7 = _iterator7.next();
                if (_i7.done) break;
                _ref7 = _i7.value;
            }

            var node = _ref7;
            this.nodes.splice(exist + 1, 0, node);
        }var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (exist < index) {
                this.indexes[id] = index + nodes.length;
            }
        }

        return this;
    };

    /**
     * Removes node from the container and cleans the parent properties
     * from the node and its children.
     *
     * @param {Node|number} child - child or child’s index
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * rule.nodes.length  //=> 5
     * rule.removeChild(decl);
     * rule.nodes.length  //=> 4
     * decl.parent        //=> undefined
     */


    Container.prototype.removeChild = function removeChild(child) {
        child = this.index(child);
        this.nodes[child].parent = undefined;
        this.nodes.splice(child, 1);

        var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (index >= child) {
                this.indexes[id] = index - 1;
            }
        }

        return this;
    };

    /**
     * Removes all children from the container
     * and cleans their parent properties.
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * rule.removeAll();
     * rule.nodes.length //=> 0
     */


    Container.prototype.removeAll = function removeAll() {
        for (var _iterator8 = this.nodes, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
            var _ref8;

            if (_isArray8) {
                if (_i8 >= _iterator8.length) break;
                _ref8 = _iterator8[_i8++];
            } else {
                _i8 = _iterator8.next();
                if (_i8.done) break;
                _ref8 = _i8.value;
            }

            var node = _ref8;
            node.parent = undefined;
        }this.nodes = [];
        return this;
    };

    /**
     * Passes all declaration values within the container that match pattern
     * through callback, replacing those values with the returned result
     * of callback.
     *
     * This method is useful if you are using a custom unit or function
     * and need to iterate through all values.
     *
     * @param {string|RegExp} pattern      - replace pattern
     * @param {object} opts                - options to speed up the search
     * @param {string|string[]} opts.props - an array of property names
     * @param {string} opts.fast           - string that’s used
     *                                       to narrow down values and speed up
                                             the regexp search
     * @param {function|string} callback   - string to replace pattern
     *                                       or callback that returns a new
     *                                       value.
     *                                       The callback will receive
     *                                       the same arguments as those
     *                                       passed to a function parameter
     *                                       of `String#replace`.
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
     *   return 15 * parseInt(string) + 'px';
     * });
     */


    Container.prototype.replaceValues = function replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }

        this.walkDecls(function (decl) {
            if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
            if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;

            decl.value = decl.value.replace(pattern, callback);
        });

        return this;
    };

    /**
     * Returns `true` if callback returns `true`
     * for all of the container’s children.
     *
     * @param {childCondition} condition - iterator returns true or false.
     *
     * @return {boolean} is every child pass condition
     *
     * @example
     * const noPrefixes = rule.every(i => i.prop[0] !== '-');
     */


    Container.prototype.every = function every(condition) {
        return this.nodes.every(condition);
    };

    /**
     * Returns `true` if callback returns `true` for (at least) one
     * of the container’s children.
     *
     * @param {childCondition} condition - iterator returns true or false.
     *
     * @return {boolean} is some child pass condition
     *
     * @example
     * const hasPrefix = rule.some(i => i.prop[0] === '-');
     */


    Container.prototype.some = function some(condition) {
        return this.nodes.some(condition);
    };

    /**
     * Returns a `child`’s index within the {@link Container#nodes} array.
     *
     * @param {Node} child - child of the current container.
     *
     * @return {number} child index
     *
     * @example
     * rule.index( rule.nodes[2] ) //=> 2
     */


    Container.prototype.index = function index(child) {
        if (typeof child === 'number') {
            return child;
        } else {
            return this.nodes.indexOf(child);
        }
    };

    /**
     * The container’s first child.
     *
     * @type {Node}
     *
     * @example
     * rule.first == rules.nodes[0];
     */


    Container.prototype.normalize = function normalize(nodes, sample) {
        var _this2 = this;

        if (typeof nodes === 'string') {
            var parse = require(440);
            nodes = cleanSource(parse(nodes).nodes);
        } else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (var _iterator9 = nodes, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
                var _ref9;

                if (_isArray9) {
                    if (_i9 >= _iterator9.length) break;
                    _ref9 = _iterator9[_i9++];
                } else {
                    _i9 = _iterator9.next();
                    if (_i9.done) break;
                    _ref9 = _i9.value;
                }

                var i = _ref9;

                if (i.parent) i.parent.removeChild(i, 'ignore');
            }
        } else if (nodes.type === 'root') {
            nodes = nodes.nodes.slice(0);
            for (var _iterator10 = nodes, _isArray10 = Array.isArray(_iterator10), _i11 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
                var _ref10;

                if (_isArray10) {
                    if (_i11 >= _iterator10.length) break;
                    _ref10 = _iterator10[_i11++];
                } else {
                    _i11 = _iterator10.next();
                    if (_i11.done) break;
                    _ref10 = _i11.value;
                }

                var _i10 = _ref10;

                if (_i10.parent) _i10.parent.removeChild(_i10, 'ignore');
            }
        } else if (nodes.type) {
            nodes = [nodes];
        } else if (nodes.prop) {
            if (typeof nodes.value === 'undefined') {
                throw new Error('Value field is missed in node creation');
            } else if (typeof nodes.value !== 'string') {
                nodes.value = String(nodes.value);
            }
            nodes = [new _declaration2.default(nodes)];
        } else if (nodes.selector) {
            var Rule = require(443);
            nodes = [new Rule(nodes)];
        } else if (nodes.name) {
            var AtRule = require(436);
            nodes = [new AtRule(nodes)];
        } else if (nodes.text) {
            nodes = [new _comment2.default(nodes)];
        } else {
            throw new Error('Unknown node type in node creation');
        }

        var processed = nodes.map(function (i) {
            if (typeof i.before !== 'function') i = _this2.rebuild(i);

            if (i.parent) i.parent.removeChild(i);
            if (typeof i.raws.before === 'undefined') {
                if (sample && typeof sample.raws.before !== 'undefined') {
                    i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
                }
            }
            i.parent = _this2;
            return i;
        });

        return processed;
    };

    Container.prototype.rebuild = function rebuild(node, parent) {
        var _this3 = this;

        var fix = void 0;
        if (node.type === 'root') {
            var Root = require(442);
            fix = new Root();
        } else if (node.type === 'atrule') {
            var AtRule = require(436);
            fix = new AtRule();
        } else if (node.type === 'rule') {
            var Rule = require(443);
            fix = new Rule();
        } else if (node.type === 'decl') {
            fix = new _declaration2.default();
        } else if (node.type === 'comment') {
            fix = new _comment2.default();
        }

        for (var i in node) {
            if (i === 'nodes') {
                fix.nodes = node.nodes.map(function (j) {
                    return _this3.rebuild(j, fix);
                });
            } else if (i === 'parent' && parent) {
                fix.parent = parent;
            } else if (node.hasOwnProperty(i)) {
                fix[i] = node[i];
            }
        }

        return fix;
    };

    /**
     * @memberof Container#
     * @member {Node[]} nodes - an array containing the container’s children
     *
     * @example
     * const root = postcss.parse('a { color: black }');
     * root.nodes.length           //=> 1
     * root.nodes[0].selector      //=> 'a'
     * root.nodes[0].nodes[0].prop //=> 'color'
     */

    _createClass(Container, [{
        key: 'first',
        get: function get() {
            if (!this.nodes) return undefined;
            return this.nodes[0];
        }

        /**
         * The container’s last child.
         *
         * @type {Node}
         *
         * @example
         * rule.last == rule.nodes[rule.nodes.length - 1];
         */

    }, {
        key: 'last',
        get: function get() {
            if (!this.nodes) return undefined;
            return this.nodes[this.nodes.length - 1];
        }
    }]);

    return Container;
}(_node2.default);

exports.default = Container;

/**
 * @callback childCondition
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @param {Node[]} nodes - all container children
 * @return {boolean}
 */

/**
 * @callback childIterator
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @return {false|undefined} returning `false` will break iteration
 */

module.exports = exports['default'];

}, {"436":436,"438":438,"439":439,"440":440,"441":441,"442":442,"443":443}];
window.modules["444"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _supportsColor = require(20);

var _supportsColor2 = _interopRequireDefault(_supportsColor);

var _chalk = require(20);

var _chalk2 = _interopRequireDefault(_chalk);

var _terminalHighlight = require(445);

var _terminalHighlight2 = _interopRequireDefault(_terminalHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the {@link Node#error} method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * @example
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if ( error.name === 'CssSyntaxError' ) {
 *     error //=> CssSyntaxError
 *   }
 * }
 *
 * @example
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' });
 */
var CssSyntaxError = function () {

    /**
     * @param {string} message  - error message
     * @param {number} [line]   - source line of the error
     * @param {number} [column] - source column of the error
     * @param {string} [source] - source code of the broken file
     * @param {string} [file]   - absolute path to the broken file
     * @param {string} [plugin] - PostCSS plugin name, if error came from plugin
     */
    function CssSyntaxError(message, line, column, source, file, plugin) {
        _classCallCheck(this, CssSyntaxError);

        /**
         * @member {string} - Always equal to `'CssSyntaxError'`. You should
         *                    always check error type
         *                    by `error.name === 'CssSyntaxError'` instead of
         *                    `error instanceof CssSyntaxError`, because
         *                    npm could have several PostCSS versions.
         *
         * @example
         * if ( error.name === 'CssSyntaxError' ) {
         *   error //=> CssSyntaxError
         * }
         */
        this.name = 'CssSyntaxError';
        /**
         * @member {string} - Error message.
         *
         * @example
         * error.message //=> 'Unclosed block'
         */
        this.reason = message;

        if (file) {
            /**
             * @member {string} - Absolute path to the broken file.
             *
             * @example
             * error.file       //=> 'a.sass'
             * error.input.file //=> 'a.css'
             */
            this.file = file;
        }
        if (source) {
            /**
             * @member {string} - Source code of the broken file.
             *
             * @example
             * error.source       //=> 'a { b {} }'
             * error.input.column //=> 'a b { }'
             */
            this.source = source;
        }
        if (plugin) {
            /**
             * @member {string} - Plugin name, if error came from plugin.
             *
             * @example
             * error.plugin //=> 'postcss-vars'
             */
            this.plugin = plugin;
        }
        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
            /**
             * @member {number} - Source line of the error.
             *
             * @example
             * error.line       //=> 2
             * error.input.line //=> 4
             */
            this.line = line;
            /**
             * @member {number} - Source column of the error.
             *
             * @example
             * error.column       //=> 1
             * error.input.column //=> 4
             */
            this.column = column;
        }

        this.setMessage();

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError);
        }
    }

    CssSyntaxError.prototype.setMessage = function setMessage() {
        /**
         * @member {string} - Full error text in the GNU error format
         *                    with plugin, file, line and column.
         *
         * @example
         * error.message //=> 'a.css:1:1: Unclosed block'
         */
        this.message = this.plugin ? this.plugin + ': ' : '';
        this.message += this.file ? this.file : '<css input>';
        if (typeof this.line !== 'undefined') {
            this.message += ':' + this.line + ':' + this.column;
        }
        this.message += ': ' + this.reason;
    };

    /**
     * Returns a few lines of CSS source that caused the error.
     *
     * If the CSS has an input source map without `sourceContent`,
     * this method will return an empty string.
     *
     * @param {boolean} [color] whether arrow will be colored red by terminal
     *                          color codes. By default, PostCSS will detect
     *                          color support by `process.stdout.isTTY`
     *                          and `window.process.env.NODE_DISABLE_COLORS`.
     *
     * @example
     * error.showSourceCode() //=> "  4 | }
     *                        //      5 | a {
     *                        //    > 6 |   bad
     *                        //        |   ^
     *                        //      7 | }
     *                        //      8 | b {"
     *
     * @return {string} few lines of CSS source that caused the error
     */


    CssSyntaxError.prototype.showSourceCode = function showSourceCode(color) {
        var _this = this;

        if (!this.source) return '';

        var css = this.source;
        if (typeof color === 'undefined') color = _supportsColor2.default.stdout;
        if (color) css = (0, _terminalHighlight2.default)(css);

        var lines = css.split(/\r?\n/);
        var start = Math.max(this.line - 3, 0);
        var end = Math.min(this.line + 2, lines.length);

        var maxWidth = String(end).length;

        function mark(text) {
            if (color && _chalk2.default.red) {
                return _chalk2.default.red.bold(text);
            } else {
                return text;
            }
        }
        function aside(text) {
            if (color && _chalk2.default.gray) {
                return _chalk2.default.gray(text);
            } else {
                return text;
            }
        }

        return lines.slice(start, end).map(function (line, index) {
            var number = start + 1 + index;
            var gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';
            if (number === _this.line) {
                var spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
                return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^');
            } else {
                return ' ' + aside(gutter) + line;
            }
        }).join('\n');
    };

    /**
     * Returns error position, message and source code of the broken part.
     *
     * @example
     * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
     *                  //    > 1 | a {
     *                  //        | ^"
     *
     * @return {string} error position, message and source code
     */


    CssSyntaxError.prototype.toString = function toString() {
        var code = this.showSourceCode();
        if (code) {
            code = '\n\n' + code + '\n';
        }
        return this.name + ': ' + this.message + code;
    };

    /**
     * @memberof CssSyntaxError#
     * @member {Input} input - Input object with PostCSS internal information
     *                         about input file. If input has source map
     *                         from previous tool, PostCSS will use origin
     *                         (for example, Sass) source. You can use this
     *                         object to get PostCSS input source.
     *
     * @example
     * error.input.file //=> 'a.css'
     * error.file       //=> 'a.sass'
     */

    return CssSyntaxError;
}();

exports.default = CssSyntaxError;
module.exports = exports['default'];

}, {"20":20,"445":445}];
window.modules["441"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _node = require(439);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a CSS declaration.
 *
 * @extends Node
 *
 * @example
 * const root = postcss.parse('a { color: black }');
 * const decl = root.first.first;
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 */
var Declaration = function (_Node) {
  _inherits(Declaration, _Node);

  function Declaration(defaults) {
    _classCallCheck(this, Declaration);

    var _this = _possibleConstructorReturn(this, _Node.call(this, defaults));

    _this.type = 'decl';
    return _this;
  }

  /**
   * @memberof Declaration#
   * @member {string} prop - the declaration’s property name
   *
   * @example
   * const root = postcss.parse('a { color: black }');
   * const decl = root.first.first;
   * decl.prop //=> 'color'
   */

  /**
   * @memberof Declaration#
   * @member {string} value - the declaration’s value
   *
   * @example
   * const root = postcss.parse('a { color: black }');
   * const decl = root.first.first;
   * decl.value //=> 'black'
   */

  /**
   * @memberof Declaration#
   * @member {boolean} important - `true` if the declaration
   *                               has an !important annotation.
   *
   * @example
   * const root = postcss.parse('a { color: black !important; color: red }');
   * root.first.first.important //=> true
   * root.first.last.important  //=> undefined
   */

  /**
   * @memberof Declaration#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `between`: the symbols between the property and value
   *   for declarations.
   * * `important`: the content of the important statement,
   *   if it is not just `!important`.
   *
   * PostCSS cleans declaration from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('a {\n  color:black\n}')
   * root.first.first.raws //=> { before: '\n  ', between: ':' }
   */

  return Declaration;
}(_node2.default);

exports.default = Declaration;
module.exports = exports['default'];

}, {"439":439}];
window.modules["476"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _namespace = require(484);

var _namespace2 = _interopRequireDefault(_namespace);

var _types = require(470);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Attribute = function (_Namespace) {
    _inherits(Attribute, _Namespace);

    function Attribute() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Attribute);

        var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

        _this.type = _types.ATTRIBUTE;
        _this.raws = _this.raws || {};
        _this._constructed = true;
        return _this;
    }

    Attribute.prototype._spacesFor = function _spacesFor(name) {
        var attrSpaces = { before: '', after: '' };
        var spaces = this.spaces[name] || {};
        var rawSpaces = this.raws.spaces && this.raws.spaces[name] || {};
        return Object.assign(attrSpaces, spaces, rawSpaces);
    };

    Attribute.prototype._valueFor = function _valueFor(name) {
        return this.raws[name] || this[name];
    };

    Attribute.prototype._stringFor = function _stringFor(name) {
        var spaceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : name;
        var concat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultAttrConcat;

        var attrSpaces = this._spacesFor(spaceName);
        return concat(this._valueFor(name), attrSpaces);
    };

    /**
     * returns the offset of the attribute part specified relative to the
     * start of the node of the output string.
     *
     * * "ns" - alias for "namespace"
     * * "namespace" - the namespace if it exists.
     * * "attribute" - the attribute name
     * * "attributeNS" - the start of the attribute or its namespace
     * * "operator" - the match operator of the attribute
     * * "value" - The value (string or identifier)
     * * "insensitive" - the case insensitivity flag;
     * @param part One of the possible values inside an attribute.
     * @returns -1 if the name is invalid or the value doesn't exist in this attribute.
     */


    Attribute.prototype.offsetOf = function offsetOf(name) {
        var count = 1;
        var attributeSpaces = this._spacesFor("attribute");
        count += attributeSpaces.before.length;
        if (name === "namespace" || name === "ns") {
            return this.namespace ? count : -1;
        }
        if (name === "attributeNS") {
            return count;
        }

        count += this.namespaceString.length;
        if (this.namespace) {
            count += 1;
        }
        if (name === "attribute") {
            return count;
        }

        count += this._valueFor("attribute").length;
        count += attributeSpaces.after.length;
        var operatorSpaces = this._spacesFor("operator");
        count += operatorSpaces.before.length;
        var operator = this._valueFor("operator");
        if (name === "operator") {
            return operator ? count : -1;
        }

        count += operator.length;
        count += operatorSpaces.after.length;
        var valueSpaces = this._spacesFor("value");
        count += valueSpaces.before.length;
        var value = this._valueFor("value");
        if (name === "value") {
            return value ? count : -1;
        }

        count += value.length;
        count += valueSpaces.after.length;
        var insensitiveSpaces = this._spacesFor("insensitive");
        count += insensitiveSpaces.before.length;
        if (name === "insensitive") {
            return this.insensitive ? count : -1;
        }
        return -1;
    };

    Attribute.prototype.toString = function toString() {
        var _this2 = this;

        var selector = [this.spaces.before, '['];

        selector.push(this._stringFor('qualifiedAttribute', 'attribute'));

        if (this.operator && this.value) {
            selector.push(this._stringFor('operator'));
            selector.push(this._stringFor('value'));
            selector.push(this._stringFor('insensitiveFlag', 'insensitive', function (attrValue, attrSpaces) {
                if (attrValue.length > 0 && !_this2.quoted && attrSpaces.before.length === 0 && !(_this2.spaces.value && _this2.spaces.value.after)) {
                    attrSpaces.before = " ";
                }
                return defaultAttrConcat(attrValue, attrSpaces);
            }));
        }

        selector.push(']');
        selector.push(this.spaces.after);
        return selector.join('');
    };

    _createClass(Attribute, [{
        key: 'qualifiedAttribute',
        get: function get() {
            return this.qualifiedName(this.raws.attribute || this.attribute);
        }
    }, {
        key: 'insensitiveFlag',
        get: function get() {
            return this.insensitive ? 'i' : '';
        }
    }, {
        key: 'value',
        get: function get() {
            return this._value;
        },
        set: function set(v) {
            this._value = v;
            if (this._constructed) {
                delete this.raws.value;
            }
        }
    }, {
        key: 'namespace',
        get: function get() {
            return this._namespace;
        },
        set: function set(v) {
            this._namespace = v;
            if (this._constructed) {
                delete this.raws.namespace;
            }
        }
    }, {
        key: 'attribute',
        get: function get() {
            return this._attribute;
        },
        set: function set(v) {
            this._attribute = v;
            if (this._constructed) {
                delete this.raws.attibute;
            }
        }
    }]);

    return Attribute;
}(_namespace2.default);

exports.default = Attribute;


function defaultAttrConcat(attrValue, attrSpaces) {
    return '' + attrSpaces.before + attrValue + attrSpaces.after;
}
module.exports = exports['default'];}, {"470":470,"484":484}];
window.modules["481"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _namespace = require(484);

var _namespace2 = _interopRequireDefault(_namespace);

var _types = require(470);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = function (_Namespace) {
    _inherits(ClassName, _Namespace);

    function ClassName(opts) {
        _classCallCheck(this, ClassName);

        var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

        _this.type = _types.CLASS;
        return _this;
    }

    ClassName.prototype.toString = function toString() {
        return [this.spaces.before, this.ns, String('.' + this.value), this.spaces.after].join('');
    };

    return ClassName;
}(_namespace2.default);

exports.default = ClassName;
module.exports = exports['default'];}, {"470":470,"484":484}];
window.modules["473"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _node = require(485);

var _node2 = _interopRequireDefault(_node);

var _types = require(470);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Combinator = function (_Node) {
    _inherits(Combinator, _Node);

    function Combinator(opts) {
        _classCallCheck(this, Combinator);

        var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

        _this.type = _types.COMBINATOR;
        return _this;
    }

    return Combinator;
}(_node2.default);

exports.default = Combinator;
module.exports = exports['default'];}, {"470":470,"485":485}];
window.modules["474"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _node = require(485);

var _node2 = _interopRequireDefault(_node);

var _types = require(470);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_Node) {
    _inherits(Comment, _Node);

    function Comment(opts) {
        _classCallCheck(this, Comment);

        var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

        _this.type = _types.COMMENT;
        return _this;
    }

    return Comment;
}(_node2.default);

exports.default = Comment;
module.exports = exports['default'];}, {"470":470,"485":485}];
window.modules["486"] = [function(require,module,exports){'use strict';

exports.__esModule = true;
exports.universal = exports.tag = exports.string = exports.selector = exports.root = exports.pseudo = exports.nesting = exports.id = exports.comment = exports.combinator = exports.className = exports.attribute = undefined;

var _attribute = require(476);

var _attribute2 = _interopRequireDefault(_attribute);

var _className = require(481);

var _className2 = _interopRequireDefault(_className);

var _combinator = require(473);

var _combinator2 = _interopRequireDefault(_combinator);

var _comment = require(474);

var _comment2 = _interopRequireDefault(_comment);

var _id = require(475);

var _id2 = _interopRequireDefault(_id);

var _nesting = require(472);

var _nesting2 = _interopRequireDefault(_nesting);

var _pseudo = require(478);

var _pseudo2 = _interopRequireDefault(_pseudo);

var _root = require(480);

var _root2 = _interopRequireDefault(_root);

var _selector = require(482);

var _selector2 = _interopRequireDefault(_selector);

var _string = require(471);

var _string2 = _interopRequireDefault(_string);

var _tag = require(479);

var _tag2 = _interopRequireDefault(_tag);

var _universal = require(477);

var _universal2 = _interopRequireDefault(_universal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attribute = exports.attribute = function attribute(opts) {
  return new _attribute2.default(opts);
};
var className = exports.className = function className(opts) {
  return new _className2.default(opts);
};
var combinator = exports.combinator = function combinator(opts) {
  return new _combinator2.default(opts);
};
var comment = exports.comment = function comment(opts) {
  return new _comment2.default(opts);
};
var id = exports.id = function id(opts) {
  return new _id2.default(opts);
};
var nesting = exports.nesting = function nesting(opts) {
  return new _nesting2.default(opts);
};
var pseudo = exports.pseudo = function pseudo(opts) {
  return new _pseudo2.default(opts);
};
var root = exports.root = function root(opts) {
  return new _root2.default(opts);
};
var selector = exports.selector = function selector(opts) {
  return new _selector2.default(opts);
};
var string = exports.string = function string(opts) {
  return new _string2.default(opts);
};
var tag = exports.tag = function tag(opts) {
  return new _tag2.default(opts);
};
var universal = exports.universal = function universal(opts) {
  return new _universal2.default(opts);
};}, {"471":471,"472":472,"473":473,"474":474,"475":475,"476":476,"477":477,"478":478,"479":479,"480":480,"481":481,"482":482}];
window.modules["487"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = require(485);

var _node2 = _interopRequireDefault(_node);

var _types = require(470);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Node) {
    _inherits(Container, _Node);

    function Container(opts) {
        _classCallCheck(this, Container);

        var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

        if (!_this.nodes) {
            _this.nodes = [];
        }
        return _this;
    }

    Container.prototype.append = function append(selector) {
        selector.parent = this;
        this.nodes.push(selector);
        return this;
    };

    Container.prototype.prepend = function prepend(selector) {
        selector.parent = this;
        this.nodes.unshift(selector);
        return this;
    };

    Container.prototype.at = function at(index) {
        return this.nodes[index];
    };

    Container.prototype.index = function index(child) {
        if (typeof child === 'number') {
            return child;
        }
        return this.nodes.indexOf(child);
    };

    Container.prototype.removeChild = function removeChild(child) {
        child = this.index(child);
        this.at(child).parent = undefined;
        this.nodes.splice(child, 1);

        var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (index >= child) {
                this.indexes[id] = index - 1;
            }
        }

        return this;
    };

    Container.prototype.removeAll = function removeAll() {
        for (var _iterator = this.nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var node = _ref;

            node.parent = undefined;
        }
        this.nodes = [];
        return this;
    };

    Container.prototype.empty = function empty() {
        return this.removeAll();
    };

    Container.prototype.insertAfter = function insertAfter(oldNode, newNode) {
        newNode.parent = this;
        var oldIndex = this.index(oldNode);
        this.nodes.splice(oldIndex + 1, 0, newNode);

        newNode.parent = this;

        var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (oldIndex <= index) {
                this.indexes[id] = index + 1;
            }
        }

        return this;
    };

    Container.prototype.insertBefore = function insertBefore(oldNode, newNode) {
        newNode.parent = this;
        var oldIndex = this.index(oldNode);
        this.nodes.splice(oldIndex, 0, newNode);

        newNode.parent = this;

        var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (index <= oldIndex) {
                this.indexes[id] = index + 1;
            }
        }

        return this;
    };

    Container.prototype.each = function each(callback) {
        if (!this.lastEach) {
            this.lastEach = 0;
        }
        if (!this.indexes) {
            this.indexes = {};
        }

        this.lastEach++;
        var id = this.lastEach;
        this.indexes[id] = 0;

        if (!this.length) {
            return undefined;
        }

        var index = void 0,
            result = void 0;
        while (this.indexes[id] < this.length) {
            index = this.indexes[id];
            result = callback(this.at(index), index);
            if (result === false) {
                break;
            }

            this.indexes[id] += 1;
        }

        delete this.indexes[id];

        if (result === false) {
            return false;
        }
    };

    Container.prototype.walk = function walk(callback) {
        return this.each(function (node, i) {
            var result = callback(node, i);

            if (result !== false && node.length) {
                result = node.walk(callback);
            }

            if (result === false) {
                return false;
            }
        });
    };

    Container.prototype.walkAttributes = function walkAttributes(callback) {
        var _this2 = this;

        return this.walk(function (selector) {
            if (selector.type === types.ATTRIBUTE) {
                return callback.call(_this2, selector);
            }
        });
    };

    Container.prototype.walkClasses = function walkClasses(callback) {
        var _this3 = this;

        return this.walk(function (selector) {
            if (selector.type === types.CLASS) {
                return callback.call(_this3, selector);
            }
        });
    };

    Container.prototype.walkCombinators = function walkCombinators(callback) {
        var _this4 = this;

        return this.walk(function (selector) {
            if (selector.type === types.COMBINATOR) {
                return callback.call(_this4, selector);
            }
        });
    };

    Container.prototype.walkComments = function walkComments(callback) {
        var _this5 = this;

        return this.walk(function (selector) {
            if (selector.type === types.COMMENT) {
                return callback.call(_this5, selector);
            }
        });
    };

    Container.prototype.walkIds = function walkIds(callback) {
        var _this6 = this;

        return this.walk(function (selector) {
            if (selector.type === types.ID) {
                return callback.call(_this6, selector);
            }
        });
    };

    Container.prototype.walkNesting = function walkNesting(callback) {
        var _this7 = this;

        return this.walk(function (selector) {
            if (selector.type === types.NESTING) {
                return callback.call(_this7, selector);
            }
        });
    };

    Container.prototype.walkPseudos = function walkPseudos(callback) {
        var _this8 = this;

        return this.walk(function (selector) {
            if (selector.type === types.PSEUDO) {
                return callback.call(_this8, selector);
            }
        });
    };

    Container.prototype.walkTags = function walkTags(callback) {
        var _this9 = this;

        return this.walk(function (selector) {
            if (selector.type === types.TAG) {
                return callback.call(_this9, selector);
            }
        });
    };

    Container.prototype.walkUniversals = function walkUniversals(callback) {
        var _this10 = this;

        return this.walk(function (selector) {
            if (selector.type === types.UNIVERSAL) {
                return callback.call(_this10, selector);
            }
        });
    };

    Container.prototype.split = function split(callback) {
        var _this11 = this;

        var current = [];
        return this.reduce(function (memo, node, index) {
            var split = callback.call(_this11, node);
            current.push(node);
            if (split) {
                memo.push(current);
                current = [];
            } else if (index === _this11.length - 1) {
                memo.push(current);
            }
            return memo;
        }, []);
    };

    Container.prototype.map = function map(callback) {
        return this.nodes.map(callback);
    };

    Container.prototype.reduce = function reduce(callback, memo) {
        return this.nodes.reduce(callback, memo);
    };

    Container.prototype.every = function every(callback) {
        return this.nodes.every(callback);
    };

    Container.prototype.some = function some(callback) {
        return this.nodes.some(callback);
    };

    Container.prototype.filter = function filter(callback) {
        return this.nodes.filter(callback);
    };

    Container.prototype.sort = function sort(callback) {
        return this.nodes.sort(callback);
    };

    Container.prototype.toString = function toString() {
        return this.map(String).join('');
    };

    _createClass(Container, [{
        key: 'first',
        get: function get() {
            return this.at(0);
        }
    }, {
        key: 'last',
        get: function get() {
            return this.at(this.length - 1);
        }
    }, {
        key: 'length',
        get: function get() {
            return this.nodes.length;
        }
    }]);

    return Container;
}(_node2.default);

exports.default = Container;
module.exports = exports['default'];}, {"470":470,"485":485}];
window.modules["489"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _container = require(490);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents an at-rule.
 *
 * If it’s followed in the CSS by a {} block, this node will have
 * a nodes property representing its children.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('@charset "UTF-8"; @media print {}');
 *
 * const charset = root.first;
 * charset.type  //=> 'atrule'
 * charset.nodes //=> undefined
 *
 * const media = root.last;
 * media.nodes   //=> []
 */
var AtRule = function (_Container) {
  _inherits(AtRule, _Container);

  function AtRule(defaults) {
    _classCallCheck(this, AtRule);

    var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));

    _this.type = 'atrule';
    return _this;
  }

  AtRule.prototype.append = function append() {
    var _Container$prototype$;

    if (!this.nodes) this.nodes = [];

    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    return (_Container$prototype$ = _Container.prototype.append).call.apply(_Container$prototype$, [this].concat(children));
  };

  AtRule.prototype.prepend = function prepend() {
    var _Container$prototype$2;

    if (!this.nodes) this.nodes = [];

    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    return (_Container$prototype$2 = _Container.prototype.prepend).call.apply(_Container$prototype$2, [this].concat(children));
  };

  /**
   * @memberof AtRule#
   * @member {string} name - the at-rule’s name immediately follows the `@`
   *
   * @example
   * const root  = postcss.parse('@media print {}');
   * media.name //=> 'media'
   * const media = root.first;
   */

  /**
   * @memberof AtRule#
   * @member {string} params - the at-rule’s parameters, the values
   *                           that follow the at-rule’s name but precede
   *                           any {} block
   *
   * @example
   * const root  = postcss.parse('@media print, screen {}');
   * const media = root.first;
   * media.params //=> 'print, screen'
   */

  /**
   * @memberof AtRule#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `after`: the space symbols after the last child of the node
   *   to the end of the node.
   * * `between`: the symbols between the property and value
   *   for declarations, selector and `{` for rules, or last parameter
   *   and `{` for at-rules.
   * * `semicolon`: contains true if the last child has
   *   an (optional) semicolon.
   * * `afterName`: the space between the at-rule name and its parameters.
   *
   * PostCSS cleans at-rule parameters from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('  @media\nprint {\n}')
   * root.first.first.raws //=> { before: '  ',
   *                       //     between: ' ',
   *                       //     afterName: '\n',
   *                       //     after: '\n' }
   */


  return AtRule;
}(_container2.default);

exports.default = AtRule;
module.exports = exports['default'];

}, {"490":490}];
window.modules["491"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _node = require(492);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a comment between declarations or statements (rule and at-rules).
 *
 * Comments inside selectors, at-rule parameters, or declaration values
 * will be stored in the `raws` properties explained above.
 *
 * @extends Node
 */
var Comment = function (_Node) {
  _inherits(Comment, _Node);

  function Comment(defaults) {
    _classCallCheck(this, Comment);

    var _this = _possibleConstructorReturn(this, _Node.call(this, defaults));

    _this.type = 'comment';
    return _this;
  }

  /**
   * @memberof Comment#
   * @member {string} text - the comment’s text
   */

  /**
   * @memberof Comment#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node.
   * * `left`: the space symbols between `/*` and the comment’s text.
   * * `right`: the space symbols between the comment’s text.
   */


  return Comment;
}(_node2.default);

exports.default = Comment;
module.exports = exports['default'];

}, {"492":492}];
window.modules["490"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _declaration = require(493);

var _declaration2 = _interopRequireDefault(_declaration);

var _comment = require(491);

var _comment2 = _interopRequireDefault(_comment);

var _node = require(492);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function cleanSource(nodes) {
    return nodes.map(function (i) {
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}

/**
 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 *
 * @extends Node
 * @abstract
 */

var Container = function (_Node) {
    _inherits(Container, _Node);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, _Node.apply(this, arguments));
    }

    Container.prototype.push = function push(child) {
        child.parent = this;
        this.nodes.push(child);
        return this;
    };

    /**
     * Iterates through the container’s immediate children,
     * calling `callback` for each child.
     *
     * Returning `false` in the callback will break iteration.
     *
     * This method only iterates through the container’s immediate children.
     * If you need to recursively iterate through all the container’s descendant
     * nodes, use {@link Container#walk}.
     *
     * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
     * if you are mutating the array of child nodes during iteration.
     * PostCSS will adjust the current index to match the mutations.
     *
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * const root = postcss.parse('a { color: black; z-index: 1 }');
     * const rule = root.first;
     *
     * for ( let decl of rule.nodes ) {
     *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
     *     // Cycle will be infinite, because cloneBefore moves the current node
     *     // to the next index
     * }
     *
     * rule.each(decl => {
     *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
     *     // Will be executed only for color and z-index
     * });
     */


    Container.prototype.each = function each(callback) {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};

        this.lastEach += 1;
        var id = this.lastEach;
        this.indexes[id] = 0;

        if (!this.nodes) return undefined;

        var index = void 0,
            result = void 0;
        while (this.indexes[id] < this.nodes.length) {
            index = this.indexes[id];
            result = callback(this.nodes[index], index);
            if (result === false) break;

            this.indexes[id] += 1;
        }

        delete this.indexes[id];

        return result;
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each node.
     *
     * Like container.each(), this method is safe to use
     * if you are mutating arrays during iteration.
     *
     * If you only need to iterate through the container’s immediate children,
     * use {@link Container#each}.
     *
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walk(node => {
     *   // Traverses all descendant nodes.
     * });
     */


    Container.prototype.walk = function walk(callback) {
        return this.each(function (child, i) {
            var result = callback(child, i);
            if (result !== false && child.walk) {
                result = child.walk(callback);
            }
            return result;
        });
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each declaration node.
     *
     * If you pass a filter, iteration will only happen over declarations
     * with matching properties.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {string|RegExp} [prop]   - string or regular expression
     *                                   to filter declarations by property name
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walkDecls(decl => {
     *   checkPropertySupport(decl.prop);
     * });
     *
     * root.walkDecls('border-radius', decl => {
     *   decl.remove();
     * });
     *
     * root.walkDecls(/^background/, decl => {
     *   decl.value = takeFirstColorFromGradient(decl.value);
     * });
     */


    Container.prototype.walkDecls = function walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk(function (child, i) {
                if (child.type === 'decl') {
                    return callback(child, i);
                }
            });
        } else if (prop instanceof RegExp) {
            return this.walk(function (child, i) {
                if (child.type === 'decl' && prop.test(child.prop)) {
                    return callback(child, i);
                }
            });
        } else {
            return this.walk(function (child, i) {
                if (child.type === 'decl' && child.prop === prop) {
                    return callback(child, i);
                }
            });
        }
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each rule node.
     *
     * If you pass a filter, iteration will only happen over rules
     * with matching selectors.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {string|RegExp} [selector] - string or regular expression
     *                                     to filter rules by selector
     * @param {childIterator} callback   - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * const selectors = [];
     * root.walkRules(rule => {
     *   selectors.push(rule.selector);
     * });
     * console.log(`Your CSS uses ${selectors.length} selectors`);
     */


    Container.prototype.walkRules = function walkRules(selector, callback) {
        if (!callback) {
            callback = selector;

            return this.walk(function (child, i) {
                if (child.type === 'rule') {
                    return callback(child, i);
                }
            });
        } else if (selector instanceof RegExp) {
            return this.walk(function (child, i) {
                if (child.type === 'rule' && selector.test(child.selector)) {
                    return callback(child, i);
                }
            });
        } else {
            return this.walk(function (child, i) {
                if (child.type === 'rule' && child.selector === selector) {
                    return callback(child, i);
                }
            });
        }
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each at-rule node.
     *
     * If you pass a filter, iteration will only happen over at-rules
     * that have matching names.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {string|RegExp} [name]   - string or regular expression
     *                                   to filter at-rules by name
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walkAtRules(rule => {
     *   if ( isOld(rule.name) ) rule.remove();
     * });
     *
     * let first = false;
     * root.walkAtRules('charset', rule => {
     *   if ( !first ) {
     *     first = true;
     *   } else {
     *     rule.remove();
     *   }
     * });
     */


    Container.prototype.walkAtRules = function walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk(function (child, i) {
                if (child.type === 'atrule') {
                    return callback(child, i);
                }
            });
        } else if (name instanceof RegExp) {
            return this.walk(function (child, i) {
                if (child.type === 'atrule' && name.test(child.name)) {
                    return callback(child, i);
                }
            });
        } else {
            return this.walk(function (child, i) {
                if (child.type === 'atrule' && child.name === name) {
                    return callback(child, i);
                }
            });
        }
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each comment node.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walkComments(comment => {
     *   comment.remove();
     * });
     */


    Container.prototype.walkComments = function walkComments(callback) {
        return this.walk(function (child, i) {
            if (child.type === 'comment') {
                return callback(child, i);
            }
        });
    };

    /**
     * Inserts new nodes to the end of the container.
     *
     * @param {...(Node|object|string|Node[])} children - new nodes
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
     * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
     * rule.append(decl1, decl2);
     *
     * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
     * root.append({ selector: 'a' });                       // rule
     * rule.append({ prop: 'color', value: 'black' });       // declaration
     * rule.append({ text: 'Comment' })                      // comment
     *
     * root.append('a {}');
     * root.first.append('color: black; z-index: 1');
     */


    Container.prototype.append = function append() {
        for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
            children[_key] = arguments[_key];
        }

        for (var _iterator = children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var child = _ref;

            var nodes = this.normalize(child, this.last);
            for (var _iterator2 = nodes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                var _ref2;

                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }

                var node = _ref2;
                this.nodes.push(node);
            }
        }
        return this;
    };

    /**
     * Inserts new nodes to the start of the container.
     *
     * @param {...(Node|object|string|Node[])} children - new nodes
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
     * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
     * rule.prepend(decl1, decl2);
     *
     * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
     * root.append({ selector: 'a' });                       // rule
     * rule.append({ prop: 'color', value: 'black' });       // declaration
     * rule.append({ text: 'Comment' })                      // comment
     *
     * root.append('a {}');
     * root.first.append('color: black; z-index: 1');
     */


    Container.prototype.prepend = function prepend() {
        for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            children[_key2] = arguments[_key2];
        }

        children = children.reverse();
        for (var _iterator3 = children, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }

            var child = _ref3;

            var nodes = this.normalize(child, this.first, 'prepend').reverse();
            for (var _iterator4 = nodes, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
                var _ref4;

                if (_isArray4) {
                    if (_i4 >= _iterator4.length) break;
                    _ref4 = _iterator4[_i4++];
                } else {
                    _i4 = _iterator4.next();
                    if (_i4.done) break;
                    _ref4 = _i4.value;
                }

                var node = _ref4;
                this.nodes.unshift(node);
            }for (var id in this.indexes) {
                this.indexes[id] = this.indexes[id] + nodes.length;
            }
        }
        return this;
    };

    Container.prototype.cleanRaws = function cleanRaws(keepBetween) {
        _Node.prototype.cleanRaws.call(this, keepBetween);
        if (this.nodes) {
            for (var _iterator5 = this.nodes, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
                var _ref5;

                if (_isArray5) {
                    if (_i5 >= _iterator5.length) break;
                    _ref5 = _iterator5[_i5++];
                } else {
                    _i5 = _iterator5.next();
                    if (_i5.done) break;
                    _ref5 = _i5.value;
                }

                var node = _ref5;
                node.cleanRaws(keepBetween);
            }
        }
    };

    /**
     * Insert new node before old node within the container.
     *
     * @param {Node|number} exist             - child or child’s index.
     * @param {Node|object|string|Node[]} add - new node
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }));
     */


    Container.prototype.insertBefore = function insertBefore(exist, add) {
        exist = this.index(exist);

        var type = exist === 0 ? 'prepend' : false;
        var nodes = this.normalize(add, this.nodes[exist], type).reverse();
        for (var _iterator6 = nodes, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
            var _ref6;

            if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref6 = _iterator6[_i6++];
            } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref6 = _i6.value;
            }

            var node = _ref6;
            this.nodes.splice(exist, 0, node);
        }var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (exist <= index) {
                this.indexes[id] = index + nodes.length;
            }
        }

        return this;
    };

    /**
     * Insert new node after old node within the container.
     *
     * @param {Node|number} exist             - child or child’s index
     * @param {Node|object|string|Node[]} add - new node
     *
     * @return {Node} this node for methods chain
     */


    Container.prototype.insertAfter = function insertAfter(exist, add) {
        exist = this.index(exist);

        var nodes = this.normalize(add, this.nodes[exist]).reverse();
        for (var _iterator7 = nodes, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
            var _ref7;

            if (_isArray7) {
                if (_i7 >= _iterator7.length) break;
                _ref7 = _iterator7[_i7++];
            } else {
                _i7 = _iterator7.next();
                if (_i7.done) break;
                _ref7 = _i7.value;
            }

            var node = _ref7;
            this.nodes.splice(exist + 1, 0, node);
        }var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (exist < index) {
                this.indexes[id] = index + nodes.length;
            }
        }

        return this;
    };

    /**
     * Removes node from the container and cleans the parent properties
     * from the node and its children.
     *
     * @param {Node|number} child - child or child’s index
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * rule.nodes.length  //=> 5
     * rule.removeChild(decl);
     * rule.nodes.length  //=> 4
     * decl.parent        //=> undefined
     */


    Container.prototype.removeChild = function removeChild(child) {
        child = this.index(child);
        this.nodes[child].parent = undefined;
        this.nodes.splice(child, 1);

        var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (index >= child) {
                this.indexes[id] = index - 1;
            }
        }

        return this;
    };

    /**
     * Removes all children from the container
     * and cleans their parent properties.
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * rule.removeAll();
     * rule.nodes.length //=> 0
     */


    Container.prototype.removeAll = function removeAll() {
        for (var _iterator8 = this.nodes, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
            var _ref8;

            if (_isArray8) {
                if (_i8 >= _iterator8.length) break;
                _ref8 = _iterator8[_i8++];
            } else {
                _i8 = _iterator8.next();
                if (_i8.done) break;
                _ref8 = _i8.value;
            }

            var node = _ref8;
            node.parent = undefined;
        }this.nodes = [];
        return this;
    };

    /**
     * Passes all declaration values within the container that match pattern
     * through callback, replacing those values with the returned result
     * of callback.
     *
     * This method is useful if you are using a custom unit or function
     * and need to iterate through all values.
     *
     * @param {string|RegExp} pattern      - replace pattern
     * @param {object} opts                - options to speed up the search
     * @param {string|string[]} opts.props - an array of property names
     * @param {string} opts.fast           - string that’s used
     *                                       to narrow down values and speed up
                                             the regexp search
     * @param {function|string} callback   - string to replace pattern
     *                                       or callback that returns a new
     *                                       value.
     *                                       The callback will receive
     *                                       the same arguments as those
     *                                       passed to a function parameter
     *                                       of `String#replace`.
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
     *   return 15 * parseInt(string) + 'px';
     * });
     */


    Container.prototype.replaceValues = function replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }

        this.walkDecls(function (decl) {
            if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
            if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;

            decl.value = decl.value.replace(pattern, callback);
        });

        return this;
    };

    /**
     * Returns `true` if callback returns `true`
     * for all of the container’s children.
     *
     * @param {childCondition} condition - iterator returns true or false.
     *
     * @return {boolean} is every child pass condition
     *
     * @example
     * const noPrefixes = rule.every(i => i.prop[0] !== '-');
     */


    Container.prototype.every = function every(condition) {
        return this.nodes.every(condition);
    };

    /**
     * Returns `true` if callback returns `true` for (at least) one
     * of the container’s children.
     *
     * @param {childCondition} condition - iterator returns true or false.
     *
     * @return {boolean} is some child pass condition
     *
     * @example
     * const hasPrefix = rule.some(i => i.prop[0] === '-');
     */


    Container.prototype.some = function some(condition) {
        return this.nodes.some(condition);
    };

    /**
     * Returns a `child`’s index within the {@link Container#nodes} array.
     *
     * @param {Node} child - child of the current container.
     *
     * @return {number} child index
     *
     * @example
     * rule.index( rule.nodes[2] ) //=> 2
     */


    Container.prototype.index = function index(child) {
        if (typeof child === 'number') {
            return child;
        } else {
            return this.nodes.indexOf(child);
        }
    };

    /**
     * The container’s first child.
     *
     * @type {Node}
     *
     * @example
     * rule.first == rules.nodes[0];
     */


    Container.prototype.normalize = function normalize(nodes, sample) {
        var _this2 = this;

        if (typeof nodes === 'string') {
            var parse = require(494);
            nodes = cleanSource(parse(nodes).nodes);
        } else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (var _iterator9 = nodes, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
                var _ref9;

                if (_isArray9) {
                    if (_i9 >= _iterator9.length) break;
                    _ref9 = _iterator9[_i9++];
                } else {
                    _i9 = _iterator9.next();
                    if (_i9.done) break;
                    _ref9 = _i9.value;
                }

                var i = _ref9;

                if (i.parent) i.parent.removeChild(i, 'ignore');
            }
        } else if (nodes.type === 'root') {
            nodes = nodes.nodes.slice(0);
            for (var _iterator10 = nodes, _isArray10 = Array.isArray(_iterator10), _i11 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
                var _ref10;

                if (_isArray10) {
                    if (_i11 >= _iterator10.length) break;
                    _ref10 = _iterator10[_i11++];
                } else {
                    _i11 = _iterator10.next();
                    if (_i11.done) break;
                    _ref10 = _i11.value;
                }

                var _i10 = _ref10;

                if (_i10.parent) _i10.parent.removeChild(_i10, 'ignore');
            }
        } else if (nodes.type) {
            nodes = [nodes];
        } else if (nodes.prop) {
            if (typeof nodes.value === 'undefined') {
                throw new Error('Value field is missed in node creation');
            } else if (typeof nodes.value !== 'string') {
                nodes.value = String(nodes.value);
            }
            nodes = [new _declaration2.default(nodes)];
        } else if (nodes.selector) {
            var Rule = require(495);
            nodes = [new Rule(nodes)];
        } else if (nodes.name) {
            var AtRule = require(489);
            nodes = [new AtRule(nodes)];
        } else if (nodes.text) {
            nodes = [new _comment2.default(nodes)];
        } else {
            throw new Error('Unknown node type in node creation');
        }

        var processed = nodes.map(function (i) {
            if (typeof i.before !== 'function') i = _this2.rebuild(i);

            if (i.parent) i.parent.removeChild(i);
            if (typeof i.raws.before === 'undefined') {
                if (sample && typeof sample.raws.before !== 'undefined') {
                    i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
                }
            }
            i.parent = _this2;
            return i;
        });

        return processed;
    };

    Container.prototype.rebuild = function rebuild(node, parent) {
        var _this3 = this;

        var fix = void 0;
        if (node.type === 'root') {
            var Root = require(496);
            fix = new Root();
        } else if (node.type === 'atrule') {
            var AtRule = require(489);
            fix = new AtRule();
        } else if (node.type === 'rule') {
            var Rule = require(495);
            fix = new Rule();
        } else if (node.type === 'decl') {
            fix = new _declaration2.default();
        } else if (node.type === 'comment') {
            fix = new _comment2.default();
        }

        for (var i in node) {
            if (i === 'nodes') {
                fix.nodes = node.nodes.map(function (j) {
                    return _this3.rebuild(j, fix);
                });
            } else if (i === 'parent' && parent) {
                fix.parent = parent;
            } else if (node.hasOwnProperty(i)) {
                fix[i] = node[i];
            }
        }

        return fix;
    };

    /**
     * @memberof Container#
     * @member {Node[]} nodes - an array containing the container’s children
     *
     * @example
     * const root = postcss.parse('a { color: black }');
     * root.nodes.length           //=> 1
     * root.nodes[0].selector      //=> 'a'
     * root.nodes[0].nodes[0].prop //=> 'color'
     */

    _createClass(Container, [{
        key: 'first',
        get: function get() {
            if (!this.nodes) return undefined;
            return this.nodes[0];
        }

        /**
         * The container’s last child.
         *
         * @type {Node}
         *
         * @example
         * rule.last == rule.nodes[rule.nodes.length - 1];
         */

    }, {
        key: 'last',
        get: function get() {
            if (!this.nodes) return undefined;
            return this.nodes[this.nodes.length - 1];
        }
    }]);

    return Container;
}(_node2.default);

exports.default = Container;

/**
 * @callback childCondition
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @param {Node[]} nodes - all container children
 * @return {boolean}
 */

/**
 * @callback childIterator
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @return {false|undefined} returning `false` will break iteration
 */

module.exports = exports['default'];

}, {"489":489,"491":491,"492":492,"493":493,"494":494,"495":495,"496":496}];
window.modules["497"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _supportsColor = require(20);

var _supportsColor2 = _interopRequireDefault(_supportsColor);

var _chalk = require(20);

var _chalk2 = _interopRequireDefault(_chalk);

var _terminalHighlight = require(498);

var _terminalHighlight2 = _interopRequireDefault(_terminalHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the {@link Node#error} method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * @example
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if ( error.name === 'CssSyntaxError' ) {
 *     error //=> CssSyntaxError
 *   }
 * }
 *
 * @example
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' });
 */
var CssSyntaxError = function () {

    /**
     * @param {string} message  - error message
     * @param {number} [line]   - source line of the error
     * @param {number} [column] - source column of the error
     * @param {string} [source] - source code of the broken file
     * @param {string} [file]   - absolute path to the broken file
     * @param {string} [plugin] - PostCSS plugin name, if error came from plugin
     */
    function CssSyntaxError(message, line, column, source, file, plugin) {
        _classCallCheck(this, CssSyntaxError);

        /**
         * @member {string} - Always equal to `'CssSyntaxError'`. You should
         *                    always check error type
         *                    by `error.name === 'CssSyntaxError'` instead of
         *                    `error instanceof CssSyntaxError`, because
         *                    npm could have several PostCSS versions.
         *
         * @example
         * if ( error.name === 'CssSyntaxError' ) {
         *   error //=> CssSyntaxError
         * }
         */
        this.name = 'CssSyntaxError';
        /**
         * @member {string} - Error message.
         *
         * @example
         * error.message //=> 'Unclosed block'
         */
        this.reason = message;

        if (file) {
            /**
             * @member {string} - Absolute path to the broken file.
             *
             * @example
             * error.file       //=> 'a.sass'
             * error.input.file //=> 'a.css'
             */
            this.file = file;
        }
        if (source) {
            /**
             * @member {string} - Source code of the broken file.
             *
             * @example
             * error.source       //=> 'a { b {} }'
             * error.input.column //=> 'a b { }'
             */
            this.source = source;
        }
        if (plugin) {
            /**
             * @member {string} - Plugin name, if error came from plugin.
             *
             * @example
             * error.plugin //=> 'postcss-vars'
             */
            this.plugin = plugin;
        }
        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
            /**
             * @member {number} - Source line of the error.
             *
             * @example
             * error.line       //=> 2
             * error.input.line //=> 4
             */
            this.line = line;
            /**
             * @member {number} - Source column of the error.
             *
             * @example
             * error.column       //=> 1
             * error.input.column //=> 4
             */
            this.column = column;
        }

        this.setMessage();

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError);
        }
    }

    CssSyntaxError.prototype.setMessage = function setMessage() {
        /**
         * @member {string} - Full error text in the GNU error format
         *                    with plugin, file, line and column.
         *
         * @example
         * error.message //=> 'a.css:1:1: Unclosed block'
         */
        this.message = this.plugin ? this.plugin + ': ' : '';
        this.message += this.file ? this.file : '<css input>';
        if (typeof this.line !== 'undefined') {
            this.message += ':' + this.line + ':' + this.column;
        }
        this.message += ': ' + this.reason;
    };

    /**
     * Returns a few lines of CSS source that caused the error.
     *
     * If the CSS has an input source map without `sourceContent`,
     * this method will return an empty string.
     *
     * @param {boolean} [color] whether arrow will be colored red by terminal
     *                          color codes. By default, PostCSS will detect
     *                          color support by `process.stdout.isTTY`
     *                          and `window.process.env.NODE_DISABLE_COLORS`.
     *
     * @example
     * error.showSourceCode() //=> "  4 | }
     *                        //      5 | a {
     *                        //    > 6 |   bad
     *                        //        |   ^
     *                        //      7 | }
     *                        //      8 | b {"
     *
     * @return {string} few lines of CSS source that caused the error
     */


    CssSyntaxError.prototype.showSourceCode = function showSourceCode(color) {
        var _this = this;

        if (!this.source) return '';

        var css = this.source;
        if (typeof color === 'undefined') color = _supportsColor2.default.stdout;
        if (color) css = (0, _terminalHighlight2.default)(css);

        var lines = css.split(/\r?\n/);
        var start = Math.max(this.line - 3, 0);
        var end = Math.min(this.line + 2, lines.length);

        var maxWidth = String(end).length;

        function mark(text) {
            if (color && _chalk2.default.red) {
                return _chalk2.default.red.bold(text);
            } else {
                return text;
            }
        }
        function aside(text) {
            if (color && _chalk2.default.gray) {
                return _chalk2.default.gray(text);
            } else {
                return text;
            }
        }

        return lines.slice(start, end).map(function (line, index) {
            var number = start + 1 + index;
            var gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';
            if (number === _this.line) {
                var spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
                return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^');
            } else {
                return ' ' + aside(gutter) + line;
            }
        }).join('\n');
    };

    /**
     * Returns error position, message and source code of the broken part.
     *
     * @example
     * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
     *                  //    > 1 | a {
     *                  //        | ^"
     *
     * @return {string} error position, message and source code
     */


    CssSyntaxError.prototype.toString = function toString() {
        var code = this.showSourceCode();
        if (code) {
            code = '\n\n' + code + '\n';
        }
        return this.name + ': ' + this.message + code;
    };

    /**
     * @memberof CssSyntaxError#
     * @member {Input} input - Input object with PostCSS internal information
     *                         about input file. If input has source map
     *                         from previous tool, PostCSS will use origin
     *                         (for example, Sass) source. You can use this
     *                         object to get PostCSS input source.
     *
     * @example
     * error.input.file //=> 'a.css'
     * error.file       //=> 'a.sass'
     */

    return CssSyntaxError;
}();

exports.default = CssSyntaxError;
module.exports = exports['default'];

}, {"20":20,"498":498}];
window.modules["493"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _node = require(492);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a CSS declaration.
 *
 * @extends Node
 *
 * @example
 * const root = postcss.parse('a { color: black }');
 * const decl = root.first.first;
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 */
var Declaration = function (_Node) {
  _inherits(Declaration, _Node);

  function Declaration(defaults) {
    _classCallCheck(this, Declaration);

    var _this = _possibleConstructorReturn(this, _Node.call(this, defaults));

    _this.type = 'decl';
    return _this;
  }

  /**
   * @memberof Declaration#
   * @member {string} prop - the declaration’s property name
   *
   * @example
   * const root = postcss.parse('a { color: black }');
   * const decl = root.first.first;
   * decl.prop //=> 'color'
   */

  /**
   * @memberof Declaration#
   * @member {string} value - the declaration’s value
   *
   * @example
   * const root = postcss.parse('a { color: black }');
   * const decl = root.first.first;
   * decl.value //=> 'black'
   */

  /**
   * @memberof Declaration#
   * @member {boolean} important - `true` if the declaration
   *                               has an !important annotation.
   *
   * @example
   * const root = postcss.parse('a { color: black !important; color: red }');
   * root.first.first.important //=> true
   * root.first.last.important  //=> undefined
   */

  /**
   * @memberof Declaration#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `between`: the symbols between the property and value
   *   for declarations.
   * * `important`: the content of the important statement,
   *   if it is not just `!important`.
   *
   * PostCSS cleans declaration from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('a {\n  color:black\n}')
   * root.first.first.raws //=> { before: '\n  ', between: ':' }
   */

  return Declaration;
}(_node2.default);

exports.default = Declaration;
module.exports = exports['default'];

}, {"492":492}];
window.modules["521"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _container = require(522);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents an at-rule.
 *
 * If it’s followed in the CSS by a {} block, this node will have
 * a nodes property representing its children.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('@charset "UTF-8"; @media print {}');
 *
 * const charset = root.first;
 * charset.type  //=> 'atrule'
 * charset.nodes //=> undefined
 *
 * const media = root.last;
 * media.nodes   //=> []
 */
var AtRule = function (_Container) {
  _inherits(AtRule, _Container);

  function AtRule(defaults) {
    _classCallCheck(this, AtRule);

    var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));

    _this.type = 'atrule';
    return _this;
  }

  AtRule.prototype.append = function append() {
    var _Container$prototype$;

    if (!this.nodes) this.nodes = [];

    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    return (_Container$prototype$ = _Container.prototype.append).call.apply(_Container$prototype$, [this].concat(children));
  };

  AtRule.prototype.prepend = function prepend() {
    var _Container$prototype$2;

    if (!this.nodes) this.nodes = [];

    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    return (_Container$prototype$2 = _Container.prototype.prepend).call.apply(_Container$prototype$2, [this].concat(children));
  };

  /**
   * @memberof AtRule#
   * @member {string} name - the at-rule’s name immediately follows the `@`
   *
   * @example
   * const root  = postcss.parse('@media print {}');
   * media.name //=> 'media'
   * const media = root.first;
   */

  /**
   * @memberof AtRule#
   * @member {string} params - the at-rule’s parameters, the values
   *                           that follow the at-rule’s name but precede
   *                           any {} block
   *
   * @example
   * const root  = postcss.parse('@media print, screen {}');
   * const media = root.first;
   * media.params //=> 'print, screen'
   */

  /**
   * @memberof AtRule#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `after`: the space symbols after the last child of the node
   *   to the end of the node.
   * * `between`: the symbols between the property and value
   *   for declarations, selector and `{` for rules, or last parameter
   *   and `{` for at-rules.
   * * `semicolon`: contains true if the last child has
   *   an (optional) semicolon.
   * * `afterName`: the space between the at-rule name and its parameters.
   *
   * PostCSS cleans at-rule parameters from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('  @media\nprint {\n}')
   * root.first.first.raws //=> { before: '  ',
   *                       //     between: ' ',
   *                       //     afterName: '\n',
   *                       //     after: '\n' }
   */


  return AtRule;
}(_container2.default);

exports.default = AtRule;
module.exports = exports['default'];

}, {"522":522}];
window.modules["523"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _node = require(524);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a comment between declarations or statements (rule and at-rules).
 *
 * Comments inside selectors, at-rule parameters, or declaration values
 * will be stored in the `raws` properties explained above.
 *
 * @extends Node
 */
var Comment = function (_Node) {
  _inherits(Comment, _Node);

  function Comment(defaults) {
    _classCallCheck(this, Comment);

    var _this = _possibleConstructorReturn(this, _Node.call(this, defaults));

    _this.type = 'comment';
    return _this;
  }

  /**
   * @memberof Comment#
   * @member {string} text - the comment’s text
   */

  /**
   * @memberof Comment#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node.
   * * `left`: the space symbols between `/*` and the comment’s text.
   * * `right`: the space symbols between the comment’s text.
   */


  return Comment;
}(_node2.default);

exports.default = Comment;
module.exports = exports['default'];

}, {"524":524}];
window.modules["522"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _declaration = require(526);

var _declaration2 = _interopRequireDefault(_declaration);

var _comment = require(523);

var _comment2 = _interopRequireDefault(_comment);

var _node = require(524);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function cleanSource(nodes) {
    return nodes.map(function (i) {
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}

/**
 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 *
 * @extends Node
 * @abstract
 */

var Container = function (_Node) {
    _inherits(Container, _Node);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, _Node.apply(this, arguments));
    }

    Container.prototype.push = function push(child) {
        child.parent = this;
        this.nodes.push(child);
        return this;
    };

    /**
     * Iterates through the container’s immediate children,
     * calling `callback` for each child.
     *
     * Returning `false` in the callback will break iteration.
     *
     * This method only iterates through the container’s immediate children.
     * If you need to recursively iterate through all the container’s descendant
     * nodes, use {@link Container#walk}.
     *
     * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
     * if you are mutating the array of child nodes during iteration.
     * PostCSS will adjust the current index to match the mutations.
     *
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * const root = postcss.parse('a { color: black; z-index: 1 }');
     * const rule = root.first;
     *
     * for ( let decl of rule.nodes ) {
     *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
     *     // Cycle will be infinite, because cloneBefore moves the current node
     *     // to the next index
     * }
     *
     * rule.each(decl => {
     *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
     *     // Will be executed only for color and z-index
     * });
     */


    Container.prototype.each = function each(callback) {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};

        this.lastEach += 1;
        var id = this.lastEach;
        this.indexes[id] = 0;

        if (!this.nodes) return undefined;

        var index = void 0,
            result = void 0;
        while (this.indexes[id] < this.nodes.length) {
            index = this.indexes[id];
            result = callback(this.nodes[index], index);
            if (result === false) break;

            this.indexes[id] += 1;
        }

        delete this.indexes[id];

        return result;
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each node.
     *
     * Like container.each(), this method is safe to use
     * if you are mutating arrays during iteration.
     *
     * If you only need to iterate through the container’s immediate children,
     * use {@link Container#each}.
     *
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walk(node => {
     *   // Traverses all descendant nodes.
     * });
     */


    Container.prototype.walk = function walk(callback) {
        return this.each(function (child, i) {
            var result = callback(child, i);
            if (result !== false && child.walk) {
                result = child.walk(callback);
            }
            return result;
        });
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each declaration node.
     *
     * If you pass a filter, iteration will only happen over declarations
     * with matching properties.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {string|RegExp} [prop]   - string or regular expression
     *                                   to filter declarations by property name
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walkDecls(decl => {
     *   checkPropertySupport(decl.prop);
     * });
     *
     * root.walkDecls('border-radius', decl => {
     *   decl.remove();
     * });
     *
     * root.walkDecls(/^background/, decl => {
     *   decl.value = takeFirstColorFromGradient(decl.value);
     * });
     */


    Container.prototype.walkDecls = function walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk(function (child, i) {
                if (child.type === 'decl') {
                    return callback(child, i);
                }
            });
        } else if (prop instanceof RegExp) {
            return this.walk(function (child, i) {
                if (child.type === 'decl' && prop.test(child.prop)) {
                    return callback(child, i);
                }
            });
        } else {
            return this.walk(function (child, i) {
                if (child.type === 'decl' && child.prop === prop) {
                    return callback(child, i);
                }
            });
        }
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each rule node.
     *
     * If you pass a filter, iteration will only happen over rules
     * with matching selectors.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {string|RegExp} [selector] - string or regular expression
     *                                     to filter rules by selector
     * @param {childIterator} callback   - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * const selectors = [];
     * root.walkRules(rule => {
     *   selectors.push(rule.selector);
     * });
     * console.log(`Your CSS uses ${selectors.length} selectors`);
     */


    Container.prototype.walkRules = function walkRules(selector, callback) {
        if (!callback) {
            callback = selector;

            return this.walk(function (child, i) {
                if (child.type === 'rule') {
                    return callback(child, i);
                }
            });
        } else if (selector instanceof RegExp) {
            return this.walk(function (child, i) {
                if (child.type === 'rule' && selector.test(child.selector)) {
                    return callback(child, i);
                }
            });
        } else {
            return this.walk(function (child, i) {
                if (child.type === 'rule' && child.selector === selector) {
                    return callback(child, i);
                }
            });
        }
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each at-rule node.
     *
     * If you pass a filter, iteration will only happen over at-rules
     * that have matching names.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {string|RegExp} [name]   - string or regular expression
     *                                   to filter at-rules by name
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walkAtRules(rule => {
     *   if ( isOld(rule.name) ) rule.remove();
     * });
     *
     * let first = false;
     * root.walkAtRules('charset', rule => {
     *   if ( !first ) {
     *     first = true;
     *   } else {
     *     rule.remove();
     *   }
     * });
     */


    Container.prototype.walkAtRules = function walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk(function (child, i) {
                if (child.type === 'atrule') {
                    return callback(child, i);
                }
            });
        } else if (name instanceof RegExp) {
            return this.walk(function (child, i) {
                if (child.type === 'atrule' && name.test(child.name)) {
                    return callback(child, i);
                }
            });
        } else {
            return this.walk(function (child, i) {
                if (child.type === 'atrule' && child.name === name) {
                    return callback(child, i);
                }
            });
        }
    };

    /**
     * Traverses the container’s descendant nodes, calling callback
     * for each comment node.
     *
     * Like {@link Container#each}, this method is safe
     * to use if you are mutating arrays during iteration.
     *
     * @param {childIterator} callback - iterator receives each node and index
     *
     * @return {false|undefined} returns `false` if iteration was broke
     *
     * @example
     * root.walkComments(comment => {
     *   comment.remove();
     * });
     */


    Container.prototype.walkComments = function walkComments(callback) {
        return this.walk(function (child, i) {
            if (child.type === 'comment') {
                return callback(child, i);
            }
        });
    };

    /**
     * Inserts new nodes to the end of the container.
     *
     * @param {...(Node|object|string|Node[])} children - new nodes
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
     * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
     * rule.append(decl1, decl2);
     *
     * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
     * root.append({ selector: 'a' });                       // rule
     * rule.append({ prop: 'color', value: 'black' });       // declaration
     * rule.append({ text: 'Comment' })                      // comment
     *
     * root.append('a {}');
     * root.first.append('color: black; z-index: 1');
     */


    Container.prototype.append = function append() {
        for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
            children[_key] = arguments[_key];
        }

        for (var _iterator = children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var child = _ref;

            var nodes = this.normalize(child, this.last);
            for (var _iterator2 = nodes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                var _ref2;

                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }

                var node = _ref2;
                this.nodes.push(node);
            }
        }
        return this;
    };

    /**
     * Inserts new nodes to the start of the container.
     *
     * @param {...(Node|object|string|Node[])} children - new nodes
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
     * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
     * rule.prepend(decl1, decl2);
     *
     * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
     * root.append({ selector: 'a' });                       // rule
     * rule.append({ prop: 'color', value: 'black' });       // declaration
     * rule.append({ text: 'Comment' })                      // comment
     *
     * root.append('a {}');
     * root.first.append('color: black; z-index: 1');
     */


    Container.prototype.prepend = function prepend() {
        for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            children[_key2] = arguments[_key2];
        }

        children = children.reverse();
        for (var _iterator3 = children, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }

            var child = _ref3;

            var nodes = this.normalize(child, this.first, 'prepend').reverse();
            for (var _iterator4 = nodes, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
                var _ref4;

                if (_isArray4) {
                    if (_i4 >= _iterator4.length) break;
                    _ref4 = _iterator4[_i4++];
                } else {
                    _i4 = _iterator4.next();
                    if (_i4.done) break;
                    _ref4 = _i4.value;
                }

                var node = _ref4;
                this.nodes.unshift(node);
            }for (var id in this.indexes) {
                this.indexes[id] = this.indexes[id] + nodes.length;
            }
        }
        return this;
    };

    Container.prototype.cleanRaws = function cleanRaws(keepBetween) {
        _Node.prototype.cleanRaws.call(this, keepBetween);
        if (this.nodes) {
            for (var _iterator5 = this.nodes, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
                var _ref5;

                if (_isArray5) {
                    if (_i5 >= _iterator5.length) break;
                    _ref5 = _iterator5[_i5++];
                } else {
                    _i5 = _iterator5.next();
                    if (_i5.done) break;
                    _ref5 = _i5.value;
                }

                var node = _ref5;
                node.cleanRaws(keepBetween);
            }
        }
    };

    /**
     * Insert new node before old node within the container.
     *
     * @param {Node|number} exist             - child or child’s index.
     * @param {Node|object|string|Node[]} add - new node
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }));
     */


    Container.prototype.insertBefore = function insertBefore(exist, add) {
        exist = this.index(exist);

        var type = exist === 0 ? 'prepend' : false;
        var nodes = this.normalize(add, this.nodes[exist], type).reverse();
        for (var _iterator6 = nodes, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
            var _ref6;

            if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref6 = _iterator6[_i6++];
            } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref6 = _i6.value;
            }

            var node = _ref6;
            this.nodes.splice(exist, 0, node);
        }var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (exist <= index) {
                this.indexes[id] = index + nodes.length;
            }
        }

        return this;
    };

    /**
     * Insert new node after old node within the container.
     *
     * @param {Node|number} exist             - child or child’s index
     * @param {Node|object|string|Node[]} add - new node
     *
     * @return {Node} this node for methods chain
     */


    Container.prototype.insertAfter = function insertAfter(exist, add) {
        exist = this.index(exist);

        var nodes = this.normalize(add, this.nodes[exist]).reverse();
        for (var _iterator7 = nodes, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
            var _ref7;

            if (_isArray7) {
                if (_i7 >= _iterator7.length) break;
                _ref7 = _iterator7[_i7++];
            } else {
                _i7 = _iterator7.next();
                if (_i7.done) break;
                _ref7 = _i7.value;
            }

            var node = _ref7;
            this.nodes.splice(exist + 1, 0, node);
        }var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (exist < index) {
                this.indexes[id] = index + nodes.length;
            }
        }

        return this;
    };

    /**
     * Removes node from the container and cleans the parent properties
     * from the node and its children.
     *
     * @param {Node|number} child - child or child’s index
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * rule.nodes.length  //=> 5
     * rule.removeChild(decl);
     * rule.nodes.length  //=> 4
     * decl.parent        //=> undefined
     */


    Container.prototype.removeChild = function removeChild(child) {
        child = this.index(child);
        this.nodes[child].parent = undefined;
        this.nodes.splice(child, 1);

        var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (index >= child) {
                this.indexes[id] = index - 1;
            }
        }

        return this;
    };

    /**
     * Removes all children from the container
     * and cleans their parent properties.
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * rule.removeAll();
     * rule.nodes.length //=> 0
     */


    Container.prototype.removeAll = function removeAll() {
        for (var _iterator8 = this.nodes, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
            var _ref8;

            if (_isArray8) {
                if (_i8 >= _iterator8.length) break;
                _ref8 = _iterator8[_i8++];
            } else {
                _i8 = _iterator8.next();
                if (_i8.done) break;
                _ref8 = _i8.value;
            }

            var node = _ref8;
            node.parent = undefined;
        }this.nodes = [];
        return this;
    };

    /**
     * Passes all declaration values within the container that match pattern
     * through callback, replacing those values with the returned result
     * of callback.
     *
     * This method is useful if you are using a custom unit or function
     * and need to iterate through all values.
     *
     * @param {string|RegExp} pattern      - replace pattern
     * @param {object} opts                - options to speed up the search
     * @param {string|string[]} opts.props - an array of property names
     * @param {string} opts.fast           - string that’s used
     *                                       to narrow down values and speed up
                                             the regexp search
     * @param {function|string} callback   - string to replace pattern
     *                                       or callback that returns a new
     *                                       value.
     *                                       The callback will receive
     *                                       the same arguments as those
     *                                       passed to a function parameter
     *                                       of `String#replace`.
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
     *   return 15 * parseInt(string) + 'px';
     * });
     */


    Container.prototype.replaceValues = function replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }

        this.walkDecls(function (decl) {
            if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
            if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;

            decl.value = decl.value.replace(pattern, callback);
        });

        return this;
    };

    /**
     * Returns `true` if callback returns `true`
     * for all of the container’s children.
     *
     * @param {childCondition} condition - iterator returns true or false.
     *
     * @return {boolean} is every child pass condition
     *
     * @example
     * const noPrefixes = rule.every(i => i.prop[0] !== '-');
     */


    Container.prototype.every = function every(condition) {
        return this.nodes.every(condition);
    };

    /**
     * Returns `true` if callback returns `true` for (at least) one
     * of the container’s children.
     *
     * @param {childCondition} condition - iterator returns true or false.
     *
     * @return {boolean} is some child pass condition
     *
     * @example
     * const hasPrefix = rule.some(i => i.prop[0] === '-');
     */


    Container.prototype.some = function some(condition) {
        return this.nodes.some(condition);
    };

    /**
     * Returns a `child`’s index within the {@link Container#nodes} array.
     *
     * @param {Node} child - child of the current container.
     *
     * @return {number} child index
     *
     * @example
     * rule.index( rule.nodes[2] ) //=> 2
     */


    Container.prototype.index = function index(child) {
        if (typeof child === 'number') {
            return child;
        } else {
            return this.nodes.indexOf(child);
        }
    };

    /**
     * The container’s first child.
     *
     * @type {Node}
     *
     * @example
     * rule.first == rules.nodes[0];
     */


    Container.prototype.normalize = function normalize(nodes, sample) {
        var _this2 = this;

        if (typeof nodes === 'string') {
            var parse = require(525);
            nodes = cleanSource(parse(nodes).nodes);
        } else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (var _iterator9 = nodes, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
                var _ref9;

                if (_isArray9) {
                    if (_i9 >= _iterator9.length) break;
                    _ref9 = _iterator9[_i9++];
                } else {
                    _i9 = _iterator9.next();
                    if (_i9.done) break;
                    _ref9 = _i9.value;
                }

                var i = _ref9;

                if (i.parent) i.parent.removeChild(i, 'ignore');
            }
        } else if (nodes.type === 'root') {
            nodes = nodes.nodes.slice(0);
            for (var _iterator10 = nodes, _isArray10 = Array.isArray(_iterator10), _i11 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
                var _ref10;

                if (_isArray10) {
                    if (_i11 >= _iterator10.length) break;
                    _ref10 = _iterator10[_i11++];
                } else {
                    _i11 = _iterator10.next();
                    if (_i11.done) break;
                    _ref10 = _i11.value;
                }

                var _i10 = _ref10;

                if (_i10.parent) _i10.parent.removeChild(_i10, 'ignore');
            }
        } else if (nodes.type) {
            nodes = [nodes];
        } else if (nodes.prop) {
            if (typeof nodes.value === 'undefined') {
                throw new Error('Value field is missed in node creation');
            } else if (typeof nodes.value !== 'string') {
                nodes.value = String(nodes.value);
            }
            nodes = [new _declaration2.default(nodes)];
        } else if (nodes.selector) {
            var Rule = require(528);
            nodes = [new Rule(nodes)];
        } else if (nodes.name) {
            var AtRule = require(521);
            nodes = [new AtRule(nodes)];
        } else if (nodes.text) {
            nodes = [new _comment2.default(nodes)];
        } else {
            throw new Error('Unknown node type in node creation');
        }

        var processed = nodes.map(function (i) {
            if (typeof i.before !== 'function') i = _this2.rebuild(i);

            if (i.parent) i.parent.removeChild(i);
            if (typeof i.raws.before === 'undefined') {
                if (sample && typeof sample.raws.before !== 'undefined') {
                    i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
                }
            }
            i.parent = _this2;
            return i;
        });

        return processed;
    };

    Container.prototype.rebuild = function rebuild(node, parent) {
        var _this3 = this;

        var fix = void 0;
        if (node.type === 'root') {
            var Root = require(527);
            fix = new Root();
        } else if (node.type === 'atrule') {
            var AtRule = require(521);
            fix = new AtRule();
        } else if (node.type === 'rule') {
            var Rule = require(528);
            fix = new Rule();
        } else if (node.type === 'decl') {
            fix = new _declaration2.default();
        } else if (node.type === 'comment') {
            fix = new _comment2.default();
        }

        for (var i in node) {
            if (i === 'nodes') {
                fix.nodes = node.nodes.map(function (j) {
                    return _this3.rebuild(j, fix);
                });
            } else if (i === 'parent' && parent) {
                fix.parent = parent;
            } else if (node.hasOwnProperty(i)) {
                fix[i] = node[i];
            }
        }

        return fix;
    };

    /**
     * @memberof Container#
     * @member {Node[]} nodes - an array containing the container’s children
     *
     * @example
     * const root = postcss.parse('a { color: black }');
     * root.nodes.length           //=> 1
     * root.nodes[0].selector      //=> 'a'
     * root.nodes[0].nodes[0].prop //=> 'color'
     */

    _createClass(Container, [{
        key: 'first',
        get: function get() {
            if (!this.nodes) return undefined;
            return this.nodes[0];
        }

        /**
         * The container’s last child.
         *
         * @type {Node}
         *
         * @example
         * rule.last == rule.nodes[rule.nodes.length - 1];
         */

    }, {
        key: 'last',
        get: function get() {
            if (!this.nodes) return undefined;
            return this.nodes[this.nodes.length - 1];
        }
    }]);

    return Container;
}(_node2.default);

exports.default = Container;

/**
 * @callback childCondition
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @param {Node[]} nodes - all container children
 * @return {boolean}
 */

/**
 * @callback childIterator
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @return {false|undefined} returning `false` will break iteration
 */

module.exports = exports['default'];

}, {"521":521,"523":523,"524":524,"525":525,"526":526,"527":527,"528":528}];
window.modules["529"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _supportsColor = require(20);

var _supportsColor2 = _interopRequireDefault(_supportsColor);

var _chalk = require(20);

var _chalk2 = _interopRequireDefault(_chalk);

var _terminalHighlight = require(530);

var _terminalHighlight2 = _interopRequireDefault(_terminalHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the {@link Node#error} method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * @example
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if ( error.name === 'CssSyntaxError' ) {
 *     error //=> CssSyntaxError
 *   }
 * }
 *
 * @example
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' });
 */
var CssSyntaxError = function () {

    /**
     * @param {string} message  - error message
     * @param {number} [line]   - source line of the error
     * @param {number} [column] - source column of the error
     * @param {string} [source] - source code of the broken file
     * @param {string} [file]   - absolute path to the broken file
     * @param {string} [plugin] - PostCSS plugin name, if error came from plugin
     */
    function CssSyntaxError(message, line, column, source, file, plugin) {
        _classCallCheck(this, CssSyntaxError);

        /**
         * @member {string} - Always equal to `'CssSyntaxError'`. You should
         *                    always check error type
         *                    by `error.name === 'CssSyntaxError'` instead of
         *                    `error instanceof CssSyntaxError`, because
         *                    npm could have several PostCSS versions.
         *
         * @example
         * if ( error.name === 'CssSyntaxError' ) {
         *   error //=> CssSyntaxError
         * }
         */
        this.name = 'CssSyntaxError';
        /**
         * @member {string} - Error message.
         *
         * @example
         * error.message //=> 'Unclosed block'
         */
        this.reason = message;

        if (file) {
            /**
             * @member {string} - Absolute path to the broken file.
             *
             * @example
             * error.file       //=> 'a.sass'
             * error.input.file //=> 'a.css'
             */
            this.file = file;
        }
        if (source) {
            /**
             * @member {string} - Source code of the broken file.
             *
             * @example
             * error.source       //=> 'a { b {} }'
             * error.input.column //=> 'a b { }'
             */
            this.source = source;
        }
        if (plugin) {
            /**
             * @member {string} - Plugin name, if error came from plugin.
             *
             * @example
             * error.plugin //=> 'postcss-vars'
             */
            this.plugin = plugin;
        }
        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
            /**
             * @member {number} - Source line of the error.
             *
             * @example
             * error.line       //=> 2
             * error.input.line //=> 4
             */
            this.line = line;
            /**
             * @member {number} - Source column of the error.
             *
             * @example
             * error.column       //=> 1
             * error.input.column //=> 4
             */
            this.column = column;
        }

        this.setMessage();

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError);
        }
    }

    CssSyntaxError.prototype.setMessage = function setMessage() {
        /**
         * @member {string} - Full error text in the GNU error format
         *                    with plugin, file, line and column.
         *
         * @example
         * error.message //=> 'a.css:1:1: Unclosed block'
         */
        this.message = this.plugin ? this.plugin + ': ' : '';
        this.message += this.file ? this.file : '<css input>';
        if (typeof this.line !== 'undefined') {
            this.message += ':' + this.line + ':' + this.column;
        }
        this.message += ': ' + this.reason;
    };

    /**
     * Returns a few lines of CSS source that caused the error.
     *
     * If the CSS has an input source map without `sourceContent`,
     * this method will return an empty string.
     *
     * @param {boolean} [color] whether arrow will be colored red by terminal
     *                          color codes. By default, PostCSS will detect
     *                          color support by `process.stdout.isTTY`
     *                          and `window.process.env.NODE_DISABLE_COLORS`.
     *
     * @example
     * error.showSourceCode() //=> "  4 | }
     *                        //      5 | a {
     *                        //    > 6 |   bad
     *                        //        |   ^
     *                        //      7 | }
     *                        //      8 | b {"
     *
     * @return {string} few lines of CSS source that caused the error
     */


    CssSyntaxError.prototype.showSourceCode = function showSourceCode(color) {
        var _this = this;

        if (!this.source) return '';

        var css = this.source;
        if (typeof color === 'undefined') color = _supportsColor2.default.stdout;
        if (color) css = (0, _terminalHighlight2.default)(css);

        var lines = css.split(/\r?\n/);
        var start = Math.max(this.line - 3, 0);
        var end = Math.min(this.line + 2, lines.length);

        var maxWidth = String(end).length;

        function mark(text) {
            if (color && _chalk2.default.red) {
                return _chalk2.default.red.bold(text);
            } else {
                return text;
            }
        }
        function aside(text) {
            if (color && _chalk2.default.gray) {
                return _chalk2.default.gray(text);
            } else {
                return text;
            }
        }

        return lines.slice(start, end).map(function (line, index) {
            var number = start + 1 + index;
            var gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';
            if (number === _this.line) {
                var spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
                return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^');
            } else {
                return ' ' + aside(gutter) + line;
            }
        }).join('\n');
    };

    /**
     * Returns error position, message and source code of the broken part.
     *
     * @example
     * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
     *                  //    > 1 | a {
     *                  //        | ^"
     *
     * @return {string} error position, message and source code
     */


    CssSyntaxError.prototype.toString = function toString() {
        var code = this.showSourceCode();
        if (code) {
            code = '\n\n' + code + '\n';
        }
        return this.name + ': ' + this.message + code;
    };

    /**
     * @memberof CssSyntaxError#
     * @member {Input} input - Input object with PostCSS internal information
     *                         about input file. If input has source map
     *                         from previous tool, PostCSS will use origin
     *                         (for example, Sass) source. You can use this
     *                         object to get PostCSS input source.
     *
     * @example
     * error.input.file //=> 'a.css'
     * error.file       //=> 'a.sass'
     */

    return CssSyntaxError;
}();

exports.default = CssSyntaxError;
module.exports = exports['default'];

}, {"20":20,"530":530}];
window.modules["526"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _node = require(524);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a CSS declaration.
 *
 * @extends Node
 *
 * @example
 * const root = postcss.parse('a { color: black }');
 * const decl = root.first.first;
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 */
var Declaration = function (_Node) {
  _inherits(Declaration, _Node);

  function Declaration(defaults) {
    _classCallCheck(this, Declaration);

    var _this = _possibleConstructorReturn(this, _Node.call(this, defaults));

    _this.type = 'decl';
    return _this;
  }

  /**
   * @memberof Declaration#
   * @member {string} prop - the declaration’s property name
   *
   * @example
   * const root = postcss.parse('a { color: black }');
   * const decl = root.first.first;
   * decl.prop //=> 'color'
   */

  /**
   * @memberof Declaration#
   * @member {string} value - the declaration’s value
   *
   * @example
   * const root = postcss.parse('a { color: black }');
   * const decl = root.first.first;
   * decl.value //=> 'black'
   */

  /**
   * @memberof Declaration#
   * @member {boolean} important - `true` if the declaration
   *                               has an !important annotation.
   *
   * @example
   * const root = postcss.parse('a { color: black !important; color: red }');
   * root.first.first.important //=> true
   * root.first.last.important  //=> undefined
   */

  /**
   * @memberof Declaration#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `between`: the symbols between the property and value
   *   for declarations.
   * * `important`: the content of the important statement,
   *   if it is not just `!important`.
   *
   * PostCSS cleans declaration from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('a {\n  color:black\n}')
   * root.first.first.raws //=> { before: '\n  ', between: ':' }
   */

  return Declaration;
}(_node2.default);

exports.default = Declaration;
module.exports = exports['default'];

}, {"524":524}];
window.modules["545"] = [function(require,module,exports){"use strict";

exports.__esModule = true;
exports.default = void 0;

var _container = _interopRequireDefault(require(546));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Represents an at-rule.
 *
 * If it’s followed in the CSS by a {} block, this node will have
 * a nodes property representing its children.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('@charset "UTF-8"; @media print {}')
 *
 * const charset = root.first
 * charset.type  //=> 'atrule'
 * charset.nodes //=> undefined
 *
 * const media = root.last
 * media.nodes   //=> []
 */
var AtRule =
/*#__PURE__*/
function (_Container) {
  _inheritsLoose(AtRule, _Container);

  function AtRule(defaults) {
    var _this;

    _this = _Container.call(this, defaults) || this;
    _this.type = 'atrule';
    return _this;
  }

  var _proto = AtRule.prototype;

  _proto.append = function append() {
    var _Container$prototype$;

    if (!this.nodes) this.nodes = [];

    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    return (_Container$prototype$ = _Container.prototype.append).call.apply(_Container$prototype$, [this].concat(children));
  };

  _proto.prepend = function prepend() {
    var _Container$prototype$2;

    if (!this.nodes) this.nodes = [];

    for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    return (_Container$prototype$2 = _Container.prototype.prepend).call.apply(_Container$prototype$2, [this].concat(children));
  }
  /**
   * @memberof AtRule#
   * @member {string} name The at-rule’s name immediately follows the `@`.
   *
   * @example
   * const root  = postcss.parse('@media print {}')
   * media.name //=> 'media'
   * const media = root.first
   */

  /**
   * @memberof AtRule#
   * @member {string} params The at-rule’s parameters, the values
   *                         that follow the at-rule’s name but precede
   *                         any {} block.
   *
   * @example
   * const root  = postcss.parse('@media print, screen {}')
   * const media = root.first
   * media.params //=> 'print, screen'
   */

  /**
   * @memberof AtRule#
   * @member {object} raws Information to generate byte-to-byte equal
   *                        node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `after`: the space symbols after the last child of the node
   *   to the end of the node.
   * * `between`: the symbols between the property and value
   *   for declarations, selector and `{` for rules, or last parameter
   *   and `{` for at-rules.
   * * `semicolon`: contains true if the last child has
   *   an (optional) semicolon.
   * * `afterName`: the space between the at-rule name and its parameters.
   *
   * PostCSS cleans at-rule parameters from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('  @media\nprint {\n}')
   * root.first.first.raws //=> { before: '  ',
   *                       //     between: ' ',
   *                       //     afterName: '\n',
   *                       //     after: '\n' }
   */
  ;

  return AtRule;
}(_container.default);

var _default = AtRule;
exports.default = _default;
module.exports = exports.default;

}, {"546":546}];
window.modules["517"] = [function(require,module,exports){"use strict";

exports.__esModule = true;
exports.default = void 0;

var _node = _interopRequireDefault(require(547));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Represents a comment between declarations or statements (rule and at-rules).
 *
 * Comments inside selectors, at-rule parameters, or declaration values
 * will be stored in the `raws` properties explained above.
 *
 * @extends Node
 */
var Comment =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Comment, _Node);

  function Comment(defaults) {
    var _this;

    _this = _Node.call(this, defaults) || this;
    _this.type = 'comment';
    return _this;
  }
  /**
   * @memberof Comment#
   * @member {string} text The comment’s text.
   */

  /**
   * @memberof Comment#
   * @member {object} raws Information to generate byte-to-byte equal
   *                       node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node.
   * * `left`: the space symbols between `/*` and the comment’s text.
   * * `right`: the space symbols between the comment’s text.
   */


  return Comment;
}(_node.default);

var _default = Comment;
exports.default = _default;
module.exports = exports.default;

}, {"547":547}];
window.modules["546"] = [function(require,module,exports){"use strict";

exports.__esModule = true;
exports.default = void 0;

var _declaration = _interopRequireDefault(require(548));

var _comment = _interopRequireDefault(require(517));

var _node = _interopRequireDefault(require(547));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function cleanSource(nodes) {
  return nodes.map(function (i) {
    if (i.nodes) i.nodes = cleanSource(i.nodes);
    delete i.source;
    return i;
  });
}
/**
 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 *
 * @extends Node
 * @abstract
 */


var Container =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Container, _Node);

  function Container() {
    return _Node.apply(this, arguments) || this;
  }

  var _proto = Container.prototype;

  _proto.push = function push(child) {
    child.parent = this;
    this.nodes.push(child);
    return this;
  }
  /**
   * Iterates through the container’s immediate children,
   * calling `callback` for each child.
   *
   * Returning `false` in the callback will break iteration.
   *
   * This method only iterates through the container’s immediate children.
   * If you need to recursively iterate through all the container’s descendant
   * nodes, use {@link Container#walk}.
   *
   * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
   * if you are mutating the array of child nodes during iteration.
   * PostCSS will adjust the current index to match the mutations.
   *
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * const root = postcss.parse('a { color: black; z-index: 1 }')
   * const rule = root.first
   *
   * for (const decl of rule.nodes) {
   *   decl.cloneBefore({ prop: '-webkit-' + decl.prop })
   *   // Cycle will be infinite, because cloneBefore moves the current node
   *   // to the next index
   * }
   *
   * rule.each(decl => {
   *   decl.cloneBefore({ prop: '-webkit-' + decl.prop })
   *   // Will be executed only for color and z-index
   * })
   */
  ;

  _proto.each = function each(callback) {
    if (!this.lastEach) this.lastEach = 0;
    if (!this.indexes) this.indexes = {};
    this.lastEach += 1;
    var id = this.lastEach;
    this.indexes[id] = 0;
    if (!this.nodes) return undefined;
    var index, result;

    while (this.indexes[id] < this.nodes.length) {
      index = this.indexes[id];
      result = callback(this.nodes[index], index);
      if (result === false) break;
      this.indexes[id] += 1;
    }

    delete this.indexes[id];
    return result;
  }
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each node.
   *
   * Like container.each(), this method is safe to use
   * if you are mutating arrays during iteration.
   *
   * If you only need to iterate through the container’s immediate children,
   * use {@link Container#each}.
   *
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walk(node => {
   *   // Traverses all descendant nodes.
   * })
   */
  ;

  _proto.walk = function walk(callback) {
    return this.each(function (child, i) {
      var result;

      try {
        result = callback(child, i);
      } catch (e) {
        e.postcssNode = child;

        if (e.stack && child.source && /\n\s{4}at /.test(e.stack)) {
          var s = child.source;
          e.stack = e.stack.replace(/\n\s{4}at /, "$&" + s.input.from + ":" + s.start.line + ":" + s.start.column + "$&");
        }

        throw e;
      }

      if (result !== false && child.walk) {
        result = child.walk(callback);
      }

      return result;
    });
  }
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each declaration node.
   *
   * If you pass a filter, iteration will only happen over declarations
   * with matching properties.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [prop]   String or regular expression
   *                                 to filter declarations by property name.
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walkDecls(decl => {
   *   checkPropertySupport(decl.prop)
   * })
   *
   * root.walkDecls('border-radius', decl => {
   *   decl.remove()
   * })
   *
   * root.walkDecls(/^background/, decl => {
   *   decl.value = takeFirstColorFromGradient(decl.value)
   * })
   */
  ;

  _proto.walkDecls = function walkDecls(prop, callback) {
    if (!callback) {
      callback = prop;
      return this.walk(function (child, i) {
        if (child.type === 'decl') {
          return callback(child, i);
        }
      });
    }

    if (prop instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'decl' && prop.test(child.prop)) {
          return callback(child, i);
        }
      });
    }

    return this.walk(function (child, i) {
      if (child.type === 'decl' && child.prop === prop) {
        return callback(child, i);
      }
    });
  }
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each rule node.
   *
   * If you pass a filter, iteration will only happen over rules
   * with matching selectors.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [selector] String or regular expression
   *                                   to filter rules by selector.
   * @param {childIterator} callback   Iterator receives each node and index.
   *
   * @return {false|undefined} returns `false` if iteration was broke.
   *
   * @example
   * const selectors = []
   * root.walkRules(rule => {
   *   selectors.push(rule.selector)
   * })
   * console.log(`Your CSS uses ${ selectors.length } selectors`)
   */
  ;

  _proto.walkRules = function walkRules(selector, callback) {
    if (!callback) {
      callback = selector;
      return this.walk(function (child, i) {
        if (child.type === 'rule') {
          return callback(child, i);
        }
      });
    }

    if (selector instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'rule' && selector.test(child.selector)) {
          return callback(child, i);
        }
      });
    }

    return this.walk(function (child, i) {
      if (child.type === 'rule' && child.selector === selector) {
        return callback(child, i);
      }
    });
  }
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each at-rule node.
   *
   * If you pass a filter, iteration will only happen over at-rules
   * that have matching names.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [name]   String or regular expression
   *                                 to filter at-rules by name.
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walkAtRules(rule => {
   *   if (isOld(rule.name)) rule.remove()
   * })
   *
   * let first = false
   * root.walkAtRules('charset', rule => {
   *   if (!first) {
   *     first = true
   *   } else {
   *     rule.remove()
   *   }
   * })
   */
  ;

  _proto.walkAtRules = function walkAtRules(name, callback) {
    if (!callback) {
      callback = name;
      return this.walk(function (child, i) {
        if (child.type === 'atrule') {
          return callback(child, i);
        }
      });
    }

    if (name instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'atrule' && name.test(child.name)) {
          return callback(child, i);
        }
      });
    }

    return this.walk(function (child, i) {
      if (child.type === 'atrule' && child.name === name) {
        return callback(child, i);
      }
    });
  }
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each comment node.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walkComments(comment => {
   *   comment.remove()
   * })
   */
  ;

  _proto.walkComments = function walkComments(callback) {
    return this.walk(function (child, i) {
      if (child.type === 'comment') {
        return callback(child, i);
      }
    });
  }
  /**
   * Inserts new nodes to the end of the container.
   *
   * @param {...(Node|object|string|Node[])} children New nodes.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * const decl1 = postcss.decl({ prop: 'color', value: 'black' })
   * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' })
   * rule.append(decl1, decl2)
   *
   * root.append({ name: 'charset', params: '"UTF-8"' })  // at-rule
   * root.append({ selector: 'a' })                       // rule
   * rule.append({ prop: 'color', value: 'black' })       // declaration
   * rule.append({ text: 'Comment' })                     // comment
   *
   * root.append('a {}')
   * root.first.append('color: black; z-index: 1')
   */
  ;

  _proto.append = function append() {
    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    for (var _i = 0; _i < children.length; _i++) {
      var child = children[_i];
      var nodes = this.normalize(child, this.last);

      for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i2 >= _iterator.length) break;
          _ref = _iterator[_i2++];
        } else {
          _i2 = _iterator.next();
          if (_i2.done) break;
          _ref = _i2.value;
        }

        var node = _ref;
        this.nodes.push(node);
      }
    }

    return this;
  }
  /**
   * Inserts new nodes to the start of the container.
   *
   * @param {...(Node|object|string|Node[])} children New nodes.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * const decl1 = postcss.decl({ prop: 'color', value: 'black' })
   * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' })
   * rule.prepend(decl1, decl2)
   *
   * root.append({ name: 'charset', params: '"UTF-8"' })  // at-rule
   * root.append({ selector: 'a' })                       // rule
   * rule.append({ prop: 'color', value: 'black' })       // declaration
   * rule.append({ text: 'Comment' })                     // comment
   *
   * root.append('a {}')
   * root.first.append('color: black; z-index: 1')
   */
  ;

  _proto.prepend = function prepend() {
    for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    children = children.reverse();

    for (var _iterator2 = children, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i3 >= _iterator2.length) break;
        _ref2 = _iterator2[_i3++];
      } else {
        _i3 = _iterator2.next();
        if (_i3.done) break;
        _ref2 = _i3.value;
      }

      var child = _ref2;
      var nodes = this.normalize(child, this.first, 'prepend').reverse();

      for (var _iterator3 = nodes, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i4 >= _iterator3.length) break;
          _ref3 = _iterator3[_i4++];
        } else {
          _i4 = _iterator3.next();
          if (_i4.done) break;
          _ref3 = _i4.value;
        }

        var node = _ref3;
        this.nodes.unshift(node);
      }

      for (var id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length;
      }
    }

    return this;
  };

  _proto.cleanRaws = function cleanRaws(keepBetween) {
    _Node.prototype.cleanRaws.call(this, keepBetween);

    if (this.nodes) {
      for (var _iterator4 = this.nodes, _isArray4 = Array.isArray(_iterator4), _i5 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i5 >= _iterator4.length) break;
          _ref4 = _iterator4[_i5++];
        } else {
          _i5 = _iterator4.next();
          if (_i5.done) break;
          _ref4 = _i5.value;
        }

        var node = _ref4;
        node.cleanRaws(keepBetween);
      }
    }
  }
  /**
   * Insert new node before old node within the container.
   *
   * @param {Node|number} exist             Child or child’s index.
   * @param {Node|object|string|Node[]} add New node.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }))
   */
  ;

  _proto.insertBefore = function insertBefore(exist, add) {
    exist = this.index(exist);
    var type = exist === 0 ? 'prepend' : false;
    var nodes = this.normalize(add, this.nodes[exist], type).reverse();

    for (var _iterator5 = nodes, _isArray5 = Array.isArray(_iterator5), _i6 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray5) {
        if (_i6 >= _iterator5.length) break;
        _ref5 = _iterator5[_i6++];
      } else {
        _i6 = _iterator5.next();
        if (_i6.done) break;
        _ref5 = _i6.value;
      }

      var node = _ref5;
      this.nodes.splice(exist, 0, node);
    }

    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (exist <= index) {
        this.indexes[id] = index + nodes.length;
      }
    }

    return this;
  }
  /**
   * Insert new node after old node within the container.
   *
   * @param {Node|number} exist             Child or child’s index.
   * @param {Node|object|string|Node[]} add New node.
   *
   * @return {Node} This node for methods chain.
   */
  ;

  _proto.insertAfter = function insertAfter(exist, add) {
    exist = this.index(exist);
    var nodes = this.normalize(add, this.nodes[exist]).reverse();

    for (var _iterator6 = nodes, _isArray6 = Array.isArray(_iterator6), _i7 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
      var _ref6;

      if (_isArray6) {
        if (_i7 >= _iterator6.length) break;
        _ref6 = _iterator6[_i7++];
      } else {
        _i7 = _iterator6.next();
        if (_i7.done) break;
        _ref6 = _i7.value;
      }

      var node = _ref6;
      this.nodes.splice(exist + 1, 0, node);
    }

    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (exist < index) {
        this.indexes[id] = index + nodes.length;
      }
    }

    return this;
  }
  /**
   * Removes node from the container and cleans the parent properties
   * from the node and its children.
   *
   * @param {Node|number} child Child or child’s index.
   *
   * @return {Node} This node for methods chain
   *
   * @example
   * rule.nodes.length  //=> 5
   * rule.removeChild(decl)
   * rule.nodes.length  //=> 4
   * decl.parent        //=> undefined
   */
  ;

  _proto.removeChild = function removeChild(child) {
    child = this.index(child);
    this.nodes[child].parent = undefined;
    this.nodes.splice(child, 1);
    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (index >= child) {
        this.indexes[id] = index - 1;
      }
    }

    return this;
  }
  /**
   * Removes all children from the container
   * and cleans their parent properties.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * rule.removeAll()
   * rule.nodes.length //=> 0
   */
  ;

  _proto.removeAll = function removeAll() {
    for (var _iterator7 = this.nodes, _isArray7 = Array.isArray(_iterator7), _i8 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
      var _ref7;

      if (_isArray7) {
        if (_i8 >= _iterator7.length) break;
        _ref7 = _iterator7[_i8++];
      } else {
        _i8 = _iterator7.next();
        if (_i8.done) break;
        _ref7 = _i8.value;
      }

      var node = _ref7;
      node.parent = undefined;
    }

    this.nodes = [];
    return this;
  }
  /**
   * Passes all declaration values within the container that match pattern
   * through callback, replacing those values with the returned result
   * of callback.
   *
   * This method is useful if you are using a custom unit or function
   * and need to iterate through all values.
   *
   * @param {string|RegExp} pattern      Replace pattern.
   * @param {object} opts                Options to speed up the search.
   * @param {string|string[]} opts.props An array of property names.
   * @param {string} opts.fast           String that’s used to narrow down
   *                                     values and speed up the regexp search.
   * @param {function|string} callback   String to replace pattern or callback
   *                                     that returns a new value. The callback
   *                                     will receive the same arguments
   *                                     as those passed to a function parameter
   *                                     of `String#replace`.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
   *   return 15 * parseInt(string) + 'px'
   * })
   */
  ;

  _proto.replaceValues = function replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts;
      opts = {};
    }

    this.walkDecls(function (decl) {
      if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
      if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;
      decl.value = decl.value.replace(pattern, callback);
    });
    return this;
  }
  /**
   * Returns `true` if callback returns `true`
   * for all of the container’s children.
   *
   * @param {childCondition} condition Iterator returns true or false.
   *
   * @return {boolean} Is every child pass condition.
   *
   * @example
   * const noPrefixes = rule.every(i => i.prop[0] !== '-')
   */
  ;

  _proto.every = function every(condition) {
    return this.nodes.every(condition);
  }
  /**
   * Returns `true` if callback returns `true` for (at least) one
   * of the container’s children.
   *
   * @param {childCondition} condition Iterator returns true or false.
   *
   * @return {boolean} Is some child pass condition.
   *
   * @example
   * const hasPrefix = rule.some(i => i.prop[0] === '-')
   */
  ;

  _proto.some = function some(condition) {
    return this.nodes.some(condition);
  }
  /**
   * Returns a `child`’s index within the {@link Container#nodes} array.
   *
   * @param {Node} child Child of the current container.
   *
   * @return {number} Child index.
   *
   * @example
   * rule.index( rule.nodes[2] ) //=> 2
   */
  ;

  _proto.index = function index(child) {
    if (typeof child === 'number') {
      return child;
    }

    return this.nodes.indexOf(child);
  }
  /**
   * The container’s first child.
   *
   * @type {Node}
   *
   * @example
   * rule.first === rules.nodes[0]
   */
  ;

  _proto.normalize = function normalize(nodes, sample) {
    var _this = this;

    if (typeof nodes === 'string') {
      var parse = require(549);

      nodes = cleanSource(parse(nodes).nodes);
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0);

      for (var _iterator8 = nodes, _isArray8 = Array.isArray(_iterator8), _i9 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray8) {
          if (_i9 >= _iterator8.length) break;
          _ref8 = _iterator8[_i9++];
        } else {
          _i9 = _iterator8.next();
          if (_i9.done) break;
          _ref8 = _i9.value;
        }

        var i = _ref8;
        if (i.parent) i.parent.removeChild(i, 'ignore');
      }
    } else if (nodes.type === 'root') {
      nodes = nodes.nodes.slice(0);

      for (var _iterator9 = nodes, _isArray9 = Array.isArray(_iterator9), _i10 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
        var _ref9;

        if (_isArray9) {
          if (_i10 >= _iterator9.length) break;
          _ref9 = _iterator9[_i10++];
        } else {
          _i10 = _iterator9.next();
          if (_i10.done) break;
          _ref9 = _i10.value;
        }

        var _i11 = _ref9;
        if (_i11.parent) _i11.parent.removeChild(_i11, 'ignore');
      }
    } else if (nodes.type) {
      nodes = [nodes];
    } else if (nodes.prop) {
      if (typeof nodes.value === 'undefined') {
        throw new Error('Value field is missed in node creation');
      } else if (typeof nodes.value !== 'string') {
        nodes.value = String(nodes.value);
      }

      nodes = [new _declaration.default(nodes)];
    } else if (nodes.selector) {
      var Rule = require(550);

      nodes = [new Rule(nodes)];
    } else if (nodes.name) {
      var AtRule = require(545);

      nodes = [new AtRule(nodes)];
    } else if (nodes.text) {
      nodes = [new _comment.default(nodes)];
    } else {
      throw new Error('Unknown node type in node creation');
    }

    var processed = nodes.map(function (i) {
      if (i.parent) i.parent.removeChild(i);

      if (typeof i.raws.before === 'undefined') {
        if (sample && typeof sample.raws.before !== 'undefined') {
          i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
        }
      }

      i.parent = _this;
      return i;
    });
    return processed;
  }
  /**
   * @memberof Container#
   * @member {Node[]} nodes An array containing the container’s children.
   *
   * @example
   * const root = postcss.parse('a { color: black }')
   * root.nodes.length           //=> 1
   * root.nodes[0].selector      //=> 'a'
   * root.nodes[0].nodes[0].prop //=> 'color'
   */
  ;

  _createClass(Container, [{
    key: "first",
    get: function get() {
      if (!this.nodes) return undefined;
      return this.nodes[0];
    }
    /**
     * The container’s last child.
     *
     * @type {Node}
     *
     * @example
     * rule.last === rule.nodes[rule.nodes.length - 1]
     */

  }, {
    key: "last",
    get: function get() {
      if (!this.nodes) return undefined;
      return this.nodes[this.nodes.length - 1];
    }
  }]);

  return Container;
}(_node.default);

var _default = Container;
/**
 * @callback childCondition
 * @param {Node} node    Container child.
 * @param {number} index Child index.
 * @param {Node[]} nodes All container children.
 * @return {boolean}
 */

/**
 * @callback childIterator
 * @param {Node} node    Container child.
 * @param {number} index Child index.
 * @return {false|undefined} Returning `false` will break iteration.
 */

exports.default = _default;
module.exports = exports.default;

}, {"517":517,"545":545,"547":547,"548":548,"549":549,"550":550}];
window.modules["551"] = [function(require,module,exports){"use strict";

exports.__esModule = true;
exports.default = void 0;

var _supportsColor = _interopRequireDefault(require(20));

var _chalk = _interopRequireDefault(require(20));

var _terminalHighlight = _interopRequireDefault(require(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the {@link Node#error} method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * @example
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if (error.name === 'CssSyntaxError') {
 *     error //=> CssSyntaxError
 *   }
 * }
 *
 * @example
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' })
 */
var CssSyntaxError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(CssSyntaxError, _Error);

  /**
   * @param {string} message  Error message.
   * @param {number} [line]   Source line of the error.
   * @param {number} [column] Source column of the error.
   * @param {string} [source] Source code of the broken file.
   * @param {string} [file]   Absolute path to the broken file.
   * @param {string} [plugin] PostCSS plugin name, if error came from plugin.
   */
  function CssSyntaxError(message, line, column, source, file, plugin) {
    var _this;

    _this = _Error.call(this, message) || this;
    /**
     * Always equal to `'CssSyntaxError'`. You should always check error type
     * by `error.name === 'CssSyntaxError'`
     * instead of `error instanceof CssSyntaxError`,
     * because npm could have several PostCSS versions.
     *
     * @type {string}
     *
     * @example
     * if (error.name === 'CssSyntaxError') {
     *   error //=> CssSyntaxError
     * }
     */

    _this.name = 'CssSyntaxError';
    /**
     * Error message.
     *
     * @type {string}
     *
     * @example
     * error.message //=> 'Unclosed block'
     */

    _this.reason = message;

    if (file) {
      /**
       * Absolute path to the broken file.
       *
       * @type {string}
       *
       * @example
       * error.file       //=> 'a.sass'
       * error.input.file //=> 'a.css'
       */
      _this.file = file;
    }

    if (source) {
      /**
       * Source code of the broken file.
       *
       * @type {string}
       *
       * @example
       * error.source       //=> 'a { b {} }'
       * error.input.column //=> 'a b { }'
       */
      _this.source = source;
    }

    if (plugin) {
      /**
       * Plugin name, if error came from plugin.
       *
       * @type {string}
       *
       * @example
       * error.plugin //=> 'postcss-vars'
       */
      _this.plugin = plugin;
    }

    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
      /**
       * Source line of the error.
       *
       * @type {number}
       *
       * @example
       * error.line       //=> 2
       * error.input.line //=> 4
       */
      _this.line = line;
      /**
       * Source column of the error.
       *
       * @type {number}
       *
       * @example
       * error.column       //=> 1
       * error.input.column //=> 4
       */

      _this.column = column;
    }

    _this.setMessage();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_assertThisInitialized(_this)), CssSyntaxError);
    }

    return _this;
  }

  var _proto = CssSyntaxError.prototype;

  _proto.setMessage = function setMessage() {
    /**
     * Full error text in the GNU error format
     * with plugin, file, line and column.
     *
     * @type {string}
     *
     * @example
     * error.message //=> 'a.css:1:1: Unclosed block'
     */
    this.message = this.plugin ? this.plugin + ': ' : '';
    this.message += this.file ? this.file : '<css input>';

    if (typeof this.line !== 'undefined') {
      this.message += ':' + this.line + ':' + this.column;
    }

    this.message += ': ' + this.reason;
  }
  /**
   * Returns a few lines of CSS source that caused the error.
   *
   * If the CSS has an input source map without `sourceContent`,
   * this method will return an empty string.
   *
   * @param {boolean} [color] Whether arrow will be colored red by terminal
   *                          color codes. By default, PostCSS will detect
   *                          color support by `process.stdout.isTTY`
   *                          and `window.process.env.NODE_DISABLE_COLORS`.
   *
   * @example
   * error.showSourceCode() //=> "  4 | }
   *                        //      5 | a {
   *                        //    > 6 |   bad
   *                        //        |   ^
   *                        //      7 | }
   *                        //      8 | b {"
   *
   * @return {string} Few lines of CSS source that caused the error.
   */
  ;

  _proto.showSourceCode = function showSourceCode(color) {
    var _this2 = this;

    if (!this.source) return '';
    var css = this.source;

    if (_terminalHighlight.default) {
      if (typeof color === 'undefined') color = _supportsColor.default.stdout;
      if (color) css = (0, _terminalHighlight.default)(css);
    }

    var lines = css.split(/\r?\n/);
    var start = Math.max(this.line - 3, 0);
    var end = Math.min(this.line + 2, lines.length);
    var maxWidth = String(end).length;

    function mark(text) {
      if (color && _chalk.default.red) {
        return _chalk.default.red.bold(text);
      }

      return text;
    }

    function aside(text) {
      if (color && _chalk.default.gray) {
        return _chalk.default.gray(text);
      }

      return text;
    }

    return lines.slice(start, end).map(function (line, index) {
      var number = start + 1 + index;
      var gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';

      if (number === _this2.line) {
        var spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, _this2.column - 1).replace(/[^\t]/g, ' ');
        return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^');
      }

      return ' ' + aside(gutter) + line;
    }).join('\n');
  }
  /**
   * Returns error position, message and source code of the broken part.
   *
   * @example
   * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
   *                  //    > 1 | a {
   *                  //        | ^"
   *
   * @return {string} Error position, message and source code.
   */
  ;

  _proto.toString = function toString() {
    var code = this.showSourceCode();

    if (code) {
      code = '\n\n' + code + '\n';
    }

    return this.name + ': ' + this.message + code;
  }
  /**
   * @memberof CssSyntaxError#
   * @member {Input} input Input object with PostCSS internal information
   *                       about input file. If input has source map
   *                       from previous tool, PostCSS will use origin
   *                       (for example, Sass) source. You can use this
   *                       object to get PostCSS input source.
   *
   * @example
   * error.input.file //=> 'a.css'
   * error.file       //=> 'a.sass'
   */
  ;

  return CssSyntaxError;
}(_wrapNativeSuper(Error));

var _default = CssSyntaxError;
exports.default = _default;
module.exports = exports.default;

}, {"20":20}];
window.modules["548"] = [function(require,module,exports){"use strict";

exports.__esModule = true;
exports.default = void 0;

var _node = _interopRequireDefault(require(547));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Represents a CSS declaration.
 *
 * @extends Node
 *
 * @example
 * const root = postcss.parse('a { color: black }')
 * const decl = root.first.first
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 */
var Declaration =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Declaration, _Node);

  function Declaration(defaults) {
    var _this;

    _this = _Node.call(this, defaults) || this;
    _this.type = 'decl';
    return _this;
  }
  /**
   * @memberof Declaration#
   * @member {string} prop The declaration’s property name.
   *
   * @example
   * const root = postcss.parse('a { color: black }')
   * const decl = root.first.first
   * decl.prop //=> 'color'
   */

  /**
   * @memberof Declaration#
   * @member {string} value The declaration’s value.
   *
   * @example
   * const root = postcss.parse('a { color: black }')
   * const decl = root.first.first
   * decl.value //=> 'black'
   */

  /**
   * @memberof Declaration#
   * @member {boolean} important `true` if the declaration
   *                             has an !important annotation.
   *
   * @example
   * const root = postcss.parse('a { color: black !important; color: red }')
   * root.first.first.important //=> true
   * root.first.last.important  //=> undefined
   */

  /**
   * @memberof Declaration#
   * @member {object} raws Information to generate byte-to-byte equal
   *                       node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `between`: the symbols between the property and value
   *   for declarations.
   * * `important`: the content of the important statement,
   *   if it is not just `!important`.
   *
   * PostCSS cleans declaration from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('a {\n  color:black\n}')
   * root.first.first.raws //=> { before: '\n  ', between: ':' }
   */


  return Declaration;
}(_node.default);

var _default = Declaration;
exports.default = _default;
module.exports = exports.default;

}, {"547":547}];
window.modules["233"] = [function(require,module,exports){// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };
}, {}];
window.modules["568"] = [function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = require(569);
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;
}, {"569":569}];
window.modules["570"] = [function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = require(571);

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};
}, {"571":571}];
window.modules["571"] = [function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};
}, {}];
window.modules["572"] = [function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
}, {}];
window.modules["582"] = [function(require,module,exports){var trim = require(583);
var decap = require(584);

module.exports = function camelize(str, decapitalize) {
  str = trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
    return c ? c.toUpperCase() : '';
  });

  if (decapitalize === true) {
    return decap(str);
  } else {
    return str;
  }
};
}, {"583":583,"584":584}];
window.modules["585"] = [function(require,module,exports){var makeString = require(586);

module.exports = function capitalize(str, lowercaseRest) {
  str = makeString(str);
  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();

  return str.charAt(0).toUpperCase() + remainingChars;
};
}, {"586":586}];
window.modules["587"] = [function(require,module,exports){var makeString = require(586);

module.exports = function chars(str) {
  return makeString(str).split('');
};
}, {"586":586}];
window.modules["588"] = [function(require,module,exports){module.exports = function chop(str, step) {
  if (str == null) return [];
  str = String(str);
  step = ~~step;
  return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];
};
}, {}];
window.modules["589"] = [function(require,module,exports){var capitalize = require(585);
var camelize = require(582);
var makeString = require(586);

module.exports = function classify(str) {
  str = makeString(str);
  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};
}, {"582":582,"585":585,"586":586}];
window.modules["590"] = [function(require,module,exports){var trim = require(583);

module.exports = function clean(str) {
  return trim(str).replace(/\s\s+/g, ' ');
};
}, {"583":583}];
window.modules["591"] = [function(require,module,exports){
var makeString = require(586);

var from  = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
  to    = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';

from += from.toUpperCase();
to += to.toUpperCase();

to = to.split('');

// for tokens requireing multitoken output
from += 'ß';
to.push('ss');


module.exports = function cleanDiacritics(str) {
  return makeString(str).replace(/.{1}/g, function(c){
    var index = from.indexOf(c);
    return index === -1 ? c : to[index];
  });
};
}, {"586":586}];
window.modules["592"] = [function(require,module,exports){var makeString = require(586);

module.exports = function(str, substr) {
  str = makeString(str);
  substr = makeString(substr);

  if (str.length === 0 || substr.length === 0) return 0;
  
  return str.split(substr).length - 1;
};
}, {"586":586}];
window.modules["593"] = [function(require,module,exports){var trim = require(583);

module.exports = function dasherize(str) {
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};
}, {"583":583}];
window.modules["584"] = [function(require,module,exports){var makeString = require(586);

module.exports = function decapitalize(str) {
  str = makeString(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};
}, {"586":586}];
window.modules["594"] = [function(require,module,exports){var makeString = require(586);

function getIndent(str) {
  var matches = str.match(/^[\s\\t]*/gm);
  var indent = matches[0].length;
  
  for (var i = 1; i < matches.length; i++) {
    indent = Math.min(matches[i].length, indent);
  }

  return indent;
}

module.exports = function dedent(str, pattern) {
  str = makeString(str);
  var indent = getIndent(str);
  var reg;

  if (indent === 0) return str;

  if (typeof pattern === 'string') {
    reg = new RegExp('^' + pattern, 'gm');
  } else {
    reg = new RegExp('^[ \\t]{' + indent + '}', 'gm');
  }

  return str.replace(reg, '');
};
}, {"586":586}];
window.modules["600"] = [function(require,module,exports){var makeString = require(586);

module.exports = function adjacent(str, direction) {
  str = makeString(str);
  if (str.length === 0) {
    return '';
  }
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
};
}, {"586":586}];
window.modules["601"] = [function(require,module,exports){var escapeRegExp = require(602);

module.exports = function defaultToWhiteSpace(characters) {
  if (characters == null)
    return '\\s';
  else if (characters.source)
    return characters.source;
  else
    return '[' + escapeRegExp(characters) + ']';
};
}, {"602":602}];
window.modules["651"] = [function(require,module,exports){(function (global){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})}, {}];
window.modules["658"] = [function(require,module,exports){'use strict';

var moment = require(391);

function getPrettyMonthAbrev(month) {
  switch (month) {
    case 'May':
      return month;
      break;

    case 'Jun':
      return 'June';
      break;

    case 'Jul':
      return 'July';
      break;

    case 'Sep':
      return 'Sept.';
      break;

    default:
      return month + '.';
      break;
  }
}

module.exports = function (date) {
  var mDate = moment(date),
      now = moment();

  if (!mDate.isValid(date)) {
    return '';
  }

  if (moment.duration(now.diff(mDate)).asDays() < 1) {
    return "".concat(mDate.format('h:mm'), " ").concat(mDate.format('A'));
  } else {
    return "".concat(getPrettyMonthAbrev(mDate.format('MMM')), " ").concat(mDate.format('D, YYYY'));
  }
};
}, {"391":391}];
window.modules["659"] = [function(require,module,exports){'use strict';

var _get = require(3),
    _join = require(384),
    _map = require(15),
    _isObject = require(12);
/**
 * Comma separate a list of author strings
 * or simple-list objects
 *
 * @param  {String[]} opts
 * @return {String}
 */


function formatSimpleByline() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var bylines = _get(opts.hash, 'bylines', []),
      authors = _map(bylines, function (author) {
    return _isObject(author) ? author.text : author;
  });

  if (authors.length === 1) {
    return "<span>".concat(authors[0], "</span>");
  } else if (authors.length === 2) {
    return "<span>".concat(authors[0], "</span><span class=\"and\"> and </span><span>").concat(authors[1], "</span>");
  } else {
    return _join(_map(authors, function (author, idx) {
      return idx < authors.length - 1 ? "<span>".concat(author, ", </span>") : "<span class=\"and\">and </span><span>".concat(author, "</span>");
    }), '');
  }
}

module.exports = formatSimpleByline;
}, {"3":3,"12":12,"15":15,"384":384}];
window.modules["660"] = [function(require,module,exports){'use strict';

var _includes = require(18);

function isVideo(contentData) {
  return contentData.featureTypes && (contentData.featureTypes['Video-Original'] || contentData.featureTypes['Video-Aggregation'] || contentData.featureTypes['Video-Original News']);
}

function isGallery(contentData) {
  return contentData.tags && _includes(contentData.tags, 'gallery');
}

function getCalloutType(contentData) {
  if (isVideo(contentData)) {
    return 'video';
  }

  if (isGallery(contentData)) {
    return 'gallery';
  }

  return '';
}

module.exports = getCalloutType;
}, {"18":18}];
