import { IconPropsType } from "@/types/types";

export const YellowStarIcon = ({ width = 17, height = 18 }: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      y="0.166672"
      width="18.1481"
      height="16.6667"
      fill="url(#pattern0_39_5)"
    />
    <defs>
      <pattern
        id="pattern0_39_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_39_5"
          transform="matrix(0.00918367 0 0 0.01 0.0408163 0)"
        />
      </pattern>
      <image
        id="image0_39_5"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const SearchIcon = ({ width = 25, height = 25 }: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      x="0.825439"
      y="0.5"
      width="30"
      height="30"
      fill="url(#pattern0_35_13)"
    />
    <defs>
      <pattern
        id="pattern0_35_13"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_35_13" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_35_13"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const HeartFilledIcon = ({ width = 17, height = 17 }: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      x="0.583313"
      y="0.5"
      width="16"
      height="16"
      fill="url(#pattern0_51_139)"
    />
    <defs>
      <pattern
        id="pattern0_51_139"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_51_139" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_51_139"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const HeartOutlinedIcon = ({
  width = 17,
  height = 17,
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      x="0.750031"
      y="0.5"
      width="16"
      height="16"
      fill="url(#pattern0_51_140)"
    />
    <defs>
      <pattern
        id="pattern0_51_140"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_51_140" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_51_140"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const MovieProjectorIcon = ({
  width = 43,
  height = 45,
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 43 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      x="0.174622"
      y="11.3766"
      width="33"
      height="35"
      transform="rotate(-19.138 0.174622 11.3766)"
      fill="url(#pattern0_44_669)"
    />
    <defs>
      <pattern
        id="pattern0_44_669"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_44_669"
          transform="matrix(0.01 0 0 0.00942857 0 0.0285714)"
        />
      </pattern>
      <image
        id="image0_44_669"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const LightThemeIcon = ({ width = 25, height = 25 }: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      x="0.825439"
      y="0.5"
      width="30"
      height="30"
      fill="url(#pattern0_222_423)"
    />
    <defs>
      <pattern
        id="pattern0_222_423"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_222_423" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_222_423"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
