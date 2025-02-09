export type IconProps = {
  size?: number
}

export const IconPerson = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export const IconTwitch = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.7855 0L1.5 4.2855V19.7145H6.6435V24L10.929 19.7145H14.355L22.071 12V0H5.7855ZM20.3565 11.1435L16.929 14.571H13.5L10.5 17.571V14.571H6.6435V1.7145H20.3565V11.1435Z"
        fill="currentColor"
      />
      <path
        d="M17.7854 4.71436H16.0709V9.85486H17.7854V4.71436ZM13.0709 4.71436H11.3564V9.85486H13.0709V4.71436Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const IconGithub = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2073 22.581 20.2775 21.05 21.744 19.0076C23.2106 16.9653 23.9996 14.5144 24 12C24 5.37 18.63 0 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const IconBook = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.44662 5.42007C3.79696 4.52293 5.58036 4 7.5 4C9.16769 4 10.7326 4.39467 12 5.08651C13.2674 4.39467 14.8323 4 16.5 4C18.4207 4 20.2031 4.52296 21.5534 5.42007C21.8323 5.60541 22 5.91809 22 6.253V19.253C22 19.6215 21.7973 19.9602 21.4726 20.1343C21.1478 20.3084 20.7536 20.2899 20.4466 20.0859C19.4609 19.431 18.0733 19 16.5 19C14.9276 19 13.539 19.4311 12.5534 20.0859C12.2181 20.3087 11.7819 20.3087 11.4466 20.0859C10.461 19.4311 9.07236 19 7.5 19C5.92764 19 4.53904 19.4311 3.55338 20.0859C3.24644 20.2899 2.85221 20.3084 2.52744 20.1343C2.20268 19.9602 2 19.6215 2 19.253V6.253C2 5.91809 2.16766 5.60541 2.44662 5.42007ZM11 6.81949C10.0603 6.31667 8.84766 6 7.5 6C6.15234 6 4.93967 6.31667 4 6.81949V17.6261C5.0538 17.2225 6.24792 17 7.5 17C8.75208 17 9.9462 17.2225 11 17.6261V6.81949ZM13 17.6261C14.0538 17.2225 15.2479 17 16.5 17C17.7527 17 18.9465 17.2224 20 17.626V6.81947C19.0605 6.31664 17.8485 6 16.5 6C15.1523 6 13.9397 6.31667 13 6.81949V17.6261Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const IconEnvelope = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.75 3H2.25C1.00734 3 0 4.00734 0 5.25V18.75C0 19.9927 1.00734 21 2.25 21H21.75C22.9927 21 24 19.9927 24 18.75V5.25C24 4.00734 22.9927 3 21.75 3ZM21.75 5.25V7.16273C20.699 8.01862 19.0234 9.3495 15.4412 12.1545C14.6518 12.7754 13.0881 14.2672 12 14.2498C10.9121 14.2674 9.34786 12.7752 8.55877 12.1545C4.97719 9.34992 3.30117 8.01877 2.25 7.16273V5.25H21.75ZM2.25 18.75V10.0499C3.32409 10.9054 4.8473 12.1059 7.16897 13.9239C8.19352 14.7304 9.98775 16.5108 12 16.5C14.0024 16.5108 15.7739 14.7563 16.8306 13.9243C19.1522 12.1064 20.6759 10.9055 21.75 10.05V18.75H2.25Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const IconTrash = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H19.9311L19.1305 19.213C19.1305 19.2131 19.1305 19.2129 19.1305 19.213C19.0765 19.9698 18.7379 20.6783 18.1826 21.1954C17.6274 21.7125 16.8968 22 16.138 22H7.86202C7.10323 22 6.37262 21.7125 5.81735 21.1954C5.26213 20.6783 4.92347 19.97 4.86954 19.2132C4.86953 19.2132 4.86955 19.2133 4.86954 19.2132L4.06886 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H4.99175C4.99795 5.99994 5.00414 5.99994 5.01032 6H8V4C8 3.46957 8.21071 2.96086 8.58579 2.58579ZM6.07395 8L6.86446 19.0708C6.88242 19.3231 6.99533 19.5594 7.18042 19.7318C7.36551 19.9042 7.60905 20 7.862 20H16.138C16.391 20 16.6345 19.9042 16.8196 19.7318C17.0047 19.5594 17.1176 19.3233 17.1355 19.071L17.926 8H6.07395ZM14 6H10V4H14V6ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const IconToggleOff = ({ size }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M16.5 6C18.0913 6 19.6174 6.63214 20.7426 7.75736C21.8679 8.88258 22.5 10.4087 22.5 12C22.5 13.5913 21.8679 15.1174 20.7426 16.2426C19.6174 17.3679 18.0913 18 16.5 18H12C12.9322 17.302 13.6887 16.3963 14.2095 15.3547C14.7303 14.3132 15.0009 13.1645 15 12C15.0009 10.8355 14.7303 9.68683 14.2095 8.64526C13.6887 7.6037 12.9322 6.69795 12 6H16.5ZM7.5 18C5.9087 18 4.38258 17.3679 3.25736 16.2426C2.13214 15.1174 1.5 13.5913 1.5 12C1.5 10.4087 2.13214 8.88258 3.25736 7.75736C4.38258 6.63214 5.9087 6 7.5 6C9.0913 6 10.6174 6.63214 11.7426 7.75736C12.8679 8.88258 13.5 10.4087 13.5 12C13.5 13.5913 12.8679 15.1174 11.7426 16.2426C10.6174 17.3679 9.0913 18 7.5 18ZM0 12C0 13.9891 0.790176 15.8968 2.1967 17.3033C3.60322 18.7098 5.51088 19.5 7.5 19.5H16.5C18.4891 19.5 20.3968 18.7098 21.8033 17.3033C23.2098 15.8968 24 13.9891 24 12C24 10.0109 23.2098 8.10322 21.8033 6.6967C20.3968 5.29018 18.4891 4.5 16.5 4.5H7.5C5.51088 4.5 3.60322 5.29018 2.1967 6.6967C0.790176 8.10322 0 10.0109 0 12Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const IconToggleOn = ({ size }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M7.5 4.5C5.51088 4.5 3.60322 5.29018 2.1967 6.6967C0.790176 8.10322 0 10.0109 0 12C0 13.9891 0.790176 15.8968 2.1967 17.3033C3.60322 18.7098 5.51088 19.5 7.5 19.5H16.5C18.4891 19.5 20.3968 18.7098 21.8033 17.3033C23.2098 15.8968 24 13.9891 24 12C24 10.0109 23.2098 8.10322 21.8033 6.6967C20.3968 5.29018 18.4891 4.5 16.5 4.5H7.5ZM16.5 18C14.9087 18 13.3826 17.3679 12.2574 16.2426C11.1321 15.1174 10.5 13.5913 10.5 12C10.5 10.4087 11.1321 8.88258 12.2574 7.75736C13.3826 6.63214 14.9087 6 16.5 6C18.0913 6 19.6174 6.63214 20.7426 7.75736C21.8679 8.88258 22.5 10.4087 22.5 12C22.5 13.5913 21.8679 15.1174 20.7426 16.2426C19.6174 17.3679 18.0913 18 16.5 18Z"
        fill="currentColor"
      />
    </svg>
  )
}
