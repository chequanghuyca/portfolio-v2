import ReactLogo from '@/assets/skills/react.png';
import TypeScriptLogo from '@/assets/skills/ts.png';
import NextjsLogo from '@/assets/skills/nextjs.png';
import TailwindLogo from '@/assets/skills/tailwind.png';
import BootstrapLogo from '@/assets/skills/bootstrap.png';
import HTML5Logo from '@/assets/skills/html-5.png';
import CSSLogo from '@/assets/skills/css-3.png';
import Web3Logo from '@/assets/skills/web3.png';
import ReduxLogo from '@/assets/skills/redux.png';
import ReactQueryLogo from '@/assets/skills/react-query.png';
import ZustandLogo from '@/assets/skills/zustand.png';
import ViteLogo from '@/assets/skills/vite.png';
import { Skill } from '@/components/Skills';

const frontEndSkills: Skill[] = [
	{ name: 'Web3', logo: Web3Logo },
	{ name: 'React', logo: ReactLogo },
	{ name: 'Next JS', logo: NextjsLogo },
	{ name: 'Vite', logo: ViteLogo },
	{ name: 'React Query - Tanstack', logo: ReactQueryLogo },
	{ name: 'Zustand', logo: ZustandLogo },
	{ name: 'TypeScript', logo: TypeScriptLogo },
	{ name: 'Redux', logo: ReduxLogo },
	{ name: 'Tailwind CSS', logo: TailwindLogo },
	{ name: 'Bootstrap', logo: BootstrapLogo },
	{ name: 'HTML5', logo: HTML5Logo },
	{ name: 'CSS/SCSS', logo: CSSLogo },
];

export default frontEndSkills;
