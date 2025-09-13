import NodejsLogo from '@/assets/skills/node.png';
import GoLogo from '@/assets/skills/go.png';
import { Skill } from '@/components/Skills';
import NestjsLogo from '@/assets/skills/nestjs.png';
import MysqlLogo from '@/assets/skills/mysql.png';
import PostgresqlLogo from '@/assets/skills/postgres.png';
import OracleLogo from '@/assets/skills/oracle.png';
import MongodbLogo from '@/assets/skills/mongo.png';
import GraphqlLogo from '@/assets/skills/graphql.png';
import JwtLogo from '@/assets/skills/jwt.png';
import OauthLogo from '@/assets/skills/next-auth.png';

const backEndSkills: Skill[] = [
	{ name: 'Node JS', logo: NodejsLogo },
	{ name: 'Nest JS', logo: NestjsLogo },
	{ name: 'Golang', logo: GoLogo, classNames: 'h-auto w-6 object-contain' },
	{ name: 'GraphQL', logo: GraphqlLogo },
	{ name: 'JWT', logo: JwtLogo },
	{ name: 'OAuth', logo: OauthLogo },
	{ name: 'MySQL', logo: MysqlLogo },
	{ name: 'PostgreSQL', logo: PostgresqlLogo },
	{ name: 'Oracle', logo: OracleLogo },
	{ name: 'MongoDB', logo: MongodbLogo },
];

export default backEndSkills;
