import { FC } from 'react'
import { IconProps } from './type'

export const MetaMask: FC<IconProps> = ({
  height = 32,
  width = 32,
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={className}
      viewBox="0 0 32 32"
    >
      <rect width="32" height="32" fill="#EAE0D7" rx="16" />
      <path
        fill="#E2761B"
        d="m24.924 6.667-7.735 5.768 1.43-3.403 6.305-2.365Z"
      />
      <path
        fill="#E4761B"
        d="m7.068 6.667 7.673 5.823-1.36-3.458-6.313-2.365ZM22.14 20.039l-2.06 3.17 4.408 1.217 1.267-4.317-3.615-.07Zm-15.89.07 1.26 4.317 4.408-1.218-2.06-3.17-3.607.071Z"
      />
      <path
        fill="#E4761B"
        d="m11.67 14.684-1.229 1.865 4.377.196-.155-4.723-2.993 2.662Zm8.652 0-3.032-2.717-.101 4.778 4.369-.196-1.236-1.865Zm-8.404 8.524 2.628-1.288-2.27-1.78-.358 3.068Zm5.527-1.288 2.636 1.288-.366-3.068-2.27 1.78Z"
      />
      <path
        fill="#D7C1B3"
        d="m20.08 23.208-2.634-1.288.21 1.725-.024.726 2.449-1.163Zm-8.161 0 2.448 1.163-.015-.726.194-1.725-2.627 1.288Z"
      />
      <path
        fill="#233447"
        d="m14.406 19-2.192-.647 1.547-.71.645 1.358Zm3.18 0 .645-1.358 1.555.71-2.2.649Z"
      />
      <path
        fill="#CD6116"
        d="m11.919 23.208.373-3.17-2.433.071 2.06 3.099Zm7.789-3.17.373 3.17 2.06-3.099-2.433-.07Zm1.85-3.489-4.369.195.404 2.256.646-1.358 1.554.71 1.765-1.803Zm-9.344 1.804 1.555-.71.637 1.357.412-2.256-4.377-.195 1.773 1.804Z"
      />
      <path
        fill="#E4751F"
        d="m10.441 16.55 1.835 3.59-.062-1.787-1.773-1.804Zm9.352 1.803-.078 1.787 1.843-3.59-1.765 1.803Zm-4.975-1.609L14.406 19l.513 2.662.117-3.505-.218-1.413Zm2.371 0-.21 1.406.093 3.512.521-2.662-.404-2.256Z"
      />
      <path
        fill="#F6851B"
        d="m17.593 19-.52 2.662.373.258 2.27-1.78.077-1.788-2.2.648Zm-5.379-.648.062 1.788 2.27 1.78.373-.258L14.406 19l-2.192-.648Z"
      />
      <path
        fill="#C0AD9E"
        d="m17.632 24.371.023-.726-.194-.171h-2.93l-.18.171.016.726-2.449-1.163.856.703 1.733 1.21h2.977l1.742-1.21.855-.703-2.449 1.163Z"
      />
      <path
        fill="#161616"
        d="m17.445 21.92-.373-.257H14.92l-.373.257-.194 1.725.178-.171h2.931l.194.171-.21-1.725Z"
      />
      <path
        fill="#763D16"
        d="m25.25 12.81.661-3.185-.987-2.958-7.478 5.573 2.876 2.444 4.066 1.194.901-1.054-.388-.28.622-.57-.482-.375.621-.476-.412-.313ZM6.088 9.625l.661 3.185-.42.313.622.476-.474.374.622.57-.389.281.894 1.054 4.066-1.194 2.876-2.444-7.478-5.573-.98 2.958Z"
      />
      <path
        fill="#F6851B"
        d="m24.388 15.878-4.066-1.194 1.236 1.865-1.842 3.591 2.425-.031h3.615l-1.368-4.231ZM11.67 14.684l-4.066 1.194-1.352 4.231h3.607l2.417.031-1.834-3.59 1.228-1.866Zm5.52 2.06.256-4.504 1.181-3.208H13.38l1.166 3.208.272 4.504.094 1.421.007 3.498h2.154l.015-3.498.101-1.42Z"
      />
    </svg>
  )
}
