import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const Logos = {
  persona: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-full text-foreground"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  ),
  vite: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={46}
      viewBox="0 0 48 46"
      fill="none"
    >
      <path
        d="M25.9456 44.9383C25.2821 45.7827 23.925 45.3131 23.925 44.2403V33.9369C23.925 32.6875 22.9126 31.6751 21.6631 31.6751H10.287C9.36714 31.6751 8.83075 30.6346 9.36713 29.8871L16.8464 19.4157C17.917 17.9185 16.8464 15.8376 15.0046 15.8376H1.23731C0.317479 15.8376 -0.218913 14.7972 0.317475 14.0497L10.0134 0.4741C10.2266 0.176825 10.5692 0.000183105 10.9332 0.000183105H39.8271C40.7469 0.000183105 41.2833 1.04065 40.7469 1.78814L33.2676 12.2595C32.197 13.7567 33.2676 15.8376 35.1094 15.8376H46.4856C47.4291 15.8376 47.959 16.9255 47.3753 17.6687L25.9478 44.9404L25.9456 44.9383Z"
        fill="#863BFF"
      />
      <mask
        id="mask0_2002_17158"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={46}
      >
        <path
          d="M25.8416 44.9381C25.1781 45.7825 23.821 45.3129 23.821 44.2401V33.9368C23.821 32.6873 22.8085 31.6749 21.5591 31.6749H10.183C9.26313 31.6749 8.72674 30.6344 9.26313 29.8869L16.7424 19.4155C17.813 17.9184 16.7424 15.8374 14.9006 15.8374H1.1333C0.213475 15.8374 -0.322917 14.797 0.213471 14.0495L9.90938 0.473917C10.1226 0.176641 10.4652 0 10.8292 0H39.7231C40.6429 0 41.1793 1.04046 40.6429 1.78796L33.1636 12.2594C32.093 13.7565 33.1636 15.8374 35.0054 15.8374H46.3816C47.3251 15.8374 47.855 16.9253 47.2713 17.6685L25.8438 44.9402L25.8416 44.9381Z"
          fill="black"
        />
      </mask>
      <g mask="url(#mask0_2002_17158)">
        <g filter="url(#filter0_f_2002_17158)">
          <ellipse
            cx={5.50802}
            cy={14.7043}
            rx={5.50802}
            ry={14.7043}
            transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -4.46924 31.5157)"
            fill="#EDE6FF"
          />
        </g>
        <g filter="url(#filter1_f_2002_17158)">
          <ellipse
            cx={10.3995}
            cy={29.8514}
            rx={10.3995}
            ry={29.8514}
            transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -39.3281 7.88272)"
            fill="#EDE6FF"
          />
        </g>
        <g filter="url(#filter2_f_2002_17158)">
          <ellipse
            cx={5.50802}
            cy={30.4868}
            rx={5.50802}
            ry={30.4868}
            transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -40.4673 11.3212)"
            fill="#7E14FF"
          />
        </g>
        <g filter="url(#filter3_f_2002_17158)">
          <ellipse
            cx={5.50802}
            cy={30.5986}
            rx={5.50802}
            ry={30.5986}
            transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -35.8721 29.3204)"
            fill="#7E14FF"
          />
        </g>
        <g filter="url(#filter4_f_2002_17158)">
          <ellipse
            cx={5.50802}
            cy={30.5986}
            rx={5.50802}
            ry={30.5986}
            transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -34.3398 30.4693)"
            fill="#7E14FF"
          />
        </g>
        <g filter="url(#filter5_f_2002_17158)">
          <ellipse
            cx={14.0715}
            cy={22.0783}
            rx={14.0715}
            ry={22.0783}
            transform="matrix(0.0584509 -0.99829 -0.99829 -0.0584509 74.3486 26.8633)"
            fill="#EDE6FF"
          />
        </g>
        <g filter="url(#filter6_f_2002_17158)">
          <ellipse
            cx={3.47034}
            cy={21.5008}
            rx={3.47034}
            ry={21.5008}
            transform="matrix(-0.0172986 -0.99985 -0.99985 0.0172986 75.7944 18.0627)"
            fill="#7E14FF"
          />
        </g>
        <g filter="url(#filter7_f_2002_17158)">
          <ellipse
            cx={3.47034}
            cy={21.5008}
            rx={3.47034}
            ry={21.5008}
            transform="matrix(-0.0172986 -0.99985 -0.99985 0.0172986 75.7944 18.0627)"
            fill="#7E14FF"
          />
        </g>
        <g filter="url(#filter8_f_2002_17158)">
          <ellipse
            cx={0.386861}
            cy={8.97156}
            rx={4.40666}
            ry={29.1076}
            transform="rotate(39.5103 0.386861 8.97156)"
            fill="#7E14FF"
          />
        </g>
        <g filter="url(#filter9_f_2002_17158)">
          <ellipse
            cx={47.5226}
            cy={-6.09166}
            rx={4.40666}
            ry={29.1076}
            transform="rotate(37.8923 47.5226 -6.09166)"
            fill="#7E14FF"
          />
        </g>
        <g filter="url(#filter10_f_2002_17158)">
          <ellipse
            cx={41.4121}
            cy={6.3335}
            rx={5.9715}
            ry={9.66515}
            transform="rotate(37.8923 41.4121 6.3335)"
            fill="#47BFFF"
          />
        </g>
        <g filter="url(#filter11_f_2002_17158)">
          <ellipse
            cx={-1.87921}
            cy={38.3321}
            rx={4.40666}
            ry={29.1076}
            transform="rotate(37.8923 -1.87921 38.3321)"
            fill="#7E14FF"
          />
        </g>
        <g filter="url(#filter12_f_2002_17158)">
          <ellipse
            cx={-1.87921}
            cy={38.3321}
            rx={4.40666}
            ry={29.1076}
            transform="rotate(37.8923 -1.87921 38.3321)"
            fill="#7E14FF"
          />
        </g>
        <g filter="url(#filter13_f_2002_17158)">
          <ellipse
            cx={35.6511}
            cy={29.9069}
            rx={4.40666}
            ry={29.1076}
            transform="rotate(37.8923 35.6511 29.9069)"
            fill="#7E14FF"
          />
        </g>
        <g filter="url(#filter14_f_2002_17158)">
          <ellipse
            cx={38.4178}
            cy={32.4}
            rx={5.9715}
            ry={15.2974}
            transform="rotate(37.8923 38.4178 32.4)"
            fill="#47BFFF"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_2002_17158"
          x={-19.7697}
          y={16.1493}
          width={60.0452}
          height={41.6535}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={7.65926}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter1_f_2002_17158"
          x={-54.613}
          y={-7.53303}
          width={90.3397}
          height={51.4368}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={7.65926}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter2_f_2002_17158"
          x={-49.6403}
          y={2.03032}
          width={79.3554}
          height={29.4}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter3_f_2002_17158"
          x={-45.0451}
          y={20.0292}
          width={79.579}
          height={29.4}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter4_f_2002_17158"
          x={-43.5129}
          y={21.1781}
          width={79.579}
          height={29.4}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter5_f_2002_17158"
          x={15.7557}
          y={-17.9006}
          width={74.7493}
          height={58.852}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={7.65926}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter6_f_2002_17158"
          x={23.5481}
          y={2.28368}
          width={61.3773}
          height={25.3622}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter7_f_2002_17158"
          x={23.5481}
          y={2.28368}
          width={61.3773}
          height={25.3622}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter8_f_2002_17158"
          x={-27.6359}
          y={-22.8531}
          width={56.0453}
          height={63.6493}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter9_f_2002_17158"
          x={20.1155}
          y={-38.4147}
          width={54.8139}
          height={64.646}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter10_f_2002_17158"
          x={24.6414}
          y={-11.3229}
          width={33.5414}
          height={35.3129}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter11_f_2002_17158"
          x={-29.2863}
          y={6.00905}
          width={54.8139}
          height={64.646}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter12_f_2002_17158"
          x={-29.2863}
          y={6.00905}
          width={54.8139}
          height={64.646}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter13_f_2002_17158"
          x={8.24395}
          y={-2.41615}
          width={54.8139}
          height={64.646}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
        <filter
          id="filter14_f_2002_17158"
          x={38.4178}
          y={32.4}
          width={39.4091}
          height={43.6229}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={4.59556}
            result="effect1_foregroundBlur_2002_17158"
          />
        </filter>
      </defs>
    </svg>
  ),
  astro: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <defs>
        <linearGradient
          id="astro-gradient"
          x1="4.8"
          x2="14.4"
          y1="9.6"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83333" />
          <stop offset="1" stopColor="#F041FF" />
        </linearGradient>
      </defs>
      <g>
        <path
          fill="url(#astro-gradient)"
          d="M47.7 107.1c-5.5-5-7.2-15.7-4.9-23.4 4 4.9 9.6 6.4 15.4 7.3 8.9 1.3 17.6.8 25.9-3.2l2.8-1.7a18 18 0 0 1-7.2 20l-5.5 3.8c-5.6 3.8-7.2 8.2-5 14.7l.2.7a14 14 0 0 1-6.6-5.6 15.8 15.8 0 0 1-2.6-8.6c0-1.5 0-3-.2-4.5-.5-3.7-2.2-5.3-5.5-5.4-3.3-.1-5.9 2-6.6 5.2l-.2.7Z"
        />
        <path
          className="fill-black dark:fill-white"
          d="M16 82.4s16.5-8 33-8l12.4-38.3c.5-2 1.8-3.2 3.3-3.2 1.6 0 3 1.3 3.4 3.2l12.4 38.3c19.6 0 33 8 33 8l-28-76c-.8-2.3-2.2-3.7-4-3.7H48c-1.8 0-3.1 1.4-4 3.7l-28 76Z"
        />
      </g>
    </svg>
  ),
  starlight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 26">
      <defs>
        <linearGradient
          id="starlight-gradient"
          x1="0"
          x2="25"
          y1="0"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FCECC5" />
          <stop offset="1" stopColor="#EEBD52" />
        </linearGradient>
      </defs>
      <path
        fill="url(#starlight-gradient)"
        fillRule="evenodd"
        d="M15.22 7.77 12.06.94 8.91 7.77l-.15.29L7 6.3a1.18 1.18 0 1 0-1.68 1.68l1.75 1.74-.2.1-.04.02L0 13l6.83 3.16.24.11-1.75 1.76A1.18 1.18 0 1 0 7 19.7l1.76-1.76.15.3 3.15 6.82 3.16-6.83.12-.24 1.71 1.71a1.18 1.18 0 1 0 1.68-1.67L17 16.3l.29-.15L24.13 13 17.3 9.84 17 9.7l1.73-1.73a1.18 1.18 0 1 0-1.68-1.67L15.35 8a4.15 4.15 0 0 1-.12-.21l-.01-.03Zm-3.17.36-.42.9a7.27 7.27 0 0 1-3.55 3.55l-.9.42.9.42a7.27 7.27 0 0 1 3.55 3.55l.42.9.42-.9a7.27 7.27 0 0 1 3.55-3.55l.9-.42-.9-.42a7.27 7.27 0 0 1-3.55-3.55l-.42-.9Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#starlight-gradient)"
        d="M22.27 4.43a1.18 1.18 0 1 0-1.67-1.68l-.57.57a1.18 1.18 0 0 0 1.68 1.67l.56-.56Z"
      />
      <path
        fill="url(#starlight-gradient)"
        d="M4.2 5.18c-.46.46-1.2.46-1.67 0l-.56-.56a1.18 1.18 0 0 1 1.67-1.68l.57.57c.46.46.46 1.2 0 1.67Z"
      />
      <path
        fill="url(#starlight-gradient)"
        d="M4.2 20.82a1.18 1.18 0 0 0-1.67 0l-.56.56a1.18 1.18 0 0 0 1.67 1.68l.57-.57c.46-.46.46-1.2 0-1.67Z"
      />
      <path
        fill="url(#starlight-gradient)"
        d="M22.27 21.57a1.18 1.18 0 0 1-1.67 1.68l-.57-.57a1.19 1.19 0 0 1 1.68-1.67l.56.56Z"
      />
    </svg>
  ),
};

const Projects: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-normal tracking-tight text-primary md:text-4xl lg:text-5xl">
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative flex flex-col h-100 w-full items-center justify-center overflow-hidden">
          <OrbitingCircles radius={0} iconSize={60}>
            <Logos.persona />
          </OrbitingCircles>
          <OrbitingCircles radius={70} iconSize={60} speed={2}>
            <Logos.vite />
          </OrbitingCircles>
          <OrbitingCircles radius={110} iconSize={50}>
            <Logos.astro />
            <Logos.starlight />
          </OrbitingCircles>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
