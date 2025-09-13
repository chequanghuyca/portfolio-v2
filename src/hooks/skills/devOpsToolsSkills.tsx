import { Skill } from '@/components/Skills';
import DockerLogo from '@/assets/skills/docker.png';
import GithubLogo from '@/assets/skills/github.png';
import GitlabLogo from '@/assets/skills/gitlab.png';
import DigitalOceanLogo from '@/assets/skills/do.png';
import CloudflareLogo from '@/assets/skills/cloudflare.png';
import CiCdLogo from '@/assets/skills/cicd.png';
import NginxLogo from '@/assets/skills/nginx.png';

const devOpsToolsSkills: Skill[] = [
	{ name: 'GitHub', logo: GithubLogo },
	{ name: 'GitLab', logo: GitlabLogo },
	{ name: 'CI/CD', logo: CiCdLogo },
	{ name: 'Docker', logo: DockerLogo },
	{ name: 'Nginx', logo: NginxLogo },
	{ name: 'Degital Ocean', logo: DigitalOceanLogo },
	{ name: 'Cloudflare', logo: CloudflareLogo, classNames: 'h-auto w-6 object-contain' },
];

export default devOpsToolsSkills;
