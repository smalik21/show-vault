import { IconPropsType } from "@/types/propTypes";

export const YellowStarIcon = ({ width = 19, height = 20 }: IconPropsType) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAWO0lEQVR4nO2dW4xV53XHD/c7ZsBcM9wHGG7jYfbeZ0ha1UkjNVL6FDV5yEOrti9t+pZUfUhbqVLUSlWlvLR1oqp9qMBgsLmYm7maMQZzM+Y2MDBz9pljx0mMojSt6gu+wKzqt761ztlgMLeZgTPdn/SJETBnf/v7f+vyrfVf6xQK+chHPvKRj3zkIx/5yMfnhqTF35VS3CNp3C2V9q9+/n/kY9CGvNcyQdLohpQiCTO+wd/lEDymIaXiBuluE7m6JsyeNpFScX0OyOMAo6dpjPREN+XKGpHLz4QJKGl8UyrPjs1BGWxA0vhf5GqbyOXVIp02L7WI9ABK8lwOyGCCId8Zofai6xmRiytEztvkZySlFN2QjmdH5qAMFiDl4o/UdlxaJXJuucjZZWHy86XVov/W2/b3OSCDAYYUhkkafypdLUEqziwTOb1E5M0mkbeWilxYKdLVipR8JlIYnoMy0ID0FL+vdgJJOLdC5M0lIicXh3lqici5ZpFLK4OUlKIf5IAMNCBp/LFcwXasCtJxcqHIGwvCPLkoAHRhhciVVjyuj5GoHJQBAyP5Y5WOTmxHs8ipxSLHFogcnSvy+lyRY/NFTjdlbEkEKH+SAzJQgJTi9/XkX1wpcmZpkI4jXxJ5zebRRpHjC4Pk4HFdRUqSD3JABgKMytpv6U2cewfScXqRyNH5AYjDs8Pk5zcyUtJpUlJu/4MclP4GpBT9RrrWBC8KCTixSOT1RpFXZ4kcmiFycIbIoVlBdfFvLiXBlvwmB6Q/wehd8ztSQjpawsnHzT26QKRjjsihmSL7poV5cKZIh0vJErMlzwQpeTv5eg5KfwFSiq9pnOqCeVYnFgZDjnTse1rklalh7pt+q5RwL8HeaIwrei8HpD/AeHttm/REISTCRRD7gHRgL5CO3Q0iO58S2fWUyJ4GkQMzalLCZfE8UtISwvPd7e05KI8KSJpUgmdlt3LuGkeQjtlBOgBi+8Qw+RnVhYE/0hgui2ezUhL35oA8Chi98bLP2Q4ugK/NCZKwd6rIy5NEto0X2TpeZMckkT1Tg5F3j+sUUrJC5FKr3Uu+vCoH5aEBSTr1ZHPCsQfqWZl07J8WVBVAvDRW5MWxARj+Dsk5nLUly0Q6TUp6k84ckIcBoxTPlVIsIYiIdDSFWzknHxcXSdgxUeSlcSKbRom8MCr8zN/tmRI8LpWShUFK1ONqEUnbRH755fk5KA8sHe0npLs1nGxC69gDbuKHTTp2TRHZNkFk82iRDSPD5GckBluy/2mRjlkix+aJnEJKmoOX1q225GQOyIOA8cvW6VKK+qTLI7pN4aR3NIaTj+3YOVFky5gAxLqCyPqCyMaR4e/clmBnCK0ct9s7kkZSqyfqk/KqmTko9wtImhzUk0wQEekgiHh0nknH0yK7kY6JQSLWDwuAKCjDRDaNDv/G/zkwNfwOd5ZTC4PH1emh+eRgDsj9gNFTnKwnmJNMmIRwOgFDv3dwAcRObBkbpAPJWJeZSMlLSMnE8H+xN0gWn+H3kpDm7ZN3VjfkoNwLkFK0VckLpGfPNgfbgR04PEdk//RgH17Gdoy6VTpukZJRwb5g3A9MNymZFz5LPa7VweMqRVtzQO4GRCWZJeXo96WnLUiH2o6ldu9oDHeLfUjHZJEt40VeuIN0+OTfXuJeMjnYm1exJR6aXxLuJXhvSAnPrCSz/t8BI5dWjJZyslRK8R9Kb/xTSaO3NIJL7pukE6H1q8xnap7VabMdHbNNOqaIbJ0g8uJdpMPn8yYl3N6REu4lBCL5LOzRWULzq8KzeKYS7Pgzvilp/IGUk1TKyQ4pFX8o6drfkkvPTizU45B3frtBSsWvSTn5G+lNdko5KUsp+VBPPS/c7bM1hMXR5dwNmGzQxZUh/cqdgYsgJxovSSO6DcF74q6xccTdpSMrJdiZXZNE9k4TeXVm+KwTLiXNRh1aGZ7daesgKoCEQpRArXXbDb8n7pM0+lTKya8kjU9JOf6JHq53osWPjUxx2yn/iaRtp6U3/pUutDvu04V324vwQrwYL6ibDpltRZhsxDnb+HPLgl4nTvXmkuCeIhl675hfkw5O+vbx5lkN/2IwmBuGh//L7yBZB1xK5ofP1ufwvCUh+8gBYB26puUi51eG+FmnAeYHh0PEYVKg7ICpdHHokg+DdBVr0tVfXGOl21SSv5Q0TqUUX9cHItq+CNKjbLrSOP2Us+n2IryQv5xuOFQd2wC8HTaFsAZ/YieQhjfmBbVC4okAIrYD/b8vEyZ5YcS9wfB7Cf+X39mJLZkWJA1vjc8mrMKzyMNzx2GyBtLCClZTDSwOC++Ak6HvtCJIcqcD9kXS5WDF13Uvy8kPHop4IWnx76Qcm243/iwPhu3Bhp+zDUcfs9BbTrlPNn5ReFHd8AVhA5hshufCmZzew0wygDNrWUCkgxD7yxNFXhxzf9JRtSVIyRi7lzSEz9LMInNmeBaheqQQo69raawBpZPDYqyWE5lDxKHiXZlIlxL1TA3irrNH7BV7dtkAIo2QxsTT/vYhAEnO6y+DMLQbVI4CYUxB3Xi4UIvCInXD77TpvOic2qYzNe06M2yOTwzvPua0cH8gt4GaUjcXz4qYFbfyLzDmn5sYd2wJMa7JIrvJmVjehGfggSE5XDZxj5msi/Uxs7n6jiyZIgOYSxZ7wF6wJxxGQjXsFXvG3qmaU66YSG/81oMDUkn+KSR1CH+3hnsBYopE4I4SsOPk+MZjMPW0QTrghXgxTvrM2svy4myAZvgaMps+RWTHUyI7J4UL3fZJQfdvmRA2U6O5xKweQDqyUsLv8hl8Fp/JZ/OMHZmJSmQtOh0wSw1zULKHBwmrSpeBhApUKSKYiQQBCrYItQYgLR5HEykX//HBAZHCcEmLx4PKMjuBRwLq6FUeqqlUwGgMC+NUuZrhZYgnEcLY7SfdXh71g0vK5Y2QOd4QMagtY4Ih3jTGIrgEDUcEr4qNfSDpyFwU+V3/HD5TP3t0eNbmscFzU7Asr8LauHyyTg7JTpcuwDLJ4oARV+Od1S41hgvscQcENdYc9gwJweZi/EvJiYf2ytSwl+O9KimqtkxKsBeIJWKK18LpcFXEQjlV6Oxdk23zJ4hstZPOJN602TaFUAcbtXF42Dg20OeDbv79GvsqUDxjWJC8jVnAmKNDjoX1snYOD+/CwUK6eUfeldxMhzkKJMTYE+UZE102dVW1H8WOfnGRpRytU0nR4pjVQQwBhQdzIjgZnBCMsgOyJwMIJ4/4EicTAHwj7nWXWDfIs7oeA4u1smbW7pLDOzkghwjLzAnvjoeIh4aqQjIu2OUT28GBTqOdjwzELaBUkn9TlEEbF08vcM1hAXgfx8yAs0A10iYliDy3awXEVNCTBsS6u4DDWgEE74534F2wd6hjDVrOCmAcdcnAbiwzyWixeFkbRL11/QpGFZSyGXoH5aKHOEx9eUavCsrTQe9iN7YZKGT2VEIKT/Z8flhYK2oLMDTH0hDsh7rM5irrRXNhBoyVwd66ZPQm/zogYFRBqcR/HbyvVgMFzwtJaTJQoHc2GonNQMGoc7ow4OhkBQV78aRKxzBTVWODmlKXeYqpKTys2eHyyruiHVxNXcxIRqp3jsEpGpJy8r2apJhNqYJCyGOBucGzw2nC3dUcuKsvQBn5cG7sugGerMnBUNLEpKB6nRnpYPhFkQgEnidqCvt6xcAoF384KGBUQekt/pGU4j65GgVQ9I4CCZoCGpMUFq6gmKS8gqRMDl4Xbqa7tU+Mmhoe7JyDgWSgcjlQvAMelXpTGHC3Ge5NETl2A178s0EFowpKmnxLcwpaDYuh555it3iNURGtNZeY06Xp16kGioVCOI3rRzwhkjHS1JRxvPCm9rpkzKld/rAZSIbfM7QkW0ndfVKJvvtYwKiBsubrQVLc+wKUZqvfWFyTlMMZYjQvyunD0G8xUJyssG6w7QXTvCnWwprUtYUr7N4U4RIHw2yGqinqGb0+PiI8/83CkzDk7fgrWrCPpHS597U8A8qCcLo8L46k8MK8uHpfqC8DZbAN/fMjw7OJFmDfyJ9g71RNwabHZswNzBXUlOZSAGNVeNdAmOiTUvS1wpM05OdJq/YdYYGcGsLS5zzuRfDRSs+8hGC/SQoxJC6PfoPfMEje1/osGHbp03iWgUEcrsPVlN0z1IBbUgttEIKFN59YErek7UukHH+iKVkFZVXIzGUlpRr3ykiK25QtgDLm/jKC/WEziGUhnXoDx2YYGIetzgT7pzkSvKmlFr1dZdwuwIg/e+K5wvJusVHS+HpgjhD/QlIoIzB+1bGFIq9bLgTPpQoKLHbzvpSNOIAuMXEzgFcwuPSZzVDJIFjorm0GDNSUG3BtTBB/wgEs1MOQcvtMSeP3NdTCjVWrZrEpRgnl1KG+lKdLeD4jKdsgMZiUDJh0jAjPcDXl0VuKfQ5bvgMVe8rAOEsIfVUAQyUj+oiDV6inIT9bO1XS+L+r6otIsXZeWBoyiVlQOJWaN2+oucMDKSGaIzFAeCbPRoVq8mluBgyygAbGlaqael96WqcX6nFAn5E0fu8WSdFIsdkU8ikeutcQS8OdKaL9DohRTvGqeOZBI0CoN2U59TPOSjFvCjDS6NcwKwv1POQX0Xgpx++GVDCgGOPEq6HYhMNeDTUlhLnvxkrsr8ln4105U55ncwtHOk5mJEPBMM5YT3ytbvlZd6QPpcXukFOx8jQtMciUNnMj3kGsy0IqA+llKSPFc+2TwgVQeVtW4HM203ggEBMqQ64pGv2rpBx/rBQZrRdcKnJsUc2wa4nBpOD6Pj8IoRQMO3cfDZFAN50ZDofmNQDEugqlySdyJhpVGIoj1Hx4NW2G1U54gk15GYOO/RgEQACdZ23PsuSpuLKgISqLtZbivsJQHFKO5oXyZi/gtCwjxtQ9rG0Y9IdIYD1MDp7/z7Ocs+XMRtbE2s5ZOJ01l+K5haE2pBz/aSjCIc5lnXyOOiBW3rxtgkV/73Nzlahg5AQtaxvxAMBYEgrDDqNEb+hZQnazFfcM0Y5CUk6212oGm0WOL655WGwGt+WtFmS8F91H41BQe0YF95UoLelh3GUFx9gr9wXIuHAhrda342lZTSIeIRGHcjL06kikFP9CJYRkjjePIa5VrYqCnThWZOOoe0sFbBCtuiVCa4FBplONAInPuRcoGyxnzrOpPTlopdTHvXlNteHAzwtDbUgaf6YuLwadCDAxrQ4HhPwIBv0uHtZ6B2JE0PtIAi6rJ5J2Zoh42ARlO2byLHcDhs/TItGJInsbLNzu5W/Er9ywt31WGHItwd2ge78SrYz6UqiUhUBwt5DJeohslkDS2/U4kwqnf1osai95e0t8KTuSQCUUVFSZkfFuB8bJ2Nu9SNQ6QHBYMOzVSqtYhlQLc6lEX1XjeMk8LPIjhOJxM9HdatAtZKI5dvOanHDApqpETDA6KiwQS686pVMjx/BwjagNV9jpR4C42SVmeIaxOKJWtUuUgN9nTeppZZoNsPbe1mcLQ2VIWvxx6LO72go5oaBaiwxONicdUsEmYzYqrXNkjSSNRHBHUW4URDVYIDDWZ9RyF0ryhlAxPcOedFUGj9hbcGTpq8ZM1BoSJI0bO3ZknrXkwLBDBSWOFf+4MFSGljYAyHmrO4ckoD1LCJlY2J1N2WSe0uYMQc0Jz7immuc2Jjq/q+UNFqHVIh/jgynp29j2uw0YJ3lrjeLY8Azl7yJ9VtSDdCkgeFoLAyDEsxSQ6HxhqAwpxR/KZWvPh7E8bmQ6VI3e0J3ZOM4oOJ44AggY594xzgpt2HRqTrwKiqgxU0sj5hrP2LKSysY3Jr4Dw2dvc/K32ST+3lmJmilcEKIJF82wp/HQaKapDHoKJskeVg26AcLLo+8dkG0TbgPCqJvc5JW+aYU/kPC8WOaUVzM1hZ9xWZWoZ4VCmsOHlW/FQF4i4cD4VA4WoXjyIsZKVMNubQJ5h6HQA1irVPGwlOHIDb3JGgGYh6V6Hs/IVNMur8Ewg+3MD81x20ax6Se8UskoOZ6RVE7YoltZ+c6iRGIO3Fa74kVCqCw17DMshHJbD2AIcO/Eiwr1PqQc/4XaD+1bYiETjCYGWFO3DbWint1G2cxScDjlR0w1KX3TysY0Z9Fcy1swz2dKqrWSd9GtfOMjmaIigHkFhr5VcPlBQL1RHaX9Uej8QOtyazdbSf68UO9DStErcgVAvAkZgKDjSdsCCHQgsxH7bzPYbCDgOY/2pDXc12pYq4LFLSWJpHXvVAKvtKykSYwWnlqlL0z1rCpT+2JrwE5pveF0M+zWIlAbaZLCJYQS7ynU+9AULuEHNg/14iETVx9siFfHHkY1WQEMQCi7nGLKxbcVwjjLHAaI9iwJUVkSYF3Z8jskxkqyUZV81huZYlSt/J1dK8Pz4k9vMoBqBBDtRqf59GuFeh/65SraUZQTi/0AEL8z2IXOJeI1L0m2ewCbyO9oRStgWL0ehAMClQBQjv9HKtE3ubhJGl/TjnHdJjFew6KqzOwL4OLSZquEq5XBXi7NwTCGO3bqgnta0Y1CPQ+58pVJenr9uz7Uw/IiUTudfqnzZvonrA6c/6vF+saHwgZ1ZaqS0uT6nXS6lKNvSyn+QCVGgbGGBgqMNzGwKmIvWlWiReZy6eqSg+EtnbpWWceGOiY5SE/0e8HDImSSabXkPF9OpwJBcb4DQfcEB8JKilFBbG7ITdyQNPmHL/pKI60gpmNCOfmkWhsJmJ1OBofiavbFXWXlH2NfrIGAEuXoakqyqjkkq3h+qe0bhXodfDmX6l429a0sSc4ucOrCmsHmy1jOZLohwHi8bHYi8KH6pBxvkJ+tHfdgvVmK/6y/q21BHBhccC/xtuJVXVum7p41aolzpqsp3mIaDWyJ2kAOKUeXFZCLq8OL+2nU7gf2BSzKgTKJOI9qsgirdz7QaqTkKGzIRyLtlePtVWC0mjjjkZ11V7mpRgz3/ifq+hog6mlFlwv1OiSNPgo92/27ouwk4r7yM2EUlwiAuExfEFQTdoKOB0mXvNt//FnN6/fGx7WbwtWsKnPDT1meAeNfo6S2zHIjoULqo0I9DtXjnEjNgVjaVjvrMHFhl5sLm/Wc1gQg0uJ78u7AUfyl3N4i5bgU3GVcZau/Zy2syWtb8MpUeu3QAB6FOfX4ZWNSaV9eTUppuybrGuQv510OrnhXN1RT/L98ccugrbE3+YbSQ1GLWmyUabLjhazZJjK8C+ustC8v1NtQL0cb15hKAACfeDteCqac2eRTSYt/9biCd8qIKUXXtYD1qte2GDCs1zvPebKqUvx+od6GlOND1WoqTh3sd/7076wN3/B8U3qT5/he28e+3jPRKCnFP9Lcf8l7hLVk1p7pe5XWYc9f6Y2vVQnWUDJVNWlXaV6oT9LilifxkiXk/yvF/9S6QW0lYq0Kb5HoqP5CKFKO/kt66Ei3JtObUHtFvfYoLuygFh2xVtasl1LsnEl2Wvx1od6G9BZ/qi0CeSFeohx3yZV4WaHOhlyJl+nacZWDK07/kufq8xudK8n3pFL8d6kU1xbqfEiluFZ6k//QtiLynRGPez35yEc+8pGPfOQjH/nIRz7ykY985KMwCOP/ACoZAfJUzPbRAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export const SearchIcon = ({
  width = 25,
  height = 25,
  fillColor = "currentColor",
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M43.5 10.7916C25.13 10.7916 10.1667 25.7549 10.1667 44.125 C10.1667 62.495 25.13 77.4583 43.5 77.4583C51.4884 77.4583 58.8246 74.6216 64.5742 69.9127L84.4766 89.8151C84.7837 90.135 85.1516 90.3904 85.5587 90.5663C85.9658 90.7423 86.4039 90.8353 86.8474 90.8398C87.2909 90.8443 87.7308 90.7603 88.1414 90.5926C88.552 90.425 88.925 90.1771 89.2386 89.8635C89.5522 89.5499 89.8001 89.1769 89.9677 88.7663C90.1353 88.3557 90.2193 87.9158 90.2148 87.4723C90.2103 87.0289 90.1174 86.5908 89.9414 86.1837C89.7654 85.7766 89.51 85.4087 89.1901 85.1015L69.2878 65.1992C73.9966 59.4496 76.8334 52.1133 76.8334 44.125C76.8334 25.7549 61.87 10.7916 43.5 10.7916ZM43.5 17.4583C58.2671 17.4583 70.1667 29.3579 70.1667 44.125C70.1667 58.892 58.2671 70.7916 43.5 70.7916C28.7329 70.7916 16.8334 58.892 16.8334 44.125C16.8334 29.3579 28.7329 17.4583 43.5 17.4583Z"
      fill={fillColor}
    />
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

export const ThemeIcon = ({
  width = 25,
  height = 25,
  fillColor = "currentColor",
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g
        id="🔍-Product-Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="ic_fluent_dark_theme_24_regular"
          fill={fillColor}
          fillRule="nonzero"
        >
          <path
            d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"
            id="🎨-Color"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export const DoubleRightArrowIcon = ({
  width = 24,
  height = 24,
  fillColor = "currentColor",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M10.2772 18.4623C9.9802 18.751 9.97351 19.2258 10.2623 19.5228C10.551 19.8198 11.0258 19.8265 11.3228 19.5377L10.2772 18.4623ZM18 12L18.5228 12.5377C18.6681 12.3965 18.75 12.2026 18.75 12C18.75 11.7974 18.6681 11.6035 18.5228 11.4623L18 12ZM11.3228 4.46225C11.0258 4.17351 10.551 4.1802 10.2623 4.47719C9.97351 4.77418 9.9802 5.24901 10.2772 5.53775L11.3228 4.46225ZM5.47721 17.2952C5.18021 17.584 5.17351 18.0588 5.46224 18.3558C5.75097 18.6528 6.2258 18.6595 6.52279 18.3708L5.47721 17.2952ZM12 12L12.5228 12.5378C12.668 12.3965 12.75 12.2026 12.75 12C12.75 11.7974 12.668 11.6035 12.5228 11.4622L12 12ZM6.52279 5.62924C6.2258 5.34051 5.75097 5.34721 5.46224 5.64421C5.17351 5.9412 5.18021 6.41603 5.47721 6.70476L6.52279 5.62924ZM11.3228 19.5377L18.5228 12.5377L17.4772 11.4623L10.2772 18.4623L11.3228 19.5377ZM18.5228 11.4623L11.3228 4.46225L10.2772 5.53775L17.4772 12.5377L18.5228 11.4623ZM6.52279 18.3708L12.5228 12.5378L11.4772 11.4622L5.47721 17.2952L6.52279 18.3708ZM12.5228 11.4622L6.52279 5.62924L5.47721 6.70476L11.4772 12.5378L12.5228 11.4622Z"
        fill={fillColor}
      ></path>
    </g>
  </svg>
);

export const ProfileIcon = ({
  width = 24,
  height = 24,
  fillColor = "currentColor",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
        fill={fillColor}
      ></path>
    </g>
  </svg>
);
